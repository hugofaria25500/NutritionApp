import { useState, type Dispatch, type SetStateAction } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { useAppFonts } from "@/components/ui/useAppFonts";
import OnboardingActions from "@/features/onboarding/components/OnboardingActions";
import OnboardingInfo from "@/features/onboarding/components/OnboardingInfo";
import OnboardingIntro from "@/features/onboarding/components/OnboardingIntro";
import OnboardingLayout from "@/features/onboarding/components/OnboardingLayout";
import OnboardingOptionCard, {
  OnboardingOption,
} from "@/features/onboarding/components/OnboardingOptionCard";
import OnboardingSection from "@/features/onboarding/components/OnboardingSection";

const restrictions: OnboardingOption[] = [
  { id: "lactose-free", title: "Sem lactose", description: "Evita laticínios e derivados.", icon: "flask-outline" },
  { id: "gluten-free", title: "Sem glúten", description: "Evita alimentos com glúten.", icon: "nutrition-outline" },
  { id: "vegetarian", title: "Vegetariano", description: "Não consome carne.", icon: "leaf-outline" },
  { id: "vegan", title: "Vegan", description: "Sem produtos de origem animal.", icon: "leaf-outline" },
  { id: "pescetarian", title: "Pescetariano", description: "Consome peixe e marisco.", icon: "fish-outline" },
  { id: "sugar-free", title: "Sem açúcar adicionado", description: "Evita açúcar refinado.", icon: "nutrition-outline" },
  { id: "low-sodium", title: "Baixo teor de sódio", description: "Evita alimentos muito salgados.", icon: "water-outline" },
  { id: "high-protein", title: "Alta proteína", description: "Prefere refeições ricas em proteína.", icon: "barbell-outline" },
  { id: "other", title: "Outra restrição", description: "Especifica a tua preferência.", icon: "ellipsis-horizontal-circle-outline" },
  { id: "no-restrictions", title: "Não tenho restrições", description: "Posso comer todos os alimentos.", icon: "checkmark-circle-outline" },
];

const allergies: OnboardingOption[] = [
  { id: "peanuts", title: "Amendoim", description: "Pode causar reações graves.", icon: "nutrition-outline" },
  { id: "tree-nuts", title: "Frutos de casca rija", description: "Inclui amêndoas, nozes, avelãs, etc.", icon: "nutrition-outline" },
  { id: "milk", title: "Leite", description: "Inclui leite, queijo, iogurte, etc.", icon: "water-outline" },
  { id: "eggs", title: "Ovos", description: "Inclui ovo e derivados.", icon: "ellipse-outline" },
  { id: "fish", title: "Peixe", description: "Inclui peixe e derivados.", icon: "fish-outline" },
  { id: "shellfish", title: "Marisco", description: "Inclui crustáceos e derivados.", icon: "fish-outline" },
  { id: "soy", title: "Soja", description: "Inclui produtos de soja.", icon: "nutrition-outline" },
  { id: "mustard", title: "Mostarda", description: "Inclui mostarda e derivados.", icon: "nutrition-outline" },
  { id: "other", title: "Outra alergia", description: "Especifica o alimento.", icon: "ellipsis-horizontal-circle-outline" },
  { id: "no-allergies", title: "Não tenho alergias", description: "Não tenho alergias alimentares.", icon: "checkmark-circle-outline" },
];

export default function RestrictionsScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([]);
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

  if (!fontsLoaded) return null;

  const toggle = (
    id: string,
    setter: Dispatch<SetStateAction<string[]>>,
  ) => {
    setter((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const toggleAllergy = (id: string) => {
    if (id === "no-allergies") {
      setSelectedAllergies(["no-allergies"]);
      return;
    }

    setSelectedAllergies((current) => {
      const withoutNoAllergies = current.filter((item) => item !== "no-allergies");
      return withoutNoAllergies.includes(id)
        ? withoutNoAllergies.filter((item) => item !== id)
        : [...withoutNoAllergies, id];
    });
  };

  const hasSelection =
    selectedRestrictions.length > 0 && selectedAllergies.length > 0;

  return (
    <OnboardingLayout backRoute="/preferences" activeStep={3}>
      <OnboardingIntro
        subtitleMaxWidth={270}
        title={<>Há alguma coisa{"\n"}que devemos evitar?</>}
        subtitle="Seleciona as tuas restrições e alergias para receberes recomendações mais seguras e adequadas a ti."
      />

      <OnboardingSection
        icon="leaf-outline"
        title="Restrições alimentares"
        subtitle={
          <>
            Seleciona os ingredientes ou alimentos que preferes{"\n"}evitar.
          </>
        }
      >
        <View style={styles.grid}>
          {restrictions.map((option) => (
            <OnboardingOptionCard
              key={option.id}
              option={option}
              selected={selectedRestrictions.includes(option.id)}
              onPress={() => toggle(option.id, setSelectedRestrictions)}
            />
          ))}
        </View>
      </OnboardingSection>

      <View style={styles.divider} />

      <OnboardingSection
        icon="warning-outline"
        title="Alergias alimentares"
        subtitle={
          <>
            Seleciona os alimentos que podem causar reações{"\n"}adversas.
          </>
        }
      >
        <View style={styles.grid}>
          {allergies.map((option) => (
            <OnboardingOptionCard
              key={option.id}
              option={option}
              selected={selectedAllergies.includes(option.id)}
              onPress={() => toggleAllergy(option.id)}
            />
          ))}
        </View>
      </OnboardingSection>

      <OnboardingInfo icon="shield-checkmark-outline">
        Usamos estas informações para evitar recomendar receitas que contenham estes ingredientes.
      </OnboardingInfo>

      <OnboardingActions
        disabled={!hasSelection}
        onContinue={() => {
          console.log({
            restrictions: selectedRestrictions,
            allergies: selectedAllergies,
          });
          router.replace("/favorites");
        }}
        onLater={() => router.replace("/favorites")}
      />
    </OnboardingLayout>
  );
}

const styles = {
  grid: {
    width: "100%" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    justifyContent: "space-between" as const,
    rowGap: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#E8EAE6",
    marginVertical: 10,
  },
};

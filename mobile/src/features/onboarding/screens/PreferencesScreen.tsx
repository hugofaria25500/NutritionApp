import { useRouter } from "expo-router";
import { useState, type Dispatch, type SetStateAction } from "react";
import { View } from "react-native";

import { useAppFonts } from "@/components/ui/useAppFonts";
import OnboardingActions from "@/features/onboarding/components/OnboardingActions";
import OnboardingInfo from "@/features/onboarding/components/OnboardingInfo";
import OnboardingIntro from "@/features/onboarding/components/OnboardingIntro";
import OnboardingLayout from "@/features/onboarding/components/OnboardingLayout";
import OnboardingOptionCard, {
  OnboardingOption,
} from "@/features/onboarding/components/OnboardingOptionCard";
import OnboardingSection from "@/features/onboarding/components/OnboardingSection";

const dietaryStyles: OnboardingOption[] = [
  { id: "everything", title: "Tudo", description: "Sem restrições", icon: "globe-outline" },
  { id: "vegetarian", title: "Vegetariana", description: "Sem carne", icon: "leaf-outline" },
  { id: "vegan", title: "Vegan", description: "Sem produtos de origem animal", icon: "leaf-outline" },
  { id: "pescetarian", title: "Pescetariana", description: "Peixe e marisco", icon: "fish-outline" },
  { id: "high-protein", title: "Alta proteína", description: "Foco em proteína", icon: "fitness-outline" },
  { id: "other", title: "Outro", description: "Personalizado", icon: "ellipsis-horizontal-circle-outline" },
];

const preferences: OnboardingOption[] = [
  { id: "quick-recipes", title: "Refeições rápidas", description: "Pouco tempo para cozinhar", icon: "flash-outline" },
  { id: "homemade", title: "Caseira", description: "Comida feita em casa", icon: "home-outline" },
  { id: "mediterranean", title: "Mediterrânica", description: "Estilo mediterrânico", icon: "leaf-outline" },
  { id: "traditional", title: "Comida tradicional", description: "Sabores de sempre", icon: "restaurant-outline" },
  { id: "budget", title: "Económica", description: "Poupar nas compras", icon: "cash-outline" },
  { id: "more-vegetables", title: "Mais vegetais", description: "Mais vegetais no dia a dia", icon: "nutrition-outline" },
  { id: "low-carbs", title: "Baixo em hidratos", description: "Menos hidratos", icon: "nutrition-outline" },
  { id: "low-fat", title: "Baixo teor de gordura", description: "Menos gordura", icon: "water-outline" },
  { id: "other", title: "Outro", description: "Personalizado", icon: "ellipsis-horizontal-circle-outline" },
];

export default function PreferencesScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const [selectedDietaryStyles, setSelectedDietaryStyles] = useState<string[]>([]);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  if (!fontsLoaded) return null;

  const toggle = (
    id: string,
    setter: Dispatch<SetStateAction<string[]>>,
  ) => {
    setter((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const hasSelection =
    selectedDietaryStyles.length > 0 && selectedPreferences.length > 0;

  return (
    <OnboardingLayout backRoute="/goals" activeStep={2}>
      <OnboardingIntro
        subtitleMaxWidth={210}
        title={<>Como gostas{"\n"}de comer?</>}
        subtitle={
          <>
            Seleciona as opções que melhor{"\n"}
            descrevem o teu estilo alimentar.
          </>
        }
      />

      <OnboardingSection
        icon="restaurant-outline"
        title="Estilo de alimentação"
        subtitle="Qual o estilo que mais se adequa a ti?"
      >
        <View style={styles.grid}>
          {dietaryStyles.map((option) => (
            <OnboardingOptionCard
              key={option.id}
              option={option}
              selected={selectedDietaryStyles.includes(option.id)}
              onPress={() => toggle(option.id, setSelectedDietaryStyles)}
            />
          ))}
        </View>
      </OnboardingSection>

      <View style={styles.divider} />

      <OnboardingSection
        icon="heart-outline"
        title="Preferências alimentares"
        subtitle="Que tipo de refeições preferes?"
      >
        <View style={styles.grid}>
          {preferences.map((option) => (
            <OnboardingOptionCard
              key={option.id}
              option={option}
              selected={selectedPreferences.includes(option.id)}
              onPress={() => toggle(option.id, setSelectedPreferences)}
            />
          ))}
        </View>
      </OnboardingSection>

      <OnboardingInfo icon="bulb-outline">
        Podes ajustar estas preferências mais tarde nas definições da tua conta.
      </OnboardingInfo>

      <OnboardingActions
        disabled={!hasSelection}
        onContinue={() => {
          console.log({
            dietaryStyles: selectedDietaryStyles,
            preferences: selectedPreferences,
          });
          router.replace("/restrictions");
        }}
        onLater={() => router.replace("/restrictions")}
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

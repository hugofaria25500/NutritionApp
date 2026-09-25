import { useRouter } from "expo-router";
import { useState } from "react";
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

const foods: OnboardingOption[] = [
  { id: "fruits", title: "Frutas", description: "Ex.: maçã, banana, laranja, frutos vermelhos.", icon: "nutrition-outline" },
  { id: "vegetables", title: "Legumes", description: "Ex.: brócolos, cenoura, espinafres, courgette.", icon: "nutrition-outline" },
  { id: "grains", title: "Cereais", description: "Ex.: arroz, aveia, quinoa, massa.", icon: "nutrition-outline" },
  { id: "meat", title: "Carnes", description: "Ex.: frango, vaca, porco, peru.", icon: "nutrition-outline" },
  { id: "fish", title: "Peixe", description: "Ex.: salmão, atum, dourada, bacalhau.", icon: "fish-outline" },
  { id: "seafood", title: "Marisco", description: "Ex.: camarão, amêijoa, mexilhão, polvo.", icon: "fish-outline" },
  { id: "eggs", title: "Ovos", description: "Versáteis e nutritivos.", icon: "ellipse-outline" },
  { id: "dairy", title: "Laticínios", description: "Ex.: leite, iogurte, queijo, skyr.", icon: "water-outline" },
  { id: "legumes", title: "Leguminosas", description: "Ex.: feijão, grão-de-bico, lentilhas.", icon: "nutrition-outline" },
  { id: "nuts", title: "Frutos secos", description: "Ex.: amêndoas, nozes, avelãs.", icon: "nutrition-outline" },
  { id: "healthy-fats", title: "Gorduras saudáveis", description: "Ex.: azeite, abacate, sementes.", icon: "water-outline" },
  { id: "herbs-spices", title: "Ervas e especiarias", description: "Ex.: alho, cebola, tomilho, manjericão.", icon: "leaf-outline" },
  { id: "desserts", title: "Doces e sobremesas", description: "Ex.: chocolate, fruta, sobremesas saudáveis.", icon: "ice-cream-outline" },
  { id: "other", title: "Outro", description: "Adiciona outro alimento que gostes.", icon: "add-outline" },
];

export default function FavoritesScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

  if (!fontsLoaded) return null;

  const toggleFood = (id: string) =>
    setSelectedFoods((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  return (
    <OnboardingLayout backRoute="/restrictions" activeStep={4}>
      <OnboardingIntro
        subtitleMaxWidth={270}
        title={<>Quais são os teus{"\n"}alimentos preferidos?</>}
        subtitle={
          <>
            Seleciona os alimentos que gostas de comer{"\n"}
            para receberes recomendações mais à tua{"\n"}medida.
          </>
        }
      />

      <OnboardingSection
        icon="heart-outline"
        title="Alimentos que gostas"
        subtitle="Seleciona tudo o que costumas gostar de comer."
      >
        <View style={styles.grid}>
          {foods.map((food) => (
            <OnboardingOptionCard
              key={food.id}
              option={food}
              selected={selectedFoods.includes(food.id)}
              onPress={() => toggleFood(food.id)}
            />
          ))}
        </View>
      </OnboardingSection>

      <OnboardingInfo icon="bulb-outline">
        Estas preferências ajudam-nos a sugerir receitas que gostas mesmo de comer.
      </OnboardingInfo>

      <OnboardingActions
        disabled={selectedFoods.length === 0}
        onContinue={() => {
          console.log({ favoriteFoods: selectedFoods });
          router.replace("/measures");
        }}
        onLater={() => router.replace("/measures")}
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
};

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

const goals: OnboardingOption[] = [
  { id: "lose-weight", title: "Perder peso", description: "De forma saudável e sustentável.", icon: "scale-outline" },
  { id: "gain-muscle", title: "Ganhar massa muscular", description: "Mais força e energia para o teu dia.", icon: "barbell-outline" },
  { id: "more-energy", title: "Ter mais energia", description: "Sentir-te melhor e com mais disposição.", icon: "heart-outline" },
  { id: "eat-better", title: "Comer melhor", description: "Criar hábitos mais saudáveis.", icon: "nutrition-outline" },
  { id: "maintain-weight", title: "Manter o peso", description: "Equilíbrio e consistência no dia a dia.", icon: "leaf-outline" },
  { id: "other", title: "Outro", description: "Um objetivo diferente.", icon: "ellipsis-horizontal-circle-outline" },
];

export default function GoalsScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  if (!fontsLoaded) return null;

  const toggleGoal = (id: string) =>
    setSelectedGoals((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  return (
    <OnboardingLayout backRoute="/register" activeStep={1}>
      <OnboardingIntro
        minHeight={120}
        subtitleMaxWidth={210}
        title={<>O que queres{"\n"}alcançar?</>}
        subtitle="Seleciona um ou mais objetivos para personalizarmos a tua experiência."
      />

      <View style={styles.grid}>
        {goals.map((goal) => (
          <OnboardingOptionCard
            key={goal.id}
            option={goal}
            selected={selectedGoals.includes(goal.id)}
            onPress={() => toggleGoal(goal.id)}
            minHeight={125}
          />
        ))}
      </View>

      <OnboardingInfo icon="bulb-outline">
        Podes alterar estes objetivos mais tarde nas definições da tua conta.
      </OnboardingInfo>

      <OnboardingActions
        disabled={selectedGoals.length === 0}
        onContinue={() => router.replace("/preferences")}
        onLater={() => router.replace("/preferences")}
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

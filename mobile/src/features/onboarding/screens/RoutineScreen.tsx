import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { useAppFonts } from "@/components/ui/useAppFonts";
import OnboardingActions from "@/features/onboarding/components/OnboardingActions";
import OnboardingIntro from "@/features/onboarding/components/OnboardingIntro";
import OnboardingLayout from "@/features/onboarding/components/OnboardingLayout";
import OnboardingOptionCard, {
  OnboardingOption,
} from "@/features/onboarding/components/OnboardingOptionCard";
import OnboardingSection from "@/features/onboarding/components/OnboardingSection";

const professionalSituations: OnboardingOption[] = [
  { id: "office", title: "Trabalho de escritório", description: "Maioritariamente sedentário.", icon: "desktop-outline" },
  { id: "physical", title: "Trabalho físico", description: "Mais movimentação durante o dia.", icon: "barbell-outline" },
  { id: "student", title: "Estudante", description: "Rotina variável.", icon: "school-outline" },
  { id: "other", title: "Outro", description: "Descreve a tua situação.", icon: "ellipsis-horizontal-circle-outline" },
];

const cookingTimes: OnboardingOption[] = [
  { id: "little", title: "Pouco tempo", description: "Até 15 minutos por refeição.", icon: "timer-outline" },
  { id: "moderate", title: "Tempo moderado", description: "15–30 minutos por refeição.", icon: "time-outline" },
  { id: "cooking", title: "Gosto de cozinhar", description: "Mais de 30 minutos por refeição.", icon: "restaurant-outline" },
  { id: "variable", title: "É variável", description: "Depende do dia.", icon: "ellipsis-horizontal-circle-outline" },
];

const eatingWith: OnboardingOption[] = [
  { id: "alone", title: "Sozinho/a", description: "Na maioria das refeições.", icon: "person-outline" },
  { id: "family", title: "Com a família", description: "Cozinho para outras pessoas.", icon: "people-outline" },
  { id: "friends", title: "Com amigos", description: "Com frequência.", icon: "people-outline" },
  { id: "variable", title: "É variável", description: "Depende do dia.", icon: "ellipsis-horizontal-circle-outline" },
];

const mainFocuses: OnboardingOption[] = [
  { id: "health", title: "Saúde geral", description: "Sentir-me melhor no dia a dia.", icon: "fitness-outline" },
  { id: "performance", title: "Desempenho físico", description: "Mais energia e rendimento.", icon: "barbell-outline" },
  { id: "wellbeing", title: "Bem-estar", description: "Equilíbrio e qualidade de vida.", icon: "leaf-outline" },
  { id: "other", title: "Outro", description: "Descreve o teu foco.", icon: "ellipsis-horizontal-circle-outline" },
];

export default function RoutineScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const [selectedProfessionalSituation, setSelectedProfessionalSituation] = useState<string | null>(null);
  const [selectedCookingTime, setSelectedCookingTime] = useState<string | null>(null);
  const [selectedEatingWith, setSelectedEatingWith] = useState<string | null>(null);
  const [selectedMainFocus, setSelectedMainFocus] = useState<string | null>(null);

  if (!fontsLoaded) return null;

  const renderOptions = (
    options: OnboardingOption[],
    selected: string | null,
    setSelected: (value: string | null) => void,
  ) => (
    <View style={styles.grid}>
      {options.map((option) => (
        <OnboardingOptionCard
          key={option.id}
          option={option}
          selected={selected === option.id}
          onPress={() => setSelected(selected === option.id ? null : option.id)}
        />
      ))}
    </View>
  );

  const hasSelection =
    !!selectedProfessionalSituation &&
    !!selectedCookingTime &&
    !!selectedEatingWith &&
    !!selectedMainFocus;

  return (
    <OnboardingLayout backRoute="/measures" activeStep={6}>
      <OnboardingIntro
        subtitleMaxWidth={250}
        title={<>Como é o teu dia{"\n"}a dia?</>}
        subtitle="Conta-nos um pouco sobre a tua rotina para recebermos recomendações que se adaptem ao teu estilo de vida."
      />

      <OnboardingSection
        icon="briefcase-outline"
        title="Situação profissional"
        subtitle="Qual descreve melhor a tua rotina?"
      >
        {renderOptions(
          professionalSituations,
          selectedProfessionalSituation,
          setSelectedProfessionalSituation,
        )}
      </OnboardingSection>

      <View style={styles.sectionGap}>
        <OnboardingSection
          icon="time-outline"
          title="Tempo para cozinhar"
          subtitle="Quanto tempo costumas ter disponível?"
        >
          {renderOptions(cookingTimes, selectedCookingTime, setSelectedCookingTime)}
        </OnboardingSection>
      </View>

      <View style={styles.sectionGap}>
        <OnboardingSection
          icon="people-outline"
          title="Com quem costumas comer?"
          subtitle="Seleciona a opção que melhor se aplica."
        >
          {renderOptions(eatingWith, selectedEatingWith, setSelectedEatingWith)}
        </OnboardingSection>
      </View>

      <View style={styles.sectionGap}>
        <OnboardingSection
          icon="locate-outline"
          title="Qual é o teu principal foco neste momento?"
          subtitle="Escolhe apenas uma opção."
        >
          {renderOptions(mainFocuses, selectedMainFocus, setSelectedMainFocus)}
        </OnboardingSection>
      </View>

      <OnboardingActions
        disabled={!hasSelection}
        onContinue={() => {
          console.log({
            professionalSituation: selectedProfessionalSituation,
            cookingTime: selectedCookingTime,
            eatingWith: selectedEatingWith,
            mainFocus: selectedMainFocus,
          });
          router.replace("/experience");
        }}
        onLater={() => router.replace("/experience")}
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
  sectionGap: {
    marginTop: 10,
  },
};

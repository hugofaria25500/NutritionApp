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

const searchPreferences: OnboardingOption[] = [
  { id: "meal-ideas", title: "Ideias para refeições", description: "Não sei o que cozinhar.", icon: "restaurant-outline" },
  { id: "use-what-i-have", title: "Usar o que tenho em casa", description: "Quero aproveitar os ingredientes disponíveis.", icon: "nutrition-outline" },
  { id: "quick-meals", title: "Refeições rápidas", description: "Quero cozinhar sem perder muito tempo.", icon: "flash-outline" },
  { id: "save-money", title: "Poupar nas refeições", description: "Quero aproveitar melhor o que compro.", icon: "cart-outline" },
  { id: "plan-meals", title: "Planear as refeições", description: "Quero organizar o que vou comer.", icon: "calendar-outline" },
  { id: "other", title: "Outra opção", description: "Descreve o que procuras.", icon: "ellipsis-horizontal-circle-outline" },
];

const mealMoments: OnboardingOption[] = [
  { id: "breakfast", title: "Pequeno almoço", description: "Começar bem o dia.", icon: "cafe-outline" },
  { id: "lunch", title: "Almoço", description: "Uma refeição equilibrada.", icon: "sunny-outline" },
  { id: "dinner", title: "Jantar", description: "Preparar o final do dia.", icon: "restaurant-outline" },
  { id: "snacks", title: "Snacks", description: "Pequenas refeições.", icon: "nutrition-outline" },
  { id: "any-meal", title: "Qualquer refeição", description: "Depende do momento.", icon: "ellipsis-horizontal-circle-outline" },
];

const cookingTimes: OnboardingOption[] = [
  { id: "under-15", title: "Até 15 minutos", description: "Quero algo rápido.", icon: "flash-outline" },
  { id: "15-30", title: "15–30 minutos", description: "Tenho algum tempo.", icon: "time-outline" },
  { id: "30-60", title: "30–60 minutos", description: "Tenho mais tempo para cozinhar.", icon: "restaurant-outline" },
  { id: "depends", title: "Depende do dia", description: "O tempo varia.", icon: "ellipsis-horizontal-circle-outline" },
];

export default function ExperienceScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const [selectedSearchPreference, setSelectedSearchPreference] = useState<string | null>(null);
  const [selectedMealMoment, setSelectedMealMoment] = useState<string | null>(null);
  const [selectedCookingTime, setSelectedCookingTime] = useState<string | null>(null);

  if (!fontsLoaded) return null;

  const select = (
    id: string,
    current: string | null,
    setter: (value: string | null) => void,
  ) => setter(current === id ? null : id);

  const hasSelection =
    !!selectedSearchPreference &&
    !!selectedMealMoment &&
    !!selectedCookingTime;

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
          onPress={() => select(option.id, selected, setSelected)}
          minHeight={82}
        />
      ))}
    </View>
  );

  return (
    <OnboardingLayout backRoute="/routine" activeStep={7}>
      <OnboardingIntro
        subtitleMaxWidth={250}
        title={<>Como queres usar{"\n"}a NutritionApp?</>}
        subtitle={
          <>
            Diz-nos como podemos ser mais úteis{"\n"}
            no teu dia a dia.
          </>
        }
      />

      <OnboardingSection
        icon="locate-outline"
        title="O que procuras normalmente?"
        subtitle="Seleciona tudo o que se aplica."
      >
        {renderOptions(
          searchPreferences,
          selectedSearchPreference,
          setSelectedSearchPreference,
        )}
      </OnboardingSection>

      <OnboardingSection
        icon="time-outline"
        title="Quando costumas precisar de ajuda?"
        subtitle="Seleciona a opção principal."
      >
        {renderOptions(mealMoments, selectedMealMoment, setSelectedMealMoment)}
      </OnboardingSection>

      <OnboardingSection
        icon="timer-outline"
        title="Quanto tempo tens normalmente para cozinhar?"
        subtitle="Seleciona a opção que melhor se aplica."
      >
        {renderOptions(cookingTimes, selectedCookingTime, setSelectedCookingTime)}
      </OnboardingSection>

      <OnboardingInfo icon="bulb-outline">
        Com estas informações, conseguimos mostrar-te receitas e sugestões mais ajustadas à tua rotina.
      </OnboardingInfo>

      <OnboardingActions
        disabled={!hasSelection}
        onContinue={() => {
          console.log({
            searchPreference: selectedSearchPreference,
            mealMoment: selectedMealMoment,
            cookingTime: selectedCookingTime,
          });
          router.replace("/home");
        }}
        onLater={() => router.replace("/home")}
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
    rowGap: 7,
  },
};

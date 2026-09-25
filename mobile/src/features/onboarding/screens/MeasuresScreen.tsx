import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useAppFonts } from "@/components/ui/useAppFonts";
import OnboardingActions from "@/features/onboarding/components/OnboardingActions";
import OnboardingIntro from "@/features/onboarding/components/OnboardingIntro";
import OnboardingLayout from "@/features/onboarding/components/OnboardingLayout";
import OnboardingOptionCard, {
  OnboardingOption,
} from "@/features/onboarding/components/OnboardingOptionCard";
import OnboardingSection from "@/features/onboarding/components/OnboardingSection";

const genders: OnboardingOption[] = [
  { id: "male", title: "Masculino", description: "", icon: "person-outline" },
  { id: "female", title: "Feminino", description: "", icon: "person-outline" },
  { id: "other", title: "Outro", description: "", icon: "male-female-outline" },
];

const activityLevels: OnboardingOption[] = [
  { id: "sedentary", title: "Sedentário", description: "Pouco ou nenhum exercício", icon: "walk-outline" },
  { id: "light", title: "Ligeiramente ativo", description: "1–3 dias por semana", icon: "walk-outline" },
  { id: "moderate", title: "Moderadamente ativo", description: "3–5 dias por semana", icon: "walk-outline" },
  { id: "very-active", title: "Muito ativo", description: "6+ dias por semana", icon: "barbell-outline" },
];

export default function MeasuresScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [birthDate] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  if (!fontsLoaded) return null;

  const hasSelection =
    !!selectedGender && !!height && !!weight && !!selectedActivity;

  return (
    <OnboardingLayout backRoute="/favorites" activeStep={5}>
      <OnboardingIntro
        subtitleMaxWidth={270}
        title={<>Conta-nos um pouco{"\n"}sobre ti</>}
        subtitle={
          <>
            Estas informações ajudam-nos a calcular{"\n"}
            as tuas necessidades nutricionais e a criar{"\n"}
            recomendações mais personalizadas.
          </>
        }
      />

      <OnboardingSection
        icon="person-outline"
        title="Género"
        subtitle="Seleciona o teu género."
      >
        <View style={styles.genderGrid}>
          {genders.map((option) => (
            <OnboardingOptionCard
              key={option.id}
              option={option}
              selected={selectedGender === option.id}
              onPress={() => setSelectedGender(option.id)}
              minHeight={65}
            />
          ))}
        </View>
      </OnboardingSection>

      <View style={styles.inputSection}>
        <OnboardingSection
          icon="calendar-outline"
          title="Data de nascimento"
          subtitle="Ajuda-nos a calcular melhor as tuas necessidades."
        >
          <Pressable style={styles.inputContainer}>
            <Ionicons name="calendar-outline" size={20} color="#6F7973" />
            <Text style={styles.inputPlaceholder}>
              {birthDate || "Seleciona a tua data de nascimento"}
            </Text>
            <Ionicons name="chevron-forward" size={17} color="#6F7973" />
          </Pressable>
        </OnboardingSection>
      </View>

      <View style={styles.inputSection}>
        <OnboardingSection
          icon="resize-outline"
          title="Altura"
          subtitle="Indica a tua altura."
        >
          <View style={styles.inputContainer}>
            <TextInput
              value={height}
              onChangeText={setHeight}
              placeholder="170"
              placeholderTextColor="#333333"
              keyboardType="numeric"
              style={styles.input}
              maxLength={3}
            />
            <Text style={styles.unit}>cm</Text>
          </View>
        </OnboardingSection>
      </View>

      <View style={styles.inputSection}>
        <OnboardingSection
          icon="scale-outline"
          title="Peso"
          subtitle="Indica o teu peso atual."
        >
          <View style={styles.inputContainer}>
            <TextInput
              value={weight}
              onChangeText={setWeight}
              placeholder="70"
              placeholderTextColor="#333333"
              keyboardType="decimal-pad"
              style={styles.input}
              maxLength={5}
            />
            <Text style={styles.unit}>kg</Text>
          </View>
        </OnboardingSection>
      </View>

      <View style={styles.inputSection}>
        <OnboardingSection
          icon="walk-outline"
          title="Nível de atividade física"
          subtitle="Seleciona o teu nível de atividade habitual."
        >
          <View style={styles.grid}>
            {activityLevels.map((option) => (
              <OnboardingOptionCard
                key={option.id}
                option={option}
                selected={selectedActivity === option.id}
                onPress={() => setSelectedActivity(option.id)}
              />
            ))}
          </View>
        </OnboardingSection>
      </View>

      <OnboardingActions
        disabled={!hasSelection}
        onContinue={() => {
          console.log({
            gender: selectedGender,
            birthDate,
            height,
            weight,
            activity: selectedActivity,
          });
          router.replace("/routine");
        }}
        onLater={() => router.replace("/routine")}
      />
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  genderGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
  inputSection: {
    width: "100%",
    marginTop: 10,
  },
  inputContainer: {
    width: "100%",
    minHeight: 46,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ECEDE9",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.035,
    shadowRadius: 5,
    elevation: 1,
  },
  input: {
    flex: 1,
    height: 44,
    paddingHorizontal: 2,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 12,
    color: "#333333",
  },
  inputPlaceholder: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11,
    color: "#858B87",
  },
  unit: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 10,
    color: "#858B87",
  },
});

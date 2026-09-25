import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
} from "@expo-google-fonts/plus-jakarta-sans";
import { useState } from "react";

type Option = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const professionalSituations: Option[] = [
  {
    id: "office",
    title: "Trabalho de escritório",
    description: "Maioritariamente sedentário.",
    icon: "desktop-outline",
  },
  {
    id: "physical",
    title: "Trabalho físico",
    description: "Mais movimentação durante o dia.",
    icon: "barbell-outline",
  },
  {
    id: "student",
    title: "Estudante",
    description: "Rotina variável.",
    icon: "school-outline",
  },
  {
    id: "other",
    title: "Outro",
    description: "Descreve a tua situação.",
    icon: "ellipsis-horizontal-circle-outline",
  },
];

const cookingTimes: Option[] = [
  {
    id: "little",
    title: "Pouco tempo",
    description: "Até 15 minutos por refeição.",
    icon: "timer-outline",
  },
  {
    id: "moderate",
    title: "Tempo moderado",
    description: "15–30 minutos por refeição.",
    icon: "time-outline",
  },
  {
    id: "cooking",
    title: "Gosto de cozinhar",
    description: "Mais de 30 minutos por refeição.",
    icon: "restaurant-outline",
  },
  {
    id: "variable",
    title: "É variável",
    description: "Depende do dia.",
    icon: "ellipsis-horizontal-circle-outline",
  },
];

const eatingWith: Option[] = [
  {
    id: "alone",
    title: "Sozinho/a",
    description: "Na maioria das refeições.",
    icon: "person-outline",
  },
  {
    id: "family",
    title: "Com a família",
    description: "Cozinho para outras pessoas.",
    icon: "people-outline",
  },
  {
    id: "friends",
    title: "Com amigos",
    description: "Com frequência.",
    icon: "people-outline",
  },
  {
    id: "variable",
    title: "É variável",
    description: "Depende do dia.",
    icon: "ellipsis-horizontal-circle-outline",
  },
];

const mainFocuses: Option[] = [
  {
    id: "health",
    title: "Saúde geral",
    description: "Sentir-me melhor no dia a dia.",
    icon: "fitness-outline",
  },
  {
    id: "performance",
    title: "Desempenho físico",
    description: "Mais energia e rendimento.",
    icon: "barbell-outline",
  },
  {
    id: "wellbeing",
    title: "Bem-estar",
    description: "Equilíbrio e qualidade de vida.",
    icon: "leaf-outline",
  },
  {
    id: "other",
    title: "Outro",
    description: "Descreve o teu foco.",
    icon: "ellipsis-horizontal-circle-outline",
  },
];

export default function RoutineScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  const [selectedProfessionalSituation, setSelectedProfessionalSituation] =
    useState<string | null>(null);

  const [selectedCookingTime, setSelectedCookingTime] = useState<string | null>(
    null,
  );

  const [selectedEatingWith, setSelectedEatingWith] = useState<string | null>(
    null,
  );

  const [selectedMainFocus, setSelectedMainFocus] = useState<string | null>(
    null,
  );

  if (!fontsLoaded) {
    return null;
  }

  const hasSelection =
    !!selectedProfessionalSituation &&
    !!selectedCookingTime &&
    !!selectedEatingWith &&
    !!selectedMainFocus;

  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require("@/assets/images/backgrounds/background_variation_four_white.png")}
        resizeMode="stretch"
        style={styles.background}
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Pressable
              onPress={() => router.replace("/measures")}
              style={styles.backButton}
              hitSlop={10}
            >
              <Ionicons name="chevron-back" size={20} color="#087C5B" />
            </Pressable>

            <View style={styles.progressContainer}>
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />

              <View style={styles.progressInactive} />
            </View>
          </View>

          {/* Scrollable content */}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={true}
            overScrollMode="never"
          >
            {/* Intro */}
            <View style={styles.intro}>
              <View style={styles.introText}>
                <Text style={styles.title}>Como é o teu dia{"\n"}a dia?</Text>

                <Text style={styles.subtitle}>
                  Conta-nos um pouco sobre a tua rotina para recebermos
                  recomendações que se adaptem ao teu estilo de vida.
                </Text>
              </View>
            </View>

            {/* Professional situation */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="briefcase-outline" size={25} color="#087C5B" />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>Situação profissional</Text>

                  <Text style={styles.sectionSubtitle}>
                    Qual descreve melhor a tua rotina?
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.optionsGrid, styles.sectionBottomMargin]}>
              {professionalSituations.map((option) => {
                const isSelected = selectedProfessionalSituation === option.id;

                return (
                  <Pressable
                    key={option.id}
                    onPress={() =>
                      setSelectedProfessionalSituation(
                        isSelected ? null : option.id,
                      )
                    }
                    style={[
                      styles.optionCard,
                      isSelected && styles.optionCardSelected,
                    ]}
                  >
                    <View style={styles.optionHeader}>
                      <Ionicons name={option.icon} size={25} color="#087C5B" />

                      {isSelected && (
                        <View style={styles.check}>
                          <Ionicons name="checkmark" size={9} color="#FFFFFF" />
                        </View>
                      )}
                    </View>

                    <Text style={styles.optionTitle}>{option.title}</Text>

                    <Text style={styles.optionDescription}>
                      {option.description}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Cooking time */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="time-outline" size={25} color="#087C5B" />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>Tempo para cozinhar</Text>

                  <Text style={styles.sectionSubtitle}>
                    Quanto tempo costumas ter disponível?
                  </Text>
                </View>
              </View>

              <View style={[styles.optionsGrid, styles.sectionBottomMargin]}>
                {cookingTimes.map((option) => {
                  const isSelected = selectedCookingTime === option.id;

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() =>
                        setSelectedCookingTime(isSelected ? null : option.id)
                      }
                      style={[
                        styles.optionCard,
                        isSelected && styles.optionCardSelected,
                      ]}
                    >
                      <View style={styles.optionHeader}>
                        <Ionicons
                          name={option.icon}
                          size={25}
                          color="#087C5B"
                        />

                        {isSelected && (
                          <View style={styles.check}>
                            <Ionicons
                              name="checkmark"
                              size={9}
                              color="#FFFFFF"
                            />
                          </View>
                        )}
                      </View>

                      <Text style={styles.optionTitle}>{option.title}</Text>

                      <Text style={styles.optionDescription}>
                        {option.description}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Eating with */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="people-outline" size={25} color="#087C5B" />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    Com quem costumas comer?
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona a opção que melhor se aplica.
                  </Text>
                </View>
              </View>

              <View style={[styles.optionsGrid, styles.sectionBottomMargin]}>
                {eatingWith.map((option) => {
                  const isSelected = selectedEatingWith === option.id;

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() =>
                        setSelectedEatingWith(isSelected ? null : option.id)
                      }
                      style={[
                        styles.optionCard,
                        isSelected && styles.optionCardSelected,
                      ]}
                    >
                      <View style={styles.optionHeader}>
                        <Ionicons
                          name={option.icon}
                          size={25}
                          color="#087C5B"
                        />

                        {isSelected && (
                          <View style={styles.check}>
                            <Ionicons
                              name="checkmark"
                              size={9}
                              color="#FFFFFF"
                            />
                          </View>
                        )}
                      </View>

                      <Text style={styles.optionTitle}>{option.title}</Text>

                      <Text style={styles.optionDescription}>
                        {option.description}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Main focus */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="locate-outline" size={25} color="#087C5B" />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    Qual é o teu principal foco neste momento?
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Escolhe apenas uma opção.
                  </Text>
                </View>
              </View>

              <View style={[styles.optionsGrid, styles.sectionBottomMargin]}>
                {mainFocuses.map((option) => {
                  const isSelected = selectedMainFocus === option.id;

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() =>
                        setSelectedMainFocus(isSelected ? null : option.id)
                      }
                      style={[
                        styles.optionCard,
                        isSelected && styles.optionCardSelected,
                      ]}
                    >
                      <View style={styles.optionHeader}>
                        <Ionicons
                          name={option.icon}
                          size={25}
                          color="#087C5B"
                        />

                        {isSelected && (
                          <View style={styles.check}>
                            <Ionicons
                              name="checkmark"
                              size={9}
                              color="#FFFFFF"
                            />
                          </View>
                        )}
                      </View>

                      <Text style={styles.optionTitle}>{option.title}</Text>

                      <Text style={styles.optionDescription}>
                        {option.description}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <Pressable
                style={[
                  styles.primaryButton,
                  !hasSelection && styles.primaryButtonDisabled,
                ]}
                disabled={!hasSelection}
                onPress={() => {
                  console.log({
                    professionalSituation: selectedProfessionalSituation,
                    cookingTime: selectedCookingTime,
                    eatingWith: selectedEatingWith,
                    mainFocus: selectedMainFocus,
                  });

                  // Guardar dados
                  // Avançar para o próximo passo
                  router.replace("/experience")
                }}
              >
                <Text style={styles.primaryButtonText}>Continuar</Text>

                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
              </Pressable>

              <Pressable
                onPress={() => {
                  router.replace("/experience")
                }}
                hitSlop={8}
              >
                <Text style={styles.laterButton}>Preencher mais tarde</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Container */

  container: {
    flex: 1,
    backgroundColor: "#F8FAF5",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  safeArea: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 21,
    paddingVertical: 16,
  },

  /* Header */

  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 34,
    marginBottom: 5,
  },

  backButton: {
    width: 24,
    height: 34,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  progressContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 5,
  },

  progressActive: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#087C5B",
  },

  progressInactive: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#E1E4DF",
  },

  progressText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 8,
    color: "#087C5B",
    width: 23,
    textAlign: "right",
  },

  /* Scroll */

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 12,
  },

  /* Intro */

  intro: {
    minHeight: 115,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  introText: {
    flex: 1,
  },

  title: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 27,
    lineHeight: 27,
    color: "#087C5B",
  },

  subtitle: {
    marginTop: 6,
    maxWidth: 250,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#888888",
  },

  decorativeText: {
    width: 70,
    marginRight: 4,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 9,
    lineHeight: 11,
    color: "#087C5B",
    textAlign: "center",
    transform: [{ rotate: "-7deg" }],
  },

  /* Sections */

  section: {
    width: "100%",
  },

  sectionBottomMargin: {
    marginBottom: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 9,
  },

  sectionHeaderText: {
    flex: 1,
    marginLeft: 8,
  },

  sectionTitle: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 15,
    lineHeight: 20,
    color: "#123B34",
  },

  sectionSubtitle: {
    marginTop: 0,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#858B87",
  },

  /* Options */

  optionsGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 7,
  },

  optionCard: {
    width: "48%",
    minHeight: 82,

    paddingHorizontal: 12,
    paddingVertical: 8,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ECEDE9",

    backgroundColor: "#ECEDE9",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },

  optionCardSelected: {
    borderColor: "#7BCB9D",
    backgroundColor: "#E5F2E5",
  },

  optionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  check: {
    width: 12,
    height: 12,
    borderRadius: 6,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#087C5B",
  },

  optionTitle: {
    marginTop: 3,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 14,
    lineHeight: 14,
    color: "#123B34",
  },

  optionDescription: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#858B87",
  },

  /* Actions */

  actions: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 4,
    paddingBottom: 8,
  },

  primaryButton: {
    width: "100%",
    height: 44,

    borderRadius: 22,

    backgroundColor: "#168653",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 8,
  },

  primaryButtonDisabled: {
    opacity: 0.55,
  },

  primaryButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 13,
    color: "#FFFFFF",
  },

  laterButton: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 12,
    color: "#087C5B",
  },
});

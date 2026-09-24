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

/* ------------------------------------------------ */
/* What do you usually look for? */
/* ------------------------------------------------ */

const searchPreferences: Option[] = [
  {
    id: "meal-ideas",
    title: "Ideias para refeições",
    description: "Não sei o que cozinhar.",
    icon: "restaurant-outline",
  },
  {
    id: "use-what-i-have",
    title: "Usar o que tenho em casa",
    description: "Quero aproveitar os ingredientes disponíveis.",
    icon: "nutrition-outline",
  },
  {
    id: "quick-meals",
    title: "Refeições rápidas",
    description: "Quero cozinhar sem perder muito tempo.",
    icon: "flash-outline",
  },
  {
    id: "save-money",
    title: "Poupar nas refeições",
    description: "Quero aproveitar melhor o que compro.",
    icon: "cart-outline",
  },
  {
    id: "plan-meals",
    title: "Planear as refeições",
    description: "Quero organizar o que vou comer.",
    icon: "calendar-outline",
  },
  {
    id: "other",
    title: "Outra opção",
    description: "Descreve o que procuras.",
    icon: "ellipsis-horizontal-circle-outline",
  },
];

/* ------------------------------------------------ */
/* When do you usually need help? */
/* ------------------------------------------------ */

const mealMoments: Option[] = [
  {
    id: "breakfast",
    title: "Pequeno almoço",
    description: "Começar bem o dia.",
    icon: "cafe-outline",
  },
  {
    id: "lunch",
    title: "Almoço",
    description: "Uma refeição equilibrada.",
    icon: "sunny-outline",
  },
  {
    id: "dinner",
    title: "Jantar",
    description: "Preparar o final do dia.",
    icon: "restaurant-outline",
  },
  {
    id: "snacks",
    title: "Snacks",
    description: "Pequenas refeições.",
    icon: "nutrition-outline",
  },
  {
    id: "any-meal",
    title: "Qualquer refeição",
    description: "Depende do momento.",
    icon: "ellipsis-horizontal-circle-outline",
  },
];

/* ------------------------------------------------ */
/* How much time do you normally have to cook? */
/* ------------------------------------------------ */

const cookingTimes: Option[] = [
  {
    id: "under-15",
    title: "Até 15 minutos",
    description: "Quero algo rápido.",
    icon: "flash-outline",
  },
  {
    id: "15-30",
    title: "15–30 minutos",
    description: "Tenho algum tempo.",
    icon: "time-outline",
  },
  {
    id: "30-60",
    title: "30–60 minutos",
    description: "Tenho mais tempo para cozinhar.",
    icon: "restaurant-outline",
  },
  {
    id: "depends",
    title: "Depende do dia",
    description: "O tempo varia.",
    icon: "ellipsis-horizontal-circle-outline",
  },
];

export default function ExperienceScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  const [selectedSearchPreference, setSelectedSearchPreference] =
    useState<string | null>(null);

  const [selectedMealMoment, setSelectedMealMoment] = useState<string | null>(
    null,
  );

  const [selectedCookingTime, setSelectedCookingTime] = useState<string | null>(
    null,
  );

  if (!fontsLoaded) {
    return null;
  }

  const hasSelection =
    !!selectedSearchPreference &&
    !!selectedMealMoment &&
    !!selectedCookingTime;

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
              onPress={() => router.replace("/routine")}
              style={styles.backButton}
              hitSlop={10}
            >
              <Ionicons
                name="chevron-back"
                size={20}
                color="#087C5B"
              />
            </Pressable>

            <View style={styles.progressContainer}>
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
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
                <Text style={styles.title}>
                  Como queres usar{"\n"}
                  a NutritionApp?
                </Text>

                <Text style={styles.subtitle}>
                  Diz-nos como podemos ser mais úteis
                  {"\n"}
                  no teu dia a dia.
                </Text>
              </View>
            </View>

            {/* Search preferences */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="locate-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    O que procuras normalmente?
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona tudo o que se aplica.
                  </Text>
                </View>
              </View>

              <View style={styles.optionsGrid}>
                {searchPreferences.map((option) => {
                  const isSelected =
                    selectedSearchPreference === option.id;

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() =>
                        setSelectedSearchPreference(
                          isSelected ? null : option.id,
                        )
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

                      <Text style={styles.optionTitle}>
                        {option.title}
                      </Text>

                      <Text style={styles.optionDescription}>
                        {option.description}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Meal moments */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    Quando costumas precisar de ajuda?
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona a opção principal.
                  </Text>
                </View>
              </View>

              <View style={styles.optionsGrid}>
                {mealMoments.map((option) => {
                  const isSelected =
                    selectedMealMoment === option.id;

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() =>
                        setSelectedMealMoment(
                          isSelected ? null : option.id,
                        )
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

                      <Text style={styles.optionTitle}>
                        {option.title}
                      </Text>

                      <Text style={styles.optionDescription}>
                        {option.description}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Cooking time */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="timer-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    Quanto tempo tens normalmente para cozinhar?
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona a opção que melhor se aplica.
                  </Text>
                </View>
              </View>

              <View style={styles.optionsGrid}>
                {cookingTimes.map((option) => {
                  const isSelected =
                    selectedCookingTime === option.id;

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() =>
                        setSelectedCookingTime(
                          isSelected ? null : option.id,
                        )
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

                      <Text style={styles.optionTitle}>
                        {option.title}
                      </Text>

                      <Text style={styles.optionDescription}>
                        {option.description}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Info */}
            <View style={styles.info}>
              <Ionicons
                name="bulb-outline"
                size={20}
                color="#087C5B"
              />

              <Text style={styles.infoText}>
                Com estas informações, conseguimos mostrar-te
                receitas e sugestões mais ajustadas à tua rotina.
              </Text>
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
                    searchPreference: selectedSearchPreference,
                    mealMoment: selectedMealMoment,
                    cookingTime: selectedCookingTime,
                  });

                  // Guardar preferências
                  // Finalizar onboarding
                  // Avançar para a app
                  router.replace("/home")
                }}
              >
                <Text style={styles.primaryButtonText}>
                  Criar a minha experiência
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  router.replace("/home")
                }}
                hitSlop={8}
              >
                <Text style={styles.laterButton}>
                  Preencher mais tarde
                </Text>
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
    marginBottom: 10,
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

  /* Info */

  info: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 4,
    paddingHorizontal: 12,
    paddingVertical: 9,

    borderRadius: 9,
    backgroundColor: "rgba(231, 241, 231, 0.85)",
  },

  infoText: {
    flex: 1,
    marginLeft: 8,

    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#6F7973",
  },

  /* Actions */

  actions: {
    alignItems: "center",
    justifyContent: "center",

    gap: 8,
    marginTop: 10,
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
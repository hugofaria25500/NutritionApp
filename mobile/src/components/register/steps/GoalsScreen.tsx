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

type Goal = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const goals: Goal[] = [
  {
    id: "lose-weight",
    title: "Perder peso",
    description: "De forma saudável e sustentável.",
    icon: "scale-outline",
  },
  {
    id: "gain-muscle",
    title: "Ganhar massa muscular",
    description: "Mais força e energia para o teu dia.",
    icon: "barbell-outline",
  },
  {
    id: "more-energy",
    title: "Ter mais energia",
    description: "Sentir-te melhor e com mais disposição.",
    icon: "heart-outline",
  },
  {
    id: "eat-better",
    title: "Comer melhor",
    description: "Criar hábitos mais saudáveis.",
    icon: "nutrition-outline",
  },
  {
    id: "maintain-weight",
    title: "Manter o peso",
    description: "Equilíbrio e consistência no dia a dia.",
    icon: "leaf-outline",
  },
  {
    id: "other",
    title: "Outro",
    description: "Um objetivo diferente.",
    icon: "ellipsis-horizontal-circle-outline",
  },
];

export default function GoalsScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  if (!fontsLoaded) {
    return null;
  }

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((currentGoals) => {
    if (currentGoals.includes(goalId)) {
      return currentGoals.filter((id) => id !== goalId);
    }

    return [...currentGoals, goalId];
  });
};

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
              onPress={() => router.replace("/register")}
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

              <View style={styles.progressInactive} />
              <View style={styles.progressInactive} />
              <View style={styles.progressInactive} />
              <View style={styles.progressInactive} />
              <View style={styles.progressInactive} />
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
                <Text style={styles.title}>
                  O que queres{"\n"}alcançar?
                </Text>

                <Text style={styles.subtitle}>
                  Seleciona um ou mais objetivos para
                  personalizarmos a tua experiência.
                </Text>
              </View>
            </View>

            {/* Goals */}
            <View style={styles.goals}>
              {goals.map((goal) => {
                const isSelected = selectedGoals.includes(goal.id);

                return (
                  <Pressable
                    key={goal.id}
                    onPress={() => toggleGoal(goal.id)}
                    style={[
                      styles.goalCard,
                      isSelected && styles.goalCardSelected,
                    ]}
                  >
                    <View style={styles.goalHeader}>
                      <Ionicons
                        name={goal.icon}
                        size={25}
                        color="#087C5B"
                      />

                      {isSelected && (
                        <View style={styles.check}>
                          <Ionicons
                            name="checkmark"
                            size={10}
                            color="#FFFFFF"
                          />
                        </View>
                      )}
                    </View>

                    <Text style={styles.goalTitle}>
                      {goal.title}
                    </Text>

                    <Text style={styles.goalDescription}>
                      {goal.description}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Info */}
            <View style={styles.info}>
              <Ionicons
                name="bulb-outline"
                size={20}
                color="#087C5B"
              />

              <Text style={styles.infoText}>
                Podes alterar estes objetivos mais tarde
                nas definições da tua conta.
              </Text>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <Pressable
                style={[
                  styles.primaryButton,
                  selectedGoals.length === 0 && styles.primaryButtonDisabled
                ]}
                disabled={selectedGoals.length === 0}
                onPress={() => {
                  // Guardar objetivo
                  // Avançar para o próximo passo
                  router.replace("/preferences");
                }}
              >
                <Text style={styles.primaryButtonText}>
                  Continuar
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color="#FFFFFF"
                />
              </Pressable>

              <Pressable
                onPress={() => {
                  router.replace("/preferences");
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
    minHeight: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    maxWidth: 210,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 12,
    color: "#888888",
  },

  /* Goals */

  goals: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },

  goalCard: {
    width: "48%",
    minHeight: 125,

    paddingHorizontal: 14,
    paddingVertical: 10,

    borderRadius: 11,
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

  goalCardSelected: {
    borderColor: "#7BCB9D",
    backgroundColor: "#E5F2E5",
  },

  goalHeader: {
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

  goalTitle: {
    marginTop: 5,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 14,
    lineHeight: 14,
    color: "#123B34",
  },

  goalDescription: {
    marginTop: 5,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#858B87",
  },

  /* Info */

  info: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,

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
    marginTop: 14,
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
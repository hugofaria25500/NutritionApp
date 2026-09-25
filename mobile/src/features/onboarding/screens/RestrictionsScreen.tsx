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

const restrictions: Option[] = [
  {
    id: "lactose-free",
    title: "Sem lactose",
    description: "Evita laticínios e derivados.",
    icon: "flask-outline",
  },
  {
    id: "gluten-free",
    title: "Sem glúten",
    description: "Evita alimentos com glúten.",
    icon: "nutrition-outline",
  },
  {
    id: "vegetarian",
    title: "Vegetariano",
    description: "Não consome carne.",
    icon: "leaf-outline",
  },
  {
    id: "vegan",
    title: "Vegan",
    description: "Sem produtos de origem animal.",
    icon: "leaf-outline",
  },
  {
    id: "pescetarian",
    title: "Pescetariano",
    description: "Consome peixe e marisco.",
    icon: "fish-outline",
  },
  {
    id: "sugar-free",
    title: "Sem açúcar adicionado",
    description: "Evita açúcar refinado.",
    icon: "nutrition-outline",
  },
  {
    id: "low-sodium",
    title: "Baixo teor de sódio",
    description: "Evita alimentos muito salgados.",
    icon: "water-outline",
  },
  {
    id: "high-protein",
    title: "Alta proteína",
    description: "Prefere refeições ricas em proteína.",
    icon: "barbell-outline",
  },
  {
    id: "other",
    title: "Outra restrição",
    description: "Especifica a tua preferência.",
    icon: "ellipsis-horizontal-circle-outline",
  },
  {
    id: "no-restrictions",
    title: "Não tenho restrições",
    description: "Posso comer todos os alimentos.",
    icon: "checkmark-circle-outline",
  },
];

const allergies: Option[] = [
  {
    id: "peanuts",
    title: "Amendoim",
    description: "Pode causar reações graves.",
    icon: "nutrition-outline",
  },
  {
    id: "tree-nuts",
    title: "Frutos de casca rija",
    description: "Inclui amêndoas, nozes, avelãs, etc.",
    icon: "nutrition-outline",
  },
  {
    id: "milk",
    title: "Leite",
    description: "Inclui leite, queijo, iogurte, etc.",
    icon: "water-outline",
  },
  {
    id: "eggs",
    title: "Ovos",
    description: "Inclui ovo e derivados.",
    icon: "ellipse-outline",
  },
  {
    id: "fish",
    title: "Peixe",
    description: "Inclui peixe e derivados.",
    icon: "fish-outline",
  },
  {
    id: "shellfish",
    title: "Marisco",
    description: "Inclui crustáceos e derivados.",
    icon: "fish-outline",
  },
  {
    id: "soy",
    title: "Soja",
    description: "Inclui produtos de soja.",
    icon: "nutrition-outline",
  },
  {
    id: "mustard",
    title: "Mostarda",
    description: "Inclui mostarda e derivados.",
    icon: "nutrition-outline",
  },
  {
    id: "other",
    title: "Outra alergia",
    description: "Especifica o alimento.",
    icon: "ellipsis-horizontal-circle-outline",
  },
  {
    id: "no-allergies",
    title: "Não tenho alergias",
    description: "Não tenho alergias alimentares.",
    icon: "checkmark-circle-outline",
  },
];

export default function RestrictionsScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>(
    [],
  );

  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

  const [noAllergies, setNoAllergies] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const toggleRestriction = (id: string) => {
    setSelectedRestrictions((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const toggleAllergy = (id: string) => {
    setNoAllergies(false);

    setSelectedAllergies((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const hasSelection =
    selectedRestrictions.length > 0 && selectedAllergies.length > 0;

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
              onPress={() => router.replace("/preferences")}
              style={styles.backButton}
              hitSlop={10}
            >
              <Ionicons name="chevron-back" size={20} color="#087C5B" />
            </Pressable>

            <View style={styles.progressContainer}>
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />
              <View style={styles.progressActive} />

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
                  Há alguma coisa{"\n"}
                  que devemos evitar?
                </Text>

                <Text style={styles.subtitle}>
                  Seleciona as tuas restrições e alergias para receberes
                  recomendações mais seguras e adequadas a ti.
                </Text>
              </View>
            </View>

            {/* Restrictions */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="leaf-outline" size={25} color="#087C5B" />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    Restrições alimentares
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona os ingredientes ou alimentos que preferes
                    {"\n"}evitar.
                  </Text>
                </View>
              </View>

              <View style={styles.optionsGrid}>
                {restrictions.map((option) => {
                  const isSelected = selectedRestrictions.includes(option.id);

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() => toggleRestriction(option.id)}
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

            {/* Divider */}
            <View style={styles.sectionDivider} />

            {/* Allergies */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="warning-outline" size={25} color="#087C5B" />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>Alergias alimentares</Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona os alimentos que podem causar reações
                    {"\n"}adversas.
                  </Text>
                </View>
              </View>

              <View style={styles.optionsGrid}>
                {allergies.map((option) => {
                  const isSelected = selectedAllergies.includes(option.id);

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() => toggleAllergy(option.id)}
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

            {/* Safety */}
            <View style={styles.info}>
              <Ionicons
                name="shield-checkmark-outline"
                size={20}
                color="#087C5B"
              />

              <Text style={styles.infoText}>
                Usamos estas informações para evitar recomendar receitas que
                contenham estes ingredientes.
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
                    restrictions: selectedRestrictions,
                    allergies: selectedAllergies,
                    noAllergies,
                  });

                  // Guardar restrições
                  // Avançar para o próximo passo
                  router.replace("/favorites")
                }}
              >
                <Text style={styles.primaryButtonText}>Continuar</Text>

                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
              </Pressable>

              <Pressable
                onPress={() => {
                  router.replace("/favorites")
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
    marginBottom: 15,
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
    maxWidth: 270,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#888888",
  },

  /* Sections */

  section: {
    width: "100%",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  sectionHeaderText: {
    marginLeft: 8,
  },

  sectionTitle: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 15,
    lineHeight: 20,
    color: "#123B34",
  },

  sectionSubtitle: {
    marginTop: 1,
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
    rowGap: 10,
  },

  optionCard: {
    width: "48%",
    minHeight: 100,

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
    marginTop: 4,
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

  /* Divider */

  sectionDivider: {
    height: 1,
    backgroundColor: "#E8EAE6",
    marginVertical: 10,
  },

  /* No allergies */

  noAllergies: {
    width: "100%",
    minHeight: 100,

    marginTop: 10,

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

  /* Info */

  info: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 12,
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

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

const foods: Option[] = [
  {
    id: "fruits",
    title: "Frutas",
    description: "Ex.: maçã, banana, laranja, frutos vermelhos.",
    icon: "nutrition-outline",
  },
  {
    id: "vegetables",
    title: "Legumes",
    description: "Ex.: brócolos, cenoura, espinafres, courgette.",
    icon: "nutrition-outline",
  },
  {
    id: "grains",
    title: "Cereais",
    description: "Ex.: arroz, aveia, quinoa, massa.",
    icon: "nutrition-outline",
  },
  {
    id: "meat",
    title: "Carnes",
    description: "Ex.: frango, vaca, porco, peru.",
    icon: "nutrition-outline",
  },
  {
    id: "fish",
    title: "Peixe",
    description: "Ex.: salmão, atum, dourada, bacalhau.",
    icon: "fish-outline",
  },
  {
    id: "seafood",
    title: "Marisco",
    description: "Ex.: camarão, amêijoa, mexilhão, polvo.",
    icon: "fish-outline",
  },
  {
    id: "eggs",
    title: "Ovos",
    description: "Versáteis e nutritivos.",
    icon: "ellipse-outline",
  },
  {
    id: "dairy",
    title: "Laticínios",
    description: "Ex.: leite, iogurte, queijo, skyr.",
    icon: "water-outline",
  },
  {
    id: "legumes",
    title: "Leguminosas",
    description: "Ex.: feijão, grão-de-bico, lentilhas.",
    icon: "nutrition-outline",
  },
  {
    id: "nuts",
    title: "Frutos secos",
    description: "Ex.: amêndoas, nozes, avelãs.",
    icon: "nutrition-outline",
  },
  {
    id: "healthy-fats",
    title: "Gorduras saudáveis",
    description: "Ex.: azeite, abacate, sementes.",
    icon: "water-outline",
  },
  {
    id: "herbs-spices",
    title: "Ervas e especiarias",
    description: "Ex.: alho, cebola, tomilho, manjericão.",
    icon: "leaf-outline",
  },
  {
    id: "desserts",
    title: "Doces e sobremesas",
    description: "Ex.: chocolate, fruta, sobremesas saudáveis.",
    icon: "ice-cream-outline",
  },
  {
    id: "other",
    title: "Outro",
    description: "Adiciona outro alimento que gostes.",
    icon: "add-outline",
  },
];

export default function FavoritesScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

  if (!fontsLoaded) {
    return null;
  }

  const toggleFood = (id: string) => {
    setSelectedFoods((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const hasSelection = selectedFoods.length > 0;

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
              onPress={() => router.replace("/restrictions")}
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
                  Quais são os teus{"\n"}
                  alimentos preferidos?
                </Text>

                <Text style={styles.subtitle}>
                  Seleciona os alimentos que gostas de comer
                  {"\n"}
                  para receberes recomendações mais à tua
                  {"\n"}
                  medida.
                </Text>
              </View>
            </View>

            {/* Favorite foods */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="heart-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    Alimentos que gostas
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona tudo o que costumas gostar de comer.
                  </Text>
                </View>
              </View>

              <View style={styles.optionsGrid}>
                {foods.map((food) => {
                  const isSelected = selectedFoods.includes(food.id);

                  return (
                    <Pressable
                      key={food.id}
                      onPress={() => toggleFood(food.id)}
                      style={[
                        styles.optionCard,
                        isSelected && styles.optionCardSelected,
                      ]}
                    >
                      <View style={styles.optionHeader}>
                        <Ionicons
                          name={food.icon}
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
                        {food.title}
                      </Text>

                      <Text style={styles.optionDescription}>
                        {food.description}
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
                Estas preferências ajudam-nos a sugerir receitas que
                gostas mesmo de comer.
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
                    favoriteFoods: selectedFoods,
                  });

                  // Guardar alimentos preferidos
                  // Avançar para o próximo passo
                  router.replace("/measures")
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
                  router.replace("/measures")
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

  decorativeText: {
    width: 65,
    marginRight: 4,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 9,
    lineHeight: 11,
    color: "#087C5B",
    textAlign: "center",
    transform: [{ rotate: "-7deg" }],
  },

  /* Section */

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
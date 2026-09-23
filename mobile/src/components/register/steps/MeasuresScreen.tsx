import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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

const genders: Option[] = [
  {
    id: "male",
    title: "Masculino",
    description: "",
    icon: "person-outline",
  },
  {
    id: "female",
    title: "Feminino",
    description: "",
    icon: "person-outline",
  },
  {
    id: "other",
    title: "Outro",
    description: "",
    icon: "male-female-outline",
  },
];

const activityLevels: Option[] = [
  {
    id: "sedentary",
    title: "Sedentário",
    description: "Pouco ou nenhum exercício",
    icon: "walk-outline",
  },
  {
    id: "light",
    title: "Ligeiramente ativo",
    description: "1–3 dias por semana",
    icon: "walk-outline",
  },
  {
    id: "moderate",
    title: "Moderadamente ativo",
    description: "3–5 dias por semana",
    icon: "walk-outline",
  },
  {
    id: "very-active",
    title: "Muito ativo",
    description: "6+ dias por semana",
    icon: "barbell-outline",
  },
];

export default function MeasuresScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(
    null,
  );

  const [birthDate, setBirthDate] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  const hasSelection =
    !!selectedGender &&
    //!!birthDate &&
    !!height &&
    !!weight &&
    !!selectedActivity;

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
              onPress={() => router.replace("/favorites")}
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
            keyboardShouldPersistTaps="handled"
          >
            {/* Intro */}
            <View style={styles.intro}>
              <View style={styles.introText}>
                <Text style={styles.title}>
                  Conta-nos um pouco{"\n"}
                  sobre ti
                </Text>

                <Text style={styles.subtitle}>
                  Estas informações ajudam-nos a calcular
                  as tuas necessidades nutricionais e a criar
                  recomendações mais personalizadas.
                </Text>
              </View>
            </View>

            {/* Gender */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="person-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>Género</Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona o teu género.
                  </Text>
                </View>
              </View>

              <View style={styles.optionsGrid}>
                {genders.map((option) => {
                  const isSelected = selectedGender === option.id;

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() => setSelectedGender(option.id)}
                      style={[
                        styles.optionCard,
                        styles.genderCard,
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
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Birth date */}
            <View style={styles.inputSection}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="calendar-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    Data de nascimento
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Ajuda-nos a calcular melhor as tuas necessidades.
                  </Text>
                </View>
              </View>

              <Pressable
                style={styles.inputContainer}
                onPress={() => {
                  // Abrir date picker mais tarde
                }}
              >
                <Ionicons
                  name="calendar-outline"
                  size={20}
                  color="#6F7973"
                />

                <Text
                  style={[
                    styles.inputPlaceholder,
                    birthDate && styles.inputValue,
                  ]}
                >
                  {birthDate || "Seleciona a tua data de nascimento"}
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={17}
                  color="#6F7973"
                />
              </Pressable>
            </View>

            {/* Height */}
            <View style={styles.inputSection}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="resize-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>Altura</Text>

                  <Text style={styles.sectionSubtitle}>
                    Indica a tua altura.
                  </Text>
                </View>
              </View>

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
            </View>

            {/* Weight */}
            <View style={styles.inputSection}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="scale-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>Peso</Text>

                  <Text style={styles.sectionSubtitle}>
                    Indica o teu peso atual.
                  </Text>
                </View>
              </View>

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
            </View>

            {/* Activity */}
            <View style={[styles.section, styles.activity]}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="walk-outline"
                  size={25}
                  color="#087C5B"
                />

                <View style={styles.sectionHeaderText}>
                  <Text style={styles.sectionTitle}>
                    Nível de atividade física
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Seleciona o teu nível de atividade habitual.
                  </Text>
                </View>
              </View>

              <View style={styles.optionsGrid}>
                {activityLevels.map((option) => {
                  const isSelected = selectedActivity === option.id;

                  return (
                    <Pressable
                      key={option.id}
                      onPress={() => setSelectedActivity(option.id)}
                      style={[
                        styles.optionCard,
                        styles.activityCard,
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
                    gender: selectedGender,
                    birthDate,
                    height,
                    weight,
                    activity: selectedActivity,
                  });

                  // Guardar dados pessoais
                  // Avançar para o próximo passo
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
                  // Preencher mais tarde
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

  /* Sections */

  section: {
    width: "100%",
  },

  inputSection: {
    width: "100%",
    marginTop: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  activity: {
    marginTop: 10,
  },

  sectionHeaderText: {
    marginLeft: 8,
    flex: 1,
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

  genderCard: {
    minHeight: 65,
  },

  activityCard: {
    minHeight: 100,
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

  /* Inputs */

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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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

  inputValue: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: "#333333",
  },

  unit: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 10,
    color: "#858B87",
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
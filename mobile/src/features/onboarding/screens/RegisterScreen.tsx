import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
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

export default function RegisterScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require("@/assets/images/backgrounds/background_food_variation_three_white.png")}
        resizeMode="stretch"
        style={styles.background}
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Back button */}
        <Pressable
          onPress={() => router.replace("/init")}
          style={styles.backButton}
          hitSlop={10}
        >
          <Ionicons name="chevron-back" size={14} color="#FFFFFF" />

          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>

        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
          >
            <View style={styles.content}>
              {/* Branding */}
              <View style={styles.branding}>
                <Image
                  source={require("@/assets/images/branding/full_logo.png")}
                  resizeMode="contain"
                  style={styles.logo}
                />
              </View>

              {/* Register */}
              <View style={styles.registerSection}>
                <Text style={styles.title}>Criar a tua conta</Text>

                <Text style={styles.subtitle}>
                  Começa a tua jornada para uma vida{"\n"}
                  mais saudável.
                </Text>

                {/* Form */}
                <View style={styles.form}>
                  {/* Name */}
                  <View style={styles.field}>
                    <View style={styles.inputContainer}>
                      <Ionicons
                        name="person-outline"
                        size={18}
                        color="#8F9590"
                      />

                      <TextInput
                        placeholder="Nome"
                        placeholderTextColor="#A5AAA6"
                        style={styles.input}
                        autoCapitalize="words"
                        returnKeyType="next"
                      />
                    </View>

                    {/* Error goes here later */}
                    {/* <Text style={styles.errorText}>Nome obrigatório</Text> */}
                  </View>

                  {/* Email */}
                  <View style={styles.field}>
                    <View style={styles.inputContainer}>
                      <Ionicons name="mail-outline" size={18} color="#8F9590" />

                      <TextInput
                        placeholder="Email"
                        placeholderTextColor="#A5AAA6"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                      />
                    </View>

                    {/* Error goes here later */}
                    {/* <Text style={styles.errorText}>Email inválido</Text> */}
                  </View>

                  {/* Password */}
                  <View style={styles.field}>
                    <View style={styles.inputContainer}>
                      <Ionicons
                        name="lock-closed-outline"
                        size={18}
                        color="#8F9590"
                      />

                      <TextInput
                        placeholder="Palavra-passe"
                        placeholderTextColor="#A5AAA6"
                        style={styles.input}
                        secureTextEntry
                        autoCapitalize="none"
                        returnKeyType="done"
                      />

                      <Pressable hitSlop={10}>
                        <Ionicons
                          name="eye-outline"
                          size={19}
                          color="#8F9590"
                        />
                      </Pressable>
                    </View>

                    {/* Error goes here later */}
                    {/* <Text style={styles.errorText}>
      A palavra-passe deve ter pelo menos 8 caracteres
    </Text> */}
                  </View>
                </View>

                {/* Create account */}
                <Pressable
                  style={styles.primaryButton}
                  onPress={() => {router.replace("/goals")}}
                >
                  <Text style={styles.primaryButtonText}>Criar conta</Text>
                </Pressable>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />

                  <Text style={styles.dividerText}>ou</Text>

                  <View style={styles.divider} />
                </View>

                {/* Google */}
                <Pressable
                  style={styles.googleButton}
                  onPress={() => {
                    // Google + Clerk entra aqui mais tarde
                  }}
                >
                  <FontAwesome name="google" size={18} color="#DB4437" />

                  <Text style={styles.googleButtonText}>
                    Continuar com o Google
                  </Text>
                </Pressable>

                {/* Login */}
                <View style={styles.loginRow}>
                  <Text style={styles.loginText}>Já tens conta?</Text>

                  <Pressable
                    onPress={() => router.replace("/login")}
                    hitSlop={8}
                  >
                    <Text style={styles.loginLink}>Iniciar sessão</Text>
                  </Pressable>
                </View>
              </View>

              {/* Footer */}
              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  Ao continuar, aceitas os nossos
                </Text>

                <Text style={styles.footerLinks}>
                  Termos de Utilização e Política de Privacidade.
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Container */

  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#F8FAF5",
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

  /* Back */

  backButton: {
    position: "absolute",
    top: 35,
    left: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#168653",

    paddingHorizontal: 12,
    paddingVertical: 7,

    borderRadius: 14,

    zIndex: 10,
  },

  backButtonText: {
    marginLeft: 3,

    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  safeArea: {
    flex: 1,
  },

  keyboard: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  /* Content */

  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  /* Branding */

  branding: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },

  logo: {
    width: 220,
    height: 120,
  },

  /* Register */

  registerSection: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 22,
    lineHeight: 27,
    color: "#087C5B",
    textAlign: "center",
  },

  subtitle: {
    fontFamily: "PlusJakartaSans_400Regular",
    marginTop: 6,
    marginBottom: 20,
    fontSize: 12,
    lineHeight: 18,
    color: "#999999",
    textAlign: "center",
  },

  /* Form */

  form: {
    width: "100%",
    marginBottom: 20,
  },

  field: {
    width: "100%",
    marginBottom: 9,
  },

  /* Input */

  inputContainer: {
    width: "100%",
    height: 44,

    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E1E4DF",

    backgroundColor: "rgba(255, 255, 255, 0.72)",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 14,
  },

  input: {
    flex: 1,
    height: "100%",

    marginLeft: 10,

    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    color: "#333333",
  },

  /* Primary button */

  primaryButton: {
    width: "100%",
    height: 44,
    borderRadius: 25,
    backgroundColor: "#168653",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  primaryButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: "#FFFFFF",
    fontSize: 13,
  },

  /* Divider */

  dividerContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 12,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E1E4DF",
  },

  dividerText: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11,
    color: "#999999",
  },

  /* Google */

  googleButton: {
    width: "100%",
    height: 44,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#E1E4DF",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 10,
  },

  googleButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 12,
    color: "#333333",
  },

  /* Login */

  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 40,
  },

  loginText: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11,
    color: "#999999",
  },

  loginLink: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 11,
    color: "#087C5B",
  },

  /* Footer */

  footer: {
    alignItems: "center",
    justifyContent: "center",
  },

  /* Footer */

  footer: {
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 10,
    color: "#999999",
    textAlign: "center",
  },

  footerLinks: {
    marginTop: 4,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 10,
    color: "#087C5B",
    textAlign: "center",
  },
});

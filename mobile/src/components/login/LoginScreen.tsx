import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
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

export default function LoginScreen() {
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

              {/* Login */}
              <View style={styles.loginSection}>
                <Text style={styles.title}>Entra na tua conta</Text>

                <Text style={styles.subtitle}>
                  Continua a tua jornada para uma vida mais saudável.
                </Text>

                {/* Google */}
                <Pressable style={styles.loginButton}>
                  <FontAwesome name="google" size={18} color="#DB4437" />

                  <Text style={styles.loginButtonText}>
                    Continuar com o Google
                  </Text>
                </Pressable>

                {/* Email */}
                <Pressable style={styles.loginButton}>
                  <Ionicons name="mail-outline" size={21} color="#087C5B" />

                  <Text style={styles.loginButtonText}>
                    Continuar com o email
                  </Text>
                </Pressable>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />

                  <Text style={styles.dividerText}>ou</Text>

                  <View style={styles.divider} />
                </View>

                {/* Create account */}
                <View style={styles.createAccount}>
                  <Text style={styles.createAccountText}>
                    Ainda não tens conta?
                  </Text>

                  <Pressable
                    onPress={() => router.replace("/register")}
                    hitSlop={8}
                  >
                    <Text style={styles.createAccountLink}>Criar conta</Text>
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

  /* Safe Area */

  safeArea: {
    flex: 1,
  },

  /* Keyboard */

  keyboard: {
    flex: 1,
  },

  /* Scroll */

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flex: 1,
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

  /* Login */

  loginSection: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  title: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 21,
    color: "#087C5B",
    textAlign: "center",
  },

  subtitle: {
    width: "70%",
    marginTop: 6,
    marginBottom: 20,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    lineHeight: 18,
  },

  /* Login Buttons */

  loginButton: {
    width: "100%",
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E1E4DF",
    backgroundColor: "rgba(255,255,255,0.75)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 10,
  },

  loginButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 13,
    color: "#333333",
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

  /* Create Account */

  createAccount: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    gap: 5,
  },

  createAccountText: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11,
    color: "#999999",
  },

  createAccountLink: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 11,
    color: "#087C5B",
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

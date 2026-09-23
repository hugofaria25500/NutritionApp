import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require("@/assets/images/backgrounds/background_food_variation_three_white.png")}
        resizeMode="stretch"
        style={styles.background}
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Branding */}
          <View style={styles.branding}>
            <Image
              source={require("@/assets/images/branding/logo.png")}
              resizeMode="contain"
              style={styles.logo}
            />

            <Image
              source={require("@/assets/images/branding/logo_name.png")}
              resizeMode="contain"
              style={styles.logoName}
            />
          </View>

          {/* Login */}
          <View style={styles.loginSection}>
            <Text style={styles.title}>Entrar na tua conta</Text>

            <Text style={styles.subtitle}>
              Continua a tua jornada para uma vida mais saudável.
            </Text>

            {/* Google */}
            <Pressable style={styles.loginButton}>
              <FontAwesome name="google" size={18} color="#DB4437" />

              <Text style={styles.loginButtonText}>Continuar com o Google</Text>
            </Pressable>

            {/* Email */}
            <Pressable style={styles.loginButton}>
              <Ionicons name="mail-outline" size={21} color="#087C5B" />

              <Text style={styles.loginButtonText}>Continuar com o email</Text>
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

              <Pressable onPress={() => router.replace("/register")}>
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
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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

  safeArea: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 48,
  },

  branding: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  logo: {
    width: 180,
    height: 150,
  },

  logoName: {
    width: 250,
    height: 80,
  },

  loginSection: {
    flex: 3.75,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "#087C5B",
    textAlign: "center",
  },

  subtitle: {
    width: "70%",
    marginTop: 6,
    marginBottom: 20,
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    lineHeight: 18,
  },

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

  iconWrapper: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  googleIcon: {
    width: 20,
    height: 20,
  },

  loginButtonText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333333",
  },

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
    fontSize: 11,
    color: "#999999",
  },

  createAccount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  createAccountText: {
    fontSize: 11,
    color: "#999999",
  },

  createAccountLink: {
    fontSize: 11,
    color: "#087C5B",
    fontWeight: "600",
  },

  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    fontSize: 10,
    color: "#999999",
    textAlign: "center",
  },

  footerLinks: {
    marginTop: 4,
    fontSize: 10,
    color: "#087C5B",
    textAlign: "center",
  },
});

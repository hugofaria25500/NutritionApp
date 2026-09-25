import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { useAppFonts } from "@/components/ui/useAppFonts";
import AuthDivider from "@/features/auth/components/AuthDivider";
import AuthLayout from "@/features/auth/components/AuthLayout";
import AuthSocialButton from "@/features/auth/components/AuthSocialButton";

export default function LoginScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) return null;

  return (
    <AuthLayout backRoute="/init">
      <View style={styles.section}>
        <Text style={styles.title}>Entra na tua conta</Text>
        <Text style={styles.subtitle}>
          Continua a tua jornada para uma vida mais saudável.
        </Text>

        <AuthSocialButton provider="google" />
        <AuthSocialButton provider="email" />

        <AuthDivider />

        <View style={styles.createAccount}>
          <Text style={styles.muted}>Ainda não tens conta?</Text>
          <Text style={styles.link} onPress={() => router.replace("/register")}>
            Criar conta
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  section: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    lineHeight: 18,
    color: "#999999",
    textAlign: "center",
  },
  createAccount: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    gap: 5,
  },
  muted: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11,
    color: "#999999",
  },
  link: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 11,
    color: "#087C5B",
  },
});

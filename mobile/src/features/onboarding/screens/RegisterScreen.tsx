import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useAppFonts } from "@/components/ui/useAppFonts";
import AuthDivider from "@/features/auth/components/AuthDivider";
import AuthInput from "@/features/auth/components/AuthInput";
import AuthLayout from "@/features/auth/components/AuthLayout";
import AuthPrimaryButton from "@/features/auth/components/AuthPrimaryButton";
import AuthSocialButton from "@/features/auth/components/AuthSocialButton";

export default function RegisterScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const [showPassword, setShowPassword] = useState(false);

  if (!fontsLoaded) return null;

  return (
    <AuthLayout backRoute="/init">
      <View style={styles.section}>
        <RegisterCopy />

        <View style={styles.form}>
          <AuthInput
            icon="person-outline"
            placeholder="Nome"
            autoCapitalize="words"
            returnKeyType="next"
          />
          <AuthInput
            icon="mail-outline"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
          <AuthInput
            icon="lock-closed-outline"
            placeholder="Palavra-passe"
            secureTextEntry={!showPassword}
            rightIcon={showPassword ? "eye-off-outline" : "eye-outline"}
            onRightPress={() => setShowPassword((visible) => !visible)}
            autoCapitalize="none"
            returnKeyType="done"
          />
        </View>

        <AuthPrimaryButton
          label="Criar conta"
          onPress={() => router.replace("/goals")}
        />

        <AuthDivider />

        <AuthSocialButton
          provider="google"
          onPress={() => {
            // Google + Clerk entra aqui mais tarde.
          }}
        />

        <View style={styles.loginRow}>
          <Text style={styles.muted}>Já tens conta?</Text>
          <Text style={styles.link} onPress={() => router.replace("/login")}>
            Iniciar sessão
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
}

function RegisterCopy() {
  return (
    <View style={styles.copy}>
      <Text style={styles.title}>Criar a tua conta</Text>
      <Text style={styles.subtitle}>
        Começa a tua jornada para uma vida{"\n"}mais saudável.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: "100%",
    alignItems: "center",
  },
  copy: {
    alignItems: "center",
  },
  title: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 22,
    lineHeight: 27,
    color: "#087C5B",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 20,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 18,
    color: "#999999",
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginBottom: 20,
    gap: 9,
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 40,
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

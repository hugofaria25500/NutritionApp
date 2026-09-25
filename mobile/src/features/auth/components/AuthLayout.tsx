import type { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import AppLogo from "@/components/ui/AppLogo";

type AuthLayoutProps = {
  backRoute: Href;
  children: ReactNode;
};

export default function AuthLayout({ backRoute, children }: AuthLayoutProps) {
  const router = useRouter();

  return (
    <AppBackground
      source={require("@/assets/images/backgrounds/background_food_variation_three_white.png")}
    >
      <SafeAreaView style={styles.safeArea}>
        <Pressable
          onPress={() => router.replace(backRoute)}
          style={styles.backButton}
          hitSlop={10}
        >
          <Ionicons name="chevron-back" size={14} color="#FFFFFF" />
          <Text style={styles.backLabel}>Back</Text>
        </Pressable>

        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
          >
            <View style={styles.content}>
              <View style={styles.branding}>
                <AppLogo />
              </View>

              {children}

              <View style={styles.footer}>
                <Text style={styles.footerText}>Ao continuar, aceitas os nossos</Text>
                <Text style={styles.footerLinks}>
                  Termos de Utilização e Política de Privacidade.
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 35,
    left: 20,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#168653",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
  },
  backLabel: {
    marginLeft: 3,
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  branding: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
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

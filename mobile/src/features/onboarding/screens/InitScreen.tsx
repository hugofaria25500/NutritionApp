import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import AppLogo from "@/components/ui/AppLogo";
import { COLORS, LAYOUT, RADIUS, SPACING, TYPOGRAPHY } from "@/components/ui/theme";
import { useAppFonts } from "@/components/ui/useAppFonts";
import { useAppResponsive } from "@/components/ui/useAppResponsive";

const benefits = [
  { icon: "restaurant-outline" as const, label: "Receitas personalizadas" },
  { icon: "leaf-outline" as const, label: "Com os teus ingredientes" },
  { icon: "heart-outline" as const, label: "Mais saúde todos os dias" },
];

export default function InitScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();
  const { width } = useAppResponsive();

  if (!fontsLoaded) return null;

  return (
    <AppBackground
      source={require("@/assets/images/backgrounds/background_variation_three_white.png")}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.content}>
            <View style={styles.branding}>
              <AppLogo
                width={width < 380 ? 190 : 210}
                height={width < 380 ? 104 : 112}
              />
              <Text style={styles.tagline}>
                Eat better, with what you have.
              </Text>
            </View>

            <View style={styles.benefits}>
              {benefits.map((benefit) => (
                <View key={benefit.label} style={styles.benefit}>
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name={benefit.icon}
                      size={24}
                      color={COLORS.green}
                    />
                  </View>
                  <Text style={styles.benefitText}>{benefit.label}</Text>
                </View>
              ))}
            </View>

            <View style={styles.actions}>
              <Pressable
                style={styles.primaryButton}
                onPress={() => router.replace("/register")}
              >
                <Text style={styles.primaryButtonText}>Começar</Text>
              </Pressable>

              <Pressable
                style={styles.secondaryButton}
                onPress={() => router.replace("/login")}
              >
                <Text style={styles.secondaryButtonText}>Já tenho conta</Text>
              </Pressable>

              <Text style={styles.footerText}>
                Uma vida mais saudável, começa aqui.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    width: "100%",
    maxWidth: LAYOUT.maxContentWidth,
    alignSelf: "center",
    paddingVertical: SPACING.xl,
    paddingHorizontal: LAYOUT.horizontalPadding,
    alignItems: "center",
    justifyContent: "center",
  },
  branding: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  tagline: {
    marginTop: SPACING.xs,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: TYPOGRAPHY.bodySmall.fontSize,
    lineHeight: TYPOGRAPHY.bodySmall.lineHeight,
    color: COLORS.muted,
    textAlign: "center",
  },
  benefits: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: SPACING.xxxl,
    marginBottom: SPACING.xxxl,
  },
  benefit: {
    width: "31%",
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.pill,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.greenSoft,
    marginBottom: SPACING.sm,
  },
  benefitText: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: TYPOGRAPHY.label.fontSize,
    lineHeight: TYPOGRAPHY.label.lineHeight,
    color: COLORS.muted,
    textAlign: "center",
  },
  actions: {
    width: "100%",
    gap: SPACING.md,
  },
  primaryButton: {
    width: "100%",
    minHeight: 48,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.greenStrong,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: COLORS.white,
    fontSize: TYPOGRAPHY.button.fontSize,
    lineHeight: TYPOGRAPHY.button.lineHeight,
  },
  secondaryButton: {
    width: "100%",
    minHeight: 48,
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: COLORS.green,
    fontSize: TYPOGRAPHY.button.fontSize,
    lineHeight: TYPOGRAPHY.button.lineHeight,
  },
  footerText: {
    marginTop: SPACING.xs,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: TYPOGRAPHY.bodySmall.fontSize,
    lineHeight: TYPOGRAPHY.bodySmall.lineHeight,
    color: COLORS.muted,
    textAlign: "center",
  },
});

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import AppBackground from "@/components/ui/AppBackground";
import AppLogo from "@/components/ui/AppLogo";
import { useAppFonts } from "@/components/ui/useAppFonts";

const benefits = [
  { icon: "restaurant-outline" as const, label: "Receitas personalizadas" },
  { icon: "leaf-outline" as const, label: "Com os teus ingredientes" },
  { icon: "heart-outline" as const, label: "Mais saúde todos os dias" },
];

export default function InitScreen() {
  const router = useRouter();
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) return null;

  return (
    <AppBackground
      source={require("@/assets/images/backgrounds/background_food_variation_three_white.png")}
    >
      <View style={styles.content}>
        <View style={styles.branding}>
          <AppLogo />
          <Text style={styles.tagline}>Eat better, with what you have.</Text>
        </View>

        <View style={styles.benefits}>
          {benefits.map((benefit) => (
            <View key={benefit.label} style={styles.benefit}>
              <View style={styles.iconContainer}>
                <Ionicons name={benefit.icon} size={24} color="#087C5B" />
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
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  branding: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 40,
  },
  tagline: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 13,
    color: "#888888",
    fontWeight: "500",
  },
  benefits: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  benefit: {
    width: "31%",
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF3E8",
    marginBottom: 8,
  },
  benefitText: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11,
    color: "#777777",
    textAlign: "center",
  },
  actions: {
    width: "100%",
    gap: 12,
  },
  primaryButton: {
    width: "100%",
    height: 44,
    borderRadius: 28,
    backgroundColor: "#168653",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: "#FFFFFF",
    fontSize: 15,
  },
  secondaryButton: {
    width: "100%",
    height: 44,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#D9DDD7",
    backgroundColor: "rgba(255,255,255,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: "#087C5B",
    fontSize: 15,
  },
  footerText: {
    marginTop: 0,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
  },
});

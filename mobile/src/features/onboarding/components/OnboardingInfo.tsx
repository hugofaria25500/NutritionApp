import type { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SPACING, RADIUS, TYPOGRAPHY } from "@/components/ui/theme";
import { StyleSheet, Text, View } from "react-native";

type OnboardingInfoProps = {
  icon: keyof typeof Ionicons.glyphMap;
  children: ReactNode;
};

export default function OnboardingInfo({ icon, children }: OnboardingInfoProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color="#087C5B" />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.sm,
    backgroundColor: "rgba(231, 241, 231, 0.85)",
  },
  text: {
    flex: 1,
    marginLeft: SPACING.sm,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: TYPOGRAPHY.bodySmall.fontSize,
    lineHeight: TYPOGRAPHY.bodySmall.lineHeight,
    color: "#6F7973",
  },
});

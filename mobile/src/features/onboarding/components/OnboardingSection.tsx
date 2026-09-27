import type { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SPACING, TYPOGRAPHY } from "@/components/ui/theme";
import { StyleSheet, Text, View } from "react-native";

type OnboardingSectionProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function OnboardingSection({
  icon,
  title,
  subtitle,
  children,
}: OnboardingSectionProps) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Ionicons name={icon} size={25} color="#087C5B" />

        <View style={styles.headerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
  headerText: {
    marginLeft: SPACING.sm,
    flex: 1,
  },
  title: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: TYPOGRAPHY.h3.fontSize,
    lineHeight: TYPOGRAPHY.h3.lineHeight,
    color: "#123B34",
  },
  subtitle: {
    marginTop: 2,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: TYPOGRAPHY.bodySmall.fontSize,
    lineHeight: TYPOGRAPHY.bodySmall.lineHeight,
    color: "#858B87",
  },
});

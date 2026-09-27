import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SPACING, TYPOGRAPHY } from "@/components/ui/theme";

type OnboardingIntroProps = {
  title: ReactNode;
  subtitle: ReactNode;
  minHeight?: number;
  subtitleMaxWidth?: number;
};

export default function OnboardingIntro({
  title,
  subtitle,
  minHeight = 115,
  subtitleMaxWidth = 270,
}: OnboardingIntroProps) {
  return (
    <View style={[styles.container, { minHeight }]}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subtitle, { maxWidth: subtitleMaxWidth }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.xs,
  },
  text: {
    flex: 1,
  },
  title: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: TYPOGRAPHY.h1.fontSize,
    lineHeight: TYPOGRAPHY.h1.lineHeight,
    color: "#087C5B",
  },
  subtitle: {
    marginTop: SPACING.xs,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: TYPOGRAPHY.bodySmall.fontSize,
    lineHeight: TYPOGRAPHY.bodySmall.lineHeight,
    color: "#888888",
  },
});

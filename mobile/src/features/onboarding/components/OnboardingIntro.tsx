import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type OnboardingIntroProps = {
  title: ReactNode;
  subtitle: React.ReactNode;
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
    marginBottom: 5,
  },
  text: {
    flex: 1,
  },
  title: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 27,
    lineHeight: 27,
    color: "#087C5B",
  },
  subtitle: {
    marginTop: 6,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#888888",
  },
});

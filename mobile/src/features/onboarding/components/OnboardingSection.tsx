import type { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
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
    marginBottom: 9,
  },
  headerText: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 15,
    lineHeight: 20,
    color: "#123B34",
  },
  subtitle: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#858B87",
  },
});

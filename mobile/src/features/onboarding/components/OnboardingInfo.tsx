import type { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
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
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 9,
    backgroundColor: "rgba(231, 241, 231, 0.85)",
  },
  text: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#6F7973",
  },
});

import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, SPACING, TYPOGRAPHY } from "@/components/ui/theme";

type HomeSectionHeaderProps = {
  title: string;
  actionLabel: string;
  onActionPress: () => void;
  marginTop?: number;
};

export default function HomeSectionHeader({
  title,
  actionLabel,
  onActionPress,
  marginTop = 17,
}: HomeSectionHeaderProps) {
  return (
    <View style={[styles.container, { marginTop }]}>
      <Text style={styles.title}>{title}</Text>

      <Pressable style={styles.action} onPress={onActionPress}>
        <Text style={styles.actionText}>{actionLabel}</Text>
        <Ionicons name="arrow-forward" size={15} color="#087C5B" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: SPACING.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: COLORS.ink,
    fontSize: TYPOGRAPHY.h3.fontSize,
    letterSpacing: -0.35,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
  },
  actionText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    color: COLORS.green,
    fontSize: TYPOGRAPHY.label.fontSize,
  },
});

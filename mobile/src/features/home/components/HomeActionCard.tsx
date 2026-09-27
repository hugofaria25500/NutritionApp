import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RADIUS, SPACING, TYPOGRAPHY } from "@/components/ui/theme";

type HomeActionCardProps = {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  accent?: "green" | "neutral";
  onPress: () => void;
};

export default function HomeActionCard({
  title,
  subtitle,
  icon,
  accent = "neutral",
  onPress,
}: HomeActionCardProps) {
  const green = accent === "green";

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={[styles.icon, green && styles.iconGreen]}>
        <Ionicons name={icon} size={23} color={green ? "#087C5B" : "#082D31"} />
      </View>

      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#082D31" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 64,
    width: "100%",
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: "rgba(255,255,255,0.84)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.62)",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#163F37",
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.md,
    backgroundColor: "rgba(248,250,247,0.9)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },
  iconGreen: {
    backgroundColor: "#EAF4E8",
  },
  copy: {
    flex: 1,
  },
  title: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    color: "#082D31",
    fontSize: TYPOGRAPHY.bodyMedium.fontSize,
    lineHeight: TYPOGRAPHY.bodyMedium.lineHeight,
  },
  subtitle: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    color: "#7C8584",
    fontSize: TYPOGRAPHY.bodySmall.fontSize,
    lineHeight: TYPOGRAPHY.bodySmall.lineHeight,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
});

import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    minHeight: 55,
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 11,
    paddingVertical: 8,
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
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: "rgba(248,250,247,0.9)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
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
    fontSize: 11.5,
    lineHeight: 15,
  },
  subtitle: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    color: "#7C8584",
    fontSize: 9.7,
    lineHeight: 13,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
});

import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#082D31",
    fontSize: 15,
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
    color: "#087C5B",
    fontSize: 9.5,
  },
});

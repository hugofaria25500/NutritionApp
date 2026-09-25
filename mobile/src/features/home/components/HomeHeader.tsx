import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import AppLogo from "@/components/ui/AppLogo";

type HomeHeaderProps = {
  onNotificationsPress?: () => void;
};

export default function HomeHeader({ onNotificationsPress }: HomeHeaderProps) {
  return (
    <View style={styles.header}>
      <AppLogo width={140} height={42} />

      <Pressable
        style={styles.notificationButton}
        hitSlop={8}
        onPress={onNotificationsPress}
      >
        <Ionicons name="notifications-outline" size={20} color="#082D31" />
        <View style={styles.notificationDot} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  notificationButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.82)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(15, 54, 49, 0.07)",
    shadowColor: "#163F37",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E7493C",
  },
});

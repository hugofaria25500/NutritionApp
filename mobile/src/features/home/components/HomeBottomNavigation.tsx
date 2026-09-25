import { Ionicons } from "@expo/vector-icons";
import { Href, usePathname, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type NavigationItem = {
  label: string;
  route: Href;
  icon: keyof typeof Ionicons.glyphMap;
};

type HomeBottomNavigationProps = {
  items: NavigationItem[];
  bottom: number;
};

export default function HomeBottomNavigation({
  items,
  bottom,
}: HomeBottomNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={[styles.container, { bottom }]}>
      {items.map((item) => {
        const active = pathname === item.route || (item.route === "/explore" && pathname.startsWith("/explore/"));

        return (
          <Pressable
            key={String(item.route)}
            style={styles.item}
            onPress={() => router.push(item.route)}
            hitSlop={4}
          >
            <Ionicons
              name={item.icon}
              size={22}
              color={active ? "#087C5B" : "#7B8585"}
            />
            <Text style={[styles.label, active && styles.activeLabel]}>
              {item.label}
            </Text>
            {active && <View style={styles.activeDot} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    width: "94%",
    maxWidth: 420,
    minHeight: 68,
    borderRadius: 23,
    paddingHorizontal: 5,
    paddingVertical: 7,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.75)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#173E36",
    shadowOpacity: 0.13,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  item: {
    minWidth: 50,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    gap: 3,
  },
  label: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 7.2,
    lineHeight: 10,
    color: "#7B8585",
  },
  activeLabel: {
    color: "#087C5B",
  },
  activeDot: {
    position: "absolute",
    bottom: 0,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#087C5B",
  },
});

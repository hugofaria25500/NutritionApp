import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type HomeRecipeCardProps = {
  image: string;
  title: string;
  subtitle: string;
  variant?: "small" | "large";
  onPress: () => void;
};

export default function HomeRecipeCard({
  image,
  title,
  subtitle,
  variant = "small",
  onPress,
}: HomeRecipeCardProps) {
  const large = variant === "large";

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        large ? styles.largeCard : styles.smallCard,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={[styles.overlay, large && styles.largeOverlay]} />

      <View style={styles.favoriteBadge}>
        <Ionicons name="heart-outline" size={16} color="#FFFFFF" />
      </View>

      <View style={[styles.copy, large && styles.largeCopy]}>
        <Text
          style={[styles.title, large && styles.largeTitle]}
          numberOfLines={large ? 2 : 1}
        >
          {title}
        </Text>
        <Text style={[styles.subtitle, large && styles.largeSubtitle]}>
          {subtitle}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#B8C3BA",
  },
  smallCard: {
    width: 90,
    height: 115,
  },
  largeCard: {
    width: 150,
    height: 172,
    borderRadius: 14,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(4,25,21,0.16)",
  },
  largeOverlay: {
    backgroundColor: "rgba(4,25,21,0.20)",
  },
  favoriteBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "rgba(12,40,33,0.26)",
    alignItems: "center",
    justifyContent: "center",
  },
  copy: {
    position: "absolute",
    left: 8,
    right: 6,
    bottom: 7,
  },
  largeCopy: {
    left: 10,
    right: 9,
    bottom: 9,
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#FFFFFF",
    fontSize: 10.5,
    lineHeight: 12,
  },
  largeTitle: {
    fontSize: 11.5,
    lineHeight: 14,
  },
  subtitle: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    color: "rgba(255,255,255,0.9)",
    fontSize: 7.2,
    lineHeight: 9,
  },
  largeSubtitle: {
    marginTop: 3,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 8,
    lineHeight: 10,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
});

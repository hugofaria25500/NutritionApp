import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { ExploreRecipe } from "@/features/explore/data/exploreData";

type ExploreRecipeCardProps = {
  recipe: ExploreRecipe;
  onPress: () => void;
};

export default function ExploreRecipeCard({
  recipe,
  onPress,
}: ExploreRecipeCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <View style={styles.timeBadge}>
          <Ionicons name="time-outline" size={10} color="#28564F" />
          <Text style={styles.time}>{recipe.meta}</Text>
        </View>
        <Pressable
          style={styles.favorite}
          onPress={(event) => event.stopPropagation()}
          hitSlop={6}
        >
          <Ionicons name="heart-outline" size={17} color="#60716D" />
        </Pressable>
      </View>

      <View style={styles.copy}>
        <Text style={styles.title} numberOfLines={2}>{recipe.title}</Text>
        <Text style={styles.detail} numberOfLines={1}>{recipe.detail}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 181,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.96)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.06)",
  },
  imageWrap: {
    height: 103,
    position: "relative",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  timeBadge: {
    position: "absolute",
    left: 7,
    bottom: 7,
    height: 22,
    paddingHorizontal: 7,
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "rgba(255,255,255,0.92)",
  },
  time: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 7,
    color: "#28564F",
  },
  favorite: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 27,
    height: 27,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  copy: {
    paddingHorizontal: 9,
    paddingVertical: 8,
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 9.5,
    lineHeight: 12,
    color: "#123E3B",
  },
  detail: {
    marginTop: 4,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 6.8,
    lineHeight: 9,
    color: "#7E8986",
  },
});

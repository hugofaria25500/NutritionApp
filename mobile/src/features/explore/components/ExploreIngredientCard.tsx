import { Image, Pressable, StyleSheet, Text } from "react-native";

import type { ExploreIngredient } from "@/features/explore/data/exploreData";

type ExploreIngredientCardProps = {
  ingredient: ExploreIngredient;
  onPress?: () => void;
};

export default function ExploreIngredientCard({
  ingredient,
  onPress,
}: ExploreIngredientCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress} disabled={!onPress}>
      <Image source={{ uri: ingredient.image }} style={styles.image} />
      <Text style={styles.title}>{ingredient.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 72,
    paddingBottom: 7,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.92)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.05)",
  },
  image: { width: "100%", height: 62 },
  title: {
    marginTop: 5,
    paddingHorizontal: 6,
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 7.5,
    color: "#234B46",
  },
});

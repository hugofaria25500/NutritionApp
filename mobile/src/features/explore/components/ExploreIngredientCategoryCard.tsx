import { StyleSheet, Text, View } from "react-native";

import type { ExploreIngredientCategory } from "@/features/explore/data/exploreData";

type ExploreIngredientCategoryCardProps = {
  category: ExploreIngredientCategory;
};

export default function ExploreIngredientCategoryCard({
  category,
}: ExploreIngredientCategoryCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 104,
    height: 50,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.07)",
  },
  title: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 8.5,
    color: "#234B46",
    textAlign: "center",
  },
});

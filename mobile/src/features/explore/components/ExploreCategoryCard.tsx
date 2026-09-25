import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { ExploreCategory } from "@/features/explore/data/exploreData";

type ExploreCategoryCardProps = {
  category: ExploreCategory;
  onPress?: () => void;
};

export default function ExploreCategoryCard({
  category,
  onPress,
}: ExploreCategoryCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress} disabled={!onPress}>
      <Image source={{ uri: category.image }} style={styles.image} />
      <View style={styles.copy}>
        <Text style={styles.title} numberOfLines={1}>{category.title}</Text>
        <Text style={styles.subtitle}>{category.subtitle}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 83,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderColor: "rgba(16,56,49,0.05)",
  },
  image: { width: "100%", height: 70 },
  copy: { minHeight: 37, paddingHorizontal: 7, paddingVertical: 5 },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 9,
    lineHeight: 11,
    color: "#123E3B",
  },
  subtitle: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 6.7,
    lineHeight: 9,
    color: "#87918F",
  },
});

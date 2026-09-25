import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { PlanMeal } from "@/features/plan/data/planData";

type PlanMealCardProps = {
  meal: PlanMeal;
};

export default function PlanMealCard({ meal }: PlanMealCardProps) {
  return (
    <Pressable style={styles.card}>
      <Image source={{ uri: meal.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.type}>
          {meal.type} · {meal.time}
        </Text>
        <Text style={styles.title} numberOfLines={2}>
          {meal.title}
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={10} color="#71817D" />
            <Text style={styles.meta}>{meal.meta.split(" · ")[0]}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="restaurant-outline" size={10} color="#71817D" />
            <Text style={styles.meta}>{meal.meta.split(" · ")[1]}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="bar-chart-outline" size={10} color="#71817D" />
            <Text style={styles.meta}>{meal.calories}</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.moreButton} hitSlop={6}>
        <Ionicons name="ellipsis-vertical" size={14} color="#6F7E7B" />
      </Pressable>

      <Pressable style={styles.favoriteButton} hitSlop={6}>
        <Ionicons name="heart-outline" size={15} color="#55706A" />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 72,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.93)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.06)",
    flexDirection: "row",
    position: "relative",
  },
  image: {
    width: 70,
    height: 72,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 34,
    paddingVertical: 8,
  },
  type: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 7,
    color: "#82908D",
  },
  title: {
    marginTop: 2,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 8.4,
    lineHeight: 11,
    color: "#163C3A",
  },
  metaRow: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  meta: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 6.4,
    color: "#75827F",
  },
  moreButton: {
    position: "absolute",
    top: 7,
    right: 7,
  },
  favoriteButton: {
    position: "absolute",
    right: 7,
    bottom: 8,
  },
});

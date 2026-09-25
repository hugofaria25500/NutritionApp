import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

type Filter = "Tudo" | "Receitas" | "Ingredientes" | "Favoritos";

type ExploreFilterChipsProps = {
  filters: readonly Filter[];
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
};

const icons: Record<Filter, keyof typeof Ionicons.glyphMap> = {
  Tudo: "search-outline",
  Receitas: "restaurant-outline",
  Ingredientes: "leaf-outline",
  Favoritos: "heart-outline",
};

export default function ExploreFilterChips({
  filters,
  activeFilter,
  onFilterChange,
}: ExploreFilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {filters.map((filter) => {
        const active = filter === activeFilter;

        return (
          <Pressable
            key={filter}
            onPress={() => onFilterChange(filter)}
            style={[styles.chip, active && styles.activeChip]}
          >
            <Ionicons
              name={icons[filter]}
              size={15}
              color={active ? "#FFFFFF" : "#2C625B"}
            />
            <Text style={[styles.text, active && styles.activeText]}>
              {filter}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: 7,
    paddingVertical: 2,
    paddingRight: 4,
  },
  chip: {
    height: 34,
    paddingHorizontal: 14,
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(238,244,239,0.92)",
    borderWidth: 1,
    borderColor: "rgba(30,93,78,0.04)",
  },
  activeChip: {
    backgroundColor: "#075A50",
  },
  text: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 9,
    color: "#2C625B",
  },
  activeText: {
    color: "#FFFFFF",
  },
});

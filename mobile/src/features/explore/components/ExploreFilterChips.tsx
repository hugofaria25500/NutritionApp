import { Pressable, StyleSheet, Text, View } from "react-native";
import { RADIUS, TYPOGRAPHY } from "@/components/ui/theme";

type ExploreContentType = "Receitas" | "Ingredientes";

type ExploreFilterChipsProps = {
  filters: readonly ExploreContentType[];
  activeFilter: ExploreContentType;
  onFilterChange: (filter: ExploreContentType) => void;
};

export default function ExploreFilterChips({
  filters,
  activeFilter,
  onFilterChange,
}: ExploreFilterChipsProps) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const active = filter === activeFilter;

        return (
          <Pressable
            key={filter}
            onPress={() => onFilterChange(filter)}
            style={[styles.item, active && styles.activeItem]}
          >
            <Text style={[styles.text, active && styles.activeText]}>
              {filter}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    padding: 3,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(232,240,234,0.92)",
    borderWidth: 1,
    borderColor: "rgba(55,99,88,0.06)",
  },
  item: {
    minWidth: 110,
    height: 38,
    paddingHorizontal: 14,
    borderRadius: RADIUS.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  activeItem: {
    backgroundColor: "#075A50",
  },
  text: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: TYPOGRAPHY.label.fontSize,
    color: "#58706A",
  },
  activeText: {
    color: "#FFFFFF",
  },
});

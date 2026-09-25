import { Pressable, StyleSheet, Text, View } from "react-native";

type ExploreContentType = "Receitas" | "Ingredientes" | "Guardados";

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
    marginTop: 10,
    padding: 3,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(231,239,233,0.78)",
  },
  item: {
    minWidth: 88,
    height: 32,
    paddingHorizontal: 14,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  activeItem: {
    backgroundColor: "#075A50",
  },
  text: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 9,
    color: "#58706A",
  },
  activeText: {
    color: "#FFFFFF",
  },
});

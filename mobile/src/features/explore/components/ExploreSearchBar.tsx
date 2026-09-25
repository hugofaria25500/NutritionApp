import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type ExploreSearchBarProps = {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  onFilterPress?: () => void;
  showFilterButton?: boolean;
};

export default function ExploreSearchBar({
  value,
  placeholder,
  onChangeText,
  onFilterPress,
  showFilterButton = true,
}: ExploreSearchBarProps) {
  return (
    <View style={styles.row}>
      <View style={styles.search}>
        <Ionicons name="search-outline" size={19} color="#174B47" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8A9693"
          style={styles.input}
          returnKeyType="search"
        />
      </View>

      {showFilterButton && (
        <Pressable style={styles.filterButton} onPress={onFilterPress}>
          <Ionicons name="options-outline" size={19} color="#174B47" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
  },
  search: {
    flex: 1,
    height: 43,
    borderRadius: 22,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderColor: "rgba(17,73,67,0.08)",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 0,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 10.5,
    color: "#174B47",
  },
  filterButton: {
    width: 43,
    height: 43,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderColor: "rgba(17,73,67,0.08)",
  },
});

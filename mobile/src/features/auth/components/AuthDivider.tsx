import { StyleSheet, Text, View } from "react-native";

export default function AuthDivider() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>ou</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E1E4DF",
  },
  text: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11,
    color: "#999999",
  },
});

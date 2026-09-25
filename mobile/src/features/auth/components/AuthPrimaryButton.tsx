import { Pressable, StyleSheet, Text } from "react-native";

type AuthPrimaryButtonProps = {
  label: string;
  onPress?: () => void;
};

export default function AuthPrimaryButton({ label, onPress }: AuthPrimaryButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 44,
    borderRadius: 25,
    backgroundColor: "#168653",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: "#FFFFFF",
    fontSize: 13,
  },
});

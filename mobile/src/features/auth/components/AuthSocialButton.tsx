import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type AuthSocialButtonProps = {
  provider: "google" | "email";
  onPress?: () => void;
};

export default function AuthSocialButton({ provider, onPress }: AuthSocialButtonProps) {
  const google = provider === "google";

  return (
    <Pressable style={styles.button} onPress={onPress}>
      {google ? (
        <FontAwesome name="google" size={18} color="#DB4437" />
      ) : (
        <Ionicons name="mail-outline" size={21} color="#087C5B" />
      )}

      <Text style={styles.text}>
        {google ? "Continuar com o Google" : "Continuar com o email"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 44,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#E1E4DF",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 10,
  },
  text: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 12,
    color: "#333333",
  },
});

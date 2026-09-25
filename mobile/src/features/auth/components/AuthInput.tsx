import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type AuthInputProps = {
  icon: keyof typeof Ionicons.glyphMap;
  placeholder: string;
  secureTextEntry?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
  keyboardType?: "default" | "email-address";
  autoCapitalize?: "none" | "sentences" | "words";
  autoCorrect?: boolean;
  returnKeyType?: "done" | "next";
};

export default function AuthInput({
  icon,
  placeholder,
  secureTextEntry,
  rightIcon,
  onRightPress,
  keyboardType = "default",
  autoCapitalize = "sentences",
  autoCorrect,
  returnKeyType,
}: AuthInputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={18} color="#8F9590" />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A5AAA6"
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        returnKeyType={returnKeyType}
      />

      {rightIcon && (
        <Pressable onPress={onRightPress} hitSlop={10}>
          <Ionicons name={rightIcon} size={19} color="#8F9590" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E1E4DF",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    color: "#333333",
  },
});

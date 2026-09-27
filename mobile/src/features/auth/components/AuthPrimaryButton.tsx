import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS, RADIUS, TYPOGRAPHY } from "@/components/ui/theme";

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
    height: 48,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.greenStrong,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: COLORS.white,
    fontSize: TYPOGRAPHY.button.fontSize,
  },
});

import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "@/components/ui/theme";

type OnboardingActionsProps = {
  disabled?: boolean;
  onContinue: () => void;
  onLater: () => void;
};

export default function OnboardingActions({
  disabled = false,
  onContinue,
  onLater,
}: OnboardingActionsProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.primaryButton, disabled && styles.disabled]}
        disabled={disabled}
        onPress={onContinue}
      >
        <Text style={styles.primaryText}>Continuar</Text>
        <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
      </Pressable>

      <Pressable onPress={onLater} hitSlop={8}>
        <Text style={styles.laterText}>Preencher mais tarde</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.sm,
    marginTop: SPACING.lg,
    paddingBottom: SPACING.sm,
  },
  primaryButton: {
    width: "100%",
    height: 48,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.greenStrong,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  disabled: {
    opacity: 0.55,
  },
  primaryText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: TYPOGRAPHY.button.fontSize,
    color: COLORS.white,
  },
  laterText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: TYPOGRAPHY.bodySmall.fontSize,
    color: COLORS.green,
  },
});

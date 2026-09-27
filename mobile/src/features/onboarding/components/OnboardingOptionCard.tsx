import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "@/components/ui/theme";

export type OnboardingOption = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
};

type OnboardingOptionCardProps = {
  option: OnboardingOption;
  selected: boolean;
  onPress: () => void;
  minHeight?: number;
};

export default function OnboardingOptionCard({
  option,
  selected,
  onPress,
  minHeight = 112,
}: OnboardingOptionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        { minHeight },
        selected && styles.selected,
      ]}
    >
      <View style={styles.header}>
        <Ionicons name={option.icon} size={25} color="#087C5B" />

        {selected && (
          <View style={styles.check}>
            <Ionicons name="checkmark" size={9} color="#FFFFFF" />
          </View>
        )}
      </View>

      <Text style={styles.title}>{option.title}</Text>
      <Text style={styles.description}>{option.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48.5%",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceStrong,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  selected: {
    borderColor: "#7BCB9D",
    backgroundColor: COLORS.greenSoft,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  check: {
    width: 12,
    height: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#087C5B",
  },
  title: {
    marginTop: 4,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: TYPOGRAPHY.bodyMedium.fontSize,
    lineHeight: TYPOGRAPHY.bodyMedium.lineHeight,
    color: "#123B34",
  },
  description: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: TYPOGRAPHY.bodySmall.fontSize,
    lineHeight: TYPOGRAPHY.bodySmall.lineHeight,
    color: "#858B87",
  },
});

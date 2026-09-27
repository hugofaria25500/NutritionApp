import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { COLORS, RADIUS, SPACING } from "@/components/ui/theme";

type OnboardingHeaderProps = {
  backRoute: Href;
  activeStep: number;
  totalSteps?: number;
};

export default function OnboardingHeader({
  backRoute,
  activeStep,
  totalSteps = 7,
}: OnboardingHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => router.replace(backRoute)}
        style={styles.backButton}
        hitSlop={10}
      >
        <Ionicons name="chevron-back" size={22} color={COLORS.green} />
      </Pressable>

      <View style={styles.progressContainer}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <View
            key={index}
            style={[
              styles.progressSegment,
              index < activeStep
                ? styles.progressActive
                : styles.progressInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginBottom: SPACING.lg,
  },
  backButton: {
    width: 40,
    height: 34,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  progressContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
    marginHorizontal: SPACING.xs,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: RADIUS.pill,
  },
  progressActive: {
    backgroundColor: COLORS.green,
  },
  progressInactive: {
    backgroundColor: COLORS.border,
  },
});

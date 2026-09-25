import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

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
        <Ionicons name="chevron-back" size={20} color="#087C5B" />
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
    height: 34,
    marginBottom: 15,
  },
  backButton: {
    width: 24,
    height: 34,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  progressContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 5,
  },
  progressSegment: {
    flex: 1,
    height: 3,
    borderRadius: 3,
  },
  progressActive: {
    backgroundColor: "#087C5B",
  },
  progressInactive: {
    backgroundColor: "#E1E4DF",
  },
});

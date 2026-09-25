import type { ReactNode } from "react";
import { Href } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import OnboardingHeader from "@/features/onboarding/components/OnboardingHeader";

type OnboardingLayoutProps = {
  backRoute: Href;
  activeStep: number;
  children: ReactNode;
};

export default function OnboardingLayout({
  backRoute,
  activeStep,
  children,
}: OnboardingLayoutProps) {
  return (
    <AppBackground
      source={require("@/assets/images/backgrounds/background_variation_four_white.png")}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <OnboardingHeader
            backRoute={backRoute}
            activeStep={activeStep}
          />

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces
            overScrollMode="never"
          >
            {children}
          </ScrollView>
        </View>
      </SafeAreaView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 21,
    paddingVertical: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 12,
  },
});

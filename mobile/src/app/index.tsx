import { useEffect } from "react";
import { Platform } from "react-native";
import { useRouter, useRootNavigationState } from "expo-router";
import * as NativeSplashScreen from "expo-splash-screen";

if (Platform.OS !== "web") {
  NativeSplashScreen.preventAutoHideAsync().catch(() => {});
}

export default function Index() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const timeout = setTimeout(() => {
      router.replace("/(onboarding)/init");

      if (Platform.OS !== "web") {
        NativeSplashScreen.hideAsync().catch(() => {});
      }
    }, 1200);

    return () => clearTimeout(timeout);
  }, [navigationState?.key, router]);

  return null;
}

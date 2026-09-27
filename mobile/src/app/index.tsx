import { useEffect } from "react";
import { useRouter, useRootNavigationState } from "expo-router";

import SplashScreen from "@/features/splash/screens/SplashScreen";

export default function Index() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const timeout = setTimeout(() => {
      router.replace("/(onboarding)/init");
    }, 1500);

    return () => clearTimeout(timeout);
  }, [navigationState?.key, router]);

  return <SplashScreen />;
}

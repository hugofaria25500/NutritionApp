import { useEffect, useRef } from 'react';
import { Animated, Easing, Image } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.86)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        damping: 14,
        mass: 0.7,
        stiffness: 150,
        useNativeDriver: true,
      }),
    ]).start();

    const transition = setTimeout(() => {
      router.replace('/home' as never);
    }, 1200);

    return () => clearTimeout(transition);
  }, [opacity, scale]);

  return (
    <Animated.View className="flex-1 items-center justify-center bg-black">
      <Animated.View
        className="aspect-[1.5] w-[65%] max-w-[340px]"
        style={{ opacity, transform: [{ scale }] }}>
        <Image
          source={require('@/assets/images/branding/logo.png')}
          accessibilityLabel="NutritionApp"
          resizeMode="contain"
          className="h-full w-full"
        />
      </Animated.View>
    </Animated.View>
  );
}

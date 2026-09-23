import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity, transform: [{ scale }] }]}>
        <Image
          source={require('@/assets/images/branding/logo.png')}
          accessibilityLabel="NutritionApp"
          resizeMode="contain"
          style={styles.logo}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  logoContainer: {
    width: '65%',
    aspectRatio: 1.5,
    maxWidth: 340,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

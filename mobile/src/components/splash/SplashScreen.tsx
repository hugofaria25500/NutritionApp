import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default function SplashScreen() {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.85)).current;

  const nameOpacity = useRef(new Animated.Value(0)).current;
  const nameTranslateY = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.sequence([
      // Logo
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.spring(logoScale, {
          toValue: 1,
          damping: 14,
          stiffness: 140,
          mass: 0.8,
          useNativeDriver: true,
        }),
      ]),

      // Pequena pausa
      Animated.delay(100),

      // Nome
      Animated.parallel([
        Animated.timing(nameOpacity, {
          toValue: 1,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(nameTranslateY, {
          toValue: 0,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [
    logoOpacity,
    logoScale,
    nameOpacity,
    nameTranslateY,
  ]);

  return (
    <View style={styles.container}>

      {/* Background */}
      <Image
        source={require('@/assets/images/backgrounds/background_variation_one_white.png')}
        resizeMode="stretch"
        style={styles.background}
      />

      {/* Logo + Name */}
      <View style={styles.content}>

        <Animated.Image
          source={require('@/assets/images/branding/logo.png')}
          resizeMode="contain"
          style={[
            styles.logo,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        />

        <Animated.Image
          source={require('@/assets/images/branding/logo_name.png')}
          resizeMode="contain"
          style={[
            styles.logoName,
            {
              opacity: nameOpacity,
              transform: [{ translateY: nameTranslateY }],
            },
          ]}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },

  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 48
  },

  logo: {
    width: 180,
    height: 120,
  },

  logoName: {
    width: 220,
    height: 60,
    marginTop: 4,
  },
});
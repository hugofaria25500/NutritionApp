import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function InitScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require('@/assets/images/backgrounds/background_food_variation_three_white.png')}
        resizeMode="stretch"
        style={styles.background}
      />

      <View style={styles.content}>

        {/* Branding */}
        <View style={styles.branding}>
          <Image
            source={require('@/assets/images/branding/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />

          <Image
            source={require('@/assets/images/branding/logo_name.png')}
            resizeMode="contain"
            style={styles.logoName}
          />

          <Text style={styles.tagline}>
            Eat better, with what you have.
          </Text>
        </View>

        {/* Benefits */}
        <View style={styles.benefits}>

          <View style={styles.benefit}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="restaurant-outline"
                size={24}
                color="#087C5B"
              />
            </View>

            <Text style={styles.benefitTitle}>
              Receitas
            </Text>

            <Text style={styles.benefitText}>
              personalizadas
            </Text>
          </View>

          <View style={styles.benefit}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="leaf-outline"
                size={24}
                color="#087C5B"
              />
            </View>

            <Text style={styles.benefitTitle}>
              Com os teus
            </Text>

            <Text style={styles.benefitText}>
              ingredientes
            </Text>
          </View>

          <View style={styles.benefit}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="heart-outline"
                size={24}
                color="#087C5B"
              />
            </View>

            <Text style={styles.benefitTitle}>
              Mais saúde
            </Text>

            <Text style={styles.benefitText}>
              todos os dias
            </Text>
          </View>

        </View>

        {/* Actions */}
        <View style={styles.actions}>

          <Pressable
            style={styles.primaryButton}
            onPress={() => router.replace('/home')}
          >
            <Text style={styles.primaryButtonText}>
              Começar
            </Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() =>  router.replace('/login')}
          >
            <Text style={styles.secondaryButtonText}>
              Já tenho conta
            </Text>
          </Pressable>

        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Uma vida mais saudável, começa aqui.
        </Text>

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
    backgroundColor: '#F8FAF5',
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
    paddingVertical: 24,
    paddingHorizontal: 24
  },

  branding: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  logo: {
    width: 180,
    height: 150,
  },

  logoName: {
    width: 250,
    height: 80,
  },

  tagline: {
    fontSize: 13,
    color: '#888888',
    fontWeight: '500',
  },

  benefits: {
    flex: 2,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  benefit: {
    width: '31%',
    alignItems: 'center',
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF3E8',
    marginBottom: 8,
  },

  benefitTitle: {
    fontSize: 11,
    color: '#777777',
    textAlign: 'center',
  },

  benefitText: {
    fontSize: 11,
    color: '#777777',
    textAlign: 'center',
  },

  actions: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    gap: 12,
  },

  primaryButton: {
    width: '100%',
    height: 54,
    borderRadius: 28,
    backgroundColor: '#168653',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  secondaryButton: {
    width: '100%',
    height: 54,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#D9DDD7',
    backgroundColor: 'rgba(255,255,255,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: '#087C5B',
    fontSize: 15,
    fontWeight: '500',
  },

  footer: {
    flex: 1,
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
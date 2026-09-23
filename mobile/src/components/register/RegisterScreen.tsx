import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Background */}
      <Image
        source={require('@/assets/images/backgrounds/background_food_variation_three_white.png')}
        resizeMode="stretch"
        style={styles.background}
      />

      <SafeAreaView style={styles.safeArea}>

        {/* Back button */}
        <Pressable
            onPress={() => router.replace('/init')}
            style={styles.backButton}
            hitSlop={10}
        >
            <Ionicons
                name="chevron-back"
                size={14}
                color="#FFFFFF"
            />

            <Text style={styles.backButtonText}>
                Back
            </Text>
        </Pressable>

        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
          >
            <View style={styles.content}>

              {/* Branding */}
              <View style={styles.branding}>
                <Image
                  source={require('@/assets/images/branding/full_logo.png')}
                  resizeMode="contain"
                  style={styles.logo}
                />
              </View>

              {/* Register */}
              <View style={styles.registerSection}>

                <Text style={styles.title}>
                  Criar a tua conta
                </Text>

                <Text style={styles.subtitle}>
                  Começa a tua jornada para uma vida{'\n'}
                  mais saudável.
                </Text>

                {/* Name */}
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="person-outline"
                    size={18}
                    color="#8F9590"
                  />

                  <TextInput
                    placeholder="Nome"
                    placeholderTextColor="#A5AAA6"
                    style={styles.input}
                    autoCapitalize="words"
                    returnKeyType="next"
                  />
                </View>

                {/* Email */}
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="mail-outline"
                    size={18}
                    color="#8F9590"
                  />

                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="#A5AAA6"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                  />
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={18}
                    color="#8F9590"
                  />

                  <TextInput
                    placeholder="Palavra-passe"
                    placeholderTextColor="#A5AAA6"
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    returnKeyType="done"
                  />

                  <Pressable hitSlop={10}>
                    <Ionicons
                      name="eye-outline"
                      size={19}
                      color="#8F9590"
                    />
                  </Pressable>
                </View>

                {/* Create account */}
                <Pressable
                  style={styles.primaryButton}
                  onPress={() => {
                    // Clerk entra aqui mais tarde
                  }}
                >
                  <Text style={styles.primaryButtonText}>
                    Criar conta
                  </Text>
                </Pressable>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />

                  <Text style={styles.dividerText}>
                    ou
                  </Text>

                  <View style={styles.divider} />
                </View>

                {/* Google */}
                <Pressable
                  style={styles.googleButton}
                  onPress={() => {
                    // Google + Clerk entra aqui mais tarde
                  }}
                >
                  <FontAwesome
                    name="google"
                    size={18}
                    color="#DB4437"
                  />

                  <Text style={styles.googleButtonText}>
                    Continuar com o Google
                  </Text>
                </Pressable>

                {/* Login */}
                <View style={styles.loginRow}>
                  <Text style={styles.loginText}>
                    Já tens conta?
                  </Text>

                  <Pressable
                    onPress={() => router.replace('/login')}
                    hitSlop={8}
                  >
                    <Text style={styles.loginLink}>
                      Iniciar sessão
                    </Text>
                  </Pressable>
                </View>

              </View>

              {/* Footer */}
              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  Ao criar uma conta, aceitas os nossos
                </Text>

                <Text style={styles.footerLinks}>
                  Termos de Utilização
                  <Text style={styles.footerSeparator}> e </Text>
                  Política de Privacidade.
                </Text>
              </View>

            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAF5',
    overflow: 'hidden',
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

  safeArea: {
    flex: 1,
  },

  keyboard: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

   /* Back */

   backButton: {
  alignSelf: 'flex-start',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,

  backgroundColor: '#087C5B',
  paddingLeft: 7,
  paddingRight: 14,
  paddingVertical: 7,
  borderRadius: 18,

  marginTop: 10,
  marginStart: 10,
},

    backButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    },

  /*
   * O botão está fora deste content.
   * Assim não interfere na posição do logo.
   */
  content: {
    flexGrow: 1,
    minHeight: '100%',
    paddingHorizontal: 48,
    paddingTop: 12,
    paddingBottom: 24,
  },

  /* Branding */

  branding: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 180,
    height: 220,
  },

  /* Register */

  registerSection: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: '700',
    color: '#087C5B',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 5,
    marginBottom: 18,
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
    textAlign: 'center',
  },

  /* Inputs */

  inputContainer: {
    width: '100%',
    height: 42,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E1E4DF',
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 9,
  },

  input: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 12,
    color: '#333333',
  },

  /* Primary button */

  primaryButton: {
    width: '100%',
    height: 48,
    borderRadius: 25,
    backgroundColor: '#168653',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  /* Divider */

  dividerContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 12,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E1E4DF',
  },

  dividerText: {
    fontSize: 10,
    color: '#999999',
  },

  /* Google */

  googleButton: {
    width: '100%',
    height: 44,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#E1E4DF',
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  googleButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
  },

  /* Login */

  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 16,
  },

  loginText: {
    fontSize: 11,
    color: '#999999',
  },

  loginLink: {
    fontSize: 11,
    color: '#087C5B',
    fontWeight: '600',
  },

  /* Footer */

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  footerText: {
    fontSize: 9,
    color: '#999999',
    textAlign: 'center',
  },

  footerLinks: {
    marginTop: 3,
    fontSize: 9,
    color: '#087C5B',
    textAlign: 'center',
  },

  footerSeparator: {
    color: '#999999',
  },
});
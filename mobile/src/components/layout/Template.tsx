import { Image, StyleSheet, View } from 'react-native';

export default function Template() {
  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require('@/assets/images/backgrounds/background_variation_one_white.png')}
        resizeMode="stretch"
        style={styles.background}
      />

      {/* Content */}
      <View style={styles.content}>
        {/* Conteúdo do Init entra aqui */}
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
});
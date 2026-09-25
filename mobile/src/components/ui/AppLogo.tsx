import { Image, StyleSheet } from "react-native";

type AppLogoProps = {
  width?: number;
  height?: number;
};

export default function AppLogo({ width = 220, height = 120 }: AppLogoProps) {
  return (
    <Image
      source={require("@/assets/images/branding/full_logo.png")}
      resizeMode="contain"
      style={[styles.logo, { width, height }]}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 220,
    height: 120,
  },
});

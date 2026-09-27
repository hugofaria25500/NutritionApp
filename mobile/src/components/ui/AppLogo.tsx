import { Image, StyleSheet } from "react-native";

type AppLogoProps = {
  width?: number;
  height?: number;
};

export default function AppLogo({ width = 220, height = 120 }: AppLogoProps) {
  const isHorizontal = width / height > 2;

  return (
    <Image
      source={
        isHorizontal
          ? require("@/assets/images/branding/full_logo_horizontal.png")
          : require("@/assets/images/branding/full_logo.png")
      }
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

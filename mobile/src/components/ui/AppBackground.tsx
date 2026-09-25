import type { ReactNode } from "react";
import { Image, ImageResizeMode, StyleSheet, View } from "react-native";

type AppBackgroundProps = {
  source: number;
  children: ReactNode;
  resizeMode?: ImageResizeMode;
};

export default function AppBackground({
  source,
  children,
  resizeMode = "stretch",
}: AppBackgroundProps) {
  return (
    <View style={styles.container}>
      <Image source={source} resizeMode={resizeMode} style={styles.background} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#F8FAF5",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
});

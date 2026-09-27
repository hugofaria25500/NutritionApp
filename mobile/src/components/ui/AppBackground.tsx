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
      <Image
        source={source}
        resizeMode={resizeMode}
        style={styles.background}
      />

      <View style={styles.foreground}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#F8FAF5",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  foreground: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
});

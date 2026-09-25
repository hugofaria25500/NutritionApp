import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type HomeCarouselProps = {
  snapInterval: number;
  children: ReactNode;
  large?: boolean;
};

export default function HomeCarousel({
  snapInterval,
  children,
  large = false,
}: HomeCarouselProps) {
  return (
    <View style={styles.viewport}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        snapToInterval={snapInterval}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={[styles.row, large && styles.largeRow]}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewport: {
    width: "100%",
    overflow: "hidden",
  },
  row: {
    gap: 7,
    paddingBottom: 5,
    paddingRight: 7,
  },
  largeRow: {
    gap: 7,
  },
});

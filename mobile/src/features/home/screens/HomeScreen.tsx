import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import { useAppFonts } from "@/components/ui/useAppFonts";
import HomeActionCard from "@/features/home/components/HomeActionCard";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import HomeCarousel from "@/features/home/components/HomeCarousel";
import HomeHeader from "@/features/home/components/HomeHeader";
import HomeRecipeCard from "@/features/home/components/HomeRecipeCard";
import HomeSectionHeader from "@/features/home/components/HomeSectionHeader";
import {
  homeActions,
  homeCopy,
  navigationItems,
  popularSuggestions,
  recipeSuggestions,
} from "@/features/home/data/homeData";

const COLORS = {
  ink: "#082D31",
  muted: "#7C8584",
  green: "#2D8C45",
};

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) return null;

  const bottomBarBottom = Math.max(insets.bottom, 8) + 8;
  const goToExplore = () => router.push("/explore");

  return (
    <AppBackground
      source={require("@/assets/images/backgrounds/background_food_variation_one_white.png")}
      resizeMode="cover"
    >
      <View style={styles.backgroundWash} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: Math.max(insets.top, 10),
            paddingBottom: 100 + insets.bottom,
          },
        ]}
      >
        <View style={styles.content}>
          <HomeHeader />

          <View style={styles.hero}>
            <Text style={styles.heroTitle}>
              {homeCopy.greeting}{"\n"}
              <Text style={styles.heroTitleAccent}>{homeCopy.greetingAccent}</Text>
            </Text>
            <Text style={styles.heroHelper}>{homeCopy.helper}</Text>
          </View>

          <View style={styles.actionsList}>
            {homeActions.map((action) => (
              <HomeActionCard
                key={action.title}
                title={action.title}
                subtitle={action.subtitle}
                icon={action.icon}
                accent={action.accent}
                onPress={goToExplore}
              />
            ))}
          </View>

          <HomeSectionHeader
            title={homeCopy.popularTitle}
            actionLabel={homeCopy.popularAction}
            onActionPress={goToExplore}
          />

          <HomeCarousel snapInterval={97}>
            {popularSuggestions.map((suggestion) => (
              <HomeRecipeCard
                key={suggestion.title}
                image={suggestion.image}
                title={suggestion.title}
                subtitle={suggestion.subtitle}
                onPress={goToExplore}
              />
            ))}
          </HomeCarousel>

          <HomeSectionHeader
            title={homeCopy.recipesTitle}
            actionLabel={homeCopy.recipesAction}
            onActionPress={goToExplore}
            marginTop={19}
          />

          <HomeCarousel snapInterval={157} large>
            {recipeSuggestions.map((recipe) => (
              <HomeRecipeCard
                key={recipe.title}
                image={recipe.image}
                title={recipe.title}
                subtitle={recipe.meta}
                variant="large"
                onPress={goToExplore}
              />
            ))}
          </HomeCarousel>
        </View>
      </ScrollView>

      <HomeBottomNavigation items={navigationItems} bottom={bottomBarBottom} />
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  backgroundWash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(247,250,244,0.58)",
  },
  scrollContent: {
    width: "100%",
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 430,
    paddingHorizontal: 21,
    alignItems: "center",
  },
  hero: {
    width: "100%",
    alignItems: "center",
    marginBottom: 19,
  },
  heroTitle: {
    width: "100%",
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 25,
    lineHeight: 30,
    color: COLORS.ink,
    textAlign: "left",
    letterSpacing: -0.7,
  },
  heroTitleAccent: {
    color: COLORS.green,
  },
  heroHelper: {
    width: "100%",
    marginTop: 6,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11.5,
    lineHeight: 16,
    color: COLORS.muted,
    textAlign: "left",
  },
  actionsList: {
    width: "100%",
    gap: 8,
  },
});

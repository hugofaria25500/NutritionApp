import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";

import {
  homeActions,
  homeCopy,
  navigationItems,
  popularSuggestions,
  recipeSuggestions,
} from "@/data/homeData";

const COLORS = {
  ink: "#082D31",
  muted: "#7C8584",
  green: "#2D8C45",
  greenDark: "#087C5B",
  greenSoft: "#EAF4E8",
  border: "rgba(15, 54, 49, 0.07)",
  background: "#F7FAF4",
};

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const bottomBarBottom = Math.max(insets.bottom, 8) + 8;

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/backgrounds/background_food_variation_one_white.png")}
        resizeMode="cover"
        style={styles.background}
      />
      <View style={styles.backgroundWash} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: Math.max(insets.top, 10),
            paddingBottom: 116 + insets.bottom,
          },
        ]}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Image
              source={require("@/assets/images/branding/full_logo.png")}
              resizeMode="contain"
              style={styles.logo}
            />

            <View style={styles.headerActions}>
              <Pressable style={styles.notificationButton} hitSlop={8}>
                <Ionicons name="notifications-outline" size={20} color={COLORS.ink} />
                <View style={styles.notificationDot} />
              </Pressable>

            </View>
          </View>

          <View style={styles.hero}>
            <Text style={styles.heroTitle}>
              {homeCopy.greeting}{"\n"}
              <Text style={styles.heroTitleAccent}>{homeCopy.greetingAccent}</Text>
            </Text>
            <Text style={styles.heroHelper}>{homeCopy.helper}</Text>
          </View>

          <View style={styles.actionsList}>
            {homeActions.map((action) => (
              <Pressable
                key={action.title}
                style={({ pressed }) => [styles.actionCard, pressed && styles.pressed]}
                onPress={() => router.push("/explore")}
              >
                <View
                  style={[
                    styles.actionIcon,
                    action.accent === "green" ? styles.actionIconGreen : undefined,
                  ]}
                >
                  <Ionicons
                    name={action.icon}
                    size={23}
                    color={action.accent === "green" ? COLORS.greenDark : COLORS.ink}
                  />
                </View>

                <View style={styles.actionCopy}>
                  <Text style={styles.actionTitle}>{action.title}</Text>
                  <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
                </View>

                <Ionicons name="chevron-forward" size={20} color={COLORS.ink} />
              </Pressable>
            ))}
          </View>

          <View style={styles.popularHeader}>
            <Text style={styles.sectionTitle}>{homeCopy.popularTitle}</Text>
            <Pressable style={styles.seeAll} onPress={() => router.push("/explore")}>
              <Text style={styles.seeAllText}>{homeCopy.popularAction}</Text>
              <Ionicons name="arrow-forward" size={15} color={COLORS.greenDark} />
            </Pressable>
          </View>

          <View style={styles.carouselViewport}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              snapToInterval={97}
              decelerationRate="fast"
              snapToAlignment="start"
              contentContainerStyle={styles.cardsRow}
            >
              {popularSuggestions.map((suggestion) => (
                <Pressable
                  key={suggestion.title}
                  style={({ pressed }) => [styles.recipeCard, pressed && styles.pressed]}
                  onPress={() => router.push("/explore")}
                >
                  <Image source={{ uri: suggestion.image }} style={styles.recipeImage} />
                  <View style={styles.recipeOverlay} />

                  <View style={styles.favoriteBadge}>
                    <Ionicons name="heart-outline" size={16} color="#FFFFFF" />
                  </View>

                  <View style={styles.recipeCopy}>
                    <Text style={styles.recipeTitle}>{suggestion.title}</Text>
                    <Text style={styles.recipeSubtitle}>{suggestion.subtitle}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          <View style={styles.recipesHeader}>
            <Text style={styles.sectionTitle}>{homeCopy.recipesTitle}</Text>
            <Pressable style={styles.seeAll} onPress={() => router.push("/explore")}>
              <Text style={styles.seeAllText}>{homeCopy.recipesAction}</Text>
              <Ionicons name="arrow-forward" size={15} color={COLORS.greenDark} />
            </Pressable>
          </View>

          <View style={styles.recipeCarouselViewport}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              snapToInterval={157}
              decelerationRate="fast"
              snapToAlignment="start"
              contentContainerStyle={styles.recipeCardsRow}
            >
              {recipeSuggestions.map((recipe) => (
                <Pressable
                  key={recipe.title}
                  style={({ pressed }) => [
                    styles.recipeSuggestionCard,
                    pressed && styles.pressed,
                  ]}
                  onPress={() => router.push("/explore")}
                >
                  <Image source={{ uri: recipe.image }} style={styles.recipeSuggestionImage} />
                  <View style={styles.recipeSuggestionOverlay} />
                  <View style={styles.favoriteBadge}>
                    <Ionicons name="heart-outline" size={16} color="#FFFFFF" />
                  </View>
                  <View style={styles.recipeSuggestionCopy}>
                    <Text style={styles.recipeSuggestionTitle} numberOfLines={2}>
                      {recipe.title}
                    </Text>
                    <Text style={styles.recipeSuggestionMeta}>{recipe.meta}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomNav, { bottom: bottomBarBottom }]}>
        {navigationItems.map((item) => {
          const active = item.route === "/home";

          return (
            <Pressable
              key={item.route}
              style={styles.navItem}
              onPress={() => router.push(item.route)}
              hitSlop={4}
            >
              <Ionicons
                name={item.icon}
                size={22}
                color={active ? COLORS.greenDark : "#7B8585"}
              />
              <Text style={[styles.navLabel, active && styles.navLabelActive]}>
                {item.label}
              </Text>
              {active && <View style={styles.activeDot} />}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    overflow: "hidden",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    opacity: 0.96,
  },
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
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  logo: {
    width: 140,
    height: 42,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  notificationButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.82)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#163F37",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E7493C",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#B9C8B3",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.95)",
  },
  avatarText: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 14,
    color: COLORS.ink,
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
  actionCard: {
    minHeight: 55,
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 11,
    paddingVertical: 8,
    backgroundColor: "rgba(255,255,255,0.84)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.62)",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#163F37",
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  actionIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: "rgba(248,250,247,0.9)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  actionIconGreen: {
    backgroundColor: COLORS.greenSoft,
  },
  actionCopy: {
    flex: 1,
  },
  actionTitle: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    color: COLORS.ink,
    fontSize: 11.5,
    lineHeight: 15,
  },
  actionSubtitle: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    color: COLORS.muted,
    fontSize: 9.7,
    lineHeight: 13,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
  popularHeader: {
    width: "100%",
    marginTop: 17,
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: COLORS.ink,
    fontSize: 15,
    letterSpacing: -0.35,
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
  },
  seeAllText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    color: COLORS.greenDark,
    fontSize: 9.5,
  },
  carouselViewport: {
    width: "100%",
    overflow: "hidden",
  },
  cardsRow: {
    gap: 7,
    paddingBottom: 5,
    paddingRight: 7,
  },
  recipeCard: {
    width: 90,
    height: 115,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#B8C3BA",
  },
  recipeImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  recipeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(4,25,21,0.16)",
  },
  favoriteBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "rgba(12,40,33,0.26)",
    alignItems: "center",
    justifyContent: "center",
  },
  recipeCopy: {
    position: "absolute",
    left: 8,
    right: 6,
    bottom: 7,
  },
  recipeTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#FFFFFF",
    fontSize: 10.5,
    lineHeight: 12,
  },
  recipeSubtitle: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    color: "rgba(255,255,255,0.9)",
    fontSize: 7.2,
    lineHeight: 9,
  },
  recipesHeader: {
    width: "100%",
    marginTop: 19,
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  recipeCarouselViewport: {
    width: "100%",
    overflow: "hidden",
  },
  recipeCardsRow: {
    gap: 7,
    paddingBottom: 5,
    paddingRight: 7,
  },
  recipeSuggestionCard: {
    width: 150,
    height: 172,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#B8C3BA",
  },
  recipeSuggestionImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  recipeSuggestionOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(4,25,21,0.20)",
  },
  recipeSuggestionCopy: {
    position: "absolute",
    left: 10,
    right: 9,
    bottom: 9,
  },
  recipeSuggestionTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#FFFFFF",
    fontSize: 11.5,
    lineHeight: 14,
  },
  recipeSuggestionMeta: {
    marginTop: 3,
    fontFamily: "PlusJakartaSans_500Medium",
    color: "rgba(255,255,255,0.9)",
    fontSize: 8,
    lineHeight: 10,
  },
  bottomNav: {
    position: "absolute",
    alignSelf: "center",
    width: "94%",
    maxWidth: 420,
    minHeight: 68,
    borderRadius: 23,
    paddingHorizontal: 5,
    paddingVertical: 7,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.75)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#173E36",
    shadowOpacity: 0.13,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  navItem: {
    minWidth: 50,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    gap: 3,
  },
  navLabel: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 7.2,
    lineHeight: 10,
    color: "#7B8585",
  },
  navLabelActive: {
    color: COLORS.greenDark,
  },
  activeDot: {
    position: "absolute",
    bottom: 0,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.greenDark,
  },
});

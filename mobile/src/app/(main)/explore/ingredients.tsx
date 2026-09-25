import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import { useAppFonts } from "@/components/ui/useAppFonts";
import ExploreSearchBar from "@/features/explore/components/ExploreSearchBar";
import {
  discoveryIngredients,
  featuredIngredients,
} from "@/features/explore/data/exploreData";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import { navigationItems } from "@/features/home/data/homeData";

const collections = {
  popular: {
    title: "Ingredientes populares",
    subtitle: "Os ingredientes que mais aparecem nas tuas descobertas.",
    items: featuredIngredients,
  },
  discovery: {
    title: "Descobre novos ingredientes",
    subtitle: "Explora ingredientes diferentes para variar as tuas refeições.",
    items: discoveryIngredients,
  },
} as const;

type CollectionKey = keyof typeof collections;

export default function ExploreIngredientsListScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useAppFonts();
  const [query, setQuery] = useState("");
  const params = useLocalSearchParams<{ collection?: string }>();

  const collection: CollectionKey =
    params.collection === "discovery" ? "discovery" : "popular";
  const content = collections[collection];

  const visibleIngredients = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return content.items;

    return content.items.filter((ingredient) =>
      ingredient.title.toLowerCase().includes(normalizedQuery),
    );
  }, [content.items, query]);

  if (!fontsLoaded) return null;

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
            paddingBottom: 108 + insets.bottom,
          },
        ]}
      >
        <View style={styles.content}>
          <View style={styles.topBar}>
            <Pressable
              style={styles.backButton}
              onPress={() => router.back()}
              hitSlop={8}
            >
              <Ionicons name="arrow-back" size={19} color="#082D31" />
            </Pressable>

            <Text style={styles.topBarTitle}>Explorar</Text>
            <View style={styles.topBarSpacer} />
          </View>

          <View style={styles.hero}>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.subtitle}>{content.subtitle}</Text>
          </View>

          <ExploreSearchBar
            value={query}
            placeholder="Pesquisar ingredientes..."
            onChangeText={setQuery}
            onFilterPress={() => undefined}
          />

          <Text style={styles.resultLabel}>
            {visibleIngredients.length} ingredientes
          </Text>

          {visibleIngredients.length > 0 ? (
            <View style={styles.grid}>
              {visibleIngredients.map((ingredient) => (
                <View key={ingredient.id} style={styles.gridItem}>
                  <View style={styles.card}>
                    <Image source={{ uri: ingredient.image }} style={styles.cardImage} />
                    <View style={styles.cardFooter}>
                      <Text style={styles.cardTitle}>{ingredient.title}</Text>
                      <Ionicons name="chevron-forward" size={12} color="#7A8985" />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="search-outline" size={20} color="#6F817C" />
              <Text style={styles.emptyTitle}>
                Não encontrámos esse ingrediente
              </Text>
              <Text style={styles.emptyText}>
                Experimenta pesquisar por outro nome.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <HomeBottomNavigation
        items={navigationItems}
        bottom={Math.max(insets.bottom, 8) + 8}
      />
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
  },
  topBar: {
    width: "100%",
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.82)",
    borderWidth: 1,
    borderColor: "rgba(15,54,49,0.07)",
  },
  topBarTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 11,
    color: "#244C47",
  },
  topBarSpacer: {
    width: 38,
  },
  hero: {
    width: "100%",
    marginTop: 24,
    marginBottom: 13,
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 27,
    lineHeight: 32,
    letterSpacing: -0.7,
    color: "#082D31",
  },
  subtitle: {
    marginTop: 4,
    maxWidth: 330,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 10.5,
    lineHeight: 15,
    color: "#7C8584",
  },
  resultLabel: {
    marginTop: 19,
    marginBottom: 11,
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 9,
    color: "#6C7D78",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },
  gridItem: {
    width: "48.2%",
  },
  card: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.94)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.06)",
  },
  cardImage: {
    width: "100%",
    height: 145,
  },
  cardFooter: {
    minHeight: 42,
    paddingHorizontal: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    flex: 1,
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 9.5,
    color: "#234B46",
  },
  emptyState: {
    marginTop: 24,
    paddingVertical: 30,
    paddingHorizontal: 22,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.82)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.05)",
  },
  emptyTitle: {
    marginTop: 10,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 11,
    color: "#244C47",
  },
  emptyText: {
    marginTop: 4,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 9,
    color: "#7E8986",
  },
});

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import { useAppFonts } from "@/components/ui/useAppFonts";
import ExploreSearchBar from "@/features/explore/components/ExploreSearchBar";
import { allIngredients } from "@/features/explore/data/exploreData";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import { navigationItems } from "@/features/home/data/homeData";

const PAGE_SIZE = 30;

export default function ExploreIngredientsListScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useAppFonts();
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleIngredients = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return allIngredients.slice(0, visibleCount);
    }

    return allIngredients.filter((ingredient) =>
      ingredient.title.toLowerCase().includes(normalizedQuery),
    );
  }, [query, visibleCount]);

  if (!fontsLoaded) return null;

  const canLoadMore = !query.trim() && visibleCount < allIngredients.length;

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
            <Pressable style={styles.backButton} onPress={() => router.back()} hitSlop={8}>
              <Ionicons name="arrow-back" size={19} color="#082D31" />
            </Pressable>
            <Text style={styles.topBarTitle}>Ingredientes</Text>
            <View style={styles.topBarSpacer} />
          </View>

          <View style={styles.hero}>
            <Text style={styles.title}>Ingredientes</Text>
            <Text style={styles.subtitle}>Encontra os ingredientes que procuras.</Text>
          </View>

          <ExploreSearchBar
            value={query}
            placeholder="Pesquisar ingredientes..."
            onChangeText={setQuery}
          />

          <Text style={styles.resultLabel}>
            {query.trim() ? `${visibleIngredients.length} resultados` : `${Math.min(visibleCount, allIngredients.length)} ingredientes`}
          </Text>

          {visibleIngredients.length > 0 ? (
            <View style={styles.grid}>
              {visibleIngredients.map((ingredient) => (
                <View key={ingredient.id} style={styles.gridItem}>
                  <View style={styles.card}>
                    <Image source={{ uri: ingredient.image }} style={styles.cardImage} />
                    <View style={styles.cardFooter}>
                      <Text style={styles.cardTitle}>{ingredient.title}</Text>
                      <Ionicons name="chevron-forward" size={10} color="#7A8985" />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="search-outline" size={20} color="#6F817C" />
              <Text style={styles.emptyTitle}>Não encontrámos esse ingrediente</Text>
              <Text style={styles.emptyText}>Experimenta pesquisar por outro nome.</Text>
            </View>
          )}

          {canLoadMore && (
            <Pressable
              style={styles.loadMoreButton}
              onPress={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, allIngredients.length))}
            >
              <Ionicons name="add" size={22} color="#FFFFFF" />
            </Pressable>
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
  scrollContent: { width: "100%", alignItems: "center" },
  content: { width: "100%", maxWidth: 430, paddingHorizontal: 21 },
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
  topBarTitle: { fontFamily: "PlusJakartaSans_700Bold", fontSize: 11, color: "#244C47" },
  topBarSpacer: { width: 38 },
  hero: { width: "100%", marginTop: 24, marginBottom: 13 },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 27,
    lineHeight: 32,
    letterSpacing: -0.7,
    color: "#082D31",
  },
  subtitle: {
    marginTop: 4,
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
    rowGap: 10,
  },
  gridItem: { width: "31.5%" },
  card: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,0.94)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.06)",
  },
  cardImage: { width: "100%", height: 96 },
  cardFooter: {
    minHeight: 34,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    flex: 1,
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 7.5,
    color: "#234B46",
  },
  loadMoreButton: {
    alignSelf: "center",
    marginTop: 22,
    marginBottom: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#075A50",
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
  emptyTitle: { marginTop: 10, fontFamily: "PlusJakartaSans_700Bold", fontSize: 11, color: "#244C47" },
  emptyText: { marginTop: 4, fontFamily: "PlusJakartaSans_400Regular", fontSize: 9, color: "#7E8986" },
});

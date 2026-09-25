import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import { useAppFonts } from "@/components/ui/useAppFonts";
import type { ExploreRecipe } from "@/features/explore/data/exploreData";
import ExploreFilterChips from "@/features/explore/components/ExploreFilterChips";
import ExploreFilterSheet from "@/features/explore/components/ExploreFilterSheet";
import ExploreRecipeCard from "@/features/explore/components/ExploreRecipeCard";
import ExploreSearchBar from "@/features/explore/components/ExploreSearchBar";
import {
  allIngredients,
  exploreCopy,
  exploreFilters,
  forYouRecipes,
  popularRecipes,
  quickRecipes,
} from "@/features/explore/data/exploreData";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import HomeCarousel from "@/features/home/components/HomeCarousel";
import HomeHeader from "@/features/home/components/HomeHeader";
import HomeSectionHeader from "@/features/home/components/HomeSectionHeader";
import { navigationItems } from "@/features/home/data/homeData";

type ExploreContentType = (typeof exploreFilters)[number];
type TimeFilter = "all" | "15" | "30";
type DifficultyFilter = "all" | "easy" | "medium";

function filterRecipes(
  recipes: ExploreRecipe[],
  query: string,
  selectedTime: TimeFilter,
  selectedDifficulty: DifficultyFilter,
) {
  const normalizedQuery = query.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const matchesQuery =
      !normalizedQuery || recipe.title.toLowerCase().includes(normalizedQuery);
    const minutes = Number.parseInt(recipe.meta, 10);
    const matchesTime =
      selectedTime === "all" ||
      (selectedTime === "15" && minutes <= 15) ||
      (selectedTime === "30" && minutes <= 30);
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      (selectedDifficulty === "easy" && recipe.detail.includes("Fácil")) ||
      (selectedDifficulty === "medium" && recipe.detail.includes("Médio"));

    return matchesQuery && matchesTime && matchesDifficulty;
  });
}

export default function ExploreScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useAppFonts();
  const [query, setQuery] = useState("");
  const [activeContentType, setActiveContentType] =
    useState<ExploreContentType>("Receitas");
  const [favoriteRecipeIds, setFavoriteRecipeIds] = useState<Set<string>>(
    new Set(),
  );
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState<TimeFilter>("all");
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyFilter>("all");
  const [visibleIngredientCount, setVisibleIngredientCount] = useState(30);

  const visiblePopularRecipes = useMemo(
    () => filterRecipes(popularRecipes, query, selectedTime, selectedDifficulty),
    [query, selectedTime, selectedDifficulty],
  );

  const visibleForYouRecipes = useMemo(
    () => filterRecipes(forYouRecipes, query, selectedTime, selectedDifficulty),
    [query, selectedTime, selectedDifficulty],
  );

  const visibleQuickRecipes = useMemo(
    () => filterRecipes(quickRecipes, query, selectedTime, selectedDifficulty),
    [query, selectedTime, selectedDifficulty],
  );

  const favoriteRecipes = useMemo(
    () =>
      [...popularRecipes, ...forYouRecipes, ...quickRecipes].filter((recipe) =>
        favoriteRecipeIds.has(recipe.id),
      ),
    [favoriteRecipeIds],
  );

  const visibleIngredients = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return allIngredients.slice(0, visibleIngredientCount);
    }

    return allIngredients.filter((ingredient) =>
      ingredient.title.toLowerCase().includes(normalizedQuery),
    );
  }, [query, visibleIngredientCount]);

  if (!fontsLoaded) return null;

  const applyFilters = (
    time: TimeFilter,
    difficulty: DifficultyFilter,
  ) => {
    setSelectedTime(time);
    setSelectedDifficulty(difficulty);
  };

  const toggleFavorite = (recipeId: string) => {
    setFavoriteRecipeIds((current) => {
      const next = new Set(current);

      if (next.has(recipeId)) {
        next.delete(recipeId);
      } else {
        next.add(recipeId);
      }

      return next;
    });
  };

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
          <HomeHeader />

          <View style={styles.hero}>
            <Text style={styles.title}>{exploreCopy.title}</Text>
            <Text style={styles.subtitle}>{exploreCopy.subtitle}</Text>
          </View>

          <ExploreSearchBar
            value={query}
            placeholder={
              activeContentType === "Ingredientes"
                ? "Pesquisar ingredientes..."
                : exploreCopy.searchPlaceholder
            }
            onChangeText={setQuery}
            onFilterPress={() => setFilterVisible(true)}
            showFilterButton={activeContentType === "Receitas"}
          />

          <View style={styles.contentTypeSection}>
            <View style={styles.sectionDivider}>
              <View style={styles.dividerLine} />
            </View>

            <ExploreFilterChips
              filters={exploreFilters}
              activeFilter={activeContentType}
              onFilterChange={(filter) => {
                setActiveContentType(filter);
                setQuery("");
                if (filter === "Ingredientes") {
                  setVisibleIngredientCount(30);
                }
              }}
            />
          </View>

          {activeContentType === "Receitas" ? (
            <>
              <HomeSectionHeader
                title="Os teus favoritos"
                actionLabel="Ver todos"
                onActionPress={() => setQuery("")}
                marginTop={20}
              />

              {favoriteRecipes.length > 0 ? (
                <HomeCarousel snapInterval={188} large>
                  {favoriteRecipes.map((recipe) => (
                    <ExploreRecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      isFavorite
                      onFavoritePress={() => toggleFavorite(recipe.id)}
                    />
                  ))}
                </HomeCarousel>
              ) : (
                <View style={styles.favoriteEmpty}>
                  <Ionicons name="heart-outline" size={16} color="#6F817C" />
                  <Text style={styles.favoriteEmptyText}>
                    Guarda receitas com o coração e elas aparecem aqui.
                  </Text>
                </View>
              )}

              <HomeSectionHeader
                title="Receitas populares"
                actionLabel="Ver todas"
                onActionPress={() => setQuery("")}
                marginTop={20}
              />

              {visiblePopularRecipes.length > 0 ? (
                <HomeCarousel snapInterval={188} large>
                  {visiblePopularRecipes.map((recipe) => (
                    <ExploreRecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      isFavorite={favoriteRecipeIds.has(recipe.id)}
                      onFavoritePress={() => toggleFavorite(recipe.id)}
                    />
                  ))}
                </HomeCarousel>
              ) : (
                <Text style={styles.noResults}>
                  Não encontrámos receitas com estes filtros.
                </Text>
              )}

              <HomeSectionHeader
                title="Receitas para ti"
                actionLabel="Ver todas"
                onActionPress={() => setQuery("")}
                marginTop={20}
              />

              {visibleForYouRecipes.length > 0 ? (
                <HomeCarousel snapInterval={188} large>
                  {visibleForYouRecipes.map((recipe) => (
                    <ExploreRecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      isFavorite={favoriteRecipeIds.has(recipe.id)}
                      onFavoritePress={() => toggleFavorite(recipe.id)}
                    />
                  ))}
                </HomeCarousel>
              ) : (
                <Text style={styles.noResults}>
                  Não encontrámos receitas para estes filtros.
                </Text>
              )}

              <HomeSectionHeader
                title="Receitas rápidas"
                actionLabel="Ver todas"
                onActionPress={() => setQuery("")}
                marginTop={20}
              />

              {visibleQuickRecipes.length > 0 ? (
                <HomeCarousel snapInterval={188} large>
                  {visibleQuickRecipes.map((recipe) => (
                    <ExploreRecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      isFavorite={favoriteRecipeIds.has(recipe.id)}
                      onFavoritePress={() => toggleFavorite(recipe.id)}
                    />
                  ))}
                </HomeCarousel>
              ) : (
                <Text style={styles.noResults}>
                  Não encontrámos receitas com estes filtros.
                </Text>
              )}

            </>
          ) : (
            <>
              <View style={styles.ingredientHeaderRow}>
                <Text style={styles.ingredientCount}>
                  {query.trim()
                    ? `${visibleIngredients.length} resultados`
                    : `${Math.min(visibleIngredientCount, allIngredients.length)} ingredientes`}
                </Text>
              </View>

              {visibleIngredients.length > 0 ? (
                <View style={styles.ingredientGrid}>
                  {visibleIngredients.map((ingredient) => (
                    <View key={ingredient.id} style={styles.ingredientGridItem}>
                      <View style={styles.ingredientCard}>
                        <Image
                          source={{ uri: ingredient.image }}
                          style={styles.ingredientImage}
                        />
                        <View style={styles.ingredientCardFooter}>
                          <Text style={styles.ingredientTitle}>
                            {ingredient.title}
                          </Text>
                          <Ionicons
                            name="chevron-forward"
                            size={10}
                            color="#7A8985"
                          />
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              ) : (
                <View style={styles.ingredientEmptyState}>
                  <Ionicons name="search-outline" size={20} color="#6F817C" />
                  <Text style={styles.ingredientEmptyTitle}>
                    Não encontrámos esse ingrediente
                  </Text>
                  <Text style={styles.ingredientEmptyText}>
                    Experimenta pesquisar por outro nome.
                  </Text>
                </View>
              )}

              {!query.trim() &&
                visibleIngredientCount < allIngredients.length && (
                  <Pressable
                    style={styles.loadMoreButton}
                    onPress={() =>
                      setVisibleIngredientCount((count) =>
                        Math.min(count + 30, allIngredients.length),
                      )
                    }
                    accessibilityLabel="Carregar mais ingredientes"
                  >
                    <Ionicons name="add" size={22} color="#FFFFFF" />
                  </Pressable>
                )}
            </>
          )}
        </View>
      </ScrollView>

      <HomeBottomNavigation
        items={navigationItems}
        bottom={Math.max(insets.bottom, 8) + 8}
      />

      <ExploreFilterSheet
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
        selectedTime={selectedTime}
        selectedDifficulty={selectedDifficulty}
        onApply={applyFilters}
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
    alignItems: "center",
  },
  hero: {
    width: "100%",
    marginBottom: 11,
  },
  contentTypeSection: {
    width: "100%",
    marginTop: 7,
    paddingTop: 2,
    paddingBottom: 4,
    alignItems: "center",
  },
  sectionDivider: {
    width: "100%",
    alignItems: "center",
    marginBottom: 9,
  },
  dividerLine: {
    width: "92%",
    height: 1,
    backgroundColor: "rgba(82,117,108,0.16)",
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: -0.8,
    color: "#082D31",
  },
  subtitle: {
    marginTop: 2,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 11.5,
    lineHeight: 16,
    color: "#7C8584",
  },
  ingredientHeaderRow: {
    width: "100%",
    marginTop: 14,
    marginBottom: 10,
  },
  ingredientCount: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 9,
    color: "#6C7D78",
  },
  ingredientGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
  ingredientGridItem: { width: "31.5%" },
  ingredientCard: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,0.94)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.06)",
  },
  ingredientImage: { width: "100%", height: 96 },
  ingredientCardFooter: {
    minHeight: 34,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ingredientTitle: {
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#075A50",
  },
  ingredientEmptyState: {
    marginTop: 24,
    paddingVertical: 30,
    paddingHorizontal: 22,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.82)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.05)",
  },
  ingredientEmptyTitle: {
    marginTop: 10,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 11,
    color: "#244C47",
  },
  ingredientEmptyText: {
    marginTop: 4,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 9,
    color: "#7E8986",
  },
  emptyState: {
    width: "100%",
    marginTop: 34,
    paddingHorizontal: 28,
    paddingVertical: 28,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.86)",
    alignItems: "center",
  },
  emptyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F1EA",
  },
  emptyHeart: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 29,
    lineHeight: 32,
    color: "#087C5B",
  },
  emptyTitle: {
    marginTop: 12,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 12,
    color: "#123E3B",
  },
  emptyText: {
    marginTop: 5,
    maxWidth: 280,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 8.5,
    lineHeight: 13,
    color: "#7E8986",
    textAlign: "center",
  },
  noResults: {
    width: "100%",
    paddingVertical: 18,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 9,
    color: "#7E8986",
    textAlign: "center",
  },
  favoriteEmpty: {
    width: "100%",
    minHeight: 48,
    paddingHorizontal: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(255,255,255,0.72)",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.05)",
  },
  favoriteEmptyText: {
    flex: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 8,
    lineHeight: 12,
    color: "#7E8986",
  },

});

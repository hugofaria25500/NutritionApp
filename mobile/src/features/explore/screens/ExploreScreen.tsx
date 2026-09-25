import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import { useAppFonts } from "@/components/ui/useAppFonts";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import HomeCarousel from "@/features/home/components/HomeCarousel";
import HomeHeader from "@/features/home/components/HomeHeader";
import HomeSectionHeader from "@/features/home/components/HomeSectionHeader";
import ExploreCategoryCard from "@/features/explore/components/ExploreCategoryCard";
import ExploreFilterChips from "@/features/explore/components/ExploreFilterChips";
import ExploreIngredientCard from "@/features/explore/components/ExploreIngredientCard";
import ExploreRecipeCard from "@/features/explore/components/ExploreRecipeCard";
import ExploreSearchBar from "@/features/explore/components/ExploreSearchBar";
import {
  exploreCopy,
  exploreFilters,
  featuredIngredients,
  featuredRecipes,
  popularCategories,
  quickRecipes,
  recentSearches,
} from "@/features/explore/data/exploreData";
import { navigationItems } from "@/features/home/data/homeData";

type ExploreFilter = (typeof exploreFilters)[number];

export default function ExploreScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useAppFonts();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<ExploreFilter>("Tudo");

  const visibleRecipes = useMemo(() => {
    if (!query.trim()) return featuredRecipes;
    const normalized = query.trim().toLowerCase();
    return featuredRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(normalized),
    );
  }, [query]);

  if (!fontsLoaded) return null;

  const goToSearch = () => {
    // Search screen will be connected here when its route is introduced.
  };

  const selectRecentSearch = (value: string) => setQuery(value);

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
            placeholder={exploreCopy.searchPlaceholder}
            onChangeText={setQuery}
            onFilterPress={goToSearch}
          />

          <ExploreFilterChips
            filters={exploreFilters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <HomeSectionHeader
            title="Pesquisas recentes"
            actionLabel="Limpar"
            onActionPress={() => setQuery("")}
            marginTop={13}
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recentRow}
          >
            {recentSearches.map((search) => (
              <View key={search.id} style={styles.recentChip}>
                <Text style={styles.recentText}>{search.label}</Text>
                <Text style={styles.recentClose}>×</Text>
              </View>
            ))}
          </ScrollView>

          <HomeSectionHeader
            title="Categorias populares"
            actionLabel="Ver todas"
            onActionPress={goToSearch}
            marginTop={15}
          />

          <HomeCarousel snapInterval={90}>
            {popularCategories.map((category) => (
              <ExploreCategoryCard
                key={category.id}
                category={category}
                onPress={() => setQuery(category.title)}
              />
            ))}
          </HomeCarousel>

          <HomeSectionHeader
            title="Receitas em destaque"
            actionLabel="Ver todas"
            onActionPress={goToSearch}
            marginTop={18}
          />

          <HomeCarousel snapInterval={188} large>
            {visibleRecipes.map((recipe) => (
              <ExploreRecipeCard
                key={recipe.id}
                recipe={recipe}
                onPress={() => router.push("/explore")}
              />
            ))}
          </HomeCarousel>

          <HomeSectionHeader
            title="Receitas rápidas"
            actionLabel="Ver todas"
            onActionPress={goToSearch}
            marginTop={18}
          />

          <HomeCarousel snapInterval={188} large>
            {quickRecipes.map((recipe) => (
              <ExploreRecipeCard
                key={recipe.id}
                recipe={recipe}
                onPress={() => router.push("/explore")}
              />
            ))}
          </HomeCarousel>

          <HomeSectionHeader
            title="Ingredientes em destaque"
            actionLabel="Ver todos"
            onActionPress={goToSearch}
            marginTop={18}
          />

          <HomeCarousel snapInterval={79}>
            {featuredIngredients.map((ingredient) => (
              <ExploreIngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                onPress={() => setQuery(ingredient.title)}
              />
            ))}
          </HomeCarousel>

          {activeFilter === "Favoritos" && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>Os teus favoritos aparecem aqui.</Text>
              <Text style={styles.emptyText}>
                Guarda receitas com o coração para as encontrares rapidamente.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <HomeBottomNavigation items={navigationItems} bottom={Math.max(insets.bottom, 8) + 8} />
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
  recentRow: {
    gap: 7,
    paddingRight: 4,
  },
  recentChip: {
    height: 31,
    paddingHorizontal: 10,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(235,242,237,0.92)",
    borderWidth: 1,
    borderColor: "rgba(23,73,64,0.04)",
  },
  recentText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 8.5,
    color: "#365D57",
  },
  recentClose: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 13,
    lineHeight: 13,
    color: "#6F817C",
  },
  emptyState: {
    width: "100%",
    marginTop: 20,
    padding: 16,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.82)",
    alignItems: "center",
  },
  emptyTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 11,
    color: "#123E3B",
  },
  emptyText: {
    marginTop: 4,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 8.5,
    lineHeight: 13,
    color: "#7E8986",
    textAlign: "center",
  },
});

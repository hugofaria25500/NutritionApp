import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import AppLogo from "@/components/ui/AppLogo";
import { useAppFonts } from "@/components/ui/useAppFonts";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import { navigationItems } from "@/features/home/data/homeData";
import PlanMealCard from "@/features/plan/components/PlanMealCard";
import { planCopy, planMeals, planWeek } from "@/features/plan/data/planData";

const COLORS = {
  ink: "#082D31",
  muted: "#7C8584",
  green: "#2D8C45",
  darkGreen: "#087C5B",
};

export default function PlanScreen() {
  const insets = useSafeAreaInsets();
  const [selectedDayIndex, setSelectedDayIndex] = useState(3);
  const [meals, setMeals] = useState(planMeals);
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);
  const [calorieGoal, setCalorieGoal] = useState(planCopy.calorieGoal);
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) return null;

  const bottomBarBottom = Math.max(insets.bottom, 8) + 8;
  const selectedDay = planWeek[selectedDayIndex];

  const showNotifications = () =>
    Alert.alert("Notificações", "Não tens novas notificações por agora.");

  const adjustGoal = () =>
    Alert.alert("Ajustar objetivo", "Escolhe o teu objetivo diário.", [
      { text: "1 600 kcal", onPress: () => setCalorieGoal("1 600") },
      { text: "1 800 kcal", onPress: () => setCalorieGoal("1 800") },
      { text: "2 000 kcal", onPress: () => setCalorieGoal("2 000") },
      { text: "Cancelar", style: "cancel" },
    ]);

  const generatePlan = () => {
    setMeals((current) => [...current].sort(() => Math.random() - 0.5));
    Alert.alert("Plano atualizado", "Reorganizámos as tuas refeições para este dia.");
  };

  const addMeal = () => {
    const newMeal = {
      id: `extra-${Date.now()}`,
      type: "Nova refeição",
      time: "21:30",
      title: "Bowl de Iogurte, Fruta e Aveia",
      meta: "5 min · Simples",
      calories: "240 kcal",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80",
    };
    setMeals((current) => [...current, newMeal]);
  };

  const toggleFavorite = (mealId: string) => {
    setFavoriteMealIds((current) =>
      current.includes(mealId)
        ? current.filter((id) => id !== mealId)
        : [...current, mealId],
    );
  };

  const handleMealMenu = (mealId: string) => {
    const meal = meals.find((item) => item.id === mealId);
    if (!meal) return;

    Alert.alert(meal.title, "O que queres fazer?", [
      {
        text: "Remover refeição",
        style: "destructive",
        onPress: () => setMeals((current) => current.filter((item) => item.id !== mealId)),
      },
      { text: "Cancelar", style: "cancel" },
    ]);
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
            paddingTop: Math.max(insets.top, 8),
            paddingBottom: 112 + insets.bottom,
          },
        ]}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <AppLogo width={118} height={36} />

            <View style={styles.headerActions}>
              <Pressable style={styles.iconButton} hitSlop={6} onPress={showNotifications}>
                <Ionicons name="notifications-outline" size={19} color={COLORS.ink} />
                <View style={styles.notificationDot} />
              </Pressable>

            </View>
          </View>

          <View style={styles.hero}>
            <Text style={styles.title}>{planCopy.title}</Text>
            <Text style={styles.subtitle}>{planCopy.subtitle}</Text>
          </View>

          <View style={styles.weekRow}>
            <Pressable
              style={styles.weekArrow}
              onPress={() => setSelectedDayIndex((index) => Math.max(0, index - 1))}
              disabled={selectedDayIndex === 0}
            >
              <Ionicons
                name="chevron-back"
                size={15}
                color={selectedDayIndex === 0 ? "#B8C1BE" : "#6E7D79"}
              />
            </Pressable>

            {planWeek.map((item, index) => {
              const selected = index === selectedDayIndex;

              return (
                <Pressable
                  key={item.date}
                  style={[styles.dayItem, selected && styles.selectedDay]}
                  onPress={() => setSelectedDayIndex(index)}
                >
                  <Text style={[styles.dayName, selected && styles.selectedDayText]}>
                    {item.day}
                  </Text>
                  <Text style={[styles.dayDate, selected && styles.selectedDayText]}>
                    {item.date}
                  </Text>
                </Pressable>
              );
            })}

            <Pressable
              style={styles.weekArrow}
              onPress={() => setSelectedDayIndex((index) => Math.min(planWeek.length - 1, index + 1))}
              disabled={selectedDayIndex === planWeek.length - 1}
            >
              <Ionicons
                name="chevron-forward"
                size={15}
                color={selectedDayIndex === planWeek.length - 1 ? "#B8C1BE" : "#6E7D79"}
              />
            </Pressable>
          </View>

          <View style={styles.goalCard}>
            <View style={styles.goalTopRow}>
              <View style={styles.progressRing}>
                <View style={styles.progressRingInner}>
                  <Text style={styles.ringValue}>{planCopy.calorieConsumed}</Text>
                  <Text style={styles.ringUnit}>kcal</Text>
                </View>
              </View>

              <View style={styles.goalMain}>
                <Text style={styles.todayLabel}>
                  {selectedDayIndex === 3 ? "Hoje" : `${selectedDay.day} ${selectedDay.date}`}
                </Text>
                <View style={styles.calorieRow}>
                  <Text style={styles.calorieValue}>{planCopy.calorieConsumed}</Text>
                  <Text style={styles.calorieGoal}> / {calorieGoal} kcal</Text>
                </View>
              </View>

              <Pressable style={styles.adjustButton} onPress={adjustGoal}>
                <Ionicons name="options-outline" size={12} color={COLORS.ink} />
                <Text style={styles.adjustText}>Ajustar objetivo</Text>
              </Pressable>
            </View>

            <View style={styles.macroRow}>
              <Macro label="Proteínas" value={planCopy.protein} progress={45} />
              <Macro label="Hidratos" value={planCopy.carbs} progress={30} />
              <Macro label="Gorduras" value={planCopy.fats} progress={25} />
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {selectedDayIndex === 3
                ? "As tuas refeições de hoje"
                : `Refeições de ${selectedDay.day} ${selectedDay.date}`}
            </Text>
            <Pressable style={styles.planButton} onPress={generatePlan}>
              <Ionicons name="sparkles-outline" size={12} color={COLORS.darkGreen} />
              <Text style={styles.planButtonText}>Gerar plano</Text>
            </Pressable>
          </View>

          <View style={styles.mealsList}>
            {meals.map((meal) => (
              <PlanMealCard
                key={meal.id}
                meal={meal}
                isFavorite={favoriteMealIds.includes(meal.id)}
                onFavoritePress={() => toggleFavorite(meal.id)}
                onMorePress={() => handleMealMenu(meal.id)}
              />
            ))}
          </View>

          <Pressable style={styles.addMealCard} onPress={addMeal}>
            <View style={styles.addIcon}>
              <Ionicons name="add" size={19} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.addTitle}>Adicionar refeição</Text>
              <Text style={styles.addSubtitle}>Completa o teu dia com uma nova refeição</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <HomeBottomNavigation items={navigationItems} bottom={bottomBarBottom} />
    </AppBackground>
  );
}

function Macro({
  label,
  value,
  progress,
}: {
  label: string;
  value: string;
  progress: number;
}) {
  return (
    <View style={styles.macro}>
      <View style={styles.macroHeader}>
        <Text style={styles.macroLabel}>{label}</Text>
        <Text style={styles.macroValue}>{value}</Text>
      </View>
      <View style={styles.macroTrack}>
        <View style={[styles.macroFill, { width: `${progress}%` }]} />
      </View>
    </View>
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
    paddingHorizontal: 15,
  },
  header: {
    width: "100%",
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.84)",
    borderWidth: 1,
    borderColor: "rgba(15,54,49,0.07)",
  },
  notificationDot: {
    position: "absolute",
    top: 7,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E7493C",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCEDE0",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.08)",
  },
  avatarText: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 9,
    color: "#286A4B",
  },
  hero: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 29,
    lineHeight: 35,
    letterSpacing: -0.7,
    color: COLORS.ink,
  },
  subtitle: {
    marginTop: 3,
    maxWidth: 320,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12.5,
    lineHeight: 13,
    color: COLORS.muted,
  },
  weekRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },
  weekArrow: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.82)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(20,59,51,0.05)",
  },
  dayItem: {
    width: 34,
    height: 39,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedDay: {
    backgroundColor: COLORS.darkGreen,
  },
  dayName: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 10,
    color: "#7A8582",
  },
  dayDate: {
    marginTop: 2,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 12,
    color: "#314C48",
  },
  selectedDayText: {
    color: "#FFFFFF",
  },
  goalCard: {
    width: "100%",
    minHeight: 116,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "rgba(237,245,236,0.92)",
    borderWidth: 1,
    borderColor: "rgba(45,140,69,0.05)",
  },
  goalTopRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  progressRing: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 8,
    borderColor: "#D4E8D8",
    borderTopColor: COLORS.green,
    borderRightColor: COLORS.green,
    borderBottomColor: COLORS.green,
    alignItems: "center",
    justifyContent: "center",
  },
  progressRingInner: {
    alignItems: "center",
  },
  ringValue: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 10,
    color: COLORS.ink,
  },
  ringUnit: {
    marginTop: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 6,
    color: COLORS.muted,
  },
  goalMain: {
    flex: 1,
    marginLeft: 12,
  },
  todayLabel: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 9,
    color: COLORS.muted,
  },
  calorieRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 1,
  },
  calorieValue: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 21,
    color: COLORS.ink,
  },
  calorieGoal: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 9.5,
    color: COLORS.muted,
  },
  adjustButton: {
    height: 30,
    paddingHorizontal: 9,
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255,255,255,0.82)",
  },
  adjustText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 7,
    color: COLORS.ink,
  },
  macroRow: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
    paddingTop: 9,
    borderTopWidth: 1,
    borderTopColor: "rgba(45,140,69,0.10)",
  },
  macro: {
    flex: 1,
  },
  macroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  macroLabel: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 9,
    color: COLORS.muted,
  },
  macroValue: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 9,
    color: "#4E6761",
  },
  macroTrack: {
    height: 4,
    borderRadius: 2,
    backgroundColor: "#D9E7DC",
    overflow: "hidden",
  },
  macroFill: {
    height: "100%",
    borderRadius: 2,
    backgroundColor: COLORS.green,
  },
  sectionHeader: {
    width: "100%",
    marginTop: 10,
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 11,
    color: COLORS.ink,
  },
  planButton: {
    height: 26,
    paddingHorizontal: 9,
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(231,243,233,0.92)",
  },
  planButtonText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 8,
    color: COLORS.darkGreen,
  },
  mealsList: {
    width: "100%",
    gap: 6,
  },
  addMealCard: {
    width: "100%",
    minHeight: 52,
    marginTop: 7,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CFE2D2",
    backgroundColor: "rgba(255,255,255,0.48)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 9,
  },
  addIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.darkGreen,
  },
  addTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 9,
    color: COLORS.ink,
  },
  addSubtitle: {
    marginTop: 2,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 7,
    color: COLORS.muted,
  },
});

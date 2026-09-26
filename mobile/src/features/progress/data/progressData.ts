export type ProgressMetric = {
  label: string;
  value: string;
  detail: string;
  progress: number;
  icon: string;
};

export const progressCopy = {
  title: "O teu progresso",
  subtitle: "Acompanha os teus hábitos e vê a tua evolução de forma simples.",
  calorieAverage: "1 650 kcal",
  calorieChange: "-12%",
  weight: "68,2 kg",
  weightChange: "-2,4 kg",
  previousMonthWeight: "70,6 kg",
};

export const progressMetrics: ProgressMetric[] = [
  { label: "Proteínas", value: "90 / 120 g", detail: "45%", progress: 75, icon: "nutrition-outline" },
  { label: "Hidratos", value: "135 / 180 g", detail: "30%", progress: 75, icon: "flash-outline" },
  { label: "Gorduras", value: "50 / 70 g", detail: "25%", progress: 71, icon: "heart-outline" },
];

export const weeklyCalories = [
  { day: "Seg", value: 1580 },
  { day: "Ter", value: 1710 },
  { day: "Qua", value: 1600 },
  { day: "Qui", value: 1650 },
  { day: "Sex", value: 1680 },
  { day: "Sáb", value: 1720 },
  { day: "Dom", value: 1550 },
];

export const habits = [
  { id: "water", label: "Beber água", value: "5/8 copos", progress: 63, icon: "water-outline" },
  { id: "vegetables", label: "Comer mais verduras", value: "4/5", progress: 80, icon: "leaf-outline" },
  { id: "processed", label: "Evitar ultraprocessados", value: "3/5", progress: 60, icon: "ban-outline" },
  { id: "home", label: "Cozinhar em casa", value: "5/5", progress: 100, icon: "home-outline" },
];

export const insights = [
  { id: "protein", title: "Tens comido mais proteína esta semana", detail: "+20% em relação à semana anterior.", icon: "bulb-outline" },
  { id: "meals", title: "As tuas refeições estão mais equilibradas", detail: "Boa distribuição de macronutrientes.", icon: "bar-chart-outline" },
  { id: "water", title: "Mantém o ritmo!", detail: "Estás 72% mais perto do teu objetivo.", icon: "sparkles-outline" },
];

export const weightMonth = {
  label: "Setembro 2026",
  previousMonthLabel: "Agosto",
};

export const weightEntries = [
  { date: "2 Set", value: "70,6", height: 44 },
  { date: "5 Set", value: "70,2", height: 39 },
  { date: "9 Set", value: "70,4", height: 42 },
  { date: "12 Set", value: "69,8", height: 35 },
  { date: "16 Set", value: "69,5", height: 30 },
  { date: "19 Set", value: "69,2", height: 26 },
  { date: "22 Set", value: "68,8", height: 20 },
  { date: "26 Set", value: "68,2", height: 14 },
];

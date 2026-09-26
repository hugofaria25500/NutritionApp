export type ProgressPoint = {
  label: string;
  date: number;
  value: number;
};

export type MacroData = {
  id: string;
  label: string;
  percentage: number;
  current: number;
  target: number;
  unit: string;
  color: string;
  icon: string;
};

export type WeightEntry = {
  day: number;
  value: number;
};

export type Insight = {
  id: string;
  title: string;
  detail: string;
  icon: string;
};

export const progressCopy = {
  title: "O teu progresso",
  subtitle: "Acompanha os teus hábitos e vê a tua evolução de forma simples.",
};

export const calorieSummary = {
  current: 1250,
  target: 1800,
  unit: "kcal",
  label: "Média diária esta semana",
  change: -12,
  changeLabel: "vs. semana anterior",
};

export const weeklyCalories: ProgressPoint[] = [
  { label: "Seg", date: 22, value: 1580 },
  { label: "Ter", date: 23, value: 1710 },
  { label: "Qua", date: 24, value: 1600 },
  { label: "Qui", date: 25, value: 1650 },
  { label: "Sex", date: 26, value: 1680 },
  { label: "Sáb", date: 27, value: 1720 },
  { label: "Dom", date: 28, value: 1550 },
];

export const macronutrients: MacroData[] = [
  { id: "protein", label: "Proteínas", percentage: 45, current: 90, target: 120, unit: "g", color: "#35A65A", icon: "leaf-outline" },
  { id: "carbs", label: "Hidratos", percentage: 30, current: 135, target: 180, unit: "g", color: "#FFC34D", icon: "flash-outline" },
  { id: "fats", label: "Gorduras", percentage: 25, current: 50, target: 70, unit: "g", color: "#FF8054", icon: "flame-outline" },
];

export const weightSummary = {
  current: 68.2,
  previousPeriod: 70.6,
  change: -2.4,
  changeLabel: "desde 1 Set",
  unit: "kg",
  periodLabel: "Setembro 2026",
};

export const weightEntries: WeightEntry[] = [
  { day: 2, value: 70.6 },
  { day: 5, value: 70.2 },
  { day: 9, value: 70.4 },
  { day: 12, value: 69.8 },
  { day: 16, value: 69.5 },
  { day: 19, value: 69.2 },
  { day: 22, value: 68.8 },
  { day: 26, value: 68.2 },
];

export const weightGoal = {
  label: "Perder 5 kg",
  total: 5,
  achieved: 2.4,
  current: 68.2,
  target: 65,
  remainingWeeks: 3,
};

export const insights: Insight[] = [
  { id: "protein", title: "Tens comido mais proteína!", detail: "A tua média de proteína aumentou 18% esta semana.", icon: "bulb-outline" },
  { id: "meals", title: "As tuas refeições estão mais equilibradas", detail: "Boa distribuição de macronutrientes.", icon: "bar-chart-outline" },
  { id: "water", title: "Mantém o ritmo!", detail: "Estás 72% mais perto do teu objetivo.", icon: "sparkles-outline" },
];

export const habits = [
  { id: "water", label: "Beber água", value: "5/8 copos", progress: 63, icon: "water-outline" },
  { id: "vegetables", label: "Comer mais verduras", value: "4/5", progress: 80, icon: "leaf-outline" },
  { id: "processed", label: "Evitar ultraprocessados", value: "3/5", progress: 60, icon: "ban-outline" },
  { id: "home", label: "Cozinhar em casa", value: "5/5", progress: 100, icon: "home-outline" },
];

export type PlanMeal = {
  id: string;
  type: string;
  time: string;
  title: string;
  meta: string;
  calories: string;
  image: string;
};

export const planCopy = {
  title: "O meu plano",
  subtitle: "As tuas refeições organizadas, de forma simples e equilibrada.",
  calorieGoal: "1 800",
  calorieConsumed: "1 250",
  protein: "92 g",
  carbs: "138 g",
  fats: "42 g",
};

export const planMeals: PlanMeal[] = [
  {
    id: "breakfast",
    type: "Pequeno-almoço",
    time: "08:00",
    title: "Iogurte com Aveia e Frutos Vermelhos",
    meta: "5 min · Simples",
    calories: "320 kcal",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "snack-morning",
    type: "Lanche da manhã",
    time: "10:30",
    title: "Maçã com Amêndoas",
    meta: "2 min · Simples",
    calories: "180 kcal",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "lunch",
    type: "Almoço",
    time: "13:00",
    title: "Frango Grelhado com Arroz Integral e Legumes",
    meta: "30 min · Simples",
    calories: "520 kcal",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "snack-afternoon",
    type: "Lanche da tarde",
    time: "16:30",
    title: "Smoothie de Banana e Morangos",
    meta: "5 min · Simples",
    calories: "210 kcal",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "dinner",
    type: "Jantar",
    time: "20:00",
    title: "Salmão com Batata Doce e Brócolos",
    meta: "25 min · Médio",
    calories: "480 kcal",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80",
  },
];

export const planWeek = [
  { day: "Seg", date: "22" },
  { day: "Ter", date: "23" },
  { day: "Qua", date: "24" },
  { day: "Qui", date: "25" },
  { day: "Sex", date: "26" },
  { day: "Sáb", date: "27" },
  { day: "Dom", date: "28" },
];

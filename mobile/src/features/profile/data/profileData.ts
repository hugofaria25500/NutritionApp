export type ProfileItem = {
  id: string;
  label: string;
  subtitle?: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
};

export const profileUser = {
  name: "Pedro Silva",
  age: 28,
  height: "1,78 m",
  weight: "68 kg",
  helper: "Vamos continuar a tua jornada para uma alimentação mais equilibrada!",
};

export const profilePreferences: ProfileItem[] = [
  { id: "flexible", label: "Alimentação flexível", icon: "leaf-outline", iconColor: "#2D9A5B", backgroundColor: "#E9F7EE" },
  { id: "protein", label: "Alto em proteína", icon: "barbell-outline", iconColor: "#D99628", backgroundColor: "#FFF1DB" },
  { id: "vegetables", label: "Mais vegetais", icon: "nutrition-outline", iconColor: "#F06B66", backgroundColor: "#FFE7E5" },
  { id: "gluten", label: "Evitar glúten", icon: "close-circle-outline", iconColor: "#D49B20", backgroundColor: "#FFF2CF" },
  { id: "dairy", label: "Evitar lacticínios", icon: "water-outline", iconColor: "#547BE8", backgroundColor: "#EAF0FF" },
  { id: "quick", label: "Receitas rápidas", icon: "timer-outline", iconColor: "#5588D9", backgroundColor: "#EAF1FF" },
  { id: "simple", label: "Simples ingredientes", icon: "restaurant-outline", iconColor: "#37A15D", backgroundColor: "#E7F6EA" },
  { id: "home", label: "Cozinhar em casa", icon: "cafe-outline", iconColor: "#37A15D", backgroundColor: "#E7F6EA" },
];

export const profileGoals = [
  {
    id: "healthy",
    title: "Manter um estilo de vida saudável",
    subtitle: "Alimentação equilibrada, prática e sustentável.",
    icon: "locate-outline",
  },
  {
    id: "calories",
    title: "Défice calórico moderado",
    subtitle: "Cerca de 1 800 kcal/dia",
    icon: "stats-chart-outline",
  },
];

export const profileAccountItems = [
  { id: "personal", label: "Dados pessoais", icon: "person-outline" },
  { id: "notifications", label: "Notificações", icon: "notifications-outline" },
  { id: "units", label: "Unidades e idioma", icon: "globe-outline" },
  { id: "privacy", label: "Privacidade", icon: "shield-checkmark-outline" },
];

export const profileOtherItems = [
  { id: "settings", label: "Definições da aplicação", icon: "settings-outline" },
  { id: "support", label: "Ajuda e suporte", icon: "help-circle-outline" },
];

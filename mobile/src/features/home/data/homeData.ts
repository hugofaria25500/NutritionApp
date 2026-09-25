import type { ComponentProps } from "react";
import type { Ionicons } from "@expo/vector-icons";

export type IconName = ComponentProps<typeof Ionicons>["name"];

export type HomeAction = {
  title: string;
  subtitle: string;
  icon: IconName;
  accent: "green" | "neutral";
};

export type PopularSuggestion = {
  title: string;
  subtitle: string;
  image: string;
};

export type RecipeSuggestion = {
  title: string;
  meta: string;
  image: string;
};

export type NavigationItem = {
  label: string;
  icon: IconName;
  route: "/home" | "/explore" | "/plan" | "/progress" | "/profile";
};

export const homeCopy = {
  greeting: "Como te podemos",
  greetingAccent: "ajudar hoje?",
  helper: "Escolhe uma opção ou descreve\no que te apetece. Nós tratamos do resto.",
  popularTitle: "Sugestões populares",
  popularAction: "Ver todas",
  recipesTitle: "Receitas para ti",
  recipesAction: "Ver todas",
};

export const homeActions: HomeAction[] = [
  {
    title: "Dar-me sugestões",
    subtitle: "Com base no que me apetece",
    icon: "sparkles-outline",
    accent: "green",
  },
  {
    title: "Usar ingredientes",
    subtitle: "que tenho em casa",
    icon: "restaurant-outline",
    accent: "neutral",
  },
  {
    title: "Receitas rápidas",
    subtitle: "(< 30 minutos)",
    icon: "time-outline",
    accent: "neutral",
  },
];

export const popularSuggestions: PopularSuggestion[] = [
  {
    title: "Carne",
    subtitle: "Receitas saborosas",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Rápidas",
    subtitle: "≤ 30 minutos",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Poucos\ningredientes",
    subtitle: "Simples e práticas",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Saudáveis",
    subtitle: "Leves e equilibradas",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Vegetarianas",
    subtitle: "Cheias de sabor",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
  },
];

export const recipeSuggestions: RecipeSuggestion[] = [
  {
    title: "Frango cremoso com legumes",
    meta: "25 min · Fácil",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Massa com pesto e tomate",
    meta: "20 min · Fácil",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Bowl de salmão e abacate",
    meta: "30 min · Médio",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Salada crocante",
    meta: "15 min · Fácil",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Legumes assados",
    meta: "35 min · Fácil",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
  },
];

export const navigationItems: NavigationItem[] = [
  { label: "Início", icon: "home", route: "/home" },
  { label: "Explorar", icon: "search-outline", route: "/explore" },
  { label: "Plano", icon: "calendar-outline", route: "/plan" },
  { label: "Progresso", icon: "stats-chart-outline", route: "/progress" },
  { label: "Perfil", icon: "person-outline", route: "/profile" },
];

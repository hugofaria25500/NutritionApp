export type ExploreCategory = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

export type ExploreRecipe = {
  id: string;
  title: string;
  meta: string;
  detail: string;
  image: string;
};

export type ExploreIngredient = {
  id: string;
  title: string;
  image: string;
};

export const exploreCopy = {
  title: "Explorar",
  subtitle: "Descobre receitas, ingredientes e muito mais.",
  searchPlaceholder: "Pesquisar receitas, ingredientes...",
};

export const exploreFilters = ["Receitas", "Ingredientes", "Guardados"] as const;

export const popularCategories: ExploreCategory[] = [
  {
    id: "meat",
    title: "Carne",
    subtitle: "Receitas e mais",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "fish",
    title: "Peixe",
    subtitle: "Receitas e mais",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "pasta",
    title: "Massas",
    subtitle: "Receitas e mais",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "vegetarian",
    title: "Vegetarianas",
    subtitle: "Receitas e mais",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "healthy",
    title: "Saudáveis",
    subtitle: "Receitas e mais",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  },
];

export const featuredRecipes: ExploreRecipe[] = [
  {
    id: "steak",
    title: "Bife com Batata Doce e Legumes",
    meta: "20 min",
    detail: "Fácil · 6 ingredientes · 520 kcal",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "shrimp-pasta",
    title: "Massa com Camarão e Espinafres",
    meta: "25 min",
    detail: "Médio · 8 ingredientes · 480 kcal",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "salmon-bowl",
    title: "Bowl de Salmão e Abacate",
    meta: "15 min",
    detail: "Fácil · 7 ingredientes · 430 kcal",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-vegetables",
    title: "Frango com Legumes Assados",
    meta: "30 min",
    detail: "Fácil · 9 ingredientes · 510 kcal",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
  },
];

export const quickRecipes: ExploreRecipe[] = [
  {
    id: "quick-pasta",
    title: "Massa Cremosa de Tomate",
    meta: "15 min",
    detail: "Fácil · 6 ingredientes",
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "quick-chicken",
    title: "Frango Salteado",
    meta: "18 min",
    detail: "Fácil · 7 ingredientes",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "quick-salmon",
    title: "Salmão com Limão",
    meta: "20 min",
    detail: "Fácil · 5 ingredientes",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80",
  },
];

export const featuredIngredients: ExploreIngredient[] = [
  {
    id: "chicken",
    title: "Frango",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "eggs",
    title: "Ovo",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "tomato",
    title: "Tomate",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "broccoli",
    title: "Brócolos",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "spinach",
    title: "Espinafres",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "salmon",
    title: "Salmão",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80",
  },
];

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

export const exploreFilters = ["Receitas", "Ingredientes"] as const;

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

export const popularRecipes: ExploreRecipe[] = [
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


export const forYouRecipes: ExploreRecipe[] = [
  {
    id: "you-salmon",
    title: "Salmão com Legumes e Arroz",
    meta: "22 min",
    detail: "Fácil · 7 ingredientes · 460 kcal",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "you-chicken",
    title: "Frango Cremoso com Espinafres",
    meta: "24 min",
    detail: "Fácil · 8 ingredientes · 495 kcal",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "you-bowl",
    title: "Bowl Mediterrânico",
    meta: "18 min",
    detail: "Fácil · 6 ingredientes · 410 kcal",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
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

export const allIngredients: ExploreIngredient[] = [
  ["chicken","Frango","1604503468506-a8da13d82791"],["eggs","Ovo","1582722872445-44dc5f7e3c8f"],["tomato","Tomate","1546094096-0df4bcaaa337"],["broccoli","Brócolos","1459411621453-7b03977f4bfc"],["spinach","Espinafres","1576045057995-568f588f82fb"],["salmon","Salmão","1467003909585-2f8a72700288"],["avocado","Abacate","1523049673857-eb18f1d7b578"],["rice","Arroz","1536304993881-ff6e9e8d8c1f"],["potato","Batata","1518977676601-b53f82aba655"],["onion","Cebola","1508747703725-719777637510"],["pepper","Pimento","1563565375-f3fdfdbefa83"],["yogurt","Iogurte","1488477181946-6428a0291777"],["carrot","Cenoura","1445282768818-728615cc910a"],["cucumber","Pepino","1604977042946-1eecc30f269e"],["zucchini","Curgete","1563252722-6434563a985d"],["mushroom","Cogumelos","1504545102780-26774c1bb073"],["corn","Milho","1551754655-cd27e38d2076"],["peas","Ervilhas","1587735243615-c03f25aaff15"],["chickpeas","Grão-de-bico","1515543904379-3d757afe72e4"],["beans","Feijão","1551462147-ff29053bfc14"],["lentils","Lentilhas","1585937421612-70a008356fbe"],["oats","Aveia","1517093728432-a0440f8d45af"],["quinoa","Quinoa","1505253716362-afaea1d3d1af"],["pasta","Massa","1551183053-bf91a1d81141"],["bread","Pão","1509440159596-0249088772ff"],["cheese","Queijo","1452195100486-9cc805987862"],["milk","Leite","1550583724-b2692b85b150"],["banana","Banana","1571771894821-ce9b6c11b08e"],["apple","Maçã","1560806887-1e4cd0b6cbd6"],["orange","Laranja","1547514701-42782101795e"],["strawberry","Morangos","1464965911861-746a04b4bca6"],["blueberry","Mirtilos","1498557850523-fd3d118b962e"],["lemon","Limão","1590502593747-42a996133562"],["garlic","Alho","1540148426945-6cf22a6b2383"],["ginger","Gengibre","1615485290382-441e4d049cb5"],["lettuce","Alface","1556801712-76c8eb07bbc9"],["cabbage","Couve","1598030343246-eec71f5a1f64"],["cauliflower","Couve-flor","1568584711075-3d021a7c3ca3"],["asparagus","Espargos","1515471209610-dae1c92d8777"],["eggplant","Beringela","1528826007177-f38517e4b0b0"],["beetroot","Beterraba","1607305387299-a3d9611cd469"],["pumpkin","Abóbora","1506917728037-b6c4f9e7e8f4"],["sweet-potato","Batata-doce","1596097635121-14b63a7b4e31"],["tuna","Atum","1544551763-46a013bb70d5"],["shrimp","Camarão","1565680018434-b513d5e5fd47"],["cod","Bacalhau","1519708227418-c8fd9a32b7a2"],["turkey","Peru","1604503468506-a8da13d82791"],["beef","Carne de vaca","1544025162-d76694265947"],["pork","Porco","1432139509613-5c4255815697"],["tofu","Tofu","1546069901-ba9599a7e63c"],["almonds","Amêndoas","1508061253366-f7da7c048d26"],["walnuts","Nozes","1526285759904-71d1170ed2ac"],["peanut-butter","Manteiga de amendoim","1563599175592-c58dc214deff"],["chia","Sementes de chia","1511112023794-8c3e7b8d6a6f"],["honey","Mel","1587049352846-4a222e784d38"],["olive-oil","Azeite","1474979266404-7eaacbcd87c5"],["coconut","Coco","1441971300355-4e9f4a8f6f6e"],["basil","Manjericão","1618375569909-3c8616cf7733"],["parsley","Salsa","1589913849800-8f8b2a1d8f4b"],["coriander","Coentros","1588879460618-9246f1d2a8e7"],["thyme","Tomilho","1501004318641-b39e6451bec6"],["feta","Feta","1628088062854-d1870b4553da"],["mozzarella","Mozzarella","1628088062854-d1870b4553da"],["cream-cheese","Queijo creme","1486297678162-eb2a19b0a32d"],
].map(([id,title,image]) => ({ id, title, image: `https://images.unsplash.com/photo-${image}?auto=format&fit=crop&w=400&q=80` }));

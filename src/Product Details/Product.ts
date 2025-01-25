
export interface ProductDetails {
    status: "success";
    data: ProductData;
  }

  export interface ProductData {
    id: string;
    name: string;
    slug: string;
    short_explanation: string;
    explanation: Explanation;
    main_category_id: string;
    sub_category_id: string;
    tags: string[];
    variants: Variant[];
    comment_count: number;
    average_star: number;
  }

  export interface Explanation {
    usage: string;
    features: string;
    description: string;
    nutritional_content: NutritionalContent;
  }

  export interface NutritionalContent {
    ingredients: Ingredient[];
    nutrition_facts: NutritionFact[];
    amino_acid_facts: AminoAcidFact[];
  }

  export interface Ingredient {
    aroma: string;
    value: string;
  }

  export interface NutritionFact {
    ingredients: IngredientNutrition[];
    portion_sizes: string[];
  }

  export interface IngredientNutrition {
    name:string;
    amounts: string[];
  }

  export interface AminoAcidFact {
    portion_sizes: string[];
    ingredients: IngredientAroma[]
  }

  export interface IngredientAroma{
    name:string;
    amounts: string[];
  }

  export interface Variant {
    id: string;
    size: {
      gram: number;
      pieces: number;
      total_services: number;
    };
    aroma: string;
    price: {
      profit: number;
      total_price: number;
      discounted_price: number;
      price_per_servings: number;
      discount_percentage: number;
    };
    photo_src: string;
    is_available: boolean;
  }

  export interface Size {
    gram: number;
    pieces: number;
    total_services: number;
  }

  export interface newProducts {
    name: string;
    photo: JSX.Element[] | undefined;
    shortExplanation: string | undefined;
  }
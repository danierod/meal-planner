import {
  Ingredient,
  Measurement,
  Mineral,
  Proximates,
} from "./ingredient.type";

export interface Meal {
  id: number;
  name: string;
  description: string;
  categories: MealCategory[];
  ingredients: MealIngredient[];
  proximates: Proximates[];
  minerals: Mineral[];
}

export enum MealCategory {
  Breakfast = "breakfast",
  Soup = "soup",
  Appetizer = "appetizer",
  Salad = "salad",
  MainCourse = "maincourse",
  Dessert = "dessert",
  Snack = "snack",
}

export interface MealIngredient {
  ingredient: Ingredient;
  measurement: Measurement;
  proximates: Proximates[];
  minerals: Mineral[];
}

import { UnitName, UnitSymbol } from "../types/ingredient.type";
import { Meal, MealCategory } from "../types/meal.type";
import ingredientsDatabase from "./ingredients-database";

const mealDatabase: Meal[] = [
  {
    id: 1,
    name: "Meal 1",
    description: "A random meal",
    categories: [MealCategory.MainCourse],
    ingredients: [
      {
        ingredient: ingredientsDatabase[0],
        measurement: {
          unit: { name: UnitName.Gram, symbol: UnitSymbol.G },
          value: 100,
        },
        proximates: ingredientsDatabase[0].proximates,
        minerals: ingredientsDatabase[0].minerals,
      },
    ],
    proximates: ingredientsDatabase[0].proximates,
    minerals: ingredientsDatabase[0].minerals,
  },
  {
    id: 2,
    name: "Meal 2",
    description: "Another random meal",
    categories: [MealCategory.MainCourse],
    ingredients: [
      {
        ingredient: ingredientsDatabase[1],
        measurement: {
          unit: { name: UnitName.Gram, symbol: UnitSymbol.G },
          value: 100,
        },
        proximates: ingredientsDatabase[1].proximates,
        minerals: ingredientsDatabase[1].minerals,
      },
      {
        ingredient: ingredientsDatabase[4],
        measurement: {
          unit: { name: UnitName.Gram, symbol: UnitSymbol.G },
          value: 100,
        },
        proximates: ingredientsDatabase[4].proximates,
        minerals: ingredientsDatabase[4].minerals,
      },
      {
        ingredient: ingredientsDatabase[7],
        measurement: {
          unit: { name: UnitName.Gram, symbol: UnitSymbol.G },
          value: 100,
        },
        proximates: ingredientsDatabase[7].proximates,
        minerals: ingredientsDatabase[7].minerals,
      },
    ],
    proximates: ingredientsDatabase[1].proximates,
    minerals: ingredientsDatabase[1].minerals,
  },
];

export default mealDatabase;

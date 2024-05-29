import { useEffect, useMemo, useReducer } from "react";
import mealsDatabase from "../data/meals-database";
import { Meal } from "../types/meal.type";

type MealState = {
  meals: Meal[];
  isLoading: boolean;
  error?: boolean;
  errorMessage?: string;
};

type MealAction =
  | { type: MealActionType.SET_MEALS; results: Meal[] }
  | { type: MealActionType.START_FETCHING }
  | { type: MealActionType.SET_ERROR; error: string };

enum MealActionType {
  SET_MEALS = "SET_MEALS",
  START_FETCHING = "START_FETCHING",
  SET_ERROR = "SET_ERROR",
}

const DEFAULT_STATE: MealState = {
  meals: [],
  isLoading: false,
  error: undefined,
  errorMessage: undefined,
};

const useFetchMeals = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    const fetchMeals = () => {
      if (!mealsDatabase) {
        dispatch({
          type: MealActionType.SET_ERROR,
          error: "Unable to serve the meals",
        });
        return;
      }

      dispatch({
        type: MealActionType.SET_MEALS,
        results: mealsDatabase,
      });
    };

    dispatch({ type: MealActionType.START_FETCHING });

    // TODO: Remove delayed fetchIngredient when using the real backend implementation
    const delayedFetchMeals = async () => {
      setTimeout(fetchMeals, 1000);
    };

    delayedFetchMeals();
  }, []);

  return { ...state };
};

function reducer(state: MealState, action: MealAction): MealState {
  switch (action.type) {
    case MealActionType.SET_MEALS: {
      return {
        ...state,
        meals: action.results,
        isLoading: false,
        error: undefined,
        errorMessage: undefined,
      };
    }
    case MealActionType.START_FETCHING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case MealActionType.SET_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error,
      };
    }
  }
}

export default useFetchMeals;

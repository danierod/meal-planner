import { Ingredient } from "../types/ingredient.type";
import { useEffect, useMemo, useReducer } from "react";
import ingredientsDatabase from "../data/ingredients-database";

type IngredientState = {
  ingredients: Ingredient[];
  isLoading: boolean;
  error?: boolean;
  errorMessage?: string;
};

type IngredientAction =
  | { type: IngredientActionType.SET_FOODS; results: Ingredient[] }
  | { type: IngredientActionType.START_FETCHING }
  | { type: IngredientActionType.SET_ERROR; error: string };

enum IngredientActionType {
  SET_FOODS = "SET_FOODS",
  START_FETCHING = "START_FETCHING",
  SET_ERROR = "SET_ERROR",
}

const DEFAULT_STATE: IngredientState = {
  ingredients: [],
  isLoading: false,
  error: undefined,
  errorMessage: undefined,
};

const useFetchIngredient = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    const fetchIngredient = () => {
      if (!ingredientsDatabase) {
        dispatch({
          type: IngredientActionType.SET_ERROR,
          error: "Unable to serve the ingredients",
        });
        return;
      }

      dispatch({
        type: IngredientActionType.SET_FOODS,
        results: ingredientsDatabase,
      });
    };

    dispatch({ type: IngredientActionType.START_FETCHING });

    // TODO: Remove delayed fetchIngredient when using the real backend implementation
    const delayedFetchIngredient = async () => {
      setTimeout(fetchIngredient, 1000);
    };

    delayedFetchIngredient();
  }, []);

  return { ...state };
};

function reducer(
  state: IngredientState,
  action: IngredientAction
): IngredientState {
  switch (action.type) {
    case IngredientActionType.SET_FOODS: {
      return {
        ...state,
        ingredients: action.results,
        isLoading: false,
        error: undefined,
        errorMessage: undefined,
      };
    }
    case IngredientActionType.START_FETCHING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case IngredientActionType.SET_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error,
      };
    }
  }
}

export default useFetchIngredient;

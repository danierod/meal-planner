import { Food } from "../types/food.type";
import { useEffect, useMemo, useReducer } from "react";
import foodDatabase from "../data/food-database";

type FoodState = {
  food: Food[];
  isLoading: boolean;
  error?: boolean;
  errorMessage?: string;
};

type FoodAction =
  | { type: FoodActionType.SET_FOODS; results: Food[] }
  | { type: FoodActionType.START_FETCHING }
  | { type: FoodActionType.SET_ERROR; error: string };

enum FoodActionType {
  SET_FOODS = "SET_FOODS",
  START_FETCHING = "START_FETCHING",
  SET_ERROR = "SET_ERROR",
}

const DEFAULT_STATE: FoodState = {
  food: foodDatabase,
  isLoading: false,
  error: undefined,
  errorMessage: undefined,
};

const useFetchFood = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    const fetchFood = () => {
      if (!foodDatabase) {
        dispatch({
          type: FoodActionType.SET_ERROR,
          error: "Unable to serve the food",
        });
        return;
      }

      dispatch({
        type: FoodActionType.SET_FOODS,
        results: foodDatabase,
      });
    };

    dispatch({ type: FoodActionType.START_FETCHING });

    // TODO: Remove delayed fetchFood when using the real backend implementation
    const delayedFetchFood = async () => {
      setTimeout(fetchFood, 1000);
    };

    delayedFetchFood();
  }, []);

  return { ...state };
};

function reducer(state: FoodState, action: FoodAction): FoodState {
  switch (action.type) {
    case FoodActionType.SET_FOODS: {
      return {
        ...state,
        food: action.results,
        isLoading: false,
        error: undefined,
        errorMessage: undefined,
      };
    }
    case FoodActionType.START_FETCHING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FoodActionType.SET_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error,
      };
    }
  }
}

export default useFetchFood;

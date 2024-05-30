import { FC, Suspense } from "react";
import {
  Await,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
} from "react-router-dom";
import mealDatabase from "../data/meals-database";
import { Meal } from "../types/meal.type";

export async function mealDetailsLoader({ params }: LoaderFunctionArgs) {
  const mealId = params.mealId as string;
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const fetchMealsPromise = new Promise((resolve, reject) => {
    const fetchMeals = async () => {
      await delay(1000);

      const meal = mealDatabase.find((meal) => {
        return meal.id === Number.parseInt(mealId);
      });
      if (meal) {
        resolve(meal);
      } else {
        reject("Cannot find meal");
      }
    };
    return fetchMeals();
  });

  return defer({ meal: fetchMealsPromise });
}

const MealDetails: FC = () => {
  const data = useLoaderData() as { meal: Meal };

  return (
    <Suspense fallback={<p>Loading meal...</p>}>
      <Await
        resolve={data.meal}
        errorElement={
          <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
            Error getting meal!
          </div>
        }
      >
        {(meal) => {
          return (
            <div>
              <p>Meal details</p>
              <p>{meal.id}</p>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default MealDetails;

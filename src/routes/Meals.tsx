import { FC, Suspense } from "react";
import {
  Await,
  Link,
  Outlet,
  defer,
  useAsyncValue,
  useLoaderData,
} from "react-router-dom";
import mealDatabase from "../data/meals-database";
import { Meal } from "../types/meal.type";

export async function mealsLoader() {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const fetchMealsPromise = new Promise((resolve) => {
    const fetchMeals = async () => {
      await delay(1000);
      resolve(mealDatabase);
    };
    return fetchMeals();
  });

  return defer({ meals: fetchMealsPromise });
}

const Meals: FC = () => {
  const data = useLoaderData() as { meals: Meal[] };

  return (
    <div className="">
      <h1 className="text-7xl font-bold">Meals</h1>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
            Loading...
          </div>
        }
      >
        <Await
          resolve={data.meals}
          errorElement={
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
              Error getting meals!
            </div>
          }
        >
          {<MealsList />}
        </Await>
      </Suspense>

      <div className="fixed top-0 right-0 h-screen w-80 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
};

function MealsList() {
  const meals = useAsyncValue() as Meal[];
  return (
    <div>
      {meals.map((meal) => (
        <div>
          <Link to={`${meal.id}`}>{meal.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Meals;

import { FC } from "react";
import useFetchMeals from "../api/useFetchMeals";

const Meals: FC = () => {
  const { meals, isLoading } = useFetchMeals();

  return (
    <div className="">
      <h1 className="text-7xl font-bold">Meals</h1>
      {isLoading ? (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
          Loading...
        </div>
      ) : (
        <div>
          {meals.map((meal) => (
            <p>{meal.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meals;

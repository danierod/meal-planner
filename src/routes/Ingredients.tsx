import { FC } from "react";
import useFetchFood from "../api/useFetchIngredients";
import NutricionalTable from "../components/NutricionalTable";

const Ingredients: FC = () => {
  const { ingredients, isLoading, error, errorMessage } = useFetchFood();

  return isLoading ? (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
      Loading...
    </div>
  ) : (
    <div>
      <h1 className="text-7xl font-bold mb-8">Ingredients</h1>
      <div className="grid grid-cols-3 gap-2">
        {ingredients.map((ingredient) => (
          <NutricionalTable
            key={ingredient.id}
            className="w-full"
            ingredient={ingredient}
          />
        ))}
      </div>
    </div>
  );
};

export default Ingredients;

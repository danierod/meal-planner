import { FC } from "react";
import useFetchFood from "../api/useFetchFood";
import NutricionalTable from "../components/NutricionalTable";

const Ingredients: FC = () => {
  const { ingredients, isLoading, error, errorMessage } = useFetchFood();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {ingredients.map((ingredient) => (
          <NutricionalTable className="w-full" ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default Ingredients;

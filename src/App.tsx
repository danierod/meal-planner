import "./App.scss";
import useFetchFood from "./api/useFetchFood";
import NutricionalTable from "./components/NutricionalTable";

function App() {
  const { ingredients, isLoading, error, errorMessage } = useFetchFood();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="App">
      <div className="grid grid-cols-3 gap-2">
        {ingredients.map((ingredient) => (
          <NutricionalTable className="w-full" ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
}

export default App;

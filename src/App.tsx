import logo from "./logo.svg";
import "./App.scss";
import useFetchFood from "./api/useFetchFood";

function App() {
  const { food, isLoading, error, errorMessage } = useFetchFood();

  return (
    <div className="App">
      <header className="App-header">
        <textarea
          value={isLoading ? "loading..." : JSON.stringify(food, null, 2)}
          rows={50}
          cols={100}
        ></textarea>
      </header>
    </div>
  );
}

export default App;

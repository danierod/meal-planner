import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.scss";
import useFileReader from "./hooks/useFileReader";
import useFoodDatabase from "./hooks/useFoodDatabase";

function App() {
  const { headers, content, loadFoodData, addEmptyContentRow } =
    useFoodDatabase();
  const [newContent, setNewContent] = useState<typeof content>();

  useEffect(() => {
    setNewContent(content);
  }, [content]);

  const readFileFromInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    loadFoodData(event.target.files[0]);
  };

  // const updateNewFileContents = (event: ChangeEvent<HTMLInputElement>) => {
  //   setNewFileContents(event.target.value);
  // };

  const addFoodRow = () => {
    addEmptyContentRow();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    const content = formJson.content;
    // saveSingleFile(new Blob([content], { type: "text/csv" }));
  };

  const updateValue = (e: any) => {
    e.preventDefault();

    const newValue = e.target.value;
    const [row, col] = e.target.name.split("-");
    setNewContent((prevState) => {
      if (prevState) {
        const newState = [...prevState];
        newState[row][col] = newValue;

        return newState;
      }
      return prevState;
    });

    // saveSingleFile(new Blob([content], { type: "text/csv" }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" id="file-input" onChange={readFileFromInput} />

        <form method="post" onSubmit={handleSubmit}>
          <div className="row">
            {headers?.map((header, headerIndex) => (
              <div className="row__header" key={`header-${headerIndex}`}>
                {header}
              </div>
            ))}
          </div>
          {newContent?.map(
            (row, rowIndex) =>
              row.length > 1 && (
                <div className="row" key={`row-${rowIndex}`}>
                  {row.map((rowItem, itemIndex) => (
                    <div className="row__item" key={`col-${itemIndex}`}>
                      <input
                        name={`${rowIndex}-${itemIndex}`}
                        value={rowItem}
                        onChange={updateValue}
                      />
                    </div>
                  ))}
                </div>
              )
          )}

          <button type="button" onClick={addFoodRow}>
            Add food
          </button>
          <button type="submit">Save</button>
        </form>
      </header>
    </div>
  );
}

export default App;

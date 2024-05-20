import { ChangeEvent, useState } from "react";
import useFileReader from "./useFileReader";

type FoodDatabaseState = {
  headers: string[];
  content: Array<string[]>;
};

const useFoodDatabase = () => {
  const [state, setState] = useState<FoodDatabaseState>();
  const { readSingleFile, saveSingleFile } = useFileReader();

  const loadFoodData = async (file: File) => {
    if (!file) {
      console.error("Trying to load food data failed. No file provided.");
      return;
    }

    const loadedFile = await readSingleFile(file);

    if (loadedFile) {
      const { headers, content } = parseFile(
        new String(loadedFile.content).toString()
      );

      setState({
        headers,
        content,
      });
    }
  };

  const addEmptyContentRow = () => {
    if (state?.headers) {
      const newRow = new Array<string>(state?.headers.length).fill("");

      setState({
        ...state,
        content: [...state?.content, newRow],
      });
    }
  };

  const storeFoodData = () => {
    // TODO store food data
    alert("Storing food data");
  };

  return {
    ...state,
    loadFoodData,
    storeFoodData,
    addEmptyContentRow,
  };

  function parseFile(data: string) {
    const rows = data.replaceAll("\n", "").split(";");
    const [headers, content] = [
      rows[0].split(","),
      rows.slice(1).map((row) => row.split(",").map((item) => item.trim())),
    ];
    console.debug(headers);
    console.debug(content);

    return { headers, content };
  }
};

export default useFoodDatabase;

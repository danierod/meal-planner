import { useState } from "react";

type FileResponse = {
  name: string;
  content: string | ArrayBuffer | null | undefined;
};

const useFileReader = () => {
  const [fileName, setFileName] = useState<any>();

  const readSingleFile = async (file: File) => {
    if (!file) {
      return;
    }

    const readFilePromise = await new Promise<FileResponse>((resolve) => {
      console.log("Creating promise");
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log("File loaded");
        const contents = event.target?.result;
        resolve({
          name: file.name,
          content: contents,
        });
      };
      reader.readAsText(file);
    });

    return readFilePromise;
  };

  const saveSingleFile = (blob: Blob) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.setAttribute("style", "display;none");

    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return {
    readSingleFile,
    saveSingleFile,
  };
};

export default useFileReader;

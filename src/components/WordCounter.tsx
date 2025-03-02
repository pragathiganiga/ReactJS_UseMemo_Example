import { useState, useMemo } from "react";
import TextArea from "./TextArea";

const countWords = (text: string): number => {
  console.log("Counting words...");
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
};

const WordCounter = () => {
  const [text, setText] = useState<string>("");

  // Memoized word count calculation
  const wordCount = useMemo(() => countWords(text), [text]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">Word Counter</h2>
      <TextArea value={text} onChange={setText} />
      <p className="mt-4 text-lg sm:text-xl text-center text-blue-600 font-semibold">
        Word Count: {wordCount}
      </p>
    </div>
  );
};

export default WordCounter;

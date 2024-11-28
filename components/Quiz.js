import { useState } from "react";

export default function Quiz() {
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (answer) => {
    setIsCorrect(answer === "correct");
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-md shadow-md">
      <h3 className="text-lg font-bold">Question: En quelle année a commencé la Première Guerre mondiale ?</h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <button
          className={`py-2 px-4 rounded-md ${
            isCorrect === null
              ? "bg-gray-800"
              : isCorrect
              ? "bg-green-500"
              : "bg-red-500"
          }`}
          onClick={() => handleAnswer("correct")}
        >
          1914
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded-md"
          onClick={() => handleAnswer("wrong")}
        >
          1916
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded-md"
          onClick={() => handleAnswer("wrong")}
        >
          1947
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded-md"
          onClick={() => handleAnswer("wrong")}
        >
          1932
        </button>
      </div>
      {isCorrect !== null && (
        <p className="mt-4">
          {isCorrect ? "Correct! La Première Guerre mondiale a commencé en 1914." : "Faux! Essayer à nouveau."}
        </p>
      )}
    </div>
  );
}
import { useState } from "react";

export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const correctAnswer = "1914";

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-md shadow-md">
      <h3 className="text-lg font-bold">
        Question: En quelle année a commencé la Première Guerre mondiale ?
      </h3>
      <div className="mt-4 flex flex-wrap gap-4">
        {["1914", "1947", "1916", "1932"].map((answer, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-md transition-all duration-300 ${
              selectedAnswer === answer
                ? answer === correctAnswer
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
            onClick={() => handleAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
      {selectedAnswer !== null && (
        <p className="mt-4">
          {selectedAnswer === correctAnswer
            ? "Correct ! WW1 a commencé en 1914."
            : "Faux ! Essayez à nouveau."}
        </p>
      )}
    </div>
  );
}

import { useState } from "react";
import { problem as TwoSumProblem } from "../../data/QuizData"; // Import Two Sum problem

const CodingQuestions = ({ setEditorCode }) => {
  const questions = [
    {
      question: "Reverse a String",
      description:
        "Write a function to reverse a given string without using built-in methods. Example: Input: 'hello' → Output: 'olleh'.",
      functionSignature:
        "function reverseString(str) {\n  // Your code here\n}",
    },
    {
      question: "Find the Largest Number",
      description:
        "Write a function that takes an array of numbers and returns the largest number. Example: Input: [3, 7, 1, 9] → Output: 9.",
      functionSignature:
        "function findLargestNumber(arr) {\n  // Your code here\n}",
    },
    {
      question: TwoSumProblem.title,
      description: TwoSumProblem.description,
      functionSignature: TwoSumProblem.functionSignature, // Link function signature
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleQuestionChange = (index) => {
    setCurrentIndex(index);
    setEditorCode(questions[index].functionSignature); // Update editor with the function template
  };

  return (
    <div className="p-4 border border-gray-700 rounded-lg bg-gray-900 text-white h-full flex flex-col">
      <h2 className="text-lg font-semibold">Question {currentIndex + 1}</h2>
      <p className="mt-2 text-gray-300">{questions[currentIndex].question}</p>

      {/* Wrapped description container */}
      <div className="mt-4 p-2 border border-gray-600 rounded-md bg-gray-800 flex-grow overflow-auto max-h-[50vh]">
        <p className="text-sm text-gray-400 whitespace-pre-wrap break-words">
          {questions[currentIndex].description}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 flex justify-between pb-4">
        <button
          className="px-4 py-2 border rounded-md hover:bg-blue-500 hover:text-white transition disabled:opacity-50"
          onClick={() => handleQuestionChange(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          Previous Question
        </button>

        <button
          className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition disabled:opacity-50"
          onClick={() => handleQuestionChange(currentIndex + 1)}
          disabled={currentIndex === questions.length - 1}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default CodingQuestions;

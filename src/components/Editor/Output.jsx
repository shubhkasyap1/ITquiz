import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { executeCode } from "../../utils/api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [needsInput, setNeedsInput] = useState(false);
  const navigate = useNavigate();

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(
        language,
        sourceCode,
        userInput
      );
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
      setShowOutput(true);

      // Check if the code needs input
      if (result.needsInput) {
        setNeedsInput(true);
      } else {
        setNeedsInput(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert(error.message || "Unable to run code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    navigate("/completion");
  };

  return (
    <div className="h-1/2 p-4 border-t border-gray-700">
      <div className="flex flex-col gap-2">
        {needsInput && (
          <textarea
            className="w-full p-2 border border-gray-500 rounded-md"
            placeholder="Enter input for your code..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
        )}

        <div className="flex justify-between">
          <button
            className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition"
            disabled={isLoading}
            onClick={runCode}
          >
            {isLoading ? "Running..." : "Run Code"}
          </button>
          <button
            className="px-4 py-2 border  rounded-md hover:bg-blue-500 hover:text-white transition text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {showOutput && (
        <div
          className={`mt-2 p-2 text-white border rounded-md overflow-auto max-h-40 ${
            isError
              ? "border-red-500 text-red-400 bg-red-900"
              : "border-gray-700 bg-gray-800"
          }`}
        >
          {output
            ? output.map((line, i) => <p key={i}>{line}</p>)
            : "No output"}
        </div>
      )}
    </div>
  );
};

export default Output;

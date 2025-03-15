import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs}h ${mins}m ${secs}s`;
};

export const StudentQuiz = () => {
  const [quiz, setQuiz] = useState({});
  const [status, setStatus] = useState("Upcoming");
  const [testDate, setTestDate] = useState("N/A");
  const [timer, setTimer] = useState(null);
  const [startNow, setStartNow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchQuizData = async () => {
      try {
        // Temporary demo data
        const data = {
          title: "JavaScript Basics Quiz",
          description: "A quiz to test your knowledge on JavaScript fundamentals.",
          testDate: "2025-03-20T09:02:00Z", // 3 PM IST converted to UTC
        };

        setQuiz({ title: data.title, description: data.description });
        setTestDate(data.testDate);

        // Calculate time difference
        const testTime = new Date(data.testDate).getTime();
        const currentTime = new Date().getTime();
        const timeLeft = Math.floor((testTime - currentTime) / 1000); // in seconds

        if (timeLeft > 43200) {
          setStatus("Upcoming"); // More than 12 hours
        } else if (timeLeft > 21600) {
          setStatus("Upcoming"); // Between 6-12 hours
        } else if (timeLeft > 0) {
          setStatus("Starting Soon");
          setTimer(timeLeft);
        } else {
          setStatus("Ongoing");
          setStartNow(true);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (timer !== null && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setStatus("Ongoing");
            setStartNow(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-[400px] text-center border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{quiz?.title || "Untitled Quiz"}</h2>
      <p className="mb-4 text-gray-700">{quiz?.description || "No description available."}</p>
      <p className="text-gray-700 font-medium">
        Status: <span className={`font-semibold ${status === "Expired" ? "text-red-600" : "text-green-600"}`}>{status}</span>
      </p>
      <p className="text-gray-700 font-medium">Test Date: {new Date(testDate).toLocaleString()}</p>

      {timer !== null && status === "Starting Soon" && (
        <p className="text-lg text-blue-600 font-semibold mt-2">Starts in: {formatTime(timer)}</p>
      )}

      <button
        onClick={() => navigate("/instructions")}
        className={`mt-4 px-5 py-2 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ${
          startNow ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!startNow}
      >
        {status === "Expired" ? "View Results" : "Start Quiz"}
      </button>
    </div>
  );
};

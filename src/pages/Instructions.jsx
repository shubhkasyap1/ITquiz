import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentHeader from "../components/student/StudentHeader";
import Footer from "../utils/Footer";
import {
  guidelines,
  examStructure,
  scoring,
  timeLimit,
  importantInstructions,
} from "../data/QuizData";
import InstructionsList from "../components/InstructionsList";
import WelcomeTimer from "../components/WelcomeTimer";
import { fetchUserData } from "../utils/api";

const Instructions = () => {
  const [timeLeft, setTimeLeft] = useState(2); // Reduced initial timer for testing
  const [name, setName] = useState();
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(5);
  const [startPressed, setStartPressed] = useState(false);
  const navigate = useNavigate();

  // Fetch user name on component mount

  useEffect(() => {
    const getStudentDetails = async () => {
      try {
        const data = await fetchUserData();
        setName(data.username);
      } catch (err) {
        setError("Failed to fetch student details");
      } finally {
        setLoading(false);
      }
    };
    getStudentDetails();
  }, []);

  // Countdown Timer for Button Activation
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!isButtonActive) {
      setIsButtonActive(true);
    }
  }, [timeLeft, isButtonActive]);

  // // Auto-redirect logic if the button is active but not pressed
  useEffect(() => {
    if (isButtonActive && !startPressed) {
      const timer = setTimeout(() => {
        setRedirectTimer((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            navigate("/quiz/67cd4a6ec579843ef21645d9"); // Redirect if user doesn't press start
            return prev;
          }
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [redirectTimer, isButtonActive, startPressed, navigate]);

  // useEffect(() => {
  //   if (isButtonActive && !startPressed && redirectTimer > 0) {
  //     const timer = setTimeout(() => setRedirectTimer((prev) => prev - 1), 1000);
  //   if (isButtonActive && !startPressed) {
  //     const timer = setTimeout(() => {
  //       if (redirectTimer > 0) {
  //         setRedirectTimer(redirectTimer - 1);
  //       } else {
  //         navigate("/quiz/67cd4a6ec579843ef21645d9"); // Redirect if user doesn't press start
  //       }
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   } else if (redirectTimer === 0 && isButtonActive && !startPressed) {
  //     navigate("/quiz");
  //   }
  // }, [redirectTimer, isButtonActive, startPressed, navigate]);

  const handleStartQuiz = () => {
    setStartPressed(true);
    navigate("/quiz/67cd4a6ec579843ef21645d9");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-start via-middle to-end relative overflow-hidden px-0 bg-cover bg-no-repeat w-screen h-screen">
      <div className="backdrop-blur-sm">
        <StudentHeader />
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center flex-1">
          {/* Instructions Box */}
          <div className="bg-center flex justify-center items-center w-full p-6">
            <div className="border-2 hover:shadow-2xl bg-opacity-50 backdrop-blur-md border-slate-600 p-6 rounded-xl lg:w-[720px] shadow-lg bg-marble">
              <div className="max-h-[53vh] overflow-y-auto rounded-lg shadow-sm backdrop-blur-md bg-opacity-20 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-50 hover:[&::-webkit-scrollbar-thumb]:">
                <h2 className="text-5xl font-bold text-white mt-14 text-center">
                  Instructions
                </h2>
                <p className="text-gray-300 mb-6 text-lg text-center">
                  Read the instructions carefully before starting the quiz.
                </p>
                {/* Instruction Sections */}
                <div className="text-white overflow-y-auto">
                  <InstructionsList
                    title="1. General Guidelines"
                    items={guidelines}
                  />
                  {Object.entries(examStructure).map(
                    ([section, points], index) => (
                      <InstructionsList
                        key={index}
                        title={`${section}`}
                        items={points}
                      />
                    )
                  )}
                  <InstructionsList
                    title="3. Scoring & Evaluation"
                    items={scoring}
                  />
                  <InstructionsList title="4. Time Limit" items={timeLimit} />
                  <InstructionsList
                    title="5. Important Instructions"
                    items={importantInstructions}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Welcome & Timer Section */}
          <WelcomeTimer name={name} timeLeft={timeLeft} />
        </div>

        {/* Start Quiz Button */}
        <div className="flex flex-row gap-2 justify-center items-center my-4">
          <button
            onClick={handleStartQuiz}
            disabled={!isButtonActive}
            className={`py-3 px-6 text-lg font-bold rounded-lg ${
              isButtonActive
                ? "bg-blue-500 hover:bg-blue-700 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            {"Start Now" }
          </button>
          {isButtonActive && !startPressed && (
            <p className="mt-2 text-gray-300">
              Auto-starting in{" "}
              <span className="text-yellow-400">{redirectTimer}s</span>...
            </p>
          )}
        </div>

        {/* Footer (Always Visible) */}
        <Footer />
      </div>
    </div>
  );
};

export default Instructions;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/Background.png";
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

const Instructions = () => {
  const [timeLeft, setTimeLeft] = useState(20);
  const [name, setName] = useState("User");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(10);
  const [startPressed, setStartPressed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setName(data.name || "User"))
      .catch(() => setName("User"));
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsButtonActive(true); // Activate button after 20 seconds
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isButtonActive && !startPressed) {
      const timer = setTimeout(() => {
        if (redirectTimer > 0) {
          setRedirectTimer(redirectTimer - 1);
        } else {
          navigate("/quiz"); // Redirect if user doesn't press start
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isButtonActive, redirectTimer, startPressed, navigate]);

  const handleStartQuiz = () => {
    setStartPressed(true);
    navigate("/quiz");
  };

  return (
    <div
      className="bg-primary min-h-screen flex flex-col bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage}) ` }}
    >
      <div className="backdrop-blur-sm">
        <StudentHeader />
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center flex-1">
          {/* Instructions Box */}
          <div className="bg-center flex justify-center items-center w-full p-6">
            <div className="border-2 hover:shadow-2xl bg-secondary border-slate-600 p-6 rounded-xl lg:w-[720px] shadow-lg">
              <div
                className="max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300"
              >
                <h2 className="text-5xl font-bold text-white mb-4 mt-14 text-center">
                  Instructions
                </h2>
                <p className="text-gray-300 mb-6 text-lg text-center">
                  Read the instructions carefully before starting the quiz.
                </p>
                {/* Instruction Sections */}
                <div className="bg-secondary p-8 text-white overflow-y-auto">
                  <InstructionsList title="1. General Guidelines" items={guidelines} />
                  <InstructionsList title="2. Exam Structure" />
                  {Object.entries(examStructure).map(([section, points], index) => (
                    <InstructionsList key={index} title={section} items={points} />
                  ))}
                  <InstructionsList title="3. Scoring & Evaluation" items={scoring} />
                  <InstructionsList title="4. Time Limit" items={timeLimit} />
                  <InstructionsList title="5. Important Instructions" items={importantInstructions} />
                </div>
              </div>
            </div>
          </div>
          {/* Welcome & Timer Section */}
          <WelcomeTimer name={name} timeLeft={timeLeft} />
        </div>

        {/* Start Quiz Button */}
        <div className="flex flex-col justify-center items-center my-6">
          <button
            onClick={handleStartQuiz}
            disabled={!isButtonActive}
            className={`py-3 px-6 text-lg font-bold rounded-lg ${
              isButtonActive
                ? "bg-blue-500 hover:bg-blue-700 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            {isButtonActive ? "Start Now" : `Activating in ${timeLeft}s`}
          </button>
          {isButtonActive && !startPressed && (
            <p className="mt-2 text-gray-300">
              Auto-starting in <span className="text-yellow-400">{redirectTimer}s</span>...
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
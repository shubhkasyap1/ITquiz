import React, { useState, useEffect } from "react";
import BackgroundImage from "../assets/Background.png";
import StudentHeader from "../components/StudentHeader";
import Footer from "../utils/Footer";
import {
  guidelines,
  examStructure,
  scoring,
  timeLimit,
  importantInstructions,
} from "../data/quizData";
import InstructionsList from "../components/InstructionsList";
import WelcomeTimer from "../components/WelcomeTimer";

const Instructions = () => {
  const [timeLeft, setTimeLeft] = useState(20);
  const [name, setName] = useState("User");

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
    }
  }, [timeLeft]);

  return (
    <div
      className="container bg-primary min-h-screen flex flex-col justify-between bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <StudentHeader />

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center flex-1">
        {/* Instructions Box */}
        <div className="bg-center flex justify-center items-center w-full p-6">
          <div className="border-2 border-slate-600 p-6 pt-0 rounded-xl bg-secondary lg:w-[720px] shadow-lg max-h-[70vh] overflow-auto">
            <h2 className="text-5xl font-bold text-white mb-4 mt-14 text-center">
              Instructions
            </h2>
            <p className="text-gray-300 mb-6 text-lg text-center">
              Read the instructions carefully before starting the quiz.
            </p>

            {/* Instruction Sections */}
            <div className="bg-secondary p-8 text-white">
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

        {/* Welcome & Timer Section */}
        <WelcomeTimer name={name} timeLeft={timeLeft} />
      </div>

      {/* Footer (Always Visible) */}
      <Footer />
    </div>
  );
};

export default Instructions;

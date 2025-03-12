import React, { useState, useEffect } from "react";
import UUlogo from "../assets/uulogo1.png";
import { FaUserCircle } from "react-icons/fa";
import BackgroundImage from "../assets/Background.png";
import { Link } from "react-router";

const Instructions = () => {
  const [timeLeft, setTimeLeft] = useState(20);
  const [name, setName] = useState(null);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const guidelines = [
    "This is an individual competition; each participant must attempt the quiz alone.",
    "Participants must follow all rules and maintain academic integrity.",
    "Do not minimize or switch windows/tabs during the quiz. Doing so will trigger automatic submission, and you will be disqualified.",
    "If the quiz window is closed or refreshed, it will be submitted automatically, and you cannot re-enter.",
  ];

  const examStructure = {
    "Section 1: Multiple Choice Questions (MCQs)": [
      "There are 80 MCQs divided into 4 modules.",
      "Each module contains 20 questions based on different subjects:",
      "Module 1: Programming in C",
      "Module 2: Networking",
      "Module 3: Database Management System (DBMS)",
      "Module 4: Computer Fundamentals",
      "Each correct answer carries 1 mark.",
      "Negative marking: 1/3rd mark will be deducted for every incorrect answer.",
      "Important: Section 2 (Coding-Based Questions) will only be unlocked after completing Section 1.",
    ],
    "Section 2: Coding-Based Questions": [
      "This section consists of 2 coding questions.",
      "Each question carries 10 marks, totaling 20 marks.",
    ],
  };

  const scoring = [
    "Total Marks: 100",
    "MCQ Section: 80 marks",
    "Coding Section: 20 marks",
    "The final score will be calculated based on correct answers after applying negative marking.",
  ];

  const timeLimit = [
    "Total duration: 1 hour 30 minutes (90 minutes).",
    "Section 1 (MCQs) must be completed before attempting Section 2 (Coding).",
  ];

  const importantInstructions = [
    "Do not minimize, switch tabs, or refresh the page during the quiz. Doing so will result in automatic submission and exit.",
    "The quiz platform will auto-submit your answers once the time is over.",
    "Once submitted, answers cannot be changed.",
  ];

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  useEffect(() => {
    // ✅ Fetch user data from the backend API
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setName(data.name || "User"))
      .catch((err) => {
        console.error("Error fetching user:", err);
        setName("User");
      });
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div
      className="container bg-primary w-full min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex justify-between items-center p-4 shadow-sm">
        {/* Left: Logo */}
        <div className="ml-2">
          <img src={UUlogo} alt="UU Logo" className="w-46 h-12" />
        </div>

        {/* Right: User Button */}
        <div className="relative">
          <button
            onClick={toggleUserInfo}
            className="flex items-center gap-2 px-2 py-2 bg-button1 text-white font-bold rounded-2xl shadow-md hover:bg-blue-800"
          >
            <FaUserCircle className="text-lg" />
          </button>

          {/* User Info Dropdown */}
          {showUserInfo && (
            <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-lg shadow-xl p-4">
              <p className="font-semibold">👤 {name}</p>
              <p className="text-gray-600">
                🕒 {new Date().toLocaleTimeString()}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Instructions Box */}
        <div className="bg-center h-screen flex justify-center items-center w-full p-6">
          <div className="border-2 border-slate-600 p-6 pt-0 rounded-xl bg-secondary lg:w-[720px] shadow-lg">
            <h2 className="text-5xl font-bold text-white mb-4 mt-14 text-center">
              Instructions
            </h2>
            <p className="text-gray-300 mb-6 text-lg text-center">
              Read the instructions carefully before starting the quiz.
            </p>

            {/* ✅ Instruction Sections */}
            <div className="bg-secondary p-8 text-white max-h-[400px] overflow-y-auto hide-scrollbar">
              {/* General Guidelines */}
              <h3 className="text-2xl font-bold mb-4">1. General Guidelines</h3>
              <ul className="list-disc pl-8 space-y-2">
                {guidelines.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>

              {/* Exam Structure */}
              <h3 className="text-2xl font-bold mt-6 mb-4">
                2. Exam Structure
              </h3>
              {Object.entries(examStructure).map(([section, points], index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-xl font-semibold">{section}</h4>
                  <ul className="list-disc pl-8 space-y-2">
                    {points.map((point, subIndex) => (
                      <li key={subIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Scoring & Evaluation */}
              <h3 className="text-2xl font-bold mt-6 mb-4">
                3. Scoring & Evaluation
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                {scoring.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>

              {/* Time Limit */}
              <h3 className="text-2xl font-bold mt-6 mb-4">4. Time Limit</h3>
              <ul className="list-disc pl-8 space-y-2">
                {timeLimit.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>

              {/* Important Instructions */}
              <h3 className="text-2xl font-bold mt-6 mb-4">
                5. Important Instructions
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                {importantInstructions.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Welcome & Timer Section */}
        <div className="bg-secondary w-full max-w-md h-[400px] mt-6 lg:mt-0 p-20 mx-6 lg:mr-32 flex flex-col items-center justify-center rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-button1">
          <h1 className="text-3xl font-bold mb-4">Welcome, {name}!</h1>
          <p className="text-lg font-bold text-center">
            Your Quiz Starts in <span className="text-white">{timeLeft}</span>{" "}
            seconds
          </p>
          <Link to="/quiz">
            <button
              className={`mt-4 px-6 py-2 text-white font-bold rounded transition duration-200 ${
                timeLeft === 0
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-500 cursor-not-allowed opacity-50"
              }`}
              disabled={timeLeft > 0}
            >
              Start NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructions;

import React from "react";
import { Link } from "react-router-dom";

const WelcomeTimer = ({ name, timeLeft }) => {
  return (
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
  );
};

export default WelcomeTimer;

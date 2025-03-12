import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Instructions from "./pages/Instructions";
import QuizQuestion from "./pages/exam/QuizQuestion";
import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/quiz" element={<QuizQuestion/>}/>
    </Routes>
  );
};

export default App;
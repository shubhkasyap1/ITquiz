import React from "react";
import StudentHeader from "../components/StudentHeader";
import QuizList from "../data/QuizList";
import Footer from "../utils/Footer";
import images from "../assets/images"; 

const StudentDashboard = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-no-repeat m-0 p-0"
      style={{
        backgroundImage: `url(${images.bgdashboard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <StudentHeader bgColor="bg-primary" />

      {/* Quiz List Container */}
      <div className="flex flex-col items-center flex-grow px-4 mt-10">
        <QuizList />
      </div>

      {/* Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default StudentDashboard;

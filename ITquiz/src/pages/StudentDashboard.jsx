import React, { useState } from "react";
import Footer from "../utils/Footer";
import StudentHeader from "../components/student/StudentHeader";
import StudentSidebar from "../components/student/StudentSidebar";
import { StudentInstruction } from "../components/student/StudentInstruction";
import { StudentQuiz } from "../components/student/StudentQuiz";

const StudentDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Quiz");

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <StudentHeader bgColor={"bg-secondary"}/>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <StudentSidebar setActiveMenu={setActiveMenu} className="h-full flex-shrink-0" />

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeMenu === "Instruction" && <StudentInstruction />}
          {activeMenu === "Quiz" && <StudentQuiz />}
        </div>
      </div>

      {/* Footer */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default StudentDashboard;

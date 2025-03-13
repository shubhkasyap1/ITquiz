import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Admin from "../components/Admin";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import StudentDetails from "../components/StudentDetails";
import Footer from "../utils/Footer";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Admin");

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header handleLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Fixed height, doesn't shrink) */}
        <Sidebar setActiveMenu={setActiveMenu} className="h-full flex-shrink-0" />

        {/* Page Content (Expands properly) */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeMenu === "Admin" && <Admin setActiveMenu={setActiveMenu} />}
          {activeMenu === "Quiz" && <Quiz />}
          {activeMenu === "Result" && <Result />}
          {activeMenu === "StudentDetails" && <StudentDetails />}
        </div>
      </div>

      {/* Footer (Always at bottom) */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default Dashboard;

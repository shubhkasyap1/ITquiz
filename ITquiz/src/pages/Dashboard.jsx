import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Admin from "../components/Admin";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import StudentDetails from "../components/StudentDetails";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Admin");

  const handleLogout = () => {
    window.location.href = "/login"; 
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header handleLogout={handleLogout} />

      {/* Main Content (Sidebar + Page Content) */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar setActiveMenu={setActiveMenu} />

        {/* Page Content */}
        <div className="flex-1 p-8">
          {activeMenu === "Admin" && <Admin setActiveMenu={setActiveMenu} />}
          {activeMenu === "Quiz" && <Quiz />}
          {activeMenu === "Result" && <Result />}
          {activeMenu === "StudentDetails" && <StudentDetails />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Admin from "../components/Admin";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import StudentDetails from "../components/StudentDetails";
import Footer from "../utils/Footer";

const Dashboard = () => {
  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-start via-middle to-end">
      {/* Header */}
      <Header handleLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Fixed height, doesn't shrink) */}
        <Sidebar className="h-full flex-shrink-0" />

        {/* Page Content (Expands properly) */}
        <div className="flex-1 p-8 overflow-y-auto">
          <Admin />
        </div>
      </div>

      {/* Footer (Always at bottom) */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default Dashboard;
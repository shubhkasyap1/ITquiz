import React, { useState } from "react";
import { FaBars, FaUserShield, FaQuestionCircle, FaChartBar, FaUserGraduate } from "react-icons/fa";

const Sidebar = ({ setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`bg-primary text-white h-screen flex flex-col p-4 ${isOpen ? "w-[250px]" : "w-20"} transition-all duration-300`}>
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="mb-6 focus:outline-none">
        <FaBars size={24} />
      </button>

      {/* Sidebar Menu */}
      <ul className="space-y-4 flex-1">
        <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded cursor-pointer" onClick={() => setActiveMenu("Admin")}>
          <FaUserShield />
          {isOpen && <span>Admin</span>}
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded cursor-pointer" onClick={() => setActiveMenu("Quiz")}>
          <FaQuestionCircle />
          {isOpen && <span>Quiz</span>}
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded cursor-pointer" onClick={() => setActiveMenu("Result")}>
          <FaChartBar />
          {isOpen && <span>Result</span>}
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded cursor-pointer" onClick={() => setActiveMenu("StudentDetails")}>
          <FaUserGraduate />
          {isOpen && <span>Student Details</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

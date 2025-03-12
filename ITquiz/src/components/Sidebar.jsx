import React, { useState } from "react";
import { FaBars, FaUserShield, FaQuestionCircle, FaChartBar, FaUserGraduate, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-primary text-white flex flex-col justify-between ${isOpen ? "w-[250px]" : "w-20"} transition-all duration-300 p-4`}>
      <div>
        <button onClick={toggleSidebar} className="mb-6 focus:outline-none">
          <FaBars size={24} />
        </button>
        <ul className="space-y-4">
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
    </div>
  );
};

export default Sidebar;

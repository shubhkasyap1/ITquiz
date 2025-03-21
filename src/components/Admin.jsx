import React from "react";
import {
  FaUserGraduate,
  FaClipboardList,
  FaCheckCircle,
  FaBookOpen,
  FaPlusCircle,
  FaChartBar,
} from "react-icons/fa";
import { Link } from "react-router";

const Admin = ({ setActiveMenu }) => {
  // Admin Panel Options
  const stats = [
    {
      title: "Total Students",
      value: 200,
      icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
      section: "StudentDetails",
    },
    {
      title: "Active Quizzes",
      value: 5,
      icon: <FaClipboardList className="text-green-600 text-3xl" />,
      section: "Quiz",
    },
    {
      title: "Ended Quizzes",
      value: 12,
      icon: <FaCheckCircle className="text-red-600 text-3xl" />,
      section: "Quiz",
    },
    {
      title: "Student Details",
      value: "View",
      icon: <FaBookOpen className="text-purple-600 text-3xl" />,
      section: "StudentDetails",
    },
    {
      title: "Add Quiz",
      value: "+",
      icon: <FaPlusCircle className="text-yellow-600 text-3xl" />,
      section: "Quiz",
    },
    {
      title: "Results",
      value: "Check",
      icon: <FaChartBar className="text-indigo-600 text-3xl" />,
      section: "Result",
    },
  ];

  return (
    <div className="p-6"> {/* Fixed height & scrollable */}
      <h1 className="text-2xl text-gray-100 font-bold mb-6">Admin Panel</h1>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-100 hover:text-black">
        {stats.map((stat, index) => (
          <div
            key={index}
            onClick={() => setActiveMenu(stat.section)} // Update active section
            className="p-6 border border-gray-100 hover:bg-secondary rounded-lg shadow-md flex items-center space-x-4 cursor-pointer transition text-white hover:text-black"
          >
            {stat.icon}
            <div className="text-gray-100">
              <h2 className="text-lg font-semibold text-gray ">{stat.title}</h2>
              <p className="text-gray-100 text-xl font-bold ">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
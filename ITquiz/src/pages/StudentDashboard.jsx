import React, { useState, useEffect } from "react";
import StudentHeader from "../components/StudentHeader";
import QuizList from "../data/QuizList";
import Footer from "../utils/Footer";
import images from "../assets/images";
import { fetchStudentDetails } from "../utils/api";

const StudentDashboard = () => {
  const [student, setStudent] = useState({
    name: "User",
    email: "user@gmail.com",
    erpId: "UU243600000",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const studentData = await fetchStudentDetails();
        setStudent(studentData);
      } catch (err) {
        setError("Failed to fetch student details");
      }
      setLoading(false);
    };

    getStudent();
  }, []);

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${images.bgdashboard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <StudentHeader bgColor="bg-primary" />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 text-white p-6 min-h-screen">
          <h2 className="text-xl font-bold mb-4">Student Details</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            <ul className="space-y-3">
              <li><strong>Name:</strong> {student.name}</li>
              <li><strong>ERP ID:</strong> {student.erpId}</li>
              <li><strong>Email:</strong> {student.email}</li>
            </ul>
          )}
        </aside>

        {/* Quiz List */}
        <div className="flex flex-col items-center flex-grow px-4 mt-10">
          <QuizList />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudentDashboard;

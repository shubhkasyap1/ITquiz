import React, { useEffect, useState } from "react";
import { fetchResults } from "../utils/api"; // Import API function

const Result = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadResults = async () => {
      try {
        const data = await fetchResults(); // Fetch data from API
        setStudents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadResults();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Quiz Results
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading results...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-400 bg-white shadow-lg rounded-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-400 px-4 py-2">Rank</th>
                <th className="border border-gray-400 px-4 py-2">ERP ID</th>
                <th className="border border-gray-400 px-4 py-2">
                  Student Name
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Total Questions Attempted
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Total Correct
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Marks Obtained
                </th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={student.erpId} className="text-center text-gray-800">
                    <td className="border border-gray-400 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.erpId}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.name}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.attempted}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.correct}
                    </td>
                    <td className="border border-gray-400 px-4 py-2 font-semibold">
                      {student.marks}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-4">
                    No results available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Result;

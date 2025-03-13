import React from 'react';

const Results = () => {
  // Sample student data
  const students = [
    { erpId: 101, name: 'Alice', attempted: 10, marks: 80 },
    { erpId: 102, name: 'Bob', attempted: 8, marks: 70 },
    { erpId: 103, name: 'Charlie', attempted: 9, marks: 90 },
    { erpId: 104, name: 'David', attempted: 7, marks: 60 },
  ];

  // Sort students by marks in descending order
  const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Results</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">#</th>
            <th className="border border-gray-400 px-4 py-2">ERP ID</th>
            <th className="border border-gray-400 px-4 py-2">Student Name</th>
            <th className="border border-gray-400 px-4 py-2">Total Questions Attempted</th>
            <th className="border border-gray-400 px-4 py-2">Marks Obtained</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={student.erpId} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{student.erpId}</td>
              <td className="border border-gray-400 px-4 py-2">{student.name}</td>
              <td className="border border-gray-400 px-4 py-2">{student.attempted}</td>
              <td className="border border-gray-400 px-4 py-2">{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;

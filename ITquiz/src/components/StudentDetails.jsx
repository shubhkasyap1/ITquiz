import React, { useState, useEffect } from "react";
import StudentTable from "./StudentTable";
import AddStudent from "./Button/AddStudents";
import EditStudent from "./Button/EditStudent";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);

  useEffect(() => {
    fetch("https://quiz-application-rgaz.onrender.com/api/v1/admin/all-users")
      .then((response) => response.json())
      .then((data) => {
        setStudents(
          data.map((user, index) => ({
            id: `UU${index + 1}`,
            name: user.name,
            dob: user.dob.replace(/-/g, ""),
          }))
        );
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleAddStudent = () => {
    setShowAddPopup(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />
      <button
        onClick={handleAddStudent}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Student
      </button>
      {showAddPopup && <AddStudent setStudents={setStudents} setShowAddPopup={setShowAddPopup} />}
      {editingStudent && <EditStudent student={editingStudent} setStudents={setStudents} setEditingStudent={setEditingStudent} />}
    </div>
  );
};

export default StudentDetails;

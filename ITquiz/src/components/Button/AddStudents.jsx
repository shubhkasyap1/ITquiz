import React, { useState } from "react";

const AddStudent = ({ setStudents, setShowAddPopup }) => {
  const [newStudent, setNewStudent] = useState({ id: "", name: "", dob: "" });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setStudents((prev) => [...prev, { ...newStudent, id: `UU${newStudent.id}` }]);
    setShowAddPopup(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Student</h2>
        <input
          type="text"
          name="id"
          placeholder="ERP ID"
          value={newStudent.id}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          type="date"
          name="dob"
          value={newStudent.dob}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
          Save
        </button>
        <button onClick={() => setShowAddPopup(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddStudent;

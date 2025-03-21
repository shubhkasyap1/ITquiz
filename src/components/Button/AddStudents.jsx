import React, { useState } from "react";
import { addNewStudent } from "../../apiCalls/adminApiManager";
import showAlert from "../alertMessage/Alert";
import LoadingMenu from "../loader";

const AddStudent = ({ setStudents, setShowAddPopup }) => {
  const [newStudent, setNewStudent] = useState({
    username: "",
    name: "",
    dob: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const password = newStudent["username"];

      const newStudentdata = await addNewStudent(
        newStudent["username"],
        newStudent["name"],
        newStudent["dob"],
        password
      );

      setLoading(false);
      showAlert({
        title: "Success",
        text: newStudentdata["data"]["message"],
        icon: "success",
      });
    } catch (error) {
      setLoading(false);
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      showAlert({
        title: "Error",
        text: errorMessage,
        icon: "error",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      {loading && <LoadingMenu />}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Student</h2>
        <input
          type="text"
          name="username"
          placeholder="ERP ID or Username"
          value={newStudent.username}
          onChange={handleChange}
          className="border p-2 w-full mb-2 placeHolderColor"
          
        />
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={handleChange}
          className="border p-2 w-full mb-2 placeHolderColor"
        />
        <input
          type="date"
          name="dob"
          value={newStudent.dob}
          onChange={handleChange}
          className="border p-2 w-full mb-2 placeholder:text-gray-200"
        />
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Save
        </button>
        <button
          onClick={() => setShowAddPopup(false)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddStudent;

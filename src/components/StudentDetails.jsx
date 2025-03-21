import React, { useState, useEffect, useMemo } from "react";
import StudentTable from "./StudentTable";
import AddStudent from "./Button/AddStudents";
import EditStudent from "./Button/EditStudent";
import { getAllStudent } from "../apiCalls/adminApiManager";
import { deleteStudent } from "../utils/api"; // Import API functions
import showAlert from "./alertMessage/Alert";
import LoadingMenu from "./loader";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rowsLimit] = useState(10);
  const [rowsToShow, setRowsToShow] = useState([]);
  const [customPagination, setCustomPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        setLoading(true);
        const data = await getAllStudent();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
        showAlert({
          title: "Error",
          text: error.response?.data?.message || "Something went wrong",
          icon: "error",
        });
      }
    };

    loadStudents();
  }, []); // ✅ Fixed infinite loop by removing `students` from dependencies

  useEffect(() => {
    setRowsToShow(students.slice(0, rowsLimit));
    setCustomPagination(
      Array(Math.ceil(students.length / rowsLimit)).fill(null)
    );
  }, [students, rowsLimit]); // ✅ Ensures rowsToShow updates when students change

  const totalPage = Math.ceil(students.length / rowsLimit);

  const changePage = (value) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    setRowsToShow(students.slice(startIndex, endIndex));
    setCurrentPage(value);
  };

  const nextPage = () => {
    if (currentPage < totalPage - 1) {
      changePage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      changePage(currentPage - 1);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleDelete = async (id) => {
    const isDeleted = await deleteStudent(id);
    if (isDeleted) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  const handleAddStudent = () => {
    setShowAddPopup(true);
  };

  return (
    <div className=" flex items-center justify-center pt-10 pb-14">
      <div className="w-full max-w-4xl px-2">
        <div className="w-full overflow-x-scroll md:overflow-auto max-w-7xl 2xl:max-w-none mt-2">
          <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border">
            <thead className="rounded-lg text-base text-white font-semibold w-full">
              <tr className="bg-[#222E3A]/[6%]">
                <th className="py-3 px-3 text-white sm:text-base text-center font-bold whitespace-nowrap">
                  ID
                </th>
                <th className="py-3 px-3 text-white sm:text-base text-center font-bold whitespace-nowrap">
                  Name
                </th>
                <th className="py-3 px-3 text-white sm:text-base text-center font-bold whitespace-nowrap">
                  Email
                </th>
                <th className="py-3 px-3 text-white sm:text-base text-center font-bold whitespace-nowrap">
                  DOB
                </th>
                <th className="py-3 px-3 text-white sm:text-base text-center font-bold whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rowsToShow?.map((data, index) => (
                <tr
                  key={data._id}
                  className={
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-[#222E3A]/[6%] text-white"
                  }
                >
                  <td className="py-2 px-3 border-t">{data._id}</td>
                  <td className="py-2 px-3 border-t">{data.name}</td>
                  <td className="py-2 px-3 border-t">{data.email}</td>
                  <td className="py-2 px-3 border-t">
                    {new Date(data.dob).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="py-2 px-3 border-t">
                    <button
                      onClick={() => handleEdit(data)}
                      className="text-white bg-blue-500 rounded-md py-2 px-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="text-white px-4 py-2 rounded-md bg-red-500 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="w-full flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
          <div className="text-lg text-white">
            Showing {currentPage * rowsLimit + 1} to{" "}
            {Math.min((currentPage + 1) * rowsLimit, students.length)} of{" "}
            {students.length} entries
          </div>
          <div className="flex">
            <ul
              className="flex justify-center items-center gap-x-[10px] z-30"
              role="navigation"
            >
              <li
                className={`prev-btn flex items-center justify-center w-[36px] h-[36px] border rounded ${
                  currentPage === 0
                    ? "bg-gray-300 pointer-events-none"
                    : "cursor-pointer"
                }`}
                onClick={previousPage}
              >
                {/* FaAngleLeft  */}
                <FaAngleLeft />
              </li>
              {customPagination.map((_, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-center w-[36px] h-[34px] border cursor-pointer ${
                    currentPage === index
                      ? "text-white border-sky-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => changePage(index)}
                >
                  {index + 1}
                </li>
              ))}
              <li
                className={`flex items-center justify-center w-[36px] h-[36px] border rounded ${
                  currentPage === totalPage - 1
                    ? "bg-gray-300 pointer-events-none"
                    : "cursor-pointer"
                }`}
                onClick={nextPage}
              >
                <FaAngleRight />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;

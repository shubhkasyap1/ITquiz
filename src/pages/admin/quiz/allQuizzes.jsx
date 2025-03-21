import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Footer from "../../../utils/Footer";
import Card from "../../../components/AddQuiz/Card";
import CardContent from "../../../components/AddQuiz/CardContent";
import showAlert from "../../../components/alertMessage/Alert";
import { getAllQuizzes } from "../../../apiCalls/adminApiManager";
import LoadingMenu from "../../../components/loader";
import { Link } from "react-router";
import CreateQuiz from "./components/createQuizForm";

const AllQuizzes = () => {
  const [loading, setLoading] = useState(false);

  const [quizzes, setQuizzes] = useState([]);
  const [createQuiz, setCreateQuiz] = useState(true);

  const handleLogout = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllQuizzes();
        setQuizzes(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        showAlert({ title: "Error", text: error, icon: "error" });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-start via-middle to-end">
      {loading && <LoadingMenu />}

      {/* Header */}
      <Header handleLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Fixed height, doesn't shrink) */}
        <Sidebar
          // setActiveMenu={setActiveMenu}
          className="h-full flex-shrink-0"
        />

        <CreateQuiz show={createQuiz} />

        {/* Page Content (Expands properly) */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div>
            <button
              className="btn bg-green-500 text-white rounded-md p-2"
              onClick={() => {
                console.log("Heloo",createQuiz)
                setCreateQuiz(true);
              }}
            >
              Create Quiz
            </button>
            <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {quizzes.length > 0 ? (
                quizzes.map((quiz, index) => (
                  <div className="max-w-6xl" key={index}>
                    <div className="flex items-center justify-start">
                      <div>
                        <div className="bg-white bg-opacity-0 border-white border-2 rounded-lg overflow-hidden shadow-[0px_10px_40px_rgba(0.3,0.3,0.3,0.3)">
                          <div className="p-4">
                            <p className="uppercase tracking-wide text-md text-center font-bold text-white">
                              {quiz.quiz_name}
                            </p>
                          </div>
                          <div className="flex p-4 border-t border-gray-300 text-white">
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                className="h-6 w-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM5 20V9h14v11H5zm2-9h5v5H7v-5z"></path>
                              </svg>

                              <p>
                                <span className="text-white font-bold">
                                  {new Date(quiz.quiz_date).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </span>
                              </p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                className="h-6 w-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M11 14h2V8h-2v6zm1-12C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                              </svg>

                              <p>
                                <span className="text-white font-bold">
                                  {(() => {
                                    if (!quiz.quiz_time) return "Invalid Time";
                                    let [hours, minutes] =
                                      quiz.quiz_time.split(":");
                                    let period = +hours >= 12 ? "PM" : "AM";
                                    hours = +hours % 12 || 12;
                                    return `${hours}:${minutes} ${period}`;
                                  })()}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-4 border-t border-gray-300 ">
                            <div className="text-xs uppercase font-bold text-white tracking-wide">
                              Action
                            </div>
                            <div className="flex items-center pt-2 gap-2">
                              <Link
                                to={`/view-questions/${quiz._id}`}
                                className="btn bg-green-500 text-white rounded-md p-2"
                              >
                                View Question
                              </Link>

                              <Link
                                to="/"
                                className="btn bg-blue-500 text-white rounded-md p-2"
                              >
                                Edit
                              </Link>

                              <Link
                                to="/"
                                className="btn bg-red-500 text-white rounded-md p-2"
                              >
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No quizzes available</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer (Always at bottom) */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default AllQuizzes;

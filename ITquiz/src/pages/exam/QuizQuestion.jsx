import React, { useState } from "react";
import "./QuizQuestion.css";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Header from "../../utils/Header";

function QuizQuestions() {
  const [count, setCount] = useState(1);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [selectedOption, setSelectedOption] = useState(null);

  const categories = [
    "C Programming",
    "Networking",
    "DBMS",
    "Computer Fundamental",
  ];
  const [selectedCategory, setSelectedCategory] = useState("C Programming");

  return (
    <div>
      <Header />
      <div className="mainContainer">
        <div className="categoryManager">
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className={`font-regular selectedCategory ${
                  selectedCategory === category ? "selected" : ""
                }`}
                onClick={() => setSelectedCategory(category)} // Set category name instead of index
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="containerBox">
          <div className="left">
            <h1 className="font-medium fs-16 padding-y-2 padding-x-2">
              Question {count}
            </h1>
            <div className="line"></div>
            <div className="question_section">
              <p className="font-medium">Question Comes Here</p>
              <ul>
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`font-regular option ${
                      selectedOption === index ? "selected" : ""
                    }`}
                    onClick={() => setSelectedOption(index)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            <div className="line mb-0"></div>
            <div className="row-line bg_gray">
              <div className="group1">
                <button className="common_btn mouse_curser">
                  <ChevronsLeft /> Previous{" "}
                </button>
                <button className="common_btn mouse_curser">
                  Next <ChevronsRight />
                </button>
              </div>
              <button className="common_btn mouse_curser bg_green text_white">
                Save & Next
              </button>
              <button className="common_btn mouse_curser">Clear</button>
              <button className="common_btn mouse_curser bg_blue text_white border_blue">
                Submit
              </button>
            </div>
          </div>

          <div className="right flex flex-col">
            <div className="timer_outline mb-4">
              <div className="timer">
                <p>Time Remaining</p>

                <p className="count-down">00:00</p>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-4 border-2 border-black-400 p-2 rounded">
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">1</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">2</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">3</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">4</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">5</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">6</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">7</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">8</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">9</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">10</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">11</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">12</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">13</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">14</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">15</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">16</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">17</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">18</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">19</p>
              <p className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 text-center">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestions;

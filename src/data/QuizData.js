export const guidelines = [
  "This is an individual competition; each participant must attempt the quiz alone.",
  "Participants must follow all rules and maintain academic integrity.",
  "Do not minimize or switch windows/tabs during the quiz. Doing so will trigger automatic submission, and you will be disqualified.",
  "If the quiz window is closed or refreshed, it will be submitted automatically, and you cannot re-enter.",
];

export const examStructure = {
  "2. Section 1: Multiple Choice Questions (MCQs)": [
    "There are 80 MCQs divided into 4 modules.",
    "Each module contains 20 questions based on different subjects:",
    "Module 1: Programming in C",
    "Module 2: Networking",
    "Module 3: Database Management System (DBMS)",
    "Module 4: Computer Fundamentals",
    "Each correct answer carries 1 mark.",
    "Negative marking: 1/3rd mark will be deducted for every incorrect answer.",
    "Important: Section 2 (Coding-Based Questions) will only be unlocked after completing Section 1.",
  ],
  "Section 2: Coding-Based Questions": [
    "This section consists of 2 coding questions.",
    "Each question carries 10 marks, totaling 20 marks.",
  ],
};

export const scoring = [
  "Total Marks: 100",
  "MCQ Section: 80 marks",
  "Coding Section: 20 marks",
  "The final score will be calculated based on correct answers after applying negative marking.",
];

export const timeLimit = [
  "Total duration: 1 hour 30 minutes (90 minutes).",
  "Section 1 (MCQs) must be completed before attempting Section 2 (Coding).",
];

export const importantInstructions = [
  "Do not minimize, switch tabs, or refresh the page during the quiz. Doing so will result in automatic submission and exit.",
  "The quiz platform will auto-submit your answers once the time is over.",
  "Once submitted, answers cannot be changed.",
];


export const problem = {
  title: "Two Sum",
  description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.`,
  
  examples: [
    {
      input: {
        nums: [2, 7, 11, 15],
        target: 9,
      },
      output: [0, 1],
    },
    {
      input: {
        nums: [3, 2, 4],
        target: 6,
      },
      output: [1, 2],
    },
    {
      input: {
        nums: [3, 3],
        target: 6,
      },
      output: [0, 1],
    },
  ],
  
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists."
  ],
  
  functionSignature: `function twoSum(nums, target) {\n  // Your code here\n}`
};

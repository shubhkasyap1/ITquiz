import React from "react";
import images from "../assets/images.jsx";
import Header from "../utils/Header.jsx";
import Footer from "../utils/Footer.jsx";
import { FaCheckCircle } from "react-icons/fa";

const Completion = () => {
  const bgImage = {
    width: "100%",
    height: "18rem",
    backgroundImage: "url(${images.Itquiz})",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-start via-middle to-end text-white relative overflow-hidden items-center px-0 bg-cover bg-no-repeat w-screen bg-center h-screen">
      {/* Header */}
      <Header />

      {/* Main Content - Centered  */}
      <main className="flex-1 flex flex-col justify-center items-center text-center gap-8 w-full max-w-5xl px-4 relative">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg text-center max-w-md flex flex-col items-center gap-4">
          <FaCheckCircle className="text-green-500 text-6xl" />
          <h2 className="text-white text-2xl font-bold mt-4">Your Test Submitted Successfully</h2>
          <p className="text-gray-300 mt-2">Thank you for participating in <br /> <span className="font-semibold">Prashan Baan - IT Utsav 3.0</span></p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Completion;
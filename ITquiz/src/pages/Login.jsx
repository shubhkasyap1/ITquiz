import React from "react";
import LoginForm from "../components/LoginForm";
import BackgroundImage from "../assets/loginbg.png";

const Login = () => {
  return (
    <div
      className="container bg-primary bg-cover bg-no-repeat w-screen bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-secondary h-[500px] w-[450px] p-8 rounded-2xl shadow-lg text-white ml-auto m-32 mt-10">
        <h2 className="text-5xl font-bold mb-4 mt-14">Student Login</h2>
        <p className="text-gray-300 mb-6 text-lg">Enter your account details</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

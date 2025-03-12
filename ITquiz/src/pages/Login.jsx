import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://quiz-application-rgaz.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      

      if (response.ok) {
        let role=data['data'].role;
        let token= data['data'].token;
        localStorage.setItem("token", token); // Store token
        localStorage.setItem("role", role); // Store role (admin/student)

        // Redirect based on role
        if (role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/instructions");
        }
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container bg-primary bg-[url('assets\loginbg.png')] bg-cover bg-no-repeat w-screen bg-center h-screen flex justify-center items-center">
      <div className="bg-secondary h-[500px] w-[450px] p-8 rounded-2xl shadow-lg text-white ml-auto m-32 mt-10">
        <h2 className="text-5xl font-bold mb-4 mt-14">Student Login</h2>
        <p className="text-gray-300 mb-6 text-lg">Enter your account details</p>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleLogin}>
          <div>
            <input
              className="form-control bg-secondary border-b-2 border-gray-400 rounded mb-4 w-full p-2 text-gray-300 placeholder:text-gray-300 focus:outline-none"
              placeholder="Enrollment no."
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              className="form-control bg-secondary border-b-2 border-gray-400 rounded w-full p-2 pr-10 text-white placeholder:text-gray-300 focus:outline-none"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600 opacity-70"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-button1 hover:bg-blue-900 w-full p-2 rounded text-white mt-8"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

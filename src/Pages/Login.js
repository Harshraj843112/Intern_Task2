import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    let isLogin = localStorage.getItem("login");
    if (isLogin) {
      navigate("/");
    }
  }, [navigate]); // Include 'navigate' in the dependency array

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to log in");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        // Check if the 'token' property exists in the 'data' object
        if (data && data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          toast.success("Login successful");
          navigate("/"); // Navigate to home page after successful login
        } else {
          console.error("Token not found in response:", data);
          toast.error("Token not found in response. Please try again.");
        }
      })

      .catch((error) => {
        console.error("Error logging in:", error);
        toast.error("Failed to log in. Please try again.");
      });
  };

  // Inside your Login component after a successful login
  if (loggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

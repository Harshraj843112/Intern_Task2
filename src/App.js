import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import axios from "axios";
import MyCart from "./Components/MyCart";
import ProductDetail from "./Components/ProductDetail";
import Profile from "./Components/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data);
      setProducts(response.data.products);
      // Simulating successful login here for demonstration
      setIsLoggedIn(true);
      // Show a success toast for demonstration
      // toast.success("Login successful!");
    } catch (error) {
      console.error("Error fetching products:", error);
      // Show an error toast if login fails
      toast.error("Error logging in. Please try again.");
    }
  };
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ToastContainer />
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} addToCart={addToCart} />}
        />

        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;

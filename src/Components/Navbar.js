import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import Profile from "../Components/Profile";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ isLoggedIn, setIsLoggedIn, cartItemCount }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center text-white">
        <div className="flex items-center">
          <img
            src="https://media.licdn.com/dms/image/D4D0BAQFkRXLKcwF7KQ/company-logo_200_200/0/1681210220454?e=1717027200&v=beta&t=yQzay7bjGqh0mtgZV_isAyyTXhH8jbNPup-ZEEF-GcI"
            className="h-14" // Increase the height of the image to 12
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold whitespace-nowrap ml-2">
            Build with Innovation
          </span>
        </div>

        <div className="flex items-center gap-x-4">
          {!isLoggedIn ? (
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md focus:outline-none transition duration-300">
                Login
              </button>
            </Link>
          ) : (
            <>
              <Link to="/mycart">
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md focus:outline-none transition duration-300 relative">
                  <FaShoppingCart />
                  {cartItemCount > 0 && (
                    <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 -right-1">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </Link>

              {isLoggedIn && (
                <Link to="/profile">
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md focus:outline-none transition duration-300 relative">
                    <FaUserCircle className="text-white text-2xl" />
                  </button>
                </Link>
              )}

              <div>
                <Link to="/login">
                  <button
                    onClick={handleLogout}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md focus:outline-none transition duration-300"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

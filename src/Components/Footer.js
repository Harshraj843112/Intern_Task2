import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Footer Links */}
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <NavLink
                  to="/"
                  className="hover:text-white transition duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/shop"
                  className="hover:text-white transition duration-300"
                >
                  Shop
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/about"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 mr-2 flex-grow focus:outline-none rounded-md bg-gray-700 text-gray-300"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col items-center">
          <p className="text-sm">
            &copy; 2024 Your E-commerce. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed with <i className="text-red-500 fas fa-heart"></i> by Your
            Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

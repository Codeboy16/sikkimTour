import React, { useState } from "react";
import img from "../../public/img/logo.png";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

let Header = ({ color = "#ef4444",name }) => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="p-3 md:p-4" style={{ background: color }}>
        <div className="flex justify-between items-center md:justify-around">
          <span className="p-2 cursor-pointer">
            <img src={img} className="w-24 md:w-40" alt="Logo" />
          </span>
          <span className="hidden pt-6 md:flex justify-items-center">
            <Link
              to="/"
              className="px-4 font-medium text-sm md:text-xl hover:underline hover:decoration-red-500 no-underline text-white"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="px-4 font-medium text-sm md:text-xl hover:underline hover:decoration-red-500  no-underline text-white"
            >
              Explore
            </Link>
            <Link
              to="/package"
              className="px-4 font-medium text-sm md:text-xl hover:underline hover:decoration-red-500  no-underline text-white"
            >
              Package
            </Link>
            <Link
              to="/contact"
              className="px-4 font-medium text-sm md:text-xl hover:underline hover:decoration-red-500  no-underline text-white"
            >
              Contact
            </Link>
            {name && <h1>{name}</h1>}
          </span>
          <span
            className="material-symbols-outlined text-3xl md:hidden"
            onClick={toggleMenu}
          >
            menu
          </span>
        </div>

        {/* Conditional rendering of the mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-600 text-black shadow-md mt-2 p-2 rounded">
            <Link
              to="/"
              className="flex items-center block px-4 py-2 text-sm font-medium  no-underline text-black"
            >
              <span className="material-symbols-outlined px-1">home</span> Home
            </Link>
            <Link
              to="/explore"
              className="flex items-center block px-4 py-2 text-sm font-medium  no-underline text-black"
            >
              <span className="material-symbols-outlined px-1">
                <span class="material-symbols-outlined">image</span>
              </span>
              Explore
            </Link>
            <Link
              to="/package"
              className="flex items-center block px-4 py-2 text-sm font-medium  no-underline text-black"
            >
              <span className="material-symbols-outlined px-1">person</span>
              Package
            </Link>
            <Link
              to="/contact"
              className="flex items-center block px-4 py-2 text-sm font-medium  no-underline text-black"
            >
              <span className="material-symbols-outlined px-1">
                <span class="material-symbols-outlined">phone_in_talk</span>
              </span>
              Contact
            </Link>
            <Link
              to="/login"
              className="flex items-center block px-4 py-2 text-sm font-medium "
            >
              <span className="material-symbols-outlined px-1">login</span>Login
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

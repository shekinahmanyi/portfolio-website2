import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" bg-slate-900 text-neutral-content fixed inset-x-0 z-50 shadow-xl ">
      <div className="container mx-auto px-6 flex items-center font-nunito justify-between">
        <div className="px-5 text-2xl mb-5 mt-5 font-bold">
          <span className="text-white tracking-tight">
            Sheki<span className="text-blue-600">Dev✨</span>
          </span>
        </div>

        <div className="font-bold hidden md:flex md:items-center md:space-x-4 mr-52">
          {/* Navbar links */}
          <Link
            to="/"
            className={`text-white px-2 py-2 text-lg font-medium ${
              location.pathname === "/"
                ? "text-blue-500 border-b-2 border-green-500"
                : "hover:text-blue-400"
            }`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white px-2 py-2 text-lg font-medium ${
              location.pathname === "/about"
                ? "text-blue-500 border-b-2 border-green-500"
                : "hover:text-blue-400"
            }`}
            onClick={handleLinkClick}
          >
            About Me
          </Link>
          <Link
            to="/skills"
            className={`text-white px-2 py-2  text-lg font-medium ${
              location.pathname === "/skills"
                ? "text-blue-500 border-b-2 border-green-500"
                : "hover:text-blue-400"
            }`}
            onClick={handleLinkClick}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`text-white px-2 py-2  text-lg font-medium ${
              location.pathname === "/projects"
                ? "text-blue-500 border-b-2 border-green-500"
                : "hover:text-blue-400"
            }`}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`text-white px-2 py-2 text-lg font-medium ${
              location.pathname === "/contact"
                ? "text-blue-500 border-b-2 border-green-500"
                : "hover:text-blue-400"
            }`}
            onClick={handleLinkClick}
          >
            Contact Me
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <a
            href="https://github.com/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-blue-700 rounded-full p-2"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ShekinahManyi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-blue-700 rounded-full p-2"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/shekinah-manyi-849a21210/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-blue-700 rounded-full p-2"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none bg-white rounded-full p-2 ml-2"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="container mx-auto px-6 my-4">
          <div className="flex flex-col space-y-4 font-nunito">
            <Link
              to="/"
              className={`text-white text-base font-medium ${
                location.pathname === "/"
                  ? "text-blue-500 border-b-2 border-green-500"
                  : "hover:text-blue-400"
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white text-base font-medium ${
                location.pathname === "/about"
                  ? "text-blue-500 border-b-2 border-green-500"
                  : "hover:text-blue-400"
              }`}
              onClick={handleLinkClick}
            >
              About Me
            </Link>
            <Link
              to="/skills"
              className={`text-white  text-base font-medium ${
                location.pathname === "/skills"
                  ? "text-blue-500 border-b-2 border-green-500"
                  : "hover:text-blue-400"
              }`}
              onClick={handleLinkClick}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className={`text-white  text-base font-medium ${
                location.pathname === "/projects"
                  ? "text-blue-500 border-b-2 border-green-500"
                  : "hover:text-blue-400"
              }`}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`text-white text-base font-medium ${
                location.pathname === "/contact"
                  ? "text-blue-500 border-b-2 border-green-500"
                  : "hover:text-blue-400"
              }`}
              onClick={handleLinkClick}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

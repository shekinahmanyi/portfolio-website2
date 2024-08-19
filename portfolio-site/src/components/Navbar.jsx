import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    // { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/shekinahmanyi", icon: FaGithub },
    { href: "https://twitter.com/ShekinahManyi", icon: FaTwitter },
    { href: "https://www.linkedin.com/in/shekinah-manyi-849a21210/", icon: FaLinkedin },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-gray-800 text-neutral-content fixed inset-x-0 z-50 shadow-xl font-nunito">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl mb-5 mt-5 font-bold">
          <span className="text-white tracking-tight">
            Sheki<span className="text-indigo-600">Dev✨</span>
          </span>
        </div>

        <div className="hidden md:flex space-x-4 font-bold">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-white px-2 py-2 text-lg font-medium ${
                pathname === to ? "text-blue-500 border-b-2 border-green-500" : "hover:text-blue-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex space-x-2">
          {socialLinks.map(({ href, icon: Icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:-translate-y-1 hover:scale-110 bg-indigo-600 rounded-full p-2"
            >
              <Icon />
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl bg-white rounded-full p-2 ml-2"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="container mx-auto px-6 my-4">
          <div className="flex flex-col space-y-4 font-nunito">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-white text-base font-medium ${
                  pathname === to ? "text-blue-500 border-b-2 border-green-500" : "hover:text-blue-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import sheki from "../images/sheki.jpg";
import { FaDownload, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const resumeUrl =
    "https://drive.google.com/file/d/1t717AtUmI47ErnCDuFB6aW5KAfj_lJmy/view?usp=sharing";

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
      {/* Card Content */}
      <div className="relative z-10 rounded-xl max-w-md w-full sm:w-auto p-6 md:p-10 shadow-2xl bg-white/10 backdrop-blur-lg text-white mt-32 lg:mt-24">
        <div className="w-48 h-48 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 ease-in-out">
          <img
            src={sheki}
            alt="Shekinah"
            className="rounded-full object-cover w-full h-full shadow-lg border-4 border-white/30"
          />
        </div>
        {/* Title */}
        <h1 className="text-xs font-semibold text-center font-nunito text-indigo-300 tracking-wide uppercase">
          Frontend Developer
        </h1>
        <h1 className="text-4xl font-extrabold text-center font-nunito pt-4 leading-tight">
          Hello <span className="hand-wave inline-block animate-wave">👋</span>,
          <br /> I'm <span className="text-indigo-400">Shekinah</span>!
        </h1>
        <p className="font-nunito p-4 text-center text-gray-200 text-lg leading-relaxed">
          I'm a passionate Frontend Developer crafting dynamic and engaging
          experiences with React.
        </p>
        <div className="flex justify-center mt-6 font-nunito space-x-4">
          <a
            href={resumeUrl}
            download="resume.pdf"
            className="transition transform hover:scale-105 bg-yellow-400 text-black text-lg font-bold px-6 py-3 rounded-md flex items-center shadow-lg"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
      {/* Additional Section */}
      <div className="relative z-10 text-center mt-16 md:mt-20">
        <p className="text-gray-300 text-2xl md:text-3xl font-mono font-bold p-6">
          Are you
          <span className="bg-green-400 text-black rounded-full px-3 py-1 inline-block mx-2">
            curious
          </span>
          to learn more
          <span className="bg-indigo-400 text-black rounded-full px-3 py-1 inline-block mx-2">
            about me
          </span>
          and what I can
          <span className="bg-yellow-400 text-black rounded-full px-3 py-1 inline-block mx-2">
            offer
          </span>
          ?
        </p>

        {/* Container for Arrow and Button */}
        <div className="flex flex-col items-center justify-center mt-12">
          <FaArrowDown className="text-indigo-300 text-7xl animate-bounce cursor-pointer mb-6" />
          <Link to="/about">
            <button className="transition transform hover:scale-105 bg-indigo-600 text-white text-lg font-bold px-8 py-4 rounded-md shadow-2xl font-nunito">
              Learn More About Me
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;

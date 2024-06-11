import React from "react";
import sheki from "../images/sheki.jpg";
import { FaDownload } from "react-icons/fa";

function Home() {
  const resumeUrl =
    "https://drive.google.com/file/d/1t717AtUmI47ErnCDuFB6aW5KAfj_lJmy/view?usp=sharing";

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center ">
      <div className="rounded-lg max-w-md w-full sm:w-auto">
        <div className="w-48 h-48 mx-auto mb-2">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <h1 className="text-xs font-bold text-center font-nunito text-stone-300">
          FULL STACK DEVELOPER
        </h1>
        <h1 className="text-2xl font-bold text-center font-nunito pt-4 text-white">
          Hello <span className="hand-wave inline-block animate-wave">👋</span>{" "}
          ,<span> I'm Shekinah!</span>
        </h1>
        <p className="font-nunito p-4 text-center text-white text-lg">
          I am a passionate and experienced Full Stack Developer, with expertise
          in the MERN stack (MongoDB, Express.js, React.js, Node.js). I create
          exceptional applications that leave a lasting impression.
        </p>
        <div className="flex justify-center mt-4 font-nunito">
          <a
            href={resumeUrl}
            download="resume.pdf"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-blue-700 text-white text-lg font-medium px-4 py-2 mr-4 rounded-md flex items-center"
          >
            <FaDownload className="mr-2" /> Resume
          </a>
          <a
            href="/contact"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-500 text-white text-lg font-medium px-4 py-2 rounded-md"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

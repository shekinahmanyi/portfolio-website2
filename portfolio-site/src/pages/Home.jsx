import React from "react";
import sheki from "../images/sheki.jpg";
import { FaDownload } from "react-icons/fa";

function Home() {
  const resumeUrl =
    "https://docs.google.com/document/d/1p9oJPx3-XpfIT_3Kr-nj6JAKC-VXVO4j08Q3ZFuCExA/edit?usp=drive_link"; // Replace with the direct URL to your resume

  return (
    <div className="bg-blue-950 min-h-screen flex items-center justify-center">
      <div className="rounded-lg mt-12 max-w-md w-full sm:w-auto">
        <div className="w-32 h-32 mx-auto mb-2">
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
          Hello, I'm Shekinah!
        </h1>
        <p className="font-nunito pt-2 text-center text-white text-base">
          I am a passionate and experienced Full Stack Developer, with expertise
          in the MERN stack (MongoDB, Express.js, React.js, Node.js). I create
          exceptional applications that leave a lasting impression.
        </p>
        <div className="flex justify-center mt-4 font-nunito">
          <a
            href={resumeUrl}
            download="resume.pdf"
            className="bg-blue-700 text-white text-base font-medium px-4 py-2 mr-4 rounded-md flex items-center"
          >
            <FaDownload className="mr-2" /> Resume
          </a>
          <a
            href="/contact"
            className="bg-green-500 text-white text-base font-medium px-4 py-2 rounded-md"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

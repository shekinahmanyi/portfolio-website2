import React from "react";
import { FaArrowRight } from "react-icons/fa";

function About() {
  const blogUrl = "https://medium.com/@shekinahmanyi";

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="font-nunito p-8 ">
        <div className="flex items-center mb-4 h-full">
          <div className="border-r-4 border-blue-400 pr-4">
            <h1 className="text-sm text-blue-400">About Me</h1>
          </div>
        </div>
        <h1 className="text-base font-bold text-white mb-2">More About Me</h1>
        <p className="text-white text-base">
          My name is Shekinah Manyi and I am a Software Engineer
          <br />
          from Cameroon.I have a strong foundation in web development,
          <br />
          I create exceptional web applications that leave a lasting impression.
          <br />
          <br />
          Aside from coding, I have a love for reading books and writing
          articles,
          <br />
          which you can explore on my blog page on medium. I believe in maintaining a
          <br />
          positive attitude and always strive to give my best in everything I
          do, embracing
          <br />
          challenges with a smile.
          
        </p>
        <a href={blogUrl} target="_blank" rel="noopener noreferrer">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white text-blue-700 px-4 py-2 rounded-md flex items-center mt-4">
            Visit My Blog <FaArrowRight className="ml-1" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;

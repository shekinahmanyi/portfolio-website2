import React from "react";
import { FaArrowRight } from "react-icons/fa";
import speaker from "../images/speaker.jpg";



function About() {
  const blogUrl = "https://medium.com/@shekinahmanyi";

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 min-h-screen flex flex-col items-center justify-center">
      <div className="font-nunito p-8 flex flex-col md:flex-row items-center">
        <div className="mb-8 mt-12 md:mr-8 md:mb-0">
          <img
            src={speaker}
            alt="Software Engineer"
            className="w-96 h-96 rounded-lg object-cover mx-auto md:mx-0"
          />
        </div>
        <div>
          <div className="border-l-4 border-blue-400 pl-4 mb-4">
            <h1 className="text-sm text-blue-400">About Me</h1>
          </div>
          <h1 className="text-base font-bold text-green-500 mb-2 ">
            More About Me
          </h1>
          <p className="text-white text-base">
            My name is Shekinah Manyi and I am a Software Engineer
            <br />
            from Cameroon. I have a strong foundation in web development,
            <br />
            I create exceptional web applications that leave a lasting
            impression.
            <br />
            <br />
            Aside from coding, I have a love for reading books and writing
            articles,
            <br />
            which you can explore on my blog page on medium. I believe in
            maintaining a
            <br />
            positive attitude and always strive to give my best in everything I
            do, embracing
            <br />
            challenges with a smile.
            <br /> <br />
            I am also a lover of community and I volunteer as a GDG Organizer
            and I am <br />
            a GDSC alumni of the University of Buea. <br />I also Love Jesus ❤️!
            Please Feel free to reach out!!
          </p>
          <a href={blogUrl} target="_blank" rel="noopener noreferrer">
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-yellow-300 text-black font-bold px-4 py-2 rounded-md flex items-center mt-4">
              Visit My Blog <FaArrowRight className="ml-1" />
            </button>
          </a>
        </div>
      </div>
      {/**Technologies */}
      <div className="grid grid-cols-3 gap-2 md:grid-cols-3 mt-12 md:mt-24 font-nunito text-center cursor-pointer">
        <p className="bg-green-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block mx-1">
          HTML
        </p>
        <p className="bg-yellow-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block mx-1">
          CSS
        </p>
        <p className="bg-indigo-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block ">
          JavaScript
        </p>
      </div>

      {/**Technologies 2 */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 mt-2 font-nunito text-center cursor-pointer">
        <p className="bg-green-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block">
          React
        </p>
        <p className="bg-yellow-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block">
          TailwindCSS
        </p>
        <p className="bg-indigo-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block">
          Bootstrap
        </p>
        <p className="bg-indigo-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block">
          PHP
        </p>
      </div>

      {/**Technologies 3 */}
      <div className="grid grid-cols-3 gap-2 md:grid-cols-3 text-center mt-2 font-nunito cursor-pointer">
        <p className="bg-green-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block mx-1">
          NodeJs
        </p>
        <p className="bg-yellow-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block mx-1">
          Python
        </p>
        <p className="bg-indigo-400 text-xl md:text-2xl font-bold text-black rounded-full px-4 md:px-6 py-3 md:py-3 inline-block mx-1">
          Git
        </p>
      </div>
    </div>
  );
}

export default About;

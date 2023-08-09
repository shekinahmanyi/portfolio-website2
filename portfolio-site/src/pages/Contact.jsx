import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-blue-950 min-h-screen flex items-center justify-center">
      <div className="container flex flex-col items-center font-nunito">
        <h1 className="text-3xl text-blue-400 text-center font-bold">
          Contact Me!
        </h1>
        <p className="text-white text-center text-base p-4">
          Do you have a project for me to work on? or an Idea?
          One More thing is that I do not bite!!
          <br /> Please Reach Out!😆
        </p>
        <div className="max-w-md bg-white p-6 rounded-lg shadow-md mt-2 mb-4">
          <p className="font-bold text-center text-2xl mb-4">
            Send me a Message!
          </p>
          <h2 className="text-lg font-bold flex items-center">
            <span className="mr-2">Email Me</span>
            <FaEnvelope className="text-blue-700" />
          </h2>
          <p className="mb-4">shekinahmanyi@gmail.com</p>

          <h2 className="text-lg font-bold flex items-center">
            <span className="mr-2">or Call Me!</span>
            <FaPhoneAlt className="text-blue-700 mr-2" />
          </h2>
          <p>+237 652594201</p>
          <div className="flex justify-center items-center space-x-2 mt-4">
            <a
              href="https://github.com/shekinahmanyi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 rounded-full p-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/ShekinahManyi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 rounded-full p-2"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/shekinah-manyi-849a21210/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 rounded-full p-2"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <a
          href="https://www.buymeacoffee.com/shekinahmanyi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full transition-colors duration-300 flex items-center space-x-4 mt-4"
        >
          <span>Buy Me a Coffee</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;

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
      <div className="container mx-auto font-nunito">
        <h1 className="text-3xl text-blue-400 text-center font-bold mb-2">
          Contact Me!
        </h1>
        <p className="text-white text-center text-xl p-6">
          Do you have a project for us to work on? or an Idea? <br /> Please
          Reach Out!😆
        </p>
        <div className="max-w-md mx-auto bg-white p-6  rounded-lg shadow-md mt-4 mb-8">
          <p className="font-bold text-center text-2xl mb-4">
            Send me a Message!
          </p>
          <h2 className="text-lg font-bold  flex items-center">
            <span className="mr-2">Email Me</span>
            <FaEnvelope className="text-blue-700" />
          </h2>
          <p className="mb-4">shekinahmanyi@gmail.com</p>

          <h2 className="text-lg font-bold flex items-center">
            <span className="mr-2">or Call Me!</span>
            <FaPhoneAlt className="text-blue-700 mr-2" />
          </h2>
          <p>+237 652594201</p>
          <div className="flex justify-center items-center space-x-2">
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
      </div>
    </div>
  );
}

export default Contact;

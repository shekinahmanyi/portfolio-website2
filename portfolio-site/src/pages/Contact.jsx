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
        <h1 className="text-3xl text-blue-400 text-center font-bold mt-24">
          Contact Me!
        </h1>
        <p className="text-white text-center text-base font-mono p-6">
          I am eager to contribute to your team and make a positive impact.   <br />
          Do you have any projects or ideas that you would like me to
          work on?   <br /><br />
          I am open to new challenges and I am confident that I can
          deliver high-quality work.<br /> I am excited to hear from you and learn
          more about your team's goals.
        </p>
        <div className="w-3/5 h-96 bg-white p-6 rounded-lg shadow-md mt-2 mb-4">
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
              className="bg-blue-700 rounded-full p-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/ShekinahManyi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 rounded-full p-4"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/shekinah-manyi-849a21210/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 rounded-full p-4"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <a
          href="https://www.buymeacoffee.com/shekinahmanyi"
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-500 text-white text-lg font-medium px-4 py-2 rounded-md mt-6 mb-4"
        >
          <span>Buy Me a Coffee</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;

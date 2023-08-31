import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import h1 from "../images/h1.jpg";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="relative p-10 text-primary-content flex flex-col justify-center items-center text-base">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${h1})` }}
      />
      <div className="relative z-10 container text-white">
        <p className="mb-2 text-xl font-nunito text-center">
          Let's connect on social media!
        </p>
        <div className="flex justify-center items-center space-x-4 text-xl text-black">
          <a
            href="https://twitter.com/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-700 rounded-full p-2"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-700 rounded-full p-2"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-700 rounded-full p-2"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-700 rounded-full p-2"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-700 rounded-full p-2"
          >
            <FaGithub />
          </a>
        </div>
        <div className="text-center font-nunito text-sm mt-12">
          <p className="">Designed & Built with❤️by Sheki Dev✨</p>
          <p className="">&copy; {footerYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

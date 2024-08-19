import React from "react";
// import {
//   FaTwitter,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="relative p-10 text-white flex flex-col justify-center items-center text-base bg-gradient-to-r from-slate-900 to-gray-800">
      <div className="container relative z-10 text-center">
        {/* <p className="mb-4 text-2xl font-semibold tracking-wide font-nunito">
          Let’s Connect on Social Media!
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          {[
            { href: "https://twitter.com/shekinahmanyi", icon: FaTwitter },
            { href: "https://www.facebook.com/shekinahmanyi", icon: FaFacebook },
            { href: "https://www.instagram.com/shekinahmanyi", icon: FaInstagram },
            { href: "https://www.linkedin.com/in/shekinahmanyi", icon: FaLinkedin },
            { href: "https://www.github.com/shekinahmanyi", icon: FaGithub },
          ].map(({ href, icon: Icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-600 rounded-full shadow-lg hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div> */}

        <hr className="my-8 border-t border-gray-600 w-full" />

        <div className="text-sm font-bold font-nunito">
          <p>Designed & Built with ❤️ by Sheki Dev✨</p>
          <p>&copy; {footerYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

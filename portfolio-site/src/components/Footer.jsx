import React from "react";


function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="relative p-10 text-white flex flex-col justify-center items-center text-base bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
      <div className="container relative z-10 text-center">
        

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

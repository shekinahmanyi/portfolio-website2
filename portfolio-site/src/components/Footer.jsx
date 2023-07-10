import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='footer p-10 bg-blue-950 text-primary-content text-white flex flex-col justify-center items-center text-base'>
      <div>
        <p className="mb-4">Follow me on social media:</p>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a href="https://twitter.com/shekinahmanyi">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/shekinahmanyi">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/shekinahmanyi">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/shekinahmanyi">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {footerYear} All rights reserved</p>
        <p className='text-center'>Sheki Dev</p>
      </div>
    </footer>
  );
}

export default Footer;

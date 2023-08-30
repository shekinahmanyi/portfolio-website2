import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import h1 from '../images/h1.jpg';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-white bg-cover bg-center text-primary-content text-white flex flex-col justify-center items-center text-base" style={{ backgroundImage: `url(${h1})` }}>
      <div>
        <p className="mb-4 text-lg font-nunito">Connect with me on social media:</p>
        <div className="flex justify-center items-center space-x-4 mb-4 font-nunito text-xl">
          <a href="https://twitter.com/shekinahmanyi" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/shekinahmanyi" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/shekinahmanyi" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/shekinahmanyi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/shekinahmanyi">
            <FaGithub />
          </a>
        </div>
        <p className="text-center font-nunito text-sm">Designed & Built with❤️by Sheki Dev✨</p>
        <p className="font-nunito text-sm text-center">&copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

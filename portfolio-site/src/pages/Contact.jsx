import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shekinahmanyi@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )}%0A%0AFrom: ${name}%0AEmail: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center font-nunito">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl text-blue-400 font-bold mt-24 lg:mt-0">
            Contact Me!
          </h1>
          <p className="text-white bold text-lg mt-6 lg:mt-4">
            I'm excited about the opportunity to contribute to your team and
            make a meaningful impact. <br /> <br />
            If you have any projects or ideas that you think I can assist with,
            I'd love to hear about them!
            <br /> I'm always open to new
            challenges and confident in my ability to deliver high-quality work.
            <br />
            <br /> Send me a Message and Let's discuss how I can help achieve
            your team's goals.📩
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md mt-8 mb-8 lg:mt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-700 transition"
            >
              Send
            </button>
          </form>
          <div className="mt-6 flex space-x-2 justify-center">
            <a
              href="https://github.com/shekinahmanyi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 rounded-full p-4 text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/ShekinahManyi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 rounded-full p-4 text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/shekinah-manyi-849a21210/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 rounded-full p-4 text-white"
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

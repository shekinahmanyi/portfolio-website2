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
    <div className="bg-gradient-to-r from-slate-900 to-gray-800 min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center font-nunito lg:max-w-4xl">
        <div className="lg:w-1/2 lg:pr-6 mb-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl text-green-400 font-extrabold mb-4 mt-32 lg:mt-0 animate-pulse">
            Get in Touch🫱🫲

          </h1>
          <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
            I’m thrilled at the possibility of collaborating with you on your
            next project. Whether you have a new idea, need help with something
            ongoing, or just want to chat, I'm here for it! Let's make something
            amazing together💡
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-indigo-600 p-6 sm:p-8 rounded-2xl shadow-lg lg:max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-bold text-black mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-bold text-black mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-bold text-black mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-600 text-black text-xl font-bold rounded-lg shadow-md hover:bg-yellow-600 transition transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex space-x-6 justify-center">
            {[
              { href: "https://github.com/shekinahmanyi", icon: FaGithub },
              { href: "https://twitter.com/ShekinahManyi", icon: FaTwitter },
              {
                href: "https://www.linkedin.com/in/shekinah-manyi-849a21210/",
                icon: FaLinkedin,
              },
            ].map(({ href, icon: Icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-600 p-4 rounded-full text-black hover:bg-yellow-600 transition transform hover:-translate-y-1 hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

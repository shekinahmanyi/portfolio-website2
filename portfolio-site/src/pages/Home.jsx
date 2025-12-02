
import sheki from "../images/sheki.jpg";
import { FaDownload, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const resumeUrl =
    "https://www.canva.com/design/DAGHz9cDeOc/fULL5xpZyz2B9RQs4HSfsA/edit?utm_content=DAGHz9cDeOc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 overflow-hidden">

      {/* Soft Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>

      {/* Card Content */}
      <div className="relative z-10 rounded-2xl max-w-md w-full p-8 md:p-12 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white mt-32 lg:mt-24 transition transform hover:scale-[1.02] duration-300">

        {/* Profile Image */}
        <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
          <img
            src={sheki}
            alt="Shekinah"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-sm font-semibold text-center font-nunito text-indigo-300 tracking-widest uppercase">
          Frontend Developer
        </h1>

        <h1 className="text-4xl font-extrabold text-center font-nunito pt-4 leading-snug">
          Hello <span className="inline-block animate-wave">👋</span>,<br />
          I'm <span className="text-indigo-400">Shekinah</span>
        </h1>

        <p className="font-nunito px-4 text-center text-gray-200 text-lg leading-relaxed mt-4">
          I build smooth, modern and visually engaging interfaces using React.
        </p>

        {/* Resume Button */}
        <div className="flex justify-center mt-8 font-nunito">
          <a
            href={resumeUrl}
            download="resume.pdf"
            className="transition hover:scale-105 bg-yellow-400 text-black text-lg font-bold px-6 py-3 rounded-xl shadow-xl flex items-center"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </div>

      {/* Additional Section */}
      <div className="relative z-10 text-center mt-20 md:mt-24 px-4">
        <p className="text-gray-300 text-2xl md:text-3xl font-mono font-bold leading-relaxed">
          Are you
          <span className="bg-green-400 text-black rounded-full px-3 py-1 inline-block mx-2">
            curious
          </span>
          to learn more
          <span className="bg-indigo-400 text-black rounded-full px-3 py-1 inline-block mx-2">
            about me
          </span>
          and what I can
          <span className="bg-yellow-400 text-black rounded-full px-3 py-1 inline-block mx-2">
            offer
          </span>
          ?
        </p>

        <div className="flex flex-col items-center justify-center mt-12">
          <FaArrowDown className="text-indigo-300 text-6xl animate-bounce mb-6" />
          <Link to="/about">
            <button className="transition hover:scale-105 bg-indigo-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-xl font-nunito">
              Learn More About Me
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;

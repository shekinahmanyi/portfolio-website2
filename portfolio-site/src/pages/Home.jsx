import React, { useEffect, useMemo, useState } from "react";
import sheki from "../images/sheki.jpg";
import { FaDownload } from "react-icons/fa";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Home() {
  const resumeUrl =
    "https://drive.google.com/file/d/1t717AtUmI47ErnCDuFB6aW5KAfj_lJmy/view?usp=sharing";
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", 
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 8,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 250,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 20,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 5, max: 10 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-gray-800">
      {/* Particle Effect */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0"
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 rounded-lg max-w-md w-full sm:w-auto p-8 shadow-lg text-white">
        <div className="w-48 h-48 mx-auto mb-4 transform hover:scale-105 transition duration-300">
          <img
            src={sheki}
            alt="Shekinah"
            className="rounded-full object-cover w-full h-full shadow-md"
          />
        </div>
        {/* Title */}
        <h1 className="text-sm font-semibold text-center font-nunito text-indigo-400 tracking-wider">
          FRONTEND DEVELOPER
        </h1>
        <h1 className="text-3xl font-extrabold text-center font-nunito pt-4 leading-tight">
          Hello <span className="hand-wave inline-block animate-wave">👋</span>
          ,<br /> I'm <span className="text-indigo-500">Shekinah</span>!
        </h1>
        <p className="font-nunito p-4 text-center text-gray-300 text-lg">
          Passionate Frontend Developer crafting dynamic, engaging experiences with React.
        </p>
        <div className="flex justify-center mt-6 font-nunito space-x-4">
          <a
            href={resumeUrl}
            download="resume.pdf"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-600 text-white text-lg font-medium px-5 py-3 rounded-md flex items-center shadow-lg"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

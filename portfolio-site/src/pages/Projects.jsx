import React from "react";
import mental from "../images/mental.png";
import meal from "../images/meal.png";
import grateful from "../images/grateful.png";
import github from "../images/github.png";
import rest from "../images/rest.jpg";
import bus from "../images/bus.jpg";
import ecommerce from "../images/ecommerce.png";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto font-nunito">
        <h1 className="text-3xl text-green-400 text-center font-bold mt-28">
          Completed Projects
        </h1>
        <p className="text-white text-center mt-2 p-2">
          Since embarking on my programming journey
          <br /> in 2021, I have been passionately working on a wide range of
          projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 mx-4 mb-12 justify-center">
          {/* Project Template */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card transition transform ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white p-6 rounded-lg flex flex-col max-w-md mx-4 shadow-lg "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-extrabold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-bold">Technology Used:</span>
                <div className="flex space-x-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </p>
              <div className="flex justify-between mt-auto">
                <a
                  href={project.liveDemo}
                  className="flex items-center text-blue-500 font-medium hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                <a
                  href={project.repository}
                  className="flex items-center text-blue-500 font-medium hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> Repository
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <a
            href="https://github.com/shekinahmanyi?tab=repositories"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="transition transform ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-yellow-400 text-black text-lg font-bold px-4 py-2 rounded-md flex items-center mt-4">
              Check More Projects <FaArrowRight className="ml-1" />
            </button>
          </a>
        </div>
        
        <p className="text-center text-white font-mono text-xl">
          Do you want to{" "}
          <span className="bg-green-400 text-black rounded-full px-3 py-1 inline-block font-bold">
            hire
          </span>{" "}
          me now?
        </p>
        <div className="items-center justify-center text-center mt-4">
        <Link to="/contact">
            <button className="transition transform hover:scale-105 bg-indigo-600 text-white text-lg font-bold px-4 py-2 rounded-md shadow-2xl font-nunito">
              Hire me🤲
            </button>
          </Link>
        </div>
    
      </div>
    </div>
  );
}

// Project Data
const projects = [
  {
    title: "MentalLink",
    image: mental,
    technologies: ["React", "Tailwind", "Node", "Mongo"],
    liveDemo: "https://mental-link.vercel.app/",
    repository: "https://github.com/shekinahmanyi/mental_link_project",
  },
  {
    title: "Sneakers",
    image: ecommerce,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://e-commerce-product-sigma.vercel.app/",
    repository: "https://github.com/shekinahmanyi/e-commerce-product",
  },
  {
    title: "Grateful Me",
    image: grateful,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://gratefulme.vercel.app/",
    repository: "https://github.com/shekinahmanyi/gratefulme",
  },
  {
    title: "Meal Mart",
    image: meal,
    technologies: ["React", "Tailwind"],
    liveDemo: "https://meal-mart.vercel.app/",
    repository: "https://github.com/shekinahmanyi/Meal_Mart",
  },
  {
    title: "GithubFinder",
    image: github,
    technologies: ["React", "Daisy UI", "Github API", "Tailwind"],
    liveDemo: "https://github-finder-nine-phi.vercel.app/",
    repository: "https://github.com/shekinahmanyi/github-finder-project",
  },
  {
    title: "Bus Pass Management System",
    image: bus,
    technologies: ["PHP", "jQuery", "MySQL", "CSS"],
    liveDemo: "https://github.com/shekinahmanyi/bus-pass-management-system",
    repository: "https://github.com/shekinahmanyi/bus-pass-management-system",
  },
  {
    title: "Backend REST API",
    image: rest,
    technologies: ["React", "Node", "Express", "Mongo"],
    liveDemo: "https://github.com/shekinahmanyi/backend_rest_api",
    repository: "https://github.com/shekinahmanyi/backend_rest_api",
  },
];

export default Projects;

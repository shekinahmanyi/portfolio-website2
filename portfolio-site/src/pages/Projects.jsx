import React from "react";
import mental from "../images/mental.png";
import meal from "../images/meal.png";
import feedback from "../images/feedback.png";
import github from "../images/github.png";
import rest from "../images/rest.jpg";
import bus from "../images/bus.jpg";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto font-nunito">
        <h1 className="text-3xl text-blue-400 text-center font-bold mt-28">
          Completed Projects
        </h1>
        <p className="text-white text-center mt-2 p-2">
          Since embarking on my programming journey
          <br /> in 2021, I have been passionately working on a wide range of
          projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16 mt-12 mx-4 mb-12 justify-center">
          {/* Project 1 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white p-6 rounded-lg flex flex-col max-w-md mx-4 md:ml-24 md:mr-2">
            <img
              src={mental}
              alt="Project 1"
              className="w-full h-52 object-cover mb-8"
            />
            <h2 className="text-lg font-bold mb-2">MentalLink</h2>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Technology Used:</span>
              <ul className="list-disc pl-4">
                <li>React</li>
                <li>Tailwind</li>
                <li>Node</li>
                <li>MongODB</li>
              </ul>
            </p>
            <div className="flex justify-between">
              <a
                href="https://mental-link.vercel.app/"
                className="text-blue-500 font-medium"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/shekinahmanyi/mental_link_project"
                className="text-blue-500 font-medium"
              >
                Repository
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white p-6 rounded-lg flex flex-col max-w-md mx-4 md:ml-2 md:mr-4">
            <img
              src={meal}
              alt="Project 2"
              className="w-full h-56 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Meal Mart</h2>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Technology Used:</span>
              <ul className="list-disc pl-4">
                <li>React</li>
                <li>Tailwind</li>
              </ul>
            </p>
            <div className="flex justify-between">
              <a
                href="https://ephemeral-axolotl-c0e595.netlify.app/"
                className="text-blue-500 font-medium"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/shekinahmanyi/Meal_Mart"
                className="text-blue-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white p-6 rounded-lg flex flex-col max-w-md mx-4 md:ml-24 md:mr-2">
            <img
              src={feedback}
              alt="Project 3"
              className="w-full h-56 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">FeedBack App</h2>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Technology Used:</span>
              <ul className="list-disc pl-4">
                <li>React</li>
                <li>CSS</li>
                <li>JSON</li>
              </ul>
            </p>
            <div className="flex justify-between">
              <a
                href="https://app.netlify.com/sites/profound-longma-56ffba/overview"
                className="text-blue-500 font-medium"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/shekinahmanyi/react-project-feedback-app"
                className="text-blue-500 font-medium"
              >
                Repository
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white p-6 rounded-lg flex flex-col max-w-md mx-4 md:ml-2 md:mr-4">
            <img
              src={github}
              alt="Project 4"
              className="w-full h-56 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">GithubFinder</h2>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Technology Used:</span>
              <ul className="list-disc pl-4">
                <li>React</li>
                <li>Daisy UI</li>
                <li>Github API</li>
                <li>Tailwind</li>
              </ul>
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/shekinahmanyi/github-finder-project"
                className="text-blue-500 font-medium"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/shekinahmanyi/github-finder-project"
                className="text-blue-500 font-medium"
              >
                Repository
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white p-6 rounded-lg flex flex-col max-w-md mx-4 md:ml-24 md:mr-2">
            <img
              src={rest}
              alt="Project 5"
              className="w-full h-56 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Backend REST API</h2>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Technology Used:</span>
              <ul className="list-disc pl-4">
                <li>React</li>
                <li>Node</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
              </ul>
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/shekinahmanyi/backend_rest_api"
                className="text-blue-500 font-medium"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/shekinahmanyi/backend_rest_api"
                className="text-blue-500 font-medium"
              >
                Repository
              </a>
            </div>
          </div>

          {/* Project 6 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white p-6 rounded-lg flex flex-col max-w-md mx-4 md:ml-2 md:mr-4">
            <img
              src={bus}
              alt="Project 6"
              className="w-full h-56 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">
              Bus Pass Management System
            </h2>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Technology Used:</span>
              <ul className="list-disc pl-4">
                <li>PHP</li>
                <li>PHP my Admin</li>
                <li>Jquery</li>
                <li>My SQL</li>
                <li>CSS</li>
                <li>Bootsrap</li>
              </ul>
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/shekinahmanyi/bus-pass-management-system"
                className="text-blue-500 font-medium"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/shekinahmanyi/bus-pass-management-system"
                className="text-blue-500 font-medium"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <a
            href="https://github.com/shekinahmanyi?tab=repositories"
            className="text-white font-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white text-blue-700 px-4 py-2 rounded-md flex items-center mt-4">
              Check More Projects <FaArrowRight className="ml-1" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from 'react';
import reactimage from '../images/reactimage.png';
import node from '../images/node.png';
import bootsrapimage from '../images/bootsrapimage.png';
import php from '../images/php.png';
import git from '../images/git.png';
import mongodb from '../images/mongodb.png';
import firebase from '../images/firebase.png';
import flutter from '../images/flutter.png'

function Skills() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-blue-400 text-center text-3xl p-8 font-nunito mb-4 font-bold mt-24">Tools / Technologies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-nunito mb-8 font-bold">
        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={reactimage} alt="React" className="w-56 h-56 object-contain p-8" />
          <p className="text-white mt-2">React</p>
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={node} alt="Node.js" className="w-56 h-56 object-contain" />
          <p className="text-white mt-2">Node.js</p>
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={bootsrapimage} alt="Bootstrap" className="w-56 h-56 object-contain" />
          <p className="text-white mt-2">Bootstrap</p>
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={php} alt="PHP" className="w-56 h-56 object-contain p-4" />
          <p className="text-white mt-2">PHP</p>
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={git} alt="Git" className="w-56 h-56 object-contain p-4" />
          <p className="text-white mt-2">Git</p>
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={mongodb} alt="MongoDB" className="w-56 h-56 object-contain" />
          <p className="text-white mt-2">MongoDB</p>
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={firebase} alt="Firebase" className="w-56 h-56 object-contain" />
          <p className="text-white mt-2">Firebase</p>
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={flutter} alt="Flutter" className="w-56 h-56 object-contain p-4" />
          <p className="text-white mt-2">Flutter</p>
        </div>
       
      </div>
    </div>
  );
}

export default Skills;

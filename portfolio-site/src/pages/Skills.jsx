import React from 'react';
import reactimage from '../images/reactimage.png';

function Skills() {
  return (
    <div className="bg-blue-950 min-h-screen flex items-center justify-center">
      <h1 className="text-white text-center p-8 font-nunito mb-72">Tools / Technologies</h1>

      <div className="grid grid-cols-3 gap-8 font-nunito mr-40">
        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={reactimage} alt="React" className="w-32 h-32 object-contain" />
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={reactimage} alt="React" className="w-32 h-32 object-contain" />
        </div>

        <div className="bg-black bg-opacity-20 p-2 rounded-lg flex flex-col items-center">
          <img src={reactimage} alt="React" className="w-32 h-32 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Skills;

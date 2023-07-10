import React from 'react'
import { FaLink} from "react-icons/fa";

function Navbar() {
  return (
    <nav className='navbar bg-white text-neutral-content fixed top-0 inset-x-0 z-50 shadow-lg'>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="px-5 text-2xl mb-6 mt-6">
          <span className="text-blue-500 tracking-tight">
            Sheki<span className="text-gray-800 font-mono">Dev</span>
            <FaLink className="inline pr-2 md:inline-block text-3xl" />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

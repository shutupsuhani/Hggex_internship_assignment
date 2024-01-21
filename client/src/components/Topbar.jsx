import { useState } from 'react';
import {Link} from 'react-router-dom'

const Topbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="TopBar h-20 w-full backdrop-blur-sm bg-white/30">

      <div className="TopbarElements flex justify-between items-center mx-4">

        <div className="flex items-center">
          <img src="./public/Logo.png" className="mt-6 h-15 w-32" alt="Logo" />
        </div>

        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4 font-medium mt-6 text-blue-900 text-xl">
            <li className=' hover:text-blue-400'>Home</li>
            <li className=' hover:text-blue-400'>FlashCard</li>
            <li className=' hover:text-blue-400'>Contact</li>
            <li className=' hover:text-blue-400'>FAQ</li>
          </ul>

          <Link to="/login"><button className="py-2 px-4 shadow-md no-underline rounded-full mt-6 bg-blue-800 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-blue-900 hover:bg-white focus:outline-none active:shadow-none">Login</button></Link>
        </div>

        {/* Sidebar toggle button for small screens */}
        <button
          className="md:hidden py-2 px-4 shadow-md no-underline rounded-full bg-blue-800 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-blue-900 hover:bg-white focus:outline-none active:shadow-none ml-2"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      {/* Sidebar content for small screens */}
      {isSidebarOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <ul className="flex flex-col space-y-2 font-medium text-blue-900 text-xl">
            <li>Home</li>
            <li>FlashCard</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>

          <button className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-800 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-blue-900 hover:bg-white focus:outline-none active:shadow-none">Login</button>
        </div>
      )}
    </div>
  );
};

export default Topbar;

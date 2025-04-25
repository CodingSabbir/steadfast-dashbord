

'use client';
import { FaBars, FaSearch, FaBell, FaGlobe, FaReceipt, FaTimes } from 'react-icons/fa';


const Topbar = ({ toggleSidebar, toggleMobileSearch, showMobileSearch }) => {
  return (
    <header className="flex justify-between items-center bg-white p-5 shadow sticky top-0 z-10">

      <FaBars 
        onClick={toggleSidebar} 
        className="text-xl cursor-pointer md:mr-4" 
      />

  
      <div className="flex-1 flex justify-center md:justify-start">
        {showMobileSearch ? (
          <div className="relative w-full max-w-md md:hidden">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-4 py-2 border rounded-full focus:outline-none"
              autoFocus
            />
            <FaTimes 
              onClick={toggleMobileSearch}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
            />
          </div>
        ) : (
          <img 
            src="/img/logo.png" 
            alt="logo" 
            className="h-8 mx-auto md:mx-0 md:ml-4" 
          />
        )}
      </div>

     
      <div className="flex items-center gap-4">
  
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search Consignment" 
            className="px-4 py-2 border rounded-full w-48 lg:w-60 focus:outline-none" 
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>

    
        <FaSearch 
          onClick={toggleMobileSearch}
          className="text-lg text-gray-600 cursor-pointer md:hidden" 
        />

     
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-green-500 text-green-600 px-4 py-1 rounded-full hover:bg-green-100 text-sm">
            Check Balance
          </button>
          <FaGlobe className="text-lg text-gray-600" />
          <FaReceipt className="text-lg text-gray-600" />
          <div className="relative">
            <FaBell className="text-lg text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
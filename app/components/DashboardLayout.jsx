
'use client';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileSearch = () => setShowMobileSearch(!showMobileSearch);

  return (
    <div className="flex">
      <Sidebar  isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0 md:ml-16'}`}>
        <Topbar 
          toggleSidebar={toggleSidebar} 
          toggleMobileSearch={toggleMobileSearch}
          showMobileSearch={showMobileSearch}
        />
        <main className="p-4 bg-gray-50 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
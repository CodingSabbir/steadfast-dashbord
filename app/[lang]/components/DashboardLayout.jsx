"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileSearch = () => setShowMobileSearch(!showMobileSearch);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0 md:ml-16"
        }`}
      >
        <Topbar
          toggleSidebar={toggleSidebar}
          toggleMobileSearch={toggleMobileSearch}
          showMobileSearch={showMobileSearch}
        />
        <div className="p-5 bg-gray-100">
        <main className=" min-h-screen ">{children}</main>
        <p className="text-center text-[#a3a3a3] text-[14px] border-t pt-4 mx-5 font-normal">© 2025 SteadFast. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

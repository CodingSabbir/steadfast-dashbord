"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const FraudCheck = () => {
  const [activeTab, setActiveTab] = useState("Check");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 1, name: "Check" },
    { id: 2, name: "Recent activity" },
    { id: 3, name: "Add new" },
    { id: 4, name: "My Entries" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Check":
        return (
          <div className="bg-primary p-6 rounded  h-screen">
            <div className="flex max-w-xl mx-auto ">
              <input
                type="text"
                placeholder="Search by phone number"
                className="flex-grow px-4 py-3 border border-gray rounded-l-md text-secondary focus:outline-none "
              />
              <button className="button-primary bg-primary px-6 py-2 rounded-r-md cursor-pointer ">
                Search
              </button>
            </div>
            <div className="flex justify-center pt-10">
              <Image
                className=" w-56 md:w-72"
                src="/img/hacker.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <p className="text-secondary font-medium text-md text-center pt-4">
              Check fraud search by phone number
            </p>
          </div>
        );
      case "Recent activity":
        return (
          <div className="bg-primary p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              <div className="p-3 border-b border-gray-200">
                <p className="font-medium">Phone: +1234567890</p>
                <p className="text-sm text-gray-500">Checked 2 hours ago</p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <p className="font-medium">Phone: +9876543210</p>
                <p className="text-sm text-gray-500">Checked 1 day ago</p>
              </div>
            </div>
          </div>
        );
      case "Add new":
        return (
          <div className="bg-primary p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Add New Entry
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  "
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Details</label>
                <textarea
                  placeholder="Enter details"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  "
                  rows="3"
                ></textarea>
              </div>
              <button className="button-primary text-white px-6 py-2 rounded-md ">
                Submit
              </button>
            </div>
          </div>
        );
      case "My Entries":
        return (
          <div className="bg-primary p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              My Entries
            </h2>
            <div className="space-y-4">
              <div className="p-3 border-b border-gray-200">
                <p className="font-medium">Phone: +1122334455</p>
                <p className="text-sm text-gray-500">Added 3 days ago</p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <p className="font-medium">Phone: +5566778899</p>
                <p className="text-sm text-gray-500">Added 1 week ago</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto  md:pb-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary  md:hidden">
            Fraud Check
          </h1>

          {/* Mobile dropdown button (hidden on desktop) */}
          <div className="md:hidden relative">
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="button-primary text-white px-4 py-2 rounded-md flex items-center"
            >
              {activeTab}
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              ref={menuRef}
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute right-0 mt-2 w-48 bg-primary rounded-md shadow-lg z-10`}
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.name)}
                  className={`w-full text-left px-4 py-2 ${
                    activeTab === item.name
                      ? "button-primary text-white"
                      : "text-primary hover:button-primary hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop buttons (hidden on mobile) */}
        <div className="hidden md:flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">
            {activeTab === "Check" ? "Fraud Check" : activeTab}
          </h1>
          <div className="flex space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.name)}
                className={`${
                  activeTab === item.name
                    ? "button-primary text-white font-semibold"
                    : "bg-primary text-primary font-semibold"
                } px-4 py-2 rounded-sm cursor-pointer`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default FraudCheck;

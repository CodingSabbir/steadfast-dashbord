

"use client";

import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLang = params.lang; 

  useEffect(() => {
    if (currentLang === "bn" || currentLang === "en") {
      setLanguage(currentLang);
    } else {
      setLanguage("en");
    }
  }, [currentLang]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "bn" : "en";
    const segments = pathname.split("/");
    segments[1] = newLang; 
    setLanguage(newLang);
    router.push(segments.join("/"));
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-primary shadow-sm z-50 p-3">
        <div className="flex items-center justify-between container mx-auto">
          {/* Left - Logo and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <CiMenuFries
              className="text-[25px] text-black cursor-pointer md:hidden"
              onClick={() => setMobileSidebarOpen(true)}
            />
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  className="cursor-pointer w-28 md:w-52"
                  src="/img/logo.png"
                  width={200}
                  height={100}
                  alt="navimage"
                  
                />
              </Link>
            </div>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-6 text-lg text-secondary">
              <li className="cursor-pointer font-medium text-primary bg-success text-[16px] text-primary-hover transition-all">
                <Link href="/"> Home</Link> 
              </li>
              <li className="cursor-pointer font-medium text-primary text-[16px] text-primary-hover transition-all">
                <Link href="/#about"> About</Link>
              </li>
              <li className="cursor-pointer font-medium text-primary text-[16px] text-primary-hover transition-all">
                Services
              </li>
              <li className="cursor-pointer font-medium text-primary text-[16px] text-primary-hover transition-all">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Right - Auth Buttons + Language Toggle */}
          <div className="flex items-center gap-4">
            <div className="md:flex gap-2 items-center hidden md:block">
              <Image
                className="cursor-pointer w-4 h-4"
                src="/img/parcel_tarck_icon.png"
                width={500}
                height={500}
                alt="navimage"
              />
              <li className="cursor-pointer list-none font-semibold text-primary-active text-[16px] text-primary-hover transition-all">
                <Link href="/#track_parcel">Track Parcel</Link>
              </li>
            </div>
            <Link href={`/${language}/landing/login`}>
              <button className="cursor-pointer px-4 py-2 font-bold tracking-wider text-primary text-[16px] text-primary-hover transition-all hidden md:block">
                Login
              </button>
            </Link>
            <Link href={`/${language}/landing/sign-up`}>
              <button className="cursor-pointer px-4 py-2 font-bold tracking-wider button-primary  rounded hover:button-primary transition-all hidden md:block">
                Sign Up
              </button>
            </Link>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="cursor-pointer px-4 py-2 font-bold tracking-wider border border-[#00b795] bg-[#E5F7F4] text-primary-active rounded transition-all hidden md:block"
            >
              {language.toUpperCase()}
            </button>

            {/* Mobile Auth Buttons */}
            <Link href={`/${language}/landing/login`}>
              <button className="cursor-pointer px-3 py-1 font-semibold text-primary text-[18px] text-primary-hover transition-all md:hidden">
                Login
              </button>
            </Link>
            <Link href={`/${language}/landing/sign-up`}>
              <button className="cursor-pointer px-3 py-1 button-primary font-semibold  text-[18px] rounded  transition-all md:hidden">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 z-50 h-full w-[100%] bg-white p-5 transition-transform duration-300 ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-4 border-b pb-3 border-gray-300">
            <div>
              <Link href="/">
                <Image
                  onClick={() => setMobileSidebarOpen(false)}
                  className="cursor-pointer"
                  src="/img/logo.png"
                  width={150}
                  height={70}
                  alt="navimage"
                />
              </Link>
            </div>
            <MdClose
              className="text-2xl cursor-pointer"
              onClick={() => setMobileSidebarOpen(false)}
            />
          </div>

          {/* Sidebar Menu Items */}
          <ul className="flex flex-col gap-7 text-gray-700 mb-6">
            <div className="flex gap-2 items-center ">
              <Image
                className="cursor-pointer w-4 h-4"
                src="/img/parcel_tarck_icon.png"
                width={500}
                height={500}
                alt="navimage"
              />
              <li
                onClick={() => setMobileSidebarOpen(false)}
                className="cursor-pointer block md:hidden font-medium text-primary-active text-[16px] text-primary-hover transition-all"
              >
                <Link href="/#track_parcel"> Track Parcel </Link>
              </li>
            </div>
            <li
              onClick={() => setMobileSidebarOpen(false)}
              className="cursor-pointer font-medium tracking-wider text-primary text-[16px] text-primary-hover transition-all"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setMobileSidebarOpen(false)}
              className="cursor-pointer font-medium tracking-wider text-primary text-[16px] text-primary-hover transition-all"
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              onClick={() => setMobileSidebarOpen(false)}
              className="cursor-pointer font-medium tracking-wider text-primary text-[16px] text-primary-hover transition-all"
            >
              Services
            </li>
            <li
              onClick={() => setMobileSidebarOpen(false)}
              className="cursor-pointer font-medium tracking-wider text-primary text-[16px] text-primary-hover transition-all"
            >
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </aside>

        {/* Overlay */}
        {mobileSidebarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;

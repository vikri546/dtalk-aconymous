"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoLight from "../images/dtalk-light-theme-logo-retina.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import { FiSearch, FiMoon, FiSun, FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="w-full border-b border-black-200 dark:border-black-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-between h-16 items-center">
          <div className="hidden sm:flex space-x-2 pt-6">
            <Link
              href="https://facebook.com"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300 p-2 border rounded-full flex items-center justify-center"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300 p-2 border rounded-full flex items-center justify-center"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300 p-2 border rounded-full flex items-center justify-center"
            >
              <IoLogoInstagram size={20} />
            </Link>
          </div>

          <div className="flex-shrink-0 pt-8">
            <Link href="/" className="flex items-center justify-center">
              <Image src={LogoLight} alt="Logo" className="h-16 w-auto lg:h-24" />
            </Link>
          </div>

          <div className="flex items-center">
            <div className="flex space-x-4 sm:hidden pt-6">
              <button 
                onClick={toggleSearch}
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
              >
                <FiSearch size={20} />
              </button>
              <button 
                onClick={toggleDarkMode}
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
              >
                {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <button 
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
              >
                <FiMenu size={20} />
              </button>
            </div>
            
            <div className="hidden sm:block">
              <Link
                href="/login"
                className="inline-flex items-center pt-8 py-2 border border-transparent text-Aco font-medium rounded-md text-black-600 hover:text-yellow-200 transition-colors duration-300"
              >
                <PiUserCircleFill className="mr-2 size-5" />
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
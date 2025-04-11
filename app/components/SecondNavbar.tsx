"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiMoon, FiSun, FiMenu } from "react-icons/fi";

export default function SecondNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="absolute w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Date */}
          <div className="text-sm text-black-600 dark:text-black-400">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          {/* Categories */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/kategori1"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
            >
              DIGITAL
            </Link>
            <Link
              href="/kategori2"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
            >
              EKBIS
            </Link>
            <Link
              href="/kategori3"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
            >
              HUKUM
            </Link>
            <Link
              href="/kategori4"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
            >
              POLITIK
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300">
              <FiSearch size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300">
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

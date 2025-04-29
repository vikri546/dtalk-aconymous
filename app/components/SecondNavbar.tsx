"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiMoon, FiSun, FiMenu } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import LogoDark from "../images/dtalk-dark-theme-logo-retina.png";
import Hot1 from "../images/subscribes/picks1.png";
import Hot2 from "../images/subscribes/picks2.png";
import Hot3 from "../images/subscribes/picks3.png";

export default function SecondNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const hotArticles = [
    {
      id: 1,
      image: Hot1,
      title: 'Here\'s What Apple Really Means When It Says "Shot On iPhone"',
      date: "November 19, 2022",
      link: "#",
    },
    {
      id: 2,
      image: Hot2,
      title:
        "HTC Launches a Vive VR Headset Into Space for Astronaut Mental Health",
      date: "March 10, 2022",
      link: "#",
    },
    {
      id: 3,
      image: Hot3,
      title:
        "Samsung is Developing Bright MicroLED on Displays for AR Headsets",
      date: "March 10, 2022",
      link: "#",
    },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const scrollThreshold = 10;
      
      if (currentScrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      
      if (currentScrollY > lastScrollY + scrollThreshold && isSticky) {
        // Scrolling down
        setVisible(false);
      } else if (currentScrollY < lastScrollY - scrollThreshold || currentScrollY <= 0) {
        // Scrolling up or at the top
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isSticky]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    // Prevent scrolling when search is open
    if (!isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed w-full z-40 hidden md:block transition-all duration-300 ${
          isSticky 
            ? `fixed ${visible ? 'translate-y-0' : '-translate-y-full'} bg-white dark:bg-zinc-900 top-0 shadow-md`
            : 'absolute bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-sm text-black-600 dark:text-black-400">
              {new Date().toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <div className="flex space-x-10">
              <Link
                href="/"
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
              >
                DIGITAL
              </Link>
              <Link
                href="/"
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
              >
                EKBIS
              </Link>
              <Link
                href="/"
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
              >
                HUKUM
              </Link>
              <Link
                href="/"
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
              >
                POLITIK
              </Link>
            </div>

            <div className="flex items-center space-x-4">
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
                onClick={toggleMenu}
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
              >
                <FiMenu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={toggleSearch}
            className="absolute top-4 right-4 text-white focus:outline-none"
            aria-label="Close Search"
          >
            <IoClose size={24} />
          </button>

          <div className="w-full max-w-xl px-4">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-600 text-white text-2xl font-semibold py-2 focus:outline-none text-left placeholder-white"
                placeholder="Search..."
                autoFocus
              />
            </div>
            <p className="text-gray-400 text-xs mt-2 text-left">
              Type above and press Enter to search. Press Esc to cancel
            </p>
          </div>
        </div>
      )}

      {/* Overlay for sidebar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-full md:w-1/3 h-full bg-black z-50 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        {/* Sticky Logo in Sidebar */}
        <div className="sticky top-0 bg-black z-10">
          <div className="relative p-4">
            {/* Close button positioned at top right */}
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-white focus:outline-none"
              aria-label="Close Menu"
            >
              <IoClose size={24} />
            </button>

            {/* Centered logo */}
            <div className="flex justify-center items-center">
              <Link href="/" className="text-white text-3xl font-bold">
                <div className="relative">
                  <Image
                    src={LogoDark}
                    alt="dtalk logo"
                    className="h-16 w-auto lg:h-24"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Categories */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <ul className="divide-y divide-gray-800">
            <li className="py-4 px-6">
              <Link
                href="/digital"
                className="text-white text-lg hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                Digital
              </Link>
            </li>
            <li className="py-4 px-6">
              <Link
                href="/ekbis"
                className="text-white text-lg hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                Ekbis
              </Link>
            </li>
            <li className="py-4 px-6">
              <Link
                href="/hukum"
                className="text-white text-lg hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                Hukum
              </Link>
            </li>
            <li className="py-4 px-6 border-b divide-gray-800">
              <Link
                href="/politik"
                className="text-white text-lg hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                Politik
              </Link>
            </li>
          </ul>
        </nav>

        {/* Subscription */}
        <div className="mt-10 px-8 py-8 bg-black border-8 border-zinc-800 mx-10 rounded-sm shadow-md">
          <h3 className="text-white text-3xl font-bold mb-4 text-center">
            Subscribe to Updates
          </h3>
          <p className="text-gray-400 text-center text-sm mb-8">
            Get the latest creative news from FooBar about art, design and
            business.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email address..."
              className="w-full p-3 mb-4 bg-zinc-900 border border-zinc-800 text-white text-sm text-center"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-yellow-500 hover:bg-zinc-800 text-white transition duration-300 font-bold text-sm uppercase"
            >
              SUBSCRIBE
            </button>
            <div className="mt-6 flex items-start">
              <input
                type="checkbox"
                id="sidebarTerms"
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="sidebarTerms" className="text-xs text-gray-400">
                By signing up, you agree to the our terms and our Privacy Policy
                agreement.
              </label>
            </div>
          </form>
        </div>

        {/* What's Hot Section */}
        <div className="mt-10 px-6">
          <h3 className="text-white text-xl font-bold mb-6">WHAT&apos;S HOT</h3>
          <div className="space-y-6">
            {hotArticles.map((article) => (
              <Link href={article.link} key={article.id} className="flex gap-4">
                <div className="w-28 h-20 bg-gray-800 flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-md hover:opacity-80 transition-opacity ease-in-out duration-300"
                    width={112} // w-28 = 7rem = 112px
                    height={80} // h-20 = 5rem = 80px
                  />
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">
                    {article.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-16 mb-8 flex justify-center space-x-4">
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow hover:bg-gray-700 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow hover:bg-gray-700 transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow hover:bg-gray-700 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoLight from "../images/dtalk-light-theme-logo-retina.png";
import LogoDark from "../images/dtalk-dark-theme-logo-retina.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoClose } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import { FiSearch, FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoginModalClosing, setIsLoginModalClosing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 640) {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY || currentScrollY <= 0) {
          setNavVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setNavVisible(false);
          if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = "auto";
          }
        }

        setLastScrollY(currentScrollY);
      } else {
        setNavVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check screen size on resize
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setNavVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY, isMenuOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    // Prevent scrolling when search is open
    if (!showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setIsLoginModalClosing(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalClosing(true);
    // Wait for animation to complete before hiding the modal
    setTimeout(() => {
      setShowLoginModal(false);
      setIsLoginModalClosing(false);
    }, 300); // Match this with animation duration
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

  return (
    <>
      <nav
        ref={navbarRef}
        className={`w-full border-b border-black-200 dark:border-black-800 dark:bg-black sm:relative fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full sm:translate-y-0"
        } bg-white dark:bg-black`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex justify-between h-16 items-center">
            <div className="hidden sm:flex space-x-2 pt-6">
              <Link
                href="#"
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300 p-2 border rounded-full flex items-center justify-center"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="#"
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300 p-2 border rounded-full flex items-center justify-center"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300 p-2 border rounded-full flex items-center justify-center"
              >
                <IoLogoInstagram size={20} />
              </Link>
            </div>

            <div className="flex-shrink-0 pt-8">
              <Link
                href="https://dtalk-aconymous.vercel.app/"
                className="flex items-center justify-center"
              >
                <Image
                  src={LogoLight}
                  alt="Logo"
                  className="block dark:hidden h-16 w-auto lg:h-24"
                />
                <Image
                  src={LogoDark}
                  alt="Logo"
                  className="hidden dark:block h-16 w-auto lg:h-24"
                />
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
                  onClick={toggleMenu}
                  className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
                >
                  <FiMenu size={20} />
                </button>
              </div>

              <div className="hidden sm:block">
                <button
                  onClick={openLoginModal}
                  className="inline-flex items-center pt-8 py-2 border border-transparent text-Aco font-medium rounded-md text-black-600 hover:text-yellow-200 transition-colors duration-300"
                >
                  <PiUserCircleFill className="mr-2 size-5" />
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay - Mobile */}
      {showSearch && (
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

      {/* Empty space to push content below fixed navbar - mobile only */}
      <div className="h-32 sm:h-0"></div>

      {/* Overlay for sidebar - mobile only */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-black z-50 transition-transform duration-300 transform sm:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        {/* Sticky Logo */}
        <div className="sticky top-0 bg-black z-10">
          <div className="flex justify-center items-center p-4">
            <Link href="/" className="text-white text-3xl font-bold">
              <div className="relative">
                <Image
                  src={LogoDark}
                  alt="dtalk logo"
                  className="h-20 w-auto"
                />
              </div>
            </Link>
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
              aria-label="Close Menu"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>

        {/* Login/Register Section at Top */}
        <div className="bg-gray-900 p-4 flex justify-center">
          <button
            onClick={() => {
              toggleMenu();
              openLoginModal();
            }}
            className="bg-yellow-500 text-black py-2 px-8 font-medium rounded-sm hover:bg-yellow-400 transition-colors"
          >
            LOG IN / REGISTER
          </button>
        </div>

        {/* Navigation Categories */}
        <nav className="max-w-6xl mx-auto px-8 mt-2">
          <ul className="divide-y divide-gray-800">
            <li className="py-4 px-6">
              <Link
                href="/"
                className="text-white text-xl hover:text-gray-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Digital
              </Link>
            </li>
            <li className="py-4 px-6">
              <Link
                href="/"
                className="text-white text-xl hover:text-gray-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Ekbis
              </Link>
            </li>
            <li className="py-4 px-6">
              <Link
                href="/"
                className="text-white text-xl hover:text-gray-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Hukum
              </Link>
            </li>
            <li className="py-4 px-6">
              <Link
                href="/"
                className="text-white text-xl hover:text-gray-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Politik
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center items-end mt-24 space-x-4">
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div
            className={`bg-white dark:bg-black rounded-sm shadow-lg max-w-sm w-full mx-4 relative 
              ${isLoginModalClosing ? "animate-slideDown" : "animate-slideUp"}`}
          >
            {/* Close button */}
            <button
              onClick={closeLoginModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>

            <div className="p-12 px-12 py-14">
              <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">
                Welcome Back!
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Login to your account below.
              </p>

              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Username or Email"
                    className="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-black text-center text-sm dark:text-black dark:fill-slate-900"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-black text-center text-sm dark:text-black"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-black dark:hover:bg-zinc-900 text-white font-bold py-2 rounded-sm transition-colors duration-300"
                >
                  LOG IN
                </button>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="mr-2 h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Remember Me
                    </label>
                  </div>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-yellow-500 hover:text-black transition-colors duration-300"
                  >
                    Lost password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

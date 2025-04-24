"use client";

import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
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
                <Image
                  src={LogoLight}
                  alt="Logo"
                  className="h-16 w-auto lg:h-24"
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
                  onClick={toggleLoginModal}
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
                  className="h-24 w-auto"
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
              toggleLoginModal();
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
                href="/digital"
                className="text-white text-xl hover:text-gray-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Digital
              </Link>
            </li>
            <li className="py-4 px-6">
              <Link
                href="/ekbis"
                className="text-white text-xl hover:text-gray-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Ekbis
              </Link>
            </li>
            <li className="py-4 px-6">
              <Link
                href="/hukum"
                className="text-white text-xl hover:text-gray-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Hukum
              </Link>
            </li>
            <li className="py-4 px-6">
              <Link
                href="/politik"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-sm shadow-lg max-w-sm w-full mx-4 relative">
            {/* Close button */}
            <button
              onClick={toggleLoginModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>

            <div className="p-12 px-12 py-14">
              <h2 className="text-3xl font-bold text-center mb-2">
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
                    className="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-black text-center text-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-black text-center text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-black text-white font-bold py-2 rounded-sm transition-colors duration-300"
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

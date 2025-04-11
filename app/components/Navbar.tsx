"use client";

import Link from "next/link";
import Image from "next/image";
import LogoLight from "../images/dtalk-light-theme-logo-retina.png";
import LogoDark from "../images/dtalk-dark-theme-logo-retina.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-black-200 dark:border-black-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-between h-16 items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 pt-6">
            <Link
              href="https://facebook.com"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-black-600 hover:text-yellow-200 dark:text-black-400 dark:hover:text-yellow transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 pt-6">
            <Link href="/" className="flex items-center">
              <Image src={LogoLight} alt="Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <Link
              href="/login"
              className="inline-flex items-center pt-8 py-2 border border-transparent text-Aco font-medium rounded-md text-black-600 hover:text-yellow-200 transition-colors duration-300"
            >
              <FiUser className="mr-2 size-5" />
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

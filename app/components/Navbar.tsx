"use client";

import Link from "next/link";
import Image from "next/image";
import LogoLight from "../images/dtalk-light-theme-logo-retina.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-black-200 dark:border-black-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-2 pt-6">
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
              <Image src={LogoLight} alt="Logo" className="h-24 w-auto" />
            </Link>
          </div>

          <div>
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
    </nav>
  );
}

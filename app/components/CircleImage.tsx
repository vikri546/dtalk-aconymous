"use client";

import Image from "next/image";
import Link from "next/link";
import Circle1 from "../images/circle/first.png";
import Circle2 from "../images/circle/second.png";
import Circle3 from "../images/circle/third.png";
import Circle4 from "../images/circle/fourth.png";
import Circle5 from "../images/circle/fifth.png";

export default function FirstSection() {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-3 ">
          <Link href="/" className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-black-200 dark:border-black-800">
            <Image src={Circle1} alt="Circle 1" fill className="object-cover bg-cover bg-center rounded transition duration-300 ease-in-out hover:opacity-75" />
          </Link>
          <Link href="/" className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-black-200 dark:border-black-800">
            <Image src={Circle2} alt="Circle 2" fill className="object-cover bg-cover bg-center rounded transition duration-300 ease-in-out hover:opacity-75" />
          </Link>
          <Link href="/" className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-black-200 dark:border-black-800">
            <Image src={Circle3} alt="Circle 3" fill className="object-cover bg-cover bg-center rounded transition duration-300 ease-in-out hover:opacity-75" />
          </Link>
          <Link href="/" className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-black-200 dark:border-black-800">
            <Image src={Circle4} alt="Circle 4" fill className="object-cover bg-cover bg-center rounded transition duration-300 ease-in-out hover:opacity-75" />
          </Link>
          <Link href="/" className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-black-200 dark:border-black-800">
            <Image src={Circle5} alt="Circle 5" fill className="object-cover bg-cover bg-center rounded transition duration-300 ease-in-out hover:opacity-75" />
          </Link>
        </div>
      </div>
    </div>
  );
}

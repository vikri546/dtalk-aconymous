"use client";

import Image from "next/image";
import Link from "next/link";
import { Anton, DM_Sans } from "next/font/google";
import Mahkamah from "../images/mahkamah.png";
import SecondImage from "../images/circle/second.png";
import SixImage from "../images/circle/six.png";
import SevenImage from "../images/circle/seven.png";
import EightImage from "../images/circle/eight.png";

// Configure the Anton font with normal style
const antonFont = Anton({
  weight: "400", // Anton typically only comes in 400 weight
  subsets: ["latin"],
  display: "swap",
});

// Configure the DM Sans font with normal style
const dmSansFont = DM_Sans({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export default function MahkamahKonstitusi() {
  const newsItems = [
    {
      category: "GADGETS",
      title:
        "Save $25 on Philips Headphone For A Great Sounding Over-Ear Headphone",
      date: "Maret 15, 2020",
      views: 4,
      image: SecondImage,
      link: "/",
    },
    {
      category: "DRONES",
      title: "Take Your Photography to The Next Level with This Drone",
      date: "Januari 13, 2020",
      views: 2,
      image: SixImage,
      link: "/",
    },
    {
      category: "GADGETS",
      title: "The 15 Best Early Black Friday Smartwatch Deals",
      date: "Januari 12, 2020",
      views: 2,
      image: SevenImage,
      link: "/",
    },
    {
      category: "JUST IN",
      title:
        "These Noise Canceling Earbuds Promise Two Full Days of Battery Life",
      date: "Januari 11, 2020",
      views: 4,
      image: EightImage,
      link: "/",
    },
  ];

  return (
    <div className="w-full py-4 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6 px-2">
            <div className="relative bottom-0 left-0 right-0">
              <Link href="#">
                <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                  <Image
                    src={Mahkamah}
                    alt="Mahkamah Konstitusi"
                    title="Apa Itu Mahkamah Konstitusi? Kenali Perannya di Negara Kita!"
                    fill
                    className="object-cover bg-cover bg-center rounded scale-200 transition duration-300 ease-in-out hover:opacity-75 shadow-xl"
                  />
                </div>
                <h1
                  className={`${antonFont.className} text-4xl sm:text-5xl lg:text-6xl font-black leading-tight max-w-full break-words mt-4 text-black dark:text-white hover:text-yellow-300 dark:hover:text-yellow-500 transition duration-300`}
                >
                  Apa Itu Mahkamah Konstitusi? Kenali Perannya di Negara Kita!
                </h1>
              </Link>
              <div className="mt-3 text-gray-700 dark:text-gray-400 text-sm">
                <Link
                  href="/author/aco"
                  className="dark:text-white hover:text-yellow-300 dark:hover:text-yellow-500 transition duration-300"
                >
                  Aco
                </Link>{" "}
                • <span>Januari 11, 2020</span>
              </div>
            </div>
          </div>

          <div className={`md:w-1/3 px-2 w-full ${dmSansFont.className}`}>
            <div className="mb-4 flex items-center w-full">
              <h2 className="text-yellow-500 text-xl font-bold mr-2">News</h2>
              <span className="text-gray-800 dark:text-white text-xl font-bold flex-grow">
                Just In
              </span>
            </div>
            <div className="w-full h-[3px] bg-gray-200 dark:bg-zinc-600 mb-8">
              <div className="w-10 h-[3px] bg-yellow-500"></div>
            </div>

            <div className="space-y-6 w-full">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border-b-[1px] border-gray-200 dark:border-zinc-700 pb-3 w-full"
                >
                  <div className="flex-grow pr-2">
                    <div className="text-yellow-500 text-xs font-bold mb-2">
                      {item.category}
                    </div>
                    <Link href={item.link}>
                      <h3 className="text-lg md:text-base text-black dark:text-white hover:text-yellow-300 dark:hover:text-yellow-500 transition-colors duration-300 ease-in-out hover:opacity-75 font-bold mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                    </Link>
                    <div className="flex items-center text-gray-500 text-xs">
                      <span className="mr-2">{item.date}</span>
                      <div className="flex items-center ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span>{item.views} Views</span>
                      </div>
                    </div>
                  </div>
                  <Link href={item.link} className="flex-shrink-0">
                    <div className="w-20 h-20 relative rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        title={item.title}
                        fill
                        className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

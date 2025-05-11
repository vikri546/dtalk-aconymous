"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Anton, DM_Sans } from 'next/font/google';
import Flower from "../images/flower.png";
import TechnologyOne from "../images/technology news/image1.png";
import TechnologyTwo from "../images/technology news/image2.png";
import TechnologyThree from "../images/technology news/image3.png";
import TechnologyFour from "../images/technology news/image4.png";
import TechnologyFive from "../images/technology news/image5.png";
import TechnologySix from "../images/technology news/image6.png";
import GamingOne from "../images/technology news/gaming news/gaming1.png";
import GamingTwo from "../images/technology news/gaming news/gaming2.png";
import GamingThree from "../images/technology news/gaming news/gaming3.png";
import GamingFour from "../images/technology news/gaming news/gaming4.png";

// Initialize the fonts
const anton = Anton({
  weight: '400', // Anton only comes in 400 weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export default function TechnologyNews() {
  const [loadedItems, setLoadedItems] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const newsFeedItems = [
    {
      category: "GAMING VR",
      title:
        "HTC Launches a Vive VR Headset Into Space for Astronaut Mental Health",
      date: "Maret 10, 2022",
      views: 2,
      image: TechnologyOne,
      imageAlt: "Four women walking",
    },
    {
      category: "PHONES",
      title:
        "Samsung is Developing Bright MicroLED on Displays for AR Headsets",
      date: "Maret 10, 2022",
      views: 1,
      image: TechnologyTwo,
      imageAlt: "Person with sunglasses",
    },
    {
      category: "GADGETS",
      title:
        "The Best Early Black Friday Deals on Gadgets, Laptops and Accessories",
      date: "Maret 10, 2022",
      views: 1,
      image: TechnologyThree,
      imageAlt: "Person holding flower",
    },
    {
      category: "HDR CAMERA",
      title:
        "Simple Tips and Tricks to Take Care of Your Expensive DSLR Camera",
      date: "Maret 12, 2021",
      views: 3,
      image: TechnologyFour,
      imageAlt: "Four women walking",
    },
    // Load More Items
    {
      category: "TECHNOLOGY",
      title: "4 Collaboration Security Mistakes Companies Are Still Making",
      date: "Maret 19, 2021",
      views: 1,
      image: TechnologyFive, // Reusing image for example
      imageAlt: "AI medical illustration",
    },
    {
      category: "PHONE ACCESSORIES",
      title:
        "The Best Wireless Earbuds for the Samsung Galaxy S25 & Other Models in 2024",
      date: "Maret 16, 2021",
      views: 1,
      image: TechnologySix, // Reusing image for example
      imageAlt: "Industrial robots",
    },
  ];

  const gamingNewsItems = [
    {
      title: "Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched",
      image: GamingOne,
      alt: "Person in corn field with VR headset",
    },
    {
      title: "Thousands Of PC Games Discounted In New Black Friday Sale",
      image: GamingTwo,
      alt: "People sitting by water",
    },
    {
      title: "A Piece of The Wrecked 1986 Challenger Space Shuttle was Found",
      image: GamingThree,
      alt: "Green sneakers",
    },
    {
      title:
        "Security Cameras Make Us Feel Safe, but Are They Worth the Invasion?",
      image: GamingFour,
      alt: "Woman with flowers",
    },
  ];

  const loadMore = () => {
    setIsLoading(true);

    setTimeout(() => {
      setLoadedItems((prev) => {
        const newValue = Math.min(prev + 2, newsFeedItems.length);

        // Hide Button if all items are loaded
        if (newValue >= newsFeedItems.length) {
          setShowButton(false);
        }

        return newValue;
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={`max-w-6xl mx-auto ${dmSans.variable}`}>
      <Head>
        <title>Tech & Gaming News</title>
        <meta name="description" content="Latest technology and gaming news" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="w-full mx-auto px-4 sm:px-6 py-4 sm:py-8 font-dm-sans">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mb-8">
          <div className="w-full lg:w-8/12">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Technology News
            </h2>
            <div className="w-full h-[3px] bg-gray-200 my-2 sm:my-3 mb-4 sm:mb-6">
              <div className="w-10 h-[3px] bg-yellow-500"></div>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="overflow-hidden">
                <Link href="#">
                  <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-sm overflow-hidden">
                    <Image
                      src={Flower}
                      alt="Flowers in vase"
                      title="Here's What Apple Really Means When It Says &ldquo;Shot On iPhone&rdquo;"
                      layout="fill"
                      objectFit="cover"
                      className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                      priority
                    />
                  </div>
                  <div className="mt-2 sm:mt-4">
                    <h1 className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-black dark:text-white hover:text-yellow-300 dark:hover:text-yellow-500 transition duration-300`}>
                      Here&apos;s What Apple Really Means When It Says
                      &ldquo;Shot On iPhone&rdquo;
                    </h1>
                  </div>
                </Link>
                <div className="flex flex-wrap items-center text-gray-600 text-sm">
                  <Link
                    href="/author/aco"
                    className="dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500 transition duration-300"
                  >
                    Aco
                  </Link>
                  <span className="mx-2">•</span>
                  <span>November 19, 2022</span>
                </div>
              </div>
            </div>

            {/* News Feed Items */}
            {newsFeedItems.slice(0, loadedItems).map((item, index) => (
              <div
                key={index}
                className={`${
                  index !== loadedItems - 1 ? "border-b border-gray-200" : ""
                } py-2 pb-2 sm:pb-4 mb-2 sm:mb-4`}
              >
                <div className="flex flex-row gap-3 sm:gap-6">
                  <div className="w-8/12">
                    <div className="uppercase text-yellow-500 font-bold text-xs sm:text-sm mb-3">
                      {item.category}
                    </div>
                    <Link
                      href="#"
                      className="text-black dark:text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight hover:text-yellow-300 dark:hover:text-yellow-500 transition duration-300 line-clamp-3 sm:line-clamp-none"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm py-3">
                      <span>{item.date}</span>
                      <span className="mx-2 sm:mx-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 sm:h-4 sm:w-4 mr-1"
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
                        {item.views} Views
                      </span>
                    </div>
                  </div>
                  <Link href="#" className="w-4/12">
                    <div className="relative h-24 xs:h-32 sm:h-40 lg:h-32 w-full rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        title={item.title}
                        fill
                        className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            {loadedItems < newsFeedItems.length && showButton && (
              <div className="text-center">
                <button
                  onClick={loadMore}
                  disabled={isLoading}
                  className={`bg-yellow-500 hover:bg-black text-white font-bold py-2 px-10 sm:px-12 md:px-20 rounded-full mt-4 transition-all duration-500 ${
                    isLoading ? "opacity-80" : ""
                  }`}
                >
                  <span className="flex items-center justify-center">
                    Load More
                    {isLoading && (
                      <svg
                        className="animate-spin ml-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Gaming News Section */}
          <div className="w-11/12 lg:w-5/12 mx-auto mt-8 lg:mt-0">
            <div className="rounded-xl sm:rounded-2xl border-2 border-yellow-500 overflow-hidden">
              <div className="p-6 gap-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  <div>Gaming News</div>
                </h2>
                <div className="w-full h-[3px] bg-gray-200 my-2 sm:my-3 mb-4 sm:mb-6">
                  <div className="w-10 h-[3px] bg-yellow-500"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {gamingNewsItems.map((item, index) => (
                    <div key={index} className="mb-4 sm:mb-6">
                      <Link
                        href="#"
                        className="block rounded overflow-hidden shadow-md mb-2 sm:mb-3"
                      >
                        <div className="relative h-56 xs:h-64 sm:h-72 md:h-64 lg:h-28 w-full rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            title={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                          />
                        </div>
                      </Link>
                      <Link href="#" className="group">
                        <h3 className="font-bold text-base sm:text-base md:text-lg leading-tight group-hover:text-yellow-500 transition-colors duration-300 line-clamp-3">
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
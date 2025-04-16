"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Flower from "../images/flower.png";
import TechnologyOne from "../images/technology news/image1.png";
import TechnologyTwo from "../images/technology news/image2.png";
import TechnologyThree from "../images/technology news/image3.png";
import TechnologyFour from "../images/technology news/image4.png";
import GamingOne from "../images/technology news/gaming news/gaming1.png";
import GamingTwo from "../images/technology news/gaming news/gaming2.png";
import GamingThree from "../images/technology news/gaming news/gaming3.png";
import GamingFour from "../images/technology news/gaming news/gaming4.png";

export default function TechnologyNews() {
  const newsFeedItems = [
    {
      category: "GAMING VR",
      title:
        "HTC Launches a Vive VR Headset Into Space for Astronaut Mental Health",
      date: "March 10, 2022",
      views: 2,
      image: TechnologyOne,
      imageAlt: "Four women walking",
    },
    {
      category: "PHONES",
      title:
        "Samsung is Developing Bright MicroLED on Displays for AR Headsets",
      date: "March 10, 2022",
      views: 1,
      image: TechnologyTwo,
      imageAlt: "Person with sunglasses",
    },
    {
      category: "GADGETS",
      title:
        "The Best Early Black Friday Deals on Gadgets, Laptops and Accessories",
      date: "March 10, 2022",
      views: 1,
      image: TechnologyThree,
      imageAlt: "Person holding flower",
    },
    {
      category: "GAMING VR",
      title:
        "HTC Launches a Vive VR Headset Into Space for Astronaut Mental Health",
      date: "March 10, 2022",
      views: 2,
      image: TechnologyFour,
      imageAlt: "Four women walking",
    },
  ];

  const gamingNewsItems = [
    {
      title: "Soundcore VR Gaming Earbuds Designed for Meta Quest 3",
      image: GamingOne,
      alt: "Person in corn field with VR headset",
    },
    {
      title: "Thousands Of PC Games Discounted In New Black Friday Sale",
      image: GamingTwo,
      alt: "People sitting by water",
    },
    {
      title: "A Piece of The Wrecked 1986 Challenger Space Shuttle",
      image: GamingThree,
      alt: "Green sneakers",
    },
    {
      title: "Security Cameras Make Us Feel Safe, but Are They Worth It?",
      image: GamingFour,
      alt: "Woman with flowers",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-gray-50">
      <Head>
        <title>Tech & Gaming News</title>
        <meta name="description" content="Latest technology and gaming news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Top Section - Tech News and Gaming News */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Technology News Section with News Feed */}
          <div className="md:w-7/12">
            <h2 className="text-2xl font-bold mb-2">Technology News</h2>
            <div className="w-full h-[3px] bg-gray-200 my-3">
              <div className="w-10 h-[3px] bg-yellow-500"></div>
            </div>

            <div className="mb-6">
              <div className="overflow-hidden">
                <div className="relative h-96 w-full rounded-md overflow-hidden">
                  <Image
                    src={Flower}
                    alt="Flowers in vase"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                  />
                </div>
                <div className="p-2">
                  <Link href="#">
                    <h1 className="text-4xl font-bold mb-4 text-black hover:text-yellow-500 transition duration-300">
                      Here's What Apple Really Means When It Says "Shot On
                      iPhone"
                    </h1>
                  </Link>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Link
                      href="/author/aco"
                      className="hover:text-yellow-300 transition duration-300"
                    >
                      Aco
                    </Link>{" "}
                    <span className="mx-2">•</span>
                    <span>November 19, 2022</span>
                  </div>
                </div>
              </div>
            </div>

            {/* News Feed Items */}
            {newsFeedItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  index !== newsFeedItems.length - 1
                    ? "border-b border-gray-200"
                    : ""
                } pb-6 mb-6`}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-8/12">
                    <div className="uppercase text-yellow-500 font-bold text-sm mb-2">
                      {item.category}
                    </div>
                    <Link
                      href="#"
                      className="text-2xl font-bold mb-3 text-black hover:text-yellow-500 transition duration-300"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center text-gray-500 text-sm py-2">
                      <span>{item.date}</span>
                      <span className="mx-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
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
                  <Link href="#" className="md:w-4/12">
                    <div className="relative h-36 w-full rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            <div className="text-center">
              <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-20 rounded-full mt-4 transition duration-500">
                Load More
              </button>
            </div>
          </div>

          {/* Gaming News Section */}
          <div className="md:w-5/12 flex-shrink-0">
            <div className="rounded-2xl border-2 border-yellow-500 overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  <div>Gaming News</div>
                </h2>
                <div className="w-full h-[3px] bg-gray-200 my-3">
                  <div className="w-10 h-[3px] bg-yellow-500"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {gamingNewsItems.map((item, index) => (
                    <div key={index} className="mb-6">
                      <Link
                        href="#"
                        className="rounded overflow-hidden shadow-md mb-3"
                      >
                        <div className="relative h-40 w-full rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            layout="fill"
                            objectFit="cover"
                            className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                          />
                        </div>
                      </Link>
                      <Link href="#" className="group">
                        <h3 className="font-bold text-xl leading-tight group-hover:text-yellow-500 transition-colors duration-300 line-clamp-3">
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

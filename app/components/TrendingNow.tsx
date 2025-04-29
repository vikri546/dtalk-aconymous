"use client";

import Image from "next/image";
import Link from "next/link";
import TrendingOne from "../images/trending now/trending1.png";
import TrendingTwo from "../images/trending now/trending2.png";
import TrendingThree from "../images/trending now/trending3.png";
import TrendingFour from "../images/trending now/trending4.png";
import TrendingFive from "../images/trending now/trending5.png";

export default function TrendingNews() {
  const sideArticles = [
    {
      id: 1,
      title: "Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?",
      date: "September 12, 2020",
      imageUrl: TrendingTwo,
      imageAlt: "Person with VR headset",
      href: "#",
    },
    {
      id: 2,
      title:
        "T-Mobile US Faces Class-Action Suit From AT&T and Verizon Subscribers",
      date: "September 11, 2020",
      imageUrl: TrendingThree,
      imageAlt: "Mobile phone on road",
      href: "#",
    },
    {
      id: 3,
      title: "Apple Watch's ECG Can Help Diagnose Heart Problem: Research",
      date: "September 10, 2020",
      imageUrl: TrendingFour,
      imageAlt: "Person wearing Apple Watch",
      href: "#",
    },
    {
      id: 4,
      title: "Massive Tech Glitch Gives Out 'Free Money' From Cash Machines",
      date: "September 09, 2020",
      imageUrl: TrendingFive,
      imageAlt: "Hand holding money",
      href: "#",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:px-6">
      <div className="bg-gradient-to-b from-amber-400 to-black rounded-none sm:rounded-lg overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
          <div className="h-[2px] bg-yellow-400 w-96"></div>
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold mx-2 sm:mx-4 whitespace-nowrap">
            TRENDING NOW
          </h2>
          <div className="h-[2px] bg-yellow-400 w-96"></div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="w-full">
            <Link href="#" className="block">
              <div className="relative h-72 sm:h-80 md:h-80 lg:h-96 overflow-hidden rounded-md">
                <Image
                  src={TrendingOne}
                  alt="Person splashing in water"
                  fill
                  className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <h3 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight hover:text-yellow-300 transition-colors duration-300">
                  Rise Of The Robots Raises A Big Question: What Will Workers
                  Do?
                </h3>
              </div>
            </Link>
            <div className="mt-2 text-white text-sm">
              <Link
                href="/author/aco"
                className="hover:text-yellow-300 transition duration-300"
              >
                Aco
              </Link>{" "}
              • <span>Januari 11, 2020</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {sideArticles.map((article) => (
              <div key={article.id} className="flex flex-col h-full">
                <Link href={article.href} className="block">
                  <div className="relative h-36 sm:h-40 md:h-32 lg:h-36 rounded-md overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={article.imageAlt}
                      fill
                      className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-white text-sm sm:text-base font-bold leading-tight hover:text-yellow-300 transition duration-300">
                      {article.title}
                    </h3>
                  </div>
                </Link>
                <div className="text-white/80 text-xs mt-1">
                  {article.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
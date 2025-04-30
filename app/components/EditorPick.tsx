import React from "react";
import Image from "next/image";
import Link from "next/link";
import EditorPick1 from "../images/editor pick/editor1.png";
import EditorPick2 from "../images/editor pick/editor2.png";
import EditorPick3 from "../images/editor pick/editor3.png";
import SecondPick1 from "../images/editor pick/second pick/editor1.png";
import SecondPick2 from "../images/editor pick/second pick/editor2.png";
import SecondPick3 from "../images/editor pick/second pick/editor3.png";
import SecondPick4 from "../images/editor pick/second pick/editor4.png";

const topEditorPicks = [
  {
    id: 1,
    image: EditorPick1,
    title: "PC Controllers 2024: DigitalHub Buyer's Guide to Gamepads",
    source: "Aco",
    date: "Januari 13, 2021",
    link: "/editors-picks/pc-controllers-2024",
  },
  {
    id: 2,
    image: EditorPick2,
    title:
      "Apple Wants To Make It Easier To Buy An iPhone 15 Pro For The Holidays",
    source: "Aco",
    date: "Januari 13, 2021",
    link: "/editors-picks/apple-iphone-15-pro",
  },
  {
    id: 3,
    image: EditorPick3,
    title: "Smart Watch Vs Fitness Tracker: How To Find The Perfect Fit",
    source: "Aco",
    date: "Januari 13, 2021",
    link: "/editors-picks/smartwatch-vs-fitness-tracker",
  },
];

const bottomEditorPicks = [
  {
    id: 4,
    image: SecondPick1,
    title: "Audi Q3 40 TFSI: Top Reasons to Consider Buying This SUV in 2023",
    date: "Januari 12, 2021",
  },
  {
    id: 5,
    image: SecondPick2,
    title: "G PlayStore Will Ask You to Update Apps if They Crash",
    date: "Januari 12, 2021",
  },
  {
    id: 6,
    image: SecondPick3,
    title: "Apple's Beats SP Headphones Listed in FCC Database Ahead of Launch",
    date: "Januari 12, 2021",
  },
  {
    id: 7,
    image: SecondPick4,
    title: "How AI Automation are Transforming Train Food Delivery Aggregators",
    date: "Januari 12, 2021",
  },
];

const EditorsPicks = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Editor&apos;s Picks</h2>
      </div>

      <div className="w-full h-[3px] bg-gray-200 mb-4">
        <div className="w-10 h-[3px] bg-yellow-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {topEditorPicks.map((item) => (
          <div key={item.id} className="flex flex-col relative">
            <Link href={item.link}>
              <div className="rounded-md overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover transition duration-300 ease-in-out hover:opacity-75"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500 transition duration-300 line-clamp-2">
                {item.title}
              </h2>
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <Link
                href="/"
                className="dark:text-white hover:text-yellow-300 dark:hover:text-yellow-500 transition duration-300"
              >
                {item.source}
              </Link>
              <span className="mx-2">•</span>
              <span>{item.date}</span>
            </div>
            <div className="flex w-full h-[3px] bg-yellow-500 mt-2"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {bottomEditorPicks.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <Link href="/" className="block">
              <div className="relative h-64 sm:h-72 md:h-64 lg:h-36 w-full rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  fill
                  className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                />
              </div>
              <h3 className="text-base font-bold text-black dark:text-white hover:text-yellow-400 dark:hover:text-yellow-500 transition duration-300 leading-tight mt-2">
                {item.title}
              </h3>
            </Link>
            <p className="text-xs text-gray-500 mt-2 cursor-text">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPicks;

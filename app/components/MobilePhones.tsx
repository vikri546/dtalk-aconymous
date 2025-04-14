"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import OneImage from "../images/mobile phones/one.png";
import TwoImage from "../images/mobile phones/two.png";
import ThreeImage from "../images/mobile phones/three.png";
import Iklan from "../images/iklan.png";

export default function MobilePhones() {
  const articles = [
    {
      title: "Schools, Parents Disagree over Bans on Student Mobile Phones",
      author: "Aco",
      date: "Maret 15, 2020",
      image: OneImage,
      link: "/mobiles/schools-parents-disagree-over-bans-on-student-mobile-phones",
    },
    {
      title: "iPhone 11 Pro Max Price Slashed By 18%! Hurry Up, Grab It Now",
      author: "Aco",
      date: "Maret 15, 2020",
      image: TwoImage,
      link: "/mobiles/iphone-11-pro-max-price-slashed-by-18-hurry-up-grab-it-now",
    },
    {
      title: "HMD Global Announces New HMD Brand for New Mobile Phones",
      author: "Aco",
      date: "Maret 15, 2020",
      image: ThreeImage,
      link: "/mobiles/hmd-global-announces-new-hmd-brand-for-new-mobile-phones",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <Head>
        <title>Mobile Phones</title>
        <meta name="description" content="Latest mobile phone news and deals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Mobile Phones</h1>
        <Link
          href="/mobiles"
          className="border-2 border-gray-300 rounded-full px-4 py-2 text-xs text-gray-500 hover:text-gray-700 transition duration-300"
        >
          More from Mobiles
        </Link>
      </div>

      <div className="w-full h-[3px] bg-gray-200 mb-8">
        <div className="w-16 h-[3px] bg-yellow-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col relative">
            <Link href={article.link}>
              <div className="rounded-md overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover transition duration-300 ease-in-out hover:opacity-75"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-black hover:text-yellow-500 transition duration-300">
                {article.title}
              </h2>
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <Link
                href="/"
                className="hover:text-yellow-300 transition duration-300"
              >
                {article.author}
              </Link>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
            <div className="flex w-full h-[3px] bg-yellow-500 mt-2"></div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <Link href="/" className="flex justify-center mt-20">
          <Image
            src={Iklan}
            alt="Iklan"
            width={970}
            height={125}
            className="object-cover"
          />
        </Link>
      </div>
    </div>
  );
}

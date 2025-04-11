'use client';

import Image from "next/image";
import Link from "next/link";
import Mahkamah from "../images/mahkamah.png";
import Head from "next/head";

export default function FirstSection() {
  const newsItems = [
    {
      category: 'GADGETS',
      title: 'Save $25 on Philips Headphone For A Great Sounding Over-Ear...',
      date: 'March 15, 2020',
      views: 1,
      image: '/profile1.jpg'
    },
    {
      category: 'DRONES',
      title: 'Take Your Photography to The Next Level with This Drone',
      date: 'January 13, 2020',
      views: 0,
      image: '/profile2.jpg'
    },
    {
      category: 'GADGETS',
      title: 'The 15 Best Early Black Friday Smartwatch Deals',
      date: 'January 12, 2020',
      views: 0,
      image: '/profile3.jpg'
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row p-4 max-w-7xl mx-auto">
        <Head>
          <title>News Portal</title>
          <meta name="description" content="Latest news and updates" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
          <div className="relative">
            <Image 
              src="/constitution-courthouse.jpg" 
              alt="Constitution and courthouse overlay" 
              width={600} 
              height={450} 
              className="w-full h-auto rounded"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h1 className="text-3xl font-black leading-tight">
                Apa Itu Mahkamah Konstitusi? Kenali Perannya di Negara Kita!
              </h1>
              <div className="mt-2 text-gray-700">
                Aco
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="border-b-4 border-yellow-500 mb-6 pb-2 flex items-center">
            <h2 className="text-yellow-500 text-2xl font-bold mr-2">News</h2>
            <span className="text-gray-800 text-2xl font-normal">Just In</span>
          </div>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-grow pr-4">
                  <div className="text-yellow-500 font-semibold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{item.date}</span>
                    <div className="flex items-center ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{item.views} Views</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 relative rounded-full overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill
                      className="object-cover"
                    />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

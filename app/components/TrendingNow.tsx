'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TrendingNow() {
  const featuredArticle = {
    title: "Rise Of The Robots Raises A Big Question: What Will",
    image: "/woman-water-splash.jpg",
  };

  const trendingArticles = [
    {
      title: "Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?",
      date: "September 12, 2020",
      image: "/woman-forest.jpg",
    },
    {
      title: "T-Mobile US Faces Class-Action Suit From AT&T and Verizon Subscribers",
      date: "September 11, 2020",
      image: "/backpack-video.jpg",
      hasVideo: true,
    },
    {
      title: "Apple Watch's ECG Can Help Diagnose Heart Problem: Research",
      date: "September 10, 2020",
      image: "/woman-purse.jpg",
    },
    {
      title: "Massive Tech Glitch Gives Out 'Free Money' From Cash Machines",
      date: "September 9, 2020",
      image: "/person-arms-raised.jpg",
    },
  ];

  return (
    <div className="bg-yellow-500 py-8 px-4 md:px-8 my-8 rounded-sm">
      <h2 className="text-white text-4xl font-bold text-center mb-8">TRENDING NOW</h2>
      
      <div className="h-0.5 bg-yellow-400 w-full mb-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Article - First Column, Full Height */}
        <div className="md:col-span-1 relative">
          <div className="relative w-full h-96 rounded-sm overflow-hidden">
            <Image 
              src={featuredArticle.image} 
              alt={featuredArticle.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-4xl font-bold leading-tight">{featuredArticle.title}</h3>
            </div>
          </div>
        </div>
        
        {/* Right Side Articles - 2x2 Grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {trendingArticles.map((article, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="relative w-full h-48 rounded-sm overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                {article.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <h3 className="text-white text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-yellow-200">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
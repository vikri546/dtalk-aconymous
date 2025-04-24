'use client'

import Image from 'next/image';
import { useState } from 'react';
import MostPopular1 from '../images/subscribes/popular1.png';
import MostPopular2 from '../images/subscribes/popular2.png';
import MostPopular3 from '../images/subscribes/popular3.png';
import OurPicks1 from '../images/subscribes/picks1.png';
import OurPicks2 from '../images/subscribes/picks2.png';
import OurPicks3 from '../images/subscribes/picks3.png';
import Link from 'next/link';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  
  const mostPopularArticles = [
    {
      id: 1,
      image: MostPopular1,
      title: "Apa Itu Mahkamah Konstitusi? Kenali Perannya di Negara Kita!",
      date: "Januari 11, 2020",
      views: 40
    },
    {
      id: 2,
      image: MostPopular2,
      title: "CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design",
      date: "Maret 15, 2020",
      views: 22
    },
    {
      id: 3,
      image: MostPopular3,
      title: "Bodily Harms: How AI and Biometrics Curtail Human Rights",
      date: "Maret 15, 2020",
      views: 7
    }
  ];
  
  const ourPicksArticles = [
    {
      id: 1,
      image: OurPicks1,
      title: "Here's What Apple Really Means When It Says \"Shot On iPhone\"",
      date: "November 19, 2022",
      views: 0
    },
    {
      id: 2,
      image: OurPicks2,
      title: "HTC Launches a Vive VR Headset Into Space for Astronaut Mental Health",
      date: "Maret 10, 2022",
      views: 0
    },
    {
      id: 3,
      image: OurPicks3,
      title: "Samsung is Developing Bright MicroLED on Displays for AR Headsets",
      date: "Maret 10, 2022",
      views: 0
    }
  ];
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle Subscription
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div className="bg-zinc-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-14">
          {/* Most Popular Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-bold mb-6 uppercase">MOST POPULAR</h2>
            
            <div className="space-y-6">
              {mostPopularArticles.map((article, index) => (
                <div key={article.id}>
                  <div className="flex space-x-3">
                    <Link href="#">
                      <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={article.image}
                          alt={article.title}
                          layout="fill"
                          objectFit="cover"
                          className="hover:opacity-80 transition-opacity"
                        />
                      </div>
                    </Link>
                    
                    <div className="flex flex-col">
                      <Link href="#" className="hover:text-yellow-500 transition-colors duration-300">
                        <h3 className="font-bold text-sm">{article.title}</h3>
                      </Link>
                      
                      <div className="flex items-center text-xs text-gray-400 mt-2">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {article.views} Views
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {index < mostPopularArticles.length - 1 && (
                    <div className="border-b border-zinc-800 mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Our Picks Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-bold mb-6 uppercase">OUR PICKS</h2>
            
            <div className="space-y-6">
              {ourPicksArticles.map((article, index) => (
                <div key={article.id}>
                  <div className="flex space-x-3">
                    <Link href="#">
                      <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={article.image}
                          alt={article.title}
                          layout="fill"
                          objectFit="cover"
                          className="hover:opacity-80 transition-opacity"
                        />
                      </div>
                    </Link>
                    
                    <div className="flex flex-col">
                      <Link href="#" className="hover:text-yellow-500 transition-colors duration-300">
                        <h3 className="font-bold text-sm">{article.title}</h3>
                      </Link>
                      
                      <div className="flex items-center text-xs text-gray-400 mt-2">
                        <span>{article.date}</span>
                        {article.views > 0 && (
                          <>
                            <span className="mx-2">•</span>
                            <span className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              {article.views} Views
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {index < ourPicksArticles.length - 1 && (
                    <div className="border-b border-zinc-800 mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Subscribe Section */}
          <div className="w-full mx-auto md:w-1/3 py-6 md:py-0 px-4 lg:px-0">
            <div className="bg-black border border-zinc-800 p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-center">Subscribe to Updates</h2>
              
              <p className="text-center text-sm text-gray-400 mb-8">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="w-full p-3 mb-4 bg-zinc-900 border border-zinc-800 text-white text-sm text-center"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
                <button
                  type="submit"
                  className="w-full p-3 bg-yellow-500 hover:bg-zinc-800 text-white transition duration-300 font-bold text-sm uppercase"
                >
                  Subscribe
                </button>
                
                <div className="mt-6 flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-gray-400">
                    By signing up, you agree to the our terms and our Privacy Policy agreement.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
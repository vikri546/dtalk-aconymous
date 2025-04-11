'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ScienceInnovation() {
  const articles = [
    {
      category: 'BIOMETRICS',
      title: 'Bodily Harms: How AI and Biometrics Curtail Human Rights',
      date: 'March 15, 2020',
      views: 4,
      image: '/biometrics-image.jpg'
    },
    {
      category: 'UNCATEGORIZED',
      title: 'CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design',
      date: 'March 15, 2020',
      views: 20,
      image: '/carplay-concept.jpg'
    },
    {
      category: 'GADGETS',
      title: 'Study: Earbuds Use, Youngsters at High Risk of Hearing Loss',
      date: 'March 15, 2020',
      views: 0,
      image: '/earbuds-girl.jpg'
    }
  ];

  const mostReadPosts = [
    {
      number: 1,
      title: 'PS5 vs Xbox Series XS vs Switch Launch Sales Comparison'
    },
    {
      number: 2,
      title: 'New Oculus VR Kills IRL If Your Game Character Dies'
    },
    {
      number: 3,
      title: 'Hologate VR Serves Its Five Millionth Customer'
    },
    {
      number: 4,
      title: 'The Nintendo Switch Cant Seem To Handle Pokémon'
    },
    {
      number: 5,
      title: 'The Fujifilm X-T30 is The Perfect Camera for Gaming'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Head>
        <title>Science & Innovation</title>
        <meta name="description" content="Latest science and innovation news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">Science & Innovation</h1>
          
          <div className="w-full h-1 bg-gray-200 mb-8">
            <div className="w-16 h-1 bg-yellow-500"></div>
          </div>

          {articles.map((article, index) => (
            <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <div className="text-yellow-500 font-semibold mb-2">{article.category}</div>
                  <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{article.date}</span>
                    <div className="flex items-center ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{article.views} Views</span>
                    </div>
                  </div>
                </div>
                <div className="md:flex-shrink-0">
                  <div className="w-full md:w-32 h-32 relative rounded-lg overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Most Read Sidebar */}
        <div className="md:w-1/3">
          <div className="border-2 border-yellow-400 rounded-xl p-6">
            <h2 className="text-2xl mb-4">
              <span className="text-yellow-500 font-bold">Most Read</span>
              <span className="font-bold"> Posts</span>
            </h2>
            
            <div className="w-full h-1 bg-gray-200 mb-6">
              <div className="w-16 h-1 bg-yellow-500"></div>
            </div>

            <div className="space-y-6">
              {mostReadPosts.map((post, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-yellow-500 text-2xl font-bold mr-4">{post.number}.</div>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
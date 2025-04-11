'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Head>
        <title>Technology News</title>
        <meta name="description" content="Latest technology news and updates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col lg:flex-row gap-8">
        {/* Main content area */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Technology News</h1>
          <div className="border-b-4 border-yellow-500 w-12 mb-6"></div>
          
          <div className="mb-6">
            <div className="relative h-96 w-full rounded overflow-hidden">
              <Image 
                src="/images/flowers.jpg" 
                alt="Tulips and hyacinths in a vase"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
          
          <h2 className="text-5xl font-black mb-4">Here's What Apple Really Means</h2>
          <p className="text-gray-600 text-lg">When They Say "AI-Ready" Devices</p>
          {/* Additional News Articles */}
            <div className="mt-16 space-y-6">
            {/* Divider */}
            <div className="border-t border-teal-400 w-full"></div>
            
            {/* First Article */}
            <div className="flex flex-col md:flex-row gap-6 py-6">
                <div className="md:w-2/3">
                <div className="text-yellow-500 font-semibold mb-2">GAMING VR</div>
                <h2 className="text-3xl font-bold mb-4">HTC Launches a Vive VR Headset Into Space for Astronaut Mental Health</h2>
                <div className="flex items-center text-gray-500 gap-4">
                    <span>March 10, 2022</span>
                    <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>0 Views</span>
                    </div>
                </div>
                </div>
                <div className="md:w-1/3">
                <div className="relative h-60 w-full rounded overflow-hidden">
                    <Image 
                    src="/images/women-walking.jpg" 
                    alt="Four women walking together"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    />
                </div>
                </div>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-200 w-full"></div>
            
            {/* Second Article */}
            <div className="flex flex-col md:flex-row gap-6 py-6">
                <div className="md:w-2/3">
                <div className="text-yellow-500 font-semibold mb-2">PHONES</div>
                <h2 className="text-3xl font-bold mb-4">Samsung is Developing Bright MicroLED on Displays for AR Headsets</h2>
                <div className="flex items-center text-gray-500 gap-4">
                    <span>March 10, 2022</span>
                    <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>0 Views</span>
                    </div>
                </div>
                </div>
                <div className="md:w-1/3">
                <div className="relative h-60 w-full rounded overflow-hidden">
                    <Image 
                    src="/images/plaid-shirt.jpg" 
                    alt="Person in plaid shirt with sunglasses"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 bg-yellow-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Gaming News</h2>
          <div className="border-b-4 border-yellow-500 w-12 mb-6"></div>
          
          <div className="grid grid-cols-1 gap-6">
            {/* Gaming News Item 1 */}
            <div className="flex flex-col space-y-2">
              <div className="relative h-40 w-full rounded overflow-hidden">
                <Image 
                  src="/images/cornfield.jpg" 
                  alt="Person with hat in cornfield"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="font-bold text-lg">Soundcore VR Gaming Earbuds Designed for Meta Quest 3</h3>
            </div>
            
            {/* Gaming News Item 2 */}
            <div className="flex flex-col space-y-2">
              <div className="relative h-40 w-full rounded overflow-hidden">
                <Image 
                  src="/images/lake.jpg" 
                  alt="Two people sitting by a lake"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="font-bold text-lg">Thousands Of PC Games Discounted In New Black Friday Sale</h3>
            </div>
            
            {/* Gaming News Item 3 */}
            <div className="flex flex-col space-y-2">
              <div className="relative h-40 w-full rounded overflow-hidden">
                <Image 
                  src="/images/shoes.jpg" 
                  alt="Black sneakers"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="font-bold text-lg">A Piece of The Wrecked 1986 Challenger Space Shuttle</h3>
            </div>
            
            {/* Gaming News Item 4 */}
            <div className="flex flex-col space-y-2">
              <div className="relative h-40 w-full rounded overflow-hidden">
                <Image 
                  src="/images/woman.jpg" 
                  alt="Woman with pink blossoms"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="font-bold text-lg">Security Cameras Make Us Feel Safe, but Are They Worth It?</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Circle1 from "../images/circle/first.png";
import Circle2 from "../images/circle/second.png";
import Circle3 from "../images/circle/third.png";
import Circle4 from "../images/circle/fourth.png";
import Circle5 from "../images/circle/fifth.png";

export default function FirstSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const circleImages = [
    { src: Circle1, alt: "Circle 1" },
    { src: Circle2, alt: "Circle 2" },
    { src: Circle3, alt: "Circle 3" },
    { src: Circle4, alt: "Circle 4" },
    { src: Circle5, alt: "Circle 5" },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -80, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 80, behavior: "smooth" });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      // Check initial scroll position
      checkScrollPosition();

      // Check if arrows should be shown based on container width
      setShowRightArrow(
        scrollContainer.scrollWidth > scrollContainer.clientWidth
      );
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex items-center justify-center">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-yellow-500 transition-colors"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-2 py-2 px-8 max-w-full scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {circleImages.map((image, index) => (
              <Link
                key={index}
                href="/"
                className="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-black-200 dark:border-black-800"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover bg-cover bg-center rounded transition duration-300 ease-in-out hover:opacity-75"
                />
              </Link>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-yellow-500 transition-colors"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

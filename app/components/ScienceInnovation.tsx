"use client";

import Image from "next/image";
import Link from "next/link";
import Article1 from "../images/articles/article1.png";
import Article2 from "../images/articles/article2.png";
import Article3 from "../images/articles/article3.png";
import Article4 from "../images/articles/article4.png";

export default function ScienceInnovation() {
  const articles = [
    {
      title: "Bodily Harms: How AI and Biometrics Curtail Human Rights",
      author: "Aco",
      date: "Maret 15, 2020",
      image: Article1,
      link: "/science-innovation/scientists-develop-new-method-to-detect-cancer",
      category: "HEALTH",
      views: 4,
    },
    {
      title:
        "CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design",
      author: "Aco",
      date: "Maret 15, 2020",
      image: Article2,
      link: "/science-innovation/new-study-shows-benefits-of-regular-exercise",
      category: "FITNESS",
      views: 2,
    },
    {
      title: "Study: Earbuds Use, Youngsters at High Risk of Hearing Loss",
      author: "Aco",
      date: "Maret 15, 2020",
      image: Article3,
      link: "/science-innovation/researchers-discover-new-material-with-unique-properties",
      category: "MATERIALS",
      views: 3,
    },
    {
      title: "These Are The Best PC VR Games That You Must Play In 2023",
      author: "Aco",
      date: "Maret 15, 2020",
      image: Article4,
      link: "/science-innovation/scientists-develop-new-method-to-detect-cancer",
      category: "RESEARCH",
      views: 5,
    },
  ];

  const mostReadPosts = [
    {
      title: "PS5 vs Xbox Series XS vs Switch Launch Sales Comparison",
      link: "/gaming/console-sales-comparison",
    },
    {
      title: "New Oculus VR Kills IRL If Your Game Character Dies",
      link: "/gaming/oculus-vr-controversy",
    },
    {
      title: "Hologate VR Serves Its Five Millionth Customer",
      link: "/tech/hologate-vr-milestone",
    },
    {
      title: "The Nintendo Switch Can't Seem To Handle Pokémon",
      link: "/gaming/nintendo-switch-pokemon-issues",
    },
    {
      title: "The Fujifilm X-T30 is The Perfect Camera for Gaming",
      link: "/tech/fujifilm-gaming-camera",
    },
  ];

  return (
    <div className="max-w-6xl px-8 py-8 mx-auto">
      <div className="flex w-full flex-col md:flex-row gap-20">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Science & Innovation</h1>
          </div>

          <div className="w-full h-[3px] bg-gray-200 mb-8">
            <div className="w-10 h-[3px] bg-yellow-500"></div>
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex items-center border-b-2 border-gray-200 pb-3"
              >
                <div className="flex-grow pr-2">
                  <div className="text-yellow-500 text-xs font-semibold mb-2">
                    {article.category}
                  </div>
                  <Link href={article.link}>
                    <h3 className="text-base sm:text-lg lg:text-xl text-black dark:text-white hover:text-yellow-300 dark:hover:text-yellow-500 transition-colors duration-300 ease-in-out hover:opacity-75 font-bold mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span className="mr-2">{article.date}</span>
                    <div className="flex items-center ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
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
                      <span>{article.views} Views</span>
                    </div>
                  </div>
                </div>
                <Link href={article.link} className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative rounded-md overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      title={article.title}
                      fill
                      className="object-cover transition duration-300 ease-in-out hover:opacity-75"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-4/12 flex-shrink-0">
          <div className="rounded-2xl border-2 border-yellow-500 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold">
                <span className="text-yellow-500">Most Read</span> Posts
              </h2>
              <div className="w-full h-[3px] bg-gray-200 my-3">
                <div className="w-10 h-[3px] bg-yellow-500"></div>
              </div>
              <ul className="divide-y divide-gray-200">
                {mostReadPosts.map((post, index) => (
                  <li key={index} className="py-3">
                    <Link href={post.link} className="group">
                      <div className="flex items-start">
                        <span className="text-xl font-bold text-yellow-500 mr-3">
                          {index + 1}.
                        </span>
                        <h3 className="text-base font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                          {post.title}
                        </h3>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="w-full h-[1px] bg-gray-200 mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

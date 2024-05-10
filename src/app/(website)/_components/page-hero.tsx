"use client";

import Link from "next/link";

interface PageHeroProps {
  title: string;
}

const PageHero = ({ title }: PageHeroProps) => {
  return (
    <div className="relative page-hero bg-[url('/images/hero.jpg')] h-[400px] bg-center bg-cover">
      <div className="bg-black bg-opacity-80 h-full w-full absolute"></div>
      <div className="relative container mx-auto px-6 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold text-center">{title}</h1>
        {/* Breadcrumb */}
        <nav
          className="text-white text-sm font-medium mt-4"
          aria-label="Breadcrumb"
        >
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-white hover:text-yellow-500">
                Home
              </Link>
              <svg
                className="h-3 w-3 mx-2"
                xmlns="http://www.w3.org/2000/svg"
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
            </li>
            <li className="flex items-center">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHero;

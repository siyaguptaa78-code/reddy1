import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { CONFIG } from "@/utils/config";

export const metadata: Metadata = {
  title: "Blogs & Sports Updates | Reddy Anna Book",
  description: "Read the latest sports blogs, match schedules, tournament previews, and betting guides on Reddy Anna Book.",
  alternates: { canonical: "https://reddynow.com/blogs" },
  openGraph: {
    title: "Blogs & Sports Updates | Reddy Anna Book",
    description: "Read the latest sports blogs, match schedules, tournament previews, and betting guides on Reddy Anna Book.",
    url: "https://reddynow.com/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 ">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          
          {/* Main Title Banner */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#FFD13F] font-black text-2xl md:text-3xl lg:text-4xl tracking-wide leading-tight">
              Latest Sports Blogs & Articles
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Stay ahead of the game with tournament schedules, team analytics, player auction reports, and betting insights from our sports experts at Reddy Anna Book.
            </p>
          </section>

          {/* Blogs Grid/List */}
          <div className="flex flex-col gap-6">
            
            {/* The Hundred 2026 Blog Card */}
            <article className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-lg shadow-black group hover:border-[#F0901A]/35 transition-all duration-300">
              {/* Blog Image */}
              <div className="w-full md:w-1/3 aspect-[1.8/1] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                <img
                  src="/the-hundred-banner.png"
                  alt="The Hundred 2026"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Blog Content */}
              <div className="flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[#F0901A] font-bold text-xs tracking-wider uppercase">
                    🏏 Cricket News
                  </span>
                  <h2 className="text-white font-black text-xl md:text-2xl group-hover:text-[#FFD13F] transition-colors leading-tight">
                    The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets
                  </h2>
                  <p className="text-gray-400 font-semibold text-xs">
                    📅 Published: July 9, 2026
                  </p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
                    The Hundred 2026 is scheduled to run from 21 July to 16 August 2026. Opening with an explosive matchup at the Kia Oval between MI London and SunRisers Leeds, the tournament has undergone a massive franchise and owner overhaul. Read the full detailed schedule with UK & India timings, marquee player signings, squad details, ticket info, and streaming broadcaster details.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/the-hundred-2026-schedule/"
                    className="inline-flex items-center justify-center px-6 py-2.5 font-extrabold text-black bg-gradient-to-r from-[#FFD13F] to-[#F0901A] rounded-xl hover:from-[#F0901A] hover:to-[#FFD13F] transition-all duration-300 shadow-md shadow-black/30 hover:scale-[1.02] text-xs md:text-sm"
                  >
                    Show More
                  </Link>
                </div>
              </div>
            </article>

          </div>

        </div>
      </div>
    </div>
  );
}

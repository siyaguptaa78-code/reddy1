import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CONFIG } from "@/utils/config";

export const metadata: Metadata = {
 title: "Blogs & Sports Updates | Reddy Anna Book",
 description: "Read the latest sports blogs, match schedules, tournament previews, and guides on Reddy Anna Book.",
  alternates: { canonical: "https://reddynow.com/blogs" },
 openGraph: {
 title: "Blogs & Sports Updates | Reddy Anna Book",
 description: "Read the latest sports blogs, match schedules, tournament previews, and guides on Reddy Anna Book.",
    url: "https://reddynow.com/blogs",
 type: "website",
 },
};

export default function BlogsPage() {
 return (
 <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 ">
 <div className="w-full flex flex-col gap-8 text-left">
 
 {/* Left Sidebar */}
 

 {/* Main Content */}
 <div className="w-full flex flex-col gap-8 text-left">
 
 {/* Main Title Banner */}
 <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
 <h1 className="text-[#FFD13F] font-black text-2xl md:text-3xl lg:text-4xl tracking-wide leading-tight">
 Latest Sports Blogs & Articles
 </h1>
 <p className="text-gray-300 text-sm md:text-base leading-relaxed">
 Stay ahead of the game with tournament schedules, team analytics, player auction reports, and insights from our sports experts at Reddy Anna Book.
 </p>
 </section>

 {/* Blogs Grid/List */}
 <div className="flex flex-col gap-6">
 
 {/* CPL 2026 Playoff Qualification Blog Card */}
 <article className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-lg shadow-black group hover:border-[#F0901A]/35 transition-all duration-300">
 {/* Blog Image */}
 <div className="w-full md:w-1/3 aspect-[1.8/1] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-slate-900 border border-[#F0901A]/20 flex items-center justify-center p-6 text-center">
 <div className="flex flex-col items-center gap-2">
 <span className="text-4xl">🏏</span>
 <span className="text-[#FFD13F] font-black text-lg">CPL 2026</span>
 <span className="text-xs text-gray-400 font-mono">Playoffs · Barbados</span>
 </div>
 </div>

 {/* Blog Content */}
 <div className="flex-1 flex flex-col justify-between gap-4">
 <div className="flex flex-col gap-2">
 <span className="text-[#F0901A] font-bold text-xs tracking-wider uppercase">
 🏏 Cricket News
 </span>
 <h2 className="text-white font-black text-xl md:text-2xl group-hover:text-[#FFD13F] transition-colors leading-tight">
 CPL 2026 Playoff Qualification Scenarios: Which Teams Reached the Final Four?
 </h2>
 <p className="text-gray-400 font-semibold text-xs">
 📅 Published: September 16, 2026
 </p>
 <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
 The CPL 2026 league phase is complete and the playoff race is settled. Get the full points table, qualification rules, and the Barbados knockout schedule as Guyana, Antigua & Barbuda, Barbados and Jamaica reach the final four.
 </p>
 </div>

 <div className="pt-2">
 <Link
                    href="/cpl-2026-playoff-qualification-scenarios/"
 className="inline-flex items-center justify-center px-6 py-2.5 font-extrabold text-black bg-gradient-to-r from-[#FFD13F] to-[#F0901A] rounded-xl hover:from-[#F0901A] hover:to-[#FFD13F] transition-all duration-300 shadow-md shadow-black/30 hover:scale-[1.02] text-xs md:text-sm"
 >
 Show More
 </Link>
 </div>
 </div>
 </article>

 {/* ReddyNow Complete Guide Blog Card */}
 <article className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-lg shadow-black group hover:border-[#F0901A]/35 transition-all duration-300">
 {/* Blog Image */}
 <div className="w-full md:w-1/3 aspect-[1.8/1] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-slate-900 border border-[#F0901A]/20 flex items-center justify-center p-6 text-center">
 <div className="flex flex-col items-center gap-2">
 <span className="text-4xl">⚡</span>
 <span className="text-[#FFD13F] font-black text-lg">REDDY NOW</span>
 <span className="text-xs text-gray-400 font-mono">Official Guide 2026</span>
 </div>
 </div>

 {/* Blog Content */}
 <div className="flex-1 flex flex-col justify-between gap-4">
 <div className="flex flex-col gap-2">
 <span className="text-[#F0901A] font-bold text-xs tracking-wider uppercase">
 ⚡ Platform Guide
 </span>
 <h2 className="text-white font-black text-xl md:text-2xl group-hover:text-[#FFD13F] transition-colors leading-tight">
 ReddyNow: Complete Guide to the Platform, Sports, Features, Login and User Safety
 </h2>
 <p className="text-gray-400 font-semibold text-xs">
 📅 Published: September 1, 2026
 </p>
 <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
 ReddyNow is an online sports and gaming platform covering cricket, football, tennis, kabaddi, and live casino. Discover everything about account IDs, instant UPI payments, verification, and essential security practices.
 </p>
 </div>

 <div className="pt-2">
 <Link
                    href="/reddynow-guide/"
 className="inline-flex items-center justify-center px-6 py-2.5 font-extrabold text-black bg-gradient-to-r from-[#FFD13F] to-[#F0901A] rounded-xl hover:from-[#F0901A] hover:to-[#FFD13F] transition-all duration-300 shadow-md shadow-black/30 hover:scale-[1.02] text-xs md:text-sm"
 >
 Show More
 </Link>
 </div>
 </div>
 </article>

 {/* Smriti Mandhana Blog Card */}
 <article className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-lg shadow-black group hover:border-[#F0901A]/35 transition-all duration-300">
 {/* Blog Image */}
 <div className="w-full md:w-1/3 aspect-[1.8/1] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-slate-900 border border-[#F0901A]/20 flex items-center justify-center p-6 text-center">
 <div className="flex flex-col items-center gap-2">
 <span className="text-4xl">🏏</span>
 <span className="text-[#FFD13F] font-black text-lg">HISTORY CREATED</span>
 <span className="text-xs text-gray-400 font-mono">Smriti Mandhana</span>
 </div>
 </div>

 {/* Blog Content */}
 <div className="flex-1 flex flex-col justify-between gap-4">
 <div className="flex flex-col gap-2">
 <span className="text-[#F0901A] font-bold text-xs tracking-wider uppercase">
 🏏 Women's Cricket
 </span>
 <h2 className="text-white font-black text-xl md:text-2xl group-hover:text-[#FFD13F] transition-colors leading-tight">
 Smriti Mandhana Creates History, Surpasses Mithali Raj to Become Women’s Cricket’s Leading Run-Scorer
 </h2>
 <p className="text-gray-400 font-semibold text-xs">
 📅 Published: September 4, 2026
 </p>
 <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
 Smriti Mandhana becomes the leading run-scorer in women's international cricket after a sensational century against Hong Kong China in the Women's Asia Cup 2026, overtaking Mithali Raj's record.
 </p>
 </div>

 <div className="pt-2">
 <Link
                    href="/smriti-mandhana-creates-history/"
 className="inline-flex items-center justify-center px-6 py-2.5 font-extrabold text-black bg-gradient-to-r from-[#FFD13F] to-[#F0901A] rounded-xl hover:from-[#F0901A] hover:to-[#FFD13F] transition-all duration-300 shadow-md shadow-black/30 hover:scale-[1.02] text-xs md:text-sm"
 >
 Show More
 </Link>
 </div>
 </div>
 </article>

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

 {/* Cricket Line Movement Blog Card */}
 <article className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-lg shadow-black group hover:border-[#F0901A]/35 transition-all duration-300">
 {/* Blog Image */}
 <div className="w-full md:w-1/3 aspect-[1.8/1] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
 <img
                  src="/cricket-betting-confessions.png"
 alt="Cricket Line Movement"
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
 />
 </div>

 {/* Blog Content */}
 <div className="flex-1 flex flex-col justify-between gap-4">
 <div className="flex flex-col gap-2">
 <span className="text-[#F0901A] font-bold text-xs tracking-wider uppercase">
 🏏 Insights
 </span>
 <h2 className="text-white font-black text-xl md:text-2xl group-hover:text-[#FFD13F] transition-colors leading-tight">
 Cricket Confessions: What Sportsbook Insiders Won’t Tell You About Line Movement
 </h2>
 <p className="text-gray-400 font-semibold text-xs">
 📅 Published: August 5, 2026
 </p>
 <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
 Sportsbook traders move cricket odds for reasons they’d rather you didn’t know. Here’s what line movement actually signals — and how sharp bettors read it before placing a single bet.
 </p>
 </div>

 <div className="pt-2">
 <Link
                    href="/cricket-betting-line-movement/"
 className="inline-flex items-center justify-center px-6 py-2.5 font-extrabold text-black bg-gradient-to-r from-[#FFD13F] to-[#F0901A] rounded-xl hover:from-[#F0901A] hover:to-[#FFD13F] transition-all duration-300 shadow-md shadow-black/30 hover:scale-[1.02] text-xs md:text-sm"
 >
 Show More
 </Link>
 </div>
 </div>
 </article>

 {/* Underdog Formula Blog Card */}
 <article className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-lg shadow-black group hover:border-[#F0901A]/35 transition-all duration-300">
 {/* Blog Image */}
 <div className="w-full md:w-1/3 aspect-[1.8/1] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
 <img
                  src="/underdog-formula-ipl-upsets.png"
 alt="The Underdog Formula: IPL Upsets"
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
 />
 </div>

 {/* Blog Content */}
 <div className="flex-1 flex flex-col justify-between gap-4">
 <div className="flex flex-col gap-2">
 <span className="text-[#F0901A] font-bold text-xs tracking-wider uppercase">
 🏏 Strategies
 </span>
 <h2 className="text-white font-black text-xl md:text-2xl group-hover:text-[#FFD13F] transition-colors leading-tight">
 The Underdog Formula: How One Stat Predicted 4 of the Last 5 IPL Upsets
 </h2>
 <p className="text-gray-400 font-semibold text-xs">
 📅 Published: August 5, 2026
 </p>
 <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
 A single cricket metric — the Phase Dominance Score — correctly flagged 4 of the last 5 major IPL upsets before the first ball was bowled. Here's the formula, the evidence, and how to apply it yourself.
 </p>
 </div>

 <div className="pt-2">
 <Link
                    href="/underdog-formula-ipl-upsets/"
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

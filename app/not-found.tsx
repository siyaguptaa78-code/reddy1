import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "404 - Page Not Found | Reddy Anna Book",
 description: "The page you are looking for does not exist on Reddy Anna Book. Return to home to get your official ID.",
};

export default function NotFound() {
 return (
 <div className="min-h-[70vh] w-full flex flex-col items-center justify-center text-center px-4 py-16 bg-[#05080f] select-none">
 <div className="flex flex-col items-center gap-6 max-w-lg">
 {/* Animated Icon */}
 <div className="relative w-24 h-24 flex items-center justify-center bg-[#F0901A]/10 border border-[#F0901A]/30 rounded-3xl animate-bounce duration-1000">
 <span className="text-5xl">🏏</span>
 <span className="absolute -top-2 -right-2 text-2xl animate-pulse">❓</span>
 </div>

 {/* 404 text */}
 <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD13F] to-[#F0901A] tracking-wider leading-none">
 404
 </h1>

 {/* Heading */}
 <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
 Oops! Out of Bounds!
 </h2>

 {/* Subtitle */}
 <p className="text-gray-400 text-sm md:text-base leading-relaxed">
 The page you are looking for has been clean-bowled or doesn't exist anymore. Let's get you back on the pitch and back in the game!
 </p>

 {/* Back to Home Button */}
 <div className="mt-4">
 <Link
            href="/"
 className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-black text-black bg-gradient-to-r from-[#FFD13F] to-[#F0901A] rounded-2xl hover:from-[#F0901A] hover:to-[#FFD13F] transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-[#F0901A]/20 hover:scale-[1.03] text-sm md:text-base"
 >
 🏠 Return to Pavilion (Home)
 </Link>
 </div>
 </div>
 </div>
 );
}

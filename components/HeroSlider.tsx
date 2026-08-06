"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CONFIG } from "@/utils/config";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop",
    title: "The Most Trusted Betting Exchange",
    subtitle: "Join Reddy Anna for quick ID creation, competitive odds, and fast withdrawals. We've been serving bettors since 2010.",
    cta: "Get Started Now"
  },
  {
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop",
    title: "Live Casino & Card Games",
    subtitle: "Play Teen Patti, Andar Bahar, Roulette, and Poker. Enjoy safe and secure gaming around the clock.",
    cta: "Start Playing"
  },
  {
    image: "https://images.unsplash.com/photo-1574629810360-7efbb6b490f0?q=80&w=2824&auto=format&fit=crop",
    title: "Bet on Global Sports",
    subtitle: "Follow the action in Football, Kabaddi, Tennis, and more. Trust our secure platform for your daily bets.",
    cta: "Get Your ID"
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50 group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-100"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
            }}
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/80 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12 z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold text-sm mb-6 animate-fade-in backdrop-blur-sm">
              <span>Trusted since 2010</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight max-w-4xl drop-shadow-lg transition-transform duration-700 translate-y-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                {slide.title.split(' ')[0]} {slide.title.split(' ')[1]}
              </span>{" "}
              {slide.title.split(' ').slice(2).join(' ')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed drop-shadow-md font-medium">
              {slide.subtitle}
            </p>
            
            <a 
              href="https://wa.me/916026703858" 
              className="group/btn relative px-12 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black rounded-full text-xl md:text-2xl shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:shadow-[0_0_80px_rgba(245,158,11,0.8)] transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-pulse"
            >
              <span className="relative z-10 flex items-center gap-3">
                {slide.cta} <span className="group-hover/btn:translate-x-2 transition-transform inline-block">→</span>
              </span>
              <span className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-full scale-0 group-hover/btn:scale-100 transition-transform duration-700 ease-out origin-center opacity-0 group-hover/btn:opacity-100 mix-blend-overlay pointer-events-none"></span>
            </a>
          </div>
        </div>
      ))}
      
      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx 
                ? "w-10 h-2.5 bg-gradient-to-r from-amber-400 to-orange-500" 
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 text-white/50 hover:bg-black/60 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 text-white/50 hover:bg-black/60 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>
  );
};

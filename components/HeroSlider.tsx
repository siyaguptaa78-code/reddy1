"use client";

import React, { useState, useEffect } from "react";
import { CONFIG } from "@/utils/config";

const slides = [
 {
 image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop",
 title: "The Most Trusted Exchange",
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
 }, 6000); // Slide every 6 seconds
 return () => clearInterval(timer);
 }, []);

 return (
 <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
 {slides.map((slide, index) => (
 <div
 key={index}
 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
 index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
 }`}
 >
 {/* Background Image */}
 <div
 className="absolute inset-0 bg-cover bg-center transition-transform duration-[15000ms] ease-linear scale-100"
 style={{ 
 backgroundImage: `url(${slide.image})`,
 transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
 }}
 />
 
 {/* Overlay Gradient */}
 <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/70 to-[#05080f]/30" />
 
 {/* Content */}
 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 z-20">
 <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs md:text-sm mb-6 md:mb-8 backdrop-blur-md transition-all duration-700 delay-100 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
 <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
 <span>Trusted Since 2010</span>
 </div>
 
 {index === 0 ? (
 <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight leading-[1.1] max-w-4xl drop-shadow-xl transition-all duration-700 delay-200 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500">
 {slide.title.split(' ')[0]} {slide.title.split(' ')[1]}
 </span>{" "}
 {slide.title.split(' ').slice(2).join(' ')}
 </h1>
 ) : (
 <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight leading-[1.1] max-w-4xl drop-shadow-xl transition-all duration-700 delay-200 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500">
 {slide.title.split(' ')[0]} {slide.title.split(' ')[1]}
 </span>{" "}
 {slide.title.split(' ').slice(2).join(' ')}
 </h2>
 )}
 
 <p className={`text-base md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium transition-all duration-700 delay-300 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
 {slide.subtitle}
 </p>
 
 <div className={`transition-all duration-700 delay-500 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
 <a 
                href={CONFIG.whatsappUrl} 
 className="group/btn relative inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black rounded-full text-lg md:text-xl shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_80px_rgba(245,158,11,0.7)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
 >
 <span className="relative z-10 flex items-center gap-3">
 {slide.cta} 
 <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
 </svg>
 </span>
 <span className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full scale-0 group-hover/btn:scale-100 transition-transform duration-500 ease-out origin-center opacity-0 group-hover/btn:opacity-100 mix-blend-overlay pointer-events-none"></span>
 </a>
 </div>
 </div>
 </div>
 ))}
 
 {/* Slider Indicators */}
 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
 {slides.map((_, idx) => (
 <button
 key={idx}
 onClick={() => setCurrentSlide(idx)}
 className={`transition-all duration-500 rounded-full ${
 currentSlide === idx 
 ? "w-8 h-2 bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" 
 : "w-2 h-2 bg-white/40 hover:bg-white/70"
 }`}
 aria-label={`Go to slide ${idx + 1}`}
 />
 ))}
 </div>
 
 {/* Navigation Arrows */}
 <button 
 onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
 className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/40 border border-white/10 text-white/70 hover:bg-amber-500 hover:text-black hover:border-amber-500 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 hidden md:block"
 aria-label="Previous slide"
 >
 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
 </svg>
 </button>
 <button 
 onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
 className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/40 border border-white/10 text-white/70 hover:bg-amber-500 hover:text-black hover:border-amber-500 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block"
 aria-label="Next slide"
 >
 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
 </svg>
 </button>
 </div>
 );
};

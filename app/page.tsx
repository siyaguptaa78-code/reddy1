"use client";

import React from "react";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { CONFIG } from "@/utils/config";

export default function Home() {
 return (
 <div className="bg-[#05080f] text-gray-200 font-sans selection:bg-amber-500/30">
 <div className="w-full mx-auto pb-16">
 {/* HERO SECTION */}
 <section className="relative overflow-hidden pt-6 pb-16 px-4 md:px-6">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
 <div className="max-w-7xl mx-auto relative z-10">
 <HeroSlider />
 </div>
 </section>

 {/* TRUST / KEY PLATFORM BENEFITS */}
 <section className="py-12 border-y border-white/5 bg-[#0a0f1c]">
 <div className="max-w-7xl mx-auto px-4 md:px-6">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
 {[
 { label: "Since 2010", sub: "14+ Years Active", icon: "🏆" },
 { label: "Support", sub: "24/7 Availability", icon: "💬" },
 { label: "ID Delivery", sub: "< 60s Setup", icon: "⚡" },
 { label: "Min Deposit", sub: "₹100 Only", icon: "💳" },
 { label: "Withdrawals", sub: "2-4 Hours", icon: "🏦" },
 { label: "Sports", sub: "Cricket, Football+", icon: "🏏" }
 ].map((item, i) => (
 <div key={i} className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300">
 <span className="text-3xl mb-3 drop-shadow-md">{item.icon}</span>
 <div className="text-amber-400 font-bold text-lg">{item.label}</div>
 <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">{item.sub}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FEATURED SPORTS CATEGORIES */}
 <section className="py-20 px-4 md:px-6">
 <div className="max-w-7xl mx-auto">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
 <div>
 <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Premium Sports Exchange</h2>
 <p className="text-gray-400 max-w-2xl text-lg">Bet on your favorite sports with the most competitive odds in the market. We cover all major international and domestic leagues.</p>
 </div>
              <a href={CONFIG.whatsappUrl} className="inline-flex px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500 hover:text-black hover:border-amber-500 font-bold transition-all items-center gap-2 flex-shrink-0">
 All Sports <span className="text-xl">→</span>
 </a>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
 {/* Featured Large */}
              <Link href="/reddy-anna-sports/cricket" className="md:col-span-8 group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] md:aspect-auto h-full min-h-[400px]">
                <img src={CONFIG.images.cricketCardBg} alt="Cricket" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
 <div>
 <span className="inline-block px-3 py-1 bg-amber-500 text-black text-xs font-black rounded mb-4 tracking-widest uppercase shadow-lg">Featured</span>
 <h3 className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-md">Cricket </h3>
 <p className="text-gray-300 font-medium text-lg drop-shadow-sm">IPL, T20 World Cup, BBL, PSL</p>
 </div>
 <div className="hidden md:flex w-14 h-14 rounded-full bg-white/20 backdrop-blur-md items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black transition-colors shadow-lg">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
 </div>
 </div>
 </Link>
 
 {/* Secondary Stack */}
 <div className="md:col-span-4 flex flex-col gap-6">
                <Link href="/reddy-anna-sports/football" className="group relative rounded-3xl overflow-hidden border border-white/10 flex-1 min-h-[200px]">
                  <img src={CONFIG.images.footballCardBg} alt="Football" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-6">
 <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">Football</h3>
 <p className="text-gray-300 text-sm font-medium drop-shadow-sm">EPL, La Liga, Champions League</p>
 </div>
 </Link>
                <Link href="/reddy-anna-sports/tennis" className="group relative rounded-3xl overflow-hidden border border-white/10 flex-1 min-h-[200px]">
                  <img src={CONFIG.images.tennisCardBg} alt="Tennis" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-6">
 <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">Tennis</h3>
 <p className="text-gray-300 text-sm font-medium drop-shadow-sm">Grand Slams, ATP, WTA</p>
 </div>
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* HOW TO GET STARTED */}
 <section className="py-24 bg-gradient-to-b from-[#0a0f1c] to-[#05080f] border-t border-white/5">
 <div className="max-w-7xl mx-auto px-4 md:px-6">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-5xl font-black text-white mb-6">How to Get Started</h2>
 <p className="text-gray-400 max-w-2xl mx-auto text-lg">Join the most trusted exchange platform in four simple steps.</p>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
 {/* Desktop connecting line */}
 <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 z-0"></div>
 
 {[
 { title: "Visit Site", desc: "Ensure you are on reddynow.com to avoid fakes." },
 { title: "WhatsApp Us", desc: "Click any WhatsApp button to chat with our 24/7 team." },
 { title: "Get Your ID", desc: "Share basic details and receive your ID in under 60 seconds." },
 { title: "Deposit & Play", desc: "Load funds securely via UPI or Bank Transfer and start." }
 ].map((step, idx) => (
 <div key={idx} className="relative z-10 flex flex-col items-center text-center">
 <div className="w-24 h-24 rounded-full bg-[#0a0f1c] border border-amber-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.15)] backdrop-blur-md">
 <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600">
 0{idx + 1}
 </span>
 </div>
 <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed px-2">{step.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* LIVE CASINO & GAMES */}
 <section className="py-20 px-4 md:px-6">
 <div className="max-w-7xl mx-auto">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
 <div>
 <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Live Casino & Card Games</h2>
 <p className="text-gray-400 max-w-2xl text-lg">Experience the thrill of a real casino from your device. Live dealers, instantaneous payouts.</p>
 </div>
              <Link href="/indian-card-games" className="inline-flex px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-white font-bold transition-all flex-shrink-0">
 View All Games
 </Link>
 </div>
 
 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
 {CONFIG.casinos.slice(0, 12).map((casino, idx) => (
                <Link key={idx} href="/indian-card-games" className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10 hover:border-amber-500/50 transition-colors shadow-lg">
                  <img src={casino.image} alt={casino.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
 <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
 <div className="absolute bottom-0 left-0 p-4 w-full text-center transform translate-y-1 group-hover:translate-y-0 transition-transform">
 <h3 className="text-sm md:text-base font-bold text-white drop-shadow-md">{casino.label}</h3>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* PAYMENT & MOBILE APP */}
 <section className="py-16 px-4 md:px-6">
 <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
 {/* Payments */}
 <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
 <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>
 <div className="relative z-10">
 <h2 className="text-3xl font-black text-white mb-4">Secure Payments</h2>
 <p className="text-gray-400 mb-10 max-w-sm text-lg">We process hundreds of transactions daily through secure Indian banking channels.</p>
 
 <div className="space-y-4">
 <div className="flex items-center justify-between p-5 bg-black/40 rounded-2xl border border-white/5 hover:bg-black/60 transition-colors">
 <div className="flex items-center gap-4">
 <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl shadow-inner border border-white/5">📱</div>
 <div>
 <div className="text-white font-bold text-lg">UPI Payments</div>
 <div className="text-gray-400 text-sm">GPay, PhonePe, Paytm</div>
 </div>
 </div>
 <div className="text-green-400 font-bold text-sm bg-green-400/10 px-4 py-1.5 rounded-full border border-green-400/20">Instant</div>
 </div>
 <div className="flex items-center justify-between p-5 bg-black/40 rounded-2xl border border-white/5 hover:bg-black/60 transition-colors">
 <div className="flex items-center gap-4">
 <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl shadow-inner border border-white/5">🏦</div>
 <div>
 <div className="text-white font-bold text-lg">Bank Transfer</div>
 <div className="text-gray-400 text-sm">IMPS, NEFT, RTGS</div>
 </div>
 </div>
 <div className="text-amber-400 font-bold text-sm bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">2-4 Hours</div>
 </div>
 </div>
 </div>
 </div>

 {/* Mobile App */}
 <div className="bg-gradient-to-br from-[#111827] to-[#0a0f1c] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
 <div className="relative z-10">
 <h2 className="text-3xl font-black text-white mb-4">Reddy Anna App</h2>
 <p className="text-gray-400 mb-8 max-w-sm text-lg">Experience faster , live score updates, and exclusive app-only features on your mobile device.</p>
 <ul className="space-y-4 mb-10">
 <li className="flex items-center gap-3 text-gray-300 font-medium">
 <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400 text-sm">✓</div> 
 One-tap deposits & withdrawals
 </li>
 <li className="flex items-center gap-3 text-gray-300 font-medium">
 <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400 text-sm">✓</div> 
 Real-time match notifications
 </li>
 <li className="flex items-center gap-3 text-gray-300 font-medium">
 <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400 text-sm">✓</div> 
 100% Secure login
 </li>
 </ul>
                <a href={CONFIG.whatsappUrl} className="inline-flex px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-gray-200 transition-colors shadow-xl items-center gap-2">
 Request App Link
 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
 </a>
 </div>
 <div className="absolute right-[-20%] bottom-[-20%] w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
 </div>
 </div>
 </section>

 {/* FAQ SECTION */}
 <section className="py-20 px-4 md:px-6 bg-[#0a0f1c] border-y border-white/5">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Frequently Asked Questions</h2>
 <p className="text-gray-400 text-lg">Everything you need to know about getting started.</p>
 </div>
 
 <div className="space-y-4">
 {CONFIG.faqs.map((faq, i) => (
 <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
 <summary className="p-6 md:p-8 font-bold text-white text-lg md:text-xl cursor-pointer select-none flex justify-between items-center hover:bg-white/10 transition-colors">
 {faq.question}
 <span className="text-amber-400 transition-transform duration-300 group-open:-rotate-180 flex-shrink-0 ml-4 bg-white/5 p-2 rounded-full">
 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
 </span>
 </summary>
 <div className="px-6 md:px-8 pb-8 pt-2 text-gray-400 text-base leading-relaxed border-t border-white/5 bg-black/20">
 {faq.answer}
 </div>
 </details>
 ))}
 </div>
 </div>
 </section>

 {/* FINAL CTA */}
 <section className="py-24 px-4 md:px-6">
 <div className="max-w-6xl mx-auto bg-gradient-to-br from-amber-900/40 via-[#0a0f1c] to-[#0a0f1c] border border-amber-500/20 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.1)]">
 <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop')] bg-cover opacity-[0.05] mix-blend-screen pointer-events-none"></div>
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent to-[#0a0f1c]/90 pointer-events-none"></div>
 
 <div className="relative z-10">
 <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">Start Winning Today</h2>
 <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-medium">
 Get your official Reddy Anna ID instantly. Join India's most trusted sports exchange and claim your welcome bonus.
 </p>
              <a href={CONFIG.whatsappUrl} className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black rounded-full text-xl md:text-2xl shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:shadow-[0_0_60px_rgba(245,158,11,0.7)] hover:-translate-y-2 transition-all duration-300 transform w-full md:w-auto">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.3-.3-.5-.3h-.6c-.2 0-.5.1-.7.3-.3.3-.8.8-.8 2s.8 2.3 1 2.5c.2.2 1.7 2.6 4 3.6 2 .8 2.7.9 3.5.8.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5.1L2 22l5.1-1.3C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.1c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.8-3.2-.2-.3C4.1 14.8 3.7 13.4 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z"/></svg>
 Chat on WhatsApp
 </a>
 </div>
 </div>
 </section>

 </div>
 </div>
 );
}

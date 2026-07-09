"use client";

import React from "react";
import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#05080f] text-gray-200 font-sans selection:bg-amber-500/30">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 ">
        <div className="w-full flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar - Desktop only */}
          <div className="hidden lg:block lg:w-1/4">
            <Sidebar />
          </div>

          {/* Main Content Pane */}
          <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-32 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#05080f] to-[#05080f]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold text-sm mb-8 animate-fade-in">
                  <span>🏆</span>
                  <span>IPL 2026 Match Update - Live & Upcoming</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                  Reddy Anna - India’s #1 <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    Official Cricket Betting ID
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Welcome to Reddy Anna, the official website of Reddy Anna India’s best betting ID provider, sports bookies, and live casino gaming service since 2010. Whether you are a newbie looking to place your first IPL bet or a high-roller searching for the fastest payout options, your journey begins with an authentic Reddy Anna Id.
                </p>
                <p className="text-md md:text-lg text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                  Millions of sports fans trust us to deliver on promises like instant ID creation, secure payments, competitive live odds, and 24/7 support. Everything you need is available at <strong className="text-amber-400">reddybookwinin.in</strong>
                </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://wa.me/yourwhatsapplink" className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-full text-lg shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Join Reddy Anna Book <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
             <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
                <div className="text-xl font-black text-amber-400 mb-1">14+ Years</div>
                <div className="text-xs font-semibold text-gray-400 uppercase">Since 2010</div>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
                <div className="text-xl font-black text-amber-400 mb-1">Sports</div>
                <div className="text-xs font-semibold text-gray-400 uppercase">Cricket, Football+</div>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
                <div className="text-xl font-black text-amber-400 mb-1">24/7</div>
                <div className="text-xs font-semibold text-gray-400 uppercase">Support</div>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
                <div className="text-xl font-black text-amber-400 mb-1">&lt; 60s</div>
                <div className="text-xs font-semibold text-gray-400 uppercase">ID Delivery Time</div>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
                <div className="text-xl font-black text-amber-400 mb-1">UPI & More</div>
                <div className="text-xs font-semibold text-gray-400 uppercase">Payment Methods</div>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
                <div className="text-xl font-black text-amber-400 mb-1">₹100</div>
                <div className="text-xs font-semibold text-gray-400 uppercase">Min Deposit</div>
             </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 md:px-8 border-t border-white/5 bg-[#0a0f1c]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Is Reddy Anna? <br/><span className="text-amber-400 text-2xl md:text-3xl">A Complete Introduction</span></h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Reddy Anna is India’s #1 online cricket betting ID provider and sports betting exchange offering hassle-free live casino betting and fast payouts since 2010. With a presence in all significant states, Reddy Anna has acquired the reputation of a trusted, reliable and quick platform for millions of satisfied registered users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
               <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🏏</div>
               <h3 className="text-xl font-bold text-white mb-4">Live Cricket Betting</h3>
               <p className="text-gray-400">IPL, T20 World Cup, BBL, PSL, Test matches, etc.</p>
            </div>
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
               <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">⚽</div>
               <h3 className="text-xl font-bold text-white mb-4">Global Sports</h3>
               <p className="text-gray-400">Football, Kabaddi, Tennis, Basketball, International sports, etc.</p>
            </div>
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
               <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎰</div>
               <h3 className="text-xl font-bold text-white mb-4">Live Casino Games</h3>
               <p className="text-gray-400">Teen Patti, Andar Bahar, Roulette, Poker, Blackjack, etc.</p>
            </div>
          </div>
          <div className="text-center">
             <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 px-6 py-4 rounded-xl mb-8">
               <span className="text-xl">⚡</span>
               <p className="text-lg text-amber-400 font-semibold m-0">Instant deposits via UPI and quick withdrawal to the bank account.</p>
             </div>
             <div>
               <a href="#" className="inline-block px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all">
                 Learn more about Reddy Anna Book
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Reddy Anna */}
      <section className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Why Choose Reddy Anna?</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "1. Trust & Transparency since 2010", desc: "Reddy Anna has served hundreds of thousands of sports fans betting on cricket matches since 2010. With the excellent reputation of never delaying withdrawals or manipulating account balances, you can trust us to deliver on promises.", icon: "🛡️" },
                { title: "2. Fastest ID Creation (<60 seconds)", desc: "Creating a Reddy Anna betting ID is as simple as it can get. You can contact our official WhatsApp number and provide basic information about the preferred username and password. In under 60 seconds, you get a verified Reddy Anna Book ID.", icon: "⚡" },
                { title: "3. Competitive Odds", desc: "We offer the best odds in the business for live betting on cricket matches. All major events like T20 and ODI World Cup, IPL, BBL, PSL, Test series, etc., are available with ball-by-ball, match winner, and other exciting options. Similar sportsbook options are available for football, kabaddi, tennis, basketball, international sports, etc.", icon: "📈" },
                { title: "4. 24/7 Human Support", desc: "When you have a query about deposits with UPI or withdrawals to the bank account, you don’t have to deal with bots or automated responses. Our support team is available 24/7 via WhatsApp and responds in under 2 minutes.", icon: "💬" }
              ].map((feature, i) => (
                <div key={i} className="relative group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                   <div className="absolute -top-6 left-6 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 text-black text-2xl">
                     {feature.icon}
                   </div>
                   <h3 className="text-xl font-bold text-white mt-6 mb-4 leading-tight">{feature.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Payment Ecosystem */}
      <section className="py-20 px-4 md:px-8 border-t border-white/5 bg-[#0a0f1c]">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">💳 India-First Cricket Betting Ecosystem</h2>
           </div>
           <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-black/40 border-b border-white/10">
                   <th className="p-6 md:p-8 text-amber-400 font-semibold text-lg">Payment Method</th>
                   <th className="p-6 md:p-8 text-amber-400 font-semibold text-lg">Processing Time</th>
                 </tr>
               </thead>
               <tbody className="text-gray-300">
                 <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                   <td className="p-6 md:p-8 font-medium text-lg flex items-center gap-3">
                     <span className="text-2xl">🏦</span> UPI (PhonePe, GPay, BHIM)
                   </td>
                   <td className="p-6 md:p-8 text-green-400 font-semibold">Instant deposit</td>
                 </tr>
                 <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                   <td className="p-6 md:p-8 font-medium text-lg flex items-center gap-3">
                     <span className="text-2xl">📱</span> Paytm Wallet & Net Banking
                   </td>
                   <td className="p-6 md:p-8 text-green-400 font-semibold">Instant deposit</td>
                 </tr>
                 <tr className="hover:bg-white/5 transition-colors">
                   <td className="p-6 md:p-8 font-medium text-lg flex items-center gap-3">
                     <span className="text-2xl">💳</span> Withdrawal to any bank
                   </td>
                   <td className="p-6 md:p-8 text-amber-400 font-semibold">Within 2-4 hours</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-20 px-4 md:px-8 border-t border-white/5 relative">
         {/* Background Decoration */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
         
         <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">How to Get a Reddy Anna ID</h2>
            <p className="text-xl text-amber-400 font-semibold text-center mb-16">Step-by-Step Guide in 4 Easy Steps</p>
            
            <div className="grid md:grid-cols-4 gap-6">
               {[
                 { step: "1", title: "Website", desc: "Go to reddybookwinin.in - only trusted users can get an official ID from our verified domain." },
                 { step: "2", title: "WhatsApp Contact", desc: "Click the WhatsApp button on the website and chat with our agents. You will get a response in under 5 seconds." },
                 { step: "3", title: "Basic Info & Redemption", desc: "Provide your preferred user name and secure password. Then, wait under 60 seconds for a confirmed Reddy Anna Book ID." },
                 { step: "4", title: "Deposit & Betting", desc: "Make a deposit via UPI or GPay and start betting on IPL matches right away. ⚡" }
               ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-amber-500/40 transition-colors shadow-xl">
                     <div className="text-9xl font-black text-white/[0.03] absolute -bottom-8 -right-4 group-hover:scale-110 group-hover:text-amber-500/10 transition-all duration-500">{item.step}</div>
                     <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-black font-black text-2xl mb-8 shadow-lg shadow-amber-500/30">
                        {item.step}
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                     <p className="text-gray-400 text-base relative z-10 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-[0_0_40px_rgba(245,158,11,0.1)]">
               <div className="text-5xl shrink-0">💡</div>
               <div>
                 <h4 className="font-bold text-amber-400 mb-3 text-xl">PRO TIP: Request a FREE Reddy Anna Demo ID</h4>
                 <p className="text-gray-300 leading-relaxed text-lg mb-0">If you are a newbie and want to learn how to bet, request a FREE Reddy Anna Demo ID. Just let our WhatsApp agent know, and you will get a trial ID to start placing test bets. You can also ask for more info about our cricket betting odds and payment methods.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 px-4 md:px-8 border-t border-white/5 bg-[#0a0f1c]">
         <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Reddy Anna Bonuses & Promotions <br/><span className="text-amber-400 mt-2 inline-block">Claim Now</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               {[
                 { title: "Welcome Bonus", desc: "Get extra money on your first deposit with our Welcome Bonus.", icon: "🎁" },
                 { title: "Daily Login Bonus", desc: "Login on any special day or matchday and get surprise bonuses and free bets.", icon: "📅" },
                 { title: "Referral Bonus", desc: "Invite a friend and earn extra cash on their first deposit.", icon: "🤝" },
                 { title: "Seasonal Promotions", desc: "Claim special cashbacks and reload offers during festive seasons.", icon: "🎊" }
               ].map((bonus, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
                    <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform inline-block">{bonus.icon}</div>
                    <h3 className="text-xl font-bold text-amber-400 mb-4">{bonus.title}</h3>
                    <p className="text-gray-400">{bonus.desc}</p>
                 </div>
               ))}
            </div>
            <button className="px-12 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black rounded-full text-xl hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all hover:-translate-y-1">
               Get Bonus
            </button>
         </div>
      </section>

      {/* App & Exchange */}
      <section className="py-20 px-4 md:px-8 border-t border-white/5 overflow-hidden">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* App Card */}
            <div className="bg-gradient-to-b from-[#111827] to-[#0a0f1c] p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative flex flex-col justify-between">
               <div className="absolute top-0 right-0 p-8 text-8xl opacity-5 pointer-events-none">📱</div>
               <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reddy Anna App <br/><span className="text-amber-400">Bet Smart on Mobile</span></h2>
                 <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                   The Reddy Anna betting app is the fastest and most intuitive way to place bets on IPL matches, football, kabaddi, cricket betting odds, and live casino games. You can download the apk file and install the app on your mobile device.
                 </p>
                 <h3 className="text-xl font-semibold text-white mb-6">⚡ What’s special about the Reddy Anna betting app?</h3>
                 <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-4 text-gray-300 bg-white/5 p-4 rounded-xl">
                      <span className="text-amber-400 text-xl">✓</span> 
                      <span>Instant deposits and withdrawals directly to your mobile wallet.</span>
                    </li>
                    <li className="flex items-start gap-4 text-gray-300 bg-white/5 p-4 rounded-xl">
                      <span className="text-amber-400 text-xl">✓</span> 
                      <span>Live ball-by-ball updates, scores, and streaming.</span>
                    </li>
                    <li className="flex items-start gap-4 text-gray-300 bg-white/5 p-4 rounded-xl">
                      <span className="text-amber-400 text-xl">✓</span> 
                      <span>Biometric face/fingerprint lock for extra security.</span>
                    </li>
                    <li className="flex items-start gap-4 text-gray-300 bg-white/5 p-4 rounded-xl">
                      <span className="text-amber-400 text-xl">✓</span> 
                      <span>Works well on 3G, 4G, and 5G networks.</span>
                    </li>
                 </ul>
               </div>
               
               <div>
                 <div className="bg-amber-500/10 p-6 rounded-2xl border border-amber-500/20 mb-8">
                    <h4 className="font-bold text-amber-400 mb-3 flex items-center gap-2 text-lg">📥 How to download the Reddy Anna apk file?</h4>
                    <p className="text-base text-gray-300 leading-relaxed">Andriod users can directly install the apk file from reddybookwinin.in . iPhone users can add the website to their Safari homescreen. Make sure to always download from official domains only.</p>
                 </div>
                 <button className="w-full px-8 py-5 bg-white hover:bg-gray-200 text-black font-bold text-lg rounded-2xl transition-colors shadow-lg">
                    Download App
                 </button>
               </div>
            </div>
            
            {/* Exchange Card */}
            <div className="bg-gradient-to-br from-amber-900/40 via-[#0a0f1c] to-[#0a0f1c] border border-amber-500/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 text-8xl opacity-5 pointer-events-none">🔄</div>
               <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reddy Anna Exchange <br/><span className="text-amber-400">Bet Like A Pro</span></h2>
                 <p className="text-gray-300 mb-8 leading-relaxed text-xl">
                   If you want to level up your betting game, Reddy Anna Exchange is a must. Trade on cricket matches with other fans and get better odds by laying and backing the outcome. You can also use the Reddy Anna Sportsbook for fixed-odds betting on IPL, football, tennis, kabaddi, etc.
                 </p>
                 
                 <div className="p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl mb-10 shadow-inner">
                   <div className="text-4xl mb-4">💎</div>
                   <p className="text-white text-lg leading-relaxed">Choose between <strong className="text-amber-400">Reddy Anna Tiger Exchange</strong> and <strong className="text-amber-400">Sky Exchange</strong> and enjoy enhanced liquidity.</p>
                 </div>
               </div>

               <button className="w-full py-6 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-xl rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:shadow-[0_0_60px_rgba(245,158,11,0.4)] transition-all hover:-translate-y-1">
                  Join Reddy Anna Book
               </button>
            </div>
         </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 md:px-8 border-t border-white/5 bg-[#0a0f1c]">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">⚖️ Comparison Table</h2>
            <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl">
               <table className="w-full text-left border-collapse min-w-[600px] bg-white/5">
                  <thead>
                     <tr className="bg-black/60">
                        <th className="p-8 text-gray-400 font-semibold border-b border-white/10 w-1/3 text-lg">Features</th>
                        <th className="p-8 text-amber-400 font-bold border-b border-white/10 text-2xl w-1/3 border-x border-amber-500/20 bg-amber-500/5">reddybookwinin.in</th>
                        <th className="p-8 text-gray-400 font-semibold border-b border-white/10 w-1/3 text-lg">Competitors</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-200">
                     {[
                       ["Years of Operation", "14+ years (since 2010)", "2-5 years"],
                       ["ID Delivery", "under 60 seconds", "minutes to hours"],
                       ["Withdrawal Speed", "2-4 hours", "24/7 or 72 hrs"],
                       ["Support", "24/7 WhatsApp", "Email / limited hours"],
                       ["Free Demo ID", "Yes - free of charge", "Rarely available"]
                     ].map((row, idx) => (
                       <tr key={idx} className="hover:bg-white/10 transition-colors">
                         <td className="p-8 border-b border-white/5 font-medium text-lg text-gray-400">{row[0]}</td>
                         <td className="p-8 border-b border-white/5 font-bold text-white text-lg border-x border-amber-500/20 bg-amber-500/5">{row[1]}</td>
                         <td className="p-8 border-b border-white/5 text-gray-500 text-lg">{row[2]}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Deposit & Withdraw + FAQ */}
      <section className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
           {/* How to... */}
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">How to Deposit and Withdraw on Reddy Anna</h2>
              
              <div className="mb-8 p-8 md:p-10 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl">
                 <h3 className="text-2xl font-bold text-amber-400 mb-8 flex items-center gap-4">
                   <span className="text-4xl">📥</span> Making a Deposit
                 </h3>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5">1</div>
                       <p className="text-gray-300 text-lg">Go to the Wallet or Deposit section.</p>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5">2</div>
                       <p className="text-gray-300 text-lg">Select your preferred mode of payment (UPI, GPay, Paytm).</p>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5">3</div>
                       <p className="text-gray-300 text-lg">Enter the amount you want to deposit (minimum ₹100).</p>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5">4</div>
                       <p className="text-gray-300 text-lg">Complete the transaction.</p>
                    </div>
                 </div>
              </div>
              
              <div className="p-8 md:p-10 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl">
                 <h3 className="text-2xl font-bold text-amber-400 mb-8 flex items-center gap-4">
                   <span className="text-4xl">📤</span> Making a Withdrawal
                 </h3>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5">1</div>
                       <p className="text-gray-300 text-lg">Go to the Withdrawal section.</p>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5">2</div>
                       <p className="text-gray-300 text-lg">Enter the amount you want to withdraw.</p>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5">3</div>
                       <p className="text-gray-300 text-lg">Select your desired withdrawal method (bank account, UPI, etc.).</p>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5">4</div>
                       <p className="text-gray-300 text-lg">Confirm. The amount will be transferred to your account within 2-4 hours.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* FAQ */}
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-4">
                 <span className="text-4xl">❓</span> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "What is a Reddy Anna ID?", a: "Reddy Anna ID is your personal betting account that lets you enjoy IPL live betting, sports betting, and live casino games. It is created instantly via WhatsApp and can be used to make deposits and withdrawals using your wallet." },
                   { q: "How do I create a Reddy Anna ID?", a: "Simply contact us on WhatsApp and follow the 3 easy steps. You'll get your verified ID in under 60 seconds." },
                   { q: "Is Reddy Anna safe and legitimate?", a: "Yes, we are India's #1 trusted platform since 2010, maintaining 100% transparency and secure transactions." },
                   { q: "What payment methods does Reddy Anna accept?", a: "We accept UPI (PhonePe, GPay, BHIM), Paytm Wallet, Net Banking, and direct bank transfers." },
                   { q: "Can I bet on IPL using Reddy Anna?", a: "Absolutely! IPL is our biggest market and we offer the best odds, live ball-by-ball betting, and match winner options." },
                   { q: "Does Reddy Anna offer casino games?", a: "Yes, we offer live casino games like Teen Patti, Andar Bahar, Roulette, Poker, Blackjack, and more." },
                   { q: "How can I contact Reddy Anna support?", a: "Our support team is available 24/7 via WhatsApp and Telegram, responding in under 2 minutes." },
                   { q: "What is a Reddy Anna Demo ID?", a: "A demo ID is a free account given to newbies to practice placing bets and understand the platform without risking real money." }
                 ].map((faq, i) => (
                   <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                     <summary className="p-6 font-bold text-white text-lg cursor-pointer select-none flex justify-between items-center hover:bg-white/10 transition-colors">
                        {faq.q}
                        <span className="text-amber-400 group-open:rotate-180 transition-transform text-xl">▼</span>
                     </summary>
                     <div className="p-6 pt-0 text-gray-300 text-lg leading-relaxed border-t border-white/5 bg-black/20">
                        {faq.a}
                     </div>
                   </details>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 md:px-8 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/20 via-[#05080f] to-[#05080f] text-center border-t border-white/5 relative overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">Ready to Join the Millions of Happy Customers?</h2>
            <div className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem] mb-12 backdrop-blur-md shadow-2xl">
               <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                 Visit <strong className="text-amber-400 text-3xl mx-2">reddybookwinin.in</strong> <br className="hidden md:block" /> Click the WhatsApp button to get your ID in 60 seconds. New users can claim their FREE demo ID instantly. Withdrawals are processed within 2-4 hours guaranteed! 
               </p>
               <p className="text-xl text-gray-400 font-semibold mb-0">Get your verified Reddy Anna ID now and start betting on IPL, football, etc.</p>
            </div>
            <a href="https://wa.me/yourwhatsapplink" className="inline-block px-12 py-6 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-2xl rounded-full hover:scale-110 transition-transform shadow-[0_0_60px_rgba(245,158,11,0.4)] hover:shadow-[0_0_100px_rgba(245,158,11,0.6)]">
               Get Verified ID Now
            </a>
         </div>
      </section>

          </div>
        </div>
      </div>
    </div>
  );
}

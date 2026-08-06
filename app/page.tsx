"use client";

import React from "react";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="bg-[#05080f] text-gray-200 font-sans selection:bg-amber-500/30">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 ">
        <div className="w-full flex flex-col gap-8 text-left">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-10 pb-16 px-4 md:px-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
              <HeroSlider />
            </section>

            {/* Feature Cards Section */}
            <section className="relative">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors flex flex-col justify-center items-center text-center">
                    <div className="text-xl font-black text-amber-400 mb-1">14+ Years</div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">Since 2010</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors flex flex-col justify-center items-center text-center">
                    <div className="text-xl font-black text-amber-400 mb-1">Sports</div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">Cricket, Football+</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors flex flex-col justify-center items-center text-center">
                    <div className="text-xl font-black text-amber-400 mb-1">24/7</div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">Support</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors flex flex-col justify-center items-center text-center">
                    <div className="text-xl font-black text-amber-400 mb-1">&lt; 60s</div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">ID Delivery Time</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors flex flex-col justify-center items-center text-center">
                    <div className="text-xl font-black text-amber-400 mb-1">UPI & More</div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">Payment Methods</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/50 transition-colors flex flex-col justify-center items-center text-center">
                    <div className="text-xl font-black text-amber-400 mb-1">₹100</div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">Min Deposit</div>
                 </div>
              </div>
            </section>

      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8 border-t border-white/5 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About Reddy Anna</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                We provide official cricket betting IDs and a sports exchange platform. With quick deposits, live casino games, and fast withdrawals, we've been a trusted choice for Indian bettors since 2010.
              </p>
              <a href="#" className="inline-block px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all">
                Read More
              </a>
            </div>
            <div className="flex-1 relative w-full">
               <div className="aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop" alt="Cricket Stadium" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-[#0a0f1c] p-4 rounded-xl border border-white/10 hidden md:block">
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 text-xl font-bold">14+</div>
                     <div>
                        <div className="text-white font-bold">Years Active</div>
                        <div className="text-gray-400 text-xs">Since 2010</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-colors">
               <h3 className="text-xl font-bold text-white mb-3">Cricket Betting</h3>
               <p className="text-gray-400 text-sm">Bet on IPL, T20 World Cup, BBL, PSL, Test matches, and more.</p>
            </div>
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-colors">
               <h3 className="text-xl font-bold text-white mb-3">Other Sports</h3>
               <p className="text-gray-400 text-sm">Action on Football, Tennis, Basketball, and international tournaments.</p>
            </div>
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-colors">
               <h3 className="text-xl font-bold text-white mb-3">Live Casino</h3>
               <p className="text-gray-400 text-sm">Play Teen Patti, Andar Bahar, Roulette, Poker, and Blackjack live.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Reddy Anna */}
      <section className="py-16 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Why Choose Us?</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Trusted since 2010", desc: "Operating for over a decade with a clean track record of timely withdrawals and fair play." },
                { title: "Fast ID Creation", desc: "Get your betting ID in under a minute by texting our official WhatsApp number." },
                { title: "Great Odds", desc: "Competitive odds on cricket, football, tennis, and more on our exchange." },
                { title: "24/7 Support", desc: "Real human support available around the clock via WhatsApp to help with deposits and withdrawals." }
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                   <h3 className="text-lg font-bold text-white mb-3 leading-tight">{feature.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Payment Ecosystem */}
      <section className="py-16 px-4 md:px-8 border-t border-white/5 bg-[#0a0f1c]">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-white mb-4">Payment Methods</h2>
           </div>
           <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-black/40 border-b border-white/10">
                   <th className="p-4 md:p-6 text-amber-400 font-semibold text-sm">Method</th>
                   <th className="p-4 md:p-6 text-amber-400 font-semibold text-sm">Time</th>
                 </tr>
               </thead>
               <tbody className="text-gray-300">
                 <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                   <td className="p-4 md:p-6 font-medium">UPI (PhonePe, GPay)</td>
                   <td className="p-4 md:p-6 text-green-400 font-medium">Instant</td>
                 </tr>
                 <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                   <td className="p-4 md:p-6 font-medium">Paytm Wallet & Net Banking</td>
                   <td className="p-4 md:p-6 text-green-400 font-medium">Instant</td>
                 </tr>
                 <tr className="hover:bg-white/5 transition-colors">
                   <td className="p-4 md:p-6 font-medium">Bank Withdrawal</td>
                   <td className="p-4 md:p-6 text-amber-400 font-medium">Within 2-4 hours</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-16 px-4 md:px-8 border-t border-white/5">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">How to Get Started</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
               {[
                 { step: "1", title: "Visit Site", desc: "Make sure you are on our official website to avoid fakes." },
                 { step: "2", title: "WhatsApp Us", desc: "Click the WhatsApp button to chat with our team." },
                 { step: "3", title: "Get Your ID", desc: "Share basic details and get your betting ID in a minute." },
                 { step: "4", title: "Deposit & Play", desc: "Load funds via UPI and start placing bets." }
               ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 relative">
                     <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-black font-bold text-xl mb-4">
                        {item.step}
                     </div>
                     <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 px-4 md:px-8 border-t border-white/5 bg-[#0a0f1c]">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-10">Bonuses & Offers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
               {[
                 { title: "Welcome Bonus", desc: "Get a bonus on your first deposit with us." },
                 { title: "Special Offers", desc: "Surprise bonuses on big match days." },
                 { title: "Refer a Friend", desc: "Earn when you invite your friends to play." },
                 { title: "Cashback", desc: "Claim cashbacks on your activity." }
               ].map((bonus, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-amber-400 mb-2">{bonus.title}</h3>
                    <p className="text-gray-400 text-sm">{bonus.desc}</p>
                 </div>
               ))}
            </div>
            <button className="px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors">
               View Promotions
            </button>
         </div>
      </section>

      {/* App & Exchange */}
      <section className="py-16 px-4 md:px-8 border-t border-white/5">
         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-[#111827] p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
               <div>
                 <h2 className="text-2xl font-bold text-white mb-4">Mobile App</h2>
                 <p className="text-gray-400 mb-6 text-sm">
                   The fastest way to place bets on IPL matches and live casino games. Download the APK file and install it on your device for instant access.
                 </p>
                 <ul className="space-y-3 mb-8 text-sm">
                    <li className="text-gray-300 flex gap-2"><span className="text-amber-400">✓</span> Instant deposits and withdrawals</li>
                    <li className="text-gray-300 flex gap-2"><span className="text-amber-400">✓</span> Live scores and updates</li>
                    <li className="text-gray-300 flex gap-2"><span className="text-amber-400">✓</span> Secure login</li>
                 </ul>
               </div>
               <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop" alt="Mobile Betting" className="w-full h-48 object-cover rounded-xl mb-6 border border-white/5" />
               <a href="/app-download" className="block text-center py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                 Download App
               </a>
            </div>
            
            <div className="bg-amber-900/20 border border-amber-500/20 rounded-2xl p-8 flex flex-col justify-between">
               <div>
                 <h2 className="text-2xl font-bold text-white mb-4">Sports Exchange</h2>
                 <p className="text-gray-300 mb-6 text-sm">
                   Trade on cricket matches and get better odds by laying and backing the outcome. Choose between our Tiger Exchange and Sky Exchange platforms.
                 </p>
                 <img src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2787&auto=format&fit=crop" alt="Sports Match" className="w-full h-48 object-cover rounded-xl mb-6 border border-amber-500/10" />
               </div>
               <a href="https://wa.me/916026703858" className="block text-center py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors">
                  Join Exchange
               </a>
            </div>
         </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 md:px-8 border-t border-white/5 bg-[#0a0f1c]">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Why We Stand Out</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
               <table className="w-full text-left border-collapse min-w-[600px] bg-white/5">
                  <thead>
                     <tr className="bg-black/40">
                        <th className="p-6 text-gray-400 font-semibold border-b border-white/10 w-1/3 text-sm">Feature</th>
                        <th className="p-6 text-amber-400 font-bold border-b border-white/10 text-base w-1/3 border-x border-amber-500/20 bg-amber-500/5">Reddy Anna</th>
                        <th className="p-6 text-gray-400 font-semibold border-b border-white/10 w-1/3 text-sm">Others</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-200">
                     {[
                       ["Years Active", "14+ years", "Varies"],
                       ["ID Setup", "Under 1 min", "Slow"],
                       ["Withdrawals", "2-4 hours", "24-48 hours"],
                       ["Support", "24/7 WhatsApp", "Email only"]
                     ].map((row, idx) => (
                       <tr key={idx} className="hover:bg-white/10 transition-colors">
                         <td className="p-6 border-b border-white/5 text-sm text-gray-400">{row[0]}</td>
                         <td className="p-6 border-b border-white/5 font-bold text-white text-sm border-x border-amber-500/20 bg-amber-500/5">{row[1]}</td>
                         <td className="p-6 border-b border-white/5 text-gray-500 text-sm">{row[2]}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Deposit & Withdraw + FAQ */}
      <section className="py-16 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
           {/* How to... */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-8">Payments</h2>
              
              <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <h3 className="text-lg font-bold text-amber-400 mb-6">Making a Deposit</h3>
                 <div className="space-y-4">
                    <div className="flex gap-3">
                       <div className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">1</div>
                       <p className="text-gray-300 text-sm">Message our team on WhatsApp.</p>
                    </div>
                    <div className="flex gap-3">
                       <div className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">2</div>
                       <p className="text-gray-300 text-sm">Choose your payment method (UPI/Bank).</p>
                    </div>
                    <div className="flex gap-3">
                       <div className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">3</div>
                       <p className="text-gray-300 text-sm">Transfer the amount and share the screenshot.</p>
                    </div>
                 </div>
              </div>
              
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <h3 className="text-lg font-bold text-amber-400 mb-6">Making a Withdrawal</h3>
                 <div className="space-y-4">
                    <div className="flex gap-3">
                       <div className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">1</div>
                       <p className="text-gray-300 text-sm">Send a withdrawal request on WhatsApp.</p>
                    </div>
                    <div className="flex gap-3">
                       <div className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">2</div>
                       <p className="text-gray-300 text-sm">Provide your bank or UPI details.</p>
                    </div>
                    <div className="flex gap-3">
                       <div className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">3</div>
                       <p className="text-gray-300 text-sm">Receive funds within 2-4 hours.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* FAQ */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-8">FAQ</h2>
              <div className="space-y-3">
                 {[
                   { q: "What is a betting ID?", a: "It is an account that allows you to access our betting platforms and place bets on various sports and casino games." },
                   { q: "Is my money safe?", a: "Yes, we have been operating securely since 2010 and process hundreds of transactions daily." },
                   { q: "How fast are withdrawals?", a: "Most withdrawals are processed within 2 to 4 hours." },
                   { q: "What is the minimum deposit?", a: "The minimum deposit to start is ₹100." }
                 ].map((faq, i) => (
                   <details key={i} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                     <summary className="p-4 font-bold text-white text-sm cursor-pointer select-none flex justify-between items-center hover:bg-white/10 transition-colors">
                        {faq.q}
                        <span className="text-amber-400 group-open:rotate-180 transition-transform">▼</span>
                     </summary>
                     <div className="p-4 pt-0 text-gray-400 text-sm border-t border-white/5 bg-black/20">
                        {faq.a}
                     </div>
                   </details>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 text-center border-t border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0a0f1c]/80 backdrop-blur-sm"></div>
         </div>
         <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start?</h2>
            <p className="text-lg text-gray-300 mb-10 font-medium">
              Join thousands of other players. Get your ID in a few minutes via WhatsApp.
            </p>
            <a href="https://wa.me/916026703858" className="inline-block px-10 py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-xl">
               Contact Us on WhatsApp
            </a>
         </div>
      </section>

        </div>
      </div>
    </div>
  );
}

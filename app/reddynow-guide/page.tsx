import React from "react";
import type { Metadata } from "next";
import { BlogCtaCard } from "@/components/BlogCtaCard";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ReddyNow: Complete Guide to the Platform, Sports, Features, Login and User Safety",
  description: "Comprehensive guide to ReddyNow covering online sports betting markets (cricket, football, tennis, kabaddi), live casino games, account ID login, payment safety, and fraud prevention.",
  alternates: { canonical: "https://reddynow.com/reddynow-guide/" },
  openGraph: {
    title: "ReddyNow: Complete Guide to the Platform, Sports, Features, Login and User Safety",
    description: "Comprehensive guide to ReddyNow covering online sports betting markets (cricket, football, tennis, kabaddi), live casino games, account ID login, payment safety, and fraud prevention.",
    url: "https://reddynow.com/reddynow-guide/",
    type: "article",
  },
};

const checks = [
  { check: "Official Domain", why: "Ensures you are on the verified platform (reddynow.com) and avoids clone or phishing sites." },
  { check: "Terms & Conditions", why: "Explains platform rules, account eligibility, and wager settlement guidelines." },
  { check: "Payment Transparency", why: "Clarifies available deposit/withdrawal methods (UPI, IMPS), minimums, and turnaround times." },
  { check: "Privacy Policy", why: "Details how user credentials and personal data are encrypted and protected." },
  { check: "24/7 Customer Support", why: "Provides an authentic, verifiable resolution route for account queries via official WhatsApp." },
  { check: "Legal Eligibility", why: "Ensures compliance with applicable local state and national gaming regulations." },
  { check: "Responsible Play", why: "Helps establish strict personal bankroll limits and avoid impulsive gambling behavior." },
];

const faqs = [
  {
    q: "What is ReddyNow?",
    a: "ReddyNow is an online platform providing comprehensive access to sports betting markets (cricket, football, tennis, kabaddi) alongside live casino categories, interactive table games, and instant exchange IDs under the Reddy Anna ecosystem."
  },
  {
    q: "What sports are available on ReddyNow?",
    a: "ReddyNow features prominent coverage of cricket (IPL, T20 leagues, ICC tournaments, Test matches), football (Premier League, Champions League, ISL), tennis (Grand Slams, ATP/WTA), kabaddi (Pro Kabaddi League), and other major global sporting fixtures."
  },
  {
    q: "Does ReddyNow offer casino and card games?",
    a: "Yes, the platform includes popular Indian favourites such as Teen Patti and Andar Bahar, live dealer Roulette, Blackjack, Baccarat, and virtual sports."
  },
  {
    q: "How do I verify the official ReddyNow website?",
    a: "The official platform operates at reddynow.com. Always verify the domain spelling, ensure active SSL (HTTPS) encryption, and only communicate with official WhatsApp helpline numbers provided directly on the website."
  },
  {
    q: "What should I check before making a deposit on ReddyNow?",
    a: "Always review supported payment channels (UPI, IMPS, Net Banking), minimum and maximum transaction limits, withdrawal settlement timeframes, and verification requirements before transferring funds."
  }
];

export default function ReddyNowGuidePage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      })}} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "ReddyNow: Complete Guide to the Platform, Sports, Features, Login and User Safety",
        "description": "Comprehensive guide to ReddyNow covering online sports betting markets, live casino games, account ID login, payment safety, and fraud prevention.",
        "author": {
          "@type": "Organization",
          "name": "Reddy Anna"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Reddy Anna"
        }
      })}} />
      
      <div className="w-full flex flex-col gap-8 text-left">
        <div className="w-full flex flex-col gap-8 text-left">
          
          {/* Main Title Banner */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#FFD13F] font-black text-2xl md:text-3xl lg:text-4xl tracking-wide leading-tight">
              ReddyNow: Complete Guide to the Platform, Sports, Features, Login and User Safety
            </h1>
            <p className="text-[#F0901A] font-bold text-xs md:text-sm">
              📅 Published: September 1, 2026 | Last updated: September 1, 2026
            </p>
            
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-4">
              <p>
                <strong>ReddyNow</strong> is an online platform associated with sports betting and gaming information, with its website covering areas such as cricket, football, tennis, kabaddi, live casino and other gaming categories. For people searching for ReddyNow online, understanding what the platform offers, how its account system works and what users should check before using any online gaming service is essential for a safe and informed experience.
              </p>
              <p>
                This guide provides a comprehensive overview of ReddyNow, its main features, sports categories, account access, payment considerations and important user-safety factors.
              </p>
              <p className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs md:text-sm font-medium">
                ⚠️ <strong>Important Notice:</strong> Online gaming and money-based gaming laws vary by jurisdiction and may change over time. Users should independently verify the laws applicable to their location before participating in any activity involving money.
              </p>
            </div>
          </section>

          {/* Section: What Is ReddyNow? */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide">
              What Is ReddyNow?
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                ReddyNow is an online gaming and sports-related platform whose website presents access to multiple sports markets and gaming categories. The platform highlights sports including cricket, football, tennis and kabaddi, alongside live casino and traditional card games.
              </p>
              <p>
                Its unified account system allows users to access live in-play sports odds, session fancy bets, and live casino dealer tables from a single verified ID.
              </p>
            </div>
          </section>

          {/* Section: Sports Coverage */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide">
              ReddyNow Sports Coverage & Live In-Play Markets
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Sports form the core of the ReddyNow experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>Cricket:</strong> Comprehensive coverage of IPL, ICC T20 World Cups, bilateral Test series, ODIs, and top domestic leagues.</li>
                <li><strong>Football:</strong> Premier League, UEFA Champions League, Indian Super League (ISL), and FIFA fixtures with live match stats.</li>
                <li><strong>Tennis:</strong> Wimbledon, US Open, French Open, Australian Open, and ATP/WTA international circuits.</li>
                <li><strong>Kabaddi & Other Sports:</strong> Pro Kabaddi League, Basketball (NBA), Badminton, Table Tennis, and Volleyball.</li>
              </ul>
              <p className="mt-2">
                Live in-play betting allows bettors to track fluctuating odds ball-by-ball. Always review match status, weather interruptions, and pitch reports before placing wagers.
              </p>
            </div>
          </section>

          {/* Section: Casino & Gaming */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide">
              Casino & Interactive Gaming Categories
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Beyond sports, ReddyNow provides a broad array of interactive casino entertainment:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>Traditional Indian Games:</strong> Teen Patti, Andar Bahar, and Jhandi Munda.</li>
                <li><strong>Table & Card Games:</strong> Poker, Blackjack, Baccarat, and European Roulette.</li>
                <li><strong>Live Dealer Streaming:</strong> Crystal-clear HD live dealers bringing authentic casino environments to your screen.</li>
                <li><strong>Virtual Sports:</strong> 24/7 automated sports simulations for instant action.</li>
              </ul>
            </div>
          </section>

          {/* Section: Account Access & Security */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide">
              Account Access, Login & Security Best Practices
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                When creating or accessing your ReddyNow ID, keep security at the forefront:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>Always verify the domain:</strong> Confirm you are on <code className="text-[#FFD13F]">reddynow.com</code> before logging in.</li>
                <li><strong>Use a strong, unique password:</strong> Never reuse passwords from email or personal banking.</li>
                <li><strong>Never share your OTP or PIN:</strong> Genuine support agents will never ask for your OTP, UPI PIN, or banking passwords.</li>
                <li><strong>Avoid unofficial agents:</strong> Beware of random messaging groups offering fake bonuses or fixed winnings.</li>
              </ul>
            </div>
          </section>

          {/* Section: Payment & Withdrawals */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide">
              Payment Methods & Fast UPI/Bank Withdrawals
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                ReddyNow supports seamless, rapid payment solutions for Indian bettors including UPI (GPay, PhonePe, Paytm), IMPS, and Net Banking:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>Instant Deposits:</strong> Funds reflect in your betting wallet in 1–3 minutes.</li>
                <li><strong>Priority Withdrawals:</strong> Payouts processed directly to your verified bank account in 5–15 minutes.</li>
                <li><strong>Zero Hidden Deductions:</strong> 100% transparent settlement on all winning bets.</li>
              </ul>
            </div>
          </section>

          {/* Evaluation Table */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide">
              ReddyNow: Evaluation Checklist for New Users
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 bg-black/40">
                    <th className="p-3 text-[#FFD13F] font-bold">Check Area</th>
                    <th className="p-3 text-[#FFD13F] font-bold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {checks.map((c, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-white">{c.check}</td>
                      <td className="p-3">{c.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Responsible Play */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide">
              Responsible Gaming & Financial Discipline
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Online betting should always remain a recreational activity. Follow disciplined money management:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Set a fixed weekly or monthly bankroll and never exceed it.</li>
                <li>Never bet with money earmarked for rent, food, bills, or medical needs.</li>
                <li>Never chase losses by doubling down on high-risk bets.</li>
                <li>Take regular breaks and seek help if gaming ever affects your well-being.</li>
              </ul>
            </div>
          </section>

          {/* Section: FAQs */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide">
              Frequently Asked Questions About ReddyNow
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-black/40 border border-gray-800 flex flex-col gap-1.5">
                  <h3 className="text-white font-bold text-sm md:text-base">{faq.q}</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA Card */}
          <BlogCtaCard />

        </div>
      </div>
    </div>
  );
}

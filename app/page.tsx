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

  {/* REDDY ANNA COMPREHENSIVE GUIDE & CRICKET INFORMATION */}
  <section className="py-16 px-4 md:px-6 bg-[#070b14] border-b border-white/5">
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Intro Header */}
      <div className="text-center space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase">
          Informational &amp; Research Resource
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Reddy Anna – Cricket Information, Live Match Access &amp; Cricket ID Guide
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Welcome to <span className="text-amber-400 font-semibold">ReddyNow.com</span>, an informational resource covering the Reddy Anna brand, cricket-related access, Cricket IDs, live match information, exchange platforms, and important considerations users should understand before choosing a provider.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-base leading-relaxed">
        <p>
          Cricket has become increasingly digital, with fans looking for convenient ways to follow matches, schedules, scores, teams, and live action. Along with this growth, terms such as Reddy Anna, Cricket ID, exchange platform, live match access, and cricket provider are now commonly used across online cricket communities.
        </p>
        <p>
          The purpose of <span className="text-white font-medium">ReddyNow.com</span> is to explain these terms clearly and provide useful information without promoting gambling or encouraging users to participate in betting activities.
        </p>
      </div>

      {/* Grid: What is Reddy Anna & How it gives access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-[#0c1322] to-[#070b14] border border-white/10 rounded-3xl p-7 md:p-8 space-y-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-2">
            🏏
          </div>
          <h2 className="text-2xl font-bold text-white">What Is Reddy Anna?</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Reddy Anna is a name commonly associated online with cricket-related platforms, Cricket IDs, and access to sports exchange services.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            The term can refer to a brand or network through which users may be introduced to different cricket and sports platforms. Because the name is used by multiple websites and providers online, users should always verify exactly which service or provider they are dealing with.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            A Cricket ID can have different meanings depending on the platform. In general, it may refer to account credentials or an access identity used to enter a sports-related platform.
          </p>
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-200/90 text-xs md:text-sm">
            <strong>Important Note:</strong> Reddy Anna is not the name of an official cricket governing body, cricket team, or tournament. It is a brand term used in the online sports-platform ecosystem. ReddyNow.com provides information about the terminology and ecosystem surrounding the brand and does not operate a betting exchange or guarantee any particular service.
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0c1322] to-[#070b14] border border-white/10 rounded-3xl p-7 md:p-8 space-y-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-2">
            📺
          </div>
          <h2 className="text-2xl font-bold text-white">How Does Reddy Anna Give Access to Live Matches?</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            The phrase “Reddy Anna live match access” is commonly used when people search for information about watching or following cricket matches through online sports platforms. In practical terms, access can depend on the particular platform, application, or service connected to a Cricket ID.
          </p>
          <div className="space-y-2 pt-2">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Typical Access Steps:</span>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm md:text-base">
              <li>A user identifies the relevant sports platform.</li>
              <li>A provider explains the type of account or Cricket ID available.</li>
              <li>The user receives login or access information where applicable.</li>
              <li>The platform provides whatever cricket-related features it supports.</li>
              <li>Match information, scores, or other features can then be accessed through that platform.</li>
            </ol>
          </div>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-3">
            However, the exact process is not universal. Different providers may use different systems, and some may offer services unrelated to legitimate live-streaming or official cricket coverage. For official match viewing, users should always check the broadcaster or streaming partner holding the relevant rights in their region.
          </p>
        </div>
      </div>

      {/* Cricket ID: Reliability & Popularity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-7 md:p-8 space-y-5">
          <h2 className="text-2xl font-bold text-white">Reddy Anna: Get a Reliable Cricket ID Without Hassle</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            The term Cricket ID is frequently used in searches relating to online cricket platforms. Before accepting any Cricket ID from a provider, it is worth understanding exactly what the ID provides.
          </p>
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">A responsible provider should explain:</span>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2"><span className="text-amber-400">●</span> What platform the ID belongs to</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">●</span> How the account is accessed</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">●</span> What features are available</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">●</span> Whether customer support is available</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">●</span> What happens if access stops working</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">●</span> What information is required during setup</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">●</span> Whether the platform has clear terms and conditions</li>
            </ul>
          </div>
          <p className="text-gray-400 text-xs md:text-sm italic">
            Users should avoid relying solely on claims such as “official,” “guaranteed,” “instant,” or “best.” The most useful question is always: What exactly am I getting, and who is responsible for supporting it?
          </p>
        </div>

        <div className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-7 md:p-8 space-y-5">
          <h2 className="text-2xl font-bold text-white">Why Is Reddy Anna Popular?</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            The Reddy Anna name has become familiar in online cricket-related searches because of the broader growth of digital sports platforms and Cricket ID-related services. Several factors contribute to this popularity:
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <strong className="text-amber-400 block">Cricket&apos;s large Indian audience:</strong>
              An enormous following in India creates strong demand for match schedules, scores, team news, and live match updates.
            </li>
            <li>
              <strong className="text-amber-400 block">Easy online mobile access:</strong>
              Smartphones are increasingly used to follow cricket on the move rather than relying solely on television broadcasts.
            </li>
            <li>
              <strong className="text-amber-400 block">Interest in major tournaments:</strong>
              High-profile international series, T20 leagues, and domestic competitions generate significant online search interest.
            </li>
            <li>
              <strong className="text-amber-400 block">Multiple sports platforms:</strong>
              Encountering multiple exchange platforms offering varying features increases the overall visibility of Cricket ID providers.
            </li>
          </ul>
          <p className="text-xs text-gray-400 border-t border-white/5 pt-3">
            Popularity should not automatically be interpreted as proof that a particular provider is reliable. Users should independently check the service and its terms.
          </p>
        </div>
      </div>

      {/* Characteristics of Exchange Platforms */}
      <div className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-8 space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Common Characteristics of Exchange Platforms</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Online sports exchange platforms can differ considerably, but users commonly encounter several shared features:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Account-Based Access</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Many platforms require users to have an account or ID before accessing certain sports tools or features.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Cricket Match Information</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Platforms organize information around current and upcoming matches, teams, tournaments, and schedules.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Live Match Sections</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Dedicated sections labelled as live matches or live sports; availability and nature vary between platforms.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Mobile Access</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Designed primarily for smartphones, allowing users to access match stats and data on the go.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Customer Support</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Provided through messaging applications, live chat systems, email, or other direct channels.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Different Sports</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Some platforms cover cricket alongside football, tennis, kabaddi, basketball, and other sports.</p>
          </div>
        </div>
      </div>

      {/* Upcoming Popular Cricket Events & Schedules */}
      <div className="bg-gradient-to-br from-[#0c1322] to-[#070b14] border border-amber-500/20 rounded-3xl p-8 md:p-10 space-y-8 shadow-xl">
        <div className="space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Fixtures &amp; Timetables</span>
          <h2 className="text-2xl md:text-4xl font-black text-white">Popular Cricket Events &amp; Match Schedules</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl">
            Cricket interest changes throughout the year, with international series, domestic tournaments, and major global competitions creating regular peaks in online searches. For Indian cricket audiences, the current upcoming international calendar includes several major fixtures.
          </p>
        </div>

        {/* Series 1: India vs West Indies 2026 */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-amber-400">India vs West Indies 2026</h3>
            <p className="text-gray-400 text-sm mt-1">
              The West Indies tour of India begins on 27 September 2026 with a three-match ODI series, followed by five T20Is across Trivandrum, Guwahati, New Chandigarh, Lucknow, Ranchi, Indore, Hyderabad, and Bengaluru. Shubman Gill captains the ODI side, while Shreyas Iyer leads the T20I squad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ODI Table */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 overflow-hidden">
              <h4 className="text-base font-bold text-white mb-3 flex items-center justify-between">
                <span>India vs West Indies ODI Schedule</span>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">ODIs</span>
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="py-2.5 px-3">Match</th>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Venue</th>
                      <th className="py-2.5 px-3">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-200">
                    <tr className="hover:bg-white/5">
                      <td className="py-2.5 px-3 font-semibold text-amber-400">1st ODI</td>
                      <td className="py-2.5 px-3">27 September 2026</td>
                      <td className="py-2.5 px-3">Trivandrum</td>
                      <td className="py-2.5 px-3">2:00 PM</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="py-2.5 px-3 font-semibold text-amber-400">2nd ODI</td>
                      <td className="py-2.5 px-3">30 September 2026</td>
                      <td className="py-2.5 px-3">Guwahati</td>
                      <td className="py-2.5 px-3">2:00 PM</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="py-2.5 px-3 font-semibold text-amber-400">3rd ODI</td>
                      <td className="py-2.5 px-3">3 October 2026</td>
                      <td className="py-2.5 px-3">New Chandigarh</td>
                      <td className="py-2.5 px-3">2:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* T20I Table */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 overflow-hidden">
              <h4 className="text-base font-bold text-white mb-3 flex items-center justify-between">
                <span>India vs West Indies T20I Schedule</span>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">T20Is</span>
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="py-2.5 px-3">Match</th>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Venue</th>
                      <th className="py-2.5 px-3">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-200">
                    <tr className="hover:bg-white/5">
                      <td className="py-2.5 px-3 font-semibold text-amber-400">1st T20I</td>
                      <td className="py-2.5 px-3">6 October 2026</td>
                      <td className="py-2.5 px-3">Lucknow</td>
                      <td className="py-2.5 px-3">7:00 PM</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="py-2.5 px-3 font-semibold text-amber-400">2nd T20I</td>
                      <td className="py-2.5 px-3">9 October 2026</td>
                      <td className="py-2.5 px-3">Ranchi</td>
                      <td className="py-2.5 px-3">7:00 PM</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="py-2.5 px-3 font-semibold text-amber-400">3rd T20I</td>
                      <td className="py-2.5 px-3">11 October 2026</td>
                      <td className="py-2.5 px-3">Indore</td>
                      <td className="py-2.5 px-3">7:00 PM</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="py-2.5 px-3 font-semibold text-amber-400">4th T20I</td>
                      <td className="py-2.5 px-3">14 October 2026</td>
                      <td className="py-2.5 px-3">Hyderabad</td>
                      <td className="py-2.5 px-3">7:00 PM</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="py-2.5 px-3 font-semibold text-amber-400">5th T20I</td>
                      <td className="py-2.5 px-3">17 October 2026</td>
                      <td className="py-2.5 px-3">Bengaluru</td>
                      <td className="py-2.5 px-3">7:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Other upcoming series */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
          <div className="bg-black/30 rounded-2xl p-5 border border-white/5 space-y-2">
            <h4 className="text-lg font-bold text-white">India vs Sri Lanka 2026</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              India&apos;s home season continues with Sri Lanka beginning 13 December 2026, featuring 3 ODIs &amp; 3 T20Is across Delhi, Bengaluru, Ahmedabad, Rajkot, Cuttack, and Pune.
            </p>
          </div>
          <div className="bg-black/30 rounded-2xl p-5 border border-white/5 space-y-2">
            <h4 className="text-lg font-bold text-white">India vs Zimbabwe 2027</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Zimbabwe will tour India for a three-match ODI series scheduled for 3, 6, and 9 January 2027 across Kolkata, Hyderabad, and Mumbai.
            </p>
          </div>
          <div className="bg-black/30 rounded-2xl p-5 border border-white/5 space-y-2">
            <h4 className="text-lg font-bold text-white">Border-Gavaskar Trophy 2027</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              A major highlight on India&apos;s Test calendar: a five-match Test series against Australia starting 21 January 2027 in Nagpur, followed by Chennai, Guwahati, Ranchi, and Ahmedabad.
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 italic">
          * Note: Schedules and fixtures can change. Readers should verify dates and venues with official cricket authorities (such as BCCI or ICC) before making travel or viewing plans.
        </p>
      </div>

      {/* Reddy Anna for T20 Cricket Matches 2026 */}
      <div className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-7 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Reddy Anna for T20 Cricket Matches 2026</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          T20 cricket continues to attract significant attention because of its shorter format and fast-changing match situations. In 2026, Indian cricket audiences have a busy T20 calendar, including the five-match India–West Indies T20I series scheduled for October (Lucknow, Ranchi, Indore, Hyderabad, Bengaluru).
        </p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Beyond international cricket, India&apos;s domestic calendar also includes several marquee T20 competitions. The BCCI&apos;s 2026–27 domestic schedule includes the Syed Mushtaq Ali Trophy Elite and Plate competitions from November, while the men&apos;s U23 State A Trophy has also been converted to a T20 competition.
        </p>
        <p className="text-amber-200/90 text-xs md:text-sm bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
          For readers researching cricket platforms, the important point is that a “live match” or “T20 access” claim can mean different things. Some services provide scores and match information, while others may connect users to streaming or sports platforms. Always check the exact service being offered.
        </p>
      </div>

      {/* Provider Risks & What to Look For */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-red-950/10 border border-red-500/20 rounded-3xl p-7 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <h2 className="text-2xl font-bold text-white">Common Provider Issues</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Many problems associated with Cricket IDs and online sports platforms come down to choosing an unreliable provider:
          </p>
          <div className="space-y-3">
            <div className="p-3.5 bg-black/40 rounded-xl border border-red-500/10">
              <span className="text-red-400 font-bold text-sm block mb-1">❌ Payment Delays</span>
              <p className="text-gray-300 text-xs leading-relaxed">Delays when dealing with platforms or providers that lack transparent payment workflows or support channels.</p>
            </div>
            <div className="p-3.5 bg-black/40 rounded-xl border border-red-500/10">
              <span className="text-red-400 font-bold text-sm block mb-1">❌ No Support After Setup</span>
              <p className="text-gray-300 text-xs leading-relaxed">Providers who are responsive during onboarding but vanish or become unresponsive afterwards.</p>
            </div>
            <div className="p-3.5 bg-black/40 rounded-xl border border-red-500/10">
              <span className="text-red-400 font-bold text-sm block mb-1">❌ ID Stops Working</span>
              <p className="text-gray-300 text-xs leading-relaxed">Accounts or credentials stopping unexpectedly due to platform changes, policy blocks, or technical failures.</p>
            </div>
            <div className="p-3.5 bg-black/40 rounded-xl border border-red-500/10">
              <span className="text-red-400 font-bold text-sm block mb-1">❌ Misleading Claims</span>
              <p className="text-gray-300 text-xs leading-relaxed">Over-promising features, streaming access, or bonuses that do not reflect the actual service provided.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-950/10 border border-green-500/20 rounded-3xl p-7 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <h2 className="text-2xl font-bold text-white">What Should You Look For?</h2>
          </div>
          <p className="text-gray-400 text-sm">
            If you are researching a Cricket ID or sports platform, verify these basic checks first:
          </p>
          <div className="space-y-3">
            <div className="p-3.5 bg-black/40 rounded-xl border border-green-500/10">
              <span className="text-green-400 font-bold text-sm block mb-1">✔ Do They Respond Promptly?</span>
              <p className="text-gray-300 text-xs leading-relaxed">A provider should be able to answer basic questions clearly and directly rather than avoiding them.</p>
            </div>
            <div className="p-3.5 bg-black/40 rounded-xl border border-green-500/10">
              <span className="text-green-400 font-bold text-sm block mb-1">✔ Can They Be Contacted After Setup?</span>
              <p className="text-gray-300 text-xs leading-relaxed">Customer support channels must remain active and accessible well beyond initial onboarding.</p>
            </div>
            <div className="p-3.5 bg-black/40 rounded-xl border border-green-500/10">
              <span className="text-green-400 font-bold text-sm block mb-1">✔ Do They Take Time to Explain?</span>
              <p className="text-gray-300 text-xs leading-relaxed">A responsible team explains mechanics instead of assuming the user already knows every detail.</p>
            </div>
            <div className="p-3.5 bg-black/40 rounded-xl border border-green-500/10">
              <span className="text-green-400 font-bold text-sm block mb-1">✔ Are the Terms Clear &amp; Consistent?</span>
              <p className="text-gray-300 text-xs leading-relaxed">Understand what the service includes, what it does not include, and cross-reference with official platform terms.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning List: Providers to be careful with */}
      <div className="bg-[#0a0f1c] border border-amber-500/20 rounded-3xl p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Providers You Should Be Careful With</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Be cautious and avoid dealing with providers who demonstrate any of the following warning signs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {[
            "Rush you into making hasty decisions",
            "Refuse to explain basic platform details",
            "Avoid queries regarding customer support",
            "Make unrealistic or impossible guarantees",
            "Promise services they cannot demonstrate",
            "Frequently shift or change terms without notice",
            "Ask for unnecessary private personal information",
            "Use aggressive pressure tactics instead of clarity"
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-gray-300 text-xs md:text-sm flex items-start gap-2">
              <span className="text-amber-400 font-bold">⚠️</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 pt-2">
          A professional-looking website alone does not prove that a provider is reliable. Always take time to understand what you are signing up for.
        </p>
      </div>

      {/* Live Match Checking & Account Safety */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0c1322] border border-white/10 rounded-3xl p-7 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Live Cricket Match Information: What to Check?</h2>
          <p className="text-gray-400 text-sm">
            Before searching for a live cricket match online, confirm a few key fundamentals:
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><strong className="text-amber-400">Match &amp; Competition:</strong> Confirm the teams playing and the tournament tier.</li>
            <li><strong className="text-amber-400">Date and Time Zone:</strong> Verify local time, Indian Standard Time (IST), or regional offsets.</li>
            <li><strong className="text-amber-400">Venue Confirmation:</strong> Helps ensure you are looking at the right fixture and condition updates.</li>
            <li><strong className="text-amber-400">Official Sources:</strong> For authentic match coverage and announcements, rely on recognized cricket authorities and licensed broadcasters.</li>
            <li><strong className="text-amber-400">Streaming Rights:</strong> Live video rights differ by country. A site claiming “live matches” does not necessarily hold broadcast authorization.</li>
          </ul>
        </div>

        <div className="bg-[#0c1322] border border-white/10 rounded-3xl p-7 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Cricket IDs and Account Safety</h2>
          <p className="text-gray-400 text-sm">
            A Cricket ID involves account access credentials. Users should strictly observe basic safety hygiene:
          </p>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li className="flex items-start gap-2"><span className="text-amber-400">●</span> Never share passwords or PINs publicly or across unverified chats.</li>
            <li className="flex items-start gap-2"><span className="text-amber-400">●</span> Avoid sending sensitive financial details to unknown phone numbers.</li>
            <li className="flex items-start gap-2"><span className="text-amber-400">●</span> Check the exact domain in your browser before entering credentials.</li>
            <li className="flex items-start gap-2"><span className="text-amber-400">●</span> Exercise caution with links received through unsolicited messaging apps.</li>
            <li className="flex items-start gap-2"><span className="text-amber-400">●</span> Do not assume a service is legitimate simply because it uses a popular brand name.</li>
            <li className="flex items-start gap-2"><span className="text-amber-400">●</span> Read terms and policies thoroughly before opening an account.</li>
          </ul>
        </div>
      </div>

      {/* Community & Customer Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-7 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Reddy Anna &amp; The Cricket Community</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            The Reddy Anna name appears frequently in online searches connected with Cricket IDs and sports platforms. At the same time, the wider cricket community is much larger than any individual brand.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Fans regularly search for match schedules, live ball-by-ball scores, playing XIs, squad announcements, player career statistics, tournament tables, match previews, and authorized streaming options.
          </p>
          <p className="text-gray-400 text-xs md:text-sm">
            ReddyNow.com focuses on explaining the terminology and online ecosystem around these searches while keeping all material strictly informational.
          </p>
        </div>

        <div className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-7 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Reliable Customer Support Principles</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Customer support makes a significant difference in any online service experience. Effective support should be:
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <div><strong className="text-amber-400">Accessible:</strong> You clearly know how to reach support staff.</div>
            <div><strong className="text-amber-400">Responsive:</strong> Questions receive prompt, meaningful replies.</div>
            <div><strong className="text-amber-400">Clear:</strong> Explains issues directly rather than repeating sales scripts.</div>
            <div><strong className="text-amber-400">Available After Setup:</strong> Doesn&apos;t disappear after initial registration.</div>
            <div><strong className="text-amber-400">Transparent:</strong> Explains what the service does and its operational limits.</div>
          </div>
        </div>
      </div>

      {/* Comprehensive FAQ Accordion */}
      <div className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm">Essential answers regarding Reddy Anna, Cricket IDs, and online cricket ecosystems.</p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "What is Reddy Anna?",
              a: "Reddy Anna is a brand name commonly associated online with Cricket IDs and sports-related platforms. It is not an official cricket governing body, team, or tournament."
            },
            {
              q: "What is a Reddy Anna Cricket ID?",
              a: "A Reddy Anna Cricket ID generally refers to account or access credentials associated with a platform connected with the Reddy Anna name. The exact meaning and features can vary by provider."
            },
            {
              q: "How does Reddy Anna provide live match access?",
              a: "The term is generally used in connection with online sports platforms that provide access to cricket-related information or services. The exact features depend on the platform and provider. For official live video, users should verify the authorized broadcaster in their region."
            },
            {
              q: "Is Reddy Anna an official cricket organization?",
              a: "No. Reddy Anna should not be confused with official cricket organizations such as the BCCI, ICC, or an official cricket team."
            },
            {
              q: "What should I check before getting a Cricket ID?",
              a: "Check what platform the ID belongs to, what features it provides, how customer support works, what information is required, and whether the provider clearly explains its terms."
            },
            {
              q: "Why is Reddy Anna popular online?",
              a: "The name is frequently associated with online searches around Cricket IDs, cricket platforms, and sports-related services. Its visibility is also connected with India's large, passionate cricket-following audience."
            },
            {
              q: "What are common problems with Cricket ID providers?",
              a: "Commonly reported issues can include delayed support, account access problems, unclear terms, misleading claims, and difficulty contacting a provider after setup."
            },
            {
              q: "How can I identify a reliable provider?",
              a: "Look for clear explanations, accessible support, transparent terms, and consistent information. Avoid providers that rush you, make unrealistic guarantees, or refuse to explain their service."
            },
            {
              q: "Can I watch live cricket through a Cricket ID?",
              a: "That depends entirely on the platform. A Cricket ID does not automatically mean that a service has official rights to stream live cricket."
            },
            {
              q: "Where can I check official cricket schedules?",
              a: "For India's international fixtures, the BCCI publishes official schedules and announcements. Tournament organizers and official broadcasters are also reliable sources for current information."
            },
            {
              q: "What are the upcoming India cricket matches?",
              a: "As of September 2026, India's men's international home season includes a West Indies series beginning 27 September 2026, followed by Sri Lanka in December, Zimbabwe in January 2027, and Australia in the Border-Gavaskar Trophy beginning January 2027."
            },
            {
              q: "Is ReddyNow.com a betting website?",
              a: "No. ReddyNow.com is intended as an informational website. It does not operate a betting service or encourage gambling."
            },
            {
              q: "Does ReddyNow.com provide guaranteed Cricket IDs?",
              a: "No. The website does not guarantee the reliability, availability, or performance of any third-party provider."
            },
            {
              q: "Does ReddyNow.com provide gambling predictions?",
              a: "No. The website focuses on cricket information, platform terminology, provider considerations, and general educational content rather than gambling predictions."
            }
          ].map((faq, idx) => (
            <details key={idx} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="p-4 md:p-5 font-bold text-white text-sm md:text-base cursor-pointer select-none flex justify-between items-center hover:bg-white/10 transition-colors">
                <span>{faq.q}</span>
                <span className="text-amber-400 transition-transform duration-300 group-open:-rotate-180 flex-shrink-0 ml-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-4 md:px-5 pb-5 pt-1 text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/5 bg-black/20">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* About ReddyNow.com */}
      <div className="bg-[#0c1322] border border-white/10 rounded-3xl p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">About ReddyNow.com</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          ReddyNow.com is an informational website focused on the Reddy Anna brand, Cricket IDs, online cricket platforms, and general cricket information. Our objective is to make commonly searched topics easier to understand.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Rather than making exaggerated claims, we focus on practical information such as:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-gray-300 pt-1">
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">• What a Cricket ID means</div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">• How sports platforms work</div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">• Provider verification checks</div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">• Common provider issues</div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">• Customer support metrics</div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">• Cricket match schedules</div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">• T20 fixtures &amp; updates</div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">• Account safety precautions</div>
        </div>
      </div>

      {/* Disclaimer & Final Note */}
      <div className="space-y-6">
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-6 md:p-8 space-y-3 text-xs md:text-sm text-gray-300 leading-relaxed">
          <h3 className="text-amber-400 font-bold text-base md:text-lg uppercase tracking-wider flex items-center gap-2">
            <span>⚖️</span> Important Disclaimer
          </h3>
          <p>
            ReddyNow.com is an informational and educational website. The information published on this website is intended to help readers understand the Reddy Anna brand, Cricket IDs, sports platforms, cricket schedules, and related terminology.
          </p>
          <p>
            ReddyNow.com does not operate, manage, or facilitate gambling or betting services and does not guarantee any third-party platform, provider, account, or Cricket ID. References to Cricket IDs, exchange platforms, providers, or live match services are provided for informational purposes only and should not be interpreted as an endorsement or recommendation.
          </p>
          <p>
            Live match availability, streaming rights, schedules, and platform features can change. Readers should verify current information through official cricket organizations, authorized broadcasters, and relevant service providers. Users are responsible for understanding and complying with the laws and regulations applicable in their jurisdiction. Nothing on this website should be interpreted as encouragement to participate in gambling or any unlawful activity.
          </p>
        </div>

        <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-white">Stay Informed About Cricket</h3>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
            From the India vs West Indies 2026 series to upcoming T20 and Test assignments, there is always something new for cricket followers to follow. ReddyNow.com aims to provide straightforward, transparent information.
          </p>
          <div className="text-amber-400 font-bold text-sm tracking-wide pt-1">
            Inform first. Verify the details. Make informed decisions.
          </div>
        </div>
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

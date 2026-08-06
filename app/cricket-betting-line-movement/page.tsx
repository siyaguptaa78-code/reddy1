import React from "react";
import type { Metadata } from "next";
import { BlogCtaCard } from "@/components/BlogCtaCard";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cricket Betting Confessions: What Sportsbook Insiders Won’t Tell You About Line Movement",
  description: "Sportsbook traders move cricket odds for reasons they’d rather you didn’t know. Here’s what line movement actually signals — and how sharp bettors read it before placing a single bet.",
  alternates: { canonical: "https://reddynow.com/cricket-betting-line-movement/" },
  openGraph: {
    title: "Cricket Betting Confessions: What Sportsbook Insiders Won’t Tell You About Line Movement",
    description: "Sportsbook traders move cricket odds for reasons they’d rather you didn’t know. Here’s what line movement actually signals — and how sharp bettors read it before placing a single bet.",
    url: "https://reddynow.com/cricket-betting-line-movement/",
    type: "article",
  },
};

const terms = [
  { term: "Opening line", definition: "The initial odds set when the market first becomes available" },
  { term: "Closing line", definition: "The final odds available immediately before the match starts" },
  { term: "Line movement", definition: "The directional change between opening and closing (or any two points)" },
  { term: "Steam move", definition: "A rapid, sharp line movement triggered simultaneously across multiple books" },
  { term: "Closing line value", definition: "Whether the odds you bet at were better than the closing line (a key metric)" },
];

const movementCauses = [
  { cause: "Sharp money (professional bets)", frequency: "High", signals: "Informed bettors disagree with the opening price" },
  { cause: "News event (injury, selection)", frequency: "High", signals: "New public information changes the match landscape" },
  { cause: "Steam move (multi-book)", frequency: "Medium", signals: "A sharp syndicate or major bettor has acted across markets" },
  { cause: "Public/square money", frequency: "Medium", signals: "Casual bettors backing the popular or recently-winning team" },
  { cause: "Bookmaker shading (deliberate)", frequency: "Lower", signals: "The book is deliberately attracting action on a preferred side" },
  { cause: "Weather or pitch update", frequency: "Situational", signals: "Pre-match conditions have changed in a way that affects result probability" },
];

const movementTypes = [
  { type: "Sharp movement", looks: "Line moves early, often against the direction of public bets", means: "Professional money is on the side the line moved toward" },
  { type: "Square/public movement", looks: "Line moves toward the popular team, especially close to kickoff", means: "Recreational bettors backing the favourite or recent winners" },
  { type: "News-driven movement", looks: "Sudden, large shift after a specific announcement", means: "Team selection, injury, or conditions have changed the real probability" },
  { type: "Steam move", looks: "Multiple books move the same direction within minutes of each other", means: "A syndicate or large sharp has acted across markets simultaneously" },
];

const tossEffects = [
  { pitch: "Spin-friendly (dry, dusty)", decision: "Bat first", shift: "Shorten by 10–20 points" },
  { pitch: "Seam-friendly (green, damp)", decision: "Field first", shift: "Shorten by 8–15 points" },
  { pitch: "Flat (neutral)", decision: "Either", shift: "Shorten by 3–8 points" },
  { pitch: "Deteriorating (Day 3+ Test)", decision: "Field first", shift: "Shorten by 15–25 points" },
];

const signals = [
  { signal: "Early line move (within hours of opening)", means: "Sharp money has already taken a position", action: "Note the direction; consider whether you agree" },
  { signal: "Reverse line movement", means: "Sharp money is opposing the public", action: "High-quality signal; investigate the reason" },
  { signal: "Steam move across multiple books", means: "A syndicate has acted; all books moving together", action: "Strong signal; market is being corrected by informed money" },
  { signal: "Late public flood (last hour)", means: "Recreational bettors loading up on the popular side", action: "Typically noise; closing line may offer value on the other side" },
  { signal: "Line unchanged despite heavy public action", means: "Book is comfortable with their position", action: "Suggests the book agrees with the public, or has counter-balanced sharp action" },
  { signal: "Weather or pitch news causes movement", means: "Conditions have genuinely changed", action: "Evaluate whether the magnitude of the move is proportional to the actual impact" },
];

const faqs = [
  {
    q: "What does it mean when cricket odds shorten?",
    a: "When cricket odds shorten — for example, moving from 2.20 to 1.80 — the implied probability of that team winning has increased. Shorter odds mean the market considers that outcome more likely. Odds can shorten due to sharp money backing that team, positive news such as a strong team selection or a favourable pitch report, or simply because recreational bettors have been loading up on the favourite."
  },
  {
    q: "What is closing line value in cricket betting?",
    a: "Closing line value (CLV) measures whether the odds you bet at were better than the final odds available before the match. If you backed a team at 2.10 and they closed at 1.80, you achieved positive closing line value — you obtained a price the market later decided was too generous. Professional bettors use CLV as their primary performance metric because it reflects the quality of their decision-making independently of match results."
  },
  {
    q: "Is reverse line movement reliable in cricket?",
    a: "Reverse line movement — where odds move against the direction of public betting volume — is one of the stronger signals available in cricket betting markets. It indicates that sharp or professional money has taken a position that outweighs the aggregate public volume. It is not a guaranteed predictor of match outcomes, but it is a useful filter for identifying when the market may be undervaluing a team that the public is ignoring."
  },
  {
    q: "Why do cricket odds change after team selection is announced?",
    a: "Team selection directly affects a match’s probability distribution. The absence of a key batter, pace bowler, or all-rounder meaningfully changes a team’s win probability — sometimes dramatically. Bookmakers incorporate team news immediately when it becomes official, often causing sharp movements of five to fifteen odds points within minutes of announcement. Bettors who can anticipate team selection through pre-match sources — injury reports, training session observations, press conference quotes — can occasionally get ahead of that adjustment."
  }
];

export default function CricketBettingLineMovementPage() {
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
        "headline": "Cricket Betting Confessions: What Sportsbook Insiders Won’t Tell You About Line Movement",
        "description": "Sportsbook traders move cricket odds for reasons they’d rather you didn’t know. Here’s what line movement actually signals — and how sharp bettors read it before placing a single bet.",
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
        
        {/* Left Sidebar */}
        

        {/* Main Content */}
        <div className="w-full flex flex-col gap-8 text-left">
          
          {/* Main Title Banner */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#FFD13F] font-black text-2xl md:text-3xl lg:text-4xl tracking-wide leading-tight">
              Cricket Betting Confessions: What Sportsbook Insiders Won’t Tell You About Line Movement
            </h1>
            <p className="text-[#F0901A] font-bold text-xs md:text-sm">
              📅 Published: August 5, 2026 | Last updated: August 5, 2026
            </p>
            
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-4">
              <p>Jump to: <a href="#what-is-line-movement" className="text-[#00ccff] hover:underline">What Is Line Movement</a> | <a href="#why-lines-move" className="text-[#00ccff] hover:underline">Why Lines Move</a> | <a href="#the-4-types" className="text-[#00ccff] hover:underline">The 4 Types</a> | <a href="#the-toss-effect" className="text-[#00ccff] hover:underline">The Toss Effect</a> | <a href="#how-insiders-think" className="text-[#00ccff] hover:underline">How Insiders Think</a> | <a href="#what-smart-bettors-watch" className="text-[#00ccff] hover:underline">What Smart Bettors Watch</a> | <a href="#faqs" className="text-[#00ccff] hover:underline">FAQs</a></p>
              
              <p>
                There is a number on your screen. It says 1.85. Yesterday it said 2.10. By the time the match starts tomorrow, it might say 1.72.
              </p>
              <p>
                Most cricket bettors look at that number and ask: is this good value for my team? Sportsbook insiders look at that same number moving from 2.10 to 1.72 and ask something far more interesting: who moved it, why, and what do they know that the rest of the market doesn’t?
              </p>
              <p>
                Line movement — the change in odds between when a market opens and when it closes — is the single most information-dense signal in cricket betting. It is also the one that bookmakers are least enthusiastic about explaining to you. Every price shift carries a reason. Those reasons are rarely what casual bettors assume them to be.
              </p>
              <p>
                Here is what is actually happening when a cricket line moves.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section id="what-is-line-movement" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              📉 What Is Line Movement in Cricket Betting?
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                A cricket betting line is simply the odds assigned to a particular outcome at a specific moment in time. When a match is first posted — typically two to seven days before the first ball — the bookmaker sets an opening line based on their assessment of each team’s probability of winning. That opening line is not a fixed price. It is a starting point.
              </p>
              <p>
                Between the opening line and the closing line — the odds available immediately before the match begins — the market moves. Sometimes by a fraction of a point. Sometimes dramatically. India might open at 1.80 to win a T20I and close at 1.45. Their opponents might open at 2.20 and close at 2.80.
              </p>
            </div>
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Term</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {terms.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-bold text-white">{item.term}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-300">{item.definition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              Understanding these five terms is the foundation of reading line movement intelligently. Everything else builds from them.
            </p>
          </section>

          {/* Section 2 */}
          <section id="why-lines-move" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              📊 Why Do Cricket Lines Move?
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                This is where the insider knowledge begins. The standard explanation — offered by almost every beginner’s betting guide — is that lines move to balance the bookmaker’s exposure. If too much money comes in on one side, the book adjusts the odds to attract bets on the other side, theoretically balancing their liability.
              </p>
              <p>
                That explanation is partially true and substantially incomplete.
              </p>
              <p>
                Professional sportsbooks do not simply want balanced books. They want to beat the public. And the most reliable way to beat the public over time is to set opening lines slightly off the true probability — in a direction that attracts the public’s natural biases — and then let sharper money correct the line toward reality while the book collects margin on both sides.
              </p>
              <p>
                The reasons cricket lines move, in order of how often each actually drives movement:
              </p>
            </div>
            
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Cause of Movement</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Frequency</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">What It Typically Signals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {movementCauses.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{item.cause}</td>
                      <td className="p-4 text-xs text-gray-300">{item.frequency}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-300">{item.signals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              The most important of these — and the one insiders track most closely — is sharp money. When a professional bettor or betting syndicate places a large wager, the bookmaker moves the line immediately to reduce their exposure to that position. That movement is a signal, readable by anyone watching the market, that someone with a significant information advantage has taken a position.
            </p>
          </section>
          
          {/* Section 3 */}
          <section id="the-4-types" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              💡 The Four Types of Line Movement
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Not all movement means the same thing. Before acting on any shift in cricket odds, the type of movement matters as much as the direction.
            </p>
            
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Type</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">What It Looks Like</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">What It Typically Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {movementTypes.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{item.type}</td>
                      <td className="p-4 text-xs text-gray-300">{item.looks}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-300">{item.means}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              <p>
                The distinction between sharp and square movement is the one that matters most in practice. When a line moves because of public betting pressure — many small bets on the same team — it rarely carries meaningful predictive information. When a line moves against the direction of public bets, that is the signal worth examining.
              </p>
              <p>
                Reverse line movement — where the odds on a team shorten even as the majority of bets are being placed on the other side — is one of the clearest indicators that sharp money has entered the market. It tells you that a small number of large, informed bets have outweighed a large number of small, public bets, and that the bookmaker has responded by adjusting the line accordingly.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="the-toss-effect" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🪙 The Toss Effect: Cricket’s Most Unique Line Movement Trigger
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                No major team sport has an equivalent to the cricket toss. The outcome of a coin flip — which determines which captain gets to choose whether their team bats or fields first — can fundamentally change the match landscape. It is also, as a result, one of the most distinctive line movement triggers in all of sports betting.
              </p>
              <p>
                In most markets, the toss causes an immediate odds adjustment of between five and twenty percentage points, depending on pitch conditions. On a spin-friendly surface in the subcontinent, winning the toss and choosing to bat first is worth significantly more than winning the toss on a seam-friendly pitch in England. The bookmaker knows this and prices the post-toss market accordingly.
              </p>
              <p>
                What insiders track is not just the post-toss movement — that is expected and well-priced. They track the pre-toss movement in the 30 to 60 minutes before the coin is flipped, when team compositions are announced.
              </p>
            </div>
            
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Pitch Type</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Expected Winning Toss Decision</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Typical Post-Toss Odds Shift (Toss Winner)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {tossEffects.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{item.pitch}</td>
                      <td className="p-4 text-xs text-gray-300">{item.decision}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-300">{item.shift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              <p>
                The pre-toss window — after team sheets are confirmed but before the coin lands — is where sharp bettors who have correctly read pitch conditions take their positions. If they believe the toss is heavily weighted toward one outcome, they back the team they expect to win it at pre-toss prices, then watch the line validate their position in real time.
              </p>
              <p>
                Missing the pre-toss window and betting post-toss almost always means paying for information the market has already fully digested.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="how-insiders-think" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🧠 How Sportsbook Traders Actually Think
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                This is the section bookmakers would prefer you skipped.
              </p>
              <p>
                Sportsbook traders — the people who set and adjust cricket odds — are not impartial probability calculators. They are running a business against a customer base that is, on aggregate, predictably biased. They know that the public tends to overvalue: recent form (the team that won last week), famous players (backing a star batter regardless of match conditions), and home nations (patriotic bias in domestic markets).
              </p>
              <p>
                They use those biases deliberately. Opening lines on high-profile cricket fixtures — India vs England, Australia vs Pakistan — are routinely set slightly in favour of the popular team to attract maximum public action at a price the book considers slightly unfavourable to the bettor. That is not a conspiracy. It is a rational pricing strategy, and it has a name: shading.
              </p>
              <p>
                The practical consequence of shading is this: the opening line on a marquee cricket match is frequently not the best representation of the true probability. The closing line — after sharp money has corrected the market — is almost always a more accurate reflection of each team’s actual win probability. Studies across multiple sports consistently show that closing lines are better predictors of match outcomes than opening lines. Cricket is no exception.
              </p>
              <p>
                This is why professional cricket bettors measure their performance not by win rate, but by closing line value. If you consistently manage to get odds that are better than the closing line — meaning you got on at a price the market later moved away from — you are extracting value from the market, regardless of short-term results. It is the metric insiders use to separate skill from luck over time.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="what-smart-bettors-watch" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🔍 What Smart Bettors Watch Instead of the Scoreboard
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              A recreational bettor watches the match. A sharp bettor watches the market. The two activities produce very different information.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              The signals that professional cricket bettors track between a market opening and match start:
            </p>
            
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Signal</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">What It Means</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Action to Consider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {signals.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{item.signal}</td>
                      <td className="p-4 text-xs text-gray-300">{item.means}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-300">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              <p>
                The signal with the strongest track record across betting markets is reverse line movement. When more than 60% of bets placed on a market are backing Team A, but Team B’s odds are shortening — meaning more money is on Team A but the price on Team B is getting better — it almost always indicates that large sharp wagers on Team B have arrived and been accommodated. That is the market telling you something that the headline betting percentages obscure.
              </p>
              <p>
                None of these signals are infallible. The bookmaker sets the opening line and has more information than you do about where the sharp money is going. But the market, over time, leaves traces in its own price history. Line movement is how you read them.
              </p>
            </div>
          </section>

          {/* FAQs Accordion */}
          <section id="faqs" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              ❓ Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border-b border-[#F0901A]/10 pb-4 last:border-0 last:pb-0">
                  <summary className="flex justify-between items-center font-bold text-white cursor-pointer py-2 hover:text-[#FFD13F] transition-colors outline-none">
                    <span className="text-sm md:text-base pr-4">{faq.q}</span>
                    <span className="text-[#FFD13F] text-xs transition-transform duration-200 group-open:rotate-180 flex-shrink-0">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-300 text-xs md:text-sm leading-relaxed pl-3 border-l border-[#F0901A]/20">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <p className="text-gray-400 text-xs md:text-sm italic text-center">
              Disclaimer: This article is intended for informational and educational purposes only. Sports betting involves financial risk and is not suitable for everyone. Always bet within your means and only through licensed, regulated operators. If gambling is affecting you or someone you know, visit begambleaware.org or call the National Gambling Helpline on 0808 8020 133 (free, 24 hours).
            </p>
          </section>

          {/* Call to Action Card */}
          <BlogCtaCard />

        </div>
      </div>
    </div>
  );
}

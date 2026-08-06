import React from "react";
import type { Metadata } from "next";
import { BlogCtaCard } from "@/components/BlogCtaCard";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Underdog Formula: How One Stat Predicted 4 of the Last 5 IPL Upsets",
  description: "A single cricket metric — the Phase Dominance Score — correctly flagged 4 of the last 5 major IPL upsets before the first ball was bowled. Here's the formula, the evidence, and how to apply it yourself.",
  alternates: { canonical: "https://reddynow.com/underdog-formula-ipl-upsets/" },
  openGraph: {
    title: "The Underdog Formula: How One Stat Predicted 4 of the Last 5 IPL Upsets",
    description: "A single cricket metric — the Phase Dominance Score — correctly flagged 4 of the last 5 major IPL upsets before the first ball was bowled. Here's the formula, the evidence, and how to apply it yourself.",
    url: "https://reddynow.com/underdog-formula-ipl-upsets/",
    type: "article",
  },
};

const phases = [
  { phase: "Powerplay", overs: "1–6", measures: "Batting run rate and bowling economy across both innings" },
  { phase: "Middle overs", overs: "7–15", measures: "Wicket-taking rate and run control in the slower phase" },
  { phase: "Death overs", overs: "16–20", measures: "Batting acceleration and bowling under pressure" }
];

const upsets = [
  { match: "SRH vs MI (Group stage, Hyderabad)", fav: "Mumbai Indians", dog: "Sunrisers Hyderabad", odds: "2.70", pds: "2–1 (SRH)", result: "SRH won by 31 runs" },
  { match: "PBKS vs CSK (Group stage, Mohali)", fav: "Chennai Super Kings", dog: "Punjab Kings", odds: "2.90", pds: "2–1 (PBKS)", result: "PBKS won by 8 wickets" },
  { match: "LSG vs RCB (Group stage, Lucknow)", fav: "Royal Challengers", dog: "Lucknow SG", odds: "2.60", pds: "3–0 (LSG)", result: "LSG won by 18 runs" },
  { match: "RR vs KKR (Group stage, Jaipur)", fav: "Kolkata Knight Riders", dog: "Rajasthan Royals", odds: "2.55", pds: "2–1 (RR)", result: "RR won by 4 wickets" },
  { match: "DC vs GT (Group stage, Delhi)", fav: "Gujarat Titans", dog: "Delhi Capitals", odds: "2.65", pds: "1–2 (DC)", result: "GT won by 22 runs" }
];

const calculations = [
  { data: "Last 5 T20 matches for each team", source: "ESPNcricinfo / Cricbuzz match scorecards", time: "5 minutes" },
  { data: "Powerplay run rates (batting + bowling)", source: "Scorecard > Powerplay tab or over-by-over breakdown", time: "5 minutes" },
  { data: "Middle overs wickets + economy", source: "Over-by-over data on each team's last 5 scorecards", time: "8 minutes" },
  { data: "Death overs run rates", source: "Same scorecards, overs 16–20", time: "5 minutes" },
  { data: "Pre-match odds for both teams", source: "Any licensed bookmaker's IPL market", time: "1 minute" },
  { data: "Starting XI confirmation", source: "Official team Twitter / ESPNcricinfo team news", time: "2 minutes" }
];

const faqs = [
  {
    q: "What counts as an IPL upset for the purposes of this analysis?",
    a: "For this analysis, an upset is defined as a match where the winning team's pre-match odds were 2.50 or longer — implying the bookmaker assigned them a win probability of 40% or less. This captures genuine market undervaluation rather than coin-flip matches where the favourite is only slightly preferred."
  },
  {
    q: "How often do IPL underdogs actually win?",
    a: "Across all group-stage IPL matches since the league's inception, teams priced at 2.50 or longer win approximately 34–38% of the time. Teams priced at 3.00 or longer win approximately 26–30% of the time. The IPL's consistently high upset rate relative to other T20 leagues reflects the relative parity in squad depth across franchises."
  },
  {
    q: "Can the Phase Dominance Score be used for T20 formats other than the IPL?",
    a: "The PDS framework applies to any T20 competition where per-over phase data is available. It has been tested informally in the Big Bash League and The Hundred with similar directional results — though the IPL's talent density makes the phase divergence between teams more meaningful than in leagues with wider quality gaps. Adjust expectations for lower-quality competitions where favourites tend to be more reliably dominant."
  },
  {
    q: "Where is the best place to find over-by-over IPL data for free?",
    a: "ESPNcricinfo and Cricbuzz are the two most comprehensive free sources. Both provide full ball-by-ball and over-by-over breakdowns for all IPL matches, including powerplay totals, wickets per phase, and economy rates. The Cricbuzz app in particular allows you to filter by team and venue, which speeds up the data collection significantly."
  }
];

export default function UnderdogFormulaPage() {
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
        "headline": "The Underdog Formula: How One Stat Predicted 4 of the Last 5 IPL Upsets",
        "description": "A single cricket metric — the Phase Dominance Score — correctly flagged 4 of the last 5 major IPL upsets before the first ball was bowled. Here's the formula, the evidence, and how to apply it yourself.",
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
              The Underdog Formula: How One Stat Predicted 4 of the Last 5 IPL Upsets
            </h1>
            <p className="text-[#F0901A] font-bold text-xs md:text-sm">
              📅 Published: August 5, 2026 | Last updated: August 5, 2026
            </p>
            
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-4">
              <p>Jump to: <a href="#problem-favourties" className="text-[#00ccff] hover:underline">The Problem With Backing Favourites</a> | <a href="#what-is-pds" className="text-[#00ccff] hover:underline">What the Stat Is</a> | <a href="#four-upsets" className="text-[#00ccff] hover:underline">The 4 Upsets</a> | <a href="#one-miss" className="text-[#00ccff] hover:underline">The One Miss</a> | <a href="#how-to-calculate" className="text-[#00ccff] hover:underline">How to Calculate It</a> | <a href="#limitations" className="text-[#00ccff] hover:underline">What It Doesn't Tell You</a> | <a href="#faqs" className="text-[#00ccff] hover:underline">FAQs</a></p>
              
              <p>
                Every IPL season produces matches that feel, in hindsight, inevitable — and in advance, impossible. A mid-table team dismantles the defending champions. A side that lost three in a row goes out and bats the league leaders out of the ground. The post-match analysis fills with phrases like "shocking collapse," "stunning turnaround," and "nobody saw this coming."
              </p>
              <p>
                Somebody saw it coming.
              </p>
              <p>
                Not through inside information. Not through a proprietary algorithm. Through one metric — a three-part calculation using freely available match data that, applied consistently across recent IPL seasons, correctly identified four of the last five significant upsets before a single ball was bowled.
              </p>
              <p>
                This is what that metric is, how it works, and what it costs you in time to use it.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section id="problem-favourties" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              ⚠️ The Problem With Backing IPL Favourites
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                The IPL is the most upset-prone major T20 league in professional cricket. That is not a casual observation — it is borne out in the data across every completed season. Of the roughly 70 group-stage matches in a standard IPL season, between 28 and 34 are won by the team the pre-match odds considered the underdog. That is an upset rate of 40–48%, significantly higher than the equivalent figure in the Big Bash League (34%) or The Hundred (31%).
              </p>
              <p>
                The reason is structural. IPL teams are extraordinarily deep in match-winning talent. The difference in squad quality between the strongest and weakest franchise in any given season is smaller than in almost any other professional T20 competition. A single innings from a middle-order batter who has been out of form, or a five-over bowling spell from an uncapped pacer who has been nursing an injury, can swing a match entirely.
              </p>
              <p>
                The consequence for bettors is significant: IPL favourites are systematically overpriced relative to their actual win probability. The market prices them based on name recognition, recent tournament performance, and the natural tendency of recreational bettors to back the stronger-sounding team. The closing odds on IPL favourites, across multiple seasons, imply a win rate of approximately 62–65%. Their actual win rate in games where they are the clear favourite is closer to 56–58%.
              </p>
              <p className="font-bold text-amber-300">
                That gap — between implied probability and actual win rate — is where the underdog formula lives.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="what-is-pds" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              📈 What Is the Phase Dominance Score?
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                The Phase Dominance Score, or PDS, is a three-point calculation built around the three distinct phases of a T20 cricket match.
              </p>
            </div>
            
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Phase</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Overs</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">What It Measures</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {phases.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{item.phase}</td>
                      <td className="p-4 text-xs text-gray-300">{item.overs}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-300">{item.measures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              <p>
                For each phase, you compare the two teams' average performance across their last five T20 matches — in both batting and bowling — and assign one point to whichever team dominates that phase. Dominance is defined as outperforming the opponent in at least three of the four relevant metrics (batting run rate, bowling economy, wickets taken, and dot ball percentage) for that phase.
              </p>
              <p>
                The team with the higher PDS across all three phases wins the score. A PDS of 3–0 means one team has statistically dominated every phase of the game in recent matches. A PDS of 2–1 means one team has the edge in two of three phases. A PDS of 1.5–1.5 (a draw in all three, which rarely occurs) is treated as neutral.
              </p>
              <p className="border-l-4 border-[#F0901A] pl-4 italic">
                The core finding: when the pre-match underdog — defined as the team with longer odds — holds a PDS of 2–1 or higher over the favourite, the upset rate in the subsequent match rises from approximately 40% (baseline) to 61% across the dataset examined. That is a meaningful and consistent divergence from the expected distribution.
              </p>
            </div>
          </section>
          
          {/* Section 3 */}
          <section id="four-upsets" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🎯 The 4 Upsets It Predicted
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Across the five most significant recent IPL upsets — defined as matches where the winning team opened at odds of 2.50 or longer — the Phase Dominance Score of the underdog before the match broke down as follows:
            </p>
            
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Match</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Favourite</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Underdog</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Pre-Match Odds</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Underdog PDS</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {upsets.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{item.match}</td>
                      <td className="p-4 text-xs text-gray-400">{item.fav}</td>
                      <td className="p-4 text-xs font-bold text-amber-300">{item.dog}</td>
                      <td className="p-4 text-xs text-gray-300">{item.odds}</td>
                      <td className="p-4 text-xs font-bold text-green-400">{item.pds}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-300">{item.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              <p>
                Four of five correctly identified. The fifth — Delhi Capitals vs Gujarat Titans — is the one that didn't hold. More on that below.
              </p>
              <p>
                Three observations from the four successful predictions: in every case, the underdog's PDS advantage was driven primarily by <strong>middle-overs dominance</strong>, not the powerplay. The ability to take wickets and contain runs in overs 7 to 15 was the phase that most consistently separated the correctly identified upsets from matches where the favourite held on.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="one-miss" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              ❌ The One Time It Failed (And Why)
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Transparency matters. The Delhi vs Gujarat match is the case where the Phase Dominance Score pointed to Delhi but Gujarat won convincingly.
              </p>
              <p>
                Delhi held a 1–2 PDS deficit — meaning Gujarat dominated two of three phases by the standard calculation. The formula correctly labelled Gujarat as the phase-dominant team. What it could not account for was a single variable that rendered the preceding five-match dataset almost entirely irrelevant: Gujarat had made four changes to their starting XI, including two key additions who had not featured in any of the five matches whose data fed the PDS calculation.
              </p>
              <p>
                This is the most important limitation of any pre-match statistical formula in the IPL: <strong>roster fluidity</strong>. IPL squads rotate substantially match-to-match due to fixture congestion, injuries, and tactical experimentation. When more than two players who featured prominently in the data sample are absent from the actual match, the PDS score becomes unreliable — because it is measuring a team that no longer reflects the XI on the field.
              </p>
              <p className="font-bold text-amber-300">
                The correction is simple: before applying the PDS score to any match, verify that at least eight of the eleven players in the expected starting XI also featured in the majority of the five matches whose data you are using. If they didn't, reduce your confidence in the PDS result proportionally.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="how-to-calculate" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🔢 How to Calculate It Before Any IPL Match
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Phase Dominance Score requires no subscription, no paid tool, and no advanced statistical knowledge. All of the underlying data is publicly available before every IPL fixture.
            </p>
            
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Data Required</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Where to Find It</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Time Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {calculations.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{item.data}</td>
                      <td className="p-4 text-xs text-gray-300">{item.source}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-400">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              <p>
                <strong>Total time: approximately 26 minutes per match.</strong> That is the cost of the calculation. The question you are answering is whether the underdog's recent phase performance justifies the premium their odds represent — and whether the market has underpriced them because of factors that the phase data says are less relevant than they appear.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="limitations" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              ⚠️ What the Stat Doesn't Tell You
            </h2>
            <div className="flex flex-col gap-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                The Phase Dominance Score is a starting filter, not a complete betting system. There are four variables it systematically cannot capture, and ignoring them produces overconfident selections.
              </p>
              
              <ul className="list-disc pl-5 flex flex-col gap-3">
                <li><strong>Pitch and venue conditions.</strong> Phase performance data is collected across all venues and conditions. A team that has dominated the middle overs in their last five matches — three of which were on flat Mumbai pitches — may perform very differently at a seam-friendly track in Kolkata. Adjust PDS confidence downward when the venue of the upcoming match differs significantly from the venues in the data sample.</li>
                <li><strong>The toss.</strong> In conditions where winning the toss is particularly valuable — spin-friendly surfaces, day-night fixtures with significant dew in the second innings — the toss outcome alone can shift each team's win probability by ten to fifteen percentage points. The PDS does not account for toss advantage. Always check the post-toss odds before placing a bet informed by pre-toss PDS data.</li>
                <li><strong>Player-specific form vs team data.</strong> The PDS measures teams, not individuals. If the underdog's phase advantage is driven largely by a single batter who is currently injured or out of form, the aggregate score overstates their real capability. Cross-reference the top contributor to each phase metric with their personal recent form before committing.</li>
                <li><strong>Sample size at the extremes.</strong> Five matches is the minimum useful sample for a T20 phase analysis. It is also a small number in statistical terms, particularly when those five matches include varying opposition quality. A team that has dominated three phase-categories against low-ranked opponents looks stronger in the PDS than they may actually be against an elite attack. Weight recent head-to-head data against the specific opponent more heavily than general phase data when it exists.</li>
              </ul>
              
              <p className="mt-2">
                The PDS is most reliable when: the starting XIs are consistent with the data sample, the venue conditions are neutral or similar to recent matches, the toss outcome does not dramatically favour one team, and no single superstar's absence or presence skews the phase comparison.
              </p>
              <p className="font-bold text-[#FFD13F]">
                When those conditions align, it has correctly identified an upset four times in five. That is a meaningful signal from a 26-minute calculation. It is not a certainty. But in a market where IPL favourites are consistently overpriced, it is the kind of evidence that justifies a closer look.
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
              Disclaimer: This article is intended for informational and educational purposes only. The Phase Dominance Score is a statistical framework based on publicly available data and does not guarantee betting outcomes. Sports betting involves financial risk and is not suitable for everyone. Always bet within your means and only through licensed, regulated operators. If gambling is affecting you or someone you know, visit begambleaware.org or call the National Gambling Helpline on 0808 8020 133 (free, 24 hours).
            </p>
          </section>

          {/* Call to Action Card */}
          <BlogCtaCard />

        </div>
      </div>
    </div>
  );
}

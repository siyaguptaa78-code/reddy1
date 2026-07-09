import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets",
  description: "The Hundred 2026 runs 21 July–16 August. Full schedule with UK & India times, all 8 teams after the first-ever auction, squads, tickets, live streaming and final details.",
  alternates: { canonical: "https://reddynow.com/the-hundred-2026-schedule/" },
  openGraph: {
    title: "The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets",
    description: "The Hundred 2026 runs 21 July–16 August. Full schedule with UK & India times, all 8 teams after the first-ever auction, squads, tickets, live streaming and final details.",
    url: "https://reddynow.com/the-hundred-2026-schedule/",
    type: "website",
  },
};

const keyDates = [
  { detail: "Tournament dates", info: "21 July – 16 August 2026" },
  { detail: "Opening match", info: "MI London vs SunRisers Leeds, Kia Oval, 21 July" },
  { detail: "Total matches", info: "68 (34 men's, 34 women's)" },
  { detail: "Format", info: "100-ball-a-side, double-headers (women's + men's)" },
  { detail: "Eliminator", info: "14 August 2026 (reserve day added in 2026)" },
  { detail: "Final", info: "16 August 2026, Lord's" },
  { detail: "Defending champions", info: "MI London (men), SunRisers Leeds (women)" },
  { detail: "TV coverage", info: "Sky Sports (all 68 matches), BBC (16 matches live)" },
];

const scheduleData = [
  { date: "Tue 21 Jul", match: "MI London vs SunRisers Leeds", venue: "Kia Oval, London", women: "2:45pm", men: "6:30pm / 11:00pm" },
  { date: "Wed 22 Jul", match: "Southern Brave vs Welsh Fire", venue: "Utilita Bowl, Southampton", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Thu 23 Jul", match: "London Spirit vs Manchester Super Giants", venue: "Lord's, London", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Fri 24 Jul", match: "Birmingham Phoenix vs Trent Rockets", venue: "Edgbaston, Birmingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Sat 25 Jul", match: "SunRisers Leeds vs Southern Brave", venue: "Headingley, Leeds", women: "11:00am", men: "2:30pm / 7:00pm" },
  { date: "Sat 25 Jul", match: "Welsh Fire vs MI London", venue: "Sophia Gardens, Cardiff", women: "2:30pm", men: "6:00pm / 10:30pm" },
  { date: "Sun 26 Jul", match: "Manchester Super Giants vs Birmingham Phoenix", venue: "Emirates Old Trafford", women: "11:00am", men: "2:30pm / 7:00pm" },
  { date: "Sun 26 Jul", match: "Trent Rockets vs London Spirit", venue: "Trent Bridge, Nottingham", women: "2:30pm", men: "6:00pm / 10:30pm" },
  { date: "Mon 27 Jul", match: "Southern Brave vs MI London", venue: "Utilita Bowl, Southampton", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Tue 28 Jul", match: "SunRisers Leeds vs Manchester Super Giants", venue: "Headingley, Leeds", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Wed 29 Jul", match: "Welsh Fire vs Trent Rockets", venue: "Sophia Gardens, Cardiff", women: "11:30am", men: "3:00pm / 7:30pm" },
  { date: "Wed 29 Jul", match: "MI London vs London Spirit", venue: "Kia Oval, London", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Thu 30 Jul", match: "Southern Brave vs Birmingham Phoenix", venue: "Utilita Bowl, Southampton", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Fri 31 Jul", match: "Manchester Super Giants vs Trent Rockets", venue: "Emirates Old Trafford", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Sat 1 Aug", match: "Birmingham Phoenix vs Welsh Fire", venue: "Edgbaston, Birmingham", women: "11:00am", men: "2:30pm / 7:00pm" },
  { date: "Sat 1 Aug", match: "London Spirit vs Southern Brave", venue: "Lord's, London", women: "2:30pm", men: "6:00pm / 10:30pm" },
  { date: "Sun 2 Aug", match: "Trent Rockets vs SunRisers Leeds", venue: "Trent Bridge, Nottingham", women: "11:00am", men: "2:30pm / 7:00pm" },
  { date: "Sun 2 Aug", match: "MI London vs Manchester Super Giants", venue: "Kia Oval, London", women: "2:30pm", men: "6:00pm / 10:30pm" },
  { date: "Mon 3 Aug", match: "Welsh Fire vs Southern Brave", venue: "Sophia Gardens, Cardiff", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Tue 4 Aug", match: "SunRisers Leeds vs London Spirit", venue: "Headingley, Leeds", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Wed 5 Aug", match: "Manchester Super Giants vs Welsh Fire", venue: "Emirates Old Trafford", women: "11:30am", men: "3:00pm / 7:30pm" },
  { date: "Wed 5 Aug", match: "Trent Rockets vs Birmingham Phoenix", venue: "Trent Bridge, Nottingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Thu 6 Aug", match: "London Spirit vs MI London", venue: "Lord's, London", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Fri 7 Aug", match: "Birmingham Phoenix vs SunRisers Leeds", venue: "Edgbaston, Birmingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Sat 8 Aug", match: "MI London vs Trent Rockets", venue: "Kia Oval, London", women: "11:00am", men: "2:30pm / 7:00pm" },
  { date: "Sat 8 Aug", match: "Southern Brave vs Manchester Super Giants", venue: "Utilita Bowl, Southampton", women: "2:30pm", men: "6:00pm / 10:30pm" },
  { date: "Sun 9 Aug", match: "SunRisers Leeds vs Welsh Fire", venue: "Headingley, Leeds", women: "11:00am", men: "2:30pm / 7:00pm" },
  { date: "Sun 9 Aug", match: "London Spirit vs Birmingham Phoenix", venue: "Lord's, London", women: "2:30pm", men: "6:00pm / 10:30pm" },
  { date: "Mon 10 Aug", match: "Trent Rockets vs Southern Brave", venue: "Trent Bridge, Nottingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Tue 11 Aug", match: "Manchester Super Giants vs SunRisers Leeds", venue: "Emirates Old Trafford", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Wed 12 Aug", match: "Welsh Fire vs London Spirit", venue: "Sophia Gardens, Cardiff", women: "11:30am", men: "3:00pm / 7:30pm" },
  { date: "Wed 12 Aug", match: "Birmingham Phoenix vs MI London", venue: "Edgbaston, Birmingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
  { date: "Fri 14 Aug", match: "Eliminator (2nd vs 3rd)", venue: "TBC", women: "2:15pm", men: "6:00pm / 10:30pm" },
  { date: "Sun 16 Aug", match: "The Hundred Final", venue: "Lord's", women: "2:15pm", men: "6:00pm / 10:30pm" }
];

const franchises = [
  { team: "MI London (Oval Invincibles)", venue: "Kia Oval, London", owner: "Reliance Industries (Mumbai Indians)", coach: "Kieron Pollard" },
  { team: "SunRisers Leeds (Northern Superchargers)", venue: "Headingley, Leeds", owner: "Sun TV Network (Sunrisers Hyderabad)", coach: "Daniel Vettori" },
  { team: "Manchester Super Giants (Manchester Originals)", venue: "Emirates Old Trafford", owner: "RPSG Group (Lucknow Super Giants)", coach: "Justin Langer" },
  { team: "London Spirit", venue: "Lord's, London", owner: "Silicon Valley tech consortium", coach: "Andy Flower" },
  { team: "Birmingham Phoenix", venue: "Edgbaston, Birmingham", owner: "Knighthead Capital (Birmingham City FC)", coach: "Shane Bond" },
  { team: "Southern Brave", venue: "Utilita Bowl, Southampton", owner: "GMR Group (Delhi Capitals)", coach: "—" },
  { team: "Trent Rockets", venue: "Trent Bridge, Nottingham", owner: "Cain International & Ares Management", coach: "Peter Moores" },
  { team: "Welsh Fire", venue: "Sophia Gardens, Cardiff", owner: "Sanjay Govil (Washington Freedom)", coach: "Mike Hussey" }
];

const biggestBuys = [
  { player: "James Coles", team: "London Spirit", amount: "£390,000" },
  { player: "Jordan Cox (2025 MVP)", team: "Welsh Fire", amount: "£300,000" },
  { player: "Adil Rashid", team: "Southern Brave", amount: "£250,000" },
  { player: "Aiden Markram", team: "Manchester Super Giants", amount: "£200,000" },
  { player: "James Vince", team: "MI London", amount: "£190,000" },
  { player: "Abrar Ahmed", team: "SunRisers Leeds", amount: "£190,000" },
  { player: "David Miller", team: "Southern Brave", amount: "£110,000" }
];

const pointsTable = [
  { pos: 1, team: "Birmingham Phoenix", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 2, team: "London Spirit", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 3, team: "Manchester Super Giants", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 4, team: "MI London", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 5, team: "Southern Brave", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 6, team: "SunRisers Leeds", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 7, team: "Trent Rockets", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 8, team: "Welsh Fire", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" }
];

const pastWinners = [
  { year: "2021", winner: "Southern Brave" },
  { year: "2022", winner: "Trent Rockets" },
  { year: "2023", winner: "Oval Invincibles" },
  { year: "2024", winner: "Oval Invincibles" },
  { year: "2025", winner: "Oval Invincibles" }
];

const faqs = [
  {
    q: "When does The Hundred 2026 start?",
    a: "The Hundred 2026 starts on Tuesday, 21 July 2026. MI London hosts SunRisers Leeds in the opening match at the Kia Oval. The women's match starts at 2:45 pm BST, followed by the men's match at 6:30 pm BST."
  },
  {
    q: "How many teams participate in The Hundred?",
    a: "There are eight men's and eight women's teams that compete in The Hundred. Each team is based in a host city in England and Wales."
  },
  {
    q: "Is there any reserve day in The Hundred 2026?",
    a: "Yes, for the first time in the tournament's history, an additional day (14 August) has been added as a reserve day for the men's and women's Eliminator."
  },
  {
    q: "What is the format of The Hundred?",
    a: "Each team faces exactly 100 balls in The Hundred. Bowlers bowl at a restricted pace (a captain can call for one set of ten consecutive deliveries), but they do not face more than 20 balls. The first 25 deliveries are a powerplay, with each innings containing a strategic time-out."
  },
  {
    q: "What teams have changed their names?",
    a: "Three teams have changed their names in the 2026 season. Oval Invincibles are now known as MI London, Northern Superchargers have been rebranded as SunRisers Leeds, and Manchester Originals are now Manchester Super Giants. This was a result of a £975m investment in the eight franchises sold by the ECB."
  },
  {
    q: "Where will the The Hundred 2026 final be held?",
    a: "Lord's will host the final on Sunday, 16 August 2026."
  },
  {
    q: "Who won The Hundred 2025?",
    a: "Oval Invincibles won the men's competition for the third consecutive year, while Northern Superchargers won the women's tournament."
  },
  {
    q: "How many overseas players can a team sign?",
    a: "Starting from the 2026 season, every team can sign a maximum of four overseas players."
  }
];

export default function TheHundredSchedulePage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 ">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          
          {/* Main Title Banner */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#FFD13F] font-black text-2xl md:text-3xl lg:text-4xl tracking-wide leading-tight">
              The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets
            </h1>
            <p className="text-[#F0901A] font-bold text-xs md:text-sm">
              📅 Published: July 9, 2026 | Last updated: July 9, 2026
            </p>
            
            <h2 className="text-white font-extrabold text-lg md:text-xl tracking-wide mt-4 border-b border-[#F0901A]/10 pb-2">
              The Hundred Scheduled 2026: Dates First (As It Should Be)
            </h2>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                The Hundred will take place from <strong>21 July to 16 August 2026</strong>, with the opening match at the Kia Oval between MI London and SunRisers Leeds. Chances are, you haven't heard of either team by that name, as until recently they were known as Oval Invincibles and Northern Superchargers. Then they got bought.
              </p>
              <p>
                And not just bought, but lavishly invested in. The ECB sold a stake in every franchise for a combined sum of over £975 million. Three teams had their names changed by their IPL owners. A player auction took place in March, the first proper auction in British sporting history.
              </p>
              <p>
                Will all this herald a new era for British cricket? Perhaps. It has certainly made for an enticing buildup, but we'll save the verdict for later.
              </p>
              <p>
                All the information you need before the first ball is run is below: the 2026 schedule with UK and IST timings, teams, squads, auction sales, TV coverage, and tickets.
              </p>
            </div>
          </section>

          {/* Key Dates Section */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              📅 The Hundred 2026: Key Dates at a Glance
            </h2>
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Detail</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {keyDates.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-bold text-white">{item.detail}</td>
                      <td className="p-4 text-xs md:text-sm text-gray-300">{item.info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Full Schedule Section */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🏏 The Hundred 2026 Schedule & Fixtures (Full Match List)
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              A word on reading the following table: every day contains a double-header, women's game first followed by the men's. The two matches take place at the same venue, with the same two teams, and with one ticket. Unless otherwise stated, times are in BST. For those watching from India, the IST column conveniently marks the timings of the men's matches, which tend to fall in prime time.
            </p>
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-3 md:p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Date</th>
                    <th className="p-3 md:p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Match</th>
                    <th className="p-3 md:p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Venue</th>
                    <th className="p-3 md:p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Women (BST)</th>
                    <th className="p-3 md:p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Men (BST / IST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {scheduleData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-3 md:p-4 text-xs font-bold text-white whitespace-nowrap">{row.date}</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm font-extrabold text-amber-300">{row.match}</td>
                      <td className="p-3 md:p-4 text-xs text-gray-300">{row.venue}</td>
                      <td className="p-3 md:p-4 text-xs text-gray-400 whitespace-nowrap">{row.women}</td>
                      <td className="p-3 md:p-4 text-xs font-bold text-white whitespace-nowrap">{row.men}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Eight group fixtures for each side: four home games, four away, with each team playing against each other once, plus a derby against their nearest rivals. The top three qualify through to the final, with the second and third place fixtures in the Eliminator on 14 August. The latter also has a reserve day for the first time, after two rain-affected finals in 2023 (women) and 2025 (men).
            </p>
          </section>

          {/* Franchise Section */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🛡️ The Hundred Auction 2026: All 8 Franchises
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              It is the first season of The Hundred under the new ownership, and the franchises have undergone a significant overhaul. New names, new coaches for half of the teams, and the new crest for each franchise to denote their parent IPL ownership. The eight teams, venues, and owners:
            </p>
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Team</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Home Venue</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Owner/Investor</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Men's Coach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {franchises.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{item.team}</td>
                      <td className="p-4 text-xs text-gray-300">{item.venue}</td>
                      <td className="p-4 text-xs md:text-sm font-bold text-amber-300">{item.owner}</td>
                      <td className="p-4 text-xs text-gray-400">{item.coach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The figures on the sales of these franchises have smashed the ECB's expectations, totaling over £975 million for the eight teams that did not exist before 2021. London Spirit set the standard in the auctions, selling for 49% for a sum of £145 million, which would make little sense to most outside the club's boardroom. According to the ECB, £500 million will be funneled back into the development of English and Welsh cricket, with £50 million earmarked for grassroots. It remains to be seen how much of that money will trickle down to your local cricket club.
            </p>
          </section>

          {/* Auction & Squads Section */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              💰 The Hundred 2026 Auction & Squads
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              The UK has seen its fair share of drafts in the history of sports, but never an auction. There were two in the women's and men's competitions, both of which had a very compelling viewing experience. The auction rules are quite simple, with every franchise bringing up to four players they have signed or retained, with the rest of the squad being purchased at the auction for a total of £2.05 million (men) or £880,000 (women). There was one significant change to the auction rules: overseas players. Previously, a team could only buy three overseas players in their 11-a-side squad, but now that number has risen to four. You can see how it has affected the rosters further below.
            </p>

            <h3 className="text-white font-extrabold text-base md:text-lg tracking-wide mt-2">
              The biggest buys by the men's teams
            </h3>
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Player</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Team</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {biggestBuys.map((buy, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs md:text-sm font-extrabold text-white">{buy.player}</td>
                      <td className="p-4 text-xs text-gray-300">{buy.team}</td>
                      <td className="p-4 text-xs md:text-sm font-black text-[#F0901A]">{buy.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              The women's auction saw equally impressive individual performances by Sophie Devine and Beth Mooney, who went to Welsh Fire and Trent Rockets respectively for £210,000 each. However, the biggest sum of all barely came to the auction room in England because of one particular pre-signing deal. Harry Brook and SunRisers Leeds signed a deal that could fetch up to £500,000, which would have broken the auction record had it been at the auction.
            </p>

            <h3 className="text-white font-extrabold text-base md:text-lg tracking-wide mt-4">
              Marquee players from direct signings (men's teams)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { team: "MI London", players: "Sam Curran, Rashid Khan, Will Jacks, Nicholas Pooran" },
                { team: "SunRisers Leeds", players: "Harry Brook, Mitchell Marsh, Brydon Carse, Nathan Ellis" },
                { team: "Manchester Super Giants", players: "Jos Buttler, Heinrich Klaasen, Noor Ahmad, Liam Dawson" },
                { team: "London Spirit", players: "Liam Livingstone, Dewald Brevis, Adam Zampa, Jamie Overton" },
                { team: "Southern Brave", players: "Jofra Archer, Jamie Smith, Marcus Stoinis, Tristan Stubbs" },
                { team: "Trent Rockets", players: "Ben Duckett, Tim David, Tom Banton, Mitchell Santner" },
                { team: "Welsh Fire", players: "Phil Salt, Chris Woakes, Marco Jansen, Rachin Ravindra" },
                { team: "Birmingham Phoenix", players: "Jacob Bethell, Rehan Ahmed, Mitchell Owen, Donovan Ferreira" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#05080f] p-4 rounded-xl border border-[#F0901A]/5">
                  <h4 className="text-[#FFD13F] font-extrabold text-sm mb-1">{item.team}</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.players}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              The women's rosters are as star-studded as one could hope to see in a competition of this size. It seems that the World XI has been split with a coin toss to create the rosters of the English teams. Manchester Super Giants somehow got Smriti Mandhana, Meg Lanning, and Sophie Ecclestone in their ranks, while Ellyse Perry plays for Birmingham Phoenix. Nat Sciver-Brunt and Ashleigh Gardner are teammates at Trent Rockets, while Hayley Matthews and Amelia Kerr are with MI London. Laura Wolvaardt and Jemimah Rodrigues play for Southern Brave, and Marizanne Kapp turned up at London Spirit.
            </p>
          </section>

          {/* Points Table Section */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              📊 The Hundred Points Table 2026
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              There are no points to report yet, as all eight teams have played zero matches. The table gets updated after every matchday on this page, starting from 21 July.
            </p>
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10">
              <table className="w-full text-center border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-3 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Pos</th>
                    <th className="p-3 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10 text-left">Team</th>
                    <th className="p-3 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Pld</th>
                    <th className="p-3 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">W</th>
                    <th className="p-3 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">L</th>
                    <th className="p-3 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">NR</th>
                    <th className="p-3 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Pts</th>
                    <th className="p-3 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">NRR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {pointsTable.map((team, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-3 text-xs font-bold text-white">{team.pos}</td>
                      <td className="p-3 text-xs md:text-sm font-extrabold text-white text-left">{team.team}</td>
                      <td className="p-3 text-xs text-gray-300">{team.pld}</td>
                      <td className="p-3 text-xs text-gray-300">{team.w}</td>
                      <td className="p-3 text-xs text-gray-300">{team.l}</td>
                      <td className="p-3 text-xs text-gray-300">{team.nr}</td>
                      <td className="p-3 text-xs font-bold text-amber-300">{team.pts}</td>
                      <td className="p-3 text-xs text-gray-400">{team.nrr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Scoring rules are rather straightforward: two points for a win, one point for a tie/no-result, and net run rate decides everything else, with the top three teams progressing to <a href="#the-hundred-final-2026" className="text-[#00ccff] hover:underline font-bold">the final</a>.
            </p>
          </section>

          {/* Broadcaster & Streaming Section */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              📺 How to Watch The Hundred 2026: TV & Live Streaming
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sky Sports has the rights to all 68 matches in the UK, as has been the case since the tournament's inaugural season. If you do not have Sky, you are not completely out of luck, as the BBC will show 16 matches on free-to-air channels. Additionally, all matches will be available on BBC Sounds, with highlights shown on iPlayer and the Sport website. Sky Go will be available for those on the move, while NOW will provide an ad-supported streaming service with no long-term contract.
            </p>

            <h3 className="text-white font-extrabold text-base md:text-lg tracking-wide border-b border-[#F0901A]/10 pb-2">
              Live Streaming in India: Men's Match Timings
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The men's matches will be shown from 7 pm IST onwards, with most matches starting at 11 pm IST. As Sunrisers Hyderabad, Mumbai Indians, and Lucknow Super Giants have all bought English franchises, there is no doubt that the rivalries within The Hundred will be of interest to Indian fans as well. The official broadcaster for India tends to be revealed in the first few months of the year, so keep an eye out on 21 July, when the first match of the tournament will take place.
            </p>
          </section>

          {/* Tickets Section */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🎟️ The Hundred 2026 Tickets
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tickets are available at <a href="https://www.thehundred.com/tickets" target="_blank" rel="noopener noreferrer" className="text-[#00ccff] hover:underline font-bold">thehundred.com/tickets</a>, with the The Hundred app being needed to access them. The move away from paper tickets has disappointed some fans, and it is difficult to disagree. The prices are reasonable, with one ticket covering both the women's and men's match, which means getting two games for the price of one. A free registration on the website gives you early access to the best matches ahead of the general release. Tickets are limited for kids, which is a fantastic way to see the game without spending much. On the other hand, Finals Day tickets sell out well before the big match, so it is best to register in advance or watch from home.
            </p>
          </section>

          {/* Finals Section */}
          <section id="the-hundred-final-2026" className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🏆 The Hundred Final 2026
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Finals Day will take place on Sunday, 16 August 2026, with the women's final at 2:15 pm and the men's final at 6:00 pm BST. The first-place team will have two days' rest before the final, with the second and third-placed teams having to contest the Eliminator on 14 August. There is no route to victory that is easy, but neither team will complain about this scenario, as all four finalists in 2025 and 2023 have come from either the group stage or the Eliminator.
            </p>
          </section>

          {/* History / Past Winners Section */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              🏆 The Hundred Past Winners (Men's)
            </h2>
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0901A]/10 max-w-md">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#05080f]">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Year</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-[#FFD13F] border-b border-[#F0901A]/10">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0901A]/5">
                  {pastWinners.map((winner, idx) => (
                    <tr key={idx} className="hover:bg-[#1a2233]/30 transition-colors">
                      <td className="p-4 text-xs font-bold text-white">{winner.year}</td>
                      <td className="p-4 text-xs md:text-sm font-extrabold text-amber-300">{winner.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              This makes MI London hot favorites to complete a three-peat in 2026, and with good reason, as no other team has managed to defend their title in the competition's short history. On the other hand, the women's side of the competition does not have a clear favorite, with Oval Invincibles (2021), Southern Brave (2023), London Spirit (2024), and Northern Superchargers (2025) all having a claim. SunRisers Leeds is the defending champion as well, and the new name has yet to resonate with the supporters.
            </p>
          </section>

          {/* FAQs Accordion */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2 flex items-center gap-2">
              ❓ The Hundred 2026: FAQs
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
            <p className="text-gray-400 text-xs mt-2 italic">
              *Last updated: 9 July 2026. Fixtures and squads as per ECB announcements. Points table updated during the tournament.*
            </p>
          </section>

          {/* Call to Action WhatsApp Banner */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center gap-4 shadow-lg shadow-black">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl uppercase tracking-wider">
              Ready to Bet on The Hundred 2026?
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl font-semibold leading-relaxed">
              Get your official Reddy Anna Betting ID in less than 60 seconds on WhatsApp! Bet with top industry odds, instant 24/7 withdrawals, and get up to 150% Welcome Bonus.
            </p>
            <div className="pt-2">
              <ConicButton text="Get Your Betting ID via WhatsApp Now" />
            </div>
            <p className="text-gray-400 text-xs mt-2 italic">
              Last updated: 9 July 2026. Fixtures and squads as per official ECB announcements.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

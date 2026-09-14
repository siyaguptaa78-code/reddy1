import React from "react";
import { CONFIG } from "@/utils/config";

export const BlogCtaCard: React.FC = () => {
 return (
 <section className="w-full bg-gradient-to-br from-[#0c1322] to-[#080d1a] border border-[#F0901A]/20 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center gap-5 shadow-2xl shadow-black my-8 relative overflow-hidden group">
 {/* Background ambient light */}
 <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#F0901A]/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
 <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#FFD13F]/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

 <span className="bg-[#F0901A]/10 border border-[#F0901A]/20 text-[#FFD13F] text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
 ⚡ Instant Book ID Provider
 </span>

 <h3 className="text-white font-black text-xl md:text-3xl uppercase tracking-wide max-w-2xl leading-tight">
 Ready to Bet with <span className="bg-gradient-to-r from-[#FFD13F] to-[#F0901A] bg-clip-text text-transparent">Reddy Anna Book</span>?
 </h3>

 <p className="text-gray-300 text-sm md:text-base max-w-xl font-medium leading-relaxed">
 Get your verified official online account in less than 60 seconds. Place bets on live sports and casino matches with the industry's highest odds, instant 24/7 payouts, and get a special 150% Welcome Bonus.
 </p>

 <div className="pt-2 w-full max-w-md">
 <a
          href={CONFIG.whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-black text-black bg-gradient-to-r from-[#FFD13F] to-[#F0901A] rounded-2xl hover:from-[#F0901A] hover:to-[#FFD13F] transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-[#F0901A]/20 hover:scale-[1.03] text-sm md:text-base cursor-pointer"
 >
 <span>💬</span> Get Your ID on WhatsApp Now
 </a>
 </div>

 <div className="flex gap-6 text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider mt-2 border-t border-[#F0901A]/10 pt-4 w-full justify-center">
 <span>⏱️ 60 Sec Activation</span>
 <span className="text-gray-600">|</span>
 <span>💳 Instant 24/7 Withdrawals</span>
 <span className="text-gray-600">|</span>
 <span>🛡️ 100% Safe & Trusted</span>
 </div>
 </section>
 );
};

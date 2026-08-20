import React from "react";
import { CONFIG } from "@/utils/config";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#030509] border-t border-white/5 pt-20 pb-10 px-4 md:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left relative z-10">
        
        {/* Column 1: Brand Info */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-black font-black text-xl shadow-lg">R</div>
             <h4 className="text-white font-black text-2xl tracking-tight">
               Reddy Anna
             </h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed pr-0 md:pr-10">
            Operating since 2010, Reddy Anna provides secure betting services across India. Get your official ID in minutes and join thousands of daily active users on the most trusted sports exchange platform.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href={CONFIG.whatsappUrl} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-colors" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.3-.3-.5-.3h-.6c-.2 0-.5.1-.7.3-.3.3-.8.8-.8 2s.8 2.3 1 2.5c.2.2 1.7 2.6 4 3.6 2 .8 2.7.9 3.5.8.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5.1L2 22l5.1-1.3C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.1c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.8-3.2-.2-.3C4.1 14.8 3.7 13.4 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0088cc] hover:border-[#0088cc] transition-colors" aria-label="Telegram">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Popular Searches */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="text-white font-bold text-lg relative inline-block">
            Popular Tags
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-amber-500 rounded-full"></span>
          </h4>
          <ul className="flex flex-col gap-3 mt-2">
            {[
              { label: "Reddy Anna Online Book", href: "/" },
              { label: "Cricket Betting ID", href: "/reddy-anna-id/cricket-id" },
              { label: "IPL Betting ID", href: "/reddy-anna-id/ipl-betting-id" },
              { label: "Live Casino Games", href: "/indian-card-games" },
              { label: "Reddy Anna Club", href: "/" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-amber-400 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-amber-500/50 text-xs">▸</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="text-white font-bold text-lg relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-amber-500 rounded-full"></span>
          </h4>
          <ul className="flex flex-col gap-3 mt-2">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about-us" },
              { label: "Contact Us", href: "/contact-us" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms-and-conditions" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-amber-400 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-amber-500/50 text-xs">▸</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certification Badges */}
      <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-white/5">
        <h5 className="text-center text-gray-500 text-xs uppercase tracking-widest font-bold mb-6">Certified & Secured By</h5>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {CONFIG.images.certs.map((cert, idx) => (
            <img
              key={idx}
              src={cert}
              alt="Certification Badge"
              className="h-8 md:h-10 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
        <p>© {new Date().getFullYear()} Reddy Anna Book. All Rights Reserved.</p>
        <p className="max-w-2xl text-center md:text-right leading-relaxed text-[11px] text-gray-600">
          <span className="text-gray-400 font-bold">18+ Only.</span> Warning: Online betting and gambling can be addictive and pose a financial risk. Only persons aged 18 years and over are permitted to engage in such activities solely for entertainment purposes. This platform is protected by SSL encryption security certificates.
        </p>
      </div>
    </footer>
  );
};

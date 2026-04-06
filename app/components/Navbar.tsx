"use client";

import Link from "next/link";
export default function Navbar() {

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      
      <div className="flex items-center justify-between px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-serif tracking-tight">
            DC
          </div>

          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm tracking-[0.2em] text-white/80">
              DAKOTA COLLECTIVE
            </span>
            <span className="text-xs text-white/40">
              REAL-TIME LEAD SYSTEMS
            </span>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#process" className="hover:text-white transition">Process</Link>
          <Link href="#proof" className="hover:text-white transition">Proof</Link>
          <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="#faq" className="hover:text-white transition">FAQ</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="#pricing">
            <button className="px-5 py-2 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition text-sm">
              View pricing
            </button>
          </Link>

          <Link href="#contact">
            <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-[1.03] transition text-sm">
              Get started →
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
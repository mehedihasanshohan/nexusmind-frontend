"use client";

import React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useScrolled } from "@/app/hooks/useScrollled";
import { useCountdown } from "@/app/hooks/useCountdown";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const scrolled = useScrolled(20);
  const countdown = useCountdown();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full">

      {/* Top Promo Banner */}
      <div className="w-full bg-[#6366F1]/10 border-b border-[#6366F1]/20 py-2 flex justify-center items-center">
        <div className="flex items-center gap-2 bg-[#6366F1]/20 px-3 py-0.5 rounded-full border border-[#6366F1]/30">
          <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-pulse" />
          <span className="text-[#A5B4FC] text-[11px] font-bold tracking-widest uppercase">
            30% OFF UNTIL {countdown}
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled ? "bg-nav-scrolled py-3 border-b border-theme" : "bg-transparent py-6"
      }`}>
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-logo">
              <span className="text-black font-bold text-xs italic">P</span>
            </div>
            <span className="text-base-clr font-display font-black text-xl tracking-tighter italic uppercase">
              PPA
            </span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-muted-clr font-medium text-sm">
            <Link href="#overview" className="hover:text-primary-lit transition-colors">Overview</Link>
            <Link href="#curriculum" className="hover:text-primary-lit transition-colors">Curriculum</Link>
            <Link href="#testimonials" className="hover:text-primary-lit transition-colors">Testimonials</Link>
            <Link href="#pricing" className="hover:text-primary-lit transition-colors">Pricing</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-theme hover:bg-primary-dim transition-all"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link href="#enroll" className="bg-[#6366f1] hover:bg-[#818cf8] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-enroll transition-all hover:-translate-y-0.5">
              Enroll now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
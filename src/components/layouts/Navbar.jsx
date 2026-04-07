"use client";

import React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useScrolled } from "@/app/hooks/useScrollled";
import { PPALogo } from "../sections/PPALogo";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const scrolled = useScrolled(20);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <section id="overview" className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full">
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-nav-scrolled py-3 border-b border-theme backdrop-blur-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
            <PPALogo size={28} />
          </Link>

          {/* Nav Links - Figma Styled */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[16px] font-semibold text-muted-clr hover:text-base-clr transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions: Theme Toggle & CTA */}
          <div className="flex items-center gap-6">

            {/* 🌙 Figma Styled Theme Switcher (Capsule Design) */}
            <div className="relative flex items-center bg-black/20 dark:bg-white/5 border border-theme p-1 rounded-full w-[72px] h-[36px] overflow-hidden">
              {/* Sliding Background Indicator */}
              <div
                className={`absolute w-[28px] h-[28px] bg-white/10 dark:bg-primary-lit/20 rounded-full transition-all duration-300 ease-out border border-white/5 ${
                  theme === 'dark' ? 'translate-x-0' : 'translate-x-[34px]'
                }`}
              />

              <button
                onClick={() => setTheme("dark")}
                className={`relative z-10 flex-1 flex justify-center transition-colors ${theme === 'dark' ? 'text-primary-lit' : 'text-faint-clr'}`}
              >
                <Moon size={16} strokeWidth={2.5} />
              </button>

              <button
                onClick={() => setTheme("light")}
                className={`relative z-10 flex-1 flex justify-center transition-colors ${theme === 'light' ? 'text-primary-lit' : 'text-faint-clr'}`}
              >
                <Sun size={16} strokeWidth={2.5} />
              </button>
            </div>

            {/* CTA Button */}
            <Link
              href="#enroll"
              style={{ backgroundColor: 'var(--btn-bg)' }}
              className="bg-primary hover:bg-primary-lit text-white px-7 py-2.5 rounded-2xl text-[13px] font-bold shadow-cta hover:shadow-cta-hover transition-all active:scale-95"
            >
              Enroll now
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};
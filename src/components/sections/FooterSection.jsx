"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-deep pt-[100px] pb-10 border-t border-theme">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Footer-Content (Figma Layer 2312) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-[80px]">

          {/* Title Area (Figma Layer) */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-base-clr font-display leading-[1.1] tracking-tighter">
              The Deep Work <br className="hidden md:block" /> Blueprint
            </h2>
            <p className="text-muted-clr text-sm md:text-base font-medium max-w-[340px]">
              Master Focus & Get More Done in Less Time
            </p>
          </div>

          <div className="w-[320px] h-[180px] bg-primary rounded-[24px] p-6 flex flex-col justify-between items-start cursor-pointer group hover:bg-primary-lit transition-colors duration-300 relative">

            {/* Top Row: Avatar Stack + Arrow */}
            <div className="w-full flex items-center justify-between gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`/u${i}.jpg`}
                    className="w-[48px] h-[48px] rounded-full border-[3px] border-primary object-cover group-hover:border-primary-lit transition-colors"
                    alt="Student"
                  />
                ))}
              </div>

              {/* White Arrow Circle */}
              <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center text-primary shadow-lg group-hover:translate-x-1.5 transition-transform duration-300">
                <ArrowRight size={26} strokeWidth={3} />
              </div>
            </div>

            {/* Bottom Row: Text */}
            <p className="text-white font-bold text-sm tracking-tight">
              Join with 5K other students
            </p>

            {/* Subtle light glow overlay for dark mode only */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-[24px] pointer-events-none transition-opacity duration-300 dark:block hidden" />
          </div>
        </div>

        {/* Footer-Links (Figma Layer 2312) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-theme">

          {/* Copyright Text */}
          <p className="text-faint-clr text-[11px] font-semibold tracking-widest uppercase order-2 md:order-1">
            © Copyright {currentYear}, All Rights Reserved
          </p>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-10 order-1 md:order-2">
            {["Terms & conditions", "Refund policy", "Pricing", "Support"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-faint-clr hover:text-primary-lit text-[11px] font-bold transition-colors uppercase tracking-widest"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
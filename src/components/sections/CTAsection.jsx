"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2, PlusCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useCountdown } from "@/app/hooks/useCountdown";

export function CTASection() {
  const countdown = useCountdown();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[120px] px-6 bg-deep overflow-hidden"
    >
      <div className="max-w-[901px] mx-auto flex flex-col md:flex-row items-stretch gap-0 border border-theme rounded-[24px] overflow-hidden shadow-screen">

        {/* Left Card: Value Proposition (Dark BG) */}
        <div className="cta-card flex-1 bg-card p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-theme">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-dim px-3 py-1 rounded-full border border-glow-clr mb-8">
              <div className="w-1.5 h-1.5 bg-primary-lit rounded-full animate-pulse-dot shadow-badge-dot" />
              <span className="text-primary-lit text-[10px] font-bold tracking-widest uppercase">Introducing</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-base-clr leading-tight mb-4 font-display">
              The Deep Work <br /> Blueprint
            </h2>
            <p className="text-muted-clr text-sm mb-12">What extra you will get if you enroll now</p>

            {/* Bonus Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-base-clr group">
                <PlusCircle size={20} className="text-primary-lit group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium">Bonus: 1:1 coaching session to boost focus.</span>
              </div>
              <div className="flex items-center gap-3 text-base-clr group">
                <PlusCircle size={20} className="text-primary-lit group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium">Discount: Save 30% when you enroll now!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Pricing & Action (The Glowing Focus Card) */}
        <div className="cta-card flex-1 bg-card p-10 flex flex-col justify-between relative shadow-video">

          <div className="absolute inset-0 bg-primary-dim opacity-10 pointer-events-none hidden dark:block" />

          <div className="relative z-10">
            {/* Price Row */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-base-clr font-display">$349</span>
                <span className="text-xl text-faint-clr line-through font-medium font-body">$500</span>
              </div>
              <div className="bg-primary-dim text-primary-lit px-3 py-1 rounded-full text-[10px] font-bold border border-glow-clr shadow-badge-dot">
                30% off
              </div>
            </div>

            {/* Countdown Text */}
            <p className="text-primary-lit text-[13px] font-bold mb-10 tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-lit animate-ping" />
              30% off until {countdown}
            </p>

            {/* Curriculum List */}
            <div className="space-y-5">
              {[
                "6h of videos – Step-by-step deep work strategies.",
                "Templates & Trackers – Stay on track effortlessly.",
                "Live Q&As – Expert guidance & accountability.",
                "Exclusive Community – Connect with others."
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-muted-clr mt-0.5 shrink-0" />
                  <span className="text-muted-clr text-[13px] leading-relaxed font-body">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button className="relative z-10 w-full bg-primary hover:bg-primary-lit text-white font-bold py-4 rounded-xl mt-10 transition-all duration-300 shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 active:scale-[0.98]">
            Enroll now
          </button>
        </div>

      </div>
    </section>
  );
}
"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
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
      gsap.from(".cta-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    "6h of videos – Step-by-step deep work strategies.",
    "Templates & Trackers – Stay on track effortlessly.",
    "Live Q&As – Expert guidance & accountability.",
    "Exclusive Community – Connect with others.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-[80px] md:py-[120px] px-6 overflow-hidden bg-deep transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-dim blur-[100px] rounded-full pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

        {/* LEFT CARD: Information */}
        <div className="cta-card lg:col-span-7 rounded-[2rem] p-8 md:p-12 border border-theme flex flex-col justify-between bg-card/50 backdrop-blur-md">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-glow-clr bg-primary-dim">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-clr">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
               Introducing
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display mb-6 text-base-clr leading-[1.1] tracking-tight">
              The Deep Work <br />
              <span className="text-accent-clr">Blueprint</span>
            </h2>

            <p className="text-lg text-muted-clr font-medium mb-10 max-w-[450px]">
              What extra you will get if you enroll now:
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2466F2]/10 border border-[#2466F2]/20">
                  <Star size={18} className="text-[#2466F2] fill-[#2466F2]" />
                </div>
                <p className="text-base-clr text-sm md:text-base">
                  Bonus: 1:1 coaching session to boost focus.
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2466F2]/10 border border-[#2466F2]/20">
                  <Star size={18} className="text-[#2466F2] fill-[#2466F2]" />
                </div>
                <p className="text-base-clr text-sm md:text-base">
                  Discount: Save 30% when you enroll now!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: Pricing & Action */}
        <div className="cta-card lg:col-span-5 rounded-[2rem] p-8 md:p-10 border border-theme bg-card shadow-xl relative overflow-hidden">

          <div className="flex justify-between items-start mb-8">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-display text-base-clr">$349</span>
                <span className="text-2xl line-through text-faint-clr font-medium opacity-80">$500</span>
              </div>
              <p className="text-xs text-accent-clr mt-2 font-mono uppercase tracking-widest">
                {countdown} until price increases
              </p>
            </div>
            <div className="px-3 py-1 bg-[#2466F2] text-white text-[10px] font-black uppercase rounded-lg">
              30% OFF
            </div>
          </div>

          <div className="h-px w-full bg-theme mb-8" />

          {/* Features List */}
          <div className="space-y-4 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-accent-clr mt-1 shrink-0" />
                <span className="text-muted-clr text-sm font-medium leading-tight">{feature}</span>
              </div>
            ))}
          </div>

          {/* Figma Style Primary Button */}
          <button className="w-full group bg-[#2466F2] hover:bg-[#1c54cc] text-white font-bold py-2.5 rounded-xl transition-all shadow-cta active:scale-[0.98] flex items-center justify-center gap-3">
            <span>Enroll now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>


        </div>

      </div>
    </section>
  );
}
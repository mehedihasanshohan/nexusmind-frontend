"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function FeatureWrapper() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // বাম দিকের ইমেজ এনিমেশন
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        }
      );

      // ডান দিকের কন্টেন্ট এনিমেশন
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, delay: 0.2,
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-deep overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 items-stretch">

        {/* Left Side: Main Image */}
        <div ref={leftRef} className="flex-1 rounded-[24px] overflow-hidden border border-white/5">
          <img
            src="/feature-main.jpg"
            alt="Productivity focus"
            className="w-full h-full object-cover min-h-[400px] md:min-h-[600px]"
          />
        </div>

        {/* Right Side: Content Container */}
        <div
          ref={rightRef}
          className="flex-1 bg-[#111214] rounded-[24px] p-10 flex flex-col justify-between border border-white/5"
        >
          {/* Top Header */}
          <div className="flex justify-between items-start">
            <div className="bg-[#22d3ee]/10 text-[#22d3ee] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#22d3ee]/20">
              ● No worries
            </div>
            <div className="flex flex-col items-end">
              <div className="flex -space-x-2">
                <img src="/u1.jpg" className="w-8 h-8 rounded-full border-2 border-[#111214]" />
                <img src="/u2.jpg" className="w-8 h-8 rounded-full border-2 border-[#111214]" />
                <img src="/u3.jpg" className="w-8 h-8 rounded-full border-2 border-[#111214]" />
              </div>
              <span className="text-white/40 text-[10px] mt-1 font-medium italic">Join with 5K+ students</span>
            </div>
          </div>

          {/* Center Content */}
          <div className="space-y-6">
            <p className="text-white/60 text-lg leading-relaxed max-w-[340px]">
              The ability to concentrate deeply is the ultimate productivity hack.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              And fortunately its a skill you can train & develop.
            </h2>
          </div>

          {/* Small Thumbnails / Credibility */}
          <div className="flex gap-4 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-24 rounded-xl overflow-hidden border border-white/10 opacity-60 hover:opacity-100 transition-opacity">
                <img src={`/thumb-${i}.jpg`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export function FeatureWrapper() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Smooth slide-in from left
      gsap.fromTo(leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        }
      );

      // Smooth slide-in from right
      gsap.fromTo(rightRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, delay: 0.1, ease: "power4.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-deep transition-colors duration-500">
      <div className="max-w-[901px] mx-auto flex flex-col md:flex-row gap-4 items-stretch min-h-[500px] md:h-[642px]">

        {/* Left Side: Main Feature Image (w1) */}
        <div
          ref={leftRef}
          className="flex-[1.1] rounded-[32px] overflow-hidden border border-theme shadow-2xl relative min-h-[350px] md:min-h-full"
        >
          <Image
            src="/w1.png"
            alt="Deep Work Session"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Side: Content Card */}
        <div
          ref={rightRef}
          className="flex-1 bg-card rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-theme shadow-xl transition-colors duration-300"
        >
          {/* Top Header: Badge & Social Proof (w2, w3, w4) */}
          <div className="flex justify-between items-start gap-2">
            <div className="bg-primary-dim text-accent-clr px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-glow-clr inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />

              No worries
            </div>

            <div className="flex flex-col items-end">
              <div className="flex -space-x-3">
                {["w2", "w3", "w4"].map((imgName, idx) => (
                  <div key={idx} className="w-9 h-9 rounded-full border-2 border-card overflow-hidden shadow-sm">
                    <Image
                      src={`/${imgName}.jpg`}
                      alt="User profile"
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-faint-clr text-[10px] mt-2 font-semibold italic tracking-tight">
                Join with 5K+ students
              </span>
            </div>
          </div>

          {/* Center Content: Typography */}
          <div className="space-y-5 my-10 md:my-0">
            <p className="text-muted-clr text-base md:text-[18px] leading-relaxed font-medium max-w-[280px]">
              The ability to concentrate deeply is the ultimate productivity hack.
            </p>
            <h2 className="text-2xl md:text-[32px] font-display font-extrabold text-base-clr leading-[1.2]">
              And fortunately it’s <br />
              <span className="text-base-clr">a skill you can train</span> <br />
              & develop.
            </h2>
          </div>

          {/* Bottom Grid: Thumbnails (w5, w6, w7) */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {["w5", "w6", "w7"].map((imgName, idx) => (
              <div
                key={idx}
                className="aspect-[4/5] rounded-2xl overflow-hidden border border-theme bg-deep group relative"
              >
                <Image
                  src={`/${imgName}.jpg`}
                  alt="Feature detail"
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
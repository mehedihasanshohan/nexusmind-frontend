"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import img1 from "../../../public/paint-1.jpg";
import img2 from "../../../public/paint-2.jpg";
import img3 from "../../../public/paint-3.jpg";

export function PainPoints() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Headline Animation
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        },
      );

      // Images Stagger Animation
      gsap.fromTo(
        ".pain-image",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-deep py-24 md:py-40 px-6 overflow-hidden border-b border-theme transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Badge / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glow-clr bg-primary-dim text-accent-clr text-[11px] md:text-[12px] font-bold tracking-widest uppercase shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
          Are Distractions Holding You Back?
        </div>

        {/* Main Headline */}
        <div ref={textRef} className="gsap-hidden">
          <h2 className="max-w-[901px] font-display text-[28px] sm:text-[36px] md:text-[42px] leading-[1.3] tracking-tight text-base-clr transition-colors duration-300">
            If you struggle to focus, feel
            <br className="hidden md:block" />
            <span className="text-muted-clr">
              overwhelmed by endless tasks, or
            </span>
            <br className="hidden md:block" />
            <span className="text-muted-clr">
              procrastinate instead of making
            </span>
            <br className="hidden md:block" />
            progress, you’re not alone.
          </h2>
        </div>

        {/* Floating Images Container */}
        <div
          ref={imagesRef}
          className="flex items-center justify-center gap-3 md:gap-6 mt-8 w-full"
        >
          {/* Image 1 */}
          <div className="pain-image w-[120px] h-[118px] sm:w-[110px] sm:h-[140px] md:w-[130px] md:h-[160px] rounded-2xl overflow-hidden border border-theme rotate-[-6deg] hover:rotate-0 transition-all duration-500 shadow-xl bg-card">
            <Image
              src={img1}
              alt="Frustrated"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Image 2 (Center Highlight) */}
          <div className="pain-image w-[120px] h-[118px] sm:w-[110px] sm:h-[140px] md:w-[130px] md:h-[160px] rounded-2xl overflow-hidden border border-theme rotate-[-6deg] hover:rotate-0 transition-all duration-500 shadow-xl bg-card">
            <Image
              src={img2}
              alt="Stressed"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

          {/* Image 3 */}
          <div className="pain-image w-[80px] h-[110px] sm:w-[110px] sm:h-[140px] md:w-[130px] md:h-[160px] rounded-2xl overflow-hidden border border-theme rotate-[6deg] hover:rotate-0 transition-all duration-500 shadow-xl bg-card">
            <Image
              src={img3}
              alt="Procrastinating"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

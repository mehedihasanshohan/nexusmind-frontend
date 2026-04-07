
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { VideoSection } from "./VideoSection";
import { useCountdown } from "@/app/hooks/useCountdown";

export function HeroSection() {
  const countdown = useCountdown();

  // Refs for GSAP animations
  const badgeRef = useRef(null);
  const h1Ref    = useRef(null);
  const subRef   = useRef(null);
  const ctasRef  = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.3 });

      tl.fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(h1Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
        .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
        .fromTo(ctasRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
        .fromTo(videoWrapperRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    });
    return () => ctx.revert();
  }, []);

  return (
    /* Section Setup:
      - Background: Pure Black (#000000) based on Figma Surface/BG/-1
    */
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-deep">

      {/* 🌌 Blue Radial Glow (Figma Layer: BG-Gradient) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[900px] pointer-events-none">
        <div
          className="w-full h-full opacity-40 dark:opacity-60"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgba(99, 102, 241, 0.18) 0%, transparent 100%)",
            filter: "blur(100px)"
          }}
        />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-[10] w-full flex flex-col items-center text-center pt-[calc(64px+90px)] pb-12 px-6">
        <div className="w-full flex flex-col items-center gap-7">

          {/* 🏷️ Countdown Badge (Figma: Auto-layout with 30% off) */}
          <div
            ref={badgeRef}
            className="opacity-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />

            <span className="text-[13px] font-medium text-primary-lit tracking-tight">
              30% off until <span className="font-bold ml-1">{countdown}</span>
            </span>
          </div>

          {/* 👑 Headline (Figma: Master Focus & Get...) */}
          <h1
            ref={h1Ref}
            className="opacity-0 font-display text-[42px] md:text-[68px]  leading-[1.05] text-hero-title"
          >
            Master Focus & Get<br />
            <span>More Done in Less Time</span>
          </h1>

          {/* 📝 Subtitle */}
          <p
            ref={subRef}
            className="opacity-0 text-[17px] md:text-[19px] leading-relaxed text-muted-clr max-w-[540px]"
          >
            A step-by-step system to eliminate procrastination, train your
            brain for deep work, and boost productivity effortlessly.
          </p>

          {/* 🚀 CTAs */}
          <div ref={ctasRef} className="opacity-0 flex items-center gap-4 mt-2">
            <a
              href="#enroll"
              className="px-8 py-3.5 rounded-2xl bg-[#2466f2] text-white text-[15px] font-bold shadow-cta hover:bg-[#3b82f6] hover:-translate-y-1 transition-all duration-300"
            >
              Enroll now
            </a>
            <a
              href="#curriculum"
              style={{ backgroundColor: 'var(--btn-bg-curriculum)' }}
              className="px-8 py-3.5 rounded-2xl text-white border border-white/10 text-[15px] font-semibold hover:bg-white/10 transition-all"
            >
              Curriculum
            </a>
          </div>
        </div>
      </div>

      {/* 📹 Video Section Wrapper */}
      <div
        ref={videoWrapperRef}
        className="opacity-0 relative z-20 w-full max-w-275 px-6 pb-24 mt-4"
      >
        <VideoSection />
      </div>

      {/* Bottom Fade to Black (Ensures smooth transition to next section) */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#000000] to-transparent z-[5] pointer-events-none" /> */}
    </section>
  );
}
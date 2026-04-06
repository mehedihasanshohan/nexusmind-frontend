"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useCountdown } from "@/app/hooks/useCountdown";

export function HeroSection() {
  const countdown = useCountdown();
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctasRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.3 })
        .fromTo(badgeRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(h1Ref.current, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
        .fromTo(subRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(ctasRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.35");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-mesh relative min-h-screen flex items-center justify-center text-center pt-24 px-6 bg-deep">
      <div className="relative z-[2] max-w-[740px] flex flex-col items-center gap-6">
        <div ref={badgeRef} className="gsap-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glow-clr bg-primary-dim text-primary-lit text-sm">
          <span className="animate-pulse-dot w-2 h-2 rounded-full bg-primary-lit shadow-badge-dot" />
          <span>🔥 30% off until</span>
          <span className="font-bold">{countdown}</span>
        </div>
        <h1 ref={h1Ref} className="gsap-hidden text-hero font-extrabold leading-tight text-base-clr">
          Master Focus & <span className="gradient-text">Get More Done</span>
        </h1>
        <p ref={subRef} className="gsap-hidden text-muted-clr max-w-[480px]">
          Eliminate procrastination and train your brain for deep work.
        </p>
        <div ref={ctasRef} className="gsap-hidden flex gap-4">
          <button className="bg-[#6366f1] text-white px-8 py-3 rounded-xl shadow-cta">Enroll Now</button>
          <button className="border border-theme px-8 py-3 rounded-xl">Curriculum</button>
        </div>
      </div>
    </section>
  );
}
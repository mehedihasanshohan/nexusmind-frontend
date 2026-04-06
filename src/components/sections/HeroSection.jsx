// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { useCountdown } from "@/app/hooks/useCountdown";

// export function HeroSection() {
//   const countdown = useCountdown();
//   const badgeRef = useRef(null);
//   const h1Ref = useRef(null);
//   const subRef = useRef(null);
//   const ctasRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.3 })
//         .fromTo(badgeRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
//         .fromTo(h1Ref.current, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
//         .fromTo(subRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
//         .fromTo(ctasRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.35");
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="hero-mesh relative min-h-screen flex items-center justify-center text-center pt-24 px-6 bg-deep">
//       <div className="relative z-[2] max-w-[740px] flex flex-col items-center gap-6">
//         <div ref={badgeRef} className="gsap-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glow-clr bg-primary-dim text-primary-lit text-sm">
//           <span className="animate-pulse-dot w-2 h-2 rounded-full bg-primary-lit shadow-badge-dot" />
//           <span>🔥 30% off until</span>
//           <span className="font-bold">{countdown}</span>
//         </div>
//         <h1 ref={h1Ref} className="gsap-hidden text-hero font-extrabold leading-tight text-base-clr">
//           Master Focus & <span className="gradient-text">Get More Done</span>
//         </h1>
//         <p ref={subRef} className="gsap-hidden text-muted-clr max-w-[480px]">
//           Eliminate procrastination and train your brain for deep work.
//         </p>
//         <div ref={ctasRef} className="gsap-hidden flex gap-4">
//           <button className="bg-[#6366f1] text-white px-8 py-3 rounded-xl shadow-cta">Enroll Now</button>
//           <button className="border border-theme px-8 py-3 rounded-xl">Curriculum</button>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { BoltIcon, ArrowRightIcon, ArrowDownIcon } from "@/components/ui/Icons";
import { VideoSection } from "./VideoSection";
import { useCountdown } from "@/app/hooks/useCountdown";

export function HeroSection() {
  const countdown = useCountdown();

  const badgeRef = useRef(null);
  const h1Ref    = useRef(null);
  const subRef   = useRef(null);
  const ctasRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.35 })
        .fromTo(badgeRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(h1Ref.current,    { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
        .fromTo(subRef.current,   { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(ctasRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.35");
    });
    return () => ctx.revert();
  }, []);

  return (
    /*
      Hero-Section from Figma:
      - Flow: Vertical (items stacked)
      - Width: Fill (981px)
      - Color: Surface/BG/-1 = #000000
      - Contains: BG-Gradient, Hero-Content, Video-Container
    */
    <section className="hero-mesh relative min-h-screen flex flex-col items-center overflow-hidden bg-deep">

      {/* ── Hero text content ── */}
      <div className="relative z-[2] w-full flex flex-col items-center text-center pt-[calc(64px+56px)] pb-10 px-6">
        <div className="max-w-[700px] flex flex-col items-center gap-6">

          {/* Countdown badge */}
          <div
            ref={badgeRef}
            className="gsap-hidden inline-flex items-center gap-2 px-4 py-[7px] rounded-full border border-glow-clr bg-primary-dim backdrop-blur-sm text-[13px] font-medium text-primary-lit tracking-[0.2px]"
          >
            <span className="animate-pulse-dot w-[7px] h-[7px] rounded-full bg-[#818cf8] shadow-badge-dot flex-shrink-0" />
            <span>🔥 30% off until</span>
            <span className="font-display font-bold tracking-[1px]">{countdown}</span>
          </div>

          {/* Headline */}
          <h1
            ref={h1Ref}
            className="gsap-hidden font-display text-hero font-extrabold leading-[1.1] tracking-[-0.03em] text-base-clr"
          >
            Master Focus &amp; Get<br />
            <span className="gradient-text">More Done in Less Time</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="gsap-hidden text-base leading-[1.7] text-muted-clr max-w-[480px]"
          >
            A step-by-step system to eliminate procrastination, train your
            brain for deep work, and boost productivity effortlessly.
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className="gsap-hidden flex items-center gap-3 flex-wrap justify-center">
            <a
              href="#pricing"
              className="px-7 py-[13px] rounded-xl bg-[#6366f1] text-white no-underline text-[15px] font-semibold inline-flex items-center gap-2 shadow-cta hover:bg-[#818cf8] hover:-translate-y-0.5 hover:shadow-cta-hover transition-all duration-200"
            >
              {/* <BoltIcon /> */}
              Enroll now
            </a>
            <a
              href="#curriculum"
              className="px-7 py-[13px] rounded-xl bg-transparent text-base-clr no-underline text-[15px] font-medium inline-flex items-center gap-2 border border-theme hover:border-glow-clr hover:bg-primary-dim hover:-translate-y-0.5 transition-all duration-200"
            >
              Curriculum
              {/* <ArrowRightIcon /> */}
            </a>
          </div>
        </div>
      </div>

      {/*
        ── Video-Container (Figma child of Hero-Section)
        Sits directly below Hero-Content, full-width within hero
      */}
      <div className="relative z-[2] w-full">
        <VideoSection />
      </div>

      {/* Scroll cue */}
      <div className="animate-float-cue absolute bottom-6 left-1/2 z-[3] flex flex-col items-center text-faint-clr opacity-50">
        {/* <ArrowDownIcon /> */}
      </div>
    </section>
  );
}
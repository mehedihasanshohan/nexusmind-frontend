"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const benefits = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <circle cx="12" cy="12" r="8" strokeWidth="1" />
      </svg>
    ),
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    text: "Overcome procrastination & get more done.",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    ),
    text: "Build lasting habits for long-term success.",
  },
];

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const itemGap = "72px";

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Timeline items animation
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-deep w-full flex flex-col items-center px-6 py-28 transition-colors duration-300">

      {/* Badge Section with Pulsing Glow Dot */}
      <div className="flex items-center gap-3 bg-primary-dim border border-glow-clr rounded-full px-5 py-2 mb-8 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-clr opacity-75"></span>

        </span>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />

        <span className="text-[11px] md:text-xs text-accent-clr font-bold tracking-[0.1em] uppercase">
          The Deep Work Blueprint
        </span>
      </div>

      {/* Main Heading */}
      <h2
        className="text-base-clr font-display text-center max-w-[600px] leading-[1.2] tracking-tight mb-20"
        style={{ fontSize: "clamp(28px, 6vw, 44px)" }}
      >
        A self-paced, results-driven course designed to help you
      </h2>

      {/* Timeline Wrapper */}
      <div ref={triggerRef} className="w-full max-w-[480px] relative flex flex-col">

        {/* Continuous Dashed Vertical Line */}
        <div
          aria-hidden="true"
          className="absolute left-0 w-[1px] opacity-25"
          style={{
            top: "24px",
            bottom: "24px",
            backgroundImage: `repeating-linear-gradient(to bottom, var(--text-base) 0px, var(--text-base) 6px, transparent 6px, transparent 12px)`,
            zIndex: 0,
          }}
        />

        {benefits.map((item, index) => {
          const isFirst = index === 0;
          return (
            <div
              key={item.id}
              className="timeline-item flex items-start gap-6 relative group"
              style={{ marginTop: isFirst ? 0 : itemGap }}
            >
              {/* Connecting Neon Dot with strong Glow */}
              {!isFirst && (
                <div
                  aria-hidden="true"
                  className="absolute left-[-5px] w-[11px] h-[11px] rounded-full z-10 transition-transform group-hover:scale-125"
                  style={{
                    top: `calc(-${itemGap} / 2 - 5px)`,
                    backgroundColor: "#22d3ee",
                    boxShadow: "0 0 12px #22d3ee, 0 0 25px rgba(34, 211, 238, 0.7)",
                  }}
                />
              )}

              {/* Icon Container */}
              <div
                className="flex items-center justify-center rounded-2xl border border-theme flex-shrink-0 bg-card text-accent-clr shadow-sm transition-all duration-300 group-hover:border-accent-clr group-hover:shadow-badge"
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: "24px",
                  zIndex: 1,
                }}
              >
                {item.icon}
              </div>

              {/* Text Area */}
              <div className="flex-1 pt-3.5">
                <p className="text-base-clr font-semibold text-[17px] md:text-[20px] leading-snug tracking-tight transition-colors group-hover:text-accent-clr">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
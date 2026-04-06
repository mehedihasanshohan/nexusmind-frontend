"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function VideoSection() {
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(headerRef.current,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%"
          }
        }
      );

      // Card Animation
      gsap.fromTo(cardRef.current,
        { y: 48, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 82%"
          }
        }
      );
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  function handlePlay() {
    if (!cardRef.current) return;
    alert("🎬 Connect your YouTube embed or modal here!");
  }

  return (
    <section className="relative z-[2] bg-deep py-20 px-6 pb-24 overflow-hidden">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-12">

        <div ref={headerRef} className="flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[2px] uppercase text-accent-clr">
            <span className="w-7 h-px bg-[#22d3ee] opacity-50" />
            Are Distractions Holding You Back?
            <span className="w-7 h-px bg-[#22d3ee] opacity-50" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-base-clr tracking-[-0.02em]">
            Watch how we help you reclaim your focus
          </h2>
        </div>

        {/* Video Card */}
        <div ref={cardRef} className="relative w-full rounded-[20px] overflow-hidden border border-theme bg-card shadow-video transition-all duration-300 hover:-translate-y-1 group">
           <div onClick={handlePlay} className="aspect-video bg-black/40 flex items-center justify-center cursor-pointer">
              <span className="text-white">Click to Play Preview</span>
           </div>
        </div>

      </div>
    </section>
  );
}
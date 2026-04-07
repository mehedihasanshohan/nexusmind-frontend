"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function VideoSection() {
  const containerRef = useRef(null);
  const playRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 82%" },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  function handlePlay() {
    if (!playRef.current) return;
    gsap
      .timeline()
      .to(playRef.current, { scale: 0.88, duration: 0.12, ease: "power2.in" })
      .to(playRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "elastic.out(1,0.5)",
      });
  }

  return (
    <div className="w-full flex justify-center px-6 pb-16 relative z-2 bg-deep">
      <div
        ref={containerRef}
        className="
    gsap-hidden relative w-full max-w-266 cursor-pointer group
    rounded-4xl overflow-hidden
    border border-white/5
    transition-all duration-500
  "
        style={{
          aspectRatio: "16/9",
          boxShadow: "0 0 80px -20px rgba(99, 102, 241, 0.3)",
        }}
      >
        <Image
          src="/video-banner.png"
          alt="Nabil Alshad — PPA video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          width={1064}
          height={599}
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* <div
          className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{
            background:
              "linear-gradient(90deg, rgba(99,102,241,0.8) 0%, rgba(34,211,238,0.6) 50%, rgba(99,102,241,0.8) 100%)",
          }}
        /> */}

        <button
          ref={playRef}
          aria-label="Play video"
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            z-10 flex items-center justify-center
            transition-transform duration-300
            group-hover:scale-110
          "
          onClick={(e) => {
            e.stopPropagation();
            handlePlay();
          }}
        >
          <span
            className="
              absolute w-22 h-22 rounded-full
              border-2 border-white/30
              transition-all duration-300
              group-hover:w-25 group-hover:h-25 group-hover:border-white/20
            "
          />
          {/* Inner white circle */}
          <span
            className="
              relative w-15 h-15 rounded-full bg-white
              flex items-center justify-center
              shadow-[0_4px_24px_rgba(0,0,0,0.35)]
              transition-all duration-300
              group-hover:bg-white/95
            "
          >
            {/* Blue play triangle */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#6366f1"
              className="ml-1"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

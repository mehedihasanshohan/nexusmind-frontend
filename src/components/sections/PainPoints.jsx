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
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".pain-image",
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0b0d14] py-[200px] px-6 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-[901px] mx-auto flex flex-col items-center gap-8 text-center">

        {/* Badge / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22d3ee]/20 bg-[#22d3ee]/5 text-[#22d3ee] text-[12px] font-semibold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
          Are Distractions Holding You Back?
        </div>

        {/* Main Headline with Contrast */}
        <div ref={textRef} className="gsap-hidden">
          <h2 className="font-display text-[32px] md:text-[42px] font-bold leading-[1.3] tracking-tight text-white">
            If you struggle to focus, feel <br className="hidden md:block" />
            <span className="text-white/40">overwhelmed by endless tasks, or </span><br className="hidden md:block" />
            <span className="text-white/40">procrastinate instead of making </span><br className="hidden md:block" />
            progress, you are not alone.
          </h2>
        </div>

        {/* Floating Avatars / Pain Images */}
        <div
          ref={imagesRef}
          className="flex items-center justify-center gap-4 mt-4"
        >
          {/* Image 1 */}
          <div className="pain-image w-[100px] h-[120px] md:w-[120px] md:h-[150px] rounded-2xl overflow-hidden border border-white/10 rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <Image
              src={img1}
              alt="Frustrated person"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Image 2 (Center) */}
          <div className="pain-image w-[110px] h-[130px] md:w-[140px] md:h-[170px] rounded-2xl overflow-hidden border border-white/20 z-10 shadow-2xl scale-110">
            <Image
              src={img2}
              alt="Stressed person"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

          {/* Image 3 */}
          <div className="pain-image w-[100px] h-[120px] md:w-[120px] md:h-[150px] rounded-2xl overflow-hidden border border-white/10 rotate-[4deg] hover:rotate-0 transition-transform duration-500">
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
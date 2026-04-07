"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const testimonials = [
  { id: 1, name: "Alex Carter", role: "Freelance Designer", quote: "As someone who juggles multiple projects, staying focused was always a challenge.", image: "/u1.jpg", hasVideo: false },
  { id: 2, name: "Daniel Foster", role: "Content Creator", quote: "The deep work techniques I learned here changed my workflow completely.", image: "/u2.jpg", hasVideo: true },
  { id: 3, name: "Mark Davidson", role: "Software Developer", quote: "I never realized how much distractions were holding me back.", image: "/u3.jpg", hasVideo: false },
  { id: 4, name: "Sarah Jenkins", role: "Product Manager", quote: "This is the best investment I've made for my professional growth.", image: "/u4.jpg", hasVideo: false },
  { id: 5, name: "Jessica Bloom", role: "UI Architect", quote: "The internal architecture of my life has improved tenfold since this course.", image: "/u2.jpg", hasVideo: true },
];

export function TestimonialSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // কার্ডের উইডথ ৩০৮ পিক্সেল + গ্যাপ ১৬ পিক্সেল = ৩২৪ পিক্সেল
      const scrollAmount = 324;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-deep py-24 overflow-hidden">
      {/* Header Container - 1280px for alignment */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16">

        {/* Badge */}
        <div className="inline-block bg-primary-dim px-3 py-1 rounded-full border border-glow-clr mb-8">
          <span className="text-primary-lit text-[10px] font-bold uppercase tracking-[0.2em]">Testimonials</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-[56px] font-extrabold text-base-clr font-display leading-[1.05] mb-8 tracking-tighter">
          Real Results from <br /> Real People
        </h2>

        {/* Stats & Controls Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-10">
          <p className="text-muted-clr text-sm font-medium">Join with 5K other students</p>

          {/* Working Arrow Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-theme flex items-center justify-center text-base-clr hover:bg-card hover:border-primary-lit transition-all active:scale-95 cursor-pointer z-20"
              aria-label="Previous"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-theme flex items-center justify-center text-base-clr hover:bg-card hover:border-primary-lit transition-all active:scale-95 cursor-pointer z-20"
              aria-label="Next"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Area - Correct Overflow & Alignment */}
      <div className="w-full">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-[calc((100vw-1280px)/2+24px)]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[308px] h-[420px] bg-card border border-theme rounded-[32px] p-10 flex flex-col justify-between snap-start group relative transition-all duration-500 hover:shadow-video"
            >
              {/* Card Top: Image & Quote */}
              <div className="relative">
                <div className="relative w-14 h-14 mb-8">
                  <img
                    src={item.image}
                    className="w-full h-full rounded-full object-cover border border-theme group-hover:scale-105 transition-transform duration-500"
                    alt={item.name}
                  />
                  {/* Video Badge - Top right of image like Figma */}
                  {item.hasVideo && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white border-2 border-card">
                      <Play size={10} fill="currentColor" />
                    </div>
                  )}
                </div>

                <p className="text-base-clr/90 text-[17px] leading-[1.6] font-medium font-body">
                  "{item.quote}"
                </p>

                {/* Large Watch Video Button if hasVideo */}
                {item.hasVideo && (
                  <div className="mt-8 flex items-center gap-3 text-primary-lit font-bold text-[11px] tracking-widest cursor-pointer group/vid w-fit">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 group-hover/vid:bg-primary group-hover/vid:text-white transition-all">
                      <Play size={16} fill="currentColor" />
                    </div>
                    WATCH VIDEO
                  </div>
                )}
              </div>

              {/* Card Bottom: Identity */}
              <div className="mt-auto pt-6 border-t border-theme/50">
                <h4 className="text-base-clr font-bold text-sm tracking-tight">{item.name}</h4>
                <p className="text-faint-clr text-[11px] font-bold uppercase tracking-widest mt-1">{item.role}</p>
              </div>
            </div>
          ))}
          {/* Padding for the end of scroll */}
          <div className="min-w-[100px] h-1 shrink-0" />
        </div>
      </div>
    </section>
  );
}
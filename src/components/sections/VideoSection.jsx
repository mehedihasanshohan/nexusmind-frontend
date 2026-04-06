// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// export function VideoSection() {
//   const headerRef = useRef(null);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       gsap.registerPlugin(ScrollTrigger);
//     }

//     const ctx = gsap.context(() => {
//       // Header Animation
//       gsap.fromTo(headerRef.current,
//         { y: 36, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: headerRef.current,
//             start: "top 80%"
//           }
//         }
//       );

//       // Card Animation
//       gsap.fromTo(cardRef.current,
//         { y: 48, opacity: 0, scale: 0.97 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 82%"
//           }
//         }
//       );
//     });

//     return () => ctx.revert(); // Cleanup
//   }, []);

//   function handlePlay() {
//     if (!cardRef.current) return;
//     alert("🎬 Connect your YouTube embed or modal here!");
//   }

//   return (
//     <section className="relative z-[2] bg-deep py-20 px-6 pb-24 overflow-hidden">
//       <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-12">

//         <div ref={headerRef} className="flex flex-col items-center gap-3 text-center">
//           <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[2px] uppercase text-accent-clr">
//             <span className="w-7 h-px bg-[#22d3ee] opacity-50" />
//             Are Distractions Holding You Back?
//             <span className="w-7 h-px bg-[#22d3ee] opacity-50" />
//           </div>
//           <h2 className="font-display text-3xl md:text-4xl font-bold text-base-clr tracking-[-0.02em]">
//             Watch how we help you reclaim your focus
//           </h2>
//         </div>

//         {/* Video Card */}
//         <div ref={cardRef} className="relative w-full rounded-[20px] overflow-hidden border border-theme bg-card shadow-video transition-all duration-300 hover:-translate-y-1 group">
//            <div onClick={handlePlay} className="aspect-video bg-black/40 flex items-center justify-center cursor-pointer">
//               <span className="text-white">Click to Play Preview</span>
//            </div>
//         </div>

//       </div>
//     </section>
//   );
// }








"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function VideoSection() {
  const containerRef = useRef(null);
  const playRef      = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 82%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  function handlePlay() {
    if (!playRef.current) return;
    gsap.timeline()
      .to(playRef.current, { scale: 0.88, duration: 0.12, ease: "power2.in" })
      .to(playRef.current, { scale: 1,    duration: 0.2,  ease: "elastic.out(1,0.5)" });
    // TODO: open YouTube modal / lightbox
  }

  return (
    /*
      Video-Container from Figma:
      - max-width: 1064px (Figma "Max width")
      - border-radius: 24px
      - border: 1px solid (blue glow)
      - aspect-ratio ~ 901 / 507.24  ≈ 16/9
      - Surface/BG/Overlay fill + 20% black overlay
    */
    <div className="w-full flex justify-center px-6 pb-16 relative z-[2] bg-deep">
      <div
        ref={containerRef}
        onClick={handlePlay}
        className="
          gsap-hidden relative w-full max-w-[1064px] cursor-pointer group
          rounded-3xl overflow-hidden
          border border-[rgba(99,102,241,0.45)]
          transition-all duration-300
          hover:border-[rgba(99,102,241,0.75)]
        "
        style={{
          aspectRatio: "901 / 507",
          boxShadow:
            "0 0 0 1px rgba(99,102,241,0.2), 0 0 40px rgba(99,102,241,0.2), 0 24px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* ── Real photo thumbnail ── */}
        {/*
          In production replace the src below with your real image.
          Using a placeholder that matches the Figma man-with-glasses photo.
          The Figma layer is named "image" and is 901×507px fill.
        */}
        <img
          src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80"
          alt="Nabil Alshad — PPA video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Dark overlay (Figma: #000000 20%) */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Blue scan-line gradient at bottom (matches Figma blue strip) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[6px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(99,102,241,0.8) 0%, rgba(34,211,238,0.6) 50%, rgba(99,102,241,0.8) 100%)",
          }}
        />

        {/*
          ── Play Button (Figma: Play-Button component)
          - Outer ring: white, semi-transparent, ~80px diameter
          - Inner fill: white circle
          - Icon: blue play triangle
          - On hover: scale up, ring expands
        */}
        <button
          ref={playRef}
          aria-label="Play video"
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            z-10 flex items-center justify-center
            transition-transform duration-300
            group-hover:scale-110
          "
          onClick={(e) => { e.stopPropagation(); handlePlay(); }}
        >
          {/* Outer decorative ring */}
          <span
            className="
              absolute w-[88px] h-[88px] rounded-full
              border-2 border-white/30
              transition-all duration-300
              group-hover:w-[100px] group-hover:h-[100px] group-hover:border-white/20
            "
          />
          {/* Inner white circle */}
          <span
            className="
              relative w-[60px] h-[60px] rounded-full bg-white
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
// "use client";

// import React, { useRef } from "react";
// import { ArrowLeft, ArrowRight, Play } from "lucide-react";

// const testimonials = [
//   { id: 1, name: "Alex Carter", role: "Freelance Designer", quote: "As someone who juggles multiple projects, staying focused was always a challenge.", image: "/u1.jpg", hasVideo: false },
//   { id: 2, name: "Daniel Foster", role: "Content Creator", quote: "The deep work techniques I learned here changed my workflow completely.", image: "/u2.jpg", hasVideo: true },
//   { id: 3, name: "Mark Davidson", role: "Software Developer", quote: "I never realized how much distractions were holding me back.", image: "/u3.jpg", hasVideo: false },
//   { id: 4, name: "Sarah Jenkins", role: "Product Manager", quote: "This is the best investment I've made for my professional growth.", image: "/u4.jpg", hasVideo: false },
//   { id: 5, name: "Jessica Bloom", role: "UI Architect", quote: "The internal architecture of my life has improved tenfold since this course.", image: "/u2.jpg", hasVideo: true },
// ];

// export function TestimonialSection() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       // কার্ডের উইডথ ৩০৮ পিক্সেল + গ্যাপ ১৬ পিক্সেল = ৩২৪ পিক্সেল
//       const scrollAmount = 324;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="bg-deep py-24 overflow-hidden">
//       {/* Header Container - 1280px for alignment */}
//       <div className="max-w-[1280px] mx-auto px-6 mb-16">

//         {/* Badge */}
//         <div className="inline-block bg-primary-dim px-3 py-1 rounded-full border border-glow-clr mb-8">
//           <span className="text-primary-lit text-[10px] font-bold uppercase tracking-[0.2em]">Testimonials</span>
//         </div>

//         {/* Title */}
//         <h2 className="text-4xl md:text-[56px] font-extrabold text-base-clr font-display leading-[1.05] mb-8 tracking-tighter">
//           Real Results from <br /> Real People
//         </h2>

//         {/* Stats & Controls Row */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-10">
//           <p className="text-muted-clr text-sm font-medium">Join with 5K other students</p>

//           {/* Working Arrow Buttons */}
//           <div className="flex gap-4">
//             <button
//               type="button"
//               onClick={() => scroll("left")}
//               className="w-14 h-14 rounded-full border border-theme flex items-center justify-center text-base-clr hover:bg-card hover:border-primary-lit transition-all active:scale-95 cursor-pointer z-20"
//               aria-label="Previous"
//             >
//               <ArrowLeft size={24} />
//             </button>
//             <button
//               type="button"
//               onClick={() => scroll("right")}
//               className="w-14 h-14 rounded-full border border-theme flex items-center justify-center text-base-clr hover:bg-card hover:border-primary-lit transition-all active:scale-95 cursor-pointer z-20"
//               aria-label="Next"
//             >
//               <ArrowRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Slider Area - Correct Overflow & Alignment */}
//       <div className="w-full">
//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-[calc((100vw-1280px)/2+24px)]"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {testimonials.map((item) => (
//             <div
//               key={item.id}
//               className="min-w-[308px] h-[420px] bg-card border border-theme rounded-[32px] p-10 flex flex-col justify-between snap-start group relative transition-all duration-500 hover:shadow-video"
//             >
//               {/* Card Top: Image & Quote */}
//               <div className="relative">
//                 <div className="relative w-14 h-14 mb-8">
//                   <img
//                     src={item.image}
//                     className="w-full h-full rounded-full object-cover border border-theme group-hover:scale-105 transition-transform duration-500"
//                     alt={item.name}
//                   />
//                   {/* Video Badge - Top right of image like Figma */}
//                   {item.hasVideo && (
//                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white border-2 border-card">
//                       <Play size={10} fill="currentColor" />
//                     </div>
//                   )}
//                 </div>

//                 <p className="text-base-clr/90 text-[17px] leading-[1.6] font-medium font-body">
//                   {item.quote}
//                 </p>

//                 {/* Large Watch Video Button if hasVideo */}
//                 {item.hasVideo && (
//                   <div className="mt-8 flex items-center gap-3 text-primary-lit font-bold text-[11px] tracking-widest cursor-pointer group/vid w-fit">
//                     <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 group-hover/vid:bg-primary group-hover/vid:text-white transition-all">
//                       <Play size={16} fill="currentColor" />
//                     </div>
//                     WATCH VIDEO
//                   </div>
//                 )}
//               </div>

//               {/* Card Bottom: Identity */}
//               <div className="mt-auto pt-6 border-t border-theme/50">
//                 <h4 className="text-base-clr font-bold text-sm tracking-tight">{item.name}</h4>
//                 <p className="text-faint-clr text-[11px] font-bold uppercase tracking-widest mt-1">{item.role}</p>
//               </div>
//             </div>
//           ))}
//           {/* Padding for the end of scroll */}
//           <div className="min-w-[100px] h-1 shrink-0" />
//         </div>
//       </div>
//     </section>
//   );
// }

















"use client"
import { useRef } from "react"
import { motion } from "motion/react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonials = [
  {
    type: "text",
    name: "Alex Carter",
    role: "Freelance Designer",
    avatar: "https://i.pravatar.cc/150?u=alex",
    content: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to work with absolute clarity.",
  },
  {
    type: "video",
    name: "Daniel Foster",
    role: "Content Creator",
    avatar: "https://i.pravatar.cc/150?u=daniel",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=308&h=400&auto=format&fit=crop",
    content: "My productivity has never been better!",
  },
  {
    type: "text",
    name: "Mark Davidson",
    role: "Software Developer",
    avatar: "https://i.pravatar.cc/150?u=mark",
    content: "After applying the deep work techniques, I feel more in control of my time and energy. It's a game changer for devs.",
  },
  {
    type: "video",
    name: "Tom David",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/150?u=tom",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=308&h=400&auto=format&fit=crop",
    content: "Efficiency has doubled!",
  },
  {
    type: "text",
    name: "Sarah Jenkins",
    role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    content: "The templates provided are a game changer. I've managed to shave off 2 hours of busy work every single day.",
  },
  {
    type: "video",
    name: "James Wilson",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?u=james",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=308&h=400&auto=format&fit=crop",
    content: "Design workflow is 10x faster now.",
  }
]

export function Testimonials() {
  const sliderRef = useRef(null)

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 332
      const newScroll =
        direction === "left"
          ? sliderRef.current.scrollLeft - scrollAmount
          : sliderRef.current.scrollLeft + scrollAmount

      sliderRef.current.scrollTo({ left: newScroll, behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">Testimonials</span>
            </motion.div>
            <h2 className="text-4xl md:text-[56px] font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tighter">
              Real Results from <br /> Real People
            </h2>
            <p className="text-gray-500 dark:text-slate-400 font-medium">
              Join with 5K other students
            </p>
          </div>

          {/* Nav Buttons below the text for mobile, side for desktop */}
          <div className="flex gap-4">
            <button
              onClick={() => slide("left")}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => slide("right")}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Full Width Slider Wrapper */}
      <div className="relative w-full">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-[calc((100vw-1280px)/2+24px)] md:px-[calc((100vw-1216px)/2)]"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-[308px] h-[400px] flex-shrink-0 snap-start relative group rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0a0a0a] transition-all duration-500 hover:border-blue-500/30"
            >
              {item.type === "text" ? (
                <div className="h-full p-10 flex flex-col justify-between">
                  <div>
                    <img src={item.avatar} className="w-11 h-11 rounded-full mb-8 object-cover grayscale group-hover:grayscale-0 transition-all" alt="" />
                    <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-[16px] font-medium italic">
                      "{item.content}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-bold tracking-tight">{item.name}</h4>
                    <p className="text-gray-500 dark:text-slate-500 text-[11px] font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              ) : (
                <div className="h-full relative group/card cursor-pointer">
                  <img src={item.thumbnail} className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl transition-all group-hover/card:bg-blue-600 group-hover/card:scale-110">
                      <Play size={24} className="fill-white text-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10">
                    <img src={item.avatar} className="w-10 h-10 rounded-full mb-3 border-2 border-white/30" alt="" />
                    <h4 className="text-white font-bold tracking-tight">{item.name}</h4>
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          {/* Spacer to allow full scroll */}
          <div className="min-w-[50px] md:min-w-[200px] shrink-0" />
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
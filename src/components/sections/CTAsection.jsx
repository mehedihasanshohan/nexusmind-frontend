// "use client";

// import React, { useEffect, useRef } from "react";
// import { CheckCircle2, PlusCircle } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useCountdown } from "@/app/hooks/useCountdown";

// export function CTASection() {
//   const countdown = useCountdown();
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       gsap.registerPlugin(ScrollTrigger);
//     }

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".cta-card",
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 85%",
//           },
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-[120px] px-6 bg-deep overflow-hidden"
//     >
//       <div className="max-w-[901px] mx-auto flex flex-col md:flex-row items-stretch gap-0 border border-theme rounded-[24px] overflow-hidden shadow-screen">

//         {/* Left Card: Value Proposition (Dark BG) */}
//         <div className="cta-card flex-1 bg-card p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-theme">
//           <div>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-primary-dim px-3 py-1 rounded-full border border-glow-clr mb-8">
//               <div className="w-1.5 h-1.5 bg-primary-lit rounded-full animate-pulse-dot shadow-badge-dot" />
//               <span className="text-primary-lit text-[10px] font-bold tracking-widest uppercase">Introducing</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-bold text-base-clr leading-tight mb-4 font-display">
//               The Deep Work <br /> Blueprint
//             </h2>
//             <p className="text-muted-clr text-sm mb-12">What extra you will get if you enroll now</p>

//             {/* Bonus Features */}
//             <div className="space-y-6">
//               <div className="flex items-center gap-3 text-base-clr group">
//                 <PlusCircle size={20} className="text-primary-lit group-hover:opacity-100 transition-opacity" />
//                 <span className="text-sm font-medium">Bonus: 1:1 coaching session to boost focus.</span>
//               </div>
//               <div className="flex items-center gap-3 text-base-clr group">
//                 <PlusCircle size={20} className="text-primary-lit group-hover:opacity-100 transition-opacity" />
//                 <span className="text-sm font-medium">Discount: Save 30% when you enroll now!</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Card: Pricing & Action (The Glowing Focus Card) */}
//         <div className="cta-card flex-1 bg-card p-10 flex flex-col justify-between relative shadow-video">

//           <div className="absolute inset-0 bg-primary-dim opacity-10 pointer-events-none hidden dark:block" />

//           <div className="relative z-10">
//             {/* Price Row */}
//             <div className="flex justify-between items-start mb-8">
//               <div className="flex items-baseline gap-2">
//                 <span className="text-5xl font-bold text-base-clr font-display">$349</span>
//                 <span className="text-xl text-faint-clr line-through font-medium font-body">$500</span>
//               </div>
//               <div className="bg-primary-dim text-primary-lit px-3 py-1 rounded-full text-[10px] font-bold border border-glow-clr shadow-badge-dot">
//                 30% off
//               </div>
//             </div>

//             {/* Countdown Text */}
//             <p className="text-primary-lit text-[13px] font-bold mb-10 tracking-wide uppercase flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-primary-lit animate-ping" />
//               30% off until {countdown}
//             </p>

//             {/* Curriculum List */}
//             <div className="space-y-5">
//               {[
//                 "6h of videos – Step-by-step deep work strategies.",
//                 "Templates & Trackers – Stay on track effortlessly.",
//                 "Live Q&As – Expert guidance & accountability.",
//                 "Exclusive Community – Connect with others."
//               ].map((feature, idx) => (
//                 <div key={idx} className="flex items-start gap-3">
//                   <CheckCircle2 size={18} className="text-muted-clr mt-0.5 shrink-0" />
//                   <span className="text-muted-clr text-[13px] leading-relaxed font-body">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Action Button */}
//           <button className="relative z-10 w-full bg-primary hover:bg-primary-lit text-white font-bold py-4 rounded-xl mt-10 transition-all duration-300 shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 active:scale-[0.98]">
//             Enroll now
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }







// "use client"
// import { motion } from "framer-motion"
// import { CheckCircle2, Star } from "lucide-react"

// export function CTASection() {
//   const bonuses = [
//     "Bonus: 1-1 coaching session to boost focus.",
//     "Discount: Save 30% when you enroll now!",
//   ]

//   const features = [
//     "6h of videos - Step-by-step deep work strategies.",
//     "Templates & Trackers - Stay on track effortlessly.",
//     "Live Q&As - Expert guidance & accountability.",
//     "Exclusive Community - Connect with others.",
//   ]

//   return (
//     <section className="relative py-20 px-6 overflow-hidden bg-white dark:bg-[#050505]">

//       {/* 🌈 Background Gradient */}
//       <div className="
//         absolute inset-0" />

//       <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="
//             lg:col-span-7 rounded-[2.5rem] p-8 md:p-12 border flex flex-col justify-center
//             bg-slate-50 border-slate-200
//             dark:bg-[#0a0a0a] dark:border-white/10
//           "
//         >
//           {/* Badge */}
//           <div className="
//             inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full w-fit border
//             bg-blue-50 border-blue-200
//             dark:bg-blue-500/10 dark:border-blue-500/20
//           ">
//             <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
//             <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
//               Introducing
//             </span>
//           </div>

//           {/* Title */}
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
//             The Deep Work Blueprint
//           </h2>

//           <p className="text-lg mb-12 text-slate-600 dark:text-slate-400">
//             What extra you will get if you enroll now
//           </p>

//           {/* Bonuses */}
//           <div className="space-y-6">
//             {bonuses.map((bonus, i) => (
//               <div key={i} className="flex items-center gap-4 group">
//                 <div className="
//                   w-10 h-10 rounded-full flex items-center justify-center transition
//                   bg-white border border-slate-200 shadow-sm
//                   dark:bg-white/5 dark:border-white/10
//                   group-hover:scale-110
//                 ">
//                   <Star size={18} className="text-blue-500 fill-blue-500/20" />
//                 </div>

//                 <p className="font-medium text-slate-700 dark:text-slate-200">
//                   {bonus}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="
//             lg:col-span-5 rounded-[2.5rem] p-8 md:p-12 border relative overflow-hidden flex flex-col
//             bg-white border-slate-200 shadow-lg
//             dark:bg-[#0f0f0f] dark:border-white/10 dark:shadow-none
//           "
//         >
//           {/* Glow */}
//           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

//           {/* Price */}
//           <div className="flex justify-between items-start mb-8">
//             <div className="flex items-baseline gap-3">
//               <span className="text-5xl font-bold text-slate-900 dark:text-white">
//                 $349
//               </span>
//               <span className="text-2xl line-through decoration-red-500 decoration-2 text-slate-400 dark:text-slate-500">
//                 $500
//               </span>
//             </div>

//             <div className="px-3 py-1 bg-blue-600 rounded-lg text-white text-xs font-bold">
//               30% off
//             </div>
//           </div>

//           {/* Timer */}
//           <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mb-10">
//             30% off until 4d : 2h : 41m : 17s
//           </p>

//           {/* Features */}
//           <div className="space-y-5 mb-12">
//             {features.map((feature, i) => (
//               <div key={i} className="flex items-start gap-4">
//                 <CheckCircle2
//                   size={20}
//                   className="mt-1 flex-shrink-0 text-blue-600 dark:text-white opacity-80"
//                 />
//                 <p className="text-[15px] leading-snug text-slate-700 dark:text-slate-300">
//                   {feature}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <button className="
//             w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2
//             bg-blue-600 hover:bg-blue-700 text-white
//             shadow-lg shadow-blue-600/20 active:scale-[0.98]
//           ">
//             Enroll now
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   )
// }





// "use client";

// import React, { useEffect, useRef } from "react";
// import { CheckCircle2, Star, Zap } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useCountdown } from "@/app/hooks/useCountdown";

// export function CTASection() {
//   const countdown = useCountdown();
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       gsap.registerPlugin(ScrollTrigger);
//     }

//     const ctx = gsap.context(() => {
//       // কার্ডগুলোর এন্ট্রি এনিমেশন
//       gsap.from(".cta-card-left", {
//         x: -50,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(".cta-card-right", {
//         x: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   const features = [
//     "6h of videos – Step-by-step deep work strategies.",
//     "Templates & Trackers – Stay on track effortlessly.",
//     "Live Q&As – Expert guidance & accountability.",
//     "Exclusive Community – Connect with others.",
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-24 px-6 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500"
//     >
//       {/* 🌈 Background Glow Effect */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//         {/* LEFT CARD: Value Proposition */}
//         <div className="cta-card-left lg:col-span-7 rounded-[2.5rem] p-8 md:p-12 border flex flex-col justify-center bg-slate-50 border-slate-200 dark:bg-[#0a0a0a] dark:border-white/10">

//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full w-fit border bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20">
//             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
//             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
//               Introducing
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-[56px] font-bold mb-6 text-slate-900 dark:text-white leading-[1.1] tracking-tighter font-display">
//             The Deep Work <br /> Blueprint
//           </h2>

//           <p className="text-lg mb-12 text-slate-600 dark:text-slate-400 font-medium">
//             What extra you will get if you enroll now
//           </p>

//           {/* Bonus Features */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4 group">
//               <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 group-hover:scale-110 group-hover:border-blue-500/50">
//                 <Star size={20} className="text-blue-500 fill-blue-500/20" />
//               </div>
//               <p className="font-bold text-slate-800 dark:text-slate-100">
//                 Bonus: 1:1 coaching session to boost focus.
//               </p>
//             </div>
//             <div className="flex items-center gap-4 group">
//               <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 group-hover:scale-110 group-hover:border-blue-500/50">
//                 <Zap size={20} className="text-blue-500 fill-blue-500/20" />
//               </div>
//               <p className="font-bold text-slate-800 dark:text-slate-100">
//                 Discount: Save 30% when you enroll now!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CARD: Pricing & Action */}
//         <div className="cta-card-right lg:col-span-5 rounded-[2.5rem] p-8 md:p-12 border relative overflow-hidden flex flex-col bg-white border-slate-200 shadow-xl dark:bg-[#0f0f0f] dark:border-white/10 dark:shadow-none">

//           {/* Internal Glow */}
//           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

//           {/* Price Row */}
//           <div className="flex justify-between items-start mb-8 relative z-10">
//             <div className="flex items-baseline gap-3">
//               <span className="text-5xl font-bold text-slate-900 dark:text-white font-display">$349</span>
//               <span className="text-2xl line-through decoration-red-500/50 decoration-2 text-slate-400 dark:text-slate-500 font-medium">$500</span>
//             </div>
//             <div className="px-3 py-1 bg-blue-600 rounded-lg text-white text-[10px] font-bold uppercase tracking-wider">
//               30% off
//             </div>
//           </div>

//           {/* Countdown Timer */}
//           <div className="flex items-center gap-2 mb-10 relative z-10">
//              <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
//              </span>
//              <p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-bold tracking-tight">
//                Offer ends in: {countdown}
//              </p>
//           </div>

//           {/* Curriculum List */}
//           <div className="space-y-5 mb-12 relative z-10">
//             {features.map((feature, idx) => (
//               <div key={idx} className="flex items-start gap-3">
//                 <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
//                 <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">{feature}</span>
//               </div>
//             ))}
//           </div>

//           {/* Action Button */}
//           <button className="relative z-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2 group">
//             Enroll now
//             <Zap size={18} className="fill-current group-hover:animate-pulse" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }





// "use client";

// import React, { useEffect, useRef } from "react";
// import { CheckCircle2, Star, Zap, ArrowRight } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useCountdown } from "@/app/hooks/useCountdown";

// export function CTASection() {
//   const countdown = useCountdown();
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       gsap.registerPlugin(ScrollTrigger);
//     }

//     const ctx = gsap.context(() => {
//       // কার্ডগুলোর এন্ট্রেন্স এনিমেশন
//       gsap.from(".cta-card", {
//         y: 60,
//         opacity: 0,
//         duration: 1.2,
//         stagger: 0.3,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   const features = [
//     "6h of videos – Step-by-step deep work strategies.",
//     "Templates & Trackers – Stay on track effortlessly.",
//     "Live Q&As – Expert guidance & accountability.",
//     "Exclusive Community – Connect with others.",
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-24 px-6 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500"
//     >
//       {/* 🌈 Background Aura - লাইট মোডে হালকা ব্লু, ডার্কে ডিপ ব্লু */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

//         {/* LEFT CARD: The Offer */}
//         <div className="cta-card lg:col-span-7 rounded-[2.5rem] p-8 md:p-14 border flex flex-col justify-center bg-slate-50/50 dark:bg-[#0a0a0a] border-slate-200 dark:border-white/10 backdrop-blur-sm">

//           <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full w-fit border bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20">
//             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
//             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
//               Limited Time Offer
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-[64px] font-bold mb-6 text-slate-900 dark:text-white leading-[1] tracking-tighter font-display">
//             The Deep Work <br /> <span className="text-blue-600 dark:text-blue-500">Blueprint.</span>
//           </h2>

//           <p className="text-lg md:text-xl mb-12 text-slate-600 dark:text-slate-400 font-medium max-w-[500px]">
//             Master the art of focus and reclaim 2+ hours of your day. Everything you need is inside.
//           </p>

//           <div className="space-y-6">
//             <div className="flex items-center gap-4 group">
//               <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
//                 <Star size={20} className="text-blue-500 fill-blue-500/20" />
//               </div>
//               <div>
//                 <p className="font-bold text-slate-800 dark:text-slate-100">1:1 Coaching Session</p>
//                 <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">Personalized focus audit worth $150</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CARD: Checkout & Action */}
//         <div className="cta-card lg:col-span-5 rounded-[2.5rem] p-8 md:p-12 border relative overflow-hidden flex flex-col bg-white dark:bg-[#0f0f0f] border-slate-200 dark:border-white/10 shadow-2xl shadow-blue-500/5 dark:shadow-none">

//           {/* Subtle Glow Overlay */}
//           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 dark:bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

//           {/* Pricing Section */}
//           <div className="flex justify-between items-start mb-10 relative z-10">
//             <div className="flex flex-col">
//               <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Value</span>
//               <div className="flex items-baseline gap-3">
//                 <span className="text-5xl font-bold text-slate-900 dark:text-white font-display">$349</span>
//                 <span className="text-2xl line-through decoration-red-500/40 decoration-2 text-slate-400 dark:text-slate-600 font-medium">$500</span>
//               </div>
//             </div>
//             <div className="px-4 py-2 bg-blue-600 rounded-xl text-white text-[11px] font-black uppercase tracking-tighter shadow-lg shadow-blue-600/30">
//               Save 30%
//             </div>
//           </div>

//           {/* Real-time Timer */}
//           <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/10 mb-10">
//              <div className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
//              </div>
//              <p className="text-blue-700 dark:text-blue-400 font-mono text-sm font-bold">
//                Expires in: {countdown}
//              </p>
//           </div>

//           {/* Features List */}
//           <div className="space-y-5 mb-12 relative z-10">
//             {features.map((feature, idx) => (
//               <div key={idx} className="flex items-start gap-3 group">
//                 <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-500 mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
//                 <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-semibold">{feature}</span>
//               </div>
//             ))}
//           </div>

//           {/* Main Action Button */}
//           <button className="relative z-10 w-full group overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-600/25 active:scale-[0.98] flex items-center justify-center gap-3">
//             <span className="relative z-10">Secure Your Spot</span>
//             <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />

//             {/* Shimmer Effect */}
//             <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
//           </button>

//           <p className="text-center mt-6 text-xs text-slate-400 font-medium uppercase tracking-widest">
//             Instant Access • 30-Day Guarantee
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2, Star, Zap, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useCountdown } from "@/app/hooks/useCountdown";

export function CTASection() {
  const countdown = useCountdown();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      gsap.from(".cta-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    "6h of videos – Step-by-step deep work strategies.",
    "Templates & Trackers – Stay on track effortlessly.",
    "Live Q&As – Expert guidance & accountability.",
    "Exclusive Community – Connect with others.",
  ];

  return (
    <section
      ref={sectionRef}
      /* ✅ bg-white/dark:bg-[#050505] বাদ দিয়ে bg-deep ইউজ করা হয়েছে */
      className="relative py-24 px-6 overflow-hidden bg-deep transition-colors duration-500"
    >
      {/* 🌈 Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-dim blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT CARD: The Offer */}
        {/* ✅ bg-card এবং border-theme ইউজ করা হয়েছে */}
        <div className="cta-card lg:col-span-7 rounded-[2.5rem] p-8 md:p-14 border border-theme flex flex-col justify-center bg-card backdrop-blur-sm">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full w-fit border border-glow-clr bg-primary-dim">
            <div className="w-2 h-2 rounded-full bg-primary-lit animate-pulse-dot shadow-badge-dot" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-lit">
              Limited Time Offer
            </span>
          </div>

          {/* ✅ text-base-clr ইউজ করা হয়েছে */}
          <h2 className="text-4xl md:text-[64px] font-bold mb-6 text-base-clr leading-[1] tracking-tighter font-display">
            The Deep Work <br /> <span className="gradient-text">Blueprint.</span>
          </h2>

          <p className="text-lg md:text-xl mb-12 text-muted-clr font-medium max-w-[500px]">
            Master the art of focus and reclaim 2+ hours of your day. Everything you need is inside.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-card border border-theme shadow-sm group-hover:scale-110 group-hover:border-glow-clr transition-all">
                <Star size={20} className="text-primary-lit fill-primary-dim" />
              </div>
              <div>
                <p className="font-bold text-base-clr">1:1 Coaching Session</p>
                <p className="text-sm text-muted-clr font-medium">Personalized focus audit worth $150</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: Checkout & Action */}
        {/* ✅ shadow-screen এবং bg-card ইউজ করা হয়েছে */}
        <div className="cta-card lg:col-span-5 rounded-[2.5rem] p-8 md:p-12 border border-theme relative overflow-hidden flex flex-col bg-card shadow-screen">

          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-dim blur-[80px] rounded-full pointer-events-none" />

          {/* Pricing Section */}
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-faint-clr uppercase tracking-widest mb-1">Total Value</span>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-base-clr font-display">$349</span>
                <span className="text-2xl line-through decoration-red-500/40 decoration-2 text-faint-clr font-medium">$500</span>
              </div>
            </div>
            <div className="px-4 py-2 bg-primary text-white text-[11px] font-black uppercase tracking-tighter rounded-xl shadow-cta">
              Save 30%
            </div>
          </div>

          {/* Real-time Timer */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary-dim border border-glow-clr mb-10">
             <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-lit opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-lit"></span>
             </div>
             <p className="text-primary-lit font-mono text-sm font-bold">
               Expires in: {countdown}
             </p>
          </div>

          {/* Features List */}
          <div className="space-y-5 mb-12 relative z-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <CheckCircle2 size={18} className="text-primary-lit mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-muted-clr text-sm leading-relaxed font-semibold">{feature}</span>
              </div>
            ))}
          </div>

          {/* Main Action Button */}
          <button className="relative z-10 w-full group overflow-hidden bg-primary hover:text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-cta hover:shadow-cta-hover active:scale-[0.98] flex items-center justify-center gap-3 text-white">
            <span className="relative z-10">Secure Your Spot</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />

            <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
          </button>

          <p className="text-center mt-6 text-xs text-faint-clr font-medium uppercase tracking-widest">
            Instant Access • 30-Day Guarantee
          </p>
        </div>

      </div>
    </section>
  );
}
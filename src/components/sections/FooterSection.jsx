// "use client";

// import React from "react";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-deep pt-[100px] pb-10 border-t border-theme">
//       <div className="max-w-[1280px] mx-auto px-6">

//         {/* Footer-Content (Figma Layer 2312) */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-[80px]">

//           {/* Title Area (Figma Layer) */}
//           <div className="flex flex-col gap-3 text-center md:text-left">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-base-clr font-display leading-[1.1] tracking-tighter">
//               The Deep Work <br className="hidden md:block" /> Blueprint
//             </h2>
//             <p className="text-muted-clr text-sm md:text-base font-medium max-w-[340px]">
//               Master Focus & Get More Done in Less Time
//             </p>
//           </div>

//           <div className="w-[320px] h-[180px] bg-primary rounded-[24px] p-6 flex flex-col justify-between items-start cursor-pointer group hover:bg-primary-lit transition-colors duration-300 relative">

//             {/* Top Row: Avatar Stack + Arrow */}
//             <div className="w-full flex items-center justify-between gap-4">
//               <div className="flex -space-x-4">
//                 {[1, 2, 3].map((i) => (
//                   <img
//                     key={i}
//                     src={`/u${i}.jpg`}
//                     className="w-[48px] h-[48px] rounded-full border-[3px] border-primary object-cover group-hover:border-primary-lit transition-colors"
//                     alt="Student"
//                   />
//                 ))}
//               </div>

//               {/* White Arrow Circle */}
//               <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center text-primary shadow-lg group-hover:translate-x-1.5 transition-transform duration-300">
//                 <ArrowRight size={26} strokeWidth={3} />
//               </div>
//             </div>

//             {/* Bottom Row: Text */}
//             <p className="text-white font-bold text-sm tracking-tight">
//               Join with 5K other students
//             </p>

//             {/* Subtle light glow overlay for dark mode only */}
//             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-[24px] pointer-events-none transition-opacity duration-300 dark:block hidden" />
//           </div>
//         </div>

//         {/* Footer-Links (Figma Layer 2312) */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-theme">

//           {/* Copyright Text */}
//           <p className="text-faint-clr text-[11px] font-semibold tracking-widest uppercase order-2 md:order-1">
//             © Copyright {currentYear}, All Rights Reserved
//           </p>

//           {/* Nav Links */}
//           <div className="flex flex-wrap justify-center gap-10 order-1 md:order-2">
//             {["Terms & conditions", "Refund policy", "Pricing", "Support"].map((link) => (
//               <Link
//                 key={link}
//                 href="#"
//                 className="text-faint-clr hover:text-primary-lit text-[11px] font-bold transition-colors uppercase tracking-widest"
//               >
//                 {link}
//               </Link>
//             ))}
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }







"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden bg-white dark:bg-[#0a0a0a]">

      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔹 Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24"
        >

          {/* Branding */}
          <motion.div variants={itemVariants} className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
              The Deep <br /> Work Blueprint
            </h2>

            <p className="text-lg font-light text-slate-600 dark:text-slate-400">
              Master Focus & Get More Done in Less Time
            </p>
          </motion.div>

          {/* 🔥 CTA Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative group cursor-pointer w-full md:w-auto"
          >
            <div className="rounded-[2.5rem] p-8 md:p-10 min-w-[320px] transition-all duration-500 bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)]">

              <div className="flex justify-between items-center mb-10">

                {/* Avatars */}
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      alt="Student"
                      className="w-12 h-12 rounded-full object-cover border-4 border-white dark:border-blue-600"
                    />
                  ))}
                </div>

                {/* Arrow */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition bg-white text-blue-600 group-hover:translate-x-1">
                  <ArrowRight size={24} strokeWidth={3} />
                </div>
              </div>

              <p className="text-xl font-semibold text-white/90">
                Join with 5K other students
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px w-full mb-12 origin-left bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10"
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm font-light text-slate-500 dark:text-slate-500 order-2 md:order-1">
            © Copyright {currentYear}, All Rights Reserved
          </p>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 order-1 md:order-2">
            {["Terms & conditions", "Refund policy", "Pricing", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  )
}
"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden bg-deep transition-colors duration-300">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔹 Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20 md:mb-32"
        >

          {/* Branding Section */}
          <motion.div variants={itemVariants} className="text-center md:text-left max-w-md">
            <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-4 leading-[1.1] text-base-clr">
              The Deep <br className="hidden md:block" /> Work Blueprint
            </h2>
            <p className="text-base md:text-lg font-body font-medium text-muted-clr opacity-80">
              Master Focus & Get More Done in Less Time
            </p>
          </motion.div>

          {/* 🔥 CTA Card - Figma Color #2466F2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group cursor-pointer w-full md:w-auto"
          >
            <div className="rounded-[2.2rem] p-8 md:p-10 min-w-full md:min-w-[380px] transition-all duration-500 bg-[#2466f2] shadow-cta hover:shadow-cta-hover">

              <div className="flex justify-between items-center mb-10">
                {/* Students Avatars (w2, w3, w4) */}
                <div className="flex -space-x-3">
                  {['w2', 'w3', 'w4'].map((img, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#2466f2] overflow-hidden bg-slate-800 shadow-lg">
                      <Image
                        src={`/${img}.jpg`} // Ensure these files are in your /public folder
                        alt={`Student ${i}`}
                        className="w-full h-full object-cover"
                        height={48}
                        width={48}
                        onError={(e) => { e.target.src = "https://i.pravatar.cc/100" }} // Fallback if image not found
                      />
                    </div>
                  ))}
                </div>

                {/* Arrow Icon Button */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 bg-white text-[#2466f2] group-hover:translate-x-1 shadow-lg">
                  <ArrowRight size={22} strokeWidth={3} />
                </div>
              </div>

              <p className="text-lg md:text-xl font-display font-bold text-white tracking-tight">
                Join with 5K+ other students
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Subtle Divider Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="h-[1px] w-full mb-10 origin-left bg-gradient-to-r from-transparent via-border-glow to-transparent opacity-30"
        />

        {/* Bottom Bar: Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <p className="text-xs md:text-sm font-body text-faint-clr order-2 md:order-1">
            © Copyright {currentYear}, All Rights Reserved
          </p>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 order-1 md:order-2">
            {["Terms & conditions", "Refund policy", "Pricing", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs md:text-sm font-body font-medium transition-all duration-300 text-muted-clr hover:text-accent-clr"
              >
                {item}
              </a>
            ))}
          </nav>

        </div>
      </div>

      {/* Decorative Bottom Glow (Optional) */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary-dim blur-[120px] rounded-full opacity-30 pointer-events-none" />
    </footer>
  )
}
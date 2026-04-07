
"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
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
    <section className="py-24 overflow-hidden bg-deep transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glow-clr bg-primary-dim"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-clr shadow-badge-dot animate-pulse" />
              <span className="text-[10px] font-bold text-accent-clr uppercase tracking-[0.2em]">Testimonials</span>
            </motion.div>

            <h2 className="text-4xl md:text-[56px] font-display text-base-clr leading-[1.1] tracking-tighter">
              Real Results from <br /> Real People
            </h2>

            <p className="text-muted-clr font-medium">
              Join with 5K+ other students who mastered focus
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => slide("left")}
              className="w-12 h-12 rounded-full border border-theme flex items-center justify-center text-base-clr hover:bg-[#2466F2] hover:text-white hover:border-[#2466F2] transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => slide("right")}
              className="w-12 h-12 rounded-full border border-theme flex items-center justify-center text-base-clr hover:bg-[#2466F2] hover:text-white hover:border-[#2466F2] transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Full Width Slider Area */}
      <div className="relative w-full">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-6 md:px-[calc((100vw-1216px)/2)] pb-8"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-[308px] h-[400px] flex-shrink-0 snap-start relative group rounded-[2.5rem] overflow-hidden border border-theme bg-card hover:border-[#2466F2]/30 transition-all duration-500 shadow-sm"
            >
              {item.type === "text" ? (
                /* Text Testimonial Card */
                <div className="h-full p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-full border-2 border-theme overflow-hidden">
                      <img
                        src={item.avatar}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        alt={item.name}
                      />
                    </div>
                    <p className="text-muted-clr leading-relaxed text-[17px] font-medium italic font-body">
                      "{item.content}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base-clr font-display font-bold text-lg">{item.name}</h4>
                    <p className="text-faint-clr text-[10px] font-bold uppercase tracking-widest mt-1">{item.role}</p>
                  </div>
                </div>
              ) : (
                /* Video Testimonial Card */
                <div className="h-full relative group/card cursor-pointer overflow-hidden">
                  <img
                    src={item.thumbnail}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/10 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all group-hover/card:bg-[#2466F2] group-hover/card:scale-110">
                      <Play size={24} className="fill-white text-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-3">
                       <img src={item.avatar} className="w-10 h-10 rounded-full border-2 border-white/30" alt="" />
                       <div>
                          <h4 className="text-white font-display font-bold leading-none">{item.name}</h4>
                          <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mt-1">{item.role}</p>
                       </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          {/* Spacer for proper alignment */}
          <div className="min-w-[100px] shrink-0" />
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
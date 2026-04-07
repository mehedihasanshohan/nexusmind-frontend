"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, PlayCircle, CheckCircle2 } from "lucide-react"

export function CurriculumSection() {
  const [openModule, setOpenModule] = useState(0)

  const modules = [
    {
      title: "Module 1: Foundations of Deep Work",
      duration: "1.7h of video",
      lessons: [
        { title: "Understanding Focus & Distraction", time: "14:23", preview: true },
        { title: "The Science Behind Deep Work", time: "22:51", preview: false },
        { title: "Identifying Your Productivity Killers", time: "34:42", preview: false },
        { title: "How to Strengthen Your Attention Span", time: "27:08", preview: false },
      ]
    },
    { title: "Module 2: Building Your Deep Work Routine", duration: "1.3h of video", lessons: [] },
    { title: "Module 3: Eliminating Procrastination", duration: "1.5h of video", lessons: [] },
    { title: "Module 4: Advanced Focus & Productivity Hacks", duration: "1.2h of video", lessons: [] },
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white dark:bg-[#030303]">
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border
              bg-blue-50 border-blue-200
              dark:bg-blue-500/10 dark:border-blue-500/20
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">
              Course Curriculum
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
            Mastering Deep Work: A Structured <br /> Path to Peak Productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-4">
            {modules.map((module, idx) => (
              <div key={idx} className="border-b border-slate-200 dark:border-white/5 last:border-0">

                <button
                  onClick={() => setOpenModule(openModule === idx ? null : idx)}
                  className="w-full py-6 flex items-center justify-between group"
                >
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition">
                      {module.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {module.duration}
                    </p>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openModule === idx
                        ? "rotate-180 text-blue-500"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openModule === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 space-y-4">
                        {module.lessons.map((lesson, lIdx) => (
                          <div
                            key={lIdx}
                            className="
                              flex items-center justify-between p-4 rounded-2xl transition group/lesson
                              hover:bg-slate-50
                              dark:hover:bg-white/5
                            "
                          >
                            <div className="flex items-center gap-4">
                              <PlayCircle
                                size={22}
                                className="text-slate-400 group-hover/lesson:text-blue-500 transition"
                              />

                              <span className="font-medium text-slate-700 dark:text-slate-300">
                                {lesson.title}
                              </span>

                              {lesson.preview && (
                                <span className="
                                  text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border
                                  bg-blue-500/10 text-blue-500 border-blue-500/20
                                ">
                                  Preview
                                </span>
                              )}
                            </div>

                            <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                              {lesson.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="
              rounded-[2.5rem] p-8 md:p-10 border shadow-xl
              bg-white border-slate-200
              dark:bg-[#0a0a0a] dark:border-white/10 dark:shadow-none
            ">
              <h4 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                Not only video lessons!
              </h4>

              <div className="space-y-6 mb-10">
                {[
                  "6h of videos - Step-by-step deep work strategies.",
                  "Templates & Trackers - Stay on track effortlessly.",
                  "Live Q&As - Expert guidance & accountability.",
                  "Exclusive Community - Connect with others."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-blue-500 mt-1" />
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <button className="
                w-full py-4 rounded-xl font-bold transition-all
                bg-blue-600 hover:bg-blue-700 text-white
                shadow-lg shadow-blue-600/20 active:scale-95
              ">
                Enroll now
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
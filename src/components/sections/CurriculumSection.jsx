"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PlayCircle, CheckCircle2 } from "lucide-react";

export function CurriculumSection() {
  const [openModule, setOpenModule] = useState(0);

  const modules = [
    {
      title: "Module 1: Foundations of Deep Work",
      duration: "1.7h of video",
      lessons: [
        { title: "Understanding Focus & Distraction", time: "14:23", preview: true },
        { title: "The Science Behind Deep Work", time: "22:51", preview: false },
        { title: "Identifying Your Productivity Killers", time: "34:42", preview: false },
        { title: "How to Strengthen Your Attention Span", time: "27:08", preview: false },
      ],
    },
    { title: "Module 2: Building Your Deep Work Routine", duration: "1.3h of video", lessons: [] },
    { title: "Module 3: Eliminating Procrastination", duration: "1.5h of video", lessons: [] },
    { title: "Module 4: Advanced Focus & Productivity Hacks", duration: "1.2h of video", lessons: [] },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-deep transition-colors duration-300">
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-glow-clr bg-primary-dim"
          >
            {/* Dot fix: using var primary for consistency with your CSS */}
            <span className="w-2 h-2 rounded-full bg-[#6366f1] shadow-[0_0_10px_#6366f1] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent-clr">
              Course Curriculum
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-base-clr">
            Mastering Deep Work: A Structured <br className="hidden md:block" />{" "}
            Path to Peak Productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Accordion Area */}
          <div className="lg:col-span-7 space-y-2">
            {modules.map((module, idx) => (
              <div key={idx} className="border-b border-theme last:border-0">
                <button
                  onClick={() => setOpenModule(openModule === idx ? null : idx)}
                  className="w-full py-6 flex items-center justify-between group"
                >
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold text-base-clr group-hover:text-accent-clr transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm text-muted-clr mt-1 font-medium">
                      {module.duration}
                    </p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      openModule === idx ? "rotate-180 text-accent-clr" : "text-faint-clr"
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
                      <div className="pb-8 space-y-3">
                        {module.lessons.length > 0 ? (
                          module.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="flex items-center justify-between p-4 rounded-2xl transition-all group/lesson hover:bg-card border border-transparent hover:border-theme"
                            >
                              <div className="flex items-center gap-4">
                                <PlayCircle size={20} className="text-faint-clr group-hover/lesson:text-accent-clr transition-colors" />
                                <span className="font-medium text-base-clr text-sm md:text-base">
                                  {lesson.title}
                                </span>
                                {lesson.preview && (
                                  <span className="text-[9px] uppercase tracking-tighter font-bold px-2 py-0.5 rounded border border-glow-clr bg-primary-dim text-accent-clr">
                                    Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-xs font-mono text-muted-clr">{lesson.time}</span>
                            </div>
                          ))
                        ) : (
                          <p className="p-4 text-sm text-faint-clr italic">Lessons coming soon...</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT: Sticky Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="rounded-[2.5rem] p-8 md:p-10 border border-theme bg-card shadow-2xl transition-colors duration-300">
              <h4 className="text-2xl font-display font-bold mb-8 text-base-clr">
                Not only video lessons!
              </h4>

              <div className="space-y-5 mb-10">
                {[
                  "6h of videos - Step-by-step deep work strategies.",
                  "Templates & Trackers - Stay on track effortlessly.",
                  "Live Q&As - Expert guidance & accountability.",
                  "Exclusive Community - Connect with others.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-accent-clr mt-1 shrink-0" />
                    <p className="text-sm md:text-base leading-relaxed text-muted-clr">{item}</p>
                  </div>
                ))}
              </div>

              {/* BTN COLOR FIXED HERE */}
              <button
                className="w-full py-4 rounded-xl font-bold transition-all
                bg-[#2466F2] hover:bg-[#4f46e5] text-white
                shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_32px_rgba(99,102,241,0.5)]
                active:scale-[0.98]"
              >
                Enroll now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
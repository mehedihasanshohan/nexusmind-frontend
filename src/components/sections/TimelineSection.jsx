// BenefitsSection.jsx
// Next.js + Tailwind CSS v4 — no TypeScript, no raw CSS

const benefits = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <circle cx="12" cy="12" r="8" strokeWidth="1" />
      </svg>
    ),
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    text: "Overcome procrastination & get more done.",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    ),
    text: "Build lasting habits for long-term success.",
  },
];

// Tailwind v4 doesn't support arbitrary pseudo-element styles,
// so the dashed line + blue dot are rendered via inline styles.

export default function TimelineSection() {
  return (
    <section className="bg-[#0d0d1a] w-full flex flex-col items-center px-5 py-20">

      {/* Badge */}
      <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#6c8fff] flex-shrink-0" />
        <span className="text-xs text-white/70 font-medium tracking-wide">
          The Deep Work Blueprint
        </span>
      </div>

      {/* Heading */}
      <h2
        className="text-white font-extrabold text-center max-w-[500px] leading-[1.2] tracking-tight mb-14"
        style={{ fontSize: "clamp(28px, 6vw, 44px)" }}
      >
        A self-paced, results-driven course designed to help you
      </h2>

      {/* Timeline wrapper — position relative for the ::before line */}
      <div className="w-full max-w-[400px] relative flex flex-col">

        {/* Continuous dashed vertical line on the far left */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 22,        // aligns with center of first icon (44px / 2)
            bottom: 22,     // aligns with center of last icon
            width: 1,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 5px, transparent 5px, transparent 11px)",
            zIndex: 0,
          }}
        />

        {benefits.map((item, index) => {
          const isFirst = index === 0;
          return (
            <div
              key={item.id}
              className="flex items-start gap-5 relative"
              style={{ marginTop: isFirst ? 0 : 32 }}
            >
              {/* Blue dot on the line — sits between this item and the previous */}
              {!isFirst && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: -4,        // centers the 9px dot on the 1px line
                    top: -20,        // halfway up the 32px gap (margin-top / 2 - dot/2)
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: "#6c8fff",
                    boxShadow: "0 0 0 3px rgba(108,143,255,0.18)",
                    zIndex: 2,
                  }}
                />
              )}

              {/* Icon box — offset 20px from the line */}
              <div
                className="flex items-center justify-center rounded-xl border border-white/[0.12] flex-shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(255,255,255,0.07)",
                  marginLeft: 20,
                  zIndex: 1,
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1 pt-2.5">
                <p className="text-white font-semibold text-[15px] leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
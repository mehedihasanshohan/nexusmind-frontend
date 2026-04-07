import React from 'react';

export function PPALogo({ size = 32, className = "" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div
        className="relative flex items-center justify-center"
        style={{
          width: `${size * 1.2}px`,
          height: `${size * 1.2}px`,
          color: 'var(--text-base)'
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          className="w-full h-full"
        >
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="12"
              y1="2.5"
              x2="12"
              y2="5.5"
              transform={`rotate(${i * 30} 12 12)`}
              style={{ opacity: Math.max(0.2, 1 - i * 0.08) }}
            />
          ))}

          <line
            x1="12"
            y1="12"
            x2="18.5"
            y2="12"
            strokeWidth="3"
            className="text-primary-lit"
            style={{ opacity: 1 }}
          />
        </svg>

        <div className="absolute inset-0 bg-primary-lit/10 blur-[12px] rounded-full -z-10 transition-opacity duration-500 dark:opacity-100 opacity-50" />
      </div>

      <div
        className="font-display  tracking-tighter flex items-baseline leading-none transition-colors duration-350"
        style={{
          fontSize: `${size}px`,
          color: 'var(--text-base)'
        }}
      >
        <span>PPA</span>
      </div>
    </div>
  );
}
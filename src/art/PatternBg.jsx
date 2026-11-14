import React from 'react';

/**
 * PatternBg: Original eight-point-star lattice background overlay.
 * Variants:
 *  - "dark": 4-5% cream on dark navy
 *  - "cream": 6-7% terracotta on cream
 *  - "hero": 160px with subtle fade mask
 */
export default function PatternBg({
  variant = 'dark',
  className = '',
  fadeMask = false,
}) {
  const isCream = variant === 'cream';
  const fill = isCream ? '#D6452B' : '#FBF4DC';
  const opacity = isCream ? '0.065' : '0.045';

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
      style={{
        maskImage: fadeMask
          ? 'radial-gradient(circle at 50% 30%, black 20%, transparent 85%)'
          : undefined,
        WebkitMaskImage: fadeMask
          ? 'radial-gradient(circle at 50% 30%, black 20%, transparent 85%)'
          : undefined,
      }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id={`star-lattice-${variant}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Eight-point star geometry */}
            <path
              d="M20 0l3 8 8-3-3 8 8 3-8 3 3 8-8-3-3 8-3-8-8 3 3-8-8-3 8-3-3-8 8 3z"
              fill={fill}
              fillOpacity={opacity}
              fillRule="evenodd"
            />
            {/* Intersecting lattice connective points */}
            <circle cx="20" cy="20" r="1.5" fill={fill} fillOpacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#star-lattice-${variant})`} />
      </svg>
    </div>
  );
}

import React from 'react';

/**
 * AlWisalMark: Geometric Kufic-inspired wordmark and monogram for Al-Wisal ("الوصال").
 * Variants:
 *  - "nav": compact horizontal lockup (mark + typography)
 *  - "hero": prominent geometric emblem
 *  - "draw": stroked paths with strokeDashoffset for the 1.8s intro assembly
 */
export default function AlWisalMark({
  variant = 'nav',
  className = '',
  color = '#F28A2E',
  secondaryColor = '#FDB913',
}) {
  if (variant === 'nav') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Geometric Mark */}
        <svg
          viewBox="0 0 48 48"
          className="w-9 h-9 shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer square frame */}
          <rect x="2" y="2" width="44" height="44" stroke={color} strokeWidth="3.5" />
          {/* Interlocking Kufic geometric letters for W-S-L */}
          <path d="M12 12V36H20V24H28V36H36V12H28V20H20V12H12Z" fill={color} />
          {/* Inner accent diamond */}
          <rect x="21" y="5" width="6" height="6" fill={secondaryColor} transform="rotate(45 24 8)" />
        </svg>

        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className="font-sans font-extrabold text-base tracking-widest text-white uppercase">
              AL-WISAL
            </span>
            <span className="font-reem text-xs font-bold text-[#FDB913]">
              الوصال
            </span>
          </div>
          <span className="font-sans text-[9px] font-semibold tracking-wider text-[#9FB0C3] uppercase mt-0.5">
            ADSA CAMP 2026
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'draw') {
    return (
      <svg
        viewBox="0 0 120 120"
        className={`w-28 h-28 ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Al-Wisal Mark"
      >
        {/* Intro stroke animation paths */}
        <rect
          className="intro-path"
          x="6"
          y="6"
          width="108"
          height="108"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="square"
        />
        <path
          className="intro-path"
          d="M30 30V90H50V60H70V90H90V30H70V50H50V30H30Z"
          stroke={secondaryColor}
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <rect
          className="intro-path"
          x="53"
          y="12"
          width="14"
          height="14"
          stroke={color}
          strokeWidth="4"
          transform="rotate(45 60 19)"
        />
      </svg>
    );
  }

  // Hero variant: bold geometric emblem
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12 sm:w-14 sm:h-14 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="58" height="58" stroke={color} strokeWidth="4" />
        <path d="M16 16V48H26V32H38V48H48V16H38V26H26V16H16Z" fill={color} />
        <rect x="28" y="6" width="8" height="8" fill={secondaryColor} transform="rotate(45 32 10)" />
      </svg>
      <div className="flex flex-col">
        <span className="font-reem text-xl sm:text-2xl font-bold text-[#FDB913] leading-none">
          الْوِصَال
        </span>
        <span className="font-sans font-extrabold text-sm sm:text-base tracking-widest text-white uppercase mt-1">
          AL-WISAL
        </span>
      </div>
    </div>
  );
}

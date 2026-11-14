import React from 'react';

/**
 * PetalCircle: Geometric petal circles (HAMISH editorial style).
 * Square, flat, 2-4 colours (orange/red/terracotta/ink).
 * Supports color swap on hover and slow continuous rotation.
 */
export default function PetalCircle({
  className = '',
  primary = '#F28A2E',
  secondary = '#D6452B',
  accent = '#0B1520',
  rotate = false,
}) {
  return (
    <div
      className={`group w-full h-full aspect-square mosaic-tile bg-[var(--surface)] overflow-hidden cursor-pointer ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full transition-transform duration-700 ease-out ${
          rotate ? 'animate-[spin_40s_linear_infinite]' : 'group-hover:rotate-45'
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background base tile */}
        <rect
          width="100"
          height="100"
          fill={accent}
          className="transition-colors duration-300 group-hover:fill-[#F28A2E]"
        />

        {/* 4 Outer Petal Arcs (Intersecting Circles) */}
        <circle
          cx="0"
          cy="50"
          r="50"
          fill={primary}
          className="transition-colors duration-300 group-hover:fill-[#D6452B]"
        />
        <circle
          cx="100"
          cy="50"
          r="50"
          fill={primary}
          className="transition-colors duration-300 group-hover:fill-[#D6452B]"
        />
        <circle
          cx="50"
          cy="0"
          r="50"
          fill={secondary}
          className="transition-colors duration-300 group-hover:fill-[#FDB913]"
        />
        <circle
          cx="50"
          cy="100"
          r="50"
          fill={secondary}
          className="transition-colors duration-300 group-hover:fill-[#FDB913]"
        />

        {/* Central Core Petal Flower */}
        <circle
          cx="50"
          cy="50"
          r="25"
          fill={accent}
          className="transition-colors duration-300 group-hover:fill-[#0B1520]"
        />
        <circle
          cx="50"
          cy="50"
          r="12"
          fill={primary}
          className="transition-colors duration-300 group-hover:fill-[#F28A2E]"
        />
      </svg>
    </div>
  );
}

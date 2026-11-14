import React from 'react';

/**
 * NestedDiamonds: Square tile with concentric diamonds (rhombuses).
 * Cobalt, Sky, Ink. Hover swaps tile colors.
 */
export default function NestedDiamonds({
  className = '',
  outer = '#2B45D9',
  mid = '#4FB6E6',
  inner = '#0B1520',
  core = '#FDB913',
}) {
  return (
    <div
      className={`group w-full h-full aspect-square mosaic-tile bg-[var(--surface)] overflow-hidden cursor-pointer ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Tile */}
        <rect
          width="100"
          height="100"
          fill={inner}
          className="transition-colors duration-300 group-hover:fill-[#2B45D9]"
        />

        {/* Diamond 1 (Outer) */}
        <polygon
          points="50,4 96,50 50,96 4,50"
          fill={outer}
          className="transition-colors duration-300 group-hover:fill-[#4FB6E6]"
        />

        {/* Diamond 2 (Mid) */}
        <polygon
          points="50,18 82,50 50,82 18,50"
          fill={mid}
          className="transition-colors duration-300 group-hover:fill-[#0B1520]"
        />

        {/* Diamond 3 (Inner) */}
        <polygon
          points="50,32 68,50 50,68 32,50"
          fill={inner}
          className="transition-colors duration-300 group-hover:fill-[#F28A2E]"
        />

        {/* Diamond 4 (Core) */}
        <polygon
          points="50,42 58,50 50,58 42,50"
          fill={core}
          className="transition-colors duration-300 group-hover:fill-[#FFFFFF]"
        />
      </svg>
    </div>
  );
}

import React from 'react';

/**
 * Star8: 8-point geometric star (two overlapping rotated squares/octagram).
 * Yellow, Ink, Cobalt.
 */
export default function Star8({
  className = '',
  bg = '#121E2D',
  starColor = '#FDB913',
  coreColor = '#D6452B',
}) {
  return (
    <div
      className={`group w-full h-full aspect-square mosaic-tile overflow-hidden cursor-pointer ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transition-transform duration-500 group-hover:rotate-45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill={bg} />

        {/* Square 1 */}
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          fill={starColor}
          className="transition-colors duration-300 group-hover:fill-[#F28A2E]"
        />

        {/* Square 2 (Rotated 45 degrees around center 50,50) */}
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          fill={starColor}
          transform="rotate(45 50 50)"
          className="transition-colors duration-300 group-hover:fill-[#F28A2E]"
        />

        {/* Inner Central Octagon / Circle Core */}
        <circle cx="50" cy="50" r="15" fill={coreColor} />
      </svg>
    </div>
  );
}

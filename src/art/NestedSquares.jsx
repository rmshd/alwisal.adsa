import React from 'react';

/**
 * NestedSquares: Square tile with concentric squares rotated or scaled.
 */
export default function NestedSquares({
  className = '',
  c1 = '#F28A2E',
  c2 = '#121E2D',
  c3 = '#FDB913',
  c4 = '#0B1520',
}) {
  return (
    <div
      className={`group w-full h-full aspect-square mosaic-tile bg-[var(--surface)] overflow-hidden cursor-pointer ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transition-transform duration-500 group-hover:scale-95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill={c1} className="transition-colors duration-300 group-hover:fill-[#2B45D9]" />
        <rect x="12" y="12" width="76" height="76" fill={c2} className="transition-colors duration-300 group-hover:fill-[#F28A2E]" />
        <rect x="25" y="25" width="50" height="50" fill={c3} className="transition-colors duration-300 group-hover:fill-[#121E2D]" />
        <rect x="38" y="38" width="24" height="24" fill={c4} className="transition-colors duration-300 group-hover:fill-[#FDB913]" />
      </svg>
    </div>
  );
}

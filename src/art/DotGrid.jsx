import React from 'react';

/**
 * DotGrid: Geometric matrix array of circular dots.
 */
export default function DotGrid({
  className = '',
  bg = '#121E2D',
  dotColor = '#F28A2E',
  grid = 5,
}) {
  const step = 100 / (grid + 1);
  const dots = [];

  for (let r = 1; r <= grid; r++) {
    for (let c = 1; c <= grid; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * step}
          cy={r * step}
          r={step * 0.22}
          fill={dotColor}
          className="transition-transform duration-300 group-hover:scale-125"
        />
      );
    }
  }

  return (
    <div
      className={`group w-full h-full aspect-square mosaic-tile overflow-hidden cursor-pointer ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill={bg} />
        {dots}
      </svg>
    </div>
  );
}

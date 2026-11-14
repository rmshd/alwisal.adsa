import React from 'react';

/**
 * Checker: Bold geometric checkerboard tile (e.g. 4x4 or 6x6).
 * Crisp 0px radius, hover swaps colors.
 */
export default function Checker({
  className = '',
  colorA = '#121E2D',
  colorB = '#FFFFFF',
  swapA = '#F28A2E',
  swapB = '#0B1520',
  grid = 4,
}) {
  const size = 100 / grid;
  const cells = [];

  for (let row = 0; row < grid; row++) {
    for (let col = 0; col < grid; col++) {
      const isEven = (row + col) % 2 === 0;
      cells.push(
        <rect
          key={`${row}-${col}`}
          x={col * size}
          y={row * size}
          width={size}
          height={size}
          fill={isEven ? colorA : colorB}
          className={`transition-colors duration-300 ${
            isEven ? 'group-hover:fill-[#F28A2E]' : 'group-hover:fill-[#0B1520]'
          }`}
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
        {cells}
      </svg>
    </div>
  );
}

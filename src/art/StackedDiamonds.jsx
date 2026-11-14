import React from 'react';

/**
 * StackedDiamonds: Vertical column of interlocking geometric diamonds.
 * Colors: Orange (#F28A2E), Yellow (#FDB913), Cobalt (#2B45D9), Ink (#0B1520).
 */
export default function StackedDiamonds({
  className = '',
  colors = ['#F28A2E', '#FDB913', '#2B45D9', '#D6452B', '#121E2D'],
  bg = '#0B1520',
  count = 5,
}) {
  const diamonds = [];
  const heightStep = 100 / count;

  for (let i = 0; i < count; i++) {
    const cy = i * heightStep + heightStep / 2;
    const color = colors[i % colors.length];
    const nextColor = colors[(i + 1) % colors.length];

    diamonds.push(
      <g key={i}>
        {/* Outer diamond */}
        <polygon
          points={`50,${cy - heightStep / 2} 90,${cy} 50,${cy + heightStep / 2} 10,${cy}`}
          fill={color}
          className="transition-colors duration-300 hover:fill-[#FFFFFF]"
        />
        {/* Inner concentric diamond */}
        <polygon
          points={`50,${cy - heightStep / 3.5} 75,${cy} 50,${cy + heightStep / 3.5} 25,${cy}`}
          fill={nextColor}
        />
      </g>
    );
  }

  return (
    <div
      className={`group w-full h-full mosaic-tile overflow-hidden cursor-pointer ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill={bg} />
        {diamonds}
      </svg>
    </div>
  );
}

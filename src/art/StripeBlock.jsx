import React from 'react';

/**
 * StripeBlock: Square tile with bold geometric diagonal or vertical stripes.
 */
export default function StripeBlock({
  className = '',
  bg = '#0B1520',
  stripeColor = '#F28A2E',
  angle = 45,
}) {
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
        <defs>
          <pattern
            id={`stripes-${angle}`}
            width="20"
            height="20"
            patternTransform={`rotate(${angle} 0 0)`}
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="20" stroke={stripeColor} strokeWidth="10" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={bg} />
        <rect width="100" height="100" fill={`url(#stripes-${angle})`} />
      </svg>
    </div>
  );
}

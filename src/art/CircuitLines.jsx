import React from 'react';

/**
 * CircuitLines
 * Abstract geometric "circuit" lines: thin mustard (#E2A32E) paths with 45-degree bends
 * and small round terminal nodes. Inspired by the cream poster reference.
 * Original SVG construction.
 */
export default function CircuitLines({ className = '', color = '#E2A32E', strokeWidth = 1.5, ...props }) {
  return (
    <svg
      viewBox="0 0 600 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto pointer-events-none select-none ${className}`}
      preserveAspectRatio="none"
      {...props}
    >
      {/* Horizontal & 45-deg angled trace lines */}
      <path
        d="M0 20 H140 L170 50 H320 L350 80 H480 L510 50 H600"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        opacity="0.75"
      />
      <path
        d="M0 60 H80 L110 30 H260 L290 60 H400 L430 90 H560 L580 70 H600"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        opacity="0.5"
      />
      <path
        d="M40 100 H190 L220 70 H360 L390 100 H520 L540 80"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        opacity="0.6"
      />

      {/* Nodes / Junctions */}
      <circle cx="140" cy="20" r="3.5" fill={color} />
      <circle cx="170" cy="50" r="2.5" fill={color} />
      <circle cx="320" cy="50" r="3.5" fill={color} />
      <circle cx="350" cy="80" r="2.5" fill={color} />
      <circle cx="480" cy="80" r="3.5" fill={color} />
      <circle cx="510" cy="50" r="2.5" fill={color} />

      <circle cx="80" cy="60" r="3" fill={color} />
      <circle cx="110" cy="30" r="2" fill={color} />
      <circle cx="260" cy="30" r="3" fill={color} />
      <circle cx="290" cy="60" r="2.5" fill={color} />
      <circle cx="400" cy="60" r="3.5" fill={color} />
      <circle cx="430" cy="90" r="2.5" fill={color} />

      <circle cx="190" cy="100" r="3" fill={color} />
      <circle cx="220" cy="70" r="2.5" fill={color} />
      <circle cx="360" cy="70" r="3" fill={color} />
      <circle cx="390" cy="100" r="2.5" fill={color} />
      <circle cx="540" cy="80" r="3.5" fill={color} />
    </svg>
  );
}

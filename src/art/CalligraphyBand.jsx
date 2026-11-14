import React from 'react';

/**
 * CalligraphyBand: Original abstract Arabic-script scribble pattern (unreadable gestural strokes)
 * as a repeating SVG band in two shades of terracotta (#D6452B and #B8361F).
 */
export default function CalligraphyBand({
  className = '',
  height = 54,
  c1 = '#D6452B',
  c2 = '#A8321B',
  bg = 'transparent',
}) {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: `${height}px` }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {bg !== 'transparent' && <rect width="1200" height="60" fill={bg} />}

        {/* First layer of calligraphic swashes (Dark Terracotta) */}
        <g stroke={c2} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          <path d="M0,35 Q30,10 60,35 T120,35 Q150,55 180,25 T240,40 Q270,12 300,38 T360,20 Q390,52 420,30 T480,42 Q510,10 540,36 T600,28 Q630,58 660,32 T720,44 Q750,15 780,38 T840,24 Q870,55 900,30 T960,42 Q990,14 1020,38 T1080,22 Q1110,54 1140,32 T1200,40" />
          <path d="M20,45 Q40,15 70,30 C90,40 100,50 130,22 Q160,8 190,42 T260,30 Q290,18 320,45 T390,26 Q420,50 460,25 T530,42 Q570,15 610,38 T680,24 Q720,50 760,28 T830,42 Q870,16 910,38 T980,26 Q1020,52 1060,30 T1130,44 Q1170,18 1200,32" />
        </g>

        {/* Second layer of gestural strokes (Vibrant Terracotta) */}
        <g stroke={c1} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Abstract Diwani/Thuluth swoops and loops */}
          <path d="M40,20 C60,45 80,10 110,35 S160,50 180,20 C200,8 230,45 270,25 S330,15 360,40 C380,55 410,18 450,32 S500,50 540,22 C560,10 600,45 640,26 S700,16 730,42 C750,56 790,20 830,34 S880,52 920,24 C940,12 980,46 1020,28 S1080,18 1110,42 C1130,56 1170,20 1200,35" />
          {/* Calligraphic dots / accents (Nuqta diamonds) */}
          <rect x="75" y="15" width="4" height="4" fill={c1} transform="rotate(45 77 17)" />
          <rect x="195" y="45" width="4" height="4" fill={c1} transform="rotate(45 197 47)" />
          <rect x="315" y="14" width="4" height="4" fill={c1} transform="rotate(45 317 16)" />
          <rect x="435" y="48" width="4" height="4" fill={c1} transform="rotate(45 437 50)" />
          <rect x="555" y="12" width="4" height="4" fill={c1} transform="rotate(45 557 14)" />
          <rect x="675" y="46" width="4" height="4" fill={c1} transform="rotate(45 677 48)" />
          <rect x="795" y="14" width="4" height="4" fill={c1} transform="rotate(45 797 16)" />
          <rect x="915" y="48" width="4" height="4" fill={c1} transform="rotate(45 917 50)" />
          <rect x="1035" y="14" width="4" height="4" fill={c1} transform="rotate(45 1037 16)" />
          <rect x="1155" y="46" width="4" height="4" fill={c1} transform="rotate(45 1157 48)" />
        </g>
      </svg>
    </div>
  );
}

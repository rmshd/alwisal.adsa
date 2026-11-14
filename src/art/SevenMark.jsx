import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isReducedMotion } from '../lib/motion';

export default function SevenMark({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Intro assembly animation: shapes fly in from scattered positions and assemble into 7
      gsap.fromTo(
        '.seven-icon-shape',
        {
          x: () => (Math.random() - 0.5) * 200,
          y: () => (Math.random() - 0.5) * 160,
          rotation: () => (Math.random() - 0.5) * 60,
          scale: 0.4,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.4,
          stagger: {
            each: 0.025,
            from: 'random',
          },
          ease: 'power3.out',
          delay: 0.15,
        }
      );

      // Label fade in with small overshoot
      gsap.fromTo(
        '.seven-label',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'back.out(1.5)', delay: 1.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-col items-center lg:items-start select-none ${className}`}>
      {/* SVG Numeral 7 Collage */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] aspect-[500/560]">
        <svg
          viewBox="0 0 500 560"
          className="w-full h-full drop-shadow-2xl overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Bold Numeral "7" Clip Path */}
            <clipPath id="seven-mask-path">
              <path
                d="M 40 40 H 460 V 150 L 250 540 H 120 L 320 150 H 40 Z"
                fillRule="evenodd"
              />
            </clipPath>
          </defs>

          {/* Underlay glow / subtle boundary */}
          <path
            d="M 40 40 H 460 V 150 L 250 540 H 120 L 320 150 H 40 Z"
            fill="#2A2C31"
            opacity="0.5"
          />

          {/* Icons Group Clipped by the Bold 7 */}
          <g clipPath="url(#seven-mask-path)">
            {/* Background base fills */}
            <rect x="0" y="0" width="500" height="560" fill="#24262B" />

            {/* --- TOP HORIZONTAL BAR COLLAGE (Y: 40 to 150) --- */}
            {/* Masjid Left */}
            <g className="seven-icon-shape" transform="translate(45, 45)">
              <path d="M40 10L10 32H70L40 10Z" fill="#27A66B" />
              <path d="M40 26L16 42H64L40 26Z" fill="#FFC93C" />
              <rect x="20" y="42" width="40" height="26" fill="#F4F2EC" />
              <circle cx="40" cy="8" r="3" fill="#FFC93C" />
            </g>

            {/* Minaret */}
            <g className="seven-icon-shape" transform="translate(125, 48)">
              <polygon points="15,6 10,18 20,18" fill="#FFC93C" />
              <rect x="11" y="18" width="8" height="38" fill="#6CB4FF" />
              <circle cx="15" cy="28" r="2.5" fill="#1B3A8A" />
            </g>

            {/* Open Kitab */}
            <g className="seven-icon-shape" transform="translate(155, 52)">
              <path d="M6 46C18 42 30 43 36 47C42 43 54 42 66 46V18C54 14 42 15 36 19C30 15 18 14 6 18V46Z" fill="#FFC93C" />
              <path d="M36 19V47" stroke="#1E1F22" strokeWidth="3" />
            </g>

            {/* Qalam */}
            <g className="seven-icon-shape" transform="translate(230, 48)">
              <path d="M50 8L56 14L18 52L8 56L12 46L50 8Z" fill="#F0584B" />
            </g>

            {/* Hanging Lamp */}
            <g className="seven-icon-shape" transform="translate(290, 45)">
              <path d="M22 6V18" stroke="#A9ABB3" strokeWidth="2.5" />
              <path d="M12 18H32L36 34L22 46L8 34L12 18Z" fill="#FFC93C" />
              <circle cx="22" cy="30" r="5" fill="#F0584B" />
            </g>

            {/* Rub-el-Hizb Geometric Star */}
            <g className="seven-icon-shape" transform="translate(345, 50)">
              <rect x="12" y="12" width="30" height="30" rx="3" fill="#2F6BFF" />
              <rect x="12" y="12" width="30" height="30" rx="3" transform="rotate(45 27 27)" fill="#6CB4FF" opacity="0.9" />
              <circle cx="27" cy="27" r="4.5" fill="#FFC93C" />
            </g>

            {/* Flower Blossom A */}
            <g className="seven-icon-shape" transform="translate(400, 52)">
              <circle cx="24" cy="14" r="8" fill="#F0584B" />
              <circle cx="34" cy="24" r="8" fill="#F0584B" />
              <circle cx="24" cy="34" r="8" fill="#F0584B" />
              <circle cx="14" cy="24" r="8" fill="#F0584B" />
              <circle cx="24" cy="24" r="5" fill="#FFC93C" />
            </g>

            {/* Banana Leaf filler */}
            <g className="seven-icon-shape" transform="translate(200, 95)">
              <path d="M10 36C22 34 38 20 50 6C38 18 20 28 10 36Z" fill="#27A66B" />
            </g>

            {/* Tea Glass */}
            <g className="seven-icon-shape" transform="translate(80, 88)">
              <path d="M12 10H30L26 36H16L12 10Z" fill="#1E1F22" stroke="#F4F2EC" strokeWidth="2" />
              <path d="M14 20H28L25.5 34H16.5L14 20Z" fill="#F0584B" />
              <rect x="13" y="17" width="16" height="3" fill="#FFC93C" />
            </g>

            {/* Inkpot */}
            <g className="seven-icon-shape" transform="translate(265, 92)">
              <rect x="15" y="8" width="16" height="6" fill="#6CB4FF" />
              <path d="M8 14H38L42 34C42 37 39 38 36 38H10C7 38 4 37 4 34L8 14Z" fill="#1B3A8A" />
              <circle cx="23" cy="26" r="4.5" fill="#FFC93C" />
            </g>

            {/* Palm Top Corner */}
            <g className="seven-icon-shape" transform="translate(380, 85)">
              <path d="M20 40C21 30 25 22 22 14" stroke="#FFC93C" strokeWidth="2.5" />
              <path d="M22 14C14 12 7 16 5 22C10 22 16 20 22 14Z" fill="#27A66B" />
              <path d="M22 14C28 10 36 10 40 14C34 16 28 16 22 14Z" fill="#27A66B" />
            </g>

            {/* --- DIAGONAL STEM COLLAGE (From (400, 150) down to (150, 540)) --- */}

            {/* Step 1: Upper stem */}
            <g className="seven-icon-shape" transform="translate(300, 155)">
              {/* Crossed Rihal */}
              <path d="M6 34L20 20L34 34H28L20 26L12 34H6Z" fill="#2F6BFF" />
              <path d="M6 12L20 26L34 12H28L20 20L12 12H6Z" fill="#2F6BFF" />
              <circle cx="20" cy="23" r="2.5" fill="#FFC93C" />
            </g>

            <g className="seven-icon-shape" transform="translate(245, 175)">
              {/* Compass */}
              <circle cx="22" cy="22" r="18" fill="#1B3A8A" />
              <circle cx="22" cy="22" r="14" fill="#F4F2EC" />
              <polygon points="22,12 26,22 22,20" fill="#F0584B" />
              <polygon points="22,32 26,22 22,20" fill="#1B3A8A" />
              <polygon points="22,12 18,22 22,20" fill="#F0584B" />
              <polygon points="22,32 18,22 22,20" fill="#1B3A8A" />
            </g>

            {/* Step 2: Book Stack */}
            <g className="seven-icon-shape" transform="translate(275, 220)">
              <rect x="8" y="28" width="34" height="8" rx="2" fill="#1B3A8A" />
              <rect x="10" y="18" width="30" height="8" rx="2" fill="#2F6BFF" />
              <rect x="12" y="8" width="26" height="8" rx="2" fill="#27A66B" />
            </g>

            <g className="seven-icon-shape" transform="translate(225, 235)">
              {/* Dates Cluster */}
              <path d="M16 6V14" stroke="#27A66B" strokeWidth="2" />
              <circle cx="12" cy="14" r="4.5" fill="#F0584B" />
              <circle cx="20" cy="15" r="4.5" fill="#F0584B" />
              <circle cx="16" cy="21" r="5" fill="#FFC93C" />
              <circle cx="11" cy="27" r="4.5" fill="#F0584B" />
              <circle cx="21" cy="28" r="4.5" fill="#F0584B" />
            </g>

            {/* Step 3: Mid stem */}
            <g className="seven-icon-shape" transform="translate(225, 290)">
              {/* Flower B Yellow */}
              <circle cx="20" cy="10" r="4.5" fill="#FFC93C" />
              <circle cx="27" cy="14" r="4.5" fill="#FFC93C" />
              <circle cx="30" cy="21" r="4.5" fill="#FFC93C" />
              <circle cx="27" cy="28" r="4.5" fill="#FFC93C" />
              <circle cx="20" cy="32" r="4.5" fill="#FFC93C" />
              <circle cx="13" cy="28" r="4.5" fill="#FFC93C" />
              <circle cx="10" cy="21" r="4.5" fill="#FFC93C" />
              <circle cx="13" cy="14" r="4.5" fill="#FFC93C" />
              <circle cx="20" cy="21" r="5.5" fill="#F0584B" />
            </g>

            <g className="seven-icon-shape" transform="translate(270, 310)">
              {/* Sunrise */}
              <path d="M6 28H34" stroke="#6CB4FF" strokeWidth="2" />
              <path d="M12 28A8 8 0 0 1 28 28Z" fill="#FFC93C" />
              <line x1="20" y1="12" x2="20" y2="15" stroke="#FFC93C" strokeWidth="2" />
            </g>

            <g className="seven-icon-shape" transform="translate(195, 345)">
              {/* Tasbih */}
              <circle cx="22" cy="18" r="13" stroke="#FFC93C" strokeWidth="2.5" strokeDasharray="3 3" />
              <circle cx="22" cy="31" r="3" fill="#F0584B" />
              <path d="M22 34V40" stroke="#F0584B" strokeWidth="2" />
            </g>

            {/* Step 4: Lower-mid stem */}
            <g className="seven-icon-shape" transform="translate(210, 400)">
              {/* Open Kitab 2 */}
              <path d="M6 34C14 31 22 32 26 35C30 32 38 31 46 34V14C38 11 30 12 26 15C22 12 14 11 6 14V34Z" fill="#6CB4FF" />
              <path d="M26 15V35" stroke="#1E1F22" strokeWidth="2" />
            </g>

            <g className="seven-icon-shape" transform="translate(160, 415)">
              {/* Leaf Fronds */}
              <path d="M8 32C18 30 30 18 38 6C28 16 14 24 8 32Z" fill="#27A66B" />
            </g>

            <g className="seven-icon-shape" transform="translate(180, 455)">
              {/* Flower C Pink */}
              <circle cx="20" cy="12" r="7" fill="#E85DA0" />
              <circle cx="28" cy="20" r="7" fill="#E85DA0" />
              <circle cx="20" cy="28" r="7" fill="#E85DA0" />
              <circle cx="12" cy="20" r="7" fill="#E85DA0" />
              <circle cx="20" cy="20" r="4.5" fill="#6CB4FF" />
            </g>

            {/* Step 5: Base of the stem */}
            <g className="seven-icon-shape" transform="translate(130, 480)">
              {/* Kerala Masjid Miniature */}
              <path d="M28 8L6 24H50L28 8Z" fill="#27A66B" />
              <rect x="12" y="24" width="32" height="18" fill="#F4F2EC" />
              <rect x="22" y="30" width="12" height="12" fill="#2F6BFF" />
            </g>

            <g className="seven-icon-shape" transform="translate(185, 495)">
              {/* Star */}
              <rect x="8" y="8" width="20" height="20" rx="2" fill="#FFC93C" />
              <rect x="8" y="8" width="20" height="20" rx="2" transform="rotate(45 18 18)" fill="#FFC93C" opacity="0.8" />
            </g>
          </g>
        </svg>
      </div>

      {/* Label under 7: "ദിനങ്ങൾ" */}
      <div className="seven-label mt-3">
        <span className="font-heading font-extrabold text-[clamp(2.4rem,6vw,4.5rem)] text-white tracking-tight leading-none">
          ദിനങ്ങൾ
        </span>
      </div>
    </div>
  );
}

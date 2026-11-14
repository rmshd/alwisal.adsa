import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isReducedMotion } from '../lib/motion';

export default function Panorama({ className = '' }) {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const midRef = useRef(null);
  const foreRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Background hills parallax
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: 45,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Midground village parallax
      if (midRef.current) {
        gsap.to(midRef.current, {
          y: 22,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Foreground leaves subtle shift
      if (foreRef.current) {
        gsap.to(foreRef.current, {
          y: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden relative select-none pointer-events-none ${className}`}
      style={{ height: 'clamp(200px, 28vw, 360px)' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full absolute inset-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fade-to-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E1F22" stopOpacity="0" />
            <stop offset="70%" stopColor="#1E1F22" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E1F22" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* --- LAYER 1: BACKGROUND (Hills & Sunrise Glow) --- */}
        <g ref={bgRef}>
          {/* Dawn sun behind hills */}
          <circle cx="860" cy="180" r="70" fill="#FFC93C" opacity="0.35" />
          <circle cx="860" cy="180" r="45" fill="#FFC93C" opacity="0.6" />

          {/* Distant Blue Hills */}
          <path
            d="M0 240 Q240 160 480 210 T960 170 T1440 220 L1440 360 L0 360 Z"
            fill="#1B263B"
          />
          <path
            d="M0 260 Q360 190 720 230 T1440 200 L1440 360 L0 360 Z"
            fill="#232F4D"
            opacity="0.8"
          />
        </g>

        {/* --- LAYER 2: MIDGROUND (River, Kerala Dars Masjid, Palms) --- */}
        <g ref={midRef}>
          {/* River Stream */}
          <path
            d="M0 295 Q320 270 700 285 T1440 275 L1440 360 L0 360 Z"
            fill="#2A3D66"
          />

          {/* River banks & village silhouettes */}
          <path
            d="M0 310 Q400 290 820 305 T1440 295 L1440 360 L0 360 Z"
            fill="#1E2A3A"
          />

          {/* Coconut Palm Grove Left */}
          <g transform="translate(140, 160)">
            <path d="M40 140C42 100 48 60 42 20" stroke="#FFC93C" strokeWidth="4" />
            <path d="M42 20C26 16 12 24 6 36C16 36 28 32 42 20Z" fill="#27A66B" />
            <path d="M42 20C32 8 16 6 6 10C14 18 26 22 42 20Z" fill="#27A66B" />
            <path d="M42 20C46 6 58 4 68 8C60 14 52 18 42 20Z" fill="#27A66B" />
            <path d="M42 20C54 12 68 14 74 24C62 26 52 24 42 20Z" fill="#27A66B" />
          </g>

          <g transform="translate(200, 175)">
            <path d="M30 125C32 90 35 55 30 18" stroke="#FFC93C" strokeWidth="3" />
            <path d="M30 18C18 14 8 20 2 30C12 30 20 26 30 18Z" fill="#27A66B" />
            <path d="M30 18C40 10 50 12 58 20C48 22 38 20 30 18Z" fill="#27A66B" />
          </g>

          {/* Traditional Kerala Sloped-Roof Dars Masjid */}
          <g transform="translate(740, 180)">
            {/* Sloped multi-tier roof */}
            <path d="M90 15L10 55H170L90 15Z" fill="#27A66B" />
            <path d="M90 38L25 72H155L90 38Z" fill="#FFC93C" />
            <rect x="35" y="72" width="110" height="55" fill="#F4F2EC" />
            {/* Arched doors / dars veranda columns */}
            <rect x="50" y="85" width="18" height="42" rx="9" fill="#2F6BFF" />
            <rect x="80" y="80" width="22" height="47" rx="11" fill="#1B3A8A" />
            <rect x="114" y="85" width="18" height="42" rx="9" fill="#2F6BFF" />
            {/* Traditional dome finial */}
            <circle cx="90" cy="10" r="4" fill="#FFC93C" />

            {/* Minaret attached */}
            <g transform="translate(160, -20)">
              <polygon points="12,0 4,20 20,20" fill="#FFC93C" />
              <rect x="6" y="20" width="12" height="145" fill="#6CB4FF" />
              <rect x="2" y="55" width="20" height="6" rx="2" fill="#2F6BFF" />
              <rect x="2" y="105" width="20" height="6" rx="2" fill="#2F6BFF" />
            </g>
          </g>

          {/* Palms behind masjid */}
          <g transform="translate(940, 170)">
            <path d="M35 130C38 90 42 50 35 15" stroke="#FFC93C" strokeWidth="3.5" />
            <path d="M35 15C18 10 6 18 0 30C12 30 24 24 35 15Z" fill="#27A66B" />
            <path d="M35 15C48 6 62 10 70 20C58 22 46 20 35 15Z" fill="#27A66B" />
          </g>
        </g>

        {/* --- LAYER 3: FOREGROUND (Lush Leaves, Open Kitab, Blending Base) --- */}
        <g ref={foreRef}>
          {/* Foreground Banana Leaves Left */}
          <path
            d="M-20 360C30 320 80 270 120 220C100 260 70 310 10 360Z"
            fill="#27A66B"
          />
          <path
            d="M30 360C80 300 150 250 210 210C170 260 120 320 60 360Z"
            fill="#1F8254"
          />

          {/* Foreground Kitab Silhouette Right */}
          <g transform="translate(1260, 270)">
            <path
              d="M10 50C25 45 42 46 50 50C58 46 75 45 90 50V25C75 20 58 21 50 25C42 21 25 20 10 25V50Z"
              fill="#FFC93C"
              opacity="0.9"
            />
            {/* Quran stand legs */}
            <path d="M18 52L50 32L82 52H72L50 39L28 52H18Z" fill="#2F6BFF" />
          </g>

          {/* Foreground Right Foliage */}
          <path
            d="M1480 360C1420 310 1360 260 1310 200C1340 250 1380 310 1440 360Z"
            fill="#27A66B"
          />
        </g>

        {/* Permanent bottom fade blending seamlessly into --bg (#1E1F22) */}
        <rect x="0" y="240" width="1440" height="120" fill="url(#fade-to-bg)" />
        <rect x="0" y="340" width="1440" height="20" fill="#1E1F22" />
      </svg>
    </div>
  );
}

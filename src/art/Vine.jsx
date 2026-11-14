import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from '../lib/motion';

export default function Vine({ className = '' }) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const heroFlowerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isReducedMotion() || !pathRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const length = path.getTotalLength ? path.getTotalLength() : 4000;

      // Set initial stroke-dashoffset
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Hero hanging flower bounce-in
      if (heroFlowerRef.current) {
        gsap.fromTo(
          heroFlowerRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(2)',
            delay: 0.8,
          }
        );
      }

      // Main scrub drawing down the whole page
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      // Individual bloom triggers for vine milestone flowers
      const blooms = containerRef.current.querySelectorAll('.vine-bloom');
      blooms.forEach((bloom) => {
        gsap.fromTo(
          bloom,
          { scale: 0, opacity: 0, transformOrigin: 'center center' },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(2.2)',
            scrollTrigger: {
              trigger: bloom,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 8200"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Continuous winding vine path starting at Hero, curving beside sections down to Closing */}
        <path
          ref={pathRef}
          d="
            M 480,90
            C 500,160 520,240 505,330
            C 490,410 430,470 420,530
            C 400,660 520,740 600,820
            C 720,940 760,1100 680,1260
            C 600,1420 400,1540 380,1720
            C 360,1900 600,2050 720,2250
            C 840,2450 820,2680 650,2880
            C 500,3050 420,3250 510,3450
            C 600,3650 780,3850 750,4100
            C 710,4350 480,4550 420,4800
            C 360,5050 540,5300 700,5550
            C 840,5800 810,6100 640,6380
            C 490,6620 450,6900 580,7180
            C 680,7400 750,7620 620,7850
            C 540,7980 460,8080 430,8160
          "
          stroke="var(--sky)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Hero hanging red flower */}
        <g ref={heroFlowerRef} transform="translate(505, 330)">
          <line x1="0" y1="0" x2="0" y2="18" stroke="var(--sky)" strokeWidth="2.5" />
          <g transform="translate(0, 22)">
            <circle cx="0" cy="-6" r="6" fill="#F0584B" />
            <circle cx="6" cy="0" r="6" fill="#F0584B" />
            <circle cx="0" cy="6" r="6" fill="#F0584B" />
            <circle cx="-6" cy="0" r="6" fill="#F0584B" />
            <circle cx="0" cy="0" r="4" fill="#FFC93C" />
          </g>
        </g>

        {/* Milestone Bloom: Daily band */}
        <g className="vine-bloom" transform="translate(680, 1260)">
          <circle cx="0" cy="0" r="7" fill="#27A66B" />
          <circle cx="0" cy="0" r="4" fill="#FFC93C" />
        </g>

        {/* Milestone Bloom: Schedule timeline */}
        <g className="vine-bloom" transform="translate(380, 1720)">
          <circle cx="0" cy="0" r="9" fill="#FFC93C" />
          <circle cx="0" cy="0" r="5" fill="#F0584B" />
        </g>

        {/* Milestone Bloom: Guests Section */}
        <g className="vine-bloom" transform="translate(750, 4100)">
          <circle cx="0" cy="0" r="10" fill="#F0584B" />
          <circle cx="0" cy="0" r="6" fill="#FFC93C" />
          <path d="M8 -6C16 -12 24 -10 28 -4C22 -2 14 -2 8 -6Z" fill="#27A66B" />
        </g>

        {/* Milestone Bloom: Registration Section */}
        <g className="vine-bloom" transform="translate(700, 5550)">
          <circle cx="0" cy="0" r="12" fill="#27A66B" />
          <circle cx="0" cy="0" r="7" fill="#FFC93C" />
          <path d="M-8 -8C-18 -14 -26 -12 -30 -4C-24 -2 -16 -2 -8 -8Z" fill="#6CB4FF" />
        </g>

        {/* Final Section Wrap Bloom around Ustad */}
        <g className="vine-bloom" transform="translate(430, 8160)">
          <circle cx="0" cy="0" r="14" fill="#F0584B" />
          <circle cx="0" cy="0" r="8" fill="#FFC93C" />
          <circle cx="0" cy="0" r="4" fill="#1B3A8A" />
        </g>
      </svg>
    </div>
  );
}

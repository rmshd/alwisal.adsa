import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../components/Button';
import { CONFIG, getDaysRemaining } from '../config';
import { isReducedMotion, smoothScrollTo } from '../lib/motion';

export default function Hero() {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const visualRef = useRef(null);
  const daysRemaining = getDaysRemaining();

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Clean, single reveal animation with power3.out
      gsap.fromTo(
        leftColRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.1,
        }
      );

      gsap.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.25,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-[100svh] min-h-[640px] max-h-[1080px] flex items-center bg-[var(--bg)] overflow-hidden pt-[72px]"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full bg-[var(--blue)]/10 blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--yellow)]/5 blur-[120px] pointer-events-none -z-0" />

      {/* 12-Column Full-Width Grid (Left 7 cols, Right 5 cols) */}
      <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* LEFT 7 COLS: Eyebrow + Stickers + Headline + Text + Buttons */}
        <div
          ref={leftColRef}
          className="lg:col-span-7 flex flex-col justify-center gap-5 sm:gap-6 min-w-0"
        >
          {/* Eyebrow & Stickers Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 select-none">
            <span className="text-xs font-sora font-semibold tracking-wider text-white/80 uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              SUFFA DARS NETWORK
            </span>

            {/* Date Sticker in Yellow */}
            <div className="bg-[var(--yellow)] text-[var(--bg)] px-3.5 py-1 rounded-full font-heading font-bold text-xs tracking-wide">
              {CONFIG.CAMP_DATES_LABEL}
            </div>

            {/* Countdown Badge */}
            <div className="bg-white/10 border border-white/15 text-white px-3.5 py-1 rounded-full font-sora font-semibold text-xs tracking-wider uppercase">
              {daysRemaining > 0 ? `${daysRemaining} ദിവസം ബാക്കി` : 'ക്യാമ്പ് തുടങ്ങി'}
            </div>

            {/* Free Badge */}
            <div className="bg-white/10 border border-white/15 text-white/90 px-3 py-1 rounded-full font-heading font-medium text-xs">
              {CONFIG.FEE_LABEL}
            </div>
          </div>

          {/* Headline (clamp font size, text-wrap balance, no overflow) */}
          <h1 className="font-heading font-bold text-[clamp(2.4rem,4.8vw,5.2rem)] leading-[1.12] text-white tracking-tight [text-wrap:balance] max-w-3xl">
            ഉസ്താദിനൊപ്പം ഏഴ് <span className="text-[var(--yellow)]">ദിനങ്ങൾ</span>
          </h1>

          {/* Subtext (Malayalam-safe line-height 1.4) */}
          <p className="font-body text-[clamp(1.05rem,1.6vw,1.35rem)] text-[var(--muted)] leading-[1.4] max-w-2xl [text-wrap:balance]">
            {CONFIG.SUBTITLE_MALAYALAM}. ഉസ്താദ് ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്രക്കൊപ്പം
            നേരിട്ടുള്ള ബുഖാരി സബഖും ആത്മീയ സഹവാസവും.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#register');
              }}
              variant="primary"
              className="text-base px-8 h-[52px]"
            >
              രജിസ്റ്റർ ചെയ്യൂ
            </Button>

            <Button
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#about');
              }}
              variant="secondary"
              className="text-base px-7 h-[52px]"
            >
              ക്യാമ്പ് അറിയൂ
            </Button>
          </div>
        </div>

        {/* RIGHT 5 COLS: Visual composition with clean outline 7 and Ustad's Cutout */}
        <div
          ref={visualRef}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end min-w-0"
        >
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-[460/540] flex items-center justify-center">
            {/* SVG Outline "7" with Campus Texture Mask */}
            <svg
              viewBox="0 0 460 540"
              className="w-full h-full absolute inset-0 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Clean Geometric 7 Clip Path */}
                <clipPath id="hero-seven-clip">
                  <path d="M 40 40 H 420 V 140 L 230 500 H 110 L 280 140 H 40 Z" />
                </clipPath>
                <linearGradient id="hero-seven-fade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2A2C31" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1E1F22" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* Background fill inside the 7 */}
              <path
                d="M 40 40 H 420 V 140 L 230 500 H 110 L 280 140 H 40 Z"
                fill="url(#hero-seven-fade)"
              />

              {/* Campus architectural graphic clipped inside 7 */}
              <g clipPath="url(#hero-seven-clip)" opacity="0.45">
                <image
                  href="/images/gallery/campus-dawn.svg"
                  x="0"
                  y="0"
                  width="460"
                  height="540"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>

              {/* Crisp golden outline of 7 */}
              <path
                d="M 40 40 H 420 V 140 L 230 500 H 110 L 280 140 H 40 Z"
                stroke="#FFC93C"
                strokeWidth="2"
                strokeOpacity="0.75"
              />
            </svg>

            {/* Ustad Transparent Cutout in foreground */}
            <div className="relative z-10 w-[78%] flex flex-col items-center select-none pt-4">
              <img
                src="/images/ustad-cutout.webp"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/ustad-cutout.svg';
                }}
                alt={CONFIG.USTAD_NAME}
                className="w-full h-auto object-contain"
                width="340"
                height="420"
                loading="eager"
              />

              {/* Floating Caption Pill under portrait */}
              <div className="mt-3 px-4 py-1 rounded-full bg-[#1E1F22]/90 backdrop-blur-md border border-white/10 text-center">
                <span className="font-heading font-medium text-xs sm:text-sm text-white">
                  {CONFIG.USTAD_NAME}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

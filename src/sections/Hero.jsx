import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Button from '../components/Button';
import { CONFIG } from '../config';
import { isReducedMotion, smoothScrollTo } from '../lib/motion';

export default function Hero() {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const visualRef = useRef(null);

  // Live countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const campDate = new Date(CONFIG.CAMP_START_DATE).getTime();
      const now = new Date().getTime();
      const diff = campDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / 1000 / 60) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current?.children || [],
        { opacity: 0, y: 35 },
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
        { opacity: 0, scale: 0.94 },
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
      className="relative w-full min-h-[100svh] flex items-center bg-[#0B0D12] overflow-hidden pt-[88px] pb-12 lg:pb-0"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      {/* Radiant Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full bg-[var(--yellow)]/10 blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-[550px] h-[550px] rounded-full bg-[var(--blue)]/10 blur-[150px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,201,60,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* 12-Column Responsive Editorial Grid */}
      <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto">
        {/* LEFT 7 COLS: Eyebrow + Badges + Grand Headline + Countdown + Buttons */}
        <div
          ref={leftColRef}
          className="lg:col-span-7 flex flex-col justify-center gap-5 sm:gap-6 min-w-0"
        >
          {/* Eyebrow & Live Status Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 select-none">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-sora text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                SUFFA DARS NETWORK
              </span>
            </div>

            {/* Camp Dates in Radiant Gold */}
            <div className="bg-gradient-to-r from-[#FFC93C] to-[#F59E0B] text-[#0B0D12] px-3.5 py-1.5 rounded-full font-heading font-extrabold text-xs tracking-wide shadow-[0_0_20px_rgba(255,201,60,0.3)]">
              {CONFIG.CAMP_DATES_LABEL}
            </div>

            {/* Free Admission Pill */}
            <div className="bg-white/5 border border-white/10 text-white/90 px-3.5 py-1.5 rounded-full font-heading font-medium text-xs">
              {CONFIG.FEE_LABEL}
            </div>
          </div>

          {/* Grand Headline */}
          <h1 className="font-heading font-extrabold text-[clamp(2.6rem,5.2vw,5.6rem)] leading-[1.1] text-white tracking-tight [text-wrap:balance] max-w-3xl">
            ഉസ്താദിനൊപ്പം{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1C5] via-[#FFC93C] to-[#F59E0B] drop-shadow-sm whitespace-nowrap">
              7 സുവർണ്ണ ദിനങ്ങൾ
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-[clamp(1.05rem,1.5vw,1.3rem)] text-[var(--muted)] leading-[1.5] max-w-2xl [text-wrap:balance]">
            {CONFIG.SUBTITLE_MALAYALAM}. ഉസ്താദ് ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്രക്കൊപ്പം
            നേരിട്ടുള്ള ബുഖാരി സബഖും തീവ്ര ആത്മീയ സഹവാസവും.
          </p>

          {/* Live Spiritual Countdown Tiles */}
          <div className="pt-1 pb-1">
            <div className="text-[11px] font-sora font-semibold tracking-widest text-white/50 uppercase mb-2.5">
              ക്യാമ്പ് ആരംഭിക്കാൻ ഇനി
            </div>
            <div className="flex items-center gap-3">
              {[
                { val: timeLeft.days, label: 'DAYS' },
                { val: timeLeft.hours, label: 'HOURS' },
                { val: timeLeft.mins, label: 'MINS' },
                { val: timeLeft.secs, label: 'SECS' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center min-w-[64px] sm:min-w-[72px] h-[64px] sm:h-[72px] rounded-[16px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-sm"
                >
                  <span className="font-sora font-bold text-xl sm:text-2xl text-white leading-none">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  <span className="font-sora text-[9px] font-semibold text-[var(--sky)] tracking-wider uppercase mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#register');
              }}
              variant="primary"
              className="text-base px-8 h-[54px]"
            >
              രജിസ്റ്റർ ചെയ്യൂ (സൗജന്യം)
            </Button>

            <Button
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#about');
              }}
              variant="secondary"
              className="text-base px-7 h-[54px]"
            >
              ക്യാമ്പ് അറിയൂ
            </Button>
          </div>

          {/* Key Trust Highlights */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-body text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[var(--yellow)]">✦</span> 30 ദർസുകൾ
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[var(--yellow)]">✦</span> 200+ പ്രതിഭകൾ
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[var(--yellow)]">✦</span> പ്രഭാത ബുഖാരി സബഖ്
            </span>
          </div>
        </div>

        {/* RIGHT 5 COLS: Grand Visual Composition */}
        <div
          ref={visualRef}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end min-w-0"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] aspect-[460/540] flex items-center justify-center">
            {/* Ambient Backlight Halo */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[var(--yellow)]/15 via-[var(--sky)]/10 to-transparent blur-[60px] pointer-events-none" />

            {/* SVG Outline "7" with Campus Texture Mask */}
            <svg
              viewBox="0 0 460 540"
              className="w-full h-full absolute inset-0 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="hero-seven-clip">
                  <path d="M 40 40 H 420 V 140 L 230 500 H 110 L 280 140 H 40 Z" />
                </clipPath>
                <linearGradient id="hero-seven-glow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1E2330" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#11141D" stopOpacity="0.98" />
                </linearGradient>
              </defs>

              {/* Background fill inside 7 */}
              <path
                d="M 40 40 H 420 V 140 L 230 500 H 110 L 280 140 H 40 Z"
                fill="url(#hero-seven-glow)"
              />

              {/* Campus graphic clipped */}
              <g clipPath="url(#hero-seven-clip)" opacity="0.5">
                <image
                  href="/images/gallery/campus-dawn.svg"
                  x="0"
                  y="0"
                  width="460"
                  height="540"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>

              {/* Glowing Outline of 7 */}
              <path
                d="M 40 40 H 420 V 140 L 230 500 H 110 L 280 140 H 40 Z"
                stroke="url(#seven-stroke-grad)"
                strokeWidth="2.5"
              />
              <defs>
                <linearGradient id="seven-stroke-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFC93C" />
                  <stop offset="50%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>

            {/* Ustad Portrait in Foreground with Glass Pedestal */}
            <div className="relative z-10 w-[82%] flex flex-col items-center select-none pt-2">
              <img
                src="/images/ustad-cutout.webp"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/ustad-cutout.svg';
                }}
                alt={CONFIG.USTAD_NAME}
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                width="340"
                height="420"
                loading="eager"
              />

              {/* Illuminated Scholar Glass Pedestal Badge */}
              <div className="mt-2 px-5 py-2.5 rounded-[16px] bg-[#141720]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center flex flex-col items-center">
                <span className="font-heading font-bold text-sm text-white tracking-wide">
                  {CONFIG.USTAD_NAME}
                </span>
                <span className="text-[10px] font-sora font-medium text-[var(--sky)] tracking-wider uppercase mt-0.5">
                  ചീഫ് മുദരിസ് & മുഖ്യ രക്ഷാധികാരി
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

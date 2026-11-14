import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SevenMark from '../art/SevenMark';
import Panorama from '../art/Panorama';
import Button from '../components/Button';
import { KitabIcon, StarIcon, LampIcon, BananaLeafIcon, FlowerA } from '../art/Icons';
import { CONFIG, getDaysRemaining } from '../config';
import { isReducedMotion, smoothScrollTo } from '../lib/motion';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineLine1Ref = useRef(null);
  const headlineLine2Ref = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);
  const stickersRef = useRef(null);
  const ustadGroupRef = useRef(null);

  const daysRemaining = getDaysRemaining();

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Line-by-line headline reveal from overflow mask
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: 'power3.out',
        }
      );

      // Subtext slide up
      tl.fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );

      // Buttons reveal
      tl.fromTo(
        buttonsRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.4'
      );

      // Ustad portrait & blob float in
      tl.fromTo(
        ustadGroupRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
        '-=0.8'
      );

      // Stickers pop with a small overshoot
      if (stickersRef.current) {
        tl.fromTo(
          stickersRef.current.children,
          { scale: 0, opacity: 0, rotation: (i) => (i % 2 === 0 ? -12 : 12) },
          {
            scale: 1,
            opacity: 1,
            rotation: (i) => (i === 1 ? -4 : i === 0 ? 3 : -2),
            duration: 0.7,
            stagger: 0.1,
            ease: 'back.out(2)',
          },
          '-=0.6'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 lg:pt-28 overflow-hidden bg-[var(--bg)]"
    >
      {/* Decorative ambient flat shapes in background */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[var(--navy)]/30 blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-80 h-80 rounded-full bg-[var(--blue)]/15 blur-3xl pointer-events-none -z-0" />

      {/* Main Hero Content: Full-width editorial asymmetric layout */}
      <div
        className="w-full relative z-10 flex-1 flex flex-col justify-center"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left ~55%: Giant SevenMark */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start">
            <SevenMark className="w-full" />
          </div>

          {/* Right ~45%: Headline, Stickers, Ustad Cutout & Buttons */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* TORN-EDGE STICKERS ROW */}
            <div
              ref={stickersRef}
              className="flex flex-wrap items-center gap-3 select-none"
            >
              {/* Red Date Label */}
              <div className="sticker-torn-red bg-[var(--coral)] text-white px-4 py-1.5 font-heading font-bold text-sm tracking-wide shadow-md">
                {CONFIG.CAMP_DATES_LABEL}
              </div>

              {/* Tilted Yellow Countdown */}
              <div className="sticker-torn-yellow bg-[var(--yellow)] text-[var(--bg)] px-4 py-1.5 font-sora font-extrabold text-sm tracking-wider uppercase shadow-md transform -rotate-3">
                {daysRemaining > 0 ? `${daysRemaining} ദിവസം ബാക്കി` : 'ക്യാമ്പ് ആരംഭിച്ചു!'}
              </div>

              {/* Green Free Badge */}
              <div className="sticker-torn-green bg-[var(--green)] text-white px-3.5 py-1.5 font-heading font-bold text-xs tracking-wide shadow-md">
                {CONFIG.FEE_LABEL}
              </div>
            </div>

            {/* HEADLINE WITH OVERFLOW MASKS FOR LINE REVEAL */}
            <div className="flex flex-col">
              <div className="overflow-hidden">
                <h1
                  ref={headlineLine1Ref}
                  className="heading-hero text-[var(--yellow)] tracking-tight leading-[1.08]"
                >
                  ഉസ്താദിനൊപ്പം
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2
                  ref={headlineLine2Ref}
                  className="heading-hero text-[var(--yellow)] tracking-tight leading-[1.08]"
                >
                  ഏഴ് ദിനങ്ങൾ
                </h2>
              </div>
            </div>

            {/* 2 Short White Lines */}
            <div ref={subtextRef} className="flex flex-col gap-1 text-white/90">
              <p className="font-body text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
                SUFFA ദർസ് വിദ്യാർത്ഥികൾക്കായി ADSA ഒരുക്കുന്ന
              </p>
              <p className="font-body text-base sm:text-lg lg:text-xl text-[var(--text)]/80 leading-relaxed">
                ഏഴ് ദിവസത്തെ സവിശേഷ അനുഭവ ക്യാമ്പ്
              </p>
            </div>

            {/* USTAD CUT-OUT PORTRAIT COMPOSITION */}
            <div
              ref={ustadGroupRef}
              className="relative w-full max-w-[380px] my-2 select-none"
            >
              {/* Flat Blue Blob Behind */}
              <div className="absolute inset-0 -top-6 -left-6 w-full h-[115%] bg-[var(--blue)] rounded-[48%_52%_42%_58%/55%_45%_55%_45%] -z-10 opacity-90 shadow-xl" />

              {/* Decorative shapes behind Ustad */}
              <div className="absolute -top-4 -right-4 -z-0">
                <StarIcon className="w-10 h-10 text-[var(--yellow)]" color="#FFC93C" />
              </div>
              <div className="absolute top-16 -left-5 -z-0">
                <LampIcon className="w-9 h-9" color="#FFC93C" />
              </div>
              <div className="absolute top-2 -left-3 -z-0">
                <KitabIcon className="w-9 h-9" color="#6CB4FF" />
              </div>

              {/* Ustad Cutout Image (Clean transparent cut-out, NO frame, NO arch) */}
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src="/images/ustad-cutout.webp"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/ustad-cutout.svg';
                  }}
                  alt={CONFIG.USTAD_NAME}
                  className="w-full max-w-[320px] h-auto object-contain filter drop-shadow-xl"
                  width="320"
                  height="380"
                  loading="eager"
                />

                {/* Overlapping lower edge decorative icons */}
                <div className="absolute -bottom-3 left-2 z-20">
                  <BananaLeafIcon className="w-12 h-12" color="#27A66B" />
                </div>
                <div className="absolute -bottom-2 right-4 z-20">
                  <FlowerA className="w-10 h-10" color="#F0584B" />
                </div>

                {/* Caption Badge under portrait */}
                <div className="mt-3 px-4 py-1.5 rounded-full bg-[var(--card)]/90 backdrop-blur-sm border border-white/10 text-center">
                  <span className="font-heading font-bold text-sm text-white">
                    {CONFIG.USTAD_NAME}
                  </span>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS ROW */}
            <div
              ref={buttonsRef}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('#register');
                }}
                variant="primary"
                className="text-base sm:text-lg"
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
                className="text-base sm:text-lg"
              >
                ക്യാമ്പ് അറിയൂ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PANORAMA WITH SCROLL PARALLAX */}
      <div className="w-full mt-12 relative z-10">
        <Panorama />
      </div>
    </section>
  );
}

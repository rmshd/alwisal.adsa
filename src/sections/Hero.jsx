import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../components/Button';
import AlWisalMark from '../art/AlWisalMark';
import PetalCircle from '../art/PetalCircle';
import NestedDiamonds from '../art/NestedDiamonds';
import NestedSquares from '../art/NestedSquares';
import Checker from '../art/Checker';
import Star8 from '../art/Star8';
import DotGrid from '../art/DotGrid';
import StripeBlock from '../art/StripeBlock';
import { smoothScrollTo, isReducedMotion } from '../lib/motion';

export default function Hero() {
  const heroRef = useRef(null);
  const mosaicRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Mosaic stagger reveal
      if (mosaicRef.current) {
        gsap.fromTo(
          mosaicRef.current.children,
          { opacity: 0, scale: 0.92, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.06,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      }

      // Text panel slide up
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[100svh] flex items-center bg-[var(--ink)] text-white font-['Poppins'] pt-[84px] pb-12 lg:py-0 overflow-hidden"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* LEFT 42% (5 cols on 12-col grid): 4x4 Geometric Tile Mosaic with real photography */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
          <div
            ref={mosaicRef}
            className="grid grid-cols-4 grid-rows-4 gap-2.5 w-full max-w-[460px] aspect-square select-none"
          >
            {/* Cell (1-2 cols, 1-3 rows): Ustad real photo tile (2x3 largest) */}
            <div className="col-span-2 row-span-3 relative overflow-hidden bg-[var(--surface)] border border-white/10 group">
              <img
                src="/images/ustad.jpg"
                alt="Sheikh Al-Usthad Alathurpadi"
                className="w-full h-full object-cover object-[center_20%] filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-[var(--yellow)]">
                  Usthad
                </span>
                <span className="block text-xs font-semibold text-white tracking-wide truncate">
                  Alathurpadi Dars
                </span>
              </div>
            </div>

            {/* Cell (col 3, row 1): PetalCircle (slow spin, orange/terracotta) */}
            <div className="bg-[var(--surface)] border border-white/10 p-2 flex items-center justify-center hover:bg-[var(--orange)] group transition-colors duration-200">
              <PetalCircle className="w-full h-full group-hover:brightness-0 group-hover:invert" />
            </div>

            {/* Cell (col 4, row 1): NestedDiamonds (cobalt/sky) */}
            <div className="bg-[var(--surface)] border border-white/10 p-2 flex items-center justify-center">
              <NestedDiamonds className="w-full h-full" />
            </div>

            {/* Cell (col 3, row 2): Star8 (yellow) */}
            <div className="bg-[var(--surface)] border border-white/10 p-2 flex items-center justify-center">
              <Star8 className="w-full h-full" />
            </div>

            {/* Cell (col 4, row 2): Checker (navy/white) */}
            <div className="bg-[var(--surface)] border border-white/10 p-2 flex items-center justify-center">
              <Checker className="w-full h-full" />
            </div>

            {/* Cell (col 3, row 3): NestedSquares (orange/yellow) */}
            <div className="bg-[var(--surface)] border border-white/10 p-2 flex items-center justify-center">
              <NestedSquares className="w-full h-full" />
            </div>

            {/* Cell (col 4, row 3): DotGrid */}
            <div className="bg-[var(--surface)] border border-white/10 p-2 flex items-center justify-center">
              <DotGrid className="w-full h-full" />
            </div>

            {/* Cell (cols 1-2, row 4): Masjid Real Photo Tile */}
            <div className="col-span-2 relative overflow-hidden bg-[var(--surface)] border border-white/10 group">
              <img
                src="/images/masjid.jpg"
                alt="Alathurpadi Dars Campus"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 to-transparent" />
              <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-wider text-white font-medium">
                Campus Venue
              </span>
            </div>

            {/* Cell (col 3, row 4): StripeBlock */}
            <div className="bg-[var(--surface)] border border-white/10 p-2 flex items-center justify-center">
              <StripeBlock className="w-full h-full" />
            </div>

            {/* Cell (col 4, row 4): PetalCircle miniature */}
            <div className="bg-[var(--surface)] border border-white/10 p-2 flex items-center justify-center">
              <PetalCircle className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* RIGHT 58% (7 cols on 12-col grid): Ink Panel with Typography & Actions */}
        <div
          ref={textRef}
          className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center gap-6 text-left"
        >
          {/* Top Yellow Arabic Bismillah */}
          <div className="flex items-center gap-3">
            <span className="font-['Reem_Kufi'] text-xl sm:text-2xl text-[var(--yellow)] tracking-wider">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
          </div>

          {/* Kufic Wordmark + English Title */}
          <div className="space-y-3">
            <AlWisalMark
              variant="hero"
              color="var(--yellow)"
              className="w-48 sm:w-60 h-auto"
            />
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight uppercase leading-[0.95] text-white">
              ADSA CAMP <span className="text-[var(--orange)]">2026</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[var(--muted)] font-normal max-w-xl leading-relaxed">
            A seven-day residential camp for SUFFA Dars graduates, immersing hearts in sacred knowledge and spiritual brotherhood.
          </p>

          {/* Date Chip */}
          <div className="inline-flex items-center gap-2.5 self-start px-4 py-1.5 bg-[var(--surface)] border border-white/10 text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[var(--orange)] animate-pulse" />
            <span className="text-white">Dec 20–26, 2026</span>
            <span className="text-[var(--muted)]">·</span>
            <span className="text-[var(--yellow)] font-semibold">Free Registration</span>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Button
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#register');
              }}
              variant="primary"
              className="h-12 px-8 text-sm font-bold shadow-none"
            >
              Register Now
            </Button>

            <a
              href="#programme"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#programme');
              }}
              className="text-xs uppercase tracking-widest font-semibold text-[var(--muted)] hover:text-white transition-colors py-2 flex items-center gap-2 group"
            >
              <span>Explore Programme</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

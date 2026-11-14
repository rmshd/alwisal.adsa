import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Button from '../components/Button';
import PetalCircle from '../art/PetalCircle';
import Checker from '../art/Checker';
import Star8 from '../art/Star8';
import { smoothScrollTo, isReducedMotion } from '../lib/motion';

const CAMP_DATE = new Date('2026-12-20T00:00:00+05:30');

function getDaysToGo() {
  const now = new Date();
  const diff = CAMP_DATE - now;
  if (diff <= 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function Hero() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const textRef = useRef(null);
  const [daysToGo, setDaysToGo] = useState(getDaysToGo());

  useEffect(() => {
    const timer = setInterval(() => setDaysToGo(getDaysToGo()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', delay: 0.15 }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.25 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-center bg-[var(--canvas)] text-[var(--ink)] font-['Poppins'] pt-[84px] pb-16 overflow-hidden"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      {/* Background subtle editorial grid accents */}
      <div className="max-w-[1400px] w-full mx-auto space-y-8">

        {/* Top Editorial Ribbon (Hamish style) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[var(--ink)] pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[var(--ink)] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest">
              ISSUE 01
            </span>
            <span className="font-['Noto_Serif_Arabic'] text-sm sm:text-base font-bold text-[var(--ink)]" dir="rtl">
              مُخَيَّمُ أَدْسَا ٢٠٢٦
            </span>
            <span className="hidden sm:inline text-xs font-semibold text-[var(--muted)]">
              · Residential Knowledge Sanctuary
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
            <span className="inline-block w-2.5 h-2.5 bg-[var(--orange)] rounded-full animate-ping" />
            <span>Dec 20 – 26, 2026</span>
            <span className="text-[var(--muted)]">|</span>
            <span className="text-[var(--orange)]">Alathurpadi</span>
          </div>
        </div>

        {/* Main 12-Column Editorial Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT: Hamish-Inspired Creative Visual Mosaic Cluster (6 cols) */}
          <div
            ref={visualRef}
            className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-12 gap-3"
          >
            {/* 1. Yellow Petal Tile (Hamish reference top-left) */}
            <div className="col-span-4 aspect-square bg-[#FED000] border-2 border-[var(--ink)] p-2 shadow-[4px_4px_0px_#0F172A] relative overflow-hidden">
              <PetalCircle
                primary="#FF5A1F"
                secondary="#D9381E"
                accent="#FED000"
                className="w-full h-full"
              />
              <span className="absolute bottom-1 left-2 text-[9px] font-black uppercase text-[var(--ink)] tracking-widest">
                ادسا
              </span>
            </div>

            {/* 2. Blue Concentric Labyrinth Square Tile */}
            <div className="col-span-4 aspect-square bg-white border-2 border-[var(--ink)] p-3 shadow-[4px_4px_0px_#0F172A] flex items-center justify-center relative">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="90" height="90" stroke="#1E40AF" strokeWidth="6" />
                <rect x="18" y="18" width="64" height="64" stroke="#1E40AF" strokeWidth="6" />
                <rect x="31" y="31" width="38" height="38" stroke="#1E40AF" strokeWidth="6" />
                <rect x="44" y="44" width="12" height="12" fill="#1E40AF" />
              </svg>
              <span className="absolute top-1 right-2 text-[8px] font-black text-[#1E40AF]">01</span>
            </div>

            {/* 3. Olive Green Pill & Arabic Badge Tile */}
            <div className="col-span-4 aspect-square bg-[#4D6A34] border-2 border-[var(--ink)] p-3 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between text-white">
              <div className="w-6 h-12 rounded-full border-2 border-white/60 bg-white/20" />
              <div className="text-right">
                <span className="font-['Noto_Serif_Arabic'] text-base font-bold block" dir="rtl">
                  العِلْمُ
                </span>
                <span className="text-[9px] uppercase font-bold tracking-wider opacity-80">
                  Hikmah
                </span>
              </div>
            </div>

            {/* 4. Centerpiece: Framed Ustad Portrait (spans 8 cols) */}
            <div className="col-span-8 aspect-[4/4.5] sm:aspect-[4/4] bg-[var(--ink)] border-2 border-[var(--ink)] shadow-[6px_6px_0px_#0F172A] relative overflow-hidden group">
              <img
                src="/images/ustad.jpg"
                alt="Dr. C.K. Abdurahman Faizy"
                className="w-full h-full object-cover object-[center_16%] filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/95 via-transparent to-transparent opacity-80" />

              {/* Scholar Title Banner */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <span className="px-2 py-0.5 bg-[var(--yellow)] text-[var(--ink)] text-[9px] font-black uppercase tracking-widest inline-block mb-1">
                  Master Teacher
                </span>
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-white leading-tight">
                  Dr. C.K. Abdurahman Faizy
                </h3>
                <p className="text-[11px] text-white/70 font-medium">
                  Chief Mentor & Guide · Alathurpadi
                </p>
              </div>
            </div>

            {/* 5. Right Column Beside Photo: Checkerboard + Star8 (4 cols) */}
            <div className="col-span-4 flex flex-col gap-3">
              {/* Checker tile */}
              <div className="aspect-square bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] p-1">
                <Checker
                  colorA="#0F172A"
                  colorB="#FED000"
                  swapA="#FF5A1F"
                  swapB="#1E40AF"
                  grid={4}
                  className="w-full h-full"
                />
              </div>

              {/* Star8 tile */}
              <div className="flex-1 min-h-[90px] bg-[#7C3AED] border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] p-3 flex items-center justify-center text-white">
                <Star8 className="w-12 h-12 text-[#FED000]" />
              </div>
            </div>

            {/* 6. Bottom Full Width Banner: Countdown Box (Inspired by reference) */}
            <div className="col-span-12 bg-[#FED000] border-2 border-[var(--ink)] shadow-[5px_5px_0px_#0F172A] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Big Bold Numeral */}
                <div className="bg-[var(--ink)] text-[var(--yellow)] px-4 py-2 border-2 border-[var(--ink)] flex flex-col items-center justify-center min-w-[68px]">
                  <span className="text-3xl sm:text-4xl font-black leading-none tabular-nums">
                    {daysToGo}
                  </span>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-white mt-0.5">
                    DAYS
                  </span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[var(--ink)] block">
                    COUNTDOWN TO CAMP 2026
                  </span>
                  <span className="text-xs font-semibold text-[var(--ink)]/75">
                    December 20–26 · Alathurpadi Juma Masjid Campus
                  </span>
                </div>
              </div>

              <Button
                href="#register"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('#register'); }}
                variant="dark"
                className="h-10 px-6 text-xs font-black tracking-widest whitespace-nowrap self-stretch sm:self-auto"
              >
                Register
              </Button>
            </div>
          </div>

          {/* RIGHT: High-Impact Editorial Statement Panel (6 cols) */}
          <div
            ref={textRef}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center gap-6 lg:pl-4"
          >
            {/* Arabic Heading (Hamish typography style) */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--canvas-subtle)] border border-[var(--ink)]/20 text-[10px] font-black uppercase tracking-widest text-[var(--orange)]">
                <span className="w-2 h-2 rounded-full bg-[var(--orange)]" />
                ADSA Residential Intensive 2026
              </div>

              <h2
                className="font-['Noto_Serif_Arabic'] text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--ink)] leading-snug pt-2"
                dir="rtl"
              >
                مُخَيَّمُ الإِبْدَاعِ وَالعِلْمِ
              </h2>
            </div>

            {/* Giant English Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-[0.9] text-[var(--ink)]">
                ADSA<br />
                <span className="text-[var(--orange)]">CAMP</span><br />
                <span className="inline-block relative">
                  2026
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[var(--yellow)] -z-10" />
                </span>
              </h1>
            </div>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg text-[var(--ink)]/80 font-medium max-w-xl leading-relaxed">
              Seven days of dawn-to-dusk scholarship, spiritual refinement, and fraternal bonding under the direct mentorship of <strong>Dr. C.K. Abdurahman Faizy</strong> at the historic Alathurpadi Dars campus.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-2.5 max-w-lg pt-1">
              <div className="bg-white border-2 border-[var(--ink)] p-3 text-center shadow-[2px_2px_0px_#0F172A]">
                <span className="text-xl sm:text-2xl font-black text-[var(--orange)] block leading-none">07</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink)] mt-1 block">Full Days</span>
              </div>
              <div className="bg-white border-2 border-[var(--ink)] p-3 text-center shadow-[2px_2px_0px_#0F172A]">
                <span className="text-xl sm:text-2xl font-black text-[#1E40AF] block leading-none">200+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink)] mt-1 block">Scholars</span>
              </div>
              <div className="bg-white border-2 border-[var(--ink)] p-3 text-center shadow-[2px_2px_0px_#0F172A]">
                <span className="text-xl sm:text-2xl font-black text-[#4D6A34] block leading-none">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink)] mt-1 block">Residential</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                href="#register"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('#register'); }}
                variant="primary"
                className="h-13 px-8 text-sm font-extrabold shadow-[4px_4px_0px_#0F172A] hover:translate-x-0.5 hover:translate-y-0.5"
                showArrow
              >
                Register For Camp
              </Button>

              <Button
                href="#programme"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('#programme'); }}
                variant="secondary"
                className="h-13 px-8 text-sm font-extrabold"
              >
                View Programme
              </Button>
            </div>

            {/* Key topics micro-bar */}
            <div className="pt-2 text-xs font-semibold text-[var(--muted)] flex items-center gap-3 flex-wrap">
              <span className="text-[var(--ink)] font-bold">Focus:</span>
              <span>Sahih al-Bukhari</span>
              <span>·</span>
              <span>Fiqh & Usul</span>
              <span>·</span>
              <span>Tazkiyah</span>
              <span>·</span>
              <span>Community Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

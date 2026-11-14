import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Button from '../components/Button';
import { smoothScrollTo, isReducedMotion } from '../lib/motion';

// Camp date: December 20, 2026
const CAMP_DATE = new Date('2026-12-20T00:00:00+05:30');

function getDaysToGo() {
  const now = new Date();
  const diff = CAMP_DATE - now;
  if (diff <= 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function Hero() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const [daysToGo, setDaysToGo] = useState(getDaysToGo());

  useEffect(() => {
    const timer = setInterval(() => setDaysToGo(getDaysToGo()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        photoRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.1 }
      );

      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.09, ease: 'power3.out', delay: 0.25 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[100svh] flex items-center bg-[var(--ink)] text-white font-['Poppins'] pt-[72px] overflow-hidden"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[calc(100svh-72px)]">

        {/* LEFT: Ustad photo — full bleed, occupies left 5 columns */}
        <div
          ref={photoRef}
          className="lg:col-span-5 order-2 lg:order-1 relative overflow-hidden bg-[var(--surface)]"
          style={{ minHeight: '480px' }}
        >
          <img
            src="/images/ustad.jpg"
            alt="Dr. C.K. Abdurahman Faizy Aripra"
            className="absolute inset-0 w-full h-full object-cover object-[center_18%] filter contrast-110"
          />
          {/* Gradient fade into background on right edge (desktop) */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[var(--ink)]" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--ink)] to-transparent" />
        </div>

        {/* RIGHT: Ink text panel — 7 columns */}
        <div
          ref={textRef}
          className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center gap-6 py-16 lg:py-0 lg:pl-14"
        >
          {/* Logo */}
          <img src="/images/logo.png" alt="ADSA Camp" className="h-14 w-auto self-start" />

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-[0.9] text-white">
              ADSA<br />
              <span className="text-[var(--orange)]">CAMP</span><br />
              <span className="text-[var(--yellow)]">2026</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[var(--muted)] font-normal max-w-md leading-relaxed">
            A seven-day residential camp for SUFFA Dars graduates — immersing in sacred knowledge and spiritual brotherhood.
          </p>

          {/* Date strip */}
          <div className="inline-flex items-center gap-3 self-start px-4 py-2 bg-[var(--surface)] border border-white/10 text-xs font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[var(--orange)] animate-pulse" />
            <span className="text-white uppercase">Dec 20 – 26, 2026</span>
            <span className="text-[var(--muted)]">·</span>
            <span className="text-[var(--yellow)] uppercase">Alathurpadi</span>
          </div>

          {/* Days to Go badge — inspired by reference */}
          {daysToGo > 0 && (
            <div className="inline-flex items-center gap-0 self-start border border-[var(--orange)]/60">
              {/* Big number block */}
              <div className="bg-[var(--orange)] text-[var(--ink)] px-5 py-3 flex flex-col items-center justify-center min-w-[72px]">
                <span className="text-4xl font-black leading-none tabular-nums">{daysToGo}</span>
              </div>
              {/* Label block */}
              <div className="bg-[var(--surface)] px-4 py-3 border-l border-[var(--orange)]/30 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--orange)] block">Days</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white block">To Go</span>
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="#register"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#register'); }}
              variant="primary"
              className="h-12 px-10 text-sm font-bold"
            >
              Register
            </Button>

            <a
              href="#programme"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#programme'); }}
              className="text-xs uppercase tracking-widest font-semibold text-[var(--muted)] hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span>Programme</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

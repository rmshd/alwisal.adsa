import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Button from '../components/Button';
import { CONFIG } from '../config';
import { isReducedMotion, smoothScrollTo } from '../lib/motion';
import { TornPaperTicket, ReferenceStyleEventHeader } from '../components/TornShapes';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const visualRef = useRef(null);

  const [daysToGo, setDaysToGo] = useState(36);

  useEffect(() => {
    const campDate = new Date(CONFIG.CAMP_START_DATE).getTime();
    const now = new Date().getTime();
    const diff = campDate - now;

    if (diff > 0) {
      setDaysToGo(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    } else {
      setDaysToGo(0);
    }
  }, []);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
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
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[100svh] flex items-center bg-[#07090C] overflow-hidden pt-[92px] pb-16 lg:pb-0"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      {/* Misty Dark Forest & Mosque Courtyard Backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/masjid-real.jpg"
          alt="Alathurpadi Courtyard Landscape"
          className="w-full h-full object-cover filter brightness-[0.22] contrast-125 scale-105"
        />
        {/* Dark misty overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-[#07090C]/80 to-[#07090C]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,138,74,0.06)_0%,transparent_70%)]" />
      </div>

      {/* 12-Column Responsive Layout */}
      <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto">
        {/* LEFT 7 COLS: Typography + Reference Date Strip + Buttons + Torn Ticket */}
        <div
          ref={leftColRef}
          className="lg:col-span-7 flex flex-col justify-center gap-6 min-w-0"
        >
          {/* Top Arabic Invocation & Network Tag */}
          <div className="flex flex-wrap items-center gap-3 select-none">
            <span className="font-arabic text-xl sm:text-2xl text-[var(--gold)] tracking-wide">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md text-xs font-sans text-white">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
              <span className="font-bold tracking-wider uppercase text-[10px]">
                SUFFA DARS NETWORK
              </span>
            </div>
          </div>

          {/* Monumental Poppins Heading */}
          <h1 className="font-sans font-extrabold text-[clamp(2.4rem,4.8vw,5.2rem)] leading-[1.08] text-white tracking-tight [text-wrap:balance]">
            7 DAYS OF SACRED{' '}
            <span className="text-[#FFBA08] block">
              SANCTUARY & HADITH
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
            The annual residential scholar retreat at the historic Alathurpadi Juma Masjid Campus.
            Daily Sahih al-Bukhari transmission, fiqh discourse, and spiritual brotherhood under <span className="text-white font-bold">Dr. C.K. Abdurahman Faizy Aripra</span>.
          </p>

          {/* THE REFERENCE COMPONENT BLOCK: Event Header + Torn Yellow Ticket */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2 pb-2 p-5 sm:p-6 rounded-[24px] bg-[#0E1219]/80 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            {/* Left: Vertical Line + Next Edition + Red Ripped Date + Location */}
            <ReferenceStyleEventHeader
              editionLabel="Next Edition:"
              dateText={CONFIG.CAMP_DATES_LABEL}
              locationText="Alathurpadi, Melmuri (Malappuram)"
            />

            {/* Right: The Yellow Torn-Paper Ticket with Giant Days */}
            <div className="self-center sm:self-auto shrink-0">
              <TornPaperTicket days={daysToGo} label="DAYS TO GO" />
            </div>
          </div>

          {/* THE TWO REFERENCE BUTTONS: Solid Red & Solid Green */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#register');
              }}
              variant="red"
              className="text-sm px-8 h-[52px]"
            >
              Book Your Seat (Free)
            </Button>

            <Button
              href="#daily"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#daily');
              }}
              variant="green"
              className="text-sm px-8 h-[52px]"
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Quick Perks Line */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#10B981]" /> 30 Dars Consortium
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#10B981]" /> Morning Bukhari Sabaq
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#10B981]" /> Free Boarding & Food
            </span>
          </div>
        </div>

        {/* RIGHT 5 COLS: Real Photograph of Ustad & Mosque Pedestal */}
        <div
          ref={visualRef}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end min-w-0"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] flex flex-col gap-4">
            {/* Real Ustad Portrait Showcase */}
            <div className="relative rounded-[28px] overflow-hidden border border-amber-400/30 bg-[#12151D] shadow-[0_25px_60px_rgba(0,0,0,0.85)] aspect-[4/5] group">
              <img
                src="/images/ustad-real.jpg"
                alt="Dr. C.K. Abdurahman Faizy Aripra in Majlis"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-[#07090C]/50 to-transparent" />

              {/* Scholar Pedestal Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-[18px] bg-[#07090C]/85 backdrop-blur-xl border border-white/15">
                <span className="font-arabic text-xs text-[var(--gold)] block">
                  فضيلة الشيخ الدكتور عبد الرحمن الفايزي العريبراوي
                </span>
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-white mt-0.5">
                  Dr. C.K. Abdurahman Faizy Aripra
                </h3>
                <span className="text-[11px] font-sans font-bold text-[var(--sky)] uppercase tracking-wider block mt-0.5">
                  Chief Mudarris & Member, Samastha Mushawara
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

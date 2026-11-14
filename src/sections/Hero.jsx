import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Button from '../components/Button';
import { CONFIG } from '../config';
import { isReducedMotion, smoothScrollTo } from '../lib/motion';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const visualRef = useRef(null);

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
      className="relative w-full min-h-[100svh] flex items-center bg-[#08090C] overflow-hidden pt-[92px] pb-14 lg:pb-0"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-1/4 left-1/10 w-[550px] h-[550px] rounded-full bg-[var(--gold)]/10 blur-[150px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-[600px] h-[600px] rounded-full bg-[var(--sky)]/10 blur-[160px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,177,91,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* 12-Column Responsive Editorial Grid */}
      <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto">
        {/* LEFT 7 COLS: Typography, Event Badges, Countdown & CTAs */}
        <div
          ref={leftColRef}
          className="lg:col-span-7 flex flex-col justify-center gap-5 sm:gap-6 min-w-0"
        >
          {/* Top Arabic Invocation & Category Badge */}
          <div className="flex flex-wrap items-center gap-3 select-none">
            <span className="font-arabic text-xl sm:text-2xl text-[var(--gold)] tracking-wide">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-sans text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
              <span className="font-bold tracking-wider uppercase text-[10px]">
                SUFFA DARS NETWORK
              </span>
            </div>

            <div className="bg-gradient-to-r from-[#DFB15B] to-[#A37F30] text-[#08090C] px-3.5 py-1 rounded-full font-sans font-extrabold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(223,177,91,0.3)]">
              {CONFIG.CAMP_DATES_LABEL}
            </div>
          </div>

          {/* Monumental English Headline in Poppins */}
          <h1 className="heading-display text-white tracking-tight [text-wrap:balance]">
            7 DAYS OF SACRED{' '}
            <span className="gold-gradient-text block">
              SANCTUARY & HADITH
            </span>
          </h1>

          {/* Subtitle & Core Context */}
          <div className="flex flex-col gap-2 max-w-2xl">
            <p className="font-sans text-[clamp(1.05rem,1.35vw,1.25rem)] text-[var(--muted)] leading-relaxed [text-wrap:balance]">
              The Annual Residential Scholar Camp at the historic Alathurpadi Juma Masjid Campus.
              Experience direct daily <span className="text-white font-semibold">Sahih al-Bukhari Sabaq</span> and spiritual companionship under <span className="text-[var(--gold-light)] font-semibold">Dr. C.K. Abdurahman Faizy Aripra</span>.
            </p>
            <p className="font-malayalam text-xs sm:text-sm text-white/60 leading-normal">
              ആലത്തൂർപ്പടി ദർസ് സ്റ്റുഡന്റ്സ് അസോസിയേഷൻ (ADSA) സുഫാ ദർസ് ശൃംഖലയിലെ വിദ്യാർത്ഥികൾക്കായി ഒരുക്കുന്ന വാർഷിക ക്യാമ്പ്.
            </p>
          </div>

          {/* Live Spiritual Countdown Tiles in Poppins */}
          <div className="pt-1 pb-1">
            <div className="text-[11px] font-sans font-bold tracking-widest text-white/50 uppercase mb-2.5">
              CAMP COMMENCES IN
            </div>
            <div className="flex items-center gap-3">
              {[
                { val: timeLeft.days, label: 'DAYS' },
                { val: timeLeft.hours, label: 'HOURS' },
                { val: timeLeft.mins, label: 'MINUTES' },
                { val: timeLeft.secs, label: 'SECONDS' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center min-w-[68px] sm:min-w-[78px] h-[68px] sm:h-[76px] rounded-[18px] bg-white/[0.035] border border-white/[0.08] backdrop-blur-xl shadow-lg"
                >
                  <span className="font-sans font-extrabold text-2xl sm:text-3xl text-white leading-none">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[9px] font-bold text-[var(--gold)] tracking-widest uppercase mt-1">
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
              className="text-sm px-8 h-[54px] uppercase tracking-wider font-extrabold"
            >
              Register Free Entry
            </Button>

            <Button
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#about');
              }}
              variant="secondary"
              className="text-sm px-7 h-[54px] font-bold tracking-wide"
            >
              Explore Campus & Details ↓
            </Button>
          </div>

          {/* Highlights Micro-bar */}
          <div className="flex flex-wrap items-center gap-5 pt-1 text-xs font-sans text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[var(--gold)]" /> 30 Dars Network
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[var(--gold)]" /> Daily Bukhari Sabaq
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[var(--gold)]" /> Free Boarding & Food
            </span>
          </div>
        </div>

        {/* RIGHT 5 COLS: Real Photography Showcase (Ustad & Mosque) */}
        <div
          ref={visualRef}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end min-w-0"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] flex flex-col gap-4">
            {/* Mosque Backdrop Card */}
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[16/10] bg-[#12151D] group">
              <img
                src="/images/masjid-real.jpg"
                alt="Alathurpadi Juma Masjid Campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#08090C]/80 backdrop-blur-md border border-white/15 text-[11px] font-sans font-bold text-white flex items-center gap-1.5">
                <MapPin size={12} className="text-[var(--gold)]" />
                <span>Alathurpadi Juma Masjid Campus</span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-xs font-sans text-white/80">
                Historic seat of scholarship & serene courtyard
              </div>
            </div>

            {/* Ustad Featured Scholar Card with Real Photograph */}
            <div className="relative -mt-10 sm:-mt-14 z-20 rounded-[28px] overflow-hidden border border-[var(--gold)]/35 bg-[#12151D]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
              {/* Ustad Real Photo Thumbnail */}
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-md">
                <img
                  src="/images/ustad-real.jpg"
                  alt="Dr. C.K. Abdurahman Faizy Aripra"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Scholar Designation */}
              <div className="flex flex-col min-w-0">
                <span className="font-arabic text-xs sm:text-sm text-[var(--gold)] line-clamp-1">
                  فضيلة الشيخ الدكتور عبد الرحمن الفايزي
                </span>
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-white leading-snug mt-0.5">
                  Dr. C.K. Abdurahman Faizy Aripra
                </h3>
                <span className="text-[11px] font-sans font-semibold text-[var(--sky)] uppercase tracking-wider mt-1">
                  Chief Mudarris & Mushawara Member
                </span>
                <span className="font-malayalam text-[11px] text-[var(--muted)] mt-0.5 line-clamp-1">
                  കേന്ദ്ര മുശാവറ അംഗം, സമസ്ത
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

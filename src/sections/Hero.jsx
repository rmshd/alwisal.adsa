import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Bell,
  Share2,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import CalendarModal from '../components/CalendarModal';
import ReminderModal from '../components/ReminderModal';
import ShareModal from '../components/ShareModal';
import InstallAppPill from '../components/InstallAppPill';
import PatternBg from '../art/PatternBg';
import { useReminders } from '../context/ReminderContext';
import { CAMP } from '../config';

export default function Hero() {
  const { openReminderModal, activeCount } = useReminders();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Live countdown to Dec 24, 2026 09:00 AM IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date('2026-12-24T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % 1000) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToRegister = (e) => {
    e.preventDefault();
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.hash = '#register';
  };

  return (
    <section
      id="home"
      aria-label="Camp Hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 pb-6 md:pt-28 md:pb-6 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[#070C12] text-white font-['Poppins'] select-none"
    >
      {/* 1. ATMOSPHERIC LUXURY BACKDROP */}
      {/* Islamic Star Lattice Watermark */}
      <PatternBg variant="dark" fadeMask={true} className="opacity-40" />

      {/* Atmospheric Ambient Spotlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FDB913]/15 via-[#F28A2E]/10 to-transparent rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-[#1F7F92]/20 via-[#2B45D9]/10 to-transparent rounded-full blur-[130px]"
      />

      {/* Decorative Geometric Wireframe Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.035]"
      >
        <div className="w-[850px] h-[850px] rounded-full border border-[#FDB913]" />
        <div className="w-[600px] h-[600px] rounded-full border border-dashed border-[#FDB913] absolute" />
      </div>

      {/* 2. MAIN POSTER STAGE (ASYMMETRIC BESPOKE 2-COLUMN GRID) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: Grand Typographic Statement (7 Cols) */}
        <div className="lg:col-span-7 text-left space-y-4">
          {/* Top Curated Ribbon */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121E2D]/90 border border-[#FDB913]/35 shadow-md shadow-black/40 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDB913] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FDB913]"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FDB913]">
              ADSA Presents · Annual Residential Intensive
            </span>
            <span className="text-[10px] text-neutral-400 hidden sm:inline">|</span>
            <span className="text-[10px] font-semibold text-neutral-300 hidden sm:inline tracking-wider">
              2026 EDITION
            </span>
          </div>

          {/* Majestic Hybrid Typographic Title with Watermarked Arabic */}
          <div className="relative">
            {/* Ambient Watermarked Arabic Calligraphy Behind */}
            <span
              className="absolute -top-10 -left-4 font-arabic text-8xl sm:text-9xl md:text-[140px] font-black text-white/[0.04] pointer-events-none select-none leading-none z-0"
              dir="rtl"
            >
              الوصال
            </span>

            {/* Foreground Title Lockup */}
            <div className="relative z-10 space-y-1">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] drop-shadow-2xl">
                  AL-WISAL
                </h1>
                <span className="px-3 py-1 rounded-xl bg-[#FDB913] text-[#070C12] font-black text-xl sm:text-2xl md:text-3xl tracking-tight shadow-md">
                  ’26
                </span>
                <span className="font-arabic text-3xl sm:text-4xl text-[#FDB913] font-bold self-center ml-1 drop-shadow-md">
                  الوصال
                </span>
              </div>

              {/* High-Impact Tagline Banner */}
              <div className="pt-2 flex items-center gap-3">
                <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-[#FDB913] to-transparent" />
                <span className="font-black text-lg sm:text-2xl md:text-3xl tracking-[0.25em] text-[#FDB913] uppercase drop-shadow-[0_2px_12px_rgba(253,185,19,0.35)]">
                  TOWARDS THE BELOVED
                </span>
              </div>
            </div>
          </div>

          {/* Curated Editorial Narrative */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
            An intentional seven-day dawn sanctuary uniting graduating scholars of the{' '}
            <strong className="text-white font-semibold">SUFFA Dars</strong> fraternity under the mentorship of{' '}
            <strong className="text-[#FDB913] font-semibold">Dr. C.K. Abdurahman Faizy</strong> at the historic Alathurpadi Juma Masjid campus.
          </p>

          {/* Badges Strip: Date & Venue */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-neutral-200">
              <Calendar className="w-3.5 h-3.5 text-[#FDB913]" />
              <span className="font-semibold">December 24–30, 2026</span>
              <span className="text-[10px] text-[#070C12] font-bold px-1.5 py-0.2 rounded bg-[#FDB913]">
                7 Days
              </span>
            </div>

            <a
              href={CAMP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#FDB913] text-neutral-200 hover:text-white transition-all group"
              title="Open Campus Location in Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-400 group-hover:text-[#FDB913] transition-colors" />
              <span>Alathurpadi Dars Campus, Melmuri</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive Sanctuary Console (5 Cols) */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#121E2D]/95 via-[#0E1724]/90 to-[#0A1018]/95 border-2 border-[#FDB913]/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl space-y-5">
            {/* Console Header: Emblem + Edition Lockup */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                {/* Radiant Emblem Pod with favicon.png */}
                <div className="relative w-12 h-12 rounded-2xl p-2 bg-[#070C12] border border-[#FDB913]/50 shadow-md shadow-[#FDB913]/20 flex items-center justify-center shrink-0">
                  <img
                    src="/images/favicon.png"
                    alt="Al-Wisal Emblem"
                    className="w-full h-full object-contain drop-shadow"
                  />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white tracking-wide leading-tight">
                    DELEGATE CONSOLE
                  </h3>
                  <span className="text-[10px] text-neutral-400 font-medium">
                    100 Residential Scholarships
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#FDB913] bg-[#FDB913]/10 border border-[#FDB913]/30 px-2 py-0.5 rounded-md">
                  LIVE ADMISSIONS
                </span>
              </div>
            </div>

            {/* Precision Live Countdown Clock */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                <span className="flex items-center gap-1.5 text-[#FDB913]">
                  <Clock className="w-3 h-3" />
                  <span>Days to Fajr Assembly</span>
                </span>
                <span className="text-neutral-500 font-mono">24 DEC 2026 · 09:00 IST</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 sm:p-2.5 rounded-2xl bg-black/50 border border-white/10">
                  <span className="font-black text-2xl sm:text-3xl text-[#FDB913] block leading-none font-mono">
                    {timeLeft.days}
                  </span>
                  <span className="text-[9px] font-bold uppercase text-neutral-400 mt-1 block">Days</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-2xl bg-black/50 border border-white/10">
                  <span className="font-black text-2xl sm:text-3xl text-white block leading-none font-mono">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[9px] font-bold uppercase text-neutral-400 mt-1 block">Hours</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-2xl bg-black/50 border border-white/10">
                  <span className="font-black text-2xl sm:text-3xl text-white block leading-none font-mono">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[9px] font-bold uppercase text-neutral-400 mt-1 block">Mins</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-2xl bg-black/50 border border-white/10">
                  <span className="font-black text-2xl sm:text-3xl text-white block leading-none font-mono">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[9px] font-bold uppercase text-neutral-400 mt-1 block">Secs</span>
                </div>
              </div>
            </div>

            {/* Direct Action Pod */}
            <div className="space-y-2.5 pt-1">
              {/* Primary High-Impact CTA Button */}
              <a
                href="#register"
                onClick={scrollToRegister}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#070C12] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FDB913]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Register for Sanctuary</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Utility Tools Strip */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setIsCalendarOpen(true)}
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-neutral-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  title="Add to Google or Outlook Calendar"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Calendar</span>
                </button>

                <button
                  onClick={() => openReminderModal()}
                  className="relative py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-neutral-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  title="Set Multi-Channel Reminder"
                >
                  <Bell className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Reminder</span>
                  {activeCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-[#FDB913] text-[#070C12] font-black text-[9px] flex items-center justify-center ml-0.5">
                      {activeCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setIsShareOpen(true)}
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-neutral-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  title="Share Camp Details"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Console Footer Guarantee */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FDB913]" />
                <span>ADSA Verified Fellowship</span>
              </span>
              <span>Complimentary Boarding</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUBTLE BOTTOM EDITORIAL DOCK */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-4 border-t border-white/10 hidden sm:flex items-center justify-between text-[11px] text-neutral-400">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDB913]" />
            <strong className="text-neutral-200 font-semibold">Sahih al-Bukhari</strong> Dawn Sabaq
          </span>
          <span className="hidden md:inline text-neutral-600">·</span>
          <span className="hidden md:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <strong className="text-neutral-200 font-semibold">39+ SUFFA Dars</strong> Network
          </span>
          <span className="hidden lg:inline text-neutral-600">·</span>
          <span className="hidden lg:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDB913]" />
            <strong className="text-neutral-200 font-semibold">Dr. C.K. Abdurahman Faizy</strong> Mentorship
          </span>
        </div>

        <div className="text-neutral-500 font-mono text-[10px]">
          ALATHURPADI · KERALA
        </div>
      </div>

      {/* MODALS & INSTALL PILL */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <ReminderModal />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <InstallAppPill />
    </section>
  );
}

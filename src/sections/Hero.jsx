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
      className="relative min-h-[96vh] pt-28 pb-20 md:pt-36 md:pb-24 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#070C12] text-white font-['Poppins']"
    >
      {/* BACKGROUND ARCHITECTURAL ATMOSPHERE */}
      {/* 1. Subtle Geometric Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#FDB913_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035]"
      />

      {/* 2. Soft Ambient Luminous Rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] md:w-[1050px] md:h-[1050px] rounded-full border border-[#FDB913]/10 blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] md:w-[720px] md:h-[720px] rounded-full border border-teal-500/10 blur-[2px]"
      />

      {/* 3. Golden Overhead Spotlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-gradient-to-b from-[#FDB913]/15 to-transparent rounded-full blur-[120px]"
      />

      {/* 4. Decorative Arch Lines (Subtle SVG) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.06] stroke-[#FDB913]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50%" cy="45%" r="300" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="50%" cy="45%" r="420" strokeWidth="1" />
        <circle cx="50%" cy="45%" r="540" strokeWidth="1" strokeDasharray="2 8" />
      </svg>

      {/* TOP ARCHITECTURAL PILL */}
      <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121E2D]/85 border border-[#FDB913]/35 text-xs font-semibold text-[#FDB913] mb-6 shadow-xl shadow-black/50 backdrop-blur-md">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDB913] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FDB913]"></span>
        </span>
        <span className="tracking-widest uppercase text-[11px]">
          Alathurpadi Dars Students Association (ADSA) Presents
        </span>
      </div>

      {/* HERO CENTERPIECE: EMBLEM + TITLES */}
      <div className="relative z-10 space-y-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Prominent Emblem Frame with favicon.png */}
        <div className="relative group my-1">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#FDB913]/30 via-teal-500/20 to-[#FDB913]/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

          {/* Medallion box */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-[28px] p-4 bg-gradient-to-b from-[#182638] to-[#0A111A] border-2 border-[#FDB913]/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center justify-center backdrop-blur-xl group-hover:scale-105 transition-all duration-300">
            {/* Elegant corner brackets */}
            <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#FDB913]/70" />
            <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#FDB913]/70" />
            <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#FDB913]/70" />
            <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#FDB913]/70" />

            <img
              src="/images/favicon.png"
              alt="Al-Wisal '26 Emblem"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
            />
          </div>

          {/* Floating year tag */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FDB913] text-[#070C12] font-black text-[10px] tracking-widest uppercase shadow-md whitespace-nowrap">
            EDITION 2026
          </div>
        </div>

        {/* English Title & Arabic Wordmark */}
        <div className="space-y-1 pt-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-2xl">
            AL-WISAL ’26
          </h1>
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#FDB913] font-bold tracking-wider leading-none drop-shadow-md">
            الوصال
          </p>
        </div>

        {/* Statement Banner: TOWARDS THE BELOVED */}
        <div className="space-y-2 pt-1 max-w-2xl">
          <div className="inline-block px-5 sm:px-8 py-2 rounded-2xl bg-gradient-to-r from-[#FDB913]/10 via-[#FDB913]/20 to-[#FDB913]/10 border border-[#FDB913]/30 shadow-inner">
            <span className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] text-[#FDB913] uppercase drop-shadow-[0_2px_15px_rgba(253,185,19,0.4)]">
              TOWARDS THE BELOVED
            </span>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-normal text-neutral-300 max-w-xl mx-auto italic">
            &ldquo;A Transition &amp; Leadership Residential Sanctuary · Rooted in Ilm&rdquo;
          </p>
        </div>
      </div>

      {/* HIGH-IMPACT COMMAND DECK (3-COLUMN RESPONSIVE CONSOLE) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 text-left">
        {/* CARD 1: Event Sanctuary Details (4 cols) */}
        <div className="md:col-span-4 p-5 sm:p-6 rounded-3xl bg-[#121E2D]/80 border border-[#FDB913]/30 shadow-2xl backdrop-blur-md flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDB913]">
                Sanctuary Schedule
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FDB913]/20 text-[#FDB913]">
                7 Days
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#FDB913] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">December 24–30, 2026</span>
                <span className="text-[11px] text-neutral-400">Dawn-to-Dusk Intensive</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <a
                  href={CAMP.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-[#FDB913] transition-colors flex items-center gap-1 group"
                >
                  <span>Alathurpadi Dars Campus</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                </a>
                <span className="text-[11px] text-neutral-400">Melmuri, Malappuram, Kerala</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FDB913]" />
            <span>Capacity: 100 Selected SUFFA Scholars</span>
          </div>
        </div>

        {/* CARD 2: Live Precision Countdown Clock (4 cols) */}
        <div className="md:col-span-4 p-5 sm:p-6 rounded-3xl bg-[#121E2D]/80 border border-[#FDB913]/30 shadow-2xl backdrop-blur-md flex flex-col justify-between text-center space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400 border-b border-white/10 pb-2.5">
            <Clock className="w-3.5 h-3.5 text-[#FDB913]" />
            <span>Camp Countdown</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
              <span className="font-black text-2xl sm:text-3xl text-[#FDB913] leading-none">
                {timeLeft.days}
              </span>
              <span className="text-[9px] uppercase font-semibold text-neutral-400 mt-1">Days</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
              <span className="font-black text-2xl sm:text-3xl text-[#FDB913] leading-none">
                {timeLeft.hours}
              </span>
              <span className="text-[9px] uppercase font-semibold text-neutral-400 mt-1">Hours</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
              <span className="font-black text-2xl sm:text-3xl text-[#FDB913] leading-none">
                {timeLeft.minutes}
              </span>
              <span className="text-[9px] uppercase font-semibold text-neutral-400 mt-1">Mins</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
              <span className="font-black text-2xl sm:text-3xl text-[#FDB913] leading-none">
                {timeLeft.seconds}
              </span>
              <span className="text-[9px] uppercase font-semibold text-neutral-400 mt-1">Secs</span>
            </div>
          </div>

          <div className="text-[10px] text-neutral-400 font-medium pt-1">
            Opening Assembly: 24 Dec 2026, 09:00 AM IST
          </div>
        </div>

        {/* CARD 3: Action Launchpad (4 cols) */}
        <div className="md:col-span-4 p-5 sm:p-6 rounded-3xl bg-[#121E2D]/80 border border-[#FDB913]/30 shadow-2xl backdrop-blur-md flex flex-col justify-between space-y-3">
          <div className="border-b border-white/10 pb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDB913]">
              Delegate Actions
            </span>
          </div>

          {/* Primary CTA */}
          <a
            href="#register"
            onClick={scrollToRegister}
            className="w-full py-3.5 px-5 rounded-2xl bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#070C12] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FDB913]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Action Grid */}
          <div className="grid grid-cols-3 gap-1.5">
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-medium text-neutral-300 hover:text-white flex flex-col items-center justify-center gap-1 transition-colors"
              title="Add to Calendar"
            >
              <Calendar className="w-3.5 h-3.5 text-[#FDB913]" />
              <span>Calendar</span>
            </button>

            <button
              onClick={() => openReminderModal()}
              className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-medium text-neutral-300 hover:text-white flex flex-col items-center justify-center gap-1 transition-colors"
              title="Set Reminder"
            >
              <Bell className="w-3.5 h-3.5 text-[#FDB913]" />
              <span>Reminder</span>
              {activeCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#FDB913] text-[#070C12] font-black text-[8px] flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsShareOpen(true)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-medium text-neutral-300 hover:text-white flex flex-col items-center justify-center gap-1 transition-colors"
              title="Share Camp"
            >
              <Share2 className="w-3.5 h-3.5 text-[#FDB913]" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* HALLMARK STAT STRIP */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDB913] block">
            01. Dawn Sabaq
          </span>
          <span className="text-xs text-neutral-300 font-semibold block mt-0.5">
            Sahih al-Bukhari Daily
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDB913] block">
            02. Chief Mentor
          </span>
          <span className="text-xs text-neutral-300 font-semibold block mt-0.5">
            Dr. C.K. Abdurahman Faizy
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDB913] block">
            03. Network
          </span>
          <span className="text-xs text-neutral-300 font-semibold block mt-0.5">
            39+ SUFFA Dars Chapters
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDB913] block">
            04. Sanctuary
          </span>
          <span className="text-xs text-neutral-300 font-semibold block mt-0.5">
            100% Residential Boarding
          </span>
        </div>
      </div>

      {/* MODALS */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <ReminderModal />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <InstallAppPill />
    </section>
  );
}

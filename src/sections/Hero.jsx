import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Bell, Share2, Sparkles } from 'lucide-react';
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
      className="relative min-h-[96vh] pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#080E16] text-white"
    >
      {/* Background Atmosphere: Subtle geometric grid & glowing ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#FDB913_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[980px] md:h-[980px] rounded-full border border-[#FDB913]/10 blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] md:w-[640px] md:h-[640px] rounded-full border border-teal-500/15 blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FDB913]/15 rounded-full blur-[120px]"
      />

      {/* Top Presenter Pill */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121E2D]/90 border border-[#FDB913]/35 text-xs font-semibold text-[#FDB913] mb-6 shadow-lg shadow-black/40 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#FDB913] animate-pulse" />
        <span className="tracking-wide">Alathurpadi Dars Students Association (ADSA) Presents</span>
      </div>

      {/* Hero Core: Prominent Favicon Emblem + Title + Towards the Beloved */}
      <div className="relative z-10 space-y-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Prominent Large Emblem using favicon.png */}
        <div className="relative group my-2">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-3xl p-3.5 sm:p-4 bg-gradient-to-b from-[#121E2D] to-[#0B1520] border-2 border-[#FDB913]/40 shadow-[0_0_55px_rgba(253,185,19,0.35)] flex items-center justify-center backdrop-blur-md group-hover:border-[#FDB913] group-hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl bg-[#FDB913]/10 blur-xl pointer-events-none" />
            <img
              src="/images/favicon.png"
              alt="Al-Wisal 2026 Emblem"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
            />
          </div>
          {/* Subtle decorative bottom badge */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#FDB913] text-[#0B1520] font-bold text-[10px] tracking-widest uppercase shadow-sm whitespace-nowrap">
            2026
          </div>
        </div>

        {/* English Title & Arabic Calligraphic Subtitle */}
        <div className="space-y-1.5 pt-2">
          <h1 className="font-['Poppins'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-xl">
            AL-WISAL ’26
          </h1>
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#FDB913] font-bold tracking-wider leading-tight">
            الوصال
          </p>
        </div>

        {/* Prominent "TOWARDS THE BELOVED" */}
        <div className="space-y-2 pt-1">
          <p className="font-['Poppins'] font-extrabold text-lg sm:text-2xl md:text-3xl tracking-[0.25em] text-[#FDB913] uppercase drop-shadow-[0_2px_10px_rgba(253,185,19,0.4)]">
            TOWARDS THE BELOVED
          </p>
          <p className="text-xs sm:text-sm md:text-base font-medium text-neutral-300 max-w-xl mx-auto italic font-['Poppins']">
            &ldquo;A Transition &amp; Leadership Residential Camp · Rooted in Ilm&rdquo;
          </p>
        </div>
      </div>

      {/* Event Meta Badges: Date & Venue */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 mb-8 text-xs sm:text-sm font-medium">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#121E2D]/85 border border-[#FDB913]/30 text-neutral-200 shadow-lg backdrop-blur-md">
          <Calendar className="w-4 h-4 text-[#FDB913]" />
          <span>December 24–30, 2026</span>
          <span className="text-[10px] text-[#0B1520] font-bold px-1.5 py-0.5 rounded bg-[#FDB913]">
            7 Days
          </span>
        </div>

        <a
          href={CAMP.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#121E2D]/85 border border-teal-500/40 hover:border-[#FDB913] text-neutral-200 shadow-lg backdrop-blur-md hover:scale-105 transition-all duration-200 group"
          title="Open Campus Location in Google Maps"
        >
          <MapPin className="w-4 h-4 text-teal-400 group-hover:text-[#FDB913] transition-colors" />
          <span>Alathurpadi Dars Campus, Melmuri, Malappuram</span>
        </a>
      </div>

      {/* Countdown Timer (4 Modern Glass Boxes) */}
      <div className="relative z-10 mb-8 p-4 sm:p-5 rounded-3xl bg-[#121E2D]/85 border border-[#FDB913]/35 shadow-2xl max-w-md w-full backdrop-blur-md">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FDB913] animate-ping" />
          <span>Camp Countdown</span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
          <div className="p-2 sm:p-3 rounded-2xl bg-black/30 border border-white/10 flex flex-col">
            <span className="font-['Poppins'] font-black text-2xl sm:text-3xl text-[#FDB913]">
              {timeLeft.days}
            </span>
            <span className="text-[10px] text-neutral-400 uppercase mt-0.5 font-medium">Days</span>
          </div>
          <div className="p-2 sm:p-3 rounded-2xl bg-black/30 border border-white/10 flex flex-col">
            <span className="font-['Poppins'] font-black text-2xl sm:text-3xl text-[#FDB913]">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] text-neutral-400 uppercase mt-0.5 font-medium">Hours</span>
          </div>
          <div className="p-2 sm:p-3 rounded-2xl bg-black/30 border border-white/10 flex flex-col">
            <span className="font-['Poppins'] font-black text-2xl sm:text-3xl text-[#FDB913]">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] text-neutral-400 uppercase mt-0.5 font-medium">Mins</span>
          </div>
          <div className="p-2 sm:p-3 rounded-2xl bg-black/30 border border-white/10 flex flex-col">
            <span className="font-['Poppins'] font-black text-2xl sm:text-3xl text-[#FDB913]">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] text-neutral-400 uppercase mt-0.5 font-medium">Secs</span>
          </div>
        </div>
      </div>

      {/* 4 Action Buttons: Register Now (gold), Add to Calendar, Set Reminder, Share Camp */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-2">
        {/* 1. Register CTA */}
        <a
          href="#register"
          onClick={scrollToRegister}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-bold text-sm md:text-base shadow-xl shadow-[#FDB913]/25 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>Register Now</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* 2. Add to Calendar */}
        <button
          onClick={() => setIsCalendarOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#121E2D]/85 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs md:text-sm hover:bg-white/10 transition-all duration-200 shadow-md backdrop-blur-md"
          title="Add Al-Wisal '26 to Google, Outlook, or Apple Calendar"
        >
          <Calendar className="w-4 h-4 text-[#FDB913]" />
          <span>Add to Calendar</span>
        </button>

        {/* 3. Set Reminder */}
        <button
          onClick={() => openReminderModal()}
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#121E2D]/85 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs md:text-sm hover:bg-white/10 transition-all duration-200 shadow-md backdrop-blur-md"
          title="Set reminder for camp"
        >
          <Bell className="w-4 h-4 text-[#FDB913]" />
          <span>Set Reminder</span>
          {activeCount > 0 && (
            <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-[#FDB913] text-[#0B1520]">
              {activeCount}
            </span>
          )}
        </button>

        {/* 4. Share Camp */}
        <button
          onClick={() => setIsShareOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#121E2D]/85 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs md:text-sm hover:bg-white/10 transition-all duration-200 shadow-md backdrop-blur-md"
          title="Share camp with fellow students"
        >
          <Share2 className="w-4 h-4 text-[#FDB913]" />
          <span>Share Camp</span>
        </button>
      </div>

      {/* Target Audience Note */}
      <p className="relative z-10 mt-8 text-xs text-neutral-400 max-w-lg leading-relaxed">
        Specially curated for graduating students from <strong>SUFFA Dars</strong> transitioning into university degrees and professional academia in 2026–2027.
      </p>

      {/* Modals & Bottom Launcher */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <ReminderModal />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <InstallAppPill />
    </section>
  );
}

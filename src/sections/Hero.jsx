import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Bell, Share2 } from 'lucide-react';
import CalendarModal from '../components/CalendarModal';
import ReminderModal from '../components/ReminderModal';
import ShareModal from '../components/ShareModal';
import InstallAppPill from '../components/InstallAppPill';
import { useReminders } from '../context/ReminderContext';
import { useI18n } from '../context/I18nContext';
import { CAMP } from '../config';

export default function Hero() {
  const { openReminderModal, activeCount } = useReminders();
  const { t, lang, isRTL } = useI18n();

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
      className="relative min-h-[95vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#0B1520] text-white"
    >
      {/* Concentric Ambient Rings Glow Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] md:w-[1000px] md:h-[1000px] rounded-full border border-[#FDB913]/10 blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] md:w-[680px] md:h-[680px] rounded-full border border-teal-500/15 blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FDB913]/10 rounded-full blur-[100px]"
      />

      {/* Top Presenter Badge with glowing amber dot */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121E2D]/80 border border-[#FDB913]/30 text-xs font-semibold text-[#FDB913] mb-6 shadow-sm backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#FDB913] animate-pulse" />
        <span className="tracking-wide">Alathurpadi Dars Students Association (ADSA) Presents</span>
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 space-y-4 max-w-4xl mx-auto">
        {/* Arabic Calligraphy Typography: الوصال */}
        <h2
          className="font-arabic text-7xl sm:text-8xl md:text-9xl lg:text-[140px] text-[#FDB913] font-bold tracking-wide select-none drop-shadow-[0_10px_25px_rgba(253,185,19,0.25)] leading-none my-2"
          dir="rtl"
        >
          {CAMP.nameArabic || 'الوصال'}
        </h2>

        {/* English Title & Descriptor */}
        <div className="space-y-2">
          <h1 className="font-['Poppins'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
            AL-WISAL ’26
          </h1>
          <p className="font-['Poppins'] font-bold text-xs sm:text-sm md:text-base tracking-[0.25em] text-[#FDB913] uppercase">
            A Transition &amp; Leadership Camp
          </p>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-neutral-300 max-w-2xl mx-auto italic font-['Poppins']">
          &ldquo;Rooted in Ilm. Towards the Beloved.&rdquo;
        </p>
      </div>

      {/* Event Meta Badges: Date & Venue */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 mb-8 text-xs sm:text-sm font-medium">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#121E2D]/80 border border-[#FDB913]/30 text-neutral-200 shadow-sm backdrop-blur-md">
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#121E2D]/80 border border-teal-500/40 hover:border-[#FDB913] text-neutral-200 shadow-sm backdrop-blur-md hover:scale-105 transition-all duration-200 group"
          title="Open Campus Location in Google Maps"
        >
          <MapPin className="w-4 h-4 text-teal-400 group-hover:text-[#FDB913] transition-colors" />
          <span>Alathurpadi Dars Campus, Melmuri, Malappuram</span>
        </a>
      </div>

      {/* Countdown Timer (4 boxes) */}
      <div className="relative z-10 mb-8 p-4 sm:p-5 rounded-3xl bg-[#121E2D]/80 border border-[#FDB913]/30 shadow-2xl max-w-md w-full backdrop-blur-md">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FDB913] animate-ping" />
          <span>Camp Countdown</span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
          <div className="p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <span className="font-['Poppins'] font-extrabold text-2xl sm:text-3xl text-[#FDB913]">
              {timeLeft.days}
            </span>
            <span className="text-[10px] text-neutral-400 uppercase mt-0.5 font-medium">Days</span>
          </div>
          <div className="p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <span className="font-['Poppins'] font-extrabold text-2xl sm:text-3xl text-[#FDB913]">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] text-neutral-400 uppercase mt-0.5 font-medium">Hours</span>
          </div>
          <div className="p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <span className="font-['Poppins'] font-extrabold text-2xl sm:text-3xl text-[#FDB913]">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] text-neutral-400 uppercase mt-0.5 font-medium">Mins</span>
          </div>
          <div className="p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <span className="font-['Poppins'] font-extrabold text-2xl sm:text-3xl text-[#FDB913]">
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
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-bold text-sm md:text-base shadow-xl shadow-[#FDB913]/20 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>Register Now</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* 2. Add to Calendar */}
        <button
          onClick={() => setIsCalendarOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#121E2D]/80 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs md:text-sm hover:bg-white/10 transition-all duration-200 shadow-sm backdrop-blur-md"
          title="Add Al-Wisal '26 to Google, Outlook, or Apple Calendar"
        >
          <Calendar className="w-4 h-4 text-[#FDB913]" />
          <span>Add to Calendar</span>
        </button>

        {/* 3. Set Reminder */}
        <button
          onClick={() => openReminderModal()}
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#121E2D]/80 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs md:text-sm hover:bg-white/10 transition-all duration-200 shadow-sm backdrop-blur-md"
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
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#121E2D]/80 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs md:text-sm hover:bg-white/10 transition-all duration-200 shadow-sm backdrop-blur-md"
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

      {/* Modals & Bottom Launchers */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <ReminderModal />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <InstallAppPill />
    </section>
  );
}

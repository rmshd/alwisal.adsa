import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Bell,
  Share2,
  Clock,
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
      className="relative min-h-[100dvh] pt-24 pb-10 sm:pt-28 sm:pb-12 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#070C12] text-white font-['Poppins'] select-none"
    >
      {/* Subtle concentric ambient background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[900px] md:h-[900px] rounded-full border border-[#FDB913]/10 blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[620px] md:h-[620px] rounded-full border border-teal-500/10 blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FDB913]/15 rounded-full blur-[100px]"
      />

      {/* 1. Presenter Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121E2D]/85 border border-[#FDB913]/30 text-xs font-semibold text-[#FDB913] mb-4 shadow-sm backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#FDB913] animate-pulse" />
        <span className="text-[11px] sm:text-xs tracking-wide">
          Alathurpadi Dars Students Association (ADSA) Presents
        </span>
      </div>

      {/* 2. Main Hero Emblem using favicon.png */}
      <div className="relative z-10 mb-2 group">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl sm:rounded-3xl p-3 bg-gradient-to-b from-[#182638] to-[#0A111A] border-2 border-[#FDB913]/40 shadow-[0_8px_30px_rgba(253,185,19,0.3)] flex items-center justify-center backdrop-blur-md group-hover:scale-105 transition-all duration-300">
          <img
            src="/images/favicon.png"
            alt="Al-Wisal 2026 Emblem"
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* 3. Hero Typography: Title & Tagline */}
      <div className="relative z-10 space-y-1 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase drop-shadow-md">
          AL-WISAL ’26
        </h1>
        <p className="font-extrabold text-sm sm:text-base md:text-lg tracking-[0.2em] text-[#FDB913] uppercase">
          TOWARDS THE BELOVED
        </p>
        <p className="text-xs sm:text-sm md:text-base font-medium text-neutral-300 max-w-xl mx-auto italic font-['Poppins'] pt-0.5">
          &ldquo;Rooted in Ilm. Towards the Beloved.&rdquo;
        </p>
      </div>

      {/* 4. Event Meta Badges: Date & Venue */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-5 mb-5 text-xs font-medium">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#121E2D]/85 border border-[#FDB913]/30 text-neutral-200 shadow-sm backdrop-blur-md">
          <Calendar className="w-3.5 h-3.5 text-[#FDB913]" />
          <span>December 24–30, 2026</span>
          <span className="text-[10px] text-[#0B1520] font-bold px-1.5 py-0.2 rounded bg-[#FDB913]">
            7 Days
          </span>
        </div>

        <a
          href={CAMP.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#121E2D]/85 border border-teal-500/40 hover:border-[#FDB913] text-neutral-200 shadow-sm backdrop-blur-md hover:scale-105 transition-all duration-200 group"
          title="Open Campus Location in Google Maps"
        >
          <MapPin className="w-3.5 h-3.5 text-teal-400 group-hover:text-[#FDB913] transition-colors" />
          <span>Alathurpadi Dars Campus, Malappuram</span>
        </a>
      </div>

      {/* 5. Live Countdown Timer (Compact 4-box card) */}
      <div className="relative z-10 mb-5 p-3.5 sm:p-4 rounded-3xl bg-[#121E2D]/80 border border-[#FDB913]/30 shadow-xl max-w-sm w-full backdrop-blur-md">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-center gap-1.5">
          <Clock className="w-3 h-3 text-[#FDB913]" />
          <span>Camp Countdown</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="p-2 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
            <span className="font-['Poppins'] font-black text-xl sm:text-2xl text-[#FDB913] leading-none">
              {timeLeft.days}
            </span>
            <span className="text-[9px] text-neutral-400 uppercase mt-1 font-semibold">Days</span>
          </div>
          <div className="p-2 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
            <span className="font-['Poppins'] font-black text-xl sm:text-2xl text-[#FDB913] leading-none">
              {timeLeft.hours}
            </span>
            <span className="text-[9px] text-neutral-400 uppercase mt-1 font-semibold">Hours</span>
          </div>
          <div className="p-2 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
            <span className="font-['Poppins'] font-black text-xl sm:text-2xl text-[#FDB913] leading-none">
              {timeLeft.minutes}
            </span>
            <span className="text-[9px] text-neutral-400 uppercase mt-1 font-semibold">Mins</span>
          </div>
          <div className="p-2 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
            <span className="font-['Poppins'] font-black text-xl sm:text-2xl text-[#FDB913] leading-none">
              {timeLeft.seconds}
            </span>
            <span className="text-[9px] text-neutral-400 uppercase mt-1 font-semibold">Secs</span>
          </div>
        </div>
      </div>

      {/* 6. Action Buttons: Register Now (gold pill) + Calendar + Reminder + Share */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
        {/* Register CTA */}
        <a
          href="#register"
          onClick={scrollToRegister}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-extrabold text-xs sm:text-sm shadow-lg shadow-[#FDB913]/25 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>Register Now</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Add to Calendar */}
        <button
          onClick={() => setIsCalendarOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#121E2D]/85 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs hover:bg-white/10 transition-all duration-200 shadow-sm backdrop-blur-md"
          title="Add Al-Wisal '26 to Calendar"
        >
          <Calendar className="w-3.5 h-3.5 text-[#FDB913]" />
          <span>Add to Calendar</span>
        </button>

        {/* Set Reminder */}
        <button
          onClick={() => openReminderModal()}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#121E2D]/85 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs hover:bg-white/10 transition-all duration-200 shadow-sm backdrop-blur-md"
          title="Set Camp Reminder"
        >
          <Bell className="w-3.5 h-3.5 text-[#FDB913]" />
          <span>Set Reminder</span>
          {activeCount > 0 && (
            <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-[#FDB913] text-[#0B1520]">
              {activeCount}
            </span>
          )}
        </button>

        {/* Share Camp */}
        <button
          onClick={() => setIsShareOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#121E2D]/85 border border-[#FDB913]/30 hover:border-[#FDB913] text-neutral-200 font-medium text-xs hover:bg-white/10 transition-all duration-200 shadow-sm backdrop-blur-md"
          title="Share Camp with Fellow Students"
        >
          <Share2 className="w-3.5 h-3.5 text-[#FDB913]" />
          <span>Share Camp</span>
        </button>
      </div>

      {/* 7. Target Audience Note */}
      <p className="relative z-10 mt-6 text-[11px] text-neutral-400 max-w-lg leading-relaxed px-2">
        Specially curated for graduating students from <strong>SUFFA Dars</strong> transitioning into university degrees and professional academia in 2026–2027.
      </p>

      {/* Modals & Install Pill */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <ReminderModal />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <InstallAppPill />
    </section>
  );
}

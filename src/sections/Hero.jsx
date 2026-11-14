import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Bell, Share2 } from 'lucide-react';
import CalendarModal from '../components/CalendarModal';
import ReminderModal from '../components/ReminderModal';
import ShareModal from '../components/ShareModal';
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
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#070C12] text-white font-['Poppins']"
    >
      {/* Calm, serene ambient lighting (minimal & soft) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FDB913]/[0.07] rounded-full blur-[160px]"
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6 flex flex-col items-center">
        {/* Minimal Emblem */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-2.5 bg-white/[0.04] border border-white/10 shadow-lg flex items-center justify-center backdrop-blur-md">
          <img
            src="/images/favicon.png"
            alt="Al-Wisal"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Clean, Majestic Typography */}
        <div className="space-y-2">
          <p className="font-arabic text-3xl sm:text-4xl text-[#FDB913] font-medium leading-none tracking-wide" dir="rtl">
            الوصال
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            AL-WISAL ’26
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.25em] text-[#FDB913] uppercase pt-1">
            Towards the Beloved
          </p>
        </div>

        {/* Essential Metadata: Single quiet line */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-400">
          <span className="flex items-center gap-1.5 text-neutral-200">
            <Calendar className="w-3.5 h-3.5 text-[#FDB913]" />
            <span>Dec 24 – 30, 2026</span>
          </span>
          <span className="text-neutral-600">·</span>
          <a
            href={CAMP.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-[#FDB913] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>Alathurpadi Dars Campus, Melmuri</span>
          </a>
        </div>

        {/* Ultra-Minimal Countdown Strip */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 py-3 px-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center font-mono">
          <div>
            <span className="block text-xl sm:text-2xl font-bold text-[#FDB913] leading-none">
              {timeLeft.days}
            </span>
            <span className="text-[10px] uppercase text-neutral-400 font-sans tracking-wider">Days</span>
          </div>
          <span className="text-neutral-600 font-sans">:</span>
          <div>
            <span className="block text-xl sm:text-2xl font-bold text-white leading-none">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase text-neutral-400 font-sans tracking-wider">Hours</span>
          </div>
          <span className="text-neutral-600 font-sans">:</span>
          <div>
            <span className="block text-xl sm:text-2xl font-bold text-white leading-none">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase text-neutral-400 font-sans tracking-wider">Mins</span>
          </div>
          <span className="text-neutral-600 font-sans">:</span>
          <div>
            <span className="block text-xl sm:text-2xl font-bold text-white leading-none">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase text-neutral-400 font-sans tracking-wider">Secs</span>
          </div>
        </div>

        {/* Minimal Action Hub: One strong button + clean icon actions */}
        <div className="flex items-center gap-3 pt-2">
          {/* Primary CTA */}
          <a
            href="#register"
            onClick={scrollToRegister}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#070C12] font-bold text-sm tracking-wide shadow-lg shadow-[#FDB913]/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Quick utility buttons */}
          <button
            onClick={() => setIsCalendarOpen(true)}
            className="p-3 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Add to Calendar"
            aria-label="Add to Calendar"
          >
            <Calendar className="w-4 h-4 text-[#FDB913]" />
          </button>

          <button
            onClick={() => openReminderModal()}
            className="relative p-3 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Set Reminder"
            aria-label="Set Reminder"
          >
            <Bell className="w-4 h-4 text-[#FDB913]" />
            {activeCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#FDB913] text-[#070C12] font-bold text-[9px] flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsShareOpen(true)}
            className="p-3 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Share Camp"
            aria-label="Share Camp"
          >
            <Share2 className="w-4 h-4 text-[#FDB913]" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <ReminderModal />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </section>
  );
}

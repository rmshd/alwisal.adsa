import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { smoothScrollTo } from '../lib/motion';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

const CAMP_DATE = new Date('2026-12-20T00:00:00+05:30');

function getDaysToGo() {
  const now = new Date();
  const diff = CAMP_DATE - now;
  if (diff <= 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function Hero() {
  const [daysToGo, setDaysToGo] = useState(getDaysToGo());

  useEffect(() => {
    const timer = setInterval(() => setDaysToGo(getDaysToGo()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92svh] flex items-center bg-[#FAF9F6] text-slate-900 font-['Poppins'] pt-24 pb-16 overflow-hidden"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT COLUMN: Clean, Prestigious Typographic Presentation (7 cols) */}
        <div className="lg:col-span-7 space-y-7 text-left">

          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            <span>Annual Residential Intensive 2026</span>
          </div>

          {/* Arabic Calligraphic Line */}
          <div>
            <h2
              className="font-['Noto_Serif_Arabic'] text-2xl sm:text-3xl text-amber-800/90 font-medium tracking-wide"
              dir="rtl"
            >
              مُخَيَّمُ أَدْسَا العِلْمِيُّ السَّنَوِيُّ
            </h2>
          </div>

          {/* Main Clean Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Seven Days of Sacred Knowledge. <br />
              <span className="text-amber-700 font-serif italic font-normal">Spiritual Fellowship.</span>
            </h1>
          </div>

          {/* Editorial Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
            An intentional seven-day dawn-to-dusk residential sanctuary for graduated scholars of the SUFFA Dars network, mentored by <strong>Dr. C.K. Abdurahman Faizy</strong> at the historic Alathurpadi Juma Masjid campus.
          </p>

          {/* Minimal Live Countdown Pill */}
          <div className="flex flex-wrap items-center gap-4 py-2 border-y border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-bold text-amber-700 font-mono">{daysToGo}</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Days to go</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <Calendar size={14} className="text-amber-700" />
              <span>Dec 20 – 26, 2026</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <MapPin size={14} className="text-amber-700" />
              <span>Alathurpadi Campus</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button
              href="#register"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#register'); }}
              variant="primary"
              className="h-12 px-7 text-sm font-semibold"
              showArrow
            >
              Register for Camp
            </Button>

            <Button
              href="#programme"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#programme'); }}
              variant="secondary"
              className="h-12 px-7 text-sm font-semibold"
            >
              View Schedule
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex items-center gap-6 text-xs text-slate-500 pt-1 font-medium">
            <span>• 7 Days Intensive</span>
            <span>• 200+ Scholars</span>
            <span>• 100% Residential</span>
          </div>

        </div>

        {/* RIGHT COLUMN: Serene, Elegant Scholar Portrait (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-slate-200/80 group">
            <img
              src="/images/ustad.jpg"
              alt="Dr. C.K. Abdurahman Faizy"
              className="w-full h-full object-cover object-[center_16%] transition-transform duration-700 group-hover:scale-103"
              loading="eager"
            />
            {/* Subtle Gradient Fade at the Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

            {/* Floating Scholar Badge */}
            <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-900 text-left">
              <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider block">
                Chief Scholar & Guide
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5 leading-snug">
                Dr. C.K. Abdurahman Faizy
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Alathurpadi Dars · SUFFA Scholars Fraternity
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

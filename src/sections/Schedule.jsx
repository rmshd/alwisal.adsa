import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';
import { Calendar, Clock, User, Sparkles } from 'lucide-react';

export default function Schedule() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = SCHEDULE_DATA[activeDayIndex] || SCHEDULE_DATA[0];

  return (
    <section id="schedule" className="full-width-section section-pad bg-[#08090C] relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">ACADEMIC ITINERARY</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              جَدْوَلُ المَخَيَّمِ
            </span>
          </div>

          <h2 className="heading-section text-white">
            7-Day Curated Academic{' '}
            <span className="gold-gradient-text block">
              Schedule & Modules
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            A comprehensive curriculum spanning classical Hadith hermeneutics, Fiqh jurisprudence,
            Tazkiyah spiritual ethics, and contemporary discourse.
          </p>
        </div>

        {/* Day Tabs Carousel / Strip in Poppins */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2.5 min-w-max p-2 rounded-[20px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {SCHEDULE_DATA.map((dayItem, idx) => {
              const isActive = idx === activeDayIndex;

              return (
                <button
                  key={dayItem.day}
                  type="button"
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-5 py-3 rounded-[15px] font-sans text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DFB15B] to-[#A37F30] text-[#08090C] font-extrabold shadow-[0_0_20px_rgba(223,177,91,0.35)]'
                      : 'text-white/70 hover:text-white hover:bg-white/5 font-semibold'
                  }`}
                >
                  <span className="opacity-70 mr-1.5 uppercase">DAY 0{dayItem.day}</span>
                  <span className="font-bold text-sm">· {dayItem.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Schedule Panel: High-End Glass Panel */}
        <div className="p-6 sm:p-10 rounded-[28px] bg-[#12151D]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col gap-6">
          {/* Header row in panel */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/25 flex items-center justify-center text-[var(--gold)]">
                <Calendar size={20} />
              </div>
              <div>
                <span className="font-sans font-bold text-xs text-[var(--sky)] uppercase tracking-wider block">
                  DAY 0{activeDay.day} · {activeDay.date}
                </span>
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white mt-0.5">
                  {activeDay.name} — <span className="text-[var(--gold)]">{activeDay.theme}</span>
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-sans font-semibold text-white/90">
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span>Fajr · Quran · Bukhari Sabaq</span>
            </div>
          </div>

          {/* Clean Sessions List */}
          <div className="flex flex-col gap-2">
            {activeDay.sessions.map((sess, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 p-4 sm:p-5 rounded-[18px] hover:bg-white/[0.035] transition-colors items-center border border-transparent hover:border-white/[0.07]"
              >
                {/* Time (3 cols) */}
                <div className="md:col-span-3 flex items-center gap-2.5 font-sans text-sm font-bold text-white/90">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Clock size={15} />
                  </span>
                  <span>{sess.time}</span>
                </div>

                {/* Session Title (6 cols) */}
                <div className="md:col-span-6 font-sans font-bold text-base sm:text-lg text-white">
                  {sess.title}
                </div>

                {/* Speaker (3 cols) */}
                <div className="md:col-span-3 flex items-center md:justify-end gap-2 text-sm font-sans text-[var(--muted)]">
                  <User size={15} className="text-white/40 shrink-0" />
                  <span className="truncate">{sess.speaker}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';

const DAY_THEMES = [
  { bg: 'bg-[#FF5A1F]', text: 'text-white', border: 'border-[#FF5A1F]', lightBg: 'bg-[#FF5A1F]/10' },
  { bg: 'bg-[#FED000]', text: 'text-slate-950', border: 'border-[#FED000]', lightBg: 'bg-[#FED000]/15' },
  { bg: 'bg-[#1E40AF]', text: 'text-white', border: 'border-[#1E40AF]', lightBg: 'bg-[#1E40AF]/10' },
  { bg: 'bg-[#D9381E]', text: 'text-white', border: 'border-[#D9381E]', lightBg: 'bg-[#D9381E]/10' },
  { bg: 'bg-[#4D6A34]', text: 'text-white', border: 'border-[#4D6A34]', lightBg: 'bg-[#4D6A34]/10' },
  { bg: 'bg-[#7C3AED]', text: 'text-white', border: 'border-[#7C3AED]', lightBg: 'bg-[#7C3AED]/10' },
  { bg: 'bg-[#0D9488]', text: 'text-white', border: 'border-[#0D9488]', lightBg: 'bg-[#0D9488]/10' },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const activeItem = SCHEDULE_DATA.find((d) => d.day === activeDay) || SCHEDULE_DATA[0];
  const activeTheme = DAY_THEMES[(activeDay - 1) % DAY_THEMES.length];

  return (
    <section
      id="programme"
      className="relative w-full bg-[var(--canvas-subtle)] text-[var(--ink)] font-['Poppins'] py-20 sm:py-28 border-y-2 border-[var(--ink)]"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[var(--ink)] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--orange)] block mb-1">
              ACADEMIC CURRICULUM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--ink)]">
              7-Day Programme
            </h2>
          </div>
          <div className="text-right">
            <p className="font-['Noto_Serif_Arabic'] text-xl sm:text-2xl font-bold text-[var(--ink)]" dir="rtl">
              مَنْهَجُ الدِّرَاسَةِ وَالبَرَامِجِ
            </p>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-bold">
              Dec 20 – 26, 2026 · Daily Intensive
            </span>
          </div>
        </div>

        {/* Day Selector Tabs (Hamish bold buttons) */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {SCHEDULE_DATA.map((item, index) => {
            const theme = DAY_THEMES[index % DAY_THEMES.length];
            const isActive = activeDay === item.day;
            const dayNum = String(item.day).padStart(2, '0');

            return (
              <button
                key={item.day}
                type="button"
                onClick={() => setActiveDay(item.day)}
                className={`flex-shrink-0 px-5 py-3.5 border-2 border-[var(--ink)] transition-all duration-200 text-left min-w-[90px] cursor-pointer focus:outline-none ${
                  isActive
                    ? `${theme.bg} ${theme.text} shadow-[4px_4px_0px_#0F172A] -translate-y-1 font-bold`
                    : 'bg-white text-[var(--ink)] hover:bg-[var(--canvas)] hover:-translate-y-0.5'
                }`}
              >
                <span className="block text-[10px] font-black uppercase tracking-widest opacity-80">
                  Day
                </span>
                <span className="block text-2xl font-black leading-none mt-0.5">
                  {dayNum}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Panel */}
        {activeItem && (
          <div className="bg-white border-2 border-[var(--ink)] shadow-[6px_6px_0px_#0F172A] p-6 sm:p-10 space-y-8">

            {/* Day Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--ink)]/15">
              <div>
                <span className="inline-block px-3 py-1 bg-[var(--ink)] text-white text-[11px] font-black uppercase tracking-wider mb-2">
                  Day {String(activeItem.day).padStart(2, '0')} · {activeItem.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink)] tracking-tight">
                  <span className="font-['Noto_Serif_Malayalam'] font-bold text-[var(--orange)] mr-3">
                    {activeItem.name}
                  </span>
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 bg-[var(--yellow)] text-[var(--ink)] font-['Noto_Serif_Malayalam'] text-xs font-bold">
                  {activeItem.theme}
                </span>
              </div>
            </div>

            {/* Daily Dawn Sabaq Anchor */}
            <div className="p-4 border-l-4 border-[var(--orange)] bg-[var(--canvas)] flex items-start gap-3">
              <div className="shrink-0 pt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--orange)] block" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-black tracking-widest text-[var(--orange)] block mb-0.5">
                  Dawn Sabaq — Foundation of the Day
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[var(--ink)] font-['Noto_Serif_Malayalam']">
                  {activeItem.fixedMorning}
                </p>
              </div>
            </div>

            {/* Sessions Table / List */}
            <div className="space-y-0 divide-y divide-[var(--ink)]/10">
              {activeItem.sessions.map((sess, idx) => {
                const typeBadge = {
                  ustad: { bg: 'bg-[#FF5A1F]', text: 'text-white' },
                  guest: { bg: 'bg-[#1E40AF]', text: 'text-white' },
                  activity: { bg: 'bg-[#4D6A34]', text: 'text-white' },
                  night: { bg: 'bg-[var(--ink)]', text: 'text-white' },
                }[sess.type] || { bg: 'bg-[var(--ink)]', text: 'text-white' };

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-4.5 hover:bg-[var(--canvas-subtle)]/50 px-2 transition-colors"
                  >
                    {/* Time */}
                    <div className="shrink-0 w-28">
                      <span className="font-mono text-xs sm:text-sm font-black text-[var(--ink)] bg-[var(--canvas)] px-2.5 py-1 border border-[var(--ink)]/20 inline-block">
                        {sess.time}
                      </span>
                    </div>

                    {/* Session Title */}
                    <div className="flex-1">
                      <span className="text-sm sm:text-base font-bold text-[var(--ink)] font-['Noto_Serif_Malayalam'] leading-relaxed block">
                        {sess.title}
                      </span>
                    </div>

                    {/* Speaker Tag */}
                    <div className="shrink-0 text-left sm:text-right">
                      <span className={`inline-block px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${typeBadge.bg} ${typeBadge.text}`}>
                        {sess.speaker}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';

const DAY_CONFIGS = [
  { bg: 'bg-[var(--orange)]',     text: 'text-[var(--ink)]',  activeBorder: 'border-[var(--orange)]'     },
  { bg: 'bg-[var(--yellow)]',     text: 'text-[var(--ink)]',  activeBorder: 'border-[var(--yellow)]'     },
  { bg: 'bg-[var(--cobalt)]',     text: 'text-white',         activeBorder: 'border-[var(--cobalt)]'     },
  { bg: 'bg-[var(--terracotta)]', text: 'text-white',         activeBorder: 'border-[var(--terracotta)]' },
  { bg: 'bg-[var(--teal)]',       text: 'text-white',         activeBorder: 'border-[var(--teal)]'       },
  { bg: 'bg-[var(--surface)]',    text: 'text-white',         activeBorder: 'border-white/40'            },
  { bg: 'bg-[var(--sky)]',        text: 'text-[var(--ink)]',  activeBorder: 'border-[var(--sky)]'        },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const activeItem = SCHEDULE_DATA.find((d) => d.day === activeDay);

  return (
    <section
      id="programme"
      className="relative w-full bg-[var(--cream)] text-[var(--ink)] font-['Poppins'] py-20 sm:py-28 stepped-top stepped-bottom overflow-hidden my-10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 space-y-10 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--ink)]/15 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[var(--terracotta)]">
              Academic Programme
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--ink)] mt-1">
              7-Day Schedule
            </h2>
          </div>
          <div className="text-right">
            <p className="font-['Noto_Serif_Arabic'] text-xl sm:text-2xl text-[var(--terracotta)]">
              مَنْهَجُ الدِّرَاسَةِ
            </p>
            <span className="text-xs uppercase tracking-wider text-[var(--ink)]/60 font-semibold">
              Dec 20–26, 2026
            </span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SCHEDULE_DATA.map((item, index) => {
            const cfg = DAY_CONFIGS[index % DAY_CONFIGS.length];
            const isActive = activeDay === item.day;
            const dayNum = String(item.day).padStart(2, '0');

            return (
              <button
                key={item.day}
                type="button"
                onClick={() => setActiveDay(item.day)}
                className={`flex-shrink-0 px-4 py-3 border-2 transition-all duration-200 text-left min-w-[80px] focus:outline-none ${
                  isActive
                    ? `${cfg.bg} ${cfg.text} ${cfg.activeBorder} shadow-lg scale-[1.02]`
                    : 'bg-[var(--ink)]/10 border-[var(--ink)]/20 text-[var(--ink)]/70 hover:bg-[var(--ink)]/15'
                }`}
              >
                <span className="block text-[11px] font-black uppercase tracking-widest opacity-70">
                  Day
                </span>
                <span className="block text-2xl font-black leading-none">
                  {dayNum}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Panel */}
        {activeItem && (
          <div className="bg-[var(--ink)] text-white p-6 sm:p-10 space-y-6">
            {/* Day Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--orange)] block mb-1">
                  Day {String(activeItem.day).padStart(2, '0')} · {activeItem.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                  <span className="font-['Noto_Serif_Malayalam'] normal-case font-semibold text-[var(--yellow)] mr-3 text-xl">
                    {activeItem.name}
                  </span>
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-[var(--muted)] font-['Noto_Serif_Malayalam']">
                  {activeItem.theme}
                </span>
              </div>
            </div>

            {/* Fixed Morning Block */}
            <div className="px-4 py-3 border-l-2 border-[var(--yellow)] bg-[var(--surface)]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--yellow)] block mb-1">
                Dawn Foundation — Every Day
              </span>
              <p className="text-xs text-[var(--muted)] font-['Noto_Serif_Malayalam']">
                {activeItem.fixedMorning}
              </p>
            </div>

            {/* Sessions List */}
            <div className="space-y-0">
              {activeItem.sessions.map((sess, idx) => {
                const typeColor = {
                  ustad: 'text-[var(--orange)]',
                  guest: 'text-[var(--yellow)]',
                  activity: 'text-[var(--teal)]',
                  night: 'text-[var(--muted)]',
                }[sess.type] || 'text-white';

                return (
                  <div
                    key={idx}
                    className="flex items-baseline gap-4 sm:gap-8 py-4 border-b border-white/[0.07] last:border-0"
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold text-[var(--muted)] shrink-0 w-20 sm:w-24">
                      {sess.time}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white flex-1 font-['Noto_Serif_Malayalam']">
                      {sess.title}
                    </span>
                    <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-wide shrink-0 max-w-[160px] text-right hidden sm:block font-['Poppins'] ${typeColor}`}>
                      {sess.speaker}
                    </span>
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

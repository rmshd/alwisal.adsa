import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';
import { Calendar, Clock, User, Sparkles } from 'lucide-react';

export default function Schedule() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = SCHEDULE_DATA[activeDayIndex] || SCHEDULE_DATA[0];

  return (
    <section id="schedule" className="full-width-section section-pad bg-[#0B0D12] relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">ക്യാമ്പ് ഷെഡ്യൂൾ</span>

          <h2 className="heading-h2 text-white">
            ഏഴ് ദിനങ്ങളുടെ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              സമയക്രമം
            </span>
          </h2>

          <p className="body-editorial">
            ഓരോ ദിവസവും പ്രത്യേക ലക്ഷ്യങ്ങളോടെ ചിട്ടപ്പെടുത്തിയ പഠന ക്രമങ്ങൾ. താഴെ പറയുന്ന ദിവസങ്ങൾ
            തിരഞ്ഞെടുത്ത് ആ ദിവസത്തെ മുഴുവൻ സെഷനുകളും പരിശോധിക്കാം.
          </p>
        </div>

        {/* Day Tabs Carousel / Strip */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2.5 min-w-max p-1.5 rounded-[18px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {SCHEDULE_DATA.map((dayItem, idx) => {
              const isActive = idx === activeDayIndex;

              return (
                <button
                  key={dayItem.day}
                  type="button"
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-5 py-3 rounded-[14px] font-sora text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFC93C] to-[#F59E0B] text-[#0B0D12] font-extrabold shadow-[0_0_20px_rgba(255,201,60,0.35)]'
                      : 'text-white/70 hover:text-white hover:bg-white/5 font-semibold'
                  }`}
                >
                  <span className="opacity-70 mr-1.5">DAY 0{dayItem.day}</span>
                  <span className="font-heading font-bold text-sm">{dayItem.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Schedule Panel: High-End Glass Panel */}
        <div className="p-6 sm:p-10 rounded-[24px] bg-[#141722]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col gap-6">
          {/* Header row in panel */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400">
                <Calendar size={18} />
              </div>
              <div>
                <span className="font-sora font-bold text-xs text-[var(--sky)] uppercase tracking-wider block">
                  DAY 0{activeDay.day} · {activeDay.date}
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-0.5">
                  {activeDay.name} — <span className="text-[var(--yellow)]">{activeDay.theme}</span>
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-heading font-semibold text-white/90">
              <Sparkles size={14} className="text-[var(--yellow)]" />
              <span>സുബ്ഹ് · ഖുർആൻ · ബുഖാരി സബഖ്</span>
            </div>
          </div>

          {/* Clean Sessions List */}
          <div className="flex flex-col gap-2">
            {activeDay.sessions.map((sess, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 p-4 sm:p-5 rounded-[16px] hover:bg-white/[0.03] transition-colors items-center border border-transparent hover:border-white/[0.06]"
              >
                {/* Time (3 cols) */}
                <div className="md:col-span-3 flex items-center gap-2 font-sora text-sm font-bold text-white/90">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock size={15} />
                  </span>
                  <span>{sess.time}</span>
                </div>

                {/* Session Title (6 cols) */}
                <div className="md:col-span-6 font-heading font-bold text-base sm:text-lg text-white">
                  {sess.title}
                </div>

                {/* Speaker (3 cols) */}
                <div className="md:col-span-3 flex items-center md:justify-end gap-2 text-sm font-body text-[var(--muted)]">
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

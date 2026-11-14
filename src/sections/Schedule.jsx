import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';

export default function Schedule() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = SCHEDULE_DATA[activeDayIndex] || SCHEDULE_DATA[0];

  return (
    <section id="schedule" className="full-width-section section-pad bg-[var(--bg)]">
      <div className="flex flex-col gap-12 lg:gap-14">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">ക്യാമ്പ് ഷെഡ്യൂൾ</span>

          <h2 className="heading-h2 text-white">
            ഏഴ് ദിനങ്ങളുടെ <span className="text-[var(--yellow)]">സമയക്രമം</span>
          </h2>

          <p className="body-editorial">
            ഓരോ ദിവസവും പ്രത്യേക ലക്ഷ്യങ്ങളോടെ ചിട്ടപ്പെടുത്തിയ പഠന ക്രമങ്ങൾ. താഴെ പറയുന്ന ദിവസങ്ങൾ
            തിരഞ്ഞെടുത്ത് ആ ദിവസത്തെ മുഴുവൻ സെഷനുകളും പരിശോധിക്കാം.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max border-b border-white/[0.08] pb-3">
            {SCHEDULE_DATA.map((dayItem, idx) => {
              const isActive = idx === activeDayIndex;

              return (
                <button
                  key={dayItem.day}
                  type="button"
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-5 py-2.5 rounded-[12px] font-sora font-semibold text-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[var(--blue)] text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5'
                  }`}
                >
                  <span className="mr-1.5 opacity-80">DAY 0{dayItem.day}:</span>
                  <span className="font-heading font-bold text-sm">{dayItem.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Schedule Panel: Clean List (Time | Session | Speaker) with Thin Dividers */}
        <div className="ds-card flex flex-col gap-6">
          {/* Header row in panel */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-sora font-semibold text-sm text-[var(--sky)] uppercase">
                DAY 0{activeDay.day} · {activeDay.date}
              </span>
              <span className="text-white/40">|</span>
              <span className="font-heading font-bold text-lg text-white">
                {activeDay.name} ({activeDay.theme})
              </span>
            </div>

            <span className="text-xs font-heading font-medium text-[var(--yellow)]">
              സുബ്ഹ് · ഖുർആൻ · ബുഖാരി സബഖ്
            </span>
          </div>

          {/* Clean Sessions List */}
          <div className="flex flex-col">
            {activeDay.sessions.map((sess, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-4.5 border-b border-white/[0.08] last:border-b-0 items-baseline"
              >
                {/* Time (3 cols) */}
                <div className="md:col-span-3 font-sora text-sm font-semibold text-white/90">
                  {sess.time}
                </div>

                {/* Session Title (6 cols) */}
                <div className="md:col-span-6 font-heading font-bold text-base sm:text-lg text-white">
                  {sess.title}
                </div>

                {/* Speaker (3 cols) */}
                <div className="md:col-span-3 font-body text-sm text-[var(--muted)] md:text-right">
                  {sess.speaker}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

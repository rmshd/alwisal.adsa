import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';
import { KitabIcon, StarIcon } from '../art/Icons';

export default function Schedule() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = SCHEDULE_DATA[activeDayIndex] || SCHEDULE_DATA[0];

  return (
    <section id="schedule" className="full-width-section py-24 bg-[var(--bg)]">
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
            <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
              7 ദിനചര്യ ഷെഡ്യൂൾ
            </span>
          </div>

          <h2 className="heading-section text-white">
            ഏഴ് ദിനങ്ങളുടെ <span className="text-[var(--yellow)]">സമ്പൂർണ്ണ സമയക്രമം</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            ഓരോ ദിവസത്തിനും പ്രത്യേകം നിശ്ചയിക്കപ്പെട്ട പ്രമേയങ്ങളും വിഷയങ്ങളും. താഴെ പറയുന്ന ദിവസങ്ങളിൽ ക്ലിക്ക് ചെയ്ത്
            ആ ദിവസത്തെ മുഴുവൻ സെഷനുകളും മനസ്സിലാക്കാം.
          </p>
        </div>

        {/* Horizontal Row of 7 Day Chips */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-3 min-w-max">
            {SCHEDULE_DATA.map((dayItem, idx) => {
              const isActive = idx === activeDayIndex;
              const isGrand = dayItem.isGrandFinale;

              return (
                <button
                  key={dayItem.day}
                  type="button"
                  onClick={() => setActiveDayIndex(idx)}
                  className={`group relative flex flex-col items-start px-5 py-3.5 rounded-[20px] transition-all duration-200 cursor-pointer text-left border ${
                    isActive
                      ? 'bg-[var(--blue)] border-[var(--blue)] text-white shadow-lg scale-105'
                      : 'bg-[var(--card)] border-white/5 hover:border-white/20 text-white/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-sora font-bold tracking-wider ${
                        isActive ? 'text-[var(--yellow)]' : 'text-[var(--muted)]'
                      }`}
                    >
                      DAY 0{dayItem.day}
                    </span>
                    {isGrand && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--yellow)] text-[var(--bg)] font-heading">
                        സമാപനം
                      </span>
                    )}
                  </div>

                  <span className="font-heading font-extrabold text-lg sm:text-xl leading-tight">
                    {dayItem.name}
                  </span>

                  <span
                    className={`text-xs font-body mt-0.5 ${
                      isActive ? 'text-white/90' : 'text-[var(--muted)]'
                    }`}
                  >
                    {dayItem.date}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Wide Schedule Panel */}
        <div className="bg-[var(--card)] rounded-[24px] p-6 sm:p-10 border border-white/[0.08] shadow-2xl flex flex-col gap-8 transition-all">
          {/* Day Title & Theme Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-sora font-bold tracking-widest text-[var(--sky)] uppercase">
                  DAY 0{activeDay.day} · {activeDay.date}
                </span>
                {activeDay.isGrandFinale && (
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[var(--yellow)] text-[var(--bg)] font-heading shadow-md animate-pulse">
                    ★ മഹാ സമാപനം
                  </span>
                )}
              </div>
              <h3 className="heading-card text-white flex items-center gap-3">
                <span>{activeDay.name}</span>
                <span className="text-[var(--muted)] text-base font-normal">|</span>
                <span className="text-[var(--yellow)] text-base font-medium">{activeDay.theme}</span>
              </h3>
            </div>
            <div className="text-xs font-sora text-[var(--muted)]">
              വേദി: അരിപ്ര കാമ്പസ്
            </div>
          </div>

          {/* FIXED PROMINENT YELLOW MORNING LINE */}
          <div className="bg-[var(--yellow)]/10 border-2 border-[var(--yellow)] rounded-[18px] p-4 sm:p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--yellow)] flex items-center justify-center shrink-0">
              <KitabIcon className="w-6 h-6" color="#1E1F22" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-sora font-extrabold uppercase tracking-wider text-[var(--yellow)]">
                നിത്യേനയുള്ള പ്രഭാത ക്രമം (DAILY FIXED MORNING)
              </span>
              <span className="font-heading font-extrabold text-base sm:text-xl text-[var(--yellow)] mt-0.5">
                {activeDay.fixedMorning}
              </span>
            </div>
          </div>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {activeDay.sessions.map((sess, idx) => {
              const isUstad = sess.type === 'ustad';
              const isFinale = activeDay.isGrandFinale && sess.title.includes('സമാപന');

              return (
                <div
                  key={idx}
                  className={`rounded-[20px] p-6 border transition-all duration-200 flex flex-col justify-between ${
                    isFinale
                      ? 'bg-[var(--navy)]/80 border-[var(--yellow)] ring-2 ring-[var(--yellow)]/30 shadow-lg'
                      : isUstad
                      ? 'bg-[#222938] border-[var(--blue)]/30 hover:border-[var(--blue)]'
                      : 'bg-[#24262B] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-sora text-xs font-bold px-2.5 py-1 rounded-md bg-white/5 text-[var(--sky)]">
                        {sess.time}
                      </span>
                      <span
                        className={`text-xs font-heading font-bold uppercase tracking-wider ${
                          isFinale
                            ? 'text-[var(--yellow)]'
                            : isUstad
                            ? 'text-[var(--blue)]'
                            : 'text-[var(--muted)]'
                        }`}
                      >
                        {isFinale
                          ? 'സമാപന സെഷൻ'
                          : isUstad
                          ? 'ഉസ്താദിന്റെ ക്ലാസ്'
                          : sess.type === 'guest'
                          ? 'അതിഥി സെഷൻ'
                          : 'പ്രവർത്തനം'}
                      </span>
                    </div>

                    <h4
                      className={`font-heading font-bold text-lg sm:text-xl mb-2 ${
                        isFinale
                          ? 'text-[var(--yellow)]'
                          : isUstad
                          ? 'text-white'
                          : 'text-white/95'
                      }`}
                    >
                      {sess.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs sm:text-sm text-[var(--muted)] font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)]" />
                    <span>നേതൃത്വം: {sess.speaker}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grand Finale highlighted banner if day 7 */}
          {activeDay.isGrandFinale && (
            <div className="bg-gradient-to-r from-[var(--navy)] to-[#1E2E4A] rounded-[20px] p-6 border border-[var(--yellow)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <StarIcon className="w-8 h-8 text-[var(--yellow)] shrink-0" color="#FFC93C" />
                <div>
                  <h4 className="font-heading font-extrabold text-xl text-white">
                    ഉസ്താദിന്റെ സമാപന സെഷനും ദുആയും
                  </h4>
                  <p className="text-sm font-body text-[var(--muted)]">
                    ക്യാമ്പിന്റെ പൂർണ്ണത കുറിക്കുന്ന ആത്മീയ സമാപന സംഗമം
                  </p>
                </div>
              </div>
              <span className="px-4 py-2 rounded-full font-heading font-bold text-sm bg-[var(--yellow)] text-[var(--bg)] shrink-0">
                മഹാ സമാപനം
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';
import BlockNumeral from '../art/BlockNumeral';
import CalligraphyBand from '../art/CalligraphyBand';
import CircuitLines from '../art/CircuitLines';

const DAY_COLORS = [
  { bg: 'bg-[var(--orange)]', text: 'text-[var(--ink)]', border: 'border-[var(--ink)]/20', dark: false },
  { bg: 'bg-[var(--yellow)]', text: 'text-[var(--ink)]', border: 'border-[var(--ink)]/20', dark: false },
  { bg: 'bg-[var(--cobalt)]', text: 'text-white', border: 'border-white/20', dark: true },
  { bg: 'bg-[var(--terracotta)]', text: 'text-white', border: 'border-white/20', dark: true },
  { bg: 'bg-[var(--teal)]', text: 'text-white', border: 'border-white/20', dark: true },
  { bg: 'bg-[var(--ink)]', text: 'text-white', border: 'border-white/20', dark: true },
  { bg: 'bg-[var(--sky)]', text: 'text-[var(--ink)]', border: 'border-[var(--ink)]/20', dark: false },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section
      id="programme"
      className="relative w-full bg-[var(--cream)] text-[var(--ink)] font-['Poppins'] py-16 sm:py-24 stepped-top stepped-bottom overflow-hidden my-12"
    >
      {/* Top Terracotta Calligraphy Scribble Band */}
      <div className="w-full mb-6">
        <CalligraphyBand className="w-full h-8 sm:h-12" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 space-y-10 relative z-10">
        {/* Top CircuitLines Header */}
        <div className="space-y-4">
          <CircuitLines className="w-full h-12 max-w-xl" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--ink)]/15 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[var(--terracotta)]">
                Academic Curriculum
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--ink)] mt-1">
                Seven-Day Programme
              </h2>
            </div>
            <div className="text-right">
              <span className="font-['Reem_Kufi'] text-2xl sm:text-3xl text-[var(--terracotta)] block">
                مَنْهَجُ الدِّرَاسَةِ
              </span>
              <span className="text-xs uppercase tracking-wider text-[var(--ink)]/70 font-semibold">
                Dec 20 – 26, 2026 · Alathurpadi
              </span>
            </div>
          </div>
        </div>

        {/* 7 Vertical Tiles: Horizontal Accordion (Desktop) / Vertical (Mobile) */}
        <div className="hidden lg:flex gap-3 h-[520px] w-full">
          {SCHEDULE_DATA.map((item, index) => {
            const dayNum = String(item.day).padStart(2, '0');
            const isActive = activeDay === item.day;
            const style = DAY_COLORS[index % DAY_COLORS.length];
            const isClosing = item.day === 7;

            return (
              <div
                key={item.day}
                onClick={() => setActiveDay(item.day)}
                className={`relative cursor-pointer transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 ${
                  style.bg
                } ${style.text} ${
                  isActive ? 'flex-[4] shadow-xl' : 'flex-[1] hover:brightness-105 opacity-90'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-current/20 pb-4">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-widest block opacity-75">
                      {isClosing ? 'FINALE' : `DAY ${dayNum}`}
                    </span>
                    <span className="text-sm font-bold truncate block">
                      {isClosing ? 'Closing Session' : item.date}
                    </span>
                  </div>
                  <BlockNumeral value={dayNum} className="h-10 w-auto shrink-0" />
                </div>

                {/* Content: Expanded when active */}
                {isActive ? (
                  <div className="my-auto py-4 space-y-4 overflow-y-auto pr-2">
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-wider font-semibold opacity-70">
                        Dawn Foundation
                      </span>
                      <p className="text-sm font-bold leading-snug">
                        {item.fixedMorning}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-current/15">
                      {item.sessions.map((sess, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-baseline justify-between gap-4 text-xs sm:text-sm py-1.5 border-b border-current/10"
                        >
                          <span className="font-mono font-bold shrink-0 opacity-80">
                            {sess.time}
                          </span>
                          <span className="font-semibold flex-1 px-2">
                            {sess.title}
                          </span>
                          <span className="text-xs opacity-75 truncate max-w-[160px] text-right font-medium">
                            {sess.speaker}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="my-auto flex items-center justify-center py-6">
                    <span className="writing-vertical-rl rotate-180 text-sm font-bold tracking-widest uppercase opacity-75">
                      {isClosing ? 'Closing Ceremony' : `Session ${dayNum}`}
                    </span>
                  </div>
                )}

                {/* Footer of tile */}
                <div className="pt-3 border-t border-current/20 flex items-center justify-between text-xs font-semibold">
                  <span className="uppercase tracking-wider">
                    {isClosing ? 'Grand Finale' : `${item.sessions.length} Lectures`}
                  </span>
                  <span>{isActive ? '● Active' : 'Expand →'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion (< 1024px) */}
        <div className="flex flex-col gap-3 lg:hidden">
          {SCHEDULE_DATA.map((item, index) => {
            const dayNum = String(item.day).padStart(2, '0');
            const isActive = activeDay === item.day;
            const style = DAY_COLORS[index % DAY_COLORS.length];
            const isClosing = item.day === 7;

            return (
              <div
                key={item.day}
                className={`overflow-hidden transition-all duration-200 ${style.bg} ${style.text}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveDay(isActive ? null : item.day)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <BlockNumeral value={dayNum} className="h-8 w-auto" />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest block opacity-75">
                        {isClosing ? 'Closing Session' : `Day ${dayNum} · ${item.date}`}
                      </span>
                      <span className="text-base font-bold">
                        {isClosing ? 'Grand Finale & Dua' : item.name}
                      </span>
                    </div>
                  </div>
                  <span className="text-xl font-bold">{isActive ? '−' : '+'}</span>
                </button>

                {isActive && (
                  <div className="p-4 pt-0 space-y-3 border-t border-current/15">
                    <p className="text-xs font-medium opacity-80 pt-2">
                      {item.fixedMorning}
                    </p>
                    <div className="space-y-2">
                      {item.sessions.map((sess, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex flex-col text-xs py-1.5 border-b border-current/10"
                        >
                          <div className="flex justify-between font-bold">
                            <span>{sess.time}</span>
                            <span className="opacity-75">{sess.speaker}</span>
                          </div>
                          <span className="font-medium mt-0.5">{sess.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Terracotta Calligraphy Scribble Band */}
      <div className="w-full mt-8">
        <CalligraphyBand className="w-full h-8 sm:h-12" />
      </div>
    </section>
  );
}

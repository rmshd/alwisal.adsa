import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';
import { Calendar, Clock, BookOpen, User } from 'lucide-react';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const activeItem = SCHEDULE_DATA.find((d) => d.day === activeDay) || SCHEDULE_DATA[0];

  return (
    <section
      id="programme"
      className="relative w-full bg-[#080E16] text-white font-['Poppins'] py-24 sm:py-32 border-t border-white/5"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#FDB913]">
              Curriculum &amp; Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Seven-Day Academic Programme
            </h2>
          </div>
          <div className="text-right">
            <span className="font-arabic text-xl sm:text-2xl text-[#FDB913] font-bold block" dir="rtl">
              مَنْهَجُ الدِّرَاسَةِ وَالبَرَامِجِ
            </span>
            <span className="text-xs text-neutral-400 font-medium">
              Dec 24 – 30, 2026 · Daily Intensive
            </span>
          </div>
        </div>

        {/* Day Selector Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {SCHEDULE_DATA.map((item) => {
            const isActive = activeDay === item.day;
            const dayNum = String(item.day).padStart(2, '0');

            return (
              <button
                key={item.day}
                type="button"
                onClick={() => setActiveDay(item.day)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#FDB913] text-[#0B1520] shadow-md shadow-[#FDB913]/25 scale-105'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Day {dayNum}
              </button>
            );
          })}
        </div>

        {/* Active Day Card */}
        {activeItem && (
          <div className="rounded-3xl bg-[#121E2D]/80 border border-[#FDB913]/30 p-6 sm:p-10 space-y-8 shadow-2xl backdrop-blur-md">
            {/* Day Title & Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-bold text-[#FDB913] tracking-wider block mb-1">
                  Day {String(activeItem.day).padStart(2, '0')} · {activeItem.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeItem.name}
                </h3>
              </div>
              <div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#FDB913]/15 border border-[#FDB913]/30 text-[#FDB913] text-xs font-semibold shadow-sm inline-block">
                  {activeItem.theme}
                </span>
              </div>
            </div>

            {/* Daily Dawn Sabaq Anchor */}
            <div className="p-5 rounded-2xl bg-[#0B1520]/80 border border-[#FDB913]/20 shadow-inner flex items-start gap-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FDB913] mt-1.5 shrink-0 animate-pulse" />
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#FDB913] block mb-0.5">
                  Dawn Foundation Sabaq — Every Morning
                </span>
                <p className="text-sm font-semibold text-neutral-200 leading-relaxed">
                  {activeItem.fixedMorning}
                </p>
              </div>
            </div>

            {/* Sessions Timetable */}
            <div className="divide-y divide-white/10 bg-[#0B1520]/50 rounded-2xl border border-white/10 shadow-sm px-4 sm:px-6">
              {activeItem.sessions.map((sess, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold text-[#FDB913] bg-[#FDB913]/10 px-2.5 py-1 rounded-md border border-[#FDB913]/20 shrink-0">
                      {sess.time}
                    </span>
                    <span className="text-sm font-medium text-white leading-relaxed">
                      {sess.title}
                    </span>
                  </div>

                  <div className="shrink-0 text-left sm:text-right pl-12 sm:pl-0">
                    <span className="text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {sess.speaker}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import SCHEDULE_DATA from '../data/schedule.json';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const activeItem = SCHEDULE_DATA.find((d) => d.day === activeDay) || SCHEDULE_DATA[0];

  return (
    <section
      id="programme"
      className="relative w-full bg-white text-slate-900 font-['Poppins'] py-24 sm:py-32 border-t border-slate-200/80"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700">
              Curriculum & Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Seven-Day Academic Programme
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Noto_Serif_Arabic'] text-xl text-amber-800 font-medium block" dir="rtl">
              مَنْهَجُ الدِّرَاسَةِ وَالبَرَامِجِ
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Dec 24 – 30, 2026 · Daily Intensive
            </span>
          </div>
        </div>

        {/* Day Selector Pills (Apple/Stripe minimal aesthetic) */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SCHEDULE_DATA.map((item) => {
            const isActive = activeDay === item.day;
            const dayNum = String(item.day).padStart(2, '0');

            return (
              <button
                key={item.day}
                type="button"
                onClick={() => setActiveDay(item.day)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-[#FAF9F6] text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                Day {dayNum}
              </button>
            );
          })}
        </div>

        {/* Active Day Card */}
        {activeItem && (
          <div className="rounded-3xl bg-[#FAF9F6] border border-slate-200/80 p-6 sm:p-10 space-y-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">

            {/* Day Title & Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
              <div>
                <span className="text-xs uppercase font-semibold text-amber-700 tracking-wider block mb-1">
                  Day {String(activeItem.day).padStart(2, '0')} · {activeItem.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-['Noto_Serif_Malayalam']">
                  {activeItem.name}
                </h3>
              </div>
              <div>
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 font-['Noto_Serif_Malayalam'] text-xs font-semibold shadow-sm inline-block">
                  {activeItem.theme}
                </span>
              </div>
            </div>

            {/* Daily Dawn Sabaq Anchor */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-800 block mb-0.5">
                  Dawn Foundation Sabaq — Every Morning
                </span>
                <p className="text-sm font-semibold text-slate-800 font-['Noto_Serif_Malayalam'] leading-relaxed">
                  {activeItem.fixedMorning}
                </p>
              </div>
            </div>

            {/* Sessions Timetable */}
            <div className="divide-y divide-slate-200/70 bg-white rounded-2xl border border-slate-200/80 shadow-sm px-6">
              {activeItem.sessions.map((sess, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4.5"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 shrink-0">
                      {sess.time}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 font-['Noto_Serif_Malayalam'] leading-relaxed">
                      {sess.title}
                    </span>
                  </div>

                  <div className="shrink-0 text-left sm:text-right pl-12 sm:pl-0">
                    <span className="text-xs font-medium text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
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

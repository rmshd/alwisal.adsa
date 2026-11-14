import React, { useState } from 'react';
import PatternBg from '../art/PatternBg';
import { loadStore } from '../lib/store';
import { Calendar, Clock, Tag, User } from 'lucide-react';

export default function SchedulePage() {
  const store = loadStore();
  const sessions = store.sessions || [];
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const days = [1, 2, 3, 4, 5, 6, 7];
  const categories = ['ALL', 'Sabaq', 'Ustad', 'Guest', 'Activity', 'Logistics'];

  const filteredSessions = sessions.filter((s) => {
    const matchDay = s.day === selectedDay;
    const matchCat = selectedCategory === 'ALL' || s.category === selectedCategory;
    return matchDay && matchCat;
  });

  return (
    <div className="w-full min-h-screen bg-[#0B1520] text-white pt-24 pb-20 relative font-['Poppins']">
      <PatternBg variant="dark" fadeMask />

      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10" style={{ paddingInline: 'var(--gutter)' }}>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F28A2E]">
              Academic Programme
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              7-Day Academic Matrix
            </h1>
            <p className="text-sm text-[#9FB0C3]">
              Daily dawn Sabaq of Sahih al-Bukhari, classical hermeneutics, and special guest lectures.
            </p>
          </div>

          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[#FDB913] block" dir="rtl">
              مَنْهَجُ الدِّرَاسَةِ اليَوْمِيُّ
            </span>
            <span className="text-xs text-[#9FB0C3] font-semibold">
              December 24 – 30, 2026
            </span>
          </div>
        </div>

        {/* Day Selector Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {days.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setSelectedDay(d)}
              className={`flex-shrink-0 px-6 py-3 rounded-xl border text-left transition-all ${
                selectedDay === d
                  ? 'bg-[#F28A2E] border-[#F28A2E] text-[#0B1520] font-black shadow-lg'
                  : 'bg-[#121E2D] border-white/10 text-white/80 hover:bg-white/10'
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider opacity-80">Day</span>
              <span className="block text-xl leading-none mt-0.5">{String(d).padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-xs uppercase tracking-wider font-bold text-[#9FB0C3] mr-2">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#FDB913] border-[#FDB913] text-[#0B1520]'
                  : 'bg-white/5 border-white/10 text-[#9FB0C3] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sessions Timeline Cards */}
        <div className="space-y-4">
          {filteredSessions.map((sess) => {
            const badgeColor = {
              Sabaq: 'bg-[#F28A2E]/15 text-[#F28A2E] border-[#F28A2E]/30',
              Ustad: 'bg-[#FDB913]/15 text-[#FDB913] border-[#FDB913]/30',
              Guest: 'bg-[#2B45D9]/20 text-[#4FB6E6] border-[#2B45D9]/40',
              Activity: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
              Logistics: 'bg-white/10 text-white border-white/20'
            }[sess.category] || 'bg-white/10 text-white border-white/20';

            return (
              <div
                key={sess.id}
                className="bg-[#121E2D] border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/20 transition-all"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#9FB0C3] bg-[#0B1520] px-3 py-1 rounded border border-white/10">
                      <Clock size={12} className="text-[#FDB913]" />
                      <span>{sess.time}</span>
                    </span>

                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${badgeColor}`}>
                      {sess.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {sess.title}
                  </h3>

                  {sess.titleArabic && (
                    <p className="font-['Reem_Kufi'] text-sm text-[#FDB913]" dir="rtl">
                      {sess.titleArabic}
                    </p>
                  )}
                </div>

                <div className="shrink-0 flex items-center gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] uppercase font-bold text-[#9FB0C3] block">Conducted By</span>
                    <span className="text-sm font-bold text-white block">{sess.speaker}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

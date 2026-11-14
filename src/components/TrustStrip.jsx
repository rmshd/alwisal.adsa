import React from 'react';
import { Award, BookOpen, Building2, Users } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: Award,
    title: 'ADSA HERITAGE',
    desc: 'Alathurpadi Dars Students Association',
    arabic: 'رَابِطَةُ الطَّلَبَةِ',
    color: '#FF5A1F',
  },
  {
    icon: Building2,
    title: 'SUFFA FELLOWSHIP',
    desc: 'United Scholarly Community',
    arabic: 'مُجْتَمَعُ الصُّفَّةِ',
    color: '#1E40AF',
  },
  {
    icon: BookOpen,
    title: 'ALATHOORPADI DARS',
    desc: 'Historic Seat of Sacred Pedagogy',
    arabic: 'دَارِسُ المَسْجِدِ',
    color: '#4D6A34',
  },
  {
    icon: Users,
    title: 'SAMASTHA VALUES',
    desc: 'Tradition of Classical Sunnah',
    arabic: 'مَنْهَجُ السَّلَفِ',
    color: '#D9381E',
  },
];

export default function TrustStrip() {
  return (
    <section
      className="w-full border-y-2 border-[var(--ink)] bg-white py-5 relative z-20 font-['Poppins'] shadow-sm"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {TRUST_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 group p-2 hover:bg-[var(--canvas)] transition-colors"
            >
              <div
                className="w-11 h-11 border-2 border-[var(--ink)] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#0F172A] transition-transform group-hover:scale-105"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
                <Icon size={20} strokeWidth={2} />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-extrabold text-xs text-[var(--ink)] uppercase tracking-wider truncate group-hover:text-[var(--orange)] transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="text-[11px] text-[var(--muted)] font-medium truncate mt-0.5">
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

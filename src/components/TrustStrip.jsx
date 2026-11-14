import React from 'react';
import { Award, BookOpen, Building2, Users } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: Award,
    title: 'ADSA Tradition',
    desc: 'Alathurpadi Dars Students Association',
  },
  {
    icon: Building2,
    title: 'SUFFA Fellowship',
    desc: 'United Scholars Community',
  },
  {
    icon: BookOpen,
    title: 'Alathoorpadi Seat',
    desc: 'Historic Center of Sacred Sciences',
  },
  {
    icon: Users,
    title: 'Classical Pedagogy',
    desc: 'Authentic Traditional Isnad',
  },
];

export default function TrustStrip() {
  return (
    <section
      className="w-full border-y border-slate-200/80 bg-white py-8 relative z-20 font-['Poppins']"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {TRUST_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 group p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 text-amber-700 transition-colors group-hover:bg-amber-50 group-hover:border-amber-200">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-xs text-slate-800 tracking-tight truncate">
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-500 font-normal truncate mt-0.5">
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

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
    desc: 'United Scholars Community (39+ Dars)',
  },
  {
    icon: BookOpen,
    title: 'Alathurpadi Seat',
    desc: 'Historic Center of Sacred Sciences',
  },
  {
    icon: Users,
    title: 'Classical Pedagogy',
    desc: 'Sahih al-Bukhari & Mentorship',
  },
];

export default function TrustStrip() {
  return (
    <section
      className="w-full border-y border-[#FDB913]/20 bg-[#121E2D]/70 backdrop-blur-md py-8 relative z-20 font-['Poppins'] text-white"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {TRUST_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 group p-1">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FDB913] transition-colors group-hover:bg-[#FDB913]/15 group-hover:border-[#FDB913]/40">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-xs text-white tracking-tight truncate">
                  {item.title}
                </span>
                <span className="text-[11px] text-neutral-400 font-normal truncate mt-0.5">
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

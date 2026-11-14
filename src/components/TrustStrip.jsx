import React from 'react';
import { Award, BookOpen, Building2, Users } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: Award,
    title: 'ADSA',
    desc: 'Alathurpadi Dars Students Association',
    arabic: 'رابطة الطلبة',
  },
  {
    icon: Building2,
    title: 'SUFFA NETWORK',
    desc: '30 Dars Academic Consortium',
    arabic: 'شبكة الصفة',
  },
  {
    icon: BookOpen,
    title: 'ALATHOORPADI DARS',
    desc: 'Seat of Sacred Pedagogy',
    arabic: 'دارس المسجد',
  },
  {
    icon: Users,
    title: 'SAMASTHA LEADERSHIP',
    desc: 'Jamiyyathul Ulama Heritage',
    arabic: 'جمعية العلماء',
  },
];

export default function TrustStrip() {
  return (
    <section
      className="w-full border-y border-white/10 bg-[var(--surface)] py-6 relative z-20 font-['Poppins']"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {TRUST_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 bg-[var(--ink)] border border-white/15 flex items-center justify-center shrink-0 text-[var(--orange)] group-hover:border-[var(--yellow)] transition-colors">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-xs text-white uppercase tracking-wider truncate group-hover:text-[var(--yellow)] transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="text-[11px] text-[var(--muted)] truncate mt-0.5">
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

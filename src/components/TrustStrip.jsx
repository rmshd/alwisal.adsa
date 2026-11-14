import React from 'react';
import { Award, BookOpen, Building2, Users } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: Award,
    title: 'ADSA',
    desc: 'Alathurpadi Dars Students Association',
    arabic: 'رابطة طلبة دارس الألثوربادي',
  },
  {
    icon: Building2,
    title: 'SUFFA NETWORK',
    desc: '30 Dars Academic Consortium',
    arabic: 'الشبكة الصفية المباركة',
  },
  {
    icon: BookOpen,
    title: 'ALATHOORPADI DARS',
    desc: 'Half a Century of Sacred Pedagogy',
    arabic: 'دارس المسجد الجامع',
  },
  {
    icon: Users,
    title: 'SAMASTHA LEADERSHIP',
    desc: 'Samastha Kerala Jamiyyathul Ulama',
    arabic: 'جمعية العلماء بكيرلا',
  },
];

export default function TrustStrip() {
  return (
    <section
      className="w-full border-y border-white/[0.08] bg-[#0C0E14]/80 backdrop-blur-md py-6 sm:py-7 relative z-20"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
        {TRUST_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 group transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/25 flex items-center justify-center shrink-0 text-[var(--gold)] shadow-[0_0_15px_rgba(223,177,91,0.1)] group-hover:bg-[var(--gold)]/15 group-hover:border-[var(--gold)]/40 transition-all">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-sans font-extrabold text-xs text-white uppercase tracking-wider truncate group-hover:text-[var(--gold)] transition-colors">
                    {item.title}
                  </span>
                  <span className="font-arabic text-[11px] text-[var(--gold)] opacity-70 hidden sm:inline truncate">
                    {item.arabic}
                  </span>
                </div>
                <span className="font-sans text-xs text-[var(--muted)] truncate mt-0.5">
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

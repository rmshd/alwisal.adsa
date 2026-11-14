import React from 'react';
import DARS_LIST from '../data/dars.json';
import { GraduationCap, Building2 } from 'lucide-react';

export default function Dars() {
  const row1 = DARS_LIST.slice(0, 15);
  const row2 = DARS_LIST.slice(15, 30);

  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section id="dars" className="full-width-section section-pad bg-[#0B0D12] border-y border-white/[0.08] relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">ACADEMIC ALLIANCE</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              شَبَكَةُ الصُّفَّةِ
            </span>
          </div>

          <h2 className="heading-section text-white">
            30 Integrated Dars Institutions{' '}
            <span className="gold-gradient-text block">
              Across Kerala
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Graduating scholars from these thirty esteemed traditional colleges unite at the Alathurpadi
            Juma Masjid Campus for this milestone 7-day academic congregation.
          </p>
        </div>

        {/* Two-Row Infinite Marquee */}
        <div className="flex flex-col gap-4 w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0D12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0D12] to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-left pause-hover gap-3.5 flex">
              {marqueeRow1.map((item, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-[20px] bg-[#12151D]/80 backdrop-blur-md border border-white/[0.07] hover:border-[var(--gold)]/40 hover:bg-white/[0.05] transition-all duration-200 select-none shrink-0 shadow-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <GraduationCap size={16} strokeWidth={1.75} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-bold text-sm text-white group-hover:text-[var(--gold)] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="font-sans text-xs text-[var(--muted)] whitespace-nowrap">
                      ({item.place})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-right pause-hover gap-3.5 flex">
              {marqueeRow2.map((item, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-[20px] bg-[#12151D]/80 backdrop-blur-md border border-white/[0.07] hover:border-[var(--gold)]/40 hover:bg-white/[0.05] transition-all duration-200 select-none shrink-0 shadow-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Building2 size={16} strokeWidth={1.75} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-bold text-sm text-white group-hover:text-[var(--gold)] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="font-sans text-xs text-[var(--muted)] whitespace-nowrap">
                      ({item.place})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import DARS_LIST from '../data/dars.json';
import { GraduationCap, Building2 } from 'lucide-react';

export default function Dars() {
  const row1 = DARS_LIST.slice(0, 15);
  const row2 = DARS_LIST.slice(15, 30);

  // Duplicate items for seamless continuous infinite marquee loop
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section id="dars" className="full-width-section section-pad bg-[#0E1118] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--blue)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">SUFFA ദർസ് നെറ്റ്‌വർക്ക്</span>

          <h2 className="heading-h2 text-white">
            30 ദർസുകളുടെ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              മഹാ ശൃംഖല
            </span>
          </h2>

          <p className="body-editorial">
            ഉസ്താദ് ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്രയുടെ മേൽനോട്ടത്തിൽ പ്രവർത്തിക്കുന്ന 30 ദർസുകളിലെ
            വിദ്യാർത്ഥികൾ ഒത്തുചേരുന്ന ചരിത്ര സംഗമം.
          </p>
        </div>

        {/* Two-Row Infinite Marquee (Opposite Directions, Pauses on Hover) */}
        <div className="flex flex-col gap-4 w-full relative">
          {/* Subtle fade edges on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0E1118] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0E1118] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Scrolling Left */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-left pause-hover gap-3.5 flex">
              {marqueeRow1.map((item, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-[18px] bg-[#141722]/80 backdrop-blur-md border border-white/[0.07] hover:border-amber-400/40 hover:bg-white/[0.05] transition-all duration-200 select-none shrink-0 shadow-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <GraduationCap size={16} strokeWidth={1.75} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-bold text-sm text-white group-hover:text-[var(--yellow)] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="font-sora text-xs text-[var(--muted)] whitespace-nowrap">
                      ({item.place})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-right pause-hover gap-3.5 flex">
              {marqueeRow2.map((item, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-[18px] bg-[#141722]/80 backdrop-blur-md border border-white/[0.07] hover:border-amber-400/40 hover:bg-white/[0.05] transition-all duration-200 select-none shrink-0 shadow-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Building2 size={16} strokeWidth={1.75} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-bold text-sm text-white group-hover:text-[var(--yellow)] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="font-sora text-xs text-[var(--muted)] whitespace-nowrap">
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

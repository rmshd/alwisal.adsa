import React from 'react';
import DARS_LIST from '../data/dars.json';
import { GraduationCap } from 'lucide-react';

export default function Dars() {
  const row1 = DARS_LIST.slice(0, 15);
  const row2 = DARS_LIST.slice(15, 30);

  // Duplicate items for seamless continuous infinite marquee loop
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section id="dars" className="full-width-section section-pad bg-[var(--bg)] overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">SUFFA ദർസ് നെറ്റ്‌വർക്ക്</span>

          <h2 className="heading-h2 text-white">
            30 ദർസുകളുടെ <span className="text-[var(--yellow)]">ശൃംഖല</span>
          </h2>

          <p className="body-editorial">
            ഉസ്താദ് ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്രയുടെ മേൽനോട്ടത്തിൽ പ്രവർത്തിക്കുന്ന 30 ദർസുകളിലെ
            വിദ്യാർത്ഥികൾ ഒത്തുചേരുന്ന മഹത്തായ ക്യാമ്പ്.
          </p>
        </div>

        {/* Two-Row Infinite Marquee (Opposite Directions, Pauses on Hover) */}
        <div className="flex flex-col gap-4 w-full relative">
          {/* Subtle fade edges on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Scrolling Left */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-left pause-hover gap-3.5 flex">
              {marqueeRow1.map((item, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-[16px] bg-[var(--card)] border border-white/[0.08] hover:border-white/25 transition-all select-none shrink-0"
                >
                  <GraduationCap size={18} strokeWidth={1.5} className="text-white/60 shrink-0" />
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-bold text-sm text-white whitespace-nowrap">
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
                  className="flex items-center gap-3 px-5 py-3 rounded-[16px] bg-[var(--card)] border border-white/[0.08] hover:border-white/25 transition-all select-none shrink-0"
                >
                  <GraduationCap size={18} strokeWidth={1.5} className="text-white/60 shrink-0" />
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-bold text-sm text-white whitespace-nowrap">
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

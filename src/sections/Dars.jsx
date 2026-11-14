import React from 'react';
import DARS_DATA from '../data/dars.json';

// Group by district
const groupByDistrict = (dars) => {
  return dars.reduce((acc, d) => {
    if (!acc[d.district]) acc[d.district] = [];
    acc[d.district].push(d);
    return acc;
  }, {});
};

export default function Dars() {
  const grouped = groupByDistrict(DARS_DATA);

  return (
    <section
      id="dars"
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              Consortium
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              40 Dars Network
            </h2>
          </div>
          <div className="text-right">
            <p className="font-['Noto_Serif_Arabic'] text-2xl text-[var(--yellow)]">
              شَبَكَةُ الصُّفَّةِ
            </p>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              40 Affiliated Institutes
            </span>
          </div>
        </div>

        {/* Two-row marquee of dars names */}
        <div className="overflow-hidden space-y-3 py-4">
          {/* Row 1: left scroll */}
          <div className="flex gap-3 animate-marquee-left whitespace-nowrap">
            {[...DARS_DATA, ...DARS_DATA].map((d, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-white/10 text-xs font-semibold uppercase tracking-wide shrink-0 hover:border-[var(--orange)] transition-colors"
              >
                <span className="text-[var(--orange)] font-mono font-bold text-[10px]">
                  {String(d.id).padStart(2, '0')}
                </span>
                <span className="font-['Noto_Serif_Arabic'] text-sm font-medium text-[var(--yellow)] normal-case tracking-normal">
                  {d.name}
                </span>
                <span className="text-[var(--muted)] text-[10px]">· {d.place}</span>
              </span>
            ))}
          </div>
          {/* Row 2: right scroll */}
          <div className="flex gap-3 animate-marquee-right whitespace-nowrap">
            {[...DARS_DATA.slice(20), ...DARS_DATA, ...DARS_DATA.slice(0, 20)].map((d, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-white/10 text-xs font-semibold shrink-0 hover:border-[var(--yellow)] transition-colors"
              >
                <span className="text-[var(--teal)] font-mono font-bold text-[10px]">
                  {String(d.id).padStart(2, '0')}
                </span>
                <span className="font-['Noto_Serif_Arabic'] text-sm font-medium text-white normal-case tracking-normal">
                  {d.name}
                </span>
                <span className="text-[var(--muted)] text-[10px]">· {d.district}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Count statement */}
        <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
          <div className="text-center">
            <span className="block text-5xl sm:text-7xl font-black text-[var(--orange)]">40</span>
            <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-semibold">Affiliated Dars</span>
          </div>
          <div className="w-px h-16 bg-white/15" />
          <div className="text-center">
            <span className="block text-5xl sm:text-7xl font-black text-[var(--yellow)]">1</span>
            <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-semibold">Network</span>
          </div>
          <div className="w-px h-16 bg-white/15" />
          <div className="text-center">
            <span className="block text-5xl sm:text-7xl font-black text-[var(--teal)]">∞</span>
            <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-semibold">Scholars</span>
          </div>
        </div>
      </div>
    </section>
  );
}

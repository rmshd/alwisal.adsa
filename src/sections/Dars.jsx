import React, { useState } from 'react';
import DARS_DATA from '../data/dars.json';
import CircuitLines from '../art/CircuitLines';

export default function Dars() {
  const [hoveredDars, setHoveredDars] = useState(null);

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
              30 Dars, One Network.
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[var(--yellow)] block">
              شَبَكَةُ الصُّفَّةِ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Traditional Institutes of Sacred Learning
            </span>
          </div>
        </div>

        {/* Desktop Circuit Node Map (Hidden on mobile) */}
        <div className="hidden md:block relative bg-[var(--surface)] border border-white/10 p-8 overflow-hidden min-h-[440px]">
          {/* Background Circuit lines */}
          <div className="absolute inset-0 opacity-30 pointer-events-none flex flex-col justify-between py-6">
            <CircuitLines className="w-full h-24" />
            <CircuitLines className="w-full h-24 rotate-180" />
          </div>

          {/* Interactive 30 Node Grid */}
          <div className="relative z-10 grid grid-cols-6 lg:grid-cols-10 gap-3">
            {DARS_DATA.map((dars) => {
              const isHovered = hoveredDars?.id === dars.id;
              const nodeNum = String(dars.id).padStart(2, '0');

              return (
                <div
                  key={dars.id}
                  onMouseEnter={() => setHoveredDars(dars)}
                  onMouseLeave={() => setHoveredDars(null)}
                  className={`aspect-square p-2 border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center select-none ${
                    isHovered
                      ? 'bg-[var(--orange)] text-[var(--ink)] border-[var(--orange)] scale-105 z-20'
                      : 'bg-[var(--ink)]/80 text-white border-white/10 hover:border-[var(--yellow)]'
                  }`}
                >
                  <span className="text-xs font-mono font-bold">{nodeNum}</span>
                  <span className="text-[9px] uppercase tracking-wider opacity-70 truncate max-w-[50px]">
                    {dars.place}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Dynamic Inspector Panel */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between min-h-[60px]">
            {hoveredDars ? (
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[var(--orange)] font-mono">
                  #{String(hoveredDars.id).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {hoveredDars.name}
                  </h4>
                  <span className="text-xs text-[var(--yellow)]">
                    {hoveredDars.place}, {hoveredDars.district}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-[var(--muted)] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--yellow)] rounded-full animate-ping" />
                Hover any node to inspect affiliated Dars details
              </div>
            )}

            <div className="text-right text-xs uppercase tracking-widest text-[var(--muted)] font-semibold">
              30 Affiliates Active
            </div>
          </div>
        </div>

        {/* Mobile: Clean 2-Column List (< 768px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:hidden">
          {DARS_DATA.map((dars) => (
            <div
              key={dars.id}
              className="bg-[var(--surface)] border border-white/10 p-3.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[var(--orange)]">
                  {String(dars.id).padStart(2, '0')}
                </span>
                <div>
                  <span className="text-xs font-bold text-white block">
                    {dars.name}
                  </span>
                  <span className="text-[10px] text-[var(--muted)] uppercase">
                    {dars.place} · {dars.district}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

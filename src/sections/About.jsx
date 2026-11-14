import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isReducedMotion } from '../lib/motion';

const NUMERALS = [
  { value: 7, suffix: '', label: 'സുവർണ്ണ ദിനങ്ങൾ', sub: 'തീവ്ര ആത്മീയ പഠനം' },
  { value: 30, suffix: '', label: 'SUFFA ദർസുകൾ', sub: 'കേരളത്തിലെ സംയുക്ത ശൃംഖല' },
  { value: 200, suffix: '+', label: 'തിരഞ്ഞെടുത്ത പ്രതിഭകൾ', sub: 'ആലത്തൂർപടി കാമ്പസിൽ' },
  { value: 4, suffix: '', label: 'മുശാവറ പണ്ഡിതർ', sub: 'പ്രത്യേക സെഷനുകൾ' },
];

export default function About() {
  const sectionRef = useRef(null);
  const numeralsRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion() || !numeralsRef.current) return;

    const ctx = gsap.context(() => {
      const counters = numeralsRef.current.querySelectorAll('.stat-count');
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            counter.innerText = Math.round(obj.val);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="full-width-section section-pad bg-[#0B0D12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[var(--yellow)]/5 blur-[140px] pointer-events-none" />

      <div className="flex flex-col gap-16 lg:gap-24 relative z-10">
        {/* Top: Big Photo Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Big Photo Left (6 cols on large screens) */}
          <div className="lg:col-span-6 rounded-[24px] overflow-hidden border border-white/[0.08] aspect-[4/3] bg-[#141720] relative group shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            <img
              src="/images/gallery/study-circle.svg"
              alt="ആലത്തൂർപടി ദർസ് കാമ്പസ് പഠനവേദി"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-black/40 to-transparent" />
            
            {/* Top Badge */}
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0B0D12]/85 backdrop-blur-md border border-white/15 text-xs font-sora font-semibold text-white/90">
              CAMPUS EXPERIENCE
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-sora text-white/80">
              <span>ALATHOORPADI DARS CAMPUS</span>
              <span className="text-[var(--yellow)] font-bold">SUFFA 2026</span>
            </div>
          </div>

          {/* Text Right (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-center">
            <span className="ds-eyebrow">എന്തിന് ഈ ക്യാമ്പ്?</span>

            <h2 className="heading-h2 text-white">
              ഉസ്താദിനെ അടുത്തറിയാൻ ഒരു{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
                സുവർണ്ണാവസരം
              </span>
            </h2>

            <p className="body-editorial">
              സാധാരണ കീ-ദർസുകളിൽ ഉസ്താദിന്റെ നേരിട്ടുള്ള ഹദീസ് സബഖുകൾ ലഭിക്കാത്ത വിദ്യാർത്ഥികൾക്ക്
              ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്ര ഉസ്താദിനൊപ്പം ഏഴ് ദിനങ്ങൾ ഒരുമിച്ചു താമസിക്കാനും
              സ്വഹീഹുൽ ബുഖാരി നേരിട്ട് പഠിക്കാനുമുള്ള അപൂർവ്വ സന്ദർഭമാണ് ഈ റസിഡൻഷ്യൽ ക്യാമ്പ്.
            </p>

            <div className="p-4 sm:p-5 rounded-[16px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex items-start gap-4">
              <span className="text-2xl text-[var(--yellow)] leading-none">❝</span>
              <p className="font-body text-sm sm:text-base text-white/80 italic leading-relaxed">
                ജീവിതത്തിൽ ഒരിക്കൽ മാത്രം ലഭിക്കുന്ന മഹത്തായ ദർസ് അനുഭവവും ശൈഖുമായുള്ള ആത്മീയ സാമീപ്യവും.
              </p>
            </div>
          </div>
        </div>

        {/* Below: 4 Large Numerals (Sleek Glass Metrics) */}
        <div
          ref={numeralsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6"
        >
          {NUMERALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[20px] bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.07] hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-baseline gap-1 font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none group-hover:text-[var(--yellow)] transition-colors">
                <span className="stat-count text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/70 group-hover:from-[#FFF1C5] group-hover:to-[#FFC93C]" data-target={item.value}>
                  {item.value}
                </span>
                <span className="text-[var(--yellow)] text-3xl sm:text-4xl">{item.suffix}</span>
              </div>
              <div className="mt-4">
                <span className="font-heading font-bold text-lg sm:text-xl text-white block">
                  {item.label}
                </span>
                <span className="font-body text-xs sm:text-sm text-[var(--muted)] mt-1 block">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

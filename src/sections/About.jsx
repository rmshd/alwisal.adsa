import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isReducedMotion } from '../lib/motion';

const NUMERALS = [
  { value: 7, suffix: '', label: 'ദിവസം', sub: 'തീവ്ര ആത്മീയ പഠനം' },
  { value: 30, suffix: '', label: 'ദർസുകൾ', sub: 'കേരളത്തിലെ ശൃംഖല' },
  { value: 200, suffix: '+', label: 'വിദ്യാർത്ഥികൾ', sub: 'തിരഞ്ഞെടുക്കപ്പെടുന്നവർ' },
  { value: 4, suffix: '', label: 'ഉസ്താദുമാർ', sub: 'മുഖ്യ നേതൃത്വം' },
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
    <section id="about" ref={sectionRef} className="full-width-section section-pad bg-[var(--bg)]">
      <div className="flex flex-col gap-16 lg:gap-24">
        {/* Top: Big Photo Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Big Photo Left (7 cols on large screens) */}
          <div className="lg:col-span-6 rounded-[16px] overflow-hidden border border-white/[0.08] aspect-[4/3] bg-[#22252A] relative">
            <img
              src="/images/gallery/study-circle.svg"
              alt="ആലത്തൂർപടി ദർസ് കാമ്പസ് പഠനവേദി"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-xs font-sora text-white/80">
              ALATHOORPADI DARS CAMPUS · SUFFA NETWORK
            </div>
          </div>

          {/* Text Right (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-center">
            <span className="ds-eyebrow">എന്തിന് ഈ ക്യാമ്പ്?</span>

            <h2 className="heading-h2 text-white">
              ഉസ്താദിനെ അടുത്തറിയാൻ ഒരു <span className="text-[var(--yellow)]">സുവർണ്ണാവസരം</span>
            </h2>

            <p className="body-editorial">
              സാധാരണ കീ-ദർസുകളിൽ ഉസ്താദിന്റെ നേരിട്ടുള്ള ഹദീസ് സബഖുകൾ ലഭിക്കാത്ത വിദ്യാർത്ഥികൾക്ക്
              ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്ര ഉസ്താദിനൊപ്പം ഏഴ് ദിനങ്ങൾ ഒരുമിച്ചു താമസിക്കാനും
              സ്വഹീഹുൽ ബുഖാരി നേരിട്ട് പഠിക്കാനുമുള്ള അപൂർവ്വ സന്ദർഭമാണ് ഈ റസിഡൻഷ്യൽ ക്യാമ്പ്.
            </p>
          </div>
        </div>

        {/* Below: 4 Large Numerals (NO CARDS) */}
        <div
          ref={numeralsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/[0.08]"
        >
          {NUMERALS.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-1 font-sora font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
                <span className="stat-count" data-target={item.value}>
                  {item.value}
                </span>
                <span>{item.suffix}</span>
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl text-[var(--text)] mt-3">
                {item.label}
              </span>
              <span className="font-body text-sm text-[var(--muted)] mt-1">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

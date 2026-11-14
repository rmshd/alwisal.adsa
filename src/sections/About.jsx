import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { KitabIcon, PalmIcon, CompassIcon } from '../art/Icons';
import { isReducedMotion } from '../lib/motion';

const STATS = [
  { value: 7, suffix: '', label: 'ദിനങ്ങൾ', sub: 'തീവ്ര ആത്മീയ പഠനം' },
  { value: 30, suffix: '', label: 'SUFFA ദർസുകൾ', sub: 'കേരളത്തിലുടനീളം' },
  { value: 100, suffix: '+', label: 'വിദ്യാർത്ഥികൾ', sub: 'തിരഞ്ഞെടുക്കപ്പെടുന്നവർ' },
  { value: 0, suffix: ' ₹', label: 'രജിസ്ട്രേഷൻ ഫീസ്', sub: 'പൂർണ്ണമായും സൗജന്യം' },
];

const CARDS = [
  {
    title: 'ഉസ്താദിനെ അടുത്തറിയാം',
    desc: 'സാധാരണ കീ-ദർസുകളിൽ ലഭിക്കാത്ത ഉസ്താദിന്റെ സാമീപ്യവും നേരിട്ടുള്ള ഹദീസ് (ബുഖാരി) സബഖും സ്വകാര്യ സംഭാഷണങ്ങളും.',
    icon: KitabIcon,
    accent: 'var(--yellow)',
  },
  {
    title: '30 ദർസുകളുടെ സൗഹൃദം',
    desc: 'വിവിധ ജില്ലകളിലെ SUFFA ദർസ് വിദ്യാർത്ഥികൾ ഒന്നിച്ചിരുന്ന് സൗഹൃദം പങ്കുവെക്കുന്ന സവിശേഷമായ സഹവാസ അനുഭവം.',
    icon: PalmIcon,
    accent: 'var(--green)',
  },
  {
    title: 'ഭാവി വിദ്യാഭ്യാസ ദിശ',
    desc: 'ദർസ് പഠനത്തിന് ശേഷമുള്ള ഉപരിപഠന സാധ്യതകൾ, ഇസ്ലാമിക സർവകലാശാലാ പഠനം, നേതൃത്വ ശാക്തീകരണം എന്നിവയിൽ കൃത്യമായ വഴികാട്ടൽ.',
    icon: CompassIcon,
    accent: 'var(--sky)',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion() || !statsRef.current) return;

    const ctx = gsap.context(() => {
      const counters = statsRef.current.querySelectorAll('.stat-count');
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
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
    <section id="about" ref={sectionRef} className="full-width-section py-24 bg-[var(--bg)]">
      <div className="flex flex-col gap-16">
        {/* Section Heading & Core Statement */}
        <div className="flex flex-col gap-6 max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
            <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
              എന്തിന് ഈ ക്യാമ്പ്?
            </span>
          </div>

          <h2 className="heading-section text-white leading-tight">
            ഉസ്താദിന്റെ ക്ലാസ്സുകൾ ലഭിക്കാത്ത{' '}
            <span className="text-[var(--yellow)]">കീ-ദർസ് വിദ്യാർത്ഥികൾക്ക്</span> ഉസ്താദിനെ അടുത്തറിയാൻ ഒരു സുവർണ്ണാവസരം.
          </h2>

          <p className="font-body text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-4xl">
            SUFFA ദർസ് നെറ്റ്‌വർക്കിന് കീഴിലെ 30 സ്ഥാപനങ്ങളിൽ പഠിക്കുന്ന വിദ്യാർത്ഥികളെ ഒരൊറ്റ കുടക്കീഴിൽ അണിനിരത്തി,
            വിജ്ഞാനത്തിന്റെയും ആത്മീയതയുടെയും നേതൃത്വ പാഠങ്ങളുടെയും പുതിയൊരു അനുഭവം പകർന്നുനൽകുകയാണ് ADSA.
          </p>
        </div>

        {/* 3 Wide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="bg-[var(--card)] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between border border-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${card.accent}18` }}
                  >
                    <IconComp className="w-8 h-8" color={card.accent} />
                  </div>

                  <h3 className="heading-card text-white mb-3 group-hover:text-[var(--yellow)] transition-colors">
                    {card.title}
                  </h3>

                  <p className="font-body text-base text-[var(--muted)] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: card.accent }} />
                  <span className="text-xs font-sora font-semibold tracking-wider uppercase text-white/60">
                    ADSA CAMP 2026
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Count-up Numbers Banner */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#25272C] rounded-[24px] p-8 sm:p-10 border border-white/[0.06]"
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-1 font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--yellow)] leading-none">
                <span className="stat-count" data-target={stat.value}>
                  {stat.value}
                </span>
                <span>{stat.suffix}</span>
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl text-white mt-3">
                {stat.label}
              </span>
              <span className="font-body text-xs sm:text-sm text-[var(--muted)] mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

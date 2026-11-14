import React from 'react';
import { SunriseIcon, KitabIcon, BookStackIcon } from '../art/Icons';

const DAILY_STEPS = [
  {
    step: '01',
    time: '05:30 AM',
    title: 'സുബ്ഹ് നമസ്കാരം',
    desc: 'ജമാഅത്തായി സുബ്ഹ് നിസ്കാരം. പടച്ചവനിലേക്ക് തിരിയുന്ന ഏകാഗ്രമായ പ്രഭാത പ്രാർത്ഥന.',
    icon: SunriseIcon,
    color: '#FFC93C',
    badge: 'ആത്മീയ തുടക്കം',
  },
  {
    step: '02',
    time: '06:00 AM',
    title: 'ഖുർആൻ പാരായണം',
    desc: '30 മിനിറ്റ് പൂർണ്ണ നിശ്ശബ്ദതയിൽ വിശുദ്ധ ഖുർആൻ തിലാവത്ത്. ഹൃദയത്തെ സംസ്കരിക്കുന്ന പ്രഭാതം.',
    icon: KitabIcon,
    color: '#27A66B',
    badge: '30 മിനിറ്റ്',
  },
  {
    step: '03',
    time: '06:30 AM',
    title: 'ഉസ്താദിന്റെ ബുഖാരി സബഖ്',
    desc: 'ഉസ്താദ് നേരിട്ട് നടത്തുന്ന സ്വഹീഹുൽ ബുഖാരി ഹദീസ് സബഖ്. അറിവിന്റെയും സനദിന്റെയും കൈമാറ്റം.',
    icon: BookStackIcon,
    color: '#2F6BFF',
    badge: 'മുഖ്യ സബഖ്',
  },
];

export default function Daily() {
  return (
    <section id="daily" className="full-width-section py-24 bg-[#23252A] relative overflow-hidden border-y border-white/[0.05]">
      {/* Decorative subtle backdrop elements */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--blue)]/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-sora font-semibold tracking-wider uppercase text-[var(--sky)]">
            DAILY MORNING ROUTINE
          </div>
          <h2 className="heading-section text-white">
            ഓരോ ദിവസവും <span className="text-[var(--yellow)]">തുടങ്ങുന്നത്</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[var(--muted)] max-w-2xl">
            ഏഴ് ദിവസവും പുലർകാലത്ത് തുടങ്ങുന്ന ചിട്ടയായ ആത്മീയ അറിവനുഭവങ്ങൾ.
            സുബ്ഹ് മുതൽ ബുഖാരി സബഖ് വരെയുള്ള നിമിഷങ്ങൾ ക്യാമ്പിന്റെ ആത്മാവാണ്.
          </p>
        </div>

        {/* 3 Big Steps Connected by Vine / Flow Line */}
        <div className="relative">
          {/* Desktop Connecting Line between cards */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2.5px] bg-gradient-to-r from-[var(--yellow)] via-[var(--green)] to-[var(--blue)] -translate-y-1/2 z-0 opacity-40"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {DAILY_STEPS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[var(--card)] rounded-[24px] p-8 sm:p-9 border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl relative"
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sora font-extrabold text-3xl sm:text-4xl text-white/30 group-hover:text-[var(--yellow)] transition-colors">
                      {item.step}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-sora font-bold tracking-wide text-[var(--bg)]"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <IconComponent className="w-9 h-9" color={item.color} />
                    </div>

                    <div className="text-xs font-sora font-semibold text-[var(--sky)] mb-1">
                      {item.time}
                    </div>

                    <h3 className="heading-card text-white mb-3 group-hover:text-[var(--yellow)] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-body text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[var(--muted)] font-sora">
                    <span>SUFFA DARS TRADITION</span>
                    <span className="text-[var(--yellow)]">→ തുടർച്ച</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continuation Banner */}
        <div className="bg-[var(--card)]/60 rounded-[20px] p-6 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[var(--yellow)] animate-ping inline-block" />
            <span className="font-heading font-bold text-white text-base sm:text-lg">
              തുടർന്ന് പകൽ മുഴുവൻ ഉസ്താദിന്റെ പ്രത്യേക സെഷനുകളും പ്രമുഖ അതിഥികളുടെ സംവാദങ്ങളും!
            </span>
          </div>
          <a
            href="#schedule"
            className="text-xs font-sora font-semibold tracking-wider text-[var(--sky)] hover:text-white uppercase flex items-center gap-1.5 shrink-0"
          >
            മുഴുവൻ ഷെഡ്യൂൾ കാണുക →
          </a>
        </div>
      </div>
    </section>
  );
}

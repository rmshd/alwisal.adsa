import React from 'react';
import { Sun, BookOpen, Scroll } from 'lucide-react';

const TIMELINE_NODES = [
  {
    step: '01',
    time: '05:30 AM',
    title: 'സുബ്ഹ് നമസ്കാരം',
    desc: 'ജമാഅത്തായ സുബ്ഹ് നിസ്കാരം. പടച്ചവനിലേക്ക് തിരിയുന്ന ഏകാഗ്രമായ പ്രഭാത പ്രാർത്ഥന.',
    icon: Sun,
  },
  {
    step: '02',
    time: '06:00 AM',
    title: 'ഖുർആൻ പാരായണം',
    desc: '30 മിനിറ്റ് പൂർണ്ണ നിശ്ശബ്ദതയിൽ വിശുദ്ധ ഖുർആൻ തിലാവത്ത്. ഹൃദയത്തെ സംസ്കരിക്കുന്ന ആരംഭം.',
    icon: BookOpen,
  },
  {
    step: '03',
    time: '06:30 AM',
    title: 'ബുഖാരി സബഖ്',
    desc: 'ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി ഉസ്താദ് നേരിട്ട് നടത്തുന്ന സ്വഹീഹുൽ ബുഖാരി ഹദീസ് സബഖ്.',
    icon: Scroll,
  },
];

export default function Daily() {
  return (
    <section id="daily" className="full-width-section section-pad bg-[#222428] border-y border-white/[0.08]">
      <div className="flex flex-col gap-12 lg:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">നിത്യേനയുള്ള പ്രഭാത ക്രമം</span>

          <h2 className="heading-h2 text-white">
            ഓരോ ദിവസവും തുടങ്ങുന്ന <span className="text-[var(--yellow)]">ദിനചര്യകൾ</span>
          </h2>

          <p className="body-editorial">
            ദർസ് പാരമ്പര്യത്തിന്റെ ജീവവായുവായ പുലർകാല ക്രമങ്ങൾ. സുബ്ഹ് മുതൽ ബുഖാരി സബഖ് വരെയുള്ള
            ഈ പുണ്യസമയമാണ് ഓരോ ക്യാമ്പ് ദിനത്തിന്റെയും അടിത്തറ.
          </p>
        </div>

        {/* Horizontal Timeline with 3 Nodes Joined by a Thin Line */}
        <div className="relative pt-6 pb-2">
          {/* Thin Joining Line (Desktop) */}
          <div
            className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-white/[0.12] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {TIMELINE_NODES.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div key={idx} className="flex flex-col items-start">
                  {/* Timeline Circle Node */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1E1F22] border border-white/20 flex items-center justify-center shrink-0 text-white">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="font-sora font-semibold text-xs tracking-wider text-[var(--sky)] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {node.time}
                    </span>
                  </div>

                  <h3 className="heading-h3 text-white mb-2">
                    {node.title}
                  </h3>

                  <p className="font-body text-base text-[var(--muted)] leading-[1.4]">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

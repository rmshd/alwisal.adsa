import React from 'react';
import { Sun, BookOpen, Scroll, Clock } from 'lucide-react';

const TIMELINE_NODES = [
  {
    step: '01',
    time: '05:30 AM',
    title: 'സുബ്ഹ് നമസ്കാരം',
    highlight: 'ജമാഅത്ത് പ്രാർത്ഥന',
    desc: 'പടച്ചവനിലേക്ക് തിരിയുന്ന ഏകാഗ്രമായ പ്രഭാത ജമാഅത്ത് നിസ്കാരം. ഉസ്താദിന്റെ സാന്നിധ്യത്തിൽ പുണ്യപ്രഭാതത്തിന്റെ തുടക്കം.',
    icon: Sun,
    color: 'from-amber-500/20 via-orange-500/10 to-transparent',
    borderColor: 'border-amber-400/25',
    iconColor: 'text-amber-400',
  },
  {
    step: '02',
    time: '06:00 AM',
    title: 'വിശുദ്ധ ഖുർആൻ തിലാവത്ത്',
    highlight: '30 മിനിറ്റ് നിശ്ശബ്ദ പാരായണം',
    desc: '30 മിനിറ്റ് പൂർണ്ണ നിശ്ശബ്ദതയിൽ വിശുദ്ധ ഖുർആൻ പാരായണം. ഓരോ വിദ്യാർത്ഥിയുടെയും ഹൃദയത്തെ സംസ്കരിക്കുന്ന പ്രഭാതാനുഭവം.',
    icon: BookOpen,
    color: 'from-blue-500/20 via-sky-500/10 to-transparent',
    borderColor: 'border-sky-400/25',
    iconColor: 'text-sky-400',
  },
  {
    step: '03',
    time: '06:30 AM',
    title: 'സ്വഹീഹുൽ ബുഖാരി സബഖ്',
    highlight: 'ഉസ്താദിന്റെ നേരിട്ടുള്ള ക്ലാസ്സ്',
    desc: 'ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്ര ഉസ്താദ് നേരിട്ട് നടത്തുന്ന സ്വഹീഹുൽ ബുഖാരി ഹദീസ് സബഖ്. ക്യാമ്പിന്റെ കേന്ദ്രബിന്ദു.',
    icon: Scroll,
    color: 'from-amber-400/25 via-yellow-500/15 to-transparent',
    borderColor: 'border-amber-400/40',
    iconColor: 'text-[var(--yellow)]',
  },
];

export default function Daily() {
  return (
    <section id="daily" className="full-width-section section-pad bg-[#0E1118] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[var(--yellow)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">പ്രഭാത ആത്മീയ ക്രമം</span>

          <h2 className="heading-h2 text-white">
            ഓരോ ദിവസവും തുടങ്ങുന്ന{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              ദിനചര്യകൾ
            </span>
          </h2>

          <p className="body-editorial">
            ദർസ് പാരമ്പര്യത്തിന്റെ ജീവവായുവായ പുലർകാല ക്രമങ്ങൾ. സുബ്ഹ് മുതൽ ബുഖാരി സബഖ് വരെയുള്ള
            ഈ പുണ്യസമയമാണ് ഓരോ ക്യാമ്പ് ദിനത്തിന്റെയും ജീവൻ.
          </p>
        </div>

        {/* 3 Illuminated Spiritual Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {TIMELINE_NODES.map((node, idx) => {
            const Icon = node.icon;
            return (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-[24px] bg-[#141722]/80 backdrop-blur-xl border ${node.borderColor} hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative overflow-hidden`}
              >
                {/* Subtle top inner gradient */}
                <div
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${node.color} pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Row: Time & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-sora font-semibold text-white/90">
                      <Clock size={12} className={node.iconColor} />
                      {node.time}
                    </span>
                    <span className="font-sora font-extrabold text-2xl text-white/20 group-hover:text-amber-400/40 transition-colors">
                      {node.step}
                    </span>
                  </div>

                  {/* Icon Node */}
                  <div className={`w-14 h-14 rounded-2xl bg-white/[0.05] border ${node.borderColor} flex items-center justify-center shrink-0 ${node.iconColor} mb-5 shadow-inner`}>
                    <Icon size={26} strokeWidth={1.75} />
                  </div>

                  <h3 className="heading-h3 text-white mb-1.5 group-hover:text-[var(--yellow)] transition-colors">
                    {node.title}
                  </h3>

                  <span className="text-xs font-sora font-semibold text-[var(--sky)] uppercase tracking-wider block mb-3">
                    {node.highlight}
                  </span>

                  <p className="font-body text-sm text-[var(--muted)] leading-relaxed">
                    {node.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-sora text-white/40">
                  <span>DAILY HABIT</span>
                  <span className="text-amber-400 font-semibold">STAGE {node.step}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

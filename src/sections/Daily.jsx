import React from 'react';
import { Sun, BookOpen, Scroll, Clock } from 'lucide-react';

const TIMELINE_NODES = [
  {
    step: '01',
    time: '05:30 AM',
    title: 'Fajr Congregational Prayer',
    arabic: 'صَلاَةُ الفَجْرِ جَمَاعَةً',
    highlight: 'Spiritual Dawn Awakening',
    desc: 'Congregational prayer led at the historic Juma Masjid, beginning each day in sincere devotion and heart purification with the Sheikh.',
    malayalam: 'ജമാഅത്തായ സുബ്ഹ് നിസ്കാരം. ഉസ്താദിന്റെ നേതൃത്വത്തിൽ പ്രഭാത തുടക്കം.',
    icon: Sun,
    color: 'from-amber-500/20 via-orange-500/10 to-transparent',
    borderColor: 'border-amber-400/25',
    iconColor: 'text-amber-400',
  },
  {
    step: '02',
    time: '06:00 AM',
    title: 'Sacred Quran Tilawah',
    arabic: 'تِلاَوَةُ القُرْآنِ الكَرِيمِ',
    highlight: '30 Minutes Silent Reflection',
    desc: 'Half an hour of complete, meditative Quranic recitation in the tranquil morning light, sanctifying the atmosphere and student minds.',
    malayalam: '30 മിനിറ്റ് പൂർണ്ണ നിശ്ശബ്ദതയിൽ വിശുദ്ധ ഖുർആൻ തിലാവത്ത്.',
    icon: BookOpen,
    color: 'from-blue-500/20 via-sky-500/10 to-transparent',
    borderColor: 'border-sky-400/25',
    iconColor: 'text-sky-400',
  },
  {
    step: '03',
    time: '06:30 AM',
    title: 'Sahih al-Bukhari Sabaq',
    arabic: 'دَرْسُ صَحِيحِ البُخَارِيِّ',
    highlight: 'Direct Hadith Lesson with Sheikh',
    desc: 'The jewel of the daily schedule: Direct transmission and deep exposition of Sahih al-Bukhari by Dr. C.K. Abdurahman Faizy Aripra.',
    malayalam: 'ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി ഉസ്താദ് നേരിട്ട് നടത്തുന്ന ബുഖാരി സബഖ്.',
    icon: Scroll,
    color: 'from-amber-400/25 via-yellow-500/15 to-transparent',
    borderColor: 'border-amber-400/40',
    iconColor: 'text-[var(--gold)]',
  },
];

export default function Daily() {
  return (
    <section id="daily" className="full-width-section section-pad bg-[#0B0D12] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">DAILY SPIRITUAL RHYTHM</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              النِّظَامُ اليَومِيُّ
            </span>
          </div>

          <h2 className="heading-section text-white">
            The Sanctified Morning{' '}
            <span className="gold-gradient-text block">
              Fajr to Hadith Sabaq
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Every camp day begins in the quiet early hours after Fajr. This unbroken morning discipline
            forms the spiritual cornerstone of the dars tradition.
          </p>
        </div>

        {/* 3 Illuminated Journey Cards in Poppins */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {TIMELINE_NODES.map((node, idx) => {
            const Icon = node.icon;
            return (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-[26px] bg-[#12151D]/80 backdrop-blur-xl border ${node.borderColor} hover:border-[var(--gold)]/50 transition-all duration-300 flex flex-col justify-between group shadow-[0_12px_35px_rgba(0,0,0,0.5)] relative overflow-hidden`}
              >
                {/* Top inner gradient */}
                <div
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${node.color} pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Row: Time & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-sans font-bold text-white/90">
                      <Clock size={12} className={node.iconColor} />
                      {node.time}
                    </span>
                    <span className="font-sans font-extrabold text-2xl text-white/20 group-hover:text-[var(--gold)]/40 transition-colors">
                      {node.step}
                    </span>
                  </div>

                  {/* Icon Node */}
                  <div className={`w-14 h-14 rounded-2xl bg-white/[0.05] border ${node.borderColor} flex items-center justify-center shrink-0 ${node.iconColor} mb-5 shadow-inner`}>
                    <Icon size={26} strokeWidth={1.75} />
                  </div>

                  <span className="font-arabic text-sm text-[var(--gold)] block mb-1">
                    {node.arabic}
                  </span>

                  <h3 className="font-sans font-extrabold text-xl text-white mb-1 group-hover:text-[var(--gold)] transition-colors">
                    {node.title}
                  </h3>

                  <span className="text-xs font-sans font-semibold text-[var(--sky)] uppercase tracking-wider block mb-3">
                    {node.highlight}
                  </span>

                  <p className="font-sans text-sm text-[var(--muted)] leading-relaxed">
                    {node.desc}
                  </p>

                  <span className="font-malayalam text-xs text-white/50 block mt-3 pt-3 border-t border-white/[0.06]">
                    {node.malayalam}
                  </span>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans text-white/40">
                  <span>DISCIPLINE</span>
                  <span className="text-[var(--gold)] font-bold">STAGE {node.step}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

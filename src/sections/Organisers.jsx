import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

const ORGANISERS = [
  {
    role: 'Patron & Chairman',
    arabic: 'الرئيس الفخري',
    name: 'Dr. C.K. Abdurahman Faizy Aripra',
    title: 'Chief Mudarris & Mushawara Member, Samastha',
    icon: ShieldCheck,
    isChief: true,
  },
  {
    role: 'President, ADSA',
    arabic: 'رئيس الرابطة',
    name: 'Hafiz Muhammad Ramees Kattupara',
    title: 'Alathurpadi Dars Students Association',
    icon: UserCheck,
  },
  {
    role: 'General Secretary, ADSA',
    arabic: 'الأمين العام',
    name: 'Hafiz Muhammad Jumail Parakkanni',
    title: 'Alathurpadi Dars Students Association',
    icon: UserCheck,
  },
  {
    role: 'Treasurer, ADSA',
    arabic: 'أمين الصندوق',
    name: 'Sayyid Naseel Ahmed',
    title: 'Alathurpadi Dars Students Association',
    icon: UserCheck,
  },
];

export default function Organisers() {
  return (
    <section id="organisers" className="full-width-section section-pad bg-[#08090C] relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">EXECUTIVE COMMITTEE</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              اللَّجْنَةُ التَّنْفِيذِيَّةُ
            </span>
          </div>

          <h2 className="heading-section text-white">
            Organising Committee &{' '}
            <span className="gold-gradient-text block">
              Leadership Council
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Convened under the leadership of the Alathurpadi Dars Students Association (ADSA)
            in partnership with the SUFFA Dars network.
          </p>
        </div>

        {/* Organisers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORGANISERS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-[24px] bg-[#12151D]/80 backdrop-blur-xl border ${
                  item.isChief ? 'border-[var(--gold)]/40 shadow-[0_10px_30px_rgba(223,177,91,0.12)]' : 'border-white/[0.08]'
                } hover:border-[var(--gold)]/40 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl ${item.isChief ? 'bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30' : 'bg-white/5 text-white/80 border border-white/10'} flex items-center justify-center mb-5`}>
                    <Icon size={20} strokeWidth={1.75} />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-sans font-bold text-[var(--sky)] uppercase tracking-wider">
                      {item.role}
                    </span>
                    <span className="font-arabic text-xs text-[var(--gold)]">
                      {item.arabic}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-white group-hover:text-[var(--gold)] transition-colors leading-snug">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.07] text-xs font-sans text-[var(--muted)]">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

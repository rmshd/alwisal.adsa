import React from 'react';
import GUESTS_DATA from '../data/guests.json';
import { Award, BookOpen } from 'lucide-react';

export default function Guests() {
  const hostUstad = GUESTS_DATA.find((g) => g.isHost) || GUESTS_DATA[0];
  const otherGuests = GUESTS_DATA.filter((g) => !g.isHost);

  return (
    <section id="guests" className="full-width-section section-pad bg-[#0E1118] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[var(--yellow)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">നേതൃത്വം & അതിഥികൾ</span>

          <h2 className="heading-h2 text-white">
            ക്യാമ്പിനെ നയിക്കുന്ന{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              പണ്ഡിതർ
            </span>
          </h2>

          <p className="body-editorial">
            ഉസ്താദ് ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്രയുടെ മേൽനോട്ടത്തിൽ, സമസ്തയുടെ സമുന്നത
            നേതാക്കളും പ്രമുഖ അതിഥികളും ക്യാമ്പിൽ ക്ലാസ്സുകൾ നയിക്കുന്നു.
          </p>
        </div>

        {/* Rectangular Photo Cards Grid (Ustad Largest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* HOST USTAD: LARGEST (Spans 6 cols) */}
          <div className="md:col-span-2 lg:col-span-6 rounded-[24px] overflow-hidden border border-amber-400/30 bg-[#141722]/80 backdrop-blur-xl relative group min-h-[420px] lg:min-h-[480px] flex flex-col justify-end shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            {/* Top VIP Badge */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1118]/90 backdrop-blur-md border border-amber-400/30 text-xs font-sora font-bold text-[var(--yellow)]">
              <Award size={14} />
              <span>CHIEF SCHOLAR & HOST</span>
            </div>

            {/* Photo / SVG Placeholder */}
            <img
              src={hostUstad.image}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = hostUstad.image.replace('.webp', '.svg');
              }}
              alt={hostUstad.name}
              className="absolute inset-0 w-full h-full object-contain p-6 object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/60 to-transparent pointer-events-none" />

            {/* Name / Role Overlay at Bottom */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-2">
              <span className="font-sora font-semibold text-xs tracking-wider text-[var(--sky)] uppercase">
                {hostUstad.org}
              </span>
              <h3 className="heading-h3 text-white text-2xl sm:text-3xl">
                {hostUstad.name}
              </h3>
              <p className="font-body text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                {hostUstad.bio}
              </p>
            </div>
          </div>

          {/* OTHER GUESTS (Spans 6 cols) */}
          <div className="md:col-span-2 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherGuests.map((guest) => (
              <div
                key={guest.id}
                className="rounded-[20px] overflow-hidden border border-white/[0.08] hover:border-amber-400/30 bg-[#141722]/80 backdrop-blur-xl relative group min-h-[260px] flex flex-col justify-end transition-all duration-300 shadow-sm"
              >
                <img
                  src={guest.image}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = guest.image.replace('.webp', '.svg');
                  }}
                  alt={guest.name}
                  className="absolute inset-0 w-full h-full object-contain p-4 object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/50 to-transparent pointer-events-none" />

                <div className="relative z-10 p-4.5 flex flex-col gap-1">
                  <span className="text-[11px] font-sora font-semibold text-[var(--sky)] uppercase tracking-wider">
                    {guest.role}
                  </span>
                  <h4 className="font-heading font-bold text-base text-white line-clamp-2 group-hover:text-[var(--yellow)] transition-colors">
                    {guest.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

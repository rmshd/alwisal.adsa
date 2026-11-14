import React from 'react';
import GUESTS_DATA from '../data/guests.json';

export default function Guests() {
  const hostUstad = GUESTS_DATA.find((g) => g.isHost) || GUESTS_DATA[0];
  const otherGuests = GUESTS_DATA.filter((g) => !g.isHost);

  return (
    <section id="guests" className="full-width-section section-pad bg-[#222428] border-y border-white/[0.08]">
      <div className="flex flex-col gap-12 lg:gap-14">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">നേതൃത്വം & അതിഥികൾ</span>

          <h2 className="heading-h2 text-white">
            ക്യാമ്പിനെ നയിക്കുന്ന <span className="text-[var(--yellow)]">പണ്ഡിതർ</span>
          </h2>

          <p className="body-editorial">
            ഉസ്താദ് ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്രയുടെ മേൽനോട്ടത്തിൽ, സമസ്തയുടെ സമുന്നത
            നേതാക്കളും പ്രമുഖ അതിഥികളും ക്യാമ്പിൽ ക്ലാസ്സുകൾ നയിക്കുന്നു.
          </p>
        </div>

        {/* Rectangular Photo Cards Grid (Ustad Largest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* HOST USTAD: LARGEST (Spans 6 cols) */}
          <div className="md:col-span-2 lg:col-span-6 rounded-[16px] overflow-hidden border border-white/[0.08] bg-[#1E1F22] relative group min-h-[380px] lg:min-h-[440px] flex flex-col justify-end">
            {/* Photo / SVG Placeholder */}
            <img
              src={hostUstad.image}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = hostUstad.image.replace('.webp', '.svg');
              }}
              alt={hostUstad.name}
              className="absolute inset-0 w-full h-full object-contain p-6 object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Name / Role Overlay at Bottom */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-1.5">
              <span className="font-sora font-semibold text-xs tracking-wider text-[var(--sky)] uppercase">
                {hostUstad.org} · HOST USTAD
              </span>
              <h3 className="heading-h3 text-white">
                {hostUstad.name}
              </h3>
              <p className="font-body text-sm text-[var(--muted)] line-clamp-2">
                {hostUstad.bio}
              </p>
            </div>
          </div>

          {/* OTHER GUESTS (Spans 2 or 3 cols each) */}
          <div className="md:col-span-2 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherGuests.map((guest) => (
              <div
                key={guest.id}
                className="rounded-[16px] overflow-hidden border border-white/[0.08] bg-[#1E1F22] relative group min-h-[260px] flex flex-col justify-end"
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="relative z-10 p-4 flex flex-col gap-1">
                  <span className="text-[11px] font-sora text-[var(--sky)] uppercase tracking-wider">
                    {guest.role}
                  </span>
                  <h4 className="font-heading font-bold text-base text-white line-clamp-2">
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

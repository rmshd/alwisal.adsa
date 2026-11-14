import React from 'react';
import GUESTS_DATA from '../data/guests.json';

export default function Guests() {
  const hostUstad = GUESTS_DATA.find((g) => g.isHost) || GUESTS_DATA[0];
  const otherGuests = GUESTS_DATA.filter((g) => !g.isHost);

  return (
    <section id="guests" className="full-width-section py-24 bg-[#23252A] border-y border-white/[0.05]">
      <div className="flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
            <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
              അതിഥികളും നേതൃത്വവും
            </span>
          </div>

          <h2 className="heading-section text-white">
            ക്യാമ്പിനെ ധന്യമാക്കുന്ന <span className="text-[var(--yellow)]">പണ്ഡിത ശ്രേഷ്ഠർ</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            ഉസ്താദ് ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസിയുടെ നേതൃത്വത്തിൽ, സമസ്തയുടെ സമുന്നത നേതാക്കളും ആത്മീയ ഗുരുവര്യന്മാരും
            ക്യാമ്പിൽ വിവിധ ദിവസങ്ങളിൽ പ്രതിനിധികളുമായി സംവദിക്കും.
          </p>
        </div>

        {/* Wide Grid: Ustad's card first and largest */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* HOST USTAD: LARGEST & FIRST (Spans 6 or 7 cols) */}
          <div className="lg:col-span-12 xl:col-span-6 bg-[var(--card)] rounded-[24px] overflow-hidden border-2 border-[var(--blue)]/60 hover:border-[var(--blue)] transition-all duration-300 shadow-2xl flex flex-col md:flex-row group">
            {/* Photo / SVG Placeholder */}
            <div className="w-full md:w-1/2 bg-[#1B263B] flex items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent md:hidden z-10" />
              <img
                src={hostUstad.image}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = hostUstad.image.replace('.webp', '.svg');
                }}
                alt={hostUstad.name}
                className="w-full h-auto max-h-[380px] object-contain transition-transform duration-300 group-hover:scale-105"
                width="320"
                height="380"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-sora font-extrabold uppercase bg-[var(--blue)] text-white shadow-md">
                HOST USTAD
              </span>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-sora font-bold tracking-widest text-[var(--yellow)] uppercase">
                  {hostUstad.org}
                </span>

                <h3 className="heading-card text-white text-2xl sm:text-3xl mt-2 mb-3 leading-tight group-hover:text-[var(--yellow)] transition-colors">
                  {hostUstad.name}
                </h3>

                <p className="text-sm font-sora font-semibold text-[var(--sky)] mb-4">
                  {hostUstad.role}
                </p>

                <p className="font-body text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {hostUstad.bio}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/60 font-sora">
                <span>SUFFA DARS NETWORK</span>
                <span className="text-[var(--yellow)] font-bold">★ മുഖ്യ നേതൃത്വം</span>
              </div>
            </div>
          </div>

          {/* OTHER GUESTS (Each in large rounded 24px cards) */}
          <div className="lg:col-span-12 xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1 gap-6">
            {otherGuests.map((guest) => (
              <div
                key={guest.id}
                className="bg-[var(--card)] rounded-[24px] overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col sm:flex-row group"
              >
                {/* Photo container */}
                <div className="w-full sm:w-40 bg-[#1E2530] flex items-center justify-center p-4 relative shrink-0">
                  <img
                    src={guest.image}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = guest.image.replace('.webp', '.svg');
                    }}
                    alt={guest.name}
                    className="w-full h-36 sm:h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    width="140"
                    height="180"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-sora font-semibold text-[var(--muted)] uppercase tracking-wider">
                      {guest.org}
                    </span>

                    <h4 className="font-heading font-bold text-lg sm:text-xl text-white mt-1 mb-1 group-hover:text-[var(--yellow)] transition-colors">
                      {guest.name}
                    </h4>

                    <p className="text-xs font-sora font-medium text-[var(--sky)] mb-2">
                      {guest.role}
                    </p>

                    <p className="font-body text-xs sm:text-sm text-[var(--muted)] line-clamp-2">
                      {guest.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-sora text-[var(--yellow)]">
                    <span>വിശിഷ്ട സാന്നിധ്യം</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

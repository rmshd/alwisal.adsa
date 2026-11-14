import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { MapPin, Compass, Bus, Train, Plane, Phone } from 'lucide-react';

export default function Venue() {
  const { VENUE } = CONFIG;
  const hasMapsUrl = VENUE.MAPS_URL && VENUE.MAPS_URL.trim() !== '';

  return (
    <section id="venue" className="full-width-section section-pad bg-[#0E1118] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-[var(--blue)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">വേദി & റൂട്ട്</span>

          <h2 className="heading-h2 text-white">
            ക്യാമ്പ് നടക്കുന്ന{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              പവിത്ര വേദി
            </span>
          </h2>

          <p className="body-editorial">
            ചരിത്രപ്രസിദ്ധമായ ആലത്തൂർപടി ജുമാമസ്ജിദ് ദർസ് കാമ്പസിലാണ് 7 ദിവസത്തെ റസിഡൻഷ്യൽ ക്യാമ്പ് ഒരുക്കിയിട്ടുള്ളത്.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Details Card (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-[24px] bg-[#141722]/80 backdrop-blur-xl border border-white/[0.08] flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-13 h-13 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400 shadow-[0_0_15px_rgba(255,201,60,0.1)]">
                  <MapPin size={24} strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-xs font-sora font-semibold text-[var(--sky)] tracking-wider uppercase">
                    OFFICIAL VENUE
                  </span>
                  <h3 className="heading-h3 text-white text-xl sm:text-2xl mt-0.5">
                    {VENUE.NAME}
                  </h3>
                  <span className="text-xs font-sora text-white/50 block mt-0.5">
                    {VENUE.NAME_EN}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 py-5 border-y border-white/[0.08] font-body text-base text-[var(--text)]">
                <div className="flex items-start gap-3">
                  <span className="text-white font-semibold shrink-0">വിലാസം:</span>
                  <span className="text-[var(--muted)]">{VENUE.ADDRESS}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white font-semibold shrink-0">റൂട്ട്:</span>
                  <span className="text-[var(--muted)]">{VENUE.HOW_TO_REACH}</span>
                </div>
              </div>

              {/* Transit Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="p-4 rounded-[16px] bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-white/90">
                    <Bus size={17} strokeWidth={1.75} className="text-amber-400" />
                    <span className="text-xs font-sora font-bold">ബസ്സ്</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    മലപ്പുറത്ത് നിന്ന് മേൽമുറി ബസ്സ് വഴി ആലത്തൂർപടി ഇറങ്ങുക.
                  </p>
                </div>

                <div className="p-4 rounded-[16px] bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-white/90">
                    <Train size={17} strokeWidth={1.75} className="text-sky-400" />
                    <span className="text-xs font-sora font-bold">ട്രെയിൻ</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    അങ്ങാടിപ്പുറം (25 കി.മീ) / പരപ്പനങ്ങാടി (32 കി.മീ).
                  </p>
                </div>

                <div className="p-4 rounded-[16px] bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-white/90">
                    <Plane size={17} strokeWidth={1.75} className="text-emerald-400" />
                    <span className="text-xs font-sora font-bold">വിമാനം</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    കോഴിക്കോട് എയർപോർട്ട് (കരിപ്പൂർ - 22 കി.മീ).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              {hasMapsUrl && (
                <Button
                  href={VENUE.MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="text-sm px-6 h-[46px]"
                >
                  Google Maps
                </Button>
              )}

              {CONFIG.CONTACT?.phones?.[0] && (
                <a
                  href={`tel:${CONFIG.CONTACT.phones[0].number}`}
                  className="text-xs font-sora text-[var(--muted)] hover:text-white inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  <Phone size={14} strokeWidth={1.5} className="text-amber-400" />
                  <span>ഹെൽപ്പ്‌ലൈൻ: {CONFIG.CONTACT.phones[0].display}</span>
                </a>
              )}
            </div>
          </div>

          {/* Location Pinpoint Graphic (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-[24px] bg-[#141722]/80 backdrop-blur-xl border border-white/[0.08] flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sora font-bold text-[var(--sky)] tracking-wider uppercase">
                  CAMPUS PINPOINT
                </span>
                <span className="text-xs font-sora text-white/70">
                  {VENUE.PLACE}
                </span>
              </div>

              {/* Minimal Vector graphic with pulsing target beacon */}
              <div className="w-full aspect-[4/3] rounded-[18px] bg-[#0E1118] border border-white/10 relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#6CB4FF_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Glowing target rings */}
                <div className="absolute w-36 h-36 rounded-full border border-amber-400/20 animate-ping" />
                <div className="absolute w-24 h-24 rounded-full border border-sky-400/30" />

                <div className="relative z-10 bg-[#141722]/95 backdrop-blur-md p-5 rounded-[16px] border border-white/15 text-center max-w-[240px] shadow-2xl">
                  <div className="w-10 h-10 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 mx-auto mb-2">
                    <Compass size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-heading font-bold text-base text-white block">
                    {VENUE.NAME}
                  </span>
                  <span className="text-xs text-[var(--muted)] font-sora block mt-0.5">
                    Melmuri, Malappuram
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[var(--muted)] mt-6 text-center leading-relaxed">
              ക്യാമ്പ് വേദിയിലേക്ക് എത്തുന്ന വിദ്യാർത്ഥികൾക്ക് റെയിൽവേ സ്റ്റേഷനിലും ബസ് സ്റ്റാൻഡിലും സഹായത്തിന് വോളണ്ടിയർമാർ ഉണ്ടായിരിക്കും.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

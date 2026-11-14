import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { MapPin, Compass, Bus, Train, Plane, Phone } from 'lucide-react';

export default function Venue() {
  const { VENUE } = CONFIG;
  const hasMapsUrl = VENUE.MAPS_URL && VENUE.MAPS_URL.trim() !== '';

  return (
    <section id="venue" className="full-width-section section-pad bg-[var(--bg)]">
      <div className="flex flex-col gap-12 lg:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">വേദി & റൂട്ട്</span>

          <h2 className="heading-h2 text-white">
            ക്യാമ്പ് നടക്കുന്ന <span className="text-[var(--yellow)]">വേദി</span>
          </h2>

          <p className="body-editorial">
            ചരിത്രപ്രസിദ്ധമായ ആലത്തൂർപടി ജുമാമസ്ജിദ് ദർസ് കാമ്പസിലാണ് 7 ദിവസത്തെ റസിഡൻഷ്യൽ ക്യാമ്പ് ഒരുക്കിയിട്ടുള്ളത്.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Details Card (7 cols) */}
          <div className="lg:col-span-7 ds-card flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[12px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-sora font-semibold text-[var(--sky)] tracking-wider uppercase">
                    OFFICIAL VENUE
                  </span>
                  <h3 className="heading-h3 text-white mt-1">
                    {VENUE.NAME}
                  </h3>
                  <span className="text-xs font-sora text-white/50 block">
                    {VENUE.NAME_EN}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 py-4 border-y border-white/[0.08] font-body text-base text-[var(--text)]">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-4 rounded-[12px] bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-1.5 text-white/90">
                    <Bus size={16} strokeWidth={1.5} />
                    <span className="text-xs font-sora font-semibold">ബസ്സ്</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-[1.4]">
                    മലപ്പുറത്ത് നിന്ന് മേൽമുറി ബസ്സ് വഴി ആലത്തൂർപടി ഇറങ്ങുക.
                  </p>
                </div>

                <div className="p-4 rounded-[12px] bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-1.5 text-white/90">
                    <Train size={16} strokeWidth={1.5} />
                    <span className="text-xs font-sora font-semibold">ട്രെയിൻ</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-[1.4]">
                    അങ്ങാടിപ്പുറം (25 കി.മീ) / പരപ്പനങ്ങാടി (32 കി.മീ).
                  </p>
                </div>

                <div className="p-4 rounded-[12px] bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-1.5 text-white/90">
                    <Plane size={16} strokeWidth={1.5} />
                    <span className="text-xs font-sora font-semibold">വിമാനം</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-[1.4]">
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
                  className="text-sm px-6 h-[44px]"
                >
                  Google Maps
                </Button>
              )}

              {CONFIG.CONTACT?.phones?.[0] && (
                <a
                  href={`tel:${CONFIG.CONTACT.phones[0].number}`}
                  className="text-xs font-sora text-[var(--muted)] hover:text-white inline-flex items-center gap-2"
                >
                  <Phone size={14} strokeWidth={1.5} />
                  <span>ഹെൽപ്പ്‌ലൈൻ: {CONFIG.CONTACT.phones[0].display}</span>
                </a>
              )}
            </div>
          </div>

          {/* Location Pinpoint Graphic (5 cols) */}
          <div className="lg:col-span-5 ds-card flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sora font-semibold text-[var(--sky)] tracking-wider uppercase">
                  LOCATION PINPOINT
                </span>
                <span className="text-xs font-sora text-white/70">
                  {VENUE.PLACE}
                </span>
              </div>

              {/* Minimal Vector graphic */}
              <div className="w-full aspect-[4/3] rounded-[12px] bg-[#1A1D23] border border-white/10 relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6CB4FF_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 bg-[#1E1F22]/95 p-4 rounded-[12px] border border-white/10 text-center max-w-[220px]">
                  <Compass size={22} strokeWidth={1.5} className="mx-auto mb-1 text-white" />
                  <span className="font-heading font-bold text-sm text-white block">
                    {VENUE.NAME}
                  </span>
                  <span className="text-[11px] text-[var(--muted)] font-sora">
                    Melmuri, Malappuram
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[var(--muted)] mt-6 text-center leading-[1.4]">
              ക്യാമ്പ് വേദിയിലേക്ക് എത്തുന്ന വിദ്യാർത്ഥികൾക്ക് റെയിൽവേ സ്റ്റേഷനിലും ബസ് സ്റ്റാൻഡിലും സഹായത്തിന് വോളണ്ടിയർമാർ ഉണ്ടായിരിക്കും.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

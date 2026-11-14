import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { MasjidIcon, CompassIcon } from '../art/Icons';

export default function Venue() {
  const { VENUE } = CONFIG;
  const hasMapsUrl = VENUE.MAPS_URL && VENUE.MAPS_URL.trim() !== '';

  return (
    <section id="venue" className="full-width-section py-24 bg-[var(--bg)]">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
            <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
              ക്യാമ്പ് വേദി & റൂട്ട്
            </span>
          </div>

          <h2 className="heading-section text-white">
            ക്യാമ്പ് നടക്കുന്ന <span className="text-[var(--yellow)]">വേദി</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[var(--muted)]">
            ചരിത്രപ്രസിദ്ധമായ ആലത്തൂർപടി ജുമാമസ്ജിദ് ദർസ് കാമ്പസിലാണ് 7 ദിവസത്തെ ക്യാമ്പ് ഒരുക്കിയിട്ടുള്ളത്.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Venue Details Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[var(--card)] rounded-[24px] p-8 sm:p-10 border border-white/[0.08] shadow-xl flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--blue)]/15 flex items-center justify-center shrink-0">
                  <MasjidIcon className="w-8 h-8 text-[var(--yellow)]" color="#FFC93C" />
                </div>
                <div>
                  <span className="text-xs font-sora font-semibold text-[var(--sky)] tracking-wider uppercase">
                    OFFICIAL VENUE
                  </span>
                  <h3 className="heading-card text-white text-xl sm:text-2xl mt-0.5">
                    {VENUE.NAME}
                  </h3>
                  <span className="text-xs font-sora text-white/50 block">
                    {VENUE.NAME_EN}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 py-4 border-y border-white/5 font-body text-base text-[var(--text)]/90">
                <div className="flex items-start gap-3">
                  <span className="text-[var(--yellow)] font-bold shrink-0">വിലാസം:</span>
                  <span>{VENUE.ADDRESS}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--yellow)] font-bold shrink-0">എത്തിച്ചേരാൻ:</span>
                  <span>{VENUE.HOW_TO_REACH}</span>
                </div>
              </div>

              {/* Transit Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs font-sora font-bold text-[var(--yellow)] block mb-1">
                    ബസ്സ് മാർഗ്ഗം
                  </span>
                  <p className="text-xs text-[var(--muted)]">
                    മലപ്പുറം കെ.എസ്.ആർ.ടി.സി / മുനിസിപ്പൽ സ്റ്റാൻഡിൽ നിന്ന് മേൽമുറി ബസ്സ് വഴി ആലത്തൂർപടി ഇറങ്ങുക.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs font-sora font-bold text-[var(--sky)] block mb-1">
                    റെയിൽവേ സ്റ്റേഷൻ
                  </span>
                  <p className="text-xs text-[var(--muted)]">
                    അങ്ങാടിപ്പുറം (25 കി.മീ) / പരപ്പനങ്ങാടി (32 കി.മീ) / കോഴിക്കോട് (48 കി.മീ).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs font-sora font-bold text-[var(--green)] block mb-1">
                    വിമാനത്താവളം
                  </span>
                  <p className="text-xs text-[var(--muted)]">
                    കോഴിക്കോട് അന്താരാഷ്ട്ര വിമാനത്താവളം (കരിപ്പൂർ - 22 കി.മീ).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              {hasMapsUrl && (
                <Button
                  href={VENUE.MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="text-sm px-6"
                >
                  Google Maps തുറക്കുക
                </Button>
              )}

              {CONFIG.CONTACT?.phones?.[0] && (
                <a
                  href={`tel:${CONFIG.CONTACT.phones[0].number}`}
                  className="text-xs font-sora text-[var(--muted)] hover:text-white"
                >
                  ഹെൽപ്പ്‌ലൈൻ: {CONFIG.CONTACT.phones[0].display}
                </a>
              )}
            </div>
          </div>

          {/* Location Pinpoint Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#232730] rounded-[24px] overflow-hidden border border-white/[0.08] shadow-xl p-8 flex flex-col justify-between relative">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sora font-bold text-[var(--yellow)] tracking-wider uppercase">
                  CAMP LOCATION
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-sora font-semibold bg-white/5 text-white/80">
                  {VENUE.PLACE}
                </span>
              </div>

              {/* Styled Minimal Vector Campus Map graphic */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-[#1A1D23] border border-white/10 relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6CB4FF_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Curved road */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 220" fill="none">
                  <path d="M-10 180 C80 160 140 120 220 80 T310 20" stroke="#3D4452" strokeWidth="12" />
                  <path d="M-10 180 C80 160 140 120 220 80 T310 20" stroke="#FFC93C" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="170" cy="105" r="28" fill="#2F6BFF" opacity="0.3" className="animate-ping" />
                  <circle cx="170" cy="105" r="14" fill="#2F6BFF" />
                  <circle cx="170" cy="105" r="6" fill="#FFC93C" />
                </svg>

                <div className="relative z-10 bg-[#1E1F22]/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center max-w-[220px]">
                  <CompassIcon className="w-6 h-6 mx-auto mb-1 text-[var(--yellow)]" color="#FFC93C" />
                  <span className="font-heading font-bold text-xs text-white block">
                    {VENUE.NAME}
                  </span>
                  <span className="text-[10px] text-[var(--sky)] font-sora">
                    Melmuri, Malappuram
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[var(--muted)] mt-6 text-center">
              ക്യാമ്പ് വേദിയിലേക്ക് എത്തുന്ന വിദ്യാർത്ഥികൾക്ക് റെയിൽവേ സ്റ്റേഷനിലും ബസ് സ്റ്റാൻഡിലും സഹായത്തിന് വോളണ്ടിയർമാർ ഉണ്ടായിരിക്കും.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

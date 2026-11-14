import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { MapPin, Bus, Train, Plane, Phone, Navigation } from 'lucide-react';

export default function Venue() {
  const { VENUE } = CONFIG;
  const hasMapsUrl = VENUE.MAPS_URL && VENUE.MAPS_URL.trim() !== '';

  return (
    <section id="venue" className="full-width-section section-pad bg-[#08090C] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[var(--sky)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">CAMPUS & TRAVEL</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              مَقَرُّ المَخَيَّمِ
            </span>
          </div>

          <h2 className="heading-section text-white">
            The Venerated Grounds of{' '}
            <span className="gold-gradient-text block">
              Alathurpadi Juma Masjid
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            The 7-day residential camp takes place at the historic Alathurpadi Juma Masjid & Dars campus
            in Melmuri, Malappuram — renowned for its spiritual serenity, expansive courtyard, and scholarly heritage.
          </p>
        </div>

        {/* Real Mosque Photography Featured Card */}
        <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] aspect-[16/9] sm:aspect-[21/9] bg-[#12151D] group">
          <img
            src="/images/masjid-real.jpg"
            alt="Alathurpadi Juma Masjid Historic Campus"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-transparent" />

          {/* Floating Campus Badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#08090C]/85 backdrop-blur-md border border-white/15 text-xs font-sans font-bold text-white shadow-xl">
            <MapPin size={14} className="text-[var(--gold)]" />
            <span>ALATHOORPADI JUMA MASJID · MELMURI</span>
          </div>

          {/* Bottom Details Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-arabic text-sm text-[var(--gold)]">
                المَسْجِدُ الجَامِعُ بِالأَلْثُورْبَادِي
              </span>
              <h3 className="font-sans font-extrabold text-xl sm:text-3xl text-white">
                Alathurpadi Dars Campus
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 mt-0.5">
                Melmuri Post, Malappuram, Kerala, India — PIN 676517
              </p>
            </div>

            {hasMapsUrl && (
              <Button
                href={VENUE.MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="text-xs uppercase tracking-wider font-extrabold px-6 h-[46px] shrink-0"
              >
                Open Google Maps ↗
              </Button>
            )}
          </div>
        </div>

        {/* Transit Routes Grid in Poppins */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 sm:p-7 rounded-[24px] bg-[#12151D]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[var(--gold)]/35 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
              <Bus size={22} strokeWidth={1.75} />
            </div>
            <h4 className="font-sans font-extrabold text-base text-white mb-1.5">
              By Road / Bus
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Arrive at Malappuram KSRTC / Municipal Bus Stand, then board any Melmuri / Vengara bus directly to Alathurpadi stop (3 km).
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-[24px] bg-[#12151D]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[var(--gold)]/35 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
              <Train size={22} strokeWidth={1.75} />
            </div>
            <h4 className="font-sans font-extrabold text-base text-white mb-1.5">
              By Railway
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Angadipuram Railway Station (25 km) or Parappanangadi Railway Station (32 km). Direct bus and taxi connections are readily accessible.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-[24px] bg-[#12151D]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[var(--gold)]/35 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
              <Plane size={22} strokeWidth={1.75} />
            </div>
            <h4 className="font-sans font-extrabold text-base text-white mb-1.5">
              By Air
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Calicut International Airport (CCJ / Karipur) is located just 22 km away. Camp reception volunteers will assist arriving scholar candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

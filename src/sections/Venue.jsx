import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { Bus, Train, Plane, MapPin } from 'lucide-react';

export default function Venue() {
  const { VENUE } = CONFIG;
  const hasMapsUrl = VENUE.MAPS_URL && VENUE.MAPS_URL.trim() !== '';

  return (
    <section
      id="venue"
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              Location & Access
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              Campus Venue
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[var(--yellow)] block">
              مَقَرُّ المَخَيَّمِ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Alathurpadi Juma Masjid · Melmuri
            </span>
          </div>
        </div>

        {/* Real Masjid Photo Feature */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[var(--surface)] border border-white/10 overflow-hidden group">
          <img
            src="/images/masjid.jpg"
            alt="Alathurpadi Juma Masjid Campus"
            className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />

          {/* Details Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--yellow)]">
                Historic Mosque & Dars Seat
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Alathurpadi Juma Masjid
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] max-w-xl">
                Melmuri Post, Malappuram, Kerala, India — PIN 676517
              </p>
            </div>

            {hasMapsUrl && (
              <Button
                href={VENUE.MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="h-11 px-6 text-xs font-bold"
              >
                Open Google Maps ↗
              </Button>
            )}
          </div>
        </div>

        {/* Transit Connectivity Grid: 3 crisp tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[var(--surface)] border border-white/10 p-6 space-y-3">
            <div className="w-10 h-10 bg-[var(--orange)]/15 text-[var(--orange)] flex items-center justify-center">
              <Bus size={20} strokeWidth={1.5} />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wide text-white">
              By Road / Bus
            </h4>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Arrive at Malappuram KSRTC / Municipal Bus Stand, then take any Melmuri / Vengara bus directly to Alathurpadi stop (3 km).
            </p>
          </div>

          <div className="bg-[var(--surface)] border border-white/10 p-6 space-y-3">
            <div className="w-10 h-10 bg-[var(--yellow)]/15 text-[var(--yellow)] flex items-center justify-center">
              <Train size={20} strokeWidth={1.5} />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wide text-white">
              By Rail
            </h4>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Angadipuram (25 km) or Parappanangadi (32 km) railway stations. Direct connecting buses and taxis run regularly.
            </p>
          </div>

          <div className="bg-[var(--surface)] border border-white/10 p-6 space-y-3">
            <div className="w-10 h-10 bg-[var(--teal)]/15 text-[var(--teal)] flex items-center justify-center">
              <Plane size={20} strokeWidth={1.5} />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wide text-white">
              By Air
            </h4>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Calicut International Airport (CCJ / Karipur) is located just 22 km away. Onboarding reception volunteers assist incoming scholars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

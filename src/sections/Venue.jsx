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
      className="relative w-full bg-[var(--canvas)] text-[var(--ink)] font-['Poppins'] py-20 sm:py-28"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[var(--ink)] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--orange)] block mb-1">
              CAMPUS & CONNECTIVITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--ink)]">
              Camp Venue
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Noto_Serif_Arabic'] text-xl sm:text-2xl font-bold text-[var(--ink)] block" dir="rtl">
              مَقَرُّ المَخَيَّمِ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-bold">
              Alathurpadi Juma Masjid · Melmuri
            </span>
          </div>
        </div>

        {/* Real Masjid Photo Feature */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-white border-2 border-[var(--ink)] shadow-[6px_6px_0px_#0F172A] overflow-hidden group">
          <img
            src="/images/masjid.jpg"
            alt="Alathurpadi Juma Masjid Campus"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/95 via-[var(--ink)]/30 to-transparent" />

          {/* Details Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-xs uppercase font-black tracking-widest text-[var(--yellow)]">
                Historic Mosque & Dars Seat
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                Alathurpadi Juma Masjid
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Melmuri Post, Malappuram, Kerala, India — PIN 676517
              </p>
            </div>

            {hasMapsUrl && (
              <Button
                href={VENUE.MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="yellow"
                className="h-11 px-6 text-xs font-black shadow-[3px_3px_0px_#0F172A]"
              >
                Open Google Maps ↗
              </Button>
            )}
          </div>
        </div>

        {/* Transit Connectivity Grid: 3 crisp white tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] p-6 space-y-3">
            <div className="w-11 h-11 bg-[#FF5A1F]/15 border-2 border-[var(--orange)] text-[var(--orange)] flex items-center justify-center">
              <Bus size={22} strokeWidth={2} />
            </div>
            <h4 className="text-base font-extrabold uppercase tracking-wide text-[var(--ink)]">
              By Road / Bus
            </h4>
            <p className="text-xs text-[var(--muted)] leading-relaxed font-medium">
              Reach Malappuram KSRTC / Municipal Bus Stand, then board any Melmuri / Vengara bus directly to Alathurpadi stop (3 km).
            </p>
          </div>

          <div className="bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] p-6 space-y-3">
            <div className="w-11 h-11 bg-[#FED000]/25 border-2 border-[var(--yellow)] text-[var(--ink)] flex items-center justify-center">
              <Train size={22} strokeWidth={2} />
            </div>
            <h4 className="text-base font-extrabold uppercase tracking-wide text-[var(--ink)]">
              By Rail
            </h4>
            <p className="text-xs text-[var(--muted)] leading-relaxed font-medium">
              Angadipuram (25 km) or Parappanangadi (32 km) railway stations. Direct connecting buses and taxis run regularly.
            </p>
          </div>

          <div className="bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] p-6 space-y-3">
            <div className="w-11 h-11 bg-[#1E40AF]/15 border-2 border-[#1E40AF] text-[#1E40AF] flex items-center justify-center">
              <Plane size={22} strokeWidth={2} />
            </div>
            <h4 className="text-base font-extrabold uppercase tracking-wide text-[var(--ink)]">
              By Air
            </h4>
            <p className="text-xs text-[var(--muted)] leading-relaxed font-medium">
              Calicut International Airport (CCJ / Karipur) is located just 22 km away. ADSA reception volunteers assist incoming scholars.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

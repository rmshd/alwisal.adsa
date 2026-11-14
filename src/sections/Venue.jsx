import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { Bus, Train, Plane } from 'lucide-react';

export default function Venue() {
  const { VENUE } = CONFIG;
  const hasMapsUrl = VENUE.MAPS_URL && VENUE.MAPS_URL.trim() !== '';

  return (
    <section
      id="venue"
      className="relative w-full bg-[#FAF9F6] text-slate-900 font-['Poppins'] py-24 sm:py-32 border-t border-slate-200/80"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700">
              Campus Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Alathurpadi Campus
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Noto_Serif_Arabic'] text-xl text-amber-800 font-medium block" dir="rtl">
              مَقَرُّ المَخَيَّمِ
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Alathurpadi Juma Masjid · Melmuri
            </span>
          </div>
        </div>

        {/* Real Masjid Photo Feature */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.04)] group">
          <img
            src="/images/masjid.jpg"
            alt="Alathurpadi Juma Masjid Campus"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Details Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Historic Mosque & Dars Seat
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Alathurpadi Juma Masjid Campus
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-normal">
                Melmuri Post, Malappuram, Kerala, India — PIN 676517
              </p>
            </div>

            {hasMapsUrl && (
              <Button
                href={VENUE.MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                className="h-10 px-5 text-xs font-semibold"
              >
                Open Google Maps ↗
              </Button>
            )}
          </div>
        </div>

        {/* Transit Connectivity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Bus size={20} />
            </div>
            <h4 className="text-sm font-bold text-slate-800">
              By Road / Bus
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Arrive at Malappuram Municipal Bus Stand, then take any Melmuri / Vengara bus directly to Alathurpadi stop (3 km).
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Train size={20} />
            </div>
            <h4 className="text-sm font-bold text-slate-800">
              By Rail
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Angadipuram (25 km) or Parappanangadi (32 km) railway stations. Direct connecting buses and taxis run regularly.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Plane size={20} />
            </div>
            <h4 className="text-sm font-bold text-slate-800">
              By Air
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Calicut International Airport (CCJ / Karipur) is located just 22 km away. ADSA coordination volunteers assist incoming scholars.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

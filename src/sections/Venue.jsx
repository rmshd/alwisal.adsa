import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { Bus, Train, Plane, MapPin, ExternalLink } from 'lucide-react';

export default function Venue() {
  const { VENUE } = CONFIG;
  const hasMapsUrl = VENUE.MAPS_URL && VENUE.MAPS_URL.trim() !== '';

  return (
    <section
      id="venue"
      className="relative w-full bg-[#080E16] text-white font-['Poppins'] py-24 sm:py-32 border-t border-white/5"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#FDB913]">
              Campus Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Alathurpadi Campus
            </h2>
          </div>
          <div className="text-right">
            <span className="font-arabic text-xl sm:text-2xl text-[#FDB913] font-bold block" dir="rtl">
              مَقَرُّ المَخَيَّمِ
            </span>
            <span className="text-xs text-neutral-400 font-medium">
              Alathurpadi Juma Masjid · Melmuri
            </span>
          </div>
        </div>

        {/* Real Masjid Photo Feature */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-[#121E2D] border border-[#FDB913]/30 shadow-2xl group">
          <img
            src="/images/masjid.jpg"
            alt="Alathurpadi Juma Masjid Campus"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E16] via-[#080E16]/40 to-transparent" />

          {/* Details Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#FDB913] uppercase tracking-wider">
                Historic Mosque &amp; Dars Seat
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Alathurpadi Juma Masjid Campus
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal">
                Melmuri Post, Malappuram, Kerala, India — PIN 676517
              </p>
            </div>

            {hasMapsUrl && (
              <a
                href={VENUE.MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Transit Connectivity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121E2D]/80 border border-white/10 rounded-2xl p-6 space-y-2.5 shadow-lg backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Bus size={20} />
            </div>
            <h4 className="text-sm font-bold text-white">
              By Road / Bus
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Arrive at Malappuram Municipal Bus Stand, then take any Melmuri / Vengara bus directly to Alathurpadi stop (3 km).
            </p>
          </div>

          <div className="bg-[#121E2D]/80 border border-white/10 rounded-2xl p-6 space-y-2.5 shadow-lg backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Train size={20} />
            </div>
            <h4 className="text-sm font-bold text-white">
              By Rail
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Tirur (~32 km) or Kozhikode (~45 km) railway stations. Direct connecting buses and taxis run regularly to Melmuri.
            </p>
          </div>

          <div className="bg-[#121E2D]/80 border border-white/10 rounded-2xl p-6 space-y-2.5 shadow-lg backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Plane size={20} />
            </div>
            <h4 className="text-sm font-bold text-white">
              By Air
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Calicut International Airport (CCJ / Karipur) is located just 22 km away. ADSA reception team assists incoming scholars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

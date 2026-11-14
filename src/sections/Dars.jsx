import React, { useState } from 'react';
import DARS_LIST from '../data/dars.json';
import {
  MasjidIcon,
  KitabIcon,
  RihalIcon,
  MinaretIcon,
  LampIcon,
  StarIcon,
  PalmIcon,
  DatesIcon,
  QalamIcon,
} from '../art/Icons';

const ICON_MAP = {
  masjid: MasjidIcon,
  kitab: KitabIcon,
  rihal: RihalIcon,
  minaret: MinaretIcon,
  lamp: LampIcon,
  star: StarIcon,
  palm: PalmIcon,
  dates: DatesIcon,
  qalam: QalamIcon,
};

export default function Dars() {
  const [selectedDistrict, setSelectedDistrict] = useState('എല്ലാം');

  const districts = ['എല്ലാം', ...new Set(DARS_LIST.map((d) => d.district))];

  const filteredDars =
    selectedDistrict === 'എല്ലാം'
      ? DARS_LIST
      : DARS_LIST.filter((d) => d.district === selectedDistrict);

  return (
    <section id="dars" className="full-width-section py-24 bg-[var(--bg)]">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
              <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
                SUFFA ദർസ് നെറ്റ്‌വർക്ക്
              </span>
            </div>

            <h2 className="heading-section text-white">
              30 ദർസുകളുടെ <span className="text-[var(--yellow)]">മഹാ ശൃംഖല</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-[var(--muted)]">
              ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്ര ഉസ്താദിന്റെ മേൽനോട്ടത്തിൽ പ്രവർത്തിക്കുന്ന 30 ദർസുകൾ.
              ഓരോ ദർസിൽ നിന്നുമുള്ള തെരഞ്ഞെടുക്കപ്പെട്ട വിദ്യാർത്ഥികളാണ് ഈ ക്യാമ്പിൽ ഒന്നിക്കുന്നത്.
            </p>
          </div>

          <div className="px-5 py-2.5 rounded-2xl bg-[var(--card)] border border-white/10 text-right shrink-0">
            <span className="block font-sora font-extrabold text-2xl text-[var(--yellow)]">30 ദർസ്</span>
            <span className="text-xs text-[var(--muted)] font-body">സംസ്ഥാനത്തുടനീളം</span>
          </div>
        </div>

        {/* District Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {districts.map((dist) => (
            <button
              key={dist}
              type="button"
              onClick={() => setSelectedDistrict(dist)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
                selectedDistrict === dist
                  ? 'bg-[var(--blue)] text-white shadow-md'
                  : 'bg-[var(--card)] text-white/70 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {dist} {dist !== 'എല്ലാം' && `(${DARS_LIST.filter((d) => d.district === dist).length})`}
            </button>
          ))}
        </div>

        {/* 30 Dars Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredDars.map((item) => {
            const IconComp = ICON_MAP[item.icon] || KitabIcon;
            return (
              <div
                key={item.id}
                className="group relative bg-[var(--card)] rounded-[20px] p-5 border border-white/[0.06] hover:border-[var(--sky)]/50 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-sora font-bold text-[var(--muted)] group-hover:text-[var(--sky)] transition-colors">
                      #{String(item.id).padStart(2, '0')}
                    </span>
                    <span className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-[var(--blue)]/20 flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5 text-[var(--yellow)]" color="#FFC93C" />
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white group-hover:text-[var(--yellow)] transition-colors line-clamp-2 leading-snug">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[var(--sky)] font-heading font-medium">
                    {item.place}
                  </span>
                  <span className="text-[10px] font-sora px-2 py-0.5 rounded-full bg-white/5 text-[var(--muted)]">
                    {item.district}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

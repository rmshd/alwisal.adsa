import React from 'react';
import GUESTS_DATA from '../data/guests.json';
import Star8 from '../art/Star8';
import Checker from '../art/Checker';

export default function Guests() {
  const hostUstad = GUESTS_DATA.find((g) => g.isHost) || GUESTS_DATA[0];
  const otherGuests = GUESTS_DATA.filter((g) => !g.isHost);

  return (
    <section
      id="guests"
      className="relative w-full bg-[var(--canvas)] text-[var(--ink)] font-['Poppins'] py-20 sm:py-28"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[var(--ink)] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--orange)] block mb-1">
              EMINENT FACULTY & MENTORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--ink)]">
              Scholars & Guests
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Noto_Serif_Arabic'] text-xl sm:text-2xl font-bold text-[var(--ink)] block" dir="rtl">
              كَوْكَبَةُ العُلَمَاءِ وَالضُّيُوفِ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-bold">
              Distinguished Ulama & Lecturers
            </span>
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[220px] sm:auto-rows-[260px]">

          {/* Host Ustad: Spans 5 cols × 2 rows — Large Feature Tile */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-5 row-span-2 relative bg-white border-2 border-[var(--ink)] shadow-[6px_6px_0px_#0F172A] overflow-hidden group">
            <img
              src={hostUstad.image}
              alt={hostUstad.name}
              className="absolute inset-0 w-full h-full object-cover object-[center_16%] filter group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/95 via-[var(--ink)]/20 to-transparent" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--yellow)] text-[var(--ink)] text-[10px] font-black uppercase tracking-widest border border-[var(--ink)]">
              Chief Scholar & Guide
            </div>

            {/* Bottom Details */}
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5 text-white">
              <span className="text-[10px] uppercase font-black tracking-widest text-[var(--yellow)] block">
                {hostUstad.role}
              </span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                {hostUstad.name}
              </h3>
              <p className="text-xs text-white/70 font-medium">
                {hostUstad.org}
              </p>
            </div>
          </div>

          {/* Guest 1 (3.webp) */}
          {otherGuests[0] && (
            <div className="col-span-6 sm:col-span-3 lg:col-span-3 row-span-1 relative bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] overflow-hidden group">
              <img
                src={otherGuests[0].image}
                alt={otherGuests[0].name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                <span className="text-[9px] uppercase font-black tracking-widest text-[var(--yellow)] block">
                  {otherGuests[0].role}
                </span>
                <span className="text-xs font-bold text-white truncate block">
                  {otherGuests[0].name}
                </span>
              </div>
            </div>
          )}

          {/* Guest 2 (6.webp) */}
          {otherGuests[1] && (
            <div className="col-span-6 sm:col-span-3 lg:col-span-4 row-span-1 relative bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] overflow-hidden group">
              <img
                src={otherGuests[1].image}
                alt={otherGuests[1].name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                <span className="text-[9px] uppercase font-black tracking-widest text-[var(--yellow)] block">
                  {otherGuests[1].role}
                </span>
                <span className="text-xs font-bold text-white truncate block">
                  {otherGuests[1].name}
                </span>
              </div>
            </div>
          )}

          {/* Guest 3 (12.webp) */}
          {otherGuests[2] && (
            <div className="col-span-6 sm:col-span-3 lg:col-span-3 row-span-1 relative bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] overflow-hidden group">
              <img
                src={otherGuests[2].image}
                alt={otherGuests[2].name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                <span className="text-[9px] uppercase font-black tracking-widest text-[var(--yellow)] block">
                  {otherGuests[2].role}
                </span>
                <span className="text-xs font-bold text-white truncate block">
                  {otherGuests[2].name}
                </span>
              </div>
            </div>
          )}

          {/* Guest 4 (13.webp) */}
          {otherGuests[3] && (
            <div className="col-span-6 sm:col-span-3 lg:col-span-4 row-span-1 relative bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] overflow-hidden group">
              <img
                src={otherGuests[3].image}
                alt={otherGuests[3].name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                <span className="text-[9px] uppercase font-black tracking-widest text-[var(--yellow)] block">
                  {otherGuests[3].role}
                </span>
                <span className="text-xs font-bold text-white truncate block">
                  {otherGuests[3].name}
                </span>
              </div>
            </div>
          )}

          {/* Guest 5 (14.webp) */}
          {otherGuests[4] && (
            <div className="col-span-6 sm:col-span-4 lg:col-span-4 row-span-1 relative bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] overflow-hidden group">
              <img
                src={otherGuests[4].image}
                alt={otherGuests[4].name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                <span className="text-[9px] uppercase font-black tracking-widest text-[var(--yellow)] block">
                  {otherGuests[4].role}
                </span>
                <span className="text-xs font-bold text-white truncate block">
                  {otherGuests[4].name}
                </span>
              </div>
            </div>
          )}

          {/* Guest 6 (15.webp) */}
          {otherGuests[5] && (
            <div className="col-span-6 sm:col-span-4 lg:col-span-4 row-span-1 relative bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] overflow-hidden group">
              <img
                src={otherGuests[5].image}
                alt={otherGuests[5].name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                <span className="text-[9px] uppercase font-black tracking-widest text-[var(--yellow)] block">
                  {otherGuests[5].role}
                </span>
                <span className="text-xs font-bold text-white truncate block">
                  {otherGuests[5].name}
                </span>
              </div>
            </div>
          )}

          {/* Hamish Tile: Checkerboard */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-4 row-span-1 bg-[#FED000] border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] p-4 flex items-center justify-between">
            <div className="w-24 h-24">
              <Checker colorA="#0F172A" colorB="#FFFFFF" grid={4} className="w-full h-full" />
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-[var(--ink)] block leading-none">
                07+
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--ink)] block mt-1">
                Eminent Scholars
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

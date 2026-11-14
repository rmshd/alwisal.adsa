import React from 'react';
import GUESTS_DATA from '../data/guests.json';
import Star8 from '../art/Star8';
import NestedSquares from '../art/NestedSquares';
import Checker from '../art/Checker';

export default function Guests() {
  const hostUstad = GUESTS_DATA.find((g) => g.isHost) || GUESTS_DATA[0];
  const otherGuests = GUESTS_DATA.filter((g) => !g.isHost);

  return (
    <section
      id="guests"
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              Scholars & Guests
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              Eminent Scholarship
            </h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
            Distinguished Ulama & Mentors
          </span>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px] sm:auto-rows-[240px]">

          {/* Ustad: spans 5 cols × 2 rows — large feature tile */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-5 row-span-2 relative bg-[var(--surface)] border border-white/10 overflow-hidden group">
            <img
              src={hostUstad.image}
              alt={hostUstad.name}
              className="absolute inset-0 w-full h-full object-cover object-[center_18%] filter group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/30 to-transparent" />

            {/* Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--orange)] text-[var(--ink)] text-[10px] font-bold uppercase tracking-widest">
              Chief Scholar
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--yellow)] block">
                {hostUstad.role}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {hostUstad.name}
              </h3>
              <p className="text-xs text-[var(--muted)]">{hostUstad.org}</p>
            </div>
          </div>

          {/* Guest photos: 3 & 6 — each 1 row, 3-4 cols */}
          {otherGuests.slice(0, 2).map((guest) => (
            <div
              key={guest.id}
              className="col-span-6 sm:col-span-3 lg:col-span-3 row-span-1 relative bg-[var(--surface)] border border-white/10 overflow-hidden group"
            >
              <img
                src={guest.image}
                alt={guest.name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--yellow)] block">{guest.role}</span>
                <span className="text-xs font-semibold text-white truncate block">{guest.name}</span>
              </div>
            </div>
          ))}

          {/* Shape tile: Star8 */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-4 row-span-1 bg-[var(--surface)] border border-white/10 p-6 flex items-center justify-center hover:bg-[var(--cobalt)] transition-colors group">
            <Star8 className="w-full h-full max-w-[100px]" />
          </div>

          {/* Guests 12, 13, 14 */}
          {otherGuests.slice(2, 5).map((guest) => (
            <div
              key={guest.id}
              className="col-span-6 sm:col-span-4 lg:col-span-4 row-span-1 relative bg-[var(--surface)] border border-white/10 overflow-hidden group"
            >
              <img
                src={guest.image}
                alt={guest.name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--yellow)] block">{guest.role}</span>
                <span className="text-xs font-semibold text-white truncate block">{guest.name}</span>
              </div>
            </div>
          ))}

          {/* Guest 15 */}
          {otherGuests[5] && (
            <div className="col-span-6 sm:col-span-4 lg:col-span-4 row-span-1 relative bg-[var(--surface)] border border-white/10 overflow-hidden group">
              <img
                src={otherGuests[5].image}
                alt={otherGuests[5].name}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--yellow)] block">{otherGuests[5].role}</span>
                <span className="text-xs font-semibold text-white truncate block">{otherGuests[5].name}</span>
              </div>
            </div>
          )}

          {/* Shape tile: Checker */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-4 row-span-1 bg-[var(--surface)] border border-white/10 p-4 flex items-center justify-center hover:bg-[var(--terracotta)] transition-colors group">
            <Checker className="w-full h-full max-w-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

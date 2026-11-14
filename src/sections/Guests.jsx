import React from 'react';
import GUESTS_DATA from '../data/guests.json';
import PetalCircle from '../art/PetalCircle';
import Star8 from '../art/Star8';
import NestedSquares from '../art/NestedSquares';

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
              Eminent Scholarship
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              Guest Scholars & Mentors
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[var(--yellow)] block">
              قِيَادَةُ العُلَمَاءِ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Spiritual Direction & Guidance
            </span>
          </div>
        </div>

        {/* Mosaic Grid: rectangular photo tiles mixed with shape tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Ustad: First and Largest (Spans 6 cols on lg, 2 rows) */}
          <div className="lg:col-span-6 relative bg-[var(--surface)] border border-white/10 overflow-hidden group min-h-[440px] flex flex-col justify-end">
            <img
              src="/images/ustad.jpg"
              alt={hostUstad.name}
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 space-y-2">
              <span className="inline-block px-3 py-1 bg-[var(--orange)] text-[var(--ink)] text-[10px] font-bold uppercase tracking-widest">
                Chief Scholar & Mentor
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {hostUstad.name}
              </h3>
              <p className="text-xs text-[var(--yellow)] font-medium">
                {hostUstad.role} · {hostUstad.org}
              </p>
            </div>
          </div>

          {/* Right Column Grid: Shape Tile + Guests (6 cols on lg) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Guest 1 */}
            {otherGuests[0] && (
              <div className="relative bg-[var(--surface)] border border-white/10 overflow-hidden group min-h-[220px] flex flex-col justify-end p-5">
                <img
                  src={otherGuests[0].image}
                  alt={otherGuests[0].name}
                  className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/50 to-transparent" />
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--yellow)]">
                    {otherGuests[0].role}
                  </span>
                  <h4 className="text-sm font-bold text-white truncate">
                    {otherGuests[0].name}
                  </h4>
                  <span className="text-[11px] text-[var(--muted)] block truncate">
                    {otherGuests[0].org}
                  </span>
                </div>
              </div>
            )}

            {/* Shape Tile: PetalCircle */}
            <div className="bg-[var(--surface)] border border-white/10 p-6 flex flex-col items-center justify-center hover:bg-[var(--cobalt)] transition-colors group">
              <PetalCircle className="w-24 h-24" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--muted)] group-hover:text-white mt-3">
                Suffa Network
              </span>
            </div>

            {/* Guest 2 */}
            {otherGuests[1] && (
              <div className="relative bg-[var(--surface)] border border-white/10 overflow-hidden group min-h-[220px] flex flex-col justify-end p-5">
                <img
                  src={otherGuests[1].image}
                  alt={otherGuests[1].name}
                  className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/50 to-transparent" />
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--yellow)]">
                    {otherGuests[1].role}
                  </span>
                  <h4 className="text-sm font-bold text-white truncate">
                    {otherGuests[1].name}
                  </h4>
                  <span className="text-[11px] text-[var(--muted)] block truncate">
                    {otherGuests[1].org}
                  </span>
                </div>
              </div>
            )}

            {/* Shape Tile: Star8 */}
            <div className="bg-[var(--surface)] border border-white/10 p-6 flex flex-col items-center justify-center hover:bg-[var(--terracotta)] transition-colors group">
              <Star8 className="w-24 h-24" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--muted)] group-hover:text-white mt-3">
                Living Heritage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

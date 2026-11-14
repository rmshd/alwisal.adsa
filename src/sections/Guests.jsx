import React from 'react';
import GUESTS_DATA from '../data/guests.json';

export default function Guests() {
  const hostUstad = GUESTS_DATA.find((g) => g.isHost) || GUESTS_DATA[0];
  const otherGuests = GUESTS_DATA.filter((g) => !g.isHost);

  return (
    <section
      id="guests"
      className="relative w-full bg-[#0B1520] text-white font-['Poppins'] py-24 sm:py-32 border-t border-white/5"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#FDB913]">
              Eminent Scholarship
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Faculty &amp; Mentors
            </h2>
          </div>
          <div className="text-right">
            <span className="font-arabic text-xl sm:text-2xl text-[#FDB913] font-bold block" dir="rtl">
              كَوْكَبَةُ العُلَمَاءِ وَالضُّيُوفِ
            </span>
            <span className="text-xs text-neutral-400 font-medium">
              Distinguished Scholars &amp; Lecturers
            </span>
          </div>
        </div>

        {/* Scholar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Master Teacher Feature Card */}
          <div className="sm:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden bg-[#121E2D]/80 border border-[#FDB913]/40 shadow-2xl flex flex-col justify-between group backdrop-blur-md">
            <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative bg-[#080E16]">
              <img
                src={hostUstad.image}
                alt={hostUstad.name}
                className="w-full h-full object-cover object-[center_16%] transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FDB913] text-[#0B1520] shadow-md">
                Chief Patron &amp; Mentor
              </span>
            </div>

            <div className="p-6 space-y-1">
              <h3 className="text-base font-bold text-white">
                {hostUstad.name}
              </h3>
              <p className="text-xs text-[#FDB913] font-medium">
                {hostUstad.role}
              </p>
              <p className="text-xs text-neutral-400 pt-0.5">
                {hostUstad.org}
              </p>
            </div>
          </div>

          {/* Guest Scholars */}
          {otherGuests.map((guest) => (
            <div
              key={guest.id}
              className="rounded-3xl overflow-hidden bg-[#121E2D]/80 border border-white/10 shadow-lg flex flex-col justify-between group transition-all hover:border-[#FDB913]/40 hover:scale-[1.02] backdrop-blur-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#080E16]">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold bg-[#0B1520]/80 backdrop-blur-md text-[#FDB913] border border-[#FDB913]/30">
                  {guest.role}
                </span>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="text-sm font-bold text-white">
                  {guest.name}
                </h3>
                <p className="text-xs text-neutral-400">
                  {guest.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

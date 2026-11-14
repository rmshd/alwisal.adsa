import React from 'react';
import GUESTS_DATA from '../data/guests.json';

export default function Guests() {
  const hostUstad = GUESTS_DATA.find((g) => g.isHost) || GUESTS_DATA[0];
  const otherGuests = GUESTS_DATA.filter((g) => !g.isHost);

  return (
    <section
      id="guests"
      className="relative w-full bg-[#FAF9F6] text-slate-900 font-['Poppins'] py-24 sm:py-32 border-t border-slate-200/80"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700">
              Eminent Scholarship
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Faculty & Mentors
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Noto_Serif_Arabic'] text-xl text-amber-800 font-medium block" dir="rtl">
              كَوْكَبَةُ العُلَمَاءِ وَالضُّيُوفِ
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Distinguished Scholars & Lecturers
            </span>
          </div>
        </div>

        {/* Scholar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Master Teacher Feature Card */}
          <div className="sm:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between group">
            <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
              <img
                src={hostUstad.image}
                alt={hostUstad.name}
                className="w-full h-full object-cover object-[center_16%] transition-transform duration-700 group-hover:scale-103"
                loading="eager"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-amber-800 shadow-sm border border-white/50">
                Master Teacher
              </span>
            </div>

            <div className="p-6 space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                {hostUstad.name}
              </h3>
              <p className="text-xs text-amber-700 font-medium">
                {hostUstad.role}
              </p>
              <p className="text-xs text-slate-500 pt-0.5">
                {hostUstad.org}
              </p>
            </div>
          </div>

          {/* Guest Scholars */}
          {otherGuests.map((guest) => (
            <div
              key={guest.id}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between group transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold bg-white/90 backdrop-blur-md text-slate-700 shadow-sm border border-white/50">
                  {guest.role}
                </span>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="text-sm font-bold text-slate-800">
                  {guest.name}
                </h3>
                <p className="text-xs text-slate-500">
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

import React from 'react';
import StackedDiamonds from '../art/StackedDiamonds';

const ROUTINE_ROWS = [
  {
    num: '01',
    arabic: 'صَلاَةُ الفَجْرِ',
    title: 'Fajr Congregational Prayer',
    time: '05:30 AM',
    desc: 'Congregational dawn prayer at Alathurpadi Juma Masjid, beginning each day in presence.',
  },
  {
    num: '02',
    arabic: 'تِلاَوَةُ القُرْآنِ',
    title: 'Quranic Tilawah',
    time: '06:00 AM',
    desc: 'Silent collective recitation in the morning tranquility.',
  },
  {
    num: '03',
    arabic: 'صَحِيحُ البُخَارِيِّ',
    title: 'Sahih al-Bukhari Sabaq',
    time: '06:30 AM',
    desc: 'Direct hadith transmission and commentary delivered by Dr. C.K. Abdurahman Faizy.',
  },
];

export default function Routine() {
  return (
    <section
      id="routine"
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          {/* Left: Tall StackedDiamonds tile */}
          <div className="lg:col-span-4 bg-[var(--surface)] border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[var(--yellow)]">
                Dawn Order
              </span>
              <h3 className="text-2xl font-bold tracking-tight uppercase text-white mt-2">
                The Morning Routine
              </h3>
              <p className="text-sm text-[var(--muted)] mt-2">
                A structured dawn routine maintained consistently across all seven mornings.
              </p>
            </div>

            <div className="my-8 max-w-[200px] mx-auto w-full">
              <StackedDiamonds className="w-full h-auto" />
            </div>

            <div className="text-[11px] uppercase tracking-wider text-[var(--muted)] border-t border-white/10 pt-4 flex justify-between">
              <span>Alathurpadi Campus</span>
              <span className="text-[var(--orange)] font-semibold">05:30 – 08:00 AM</span>
            </div>
          </div>

          {/* Right: 3-row index numbered list with thin teal dividers */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
            {ROUTINE_ROWS.map((row) => (
              <div
                key={row.num}
                className="bg-[var(--surface)] border-l-4 border-l-[var(--orange)] border-y border-r border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-[#162538] transition-colors group"
              >
                <div className="flex items-start sm:items-center gap-5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--teal)] font-['Poppins']">
                    {row.num}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h4 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight group-hover:text-[var(--yellow)] transition-colors">
                        {row.title}
                      </h4>
                      <span className="font-['Reem_Kufi'] text-lg text-[var(--yellow)]">
                        {row.arabic}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-1 font-normal max-w-xl">
                      {row.desc}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1 bg-[var(--ink)] border border-[var(--teal)]/40 text-xs sm:text-sm font-semibold tracking-wider text-[var(--teal)]">
                    {row.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

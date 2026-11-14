import React from 'react';
import GUESTS_DATA from '../data/guests.json';
import { Award, BookOpen, Star } from 'lucide-react';

export default function Guests() {
  const hostUstad = GUESTS_DATA.find((g) => g.isHost) || GUESTS_DATA[0];
  const otherGuests = GUESTS_DATA.filter((g) => !g.isHost);

  return (
    <section id="guests" className="full-width-section section-pad bg-[#0B0D12] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">EMINENT SCHOLARSHIP</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              قِيَادَةُ العُلَمَاءِ
            </span>
          </div>

          <h2 className="heading-section text-white">
            Under the Stewardship of{' '}
            <span className="gold-gradient-text block">
              Distinguished Ulama
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Led personally by Dr. C.K. Abdurahman Faizy Aripra alongside the supreme council members
            and venerable scholars of Samastha Kerala Jam'iyyathul Ulama.
          </p>
        </div>

        {/* Rectangular Scholar Cards Grid (Ustad Featured Real Photo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* HOST USTAD: LARGEST REAL PHOTO CARD (Spans 6 cols) */}
          <div className="md:col-span-2 lg:col-span-6 rounded-[28px] overflow-hidden border border-[var(--gold)]/40 bg-[#12151D] relative group min-h-[460px] lg:min-h-[520px] flex flex-col justify-end shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Top VIP Badge */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08090C]/85 backdrop-blur-md border border-[var(--gold)]/30 text-xs font-sans font-bold text-[var(--gold-light)]">
              <Award size={15} />
              <span>CHIEF SCHOLAR & HOST</span>
            </div>

            {/* Real Photograph of Ustad */}
            <img
              src="/images/ustad-real.jpg"
              alt={hostUstad.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark gradient overlay for typography readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/65 to-transparent pointer-events-none" />

            {/* Name / Role Overlay at Bottom */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-2">
              <span className="font-arabic text-sm text-[var(--gold)]">
                فضيلة الشيخ الدكتور عبد الرحمن الفايزي العريبراوي
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white">
                Dr. C.K. Abdurahman Faizy Aripra
              </h3>
              <span className="text-xs font-sans font-bold text-[var(--sky)] uppercase tracking-wider">
                Chief Mudarris, Alathurpadi Dars · Member, Samastha Mushawara
              </span>
              <p className="font-sans text-xs sm:text-sm text-[var(--muted)] leading-relaxed line-clamp-2 mt-1">
                Eminent traditionist, jurist, and mentor of the 30 SUFFA affiliated Dars institutions. Conducting daily morning Bukhari Sabaq throughout the camp.
              </p>
            </div>
          </div>

          {/* OTHER GUEST SCHOLARS (Spans 6 cols) */}
          <div className="md:col-span-2 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherGuests.map((guest) => (
              <div
                key={guest.id}
                className="rounded-[22px] overflow-hidden border border-white/[0.08] hover:border-[var(--gold)]/40 bg-[#12151D]/80 backdrop-blur-xl relative group min-h-[260px] flex flex-col justify-end transition-all duration-300 shadow-sm"
              >
                <img
                  src={guest.image}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = guest.image.replace('.webp', '.svg');
                  }}
                  alt={guest.name}
                  className="absolute inset-0 w-full h-full object-contain p-4 object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/55 to-transparent pointer-events-none" />

                <div className="relative z-10 p-4.5 flex flex-col gap-1">
                  <span className="text-[10px] font-sans font-bold text-[var(--sky)] uppercase tracking-wider">
                    {guest.role}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-white line-clamp-2 group-hover:text-[var(--gold)] transition-colors">
                    {guest.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

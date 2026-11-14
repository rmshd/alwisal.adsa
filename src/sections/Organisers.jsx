import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

const ORGANISERS = [
  {
    role: 'Patron & Chairman',
    arabic: 'الرئيس الفخري',
    name: 'Dr. C.K. Abdurahman Faizy Aripra',
    title: 'Chief Mudarris & Mushawara Member, Samastha',
    icon: ShieldCheck,
    isChief: true,
  },
  {
    role: 'President, ADSA',
    arabic: 'رئيس الرابطة',
    name: 'Hafiz Muhammad Ramees Kattupara',
    title: 'Alathurpadi Dars Students Association',
    icon: UserCheck,
  },
  {
    role: 'General Secretary, ADSA',
    arabic: 'الأمين العام',
    name: 'Hafiz Muhammad Jumail Parakkanni',
    title: 'Alathurpadi Dars Students Association',
    icon: UserCheck,
  },
  {
    role: 'Treasurer, ADSA',
    arabic: 'أمين الصندوق',
    name: 'Sayyid Naseel Ahmed',
    title: 'Alathurpadi Dars Students Association',
    icon: UserCheck,
  },
];

export default function Organisers() {
  return (
    <section
      id="organisers"
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              Executive Committee
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              Leadership Council
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[var(--yellow)] block">
              اللَّجْنَةُ التَّنْفِيذِيَّةُ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Alathurpadi Dars Students Association
            </span>
          </div>
        </div>

        {/* 4 Organiser Tiles: Crisp 0px radius */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ORGANISERS.map((org, idx) => {
            const Icon = org.icon;
            return (
              <div
                key={idx}
                className={`bg-[var(--surface)] border p-6 flex flex-col justify-between space-y-6 ${org.isChief
                    ? 'border-[var(--orange)]'
                    : 'border-white/10 hover:border-white/20'
                  } transition-colors`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--yellow)]">
                      {org.role}
                    </span>
                    <span className="font-['Reem_Kufi'] text-sm text-[var(--muted)]">
                      {org.arabic}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-tight">
                    {org.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {org.title}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[var(--muted)]">
                  <span className="uppercase tracking-wider font-semibold text-[10px]">
                    ADSA Executive
                  </span>
                  <Icon size={16} strokeWidth={1.5} className="text-[var(--orange)]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import PatternBg from '../art/PatternBg';
import { CAMP_FACTS } from '../config';
import NestedDiamonds from '../art/NestedDiamonds';
import PetalCircle from '../art/PetalCircle';
import { BookOpen, Users, Building, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#0B1520] text-white pt-24 pb-20 relative font-['Poppins']">
      <PatternBg variant="dark" fadeMask />

      <div className="max-w-[1400px] mx-auto space-y-16 relative z-10" style={{ paddingInline: 'var(--gutter)' }}>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDB913]/15 border border-[#FDB913]/30 text-[#FDB913] text-xs font-bold uppercase tracking-widest">
            The Philosophy of Al-Wisal
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white">
            Connection. Scholarship. Brotherhood.
          </h1>
          <p className="font-['Reem_Kufi'] text-2xl text-[#FDB913]" dir="rtl">
            مَعْنَى الوِصَالِ: الصِّلَةُ بِالأُسْتَاذِ وَالمَنْهَجِ وَالأَخَوَّةِ
          </p>
        </div>

        {/* Concept of Wisal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#9FB0C3] leading-relaxed">
            <p>
              In classical Arabic pedagogical thought, <strong>Al-Wisal (الوصال)</strong> signifies far more than mere proximity — it is the living communion between the seeker and the spiritual preceptor, the uninterrupted chain of sacred transmission (<em>Isnad</em>), and the unbreakable covenant of fraternal love in Allah.
            </p>
            <p>
              Conceived by the <strong>Alathurpadi Dars Students Association (ADSA)</strong>, this residential sanctuary serves as the annual culmination for graduating scholars across the SUFFA Dars network. Here, graduating scholars step back from the world to sit at the feet of their master teacher, <strong>Dr. C. K. Abdurahman Faizy Aripra</strong>, renewing their vows to authentic knowledge and upright community stewardship.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-[#121E2D] border border-white/10 p-6 flex flex-col justify-between">
              <PetalCircle primary="#F28A2E" secondary="#D6452B" accent="#121E2D" className="w-16 h-16" />
              <div>
                <span className="text-xs uppercase font-bold text-[#FDB913] block">Foundation</span>
                <span className="text-sm font-bold text-white block mt-0.5">Spiritual Isnad</span>
              </div>
            </div>

            <div className="aspect-square bg-[#121E2D] border border-white/10 p-6 flex flex-col justify-between">
              <NestedDiamonds className="w-16 h-16 text-[#2B45D9]" />
              <div>
                <span className="text-xs uppercase font-bold text-[#4FB6E6] block">Fraternity</span>
                <span className="text-sm font-bold text-white block mt-0.5">SUFFA Union</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Dars & The Historic Mosque */}
        <div className="bg-[#121E2D] border border-white/10 p-8 sm:p-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#F28A2E] block mb-1">
                Historic Center
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
                Alathurpadi Dars Campus & Mosque
              </h2>
            </div>
            <Link
              to="/dars"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FDB913] hover:underline"
            >
              <span>Explore 39+ Dars Directory</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#9FB0C3] text-sm leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <Building size={18} className="text-[#F28A2E]" />
                <span>Centenary Sanctuary</span>
              </h3>
              <p>
                Alathurpadi Juma Masjid stands as a landmark of sacred learning in Melmuri, Malappuram, nurturing traditional scholars for over a century through its prestigious residential dars.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <Users size={18} className="text-[#FDB913]" />
                <span>200+ Full-Time Students</span>
              </h3>
              <p>
                The campus currently houses over 200 full-time residential students enrolled across foundational mutawaqqif to advanced dawrah hadith studies.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <BookOpen size={18} className="text-[#4FB6E6]" />
                <span>Four Eminent Usthads</span>
              </h3>
              <p>
                Four resident senior scholars maintain dawn-to-dusk sabaq circles, ensuring individualized mentoring in Qur'an, Hadith, Fiqh, and Arabic grammar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

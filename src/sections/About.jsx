import React from 'react';
import { BookOpen, Calendar, Users, Home } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0B1520] text-white font-['Poppins'] py-24 sm:py-32 border-t border-white/5"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#FDB913]">
              Vision &amp; Tradition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Sacred Knowledge Sanctuary
            </h2>
          </div>
          <div className="text-right">
            <span className="font-arabic text-xl sm:text-2xl text-[#FDB913] font-bold block" dir="rtl">
              رِحَابُ العِلْمِ وَالتَّزْكِيَةِ
            </span>
            <span className="text-xs text-neutral-400 font-medium">
              Alathurpadi Dars Campus · Melmuri
            </span>
          </div>
        </div>

        {/* 2-Column Story: Mosque Photo Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Serene Campus Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#121E2D] shadow-[0_12px_32px_rgba(0,0,0,0.4)] border border-[#FDB913]/30 group">
              <img
                src="/images/masjid.jpg"
                alt="Alathurpadi Juma Masjid Campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1520] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-semibold text-[#FDB913] uppercase tracking-wider block">
                  Historic Venue
                </span>
                <span className="text-sm font-semibold block mt-0.5">
                  Alathurpadi Juma Masjid Campus · Melmuri
                </span>
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Seven dawns, one Master Teacher, and a fellowship of seekers.
            </h3>

            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Al-Wisal ’26 is an intentional seven-day residential sanctuary curated exclusively for graduating scholars of the SUFFA Dars network. It provides a peaceful sanctuary to step back from routine responsibilities and immerse in sacred scholarship, spiritual introspection, and deep fraternal bonding.
            </p>

            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Under the direct guidance of <strong>Dr. C.K. Abdurahman Faizy</strong>, each day commences at dawn with meticulous study of <em>Sahih al-Bukhari</em>, followed by seminars on classical fiqh, contemporary community challenges, and spiritual tazkiyah.
            </p>

            {/* Core Values Pills */}
            <div className="pt-2 flex flex-wrap gap-2">
              {['Sahih al-Bukhari Sabaq', 'Classical Isnad', 'Spiritual Tazkiyah', 'Scholarly Fraternal Unity'].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-200 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Minimal Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 rounded-3xl bg-[#121E2D]/80 border border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Calendar size={20} />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FDB913] block tracking-tight">07</span>
              <span className="text-sm font-semibold text-white block mt-1">Days of Dawn Sabaq</span>
              <span className="text-xs text-neutral-400 font-normal block mt-0.5">December 24 to 30, 2026</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#121E2D]/80 border border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Users size={20} />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FDB913] block tracking-tight">100</span>
              <span className="text-sm font-semibold text-white block mt-1">Selected Scholars</span>
              <span className="text-xs text-neutral-400 font-normal block mt-0.5">Graduates across SUFFA Dars</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#121E2D]/80 border border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Home size={20} />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FDB913] block tracking-tight">100%</span>
              <span className="text-sm font-semibold text-white block mt-1">Residential Sanctuary</span>
              <span className="text-xs text-neutral-400 font-normal block mt-0.5">Complete Boarding &amp; Lodging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

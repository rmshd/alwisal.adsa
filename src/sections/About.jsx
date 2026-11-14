import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import NestedDiamonds from '../art/NestedDiamonds';
import DotGrid from '../art/DotGrid';
import { isReducedMotion } from '../lib/motion';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[var(--canvas)] text-[var(--ink)] font-['Poppins'] py-20 md:py-28"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-16">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[var(--ink)] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--orange)] block mb-1">
              THE VISION & CALLING
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--ink)]">
              Sacred Knowledge Sanctuary
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Noto_Serif_Arabic'] text-2xl font-bold text-[var(--ink)] block" dir="rtl">
              رِحَابُ العِلْمِ وَالتَّزْكِيَةِ
            </span>
            <span className="text-xs font-semibold text-[var(--muted)]">
              Alathurpadi Dars Heritage
            </span>
          </div>
        </div>

        {/* Main Grid: Left Tile Composition, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Tile Column (Hamish geometric composition) */}
          <div className="lg:col-span-5 about-reveal">
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              {/* Nested Diamonds Tile */}
              <div className="aspect-square bg-white border-2 border-[var(--ink)] p-4 shadow-[4px_4px_0px_#0F172A] flex items-center justify-center">
                <NestedDiamonds className="w-full h-full text-[var(--orange)]" />
              </div>

              {/* Dot Grid Tile */}
              <div className="aspect-square bg-[#FED000] border-2 border-[var(--ink)] p-4 shadow-[4px_4px_0px_#0F172A] flex items-center justify-center">
                <DotGrid className="w-full h-full text-[var(--ink)]" />
              </div>

              {/* Real Campus Photo Tile */}
              <div className="col-span-2 relative aspect-[16/9] overflow-hidden bg-[var(--ink)] border-2 border-[var(--ink)] shadow-[5px_5px_0px_#0F172A] group">
                <img
                  src="/images/masjid.jpg"
                  alt="Alathurpadi Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-[var(--yellow)] block">
                      Historic Venue
                    </span>
                    <span className="text-sm font-bold block">
                      Alathurpadi Juma Masjid Campus
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-mono">
                    Melmuri
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Panel */}
          <div className="lg:col-span-7 space-y-6 about-reveal text-left">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-[var(--yellow)] text-[var(--ink)] text-xs font-black uppercase tracking-wider inline-block">
                Seven Mornings · One Master Teacher
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase leading-snug text-[var(--ink)]">
                Rekindling the Classical Dars Spirit in Fellowship.
              </h3>
            </div>

            <div className="space-y-4 text-[var(--ink)]/80 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                ADSA Camp is an intentional residential retreat designed exclusively for graduated scholars of the SUFFA Dars fraternity. It creates a serene spiritual environment where graduates disconnect from worldly noise to deepen their connection with the sacred sciences.
              </p>
              <p>
                Guided each dawn by <strong>Dr. C.K. Abdurahman Faizy</strong>, the sessions encompass rigorous textual readings of <em>Sahih al-Bukhari</em>, scholarly debates on contemporary issues, and heart-to-heart discussions on leadership and community welfare.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="pt-4 border-t border-[var(--ink)]/10 flex flex-wrap gap-2">
              {['Authentic Sunnah', 'Classical Isnad', 'Spiritual Tazkiyah', 'Fraternal Bond', 'Intellectual Rigor'].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 bg-white border border-[var(--ink)]/20 text-xs font-bold text-[var(--ink)] shadow-[2px_2px_0px_#0F172A]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Bold Stat Tiles (No Dars reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 about-reveal">
          {/* Stat 1 */}
          <div className="bg-white border-2 border-[var(--ink)] p-8 flex items-center justify-between gap-4 shadow-[5px_5px_0px_#0F172A]">
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-[var(--ink)] uppercase tracking-tight">
                07
              </span>
              <span className="text-xs font-bold text-[var(--orange)] uppercase tracking-wider mt-1 block">
                Days of Dawn Sabaq
              </span>
              <span className="text-xs text-[var(--muted)] mt-0.5 block">
                Dec 20 – Dec 26, 2026
              </span>
            </div>
            <div className="w-16 h-16 bg-[#FF5A1F]/15 border-2 border-[var(--orange)] flex items-center justify-center">
              <span className="text-[var(--orange)] text-2xl font-black">VII</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white border-2 border-[var(--ink)] p-8 flex items-center justify-between gap-4 shadow-[5px_5px_0px_#0F172A]">
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-[var(--ink)] uppercase tracking-tight">
                200+
              </span>
              <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mt-1 block">
                Graduated Scholars
              </span>
              <span className="text-xs text-[var(--muted)] mt-0.5 block">
                Delegates Across Kerala
              </span>
            </div>
            <div className="w-16 h-16 bg-[#1E40AF]/15 border-2 border-[#1E40AF] flex items-center justify-center">
              <span className="text-[#1E40AF] text-2xl font-black">CC+</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white border-2 border-[var(--ink)] p-8 flex items-center justify-between gap-4 shadow-[5px_5px_0px_#0F172A]">
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-[var(--ink)] uppercase tracking-tight">
                100%
              </span>
              <span className="text-xs font-bold text-[#4D6A34] uppercase tracking-wider mt-1 block">
                Residential Camp
              </span>
              <span className="text-xs text-[var(--muted)] mt-0.5 block">
                Full Boarding & Guidance
              </span>
            </div>
            <div className="w-16 h-16 bg-[#4D6A34]/15 border-2 border-[#4D6A34] flex items-center justify-center">
              <span className="text-[#4D6A34] text-2xl font-black">∞</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

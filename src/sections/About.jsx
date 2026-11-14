import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import NestedDiamonds from '../art/NestedDiamonds';
import DotGrid from '../art/DotGrid';
import BlockNumeral from '../art/BlockNumeral';
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
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 md:py-32 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-20">
        {/* Main Grid: Left Tile Column (4 cols), Right Editorial Text (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Tile Column: NestedDiamonds, DotGrid, masjid.jpg tile */}
          <div className="lg:col-span-4 about-reveal">
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:mx-0">
              <div className="aspect-square bg-[var(--surface)] border border-white/10 p-3">
                <NestedDiamonds className="w-full h-full" />
              </div>
              <div className="aspect-square bg-[var(--surface)] border border-white/10 p-3">
                <DotGrid className="w-full h-full" />
              </div>
              <div className="col-span-2 relative aspect-[16/9] overflow-hidden bg-[var(--surface)] border border-white/10 group">
                <img
                  src="/images/masjid.jpg"
                  alt="Alathurpadi Campus"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[10px] uppercase font-bold tracking-widest text-[var(--yellow)]">
                  Alathurpadi Dars Campus
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Panel */}
          <div className="lg:col-span-8 space-y-6 about-reveal text-left">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
                About The Camp
              </span>
              <span className="text-white/20">/</span>
              <span className="font-['Reem_Kufi'] text-lg text-[var(--yellow)]">
                العِلْمُ نُورٌ
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight text-white">
              Seven mornings, <span className="text-[var(--orange)]">one Ustad.</span>
            </h2>

            <div className="space-y-4 max-w-2xl text-[var(--muted)] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                An immersive spiritual and academic sanctuary for graduated scholars of the SUFFA Dars network.
              </p>
              <p>
                Seven intensive dawn sessions dedicated to Sahih al-Bukhari, foundational classical sciences, and the living heritage of our pious predecessors.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Stats as Big Orange BlockNumerals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 about-reveal">
          {/* Stat 1: 07 Days */}
          <div className="bg-[var(--surface)] border border-white/10 p-6 flex items-center justify-between gap-4">
            <div>
              <span className="block text-2xl font-bold text-white uppercase tracking-tight">Days</span>
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider">Dawn to Dusk Sessions</span>
            </div>
            <BlockNumeral value="07" className="h-16 w-auto shrink-0" />
          </div>

          {/* Stat 2: 30 Dars */}
          <div className="bg-[var(--surface)] border border-white/10 p-6 flex items-center justify-between gap-4">
            <div>
              <span className="block text-2xl font-bold text-white uppercase tracking-tight">Dars Network</span>
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider">Affiliated Institutes</span>
            </div>
            <BlockNumeral value="30" className="h-16 w-auto shrink-0" />
          </div>

          {/* Stat 3: 200+ Students */}
          <div className="bg-[var(--surface)] border border-white/10 p-6 flex items-center justify-between gap-4">
            <div>
              <span className="block text-2xl font-bold text-white uppercase tracking-tight">Students</span>
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider">Convening Scholars</span>
            </div>
            <BlockNumeral value="200+" className="h-16 w-auto shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

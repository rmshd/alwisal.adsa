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
        {/* Main Grid: Left Tile Column, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Tile Column */}
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
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              About The Camp
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight text-white">
              Seven mornings,<br />
              <span className="text-[var(--orange)]">one Ustad.</span>
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

        {/* 3 Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 about-reveal">
          <div className="bg-[var(--surface)] border border-white/10 p-8 flex items-center justify-between gap-4">
            <div>
              <span className="block text-3xl font-black text-white uppercase tracking-tight">7</span>
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider mt-1 block">Days</span>
            </div>
            <div className="w-16 h-16 bg-[var(--orange)]/10 border border-[var(--orange)]/30 flex items-center justify-center">
              <span className="text-[var(--orange)] text-2xl font-black">VII</span>
            </div>
          </div>

          <div className="bg-[var(--surface)] border border-white/10 p-8 flex items-center justify-between gap-4">
            <div>
              <span className="block text-3xl font-black text-white uppercase tracking-tight">40</span>
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider mt-1 block">Dars Network</span>
            </div>
            <div className="w-16 h-16 bg-[var(--yellow)]/10 border border-[var(--yellow)]/30 flex items-center justify-center">
              <span className="text-[var(--yellow)] text-2xl font-black">XL</span>
            </div>
          </div>

          <div className="bg-[var(--surface)] border border-white/10 p-8 flex items-center justify-between gap-4">
            <div>
              <span className="block text-3xl font-black text-white uppercase tracking-tight">200+</span>
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider mt-1 block">Scholars</span>
            </div>
            <div className="w-16 h-16 bg-[var(--teal)]/10 border border-[var(--teal)]/30 flex items-center justify-center">
              <span className="text-[var(--teal)] text-2xl font-black">∞</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

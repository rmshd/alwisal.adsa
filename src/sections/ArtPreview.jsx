import React from 'react';
import AlWisalMark from '../art/AlWisalMark';
import PetalCircle from '../art/PetalCircle';
import NestedDiamonds from '../art/NestedDiamonds';
import NestedSquares from '../art/NestedSquares';
import Checker from '../art/Checker';
import DotGrid from '../art/DotGrid';
import Star8 from '../art/Star8';
import StripeBlock from '../art/StripeBlock';
import StackedDiamonds from '../art/StackedDiamonds';
import BlockNumeral from '../art/BlockNumeral';
import CalligraphyBand from '../art/CalligraphyBand';
import CircuitLines from '../art/CircuitLines';

export default function ArtPreview() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--white)] font-['Poppins'] p-8 md:p-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="border-b border-white/10 pb-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[var(--yellow)] font-semibold">
              Design System · Wisal Mosaic
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-1">Art Library & Shape Preview</h1>
          </div>
          <a
            href="/"
            className="px-5 py-2.5 rounded-full bg-[var(--orange)] text-[var(--ink)] font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            ← Back to Site
          </a>
        </header>

        {/* Section 1: Al-Wisal Wordmark */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">01 · Al-Wisal Kufic Wordmark</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--surface)] p-6 flex flex-col items-center justify-center space-y-4">
              <AlWisalMark variant="hero" color="var(--yellow)" className="w-56 h-auto" />
              <span className="text-xs text-[var(--muted)]">Variant: hero (Yellow)</span>
            </div>
            <div className="bg-[var(--surface)] p-6 flex flex-col items-center justify-center space-y-4">
              <AlWisalMark variant="nav" color="var(--orange)" className="w-36 h-auto" />
              <span className="text-xs text-[var(--muted)]">Variant: nav (Orange)</span>
            </div>
            <div className="bg-[var(--surface)] p-6 flex flex-col items-center justify-center space-y-4">
              <AlWisalMark variant="draw" color="var(--white)" className="w-48 h-auto" />
              <span className="text-xs text-[var(--muted)]">Variant: draw (White stroke)</span>
            </div>
          </div>
        </section>

        {/* Section 2: Geometric Tiles */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">02 · Geometric Shape Tiles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="bg-[var(--surface)] aspect-square p-2 flex flex-col items-center justify-between">
              <PetalCircle className="w-full h-full" />
              <span className="text-[10px] text-[var(--muted)] mt-1">PetalCircle</span>
            </div>
            <div className="bg-[var(--surface)] aspect-square p-2 flex flex-col items-center justify-between">
              <NestedDiamonds className="w-full h-full" />
              <span className="text-[10px] text-[var(--muted)] mt-1">NestedDiamonds</span>
            </div>
            <div className="bg-[var(--surface)] aspect-square p-2 flex flex-col items-center justify-between">
              <NestedSquares className="w-full h-full" />
              <span className="text-[10px] text-[var(--muted)] mt-1">NestedSquares</span>
            </div>
            <div className="bg-[var(--surface)] aspect-square p-2 flex flex-col items-center justify-between">
              <Checker className="w-full h-full" />
              <span className="text-[10px] text-[var(--muted)] mt-1">Checker</span>
            </div>
            <div className="bg-[var(--surface)] aspect-square p-2 flex flex-col items-center justify-between">
              <DotGrid className="w-full h-full" />
              <span className="text-[10px] text-[var(--muted)] mt-1">DotGrid</span>
            </div>
            <div className="bg-[var(--surface)] aspect-square p-2 flex flex-col items-center justify-between">
              <Star8 className="w-full h-full" />
              <span className="text-[10px] text-[var(--muted)] mt-1">Star8</span>
            </div>
            <div className="bg-[var(--surface)] aspect-square p-2 flex flex-col items-center justify-between">
              <StripeBlock className="w-full h-full" />
              <span className="text-[10px] text-[var(--muted)] mt-1">StripeBlock</span>
            </div>
            <div className="bg-[var(--surface)] aspect-square p-2 flex flex-col items-center justify-between">
              <StackedDiamonds className="w-full h-full" />
              <span className="text-[10px] text-[var(--muted)] mt-1">StackedDiamonds</span>
            </div>
          </div>
        </section>

        {/* Section 3: Block Numerals 01-07, 30, 200+ */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
            03 · Block Numerals (Orange Stencil with Teal Line Fill)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {['01', '02', '03', '04', '05', '06', '07'].map((num) => (
              <div key={num} className="bg-[var(--surface)] p-4 flex flex-col items-center justify-center space-y-2">
                <BlockNumeral value={num} className="h-16 w-auto" />
                <span className="text-[11px] text-[var(--yellow)] font-semibold">DAY {num}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-[var(--surface)] p-6 flex items-center justify-around">
              <BlockNumeral value="30" className="h-20 w-auto" />
              <div className="text-right">
                <div className="text-2xl font-bold text-[var(--white)]">30 DARS</div>
                <div className="text-xs text-[var(--muted)]">Total Dars Affiliates</div>
              </div>
            </div>
            <div className="bg-[var(--surface)] p-6 flex items-center justify-around">
              <BlockNumeral value="200+" className="h-20 w-auto" />
              <div className="text-right">
                <div className="text-2xl font-bold text-[var(--white)]">200+ DELEGATES</div>
                <div className="text-xs text-[var(--muted)]">Registered Students</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Calligraphy Band */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
            04 · Calligraphy Band (Terracotta Dual-Tone Scribble Pattern)
          </h2>
          <div className="bg-[var(--cream)] p-6 rounded-none space-y-4">
            <div className="text-[var(--ink)] text-xs font-semibold tracking-wider uppercase">Applied over Cream Surface</div>
            <CalligraphyBand className="w-full h-12" />
            <CalligraphyBand className="w-full h-8" />
          </div>
        </section>

        {/* Section 5: Circuit Lines */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
            05 · Circuit Lines (Mustard #E2A32E with 45° Bends & Round Nodes)
          </h2>
          <div className="bg-[var(--ink)] border border-white/10 p-6 space-y-4">
            <CircuitLines className="w-full h-24" />
          </div>
        </section>
      </div>
    </div>
  );
}

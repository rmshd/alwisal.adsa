import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';
import {
  KitabIcon,
  RihalIcon,
  QalamIcon,
  LampIcon,
  StarIcon,
  PalmIcon,
  MasjidIcon,
  FlowerA,
} from '../art/Icons';
import { smoothScrollTo } from '../lib/motion';

export default function Closing() {
  return (
    <section id="closing" className="full-width-section pt-24 pb-12 bg-[var(--bg)] relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[var(--blue)]/15 blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center text-center gap-12 max-w-4xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--yellow)]/10 border border-[var(--yellow)]/30 text-xs font-sora font-extrabold uppercase tracking-widest text-[var(--yellow)]">
          ★ GRAND FINALE & DUA
        </div>

        {/* Section Heading */}
        <h2 className="heading-section text-white max-w-2xl leading-tight">
          വിജ്ഞാനവും ആത്മീയതയും ഒന്നിക്കുന്ന <span className="text-[var(--yellow)]">മഹാ സമാപനം</span>
        </h2>

        {/* USTAD CUT-OUT PORTRAIT RE-ASSEMBLED WITH 7 SHAPES WRAPPING AROUND */}
        <div className="relative w-full max-w-[380px] my-6 select-none">
          {/* Flat Blue Blob Behind */}
          <div className="absolute inset-0 -top-4 -left-4 w-[110%] h-[112%] bg-[var(--blue)] rounded-[45%_55%_52%_48%/52%_48%_52%_48%] -z-10 opacity-90 shadow-2xl" />

          {/* 7 SHAPES RE-ASSEMBLED AROUND USTAD */}
          {/* 1. Kitab Top Left */}
          <div className="absolute -top-6 -left-6 z-20 animate-pulse">
            <KitabIcon className="w-12 h-12" color="#FFC93C" />
          </div>

          {/* 2. Star Top Right */}
          <div className="absolute -top-4 -right-4 z-20">
            <StarIcon className="w-10 h-10" color="#FFC93C" />
          </div>

          {/* 3. Lamp Mid Left */}
          <div className="absolute top-24 -left-8 z-20">
            <LampIcon className="w-9 h-9" color="#6CB4FF" />
          </div>

          {/* 4. Qalam Mid Right */}
          <div className="absolute top-28 -right-6 z-20">
            <QalamIcon className="w-9 h-9" color="#F0584B" />
          </div>

          {/* 5. Rihal Lower Left */}
          <div className="absolute bottom-12 -left-6 z-20">
            <RihalIcon className="w-10 h-10" color="#2F6BFF" />
          </div>

          {/* 6. Palm Lower Right */}
          <div className="absolute bottom-14 -right-6 z-20">
            <PalmIcon className="w-11 h-11" color="#27A66B" />
          </div>

          {/* 7. Masjid Bottom Center Overlap */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#1E1F22] p-2 rounded-2xl border border-[var(--yellow)]/40 shadow-xl flex items-center gap-2">
              <MasjidIcon className="w-8 h-8" color="#27A66B" />
              <FlowerA className="w-6 h-6" color="#F0584B" />
            </div>
          </div>

          {/* Ustad Cutout Image */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src="/images/ustad-cutout.webp"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/ustad-cutout.svg';
              }}
              alt={CONFIG.USTAD_NAME}
              className="w-full max-w-[320px] h-auto object-contain filter drop-shadow-2xl"
              width="320"
              height="380"
              loading="lazy"
            />
          </div>
        </div>

        {/* Closing Dua Line */}
        <div className="max-w-2xl px-6 py-6 rounded-[22px] bg-[var(--card)]/90 border border-white/10 shadow-lg text-center">
          <p className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--yellow)] leading-relaxed">
            "അല്ലാഹു നമ്മുടെ ഈ ഒത്തുചേരൽ ദീനിനും ഉമ്മത്തിനും ഉപകാരപ്രദമാക്കട്ടെ. ആമീൻ."
          </p>
          <span className="font-sora text-xs text-[var(--muted)] mt-2 block">
            — {CONFIG.USTAD_NAME} (സമാപന ദുആ വചനം)
          </span>
        </div>

        {/* Final Primary CTA Button */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <Button
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('#register');
            }}
            variant="primary"
            className="text-lg px-10 h-[56px] shadow-2xl"
          >
            രജിസ്റ്റർ ചെയ്യൂ (സൗജന്യം)
          </Button>

          <span className="text-xs font-sora text-[var(--muted)]">
            പരിമിതമായ സീറ്റുകൾ · മുൻഗണനാ ക്രമത്തിൽ തെരഞ്ഞെടുപ്പ്
          </span>
        </div>

        {/* SITE FOOTER */}
        <footer className="w-full pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[var(--muted)]">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="ADSA Logo" className="w-9 h-9" />
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-white text-base leading-tight">
                ADSA ക്യാമ്പ് 2026
              </span>
              <span className="text-[11px] font-sora text-[var(--sky)] leading-tight">
                SUFFA Dars Network · Aripra
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-heading font-medium">
            <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('#about'); }} className="hover:text-white transition-colors">
              ക്യാമ്പ്
            </a>
            <a href="#schedule" onClick={(e) => { e.preventDefault(); smoothScrollTo('#schedule'); }} className="hover:text-white transition-colors">
              ദിനചര്യ
            </a>
            <a href="#guests" onClick={(e) => { e.preventDefault(); smoothScrollTo('#guests'); }} className="hover:text-white transition-colors">
              അതിഥികൾ
            </a>
            <a href="#dars" onClick={(e) => { e.preventDefault(); smoothScrollTo('#dars'); }} className="hover:text-white transition-colors">
              ദർസുകൾ
            </a>
            <a href="#venue" onClick={(e) => { e.preventDefault(); smoothScrollTo('#venue'); }} className="hover:text-white transition-colors">
              വേദി
            </a>
            <a href="#register" onClick={(e) => { e.preventDefault(); smoothScrollTo('#register'); }} className="text-[var(--yellow)] hover:underline">
              രജിസ്ട്രേഷൻ
            </a>
          </div>

          {/* Credit Line */}
          <div className="text-xs font-sora text-center sm:text-right text-white/50">
            © 2026 ADSA. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
}

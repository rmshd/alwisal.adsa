import React from 'react';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import AlWisalMark from '../art/AlWisalMark';
import StackedDiamonds from '../art/StackedDiamonds';
import SocialLinksRow from '../components/SocialIcons';
import { smoothScrollTo } from '../lib/motion';
import { Phone } from 'lucide-react';

export default function Closing() {
  const hasPhone = CONTACT.phones && CONTACT.phones.length > 0 && CONTACT.phones[0].number;
  const primaryPhone = hasPhone ? CONTACT.phones[0] : null;

  return (
    <section id="closing" className="w-full bg-[var(--ink)] font-['Poppins'] text-white">
      {/* Statement Slide */}
      <div
        className="relative w-full py-24 sm:py-32 border-t border-white/10 overflow-hidden"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: StackedDiamonds & Tight crop of Ustad photo tile */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 items-center">
            {/* StackedDiamonds */}
            <div className="bg-[var(--surface)] border border-white/10 p-6 flex items-center justify-center aspect-[3/4]">
              <StackedDiamonds className="w-full h-auto max-h-[300px]" />
            </div>

            {/* Tight Crop of Ustad Photo as Tile */}
            <div className="bg-[var(--surface)] border border-white/10 aspect-[3/4] relative overflow-hidden group">
              <img
                src="/images/ustad.jpg"
                alt="Sheikh Alathurpadi"
                className="w-full h-full object-cover object-[center_18%] filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--yellow)] block">
                  Usthad
                </span>
                <span className="text-xs font-semibold text-white truncate block">
                  Dr. C.K. Abdurahman Faizy
                </span>
              </div>
            </div>
          </div>

          {/* Right: Huge Yellow Arabic "العِلْمُ نُورٌ" + Statement + Register */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-['Reem_Kufi'] text-5xl sm:text-7xl xl:text-8xl text-[var(--yellow)] block leading-tight tracking-wider">
              العِلْمُ نُورٌ
            </span>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                See you at the camp.
              </h2>
              <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl leading-relaxed">
                Seven days of dawn-to-dusk companionship in knowledge, brotherhood, and devotion at Alathurpadi Juma Masjid campus.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('#register');
                }}
                variant="primary"
                className="h-12 px-8 text-xs font-bold"
              >
                Register Now · Free Entry
              </Button>

              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('#hero');
                }}
                className="text-xs uppercase tracking-widest font-semibold text-[var(--muted)] hover:text-white transition-colors py-2"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/10 bg-[#070E16]" style={{ paddingInline: 'var(--gutter)' }}>
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <AlWisalMark variant="nav" color="var(--yellow)" className="w-24 h-auto" />
              <div className="border-l border-white/15 pl-3">
                <span className="font-bold text-sm text-white tracking-widest block">
                  ADSA CAMP 2026
                </span>
                <span className="text-[10px] text-[var(--muted)] tracking-wider">
                  Alathurpadi Dars Students Association
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <SocialLinksRow className="flex items-center gap-2.5" />
            </div>

            {/* Phone */}
            {hasPhone && (
              <a
                href={`tel:${primaryPhone.number}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-[var(--yellow)] transition-colors py-2 px-4 rounded-full bg-white/5 border border-white/10"
              >
                <Phone size={14} strokeWidth={1.5} className="text-[var(--yellow)]" />
                <span>{primaryPhone.display || primaryPhone.number}</span>
              </a>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
            <p>
              © 2026 Alathurpadi Dars Students Association (ADSA). All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('#about'); }} className="hover:text-white">Camp</a>
              <a href="#routine" onClick={(e) => { e.preventDefault(); smoothScrollTo('#routine'); }} className="hover:text-white">Routine</a>
              <a href="#programme" onClick={(e) => { e.preventDefault(); smoothScrollTo('#programme'); }} className="hover:text-white">Programme</a>
              <a href="#guests" onClick={(e) => { e.preventDefault(); smoothScrollTo('#guests'); }} className="hover:text-white">Guests</a>
              <a href="#dars" onClick={(e) => { e.preventDefault(); smoothScrollTo('#dars'); }} className="hover:text-white">Dars Network</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

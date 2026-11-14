import React from 'react';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import SocialLinksRow from '../components/SocialIcons';
import { smoothScrollTo } from '../lib/motion';
import { Phone, Heart } from 'lucide-react';

export default function Closing() {
  const hasPhone = CONTACT.phones && CONTACT.phones.length > 0 && CONTACT.phones[0].number;
  const primaryPhone = hasPhone ? CONTACT.phones[0] : null;

  return (
    <section id="closing" className="w-full bg-[#08090C] relative overflow-hidden">
      {/* FULL-BLEED GRAND SPIRITUAL CLOSING BANNER WITH REAL PHOTO */}
      <div
        className="relative w-full min-h-[540px] lg:min-h-[620px] flex items-center justify-center overflow-hidden border-t border-white/[0.08]"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        {/* Full-bleed Photo Background with Mosque and Atmospheric Lighting */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/masjid-real.jpg"
            alt="Alathurpadi Campus Grounds"
            className="w-full h-full object-cover filter brightness-[0.16] contrast-125 scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/80 to-[#08090C]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/10 blur-[180px] pointer-events-none" />
        </div>

        {/* Content: Real Ustad Portrait + Sacred Prayer + Final CTA */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-7 py-16 sm:py-20">
          {/* Ustad Real Photo Avatar */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[var(--gold)] via-yellow-200 to-[var(--gold-dark)] shadow-[0_0_40px_rgba(223,177,91,0.35)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#12151D] border-2 border-[#08090C]">
              <img
                src="/images/ustad-real.jpg"
                alt="Dr. C.K. Abdurahman Faizy Aripra"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="ds-eyebrow">VALEDICTORY DUA</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              دُعَاءُ الخِتَامِ
            </span>
          </div>

          {/* Sacred Arabic Closing Prayer */}
          <div className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-[var(--gold-light)] leading-relaxed max-w-3xl [text-wrap:balance]">
            "اللَّهُمَّ اجْعَلْ جَمْعَنَا هَٰذَا جَمْعًا مَرْحُومًا، وَتَفَرُّقَنَا مِنْ بَعْدِهِ تَفَرُّقًا مَعْصُومًا"
          </div>

          <p className="font-sans font-bold text-lg sm:text-2xl text-white [text-wrap:balance] max-w-2xl">
            "May Allah make this sacred gathering a perpetual vessel of knowledge, mercy, and service to the Ummah. Amin."
          </p>

          <div className="flex flex-col items-center gap-1">
            <span className="font-sans font-extrabold text-base sm:text-lg text-white">
              Dr. C.K. Abdurahman Faizy Aripra
            </span>
            <span className="text-xs font-sans text-[var(--sky)] uppercase tracking-wider font-semibold">
              Chief Mudarris, Alathurpadi Dars · Member, Samastha Mushawara
            </span>
          </div>

          <div className="pt-2">
            <Button
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#register');
              }}
              variant="primary"
              className="text-xs uppercase tracking-widest font-extrabold px-10 h-[56px] shadow-[0_0_35px_rgba(223,177,91,0.4)]"
            >
              Register Candidate Scholar (Free Entry)
            </Button>
          </div>
        </div>
      </div>

      {/* CLEAN MINIMAL FOOTER */}
      <footer className="full-width-section py-12 border-t border-white/[0.08] text-sm text-[var(--muted)] bg-[#050608]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* ADSA Name & Malayalam Title */}
          <div className="flex flex-col text-center md:text-left">
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <span className="font-sans font-extrabold text-xl text-white">
                ADSA CAMP 2026
              </span>
              <span className="font-arabic text-sm text-[var(--gold)]">
                مخيم أَدْسَا
              </span>
            </div>
            <span className="font-sans text-xs text-white/80 mt-0.5">
              Alathurpadi Dars Students Association
            </span>
            <span className="text-[11px] font-sans text-[var(--sky)]">
              SUFFA Dars Network · Melmuri, Malappuram, Kerala
            </span>
          </div>

          {/* Social Icons */}
          <SocialLinksRow className="flex items-center gap-3" />

          {/* Phone Link */}
          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-white/80 hover:text-[var(--gold)] transition-colors py-2.5 px-5 rounded-full bg-white/5 border border-white/10"
              aria-label={`Call ${primaryPhone.display || primaryPhone.number}`}
            >
              <Phone size={14} strokeWidth={1.5} className="text-[var(--gold)]" />
              <span>{primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-white/[0.05] text-xs font-sans">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
            <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('#about'); }} className="hover:text-white transition-colors">
              About
            </a>
            <a href="#schedule" onClick={(e) => { e.preventDefault(); smoothScrollTo('#schedule'); }} className="hover:text-white transition-colors">
              Schedule
            </a>
            <a href="#guests" onClick={(e) => { e.preventDefault(); smoothScrollTo('#guests'); }} className="hover:text-white transition-colors">
              Scholars
            </a>
            <a href="#dars" onClick={(e) => { e.preventDefault(); smoothScrollTo('#dars'); }} className="hover:text-white transition-colors">
              Dars Network
            </a>
            <a href="#register" onClick={(e) => { e.preventDefault(); smoothScrollTo('#register'); }} className="text-[var(--gold)] hover:underline font-bold">
              Register Free
            </a>
          </div>

          <div className="text-center sm:text-right text-white/40">
            © 2026 ADSA. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
}

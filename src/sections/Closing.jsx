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
    <section id="closing" className="w-full bg-[#0B0D12] relative overflow-hidden">
      {/* FULL-BLEED GRAND SPIRITUAL CLOSING BANNER WITH USTAD */}
      <div
        className="relative w-full min-h-[500px] lg:min-h-[580px] flex items-center justify-center overflow-hidden border-t border-white/[0.08]"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        {/* Full-bleed Photo Background with Atmospheric Lighting */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/gallery/campus-dawn.svg"
            alt="ആലത്തൂർപടി കാമ്പസ് പ്രഭാതം"
            className="w-full h-full object-cover filter brightness-[0.2] contrast-125 scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/75 to-[#0B0D12]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[var(--yellow)]/10 blur-[160px] pointer-events-none" />
        </div>

        {/* Content: Ustad's Portrait + Sacred Prayer + Final CTA */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-7 py-16 sm:py-20">
          {/* Ustad Portrait Avatar */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_35px_rgba(255,201,60,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#141722] border-2 border-[#0B0D12]">
              <img
                src="/images/ustad-cutout.webp"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/ustad-cutout.svg';
                }}
                alt={CONFIG.USTAD_NAME}
                className="w-full h-full object-contain pt-1"
                loading="lazy"
              />
            </div>
          </div>

          <span className="ds-eyebrow">മഹാ സമാപന പ്രാർത്ഥന</span>

          <p className="font-heading font-extrabold text-[clamp(24px,4vw,44px)] leading-[1.25] text-white [text-wrap:balance]">
            "അല്ലാഹു നമ്മുടെ ഈ ഒത്തുചേരൽ ദീനിനും ഉമ്മത്തിനും ഉപകാരപ്രദമാക്കട്ടെ.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              ആമീൻ.
            </span>"
          </p>

          <div className="flex flex-col items-center gap-1">
            <span className="font-heading font-bold text-base sm:text-lg text-white">
              — {CONFIG.USTAD_NAME}
            </span>
            <span className="text-xs font-sora text-[var(--sky)] tracking-wider uppercase">
              ചീഫ് മുദരിസ് & മുഖ്യ രക്ഷാധികാരി
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
              className="text-base px-10 h-[56px] shadow-[0_0_30px_rgba(255,201,60,0.35)]"
            >
              രജിസ്റ്റർ ചെയ്യൂ (സൗജന്യം)
            </Button>
          </div>
        </div>
      </div>

      {/* CLEAN MINIMAL FOOTER */}
      <footer className="full-width-section py-12 border-t border-white/[0.08] text-sm text-[var(--muted)] bg-[#08090D]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* ADSA Name & Malayalam Title */}
          <div className="flex flex-col text-center md:text-left">
            <span className="font-heading font-extrabold text-xl text-white">
              ADSA
            </span>
            <span className="font-body text-sm text-white/90">
              ആലത്തൂർപ്പടി ദർസ് സ്റ്റുഡന്റ്സ് അസോസിയേഷൻ
            </span>
            <span className="text-xs font-sora text-[var(--sky)] mt-0.5">
              SUFFA Dars Network · Malappuram, Kerala
            </span>
          </div>

          {/* Social Icons */}
          <SocialLinksRow className="flex items-center gap-3" />

          {/* Phone Link */}
          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              className="inline-flex items-center gap-2 text-xs font-sora text-white/80 hover:text-[var(--yellow)] transition-colors py-2.5 px-5 rounded-full bg-white/5 border border-white/10"
              aria-label={`ഫോൺ ചെയ്യുക ${primaryPhone.display || primaryPhone.number}`}
            >
              <Phone size={14} strokeWidth={1.5} className="text-amber-400" />
              <span>{primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-white/[0.05] text-xs">
          <div className="flex flex-wrap items-center justify-center gap-6 font-heading font-medium">
            <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('#about'); }} className="hover:text-white transition-colors">
              ക്യാമ്പ്
            </a>
            <a href="#daily" onClick={(e) => { e.preventDefault(); smoothScrollTo('#daily'); }} className="hover:text-white transition-colors">
              ദിനചര്യ
            </a>
            <a href="#schedule" onClick={(e) => { e.preventDefault(); smoothScrollTo('#schedule'); }} className="hover:text-white transition-colors">
              ഷെഡ്യൂൾ
            </a>
            <a href="#guests" onClick={(e) => { e.preventDefault(); smoothScrollTo('#guests'); }} className="hover:text-white transition-colors">
              അതിഥികൾ
            </a>
            <a href="#dars" onClick={(e) => { e.preventDefault(); smoothScrollTo('#dars'); }} className="hover:text-white transition-colors">
              ദർസുകൾ
            </a>
            <a href="#register" onClick={(e) => { e.preventDefault(); smoothScrollTo('#register'); }} className="text-[var(--yellow)] hover:underline">
              രജിസ്ട്രേഷൻ
            </a>
          </div>

          <div className="font-sora text-center sm:text-right text-white/50">
            © 2026 ADSA. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
}

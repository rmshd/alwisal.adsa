import React from 'react';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import SocialLinksRow from '../components/SocialIcons';
import { smoothScrollTo } from '../lib/motion';
import { Phone } from 'lucide-react';

export default function Closing() {
  const hasPhone = CONTACT.phones && CONTACT.phones.length > 0 && CONTACT.phones[0].number;
  const primaryPhone = hasPhone ? CONTACT.phones[0] : null;

  return (
    <section id="closing" className="w-full bg-[var(--bg)] relative overflow-hidden">
      {/* FULL-BLEED PHOTO BANNER WITH ONE LARGE LINE & FINAL CTA */}
      <div className="relative w-full min-h-[440px] lg:min-h-[520px] flex items-center justify-center overflow-hidden border-t border-white/[0.08]" style={{ paddingInline: 'var(--gutter)' }}>
        {/* Full-bleed Photo Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/gallery/campus-dawn.svg"
            alt="ആലത്തൂർപടി കാമ്പസ് പ്രഭാതം"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/60 to-[var(--bg)]" />
        </div>

        {/* Content: One Large Line & Final CTA */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8 py-16">
          <span className="ds-eyebrow">മഹാ സമാപന ദുആ</span>

          <p className="font-heading font-bold text-[clamp(24px,3.8vw,48px)] leading-[1.25] text-white [text-wrap:balance]">
            "അല്ലാഹു നമ്മുടെ ഈ ഒത്തുചേരൽ ദീനിനും ഉമ്മത്തിനും ഉപകാരപ്രദമാക്കട്ടെ.{' '}
            <span className="text-[var(--yellow)]">ആമീൻ.</span>"
          </p>

          <span className="font-body text-base text-[var(--muted)]">
            — {CONFIG.USTAD_NAME}
          </span>

          <div className="pt-2">
            <Button
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#register');
              }}
              variant="primary"
              className="text-lg px-9 h-[54px]"
            >
              രജിസ്റ്റർ ചെയ്യൂ
            </Button>
          </div>
        </div>
      </div>

      {/* CLEAN MINIMAL FOOTER */}
      <footer className="full-width-section py-12 border-t border-white/[0.08] text-sm text-[var(--muted)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* ADSA Name & Malayalam Title */}
          <div className="flex flex-col text-center md:text-left">
            <span className="font-heading font-bold text-lg text-white">
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
              className="inline-flex items-center gap-2 text-xs font-sora text-white/80 hover:text-[var(--yellow)] transition-colors py-2 px-4 rounded-full bg-white/5 border border-white/10"
              aria-label={`ഫോൺ ചെയ്യുക ${primaryPhone.display || primaryPhone.number}`}
            >
              <Phone size={14} strokeWidth={1.5} />
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

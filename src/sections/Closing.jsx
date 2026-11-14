import React from 'react';
import { CONTACT } from '../config';
import SocialLinksRow from '../components/SocialIcons';
import { smoothScrollTo } from '../lib/motion';
import { Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programme', href: '#programme' },
  { label: 'Guests', href: '#guests' },
  { label: 'Dars', href: '#dars' },
  { label: 'Register', href: '#register' },
  { label: 'Venue', href: '#venue' },
];

export default function Closing() {
  const hasPhone = CONTACT.phones && CONTACT.phones.length > 0 && CONTACT.phones[0].number;
  const primaryPhone = hasPhone ? CONTACT.phones[0] : null;

  return (
    <footer
      id="closing"
      className="w-full bg-[#070E16] font-['Poppins'] text-white relative"
    >
      {/* Top orange accent bar */}
      <div className="w-full h-[3px] bg-[var(--orange)]" />

      {/* Main footer body */}
      <div
        className="max-w-[1400px] mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-5">
          <img
            src="/images/logo.png"
            alt="ADSA Camp"
            className="h-12 w-auto self-start"
            loading="lazy"
          />
          <div>
            <p className="font-black text-lg uppercase tracking-widest text-white leading-tight">
              ADSA CAMP 2026
            </p>
            <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
              Alathurpadi Dars Students Association<br />
              7-Day Residential Knowledge Camp
            </p>
          </div>
          {/* Date + location pill */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 bg-[var(--surface)] border border-white/10 text-[11px] font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse" />
            <span className="text-white uppercase">Dec 20 – 26, 2026</span>
            <span className="text-[var(--muted)]">·</span>
            <span className="text-[var(--yellow)] uppercase">Alathurpadi</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--orange)]">
            Navigate
          </span>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); smoothScrollTo(href); }}
                className="text-sm text-[var(--muted)] hover:text-white transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3: Contact & Social */}
        <div className="flex flex-col gap-5">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--orange)]">
            Connect
          </span>

          {/* Social icons */}
          <SocialLinksRow className="flex items-center gap-3 flex-wrap" />

          {/* Phone */}
          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              className="inline-flex items-center gap-2.5 self-start text-sm font-semibold text-white/80 hover:text-[var(--yellow)] transition-colors group"
            >
              <span className="w-9 h-9 flex items-center justify-center bg-[var(--surface)] border border-white/10 group-hover:border-[var(--yellow)]/40 transition-colors">
                <Phone size={15} strokeWidth={1.5} className="text-[var(--yellow)]" />
              </span>
              <span>{primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}

          {/* Arabic tagline */}
          <p className="font-['Noto_Serif_Arabic'] text-xl text-[var(--yellow)] leading-relaxed" dir="rtl">
            العِلْمُ نُورٌ
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1400px] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <p>© 2026 Alathurpadi Dars Students Association (ADSA). All rights reserved.</p>
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); smoothScrollTo('#hero'); }}
          className="hover:text-white transition-colors uppercase tracking-widest font-semibold text-[10px]"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

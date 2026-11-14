import React from 'react';
import { CONTACT } from '../config';
import SocialLinksRow from '../components/SocialIcons';
import { smoothScrollTo } from '../lib/motion';
import { Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Camp', href: '#about' },
  { label: 'Programme', href: '#programme' },
  { label: 'Guests', href: '#guests' },
  { label: 'Venue', href: '#venue' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Register', href: '#register' },
];

export default function Closing() {
  const hasPhone = CONTACT.phones && CONTACT.phones.length > 0 && CONTACT.phones[0].number;
  const primaryPhone = hasPhone ? CONTACT.phones[0] : null;

  return (
    <footer
      id="closing"
      className="w-full bg-[var(--canvas)] font-['Poppins'] text-[var(--ink)] relative border-t-2 border-[var(--ink)]"
    >
      {/* Top bold orange accent bar */}
      <div className="w-full h-1.5 bg-[var(--orange)]" />

      {/* Main footer body */}
      <div
        className="max-w-[1400px] mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b-2 border-[var(--ink)]/10"
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
            <p className="font-black text-xl uppercase tracking-widest text-[var(--ink)] leading-tight">
              ADSA CAMP 2026
            </p>
            <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed font-medium">
              Alathurpadi Dars Students Association<br />
              7-Day Residential Knowledge Intensive
            </p>
          </div>

          {/* Date + location pill */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 bg-white border-2 border-[var(--ink)] shadow-[2px_2px_0px_#0F172A] text-[11px] font-black tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[var(--orange)]" />
            <span className="text-[var(--ink)] uppercase">Dec 20 – 26, 2026</span>
            <span className="text-[var(--muted)]">·</span>
            <span className="text-[var(--orange)] uppercase">Alathurpadi</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] uppercase tracking-[0.2em] font-black text-[var(--orange)]">
            Explore
          </span>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); smoothScrollTo(href); }}
                className="text-sm text-[var(--ink)]/80 hover:text-[var(--orange)] transition-colors font-bold"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3: Connect & Contact */}
        <div className="flex flex-col gap-5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-black text-[var(--orange)]">
            Connect
          </span>

          {/* Social icons */}
          <SocialLinksRow className="flex items-center gap-3 flex-wrap" />

          {/* Phone */}
          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              className="inline-flex items-center gap-3 self-start text-sm font-bold text-[var(--ink)] hover:text-[var(--orange)] transition-colors group"
            >
              <span className="w-10 h-10 flex items-center justify-center bg-white border-2 border-[var(--ink)] shadow-[2px_2px_0px_#0F172A] group-hover:bg-[var(--yellow)] transition-colors">
                <Phone size={16} strokeWidth={2} className="text-[var(--ink)]" />
              </span>
              <span>{primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}

          {/* Arabic Tagline */}
          <p className="font-['Noto_Serif_Arabic'] text-2xl font-bold text-[var(--ink)] leading-relaxed" dir="rtl">
            العِلْمُ نُورٌ وَالهُدَى ضِيَاءٌ
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-[1400px] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)] font-medium"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <p>© 2026 Alathurpadi Dars Students Association (ADSA). All rights reserved.</p>
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); smoothScrollTo('#hero'); }}
          className="hover:text-[var(--orange)] transition-colors uppercase tracking-widest font-black text-[11px]"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

import React from 'react';
import { CONTACT } from '../config';
import SocialLinksRow from '../components/SocialIcons';
import { smoothScrollTo } from '../lib/motion';
import { Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Camp', href: '#about' },
  { label: 'Programme', href: '#programme' },
  { label: 'Scholars', href: '#guests' },
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
      className="w-full bg-[#FAF9F6] font-['Poppins'] text-slate-800 relative border-t border-slate-200/80"
    >
      {/* Main footer body */}
      <div
        className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-200/80"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-4">
          <img
            src="/images/logo.png"
            alt="ADSA Camp"
            className="h-10 w-auto self-start object-contain"
            loading="lazy"
          />
          <div>
            <p className="font-bold text-base text-slate-900 tracking-tight">
              ADSA CAMP 2026
            </p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Alathurpadi Dars Students Association<br />
              Seven-Day Residential Knowledge Intensive
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            <span>Dec 24 – 30, 2026 · Alathurpadi</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            Navigation
          </span>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); smoothScrollTo(href); }}
                className="text-sm text-slate-600 hover:text-amber-800 transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3: Connect & Contact */}
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            Connect
          </span>

          {/* Social icons */}
          <SocialLinksRow className="flex items-center gap-2.5 flex-wrap" />

          {/* Phone */}
          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              className="inline-flex items-center gap-2.5 self-start text-xs font-semibold text-slate-700 hover:text-amber-800 transition-colors py-2 px-3.5 rounded-full bg-white border border-slate-200 shadow-sm"
            >
              <Phone size={14} className="text-amber-700" />
              <span>{primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}

          {/* Arabic Tagline */}
          <p className="font-['Noto_Serif_Arabic'] text-xl text-amber-800/90 font-medium" dir="rtl">
            العِلْمُ نُورٌ وَالهُدَى ضِيَاءٌ
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-6xl mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <p>© 2026 Alathurpadi Dars Students Association (ADSA). All rights reserved.</p>
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); smoothScrollTo('#hero'); }}
          className="hover:text-slate-900 transition-colors font-medium text-xs"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

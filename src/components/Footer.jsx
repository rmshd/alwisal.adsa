import React from 'react';
import { Link } from 'react-router-dom';
import AlWisalMark from '../art/AlWisalMark';
import SocialLinksRow from './SocialIcons';
import { CAMP_FACTS } from '../config';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080E16] border-t border-white/10 text-white font-['Poppins'] relative z-10">
      {/* Top Accent Strip */}
      <div className="w-full h-1 bg-gradient-to-r from-[#F28A2E] via-[#FDB913] to-[#2B45D9]" />

      <div
        className="max-w-[1400px] mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-10"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        {/* Brand & Mission */}
        <div className="space-y-4 md:col-span-1">
          <AlWisalMark variant="nav" color="#F28A2E" secondaryColor="#FDB913" />
          <p className="text-xs text-[#9FB0C3] leading-relaxed">
            {CAMP_FACTS.tagline} — A premier seven-day residential knowledge intensive organised by ADSA for graduating scholars of the SUFFA Dars fraternity.
          </p>
          <div className="pt-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDB913] px-2.5 py-1 bg-white/5 border border-white/10 rounded">
              DEC 24 – 30, 2026
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#F28A2E]">
            Camp Directory
          </h4>
          <ul className="space-y-2 text-xs text-[#9FB0C3] list-none p-0 m-0">
            <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Al-Wisal & ADSA</Link></li>
            <li><Link to="/schedule" className="hover:text-white transition-colors">7-Day Academic Schedule</Link></li>
            <li><Link to="/dars" className="hover:text-white transition-colors">39+ SUFFA Dars Directory</Link></li>
            <li><Link to="/guide" className="hover:text-white transition-colors">User & Travel Guide</Link></li>
          </ul>
        </div>

        {/* Portals & Student Access */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#FDB913]">
            Portals & Access
          </h4>
          <ul className="space-y-2 text-xs text-[#9FB0C3] list-none p-0 m-0">
            <li><Link to="/login" className="hover:text-white transition-colors">Student Login</Link></li>
            <li><Link to="/dashboard" className="hover:text-white transition-colors">My Pass & Certificate</Link></li>
            <li>
              <Link to="/admin/login" className="inline-flex items-center gap-1.5 hover:text-white text-[#F28A2E] font-semibold transition-colors">
                <ShieldCheck size={14} />
                <span>Admin Portal Login</span>
              </Link>
            </li>
          </ul>
          <div className="pt-2">
            <span className="text-[10px] text-[#9FB0C3]/80 bg-white/5 border border-white/10 px-2 py-1 rounded inline-block">
              DEMO · Data stays in this browser
            </span>
          </div>
        </div>

        {/* Verified Public Contact */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#4FB6E6]">
            Campus Contact
          </h4>
          <div className="space-y-2.5 text-xs text-[#9FB0C3]">
            <a href={`tel:${CAMP_FACTS.contact.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-[#FDB913] shrink-0" />
              <span>{CAMP_FACTS.contact.phone}</span>
            </a>
            <a href={`mailto:${CAMP_FACTS.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-[#FDB913] shrink-0" />
              <span>{CAMP_FACTS.contact.email}</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-[#FDB913] shrink-0 mt-0.5" />
              <span>{CAMP_FACTS.venueFull}</span>
            </div>
          </div>

          <div className="pt-2">
            <SocialLinksRow className="flex items-center gap-2 flex-wrap" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-[1400px] mx-auto py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9FB0C3]"
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <p>© 2026 Alathurpadi Dars Students Association (ADSA). All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link to="/admin" className="hover:text-white text-[11px] underline">Admin Demo</Link>
          <a href="#hero" className="hover:text-white uppercase tracking-wider font-semibold text-[11px]">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}

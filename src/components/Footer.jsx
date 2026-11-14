import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ArrowUpRight,
  ExternalLink,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { SocialIcon } from './SocialIcons';
import { CAMP } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      className="border-t border-[#FDB913]/20 pt-16 pb-24 md:pb-16 px-4 bg-[#080E16] text-white font-['Poppins']"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Dars & ADSA Official Emblems Banner */}
        <div className="p-6 rounded-3xl bg-[#121E2D]/60 border border-[#FDB913]/25 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
            {/* ADSA Logo Emblem */}
            <div className="w-14 h-14 rounded-2xl bg-[#0B1520] p-2 flex items-center justify-center border border-[#FDB913]/30 shadow-md">
              <img
                src="/images/adsa-logo.svg"
                alt="ADSA Emblem"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Dars Typography */}
            <div className="flex flex-col text-left">
              <img
                src="/images/dars-typo.svg"
                alt="Alathurpadi Dars Typography"
                className="h-9 w-auto object-contain brightness-125"
              />
              <span className="text-[11px] text-neutral-400 mt-1 font-medium">
                Alathurpadi Dars, Melmuri, Malappuram · Kerala 676503
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-[#FDB913]/15 text-[#FDB913] border border-[#FDB913]/30 font-semibold tracking-wide">
              Official Residential Camp 2026
            </span>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Brand & Socials Column */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0B1520] p-2 flex items-center justify-center border border-[#FDB913]/30">
                <img
                  src="/images/favicon.png"
                  alt="Al-Wisal '26"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <h3 className="font-['Poppins'] text-xl font-bold text-white leading-tight">
                  AL-WISAL ’26
                </h3>
                <span className="font-arabic text-xs text-[#FDB913]">
                  الوصال — معسكر الانتقال والقيادة
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              &ldquo;{CAMP.tagline}&rdquo; — A week-long transition and leadership residential camp organized by Alathurpadi Dars Students Association (ADSA) for graduating scholars of SUFFA Dars.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="w-5 h-5 relative opacity-80 shrink-0">
                <img
                  src="/images/adsa-logo.svg"
                  alt="ADSA"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[11px] text-neutral-400 font-medium">
                Alathurpadi Dars Students Association (ADSA)
              </span>
            </div>

            {/* Social Media Buttons */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-2.5">
                Official Channels
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={CAMP.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook: /alathoorpadidars"
                  title="Facebook /alathoorpadidars"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 text-neutral-300 hover:text-blue-400 flex items-center justify-center transition-all hover:scale-105"
                >
                  <SocialIcon id="facebook" className="w-4 h-4" />
                </a>

                <a
                  href={CAMP.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram: @alathurpadi_dars"
                  title="Instagram @alathurpadi_dars"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500 text-neutral-300 hover:text-pink-400 flex items-center justify-center transition-all hover:scale-105"
                >
                  <SocialIcon id="instagram" className="w-4 h-4" />
                </a>

                <a
                  href={CAMP.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X: @ALATHURPADARS"
                  title="X (Twitter) @ALATHURPADARS"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-neutral-400 text-neutral-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 text-xs font-bold"
                >
                  𝕏
                </a>

                <a
                  href={CAMP.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Official Website: alathurpadidars.in"
                  title="alathurpadidars.in"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#FDB913] text-neutral-300 hover:text-[#FDB913] flex items-center justify-center transition-all hover:scale-105"
                >
                  <Globe className="w-4 h-4" />
                </a>

                <a
                  href={CAMP.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Campus Location on Google Maps"
                  title="Alathurpadi Dars on Google Maps"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#FDB913] text-neutral-300 hover:text-[#FDB913] flex items-center justify-center transition-all hover:scale-105"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs text-left">
            <div className="space-y-2.5">
              <span className="font-bold uppercase tracking-wider text-neutral-400 text-[10px]">
                Camp Event
              </span>
              <ul className="space-y-2 list-none p-0 m-0">
                <li>
                  <Link to="/" className="text-neutral-300 hover:text-[#FDB913] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-neutral-300 hover:text-[#FDB913] font-semibold transition-colors flex items-center gap-1">
                    <span>About Ustad &amp; Camp</span>
                  </Link>
                </li>
                <li>
                  <Link to="/schedule" className="text-neutral-300 hover:text-[#FDB913] transition-colors">
                    7-Day Schedule
                  </Link>
                </li>
                <li>
                  <Link to="/dars" className="text-neutral-300 hover:text-[#FDB913] transition-colors">
                    39+ SUFFA Dars
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="font-bold uppercase tracking-wider text-neutral-400 text-[10px]">
                Student &amp; Desk
              </span>
              <ul className="space-y-2 list-none p-0 m-0">
                <li>
                  <Link to="/guide" className="text-[#FDB913] hover:text-[#FDB913]/80 font-bold transition-colors flex items-center gap-1">
                    <span>Interactive Guide</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#FDB913]/20 text-[#FDB913] font-mono">Guide</span>
                  </Link>
                </li>
                <li>
                  <a href="#register" className="text-neutral-300 hover:text-[#FDB913] font-semibold transition-colors">
                    Register Now
                  </a>
                </li>
                <li>
                  <Link to="/login" className="text-neutral-300 hover:text-[#FDB913] transition-colors">
                    Student Pass
                  </Link>
                </li>
                <li>
                  <Link to="/admin/login" className="text-[#FDB913] hover:underline flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Admin Portal</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Support Column */}
          <div className="md:col-span-4 space-y-3 text-left">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase tracking-wider text-neutral-400 text-[10px]">
                Helpdesk &amp; Support
              </span>
              <span className="text-[10px] text-[#FDB913] font-medium">ADSA Desk</span>
            </div>

            <div className="space-y-2">
              {/* Phone Button */}
              <a
                href={`tel:${CAMP.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FDB913] transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FDB913]/10 text-[#FDB913] flex items-center justify-center border border-[#FDB913]/20 shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-mono font-bold text-neutral-200">
                      {CAMP.contact.phone}
                    </div>
                    <div className="text-[10px] text-neutral-400">Call Helpdesk</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FDB913] transition-colors shrink-0 ml-1" />
              </a>

              {/* WhatsApp Button */}
              <a
                href={CAMP.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 hover:border-emerald-500 transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-mono font-bold text-emerald-400">
                      {CAMP.contact.phone}
                    </div>
                    <div className="text-[10px] text-neutral-400">Chat on WhatsApp</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 transition-colors shrink-0 ml-1" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${CAMP.contact.email}?subject=Al-Wisal%20'26%20Inquiry`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FDB913] transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div className="w-7 h-7 rounded-lg bg-[#FDB913]/10 text-[#FDB913] flex items-center justify-center border border-[#FDB913]/20 shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="truncate">
                    <div className="font-mono text-[11px] font-bold text-neutral-200 truncate" title={CAMP.contact.email}>
                      {CAMP.contact.email}
                    </div>
                    <div className="text-[10px] text-neutral-400">Official Email</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FDB913] transition-colors shrink-0 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Info & Back to Top Row */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-neutral-400 text-left">
            <span className="font-semibold text-white">
              December 24–30, 2026
            </span>
            <span>•</span>
            <span>Alathurpadi Dars Campus, Melmuri, Malappuram</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 hover:border-[#FDB913] text-neutral-300 hover:text-[#FDB913] transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © 2026 AL-WISAL ’26. Organized by Alathurpadi Dars Students Association (ADSA).
          </div>
          <div className="flex items-center gap-2">
            <span>Rooted in Ilm. Towards the Beloved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

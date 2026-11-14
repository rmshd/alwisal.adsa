import React from 'react';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import SocialLinksRow from '../components/SocialIcons';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const hasPhone = CONTACT.phones && CONTACT.phones.length > 0 && CONTACT.phones[0].number;
  const primaryPhone = hasPhone ? CONTACT.phones[0] : null;

  const hasWhatsApp = CONTACT.whatsapp && CONTACT.whatsapp.number;
  const hasEmail = CONTACT.email && CONTACT.email.trim() !== '';
  const hasAddress = CONTACT.addressMalayalam && CONTACT.addressMalayalam.trim() !== '';
  const hasMapsUrl = CONTACT.mapsUrl && CONTACT.mapsUrl.trim() !== '';

  return (
    <section id="contact" className="full-width-section section-pad bg-[#08090C] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-14 max-w-5xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">HELP & SUPPORT</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              التَّوَاصُلُ وَالمَعْلُومَاتُ
            </span>
          </div>

          <h2 className="heading-section text-white">
            Reach Out to the{' '}
            <span className="gold-gradient-text block">
              ADSA Camp Helpdesk
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] max-w-2xl">
            For candidate registration questions, arrival support, and general campus inquiries, contact our official coordination office.
          </p>
        </div>

        {/* Large Tap-Friendly Call & WhatsApp Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {hasWhatsApp && (
            <a
              href={CONFIG.WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center justify-center gap-3 h-[54px] px-8 rounded-full font-sans font-bold text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-98"
            >
              <MessageCircle size={20} strokeWidth={1.75} />
              <span>Connect on WhatsApp</span>
            </a>
          )}

          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              aria-label={`Call Helpline ${primaryPhone.display || primaryPhone.number}`}
              className="inline-flex items-center justify-center gap-3 h-[54px] px-8 rounded-full font-sans font-bold text-sm bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-white/30 text-white backdrop-blur-md shadow-sm transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-98"
            >
              <Phone size={18} strokeWidth={1.75} className="text-[var(--gold)]" />
              <span>Call {primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}
        </div>

        {/* Address Card & Details */}
        <div className="p-7 sm:p-9 rounded-[26px] bg-[#12151D]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-13 h-13 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/25 flex items-center justify-center shrink-0 text-[var(--gold)] shadow-[0_0_15px_rgba(223,177,91,0.1)]">
              <MapPin size={24} strokeWidth={1.75} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-sans font-bold text-[var(--sky)] tracking-wider uppercase">
                {CONFIG.ORGANIZATION_EN}
              </span>
              <h3 className="font-sans font-extrabold text-xl text-white mt-0.5">
                Alathurpadi Dars Office
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[var(--muted)] mt-1 leading-relaxed">
                Alathurpadi Juma Masjid, Melmuri Post, Malappuram, Kerala, India — PIN 676517
              </p>
              {hasEmail && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-xs font-sans text-[var(--sky)] hover:underline mt-2 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
                  aria-label={`Email ${CONTACT.email}`}
                >
                  <Mail size={14} strokeWidth={1.5} />
                  <span>{CONTACT.email}</span>
                </a>
              )}
            </div>
          </div>

          {hasMapsUrl && (
            <Button
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="text-xs uppercase font-extrabold tracking-wider px-6 h-[46px] shrink-0"
            >
              Google Maps
            </Button>
          )}
        </div>

        {/* Social Links Row */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <span className="text-xs font-sans font-bold text-white/50 tracking-widest uppercase">
            Official Social Media Handles
          </span>
          <SocialLinksRow className="flex items-center gap-3" />
        </div>
      </div>
    </section>
  );
}

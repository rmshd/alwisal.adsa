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
  const hasMapsUrl = CONTACT.mapsUrl && CONTACT.mapsUrl.trim() !== '';

  return (
    <section
      id="contact"
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              Assistance & Helpdesk
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              Contact & Inquiries
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[var(--yellow)] block">
              التَّوَاصُلُ وَالمَعْلُومَاتُ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Camp Coordination Desk
            </span>
          </div>
        </div>

        {/* Action Buttons: WhatsApp & Call */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {hasWhatsApp && (
            <a
              href={CONFIG.WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on WhatsApp"
              className="inline-flex items-center justify-center gap-3 h-12 px-8 rounded-full font-bold text-xs uppercase tracking-wider bg-[var(--orange)] text-[var(--ink)] hover:brightness-110 transition-all cursor-pointer select-none"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              <span>Connect on WhatsApp</span>
            </a>
          )}

          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              aria-label={`Call Helpline ${primaryPhone.display || primaryPhone.number}`}
              className="inline-flex items-center justify-center gap-3 h-12 px-8 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all cursor-pointer select-none"
            >
              <Phone size={18} strokeWidth={1.5} className="text-[var(--yellow)]" />
              <span>Call {primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}
        </div>

        {/* Address Card */}
        <div className="bg-[var(--surface)] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[var(--orange)]/15 text-[var(--orange)] flex items-center justify-center shrink-0">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--yellow)]">
                {CONFIG.ORGANIZATION_EN}
              </span>
              <h3 className="text-lg font-bold uppercase text-white">
                Alathurpadi Dars Office
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Alathurpadi Juma Masjid, Melmuri Post, Malappuram, Kerala, India — PIN 676517
              </p>
              {hasEmail && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-xs text-[var(--yellow)] hover:underline inline-flex items-center gap-1.5 pt-1"
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
              variant="secondary"
              className="h-11 px-6 text-xs font-bold shrink-0"
            >
              Google Maps ↗
            </Button>
          )}
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-col items-center gap-3 pt-4 border-t border-white/10">
          <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-bold">
            Official Social Channels
          </span>
          <SocialLinksRow className="flex items-center gap-3" />
        </div>
      </div>
    </section>
  );
}

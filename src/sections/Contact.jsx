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
    <section id="contact" className="full-width-section section-pad bg-[#0E1118] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full bg-[var(--yellow)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 lg:gap-14 max-w-5xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="ds-eyebrow">സഹായവും വിവരങ്ങളും</span>

          <h2 className="heading-h2 text-white">
            കൂടുതൽ വിവരങ്ങൾക്ക്{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              ബന്ധപ്പെടുക
            </span>
          </h2>

          <p className="body-editorial max-w-2xl">
            ക്യാമ്പ് സംബന്ധമായ വിവരങ്ങൾക്കും സംശയങ്ങൾക്കും ആലത്തൂർപടി ദർസ് ഓഫീസുമായോ ADSA ഹെൽപ്പ്‌ഡെസ്കുമായോ നേരിട്ട് ബന്ധപ്പെടാം.
          </p>
        </div>

        {/* Large Tap-Friendly Call & WhatsApp Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {hasWhatsApp && (
            <a
              href={CONFIG.WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp-ൽ ചാറ്റ് ചെയ്യുക"
              className="inline-flex items-center justify-center gap-3 h-[54px] px-8 rounded-full font-heading font-bold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-98"
            >
              <MessageCircle size={20} strokeWidth={1.75} />
              <span>WhatsApp-ൽ ചാറ്റ് ചെയ്യൂ</span>
            </a>
          )}

          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              aria-label={`ഫോൺ വിളിക്കുക ${primaryPhone.display || primaryPhone.number}`}
              className="inline-flex items-center justify-center gap-3 h-[54px] px-8 rounded-full font-heading font-bold text-base bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-white/30 text-white backdrop-blur-md shadow-sm transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-98"
            >
              <Phone size={18} strokeWidth={1.75} className="text-amber-400" />
              <span>{primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}
        </div>

        {/* Address Card & Details */}
        <div className="p-7 sm:p-9 rounded-[24px] bg-[#141722]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-13 h-13 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400 shadow-[0_0_15px_rgba(255,201,60,0.1)]">
              <MapPin size={24} strokeWidth={1.75} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-sora font-semibold text-[var(--sky)] tracking-wider uppercase">
                {CONFIG.ORGANIZATION_EN}
              </span>
              <h3 className="font-heading font-bold text-xl text-white mt-0.5">
                {CONFIG.ORGANIZATION}
              </h3>
              {hasAddress && (
                <p className="font-body text-sm sm:text-base text-[var(--muted)] mt-1.5 leading-relaxed">
                  {CONTACT.addressMalayalam}
                </p>
              )}
              {hasEmail && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-xs font-sora text-[var(--sky)] hover:underline mt-2 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
                  aria-label={`ഇമെയിൽ അയക്കുക ${CONTACT.email}`}
                >
                  <Mail size={14} strokeWidth={1.5} />
                  <span>{CONTACT.email}</span>
                </a>
              )}
            </div>
          </div>

          {/* Google Maps Button ONLY if mapsUrl is not empty */}
          {hasMapsUrl && (
            <Button
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="text-sm px-6 h-[46px] shrink-0"
            >
              Google Maps
            </Button>
          )}
        </div>

        {/* Social Links Row */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <span className="text-xs font-sora font-semibold text-white/50 tracking-widest uppercase">
            ഔദ്യോഗിക സോഷ്യൽ മീഡിയ പേജുകൾ
          </span>
          <SocialLinksRow className="flex items-center gap-3" />
        </div>
      </div>
    </section>
  );
}

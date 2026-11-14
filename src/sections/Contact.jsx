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
    <section id="contact" className="full-width-section section-pad bg-[#222428] border-t border-white/[0.08]">
      <div className="flex flex-col gap-12 lg:gap-14 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="ds-eyebrow">സഹായവും വിവരങ്ങളും</span>

          <h2 className="heading-h2 text-white">
            കൂടുതൽ വിവരങ്ങൾക്ക് <span className="text-[var(--yellow)]">ബന്ധപ്പെടുക</span>
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
              className="inline-flex items-center justify-center gap-3 h-[52px] px-8 rounded-full font-heading font-bold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] active:scale-98"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
              <span>WhatsApp-ൽ ചാറ്റ് ചെയ്യൂ</span>
            </a>
          )}

          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              aria-label={`ഫോൺ വിളിക്കുക ${primaryPhone.display || primaryPhone.number}`}
              className="inline-flex items-center justify-center gap-3 h-[52px] px-8 rounded-full font-heading font-bold text-base bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] active:scale-98"
            >
              <Phone size={18} strokeWidth={1.5} />
              <span>{primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}
        </div>

        {/* Address Card & Details */}
        <div className="ds-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[12px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-sora font-semibold text-[var(--sky)] tracking-wider uppercase">
                {CONFIG.ORGANIZATION_EN}
              </span>
              <h3 className="font-heading font-bold text-xl text-white mt-1">
                {CONFIG.ORGANIZATION}
              </h3>
              {hasAddress && (
                <p className="font-body text-sm sm:text-base text-[var(--muted)] mt-1.5 leading-[1.4]">
                  {CONTACT.addressMalayalam}
                </p>
              )}
              {hasEmail && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-xs font-sora text-[var(--sky)] hover:underline mt-2 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--blue)]"
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
              className="text-sm px-6 h-[44px] shrink-0"
            >
              Google Maps
            </Button>
          )}
        </div>

        {/* Social Links Row */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <span className="text-xs font-sora font-semibold text-white/60 tracking-wider uppercase">
            ഔദ്യോഗിക സോഷ്യൽ മീഡിയ പേജുകൾ
          </span>
          <SocialLinksRow className="flex items-center gap-3" />
        </div>
      </div>
    </section>
  );
}

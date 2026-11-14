import React from 'react';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import SocialLinksRow from '../components/SocialIcons';
import { MasjidIcon } from '../art/Icons';

export default function Contact() {
  const hasPhone = CONTACT.phones && CONTACT.phones.length > 0 && CONTACT.phones[0].number;
  const primaryPhone = hasPhone ? CONTACT.phones[0] : null;

  const hasWhatsApp = CONTACT.whatsapp && CONTACT.whatsapp.number;
  const hasEmail = CONTACT.email && CONTACT.email.trim() !== '';
  const hasAddress = CONTACT.addressMalayalam && CONTACT.addressMalayalam.trim() !== '';
  const hasMapsUrl = CONTACT.mapsUrl && CONTACT.mapsUrl.trim() !== '';

  return (
    <section id="contact" className="full-width-section py-24 bg-[#23252A] border-t border-white/[0.05]">
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
            <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
              സഹായവും വിവരങ്ങളും
            </span>
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
          </div>

          <h2 className="heading-section text-white">
            കൂടുതൽ വിവരങ്ങൾക്ക് <span className="text-[var(--yellow)]">ബന്ധപ്പെടുക</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[var(--muted)] max-w-2xl">
            ക്യാമ്പ് സംബന്ധമായ വിവരങ്ങൾക്കും സംശയങ്ങൾക്കും ആലത്തൂർപടി ദർസ് ഓഫീസുമായോ ADSA ഹെൽപ്പ്‌ഡെസ്കുമായോ നേരിട്ട് ബന്ധപ്പെടാം.
          </p>
        </div>

        {/* Large Tap-Friendly Call & WhatsApp Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {hasWhatsApp && (
            <a
              href={CONFIG.WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp-ൽ ചാറ്റ് ചെയ്യുക"
              className="inline-flex items-center justify-center gap-3 h-[56px] px-8 rounded-full font-heading font-bold text-base sm:text-lg bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl transition-all duration-200 hover:-translate-y-1 active:scale-98 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)]"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.04 7.4 8.78 7.68C8.52 7.96 7.78 8.65 7.78 10.05C7.78 11.45 8.8 12.8 8.94 13C9.08 13.2 10.96 16.07 13.84 17.31C14.52 17.61 15.06 17.79 15.48 17.92C16.17 18.14 16.8 18.11 17.3 18.04C17.85 17.96 18.99 17.35 19.23 16.68C19.47 16 19.47 15.43 19.4 15.31C19.33 15.19 19.14 15.12 18.84 14.97C18.55 14.83 17.11 14.12 16.84 14.02C16.57 13.92 16.38 13.87 16.18 14.17C15.98 14.46 15.42 15.12 15.25 15.31C15.08 15.51 14.91 15.53 14.62 15.39C14.33 15.24 13.39 14.93 12.27 13.93C11.4 13.15 10.81 12.19 10.64 11.9C10.47 11.61 10.62 11.45 10.77 11.31C10.9 11.18 11.06 10.97 11.21 10.8C11.36 10.63 11.41 10.51 11.51 10.31C11.61 10.11 11.56 9.94 11.48 9.79C11.41 9.65 10.81 8.18 10.56 7.59C10.32 7.02 10.07 7.09 9.89 7.09C9.72 7.08 9.53 7.08 9.33 7.08L9.53 7.33Z" />
              </svg>
              <span>WhatsApp-ൽ ചാറ്റ് ചെയ്യൂ</span>
            </a>
          )}

          {hasPhone && (
            <a
              href={`tel:${primaryPhone.number}`}
              aria-label={`ഫോൺ വിളിക്കുക ${primaryPhone.display || primaryPhone.number}`}
              className="inline-flex items-center justify-center gap-3 h-[56px] px-8 rounded-full font-heading font-bold text-base sm:text-lg bg-transparent border-2 border-white/70 hover:border-white hover:bg-white/5 text-white shadow-xl transition-all duration-200 hover:-translate-y-1 active:scale-98 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)]"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{primaryPhone.display || primaryPhone.number}</span>
            </a>
          )}
        </div>

        {/* Address Card & Details */}
        <div className="bg-[var(--card)] rounded-[24px] p-8 sm:p-10 border border-white/[0.08] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--blue)]/15 flex items-center justify-center shrink-0">
              <MasjidIcon className="w-8 h-8 text-[var(--yellow)]" color="#FFC93C" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-sora font-semibold text-[var(--sky)] tracking-wider uppercase">
                {CONFIG.ORGANIZATION_EN}
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white mt-1">
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
                  className="text-xs font-sora text-[var(--sky)] hover:underline mt-2 inline-flex items-center gap-1.5"
                  aria-label={`ഇമെയിൽ അയക്കുക ${CONTACT.email}`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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
              className="text-sm px-6 shrink-0"
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

import React from 'react';
import { CONFIG } from '../config';
import Button from '../components/Button';

export default function Contact() {
  const waHref = `https://wa.me/${CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(
    'അസ്സലാമു അലൈക്കും, ADSA ക്യാമ്പ് സംബന്ധിച്ച വിവരങ്ങൾ അറിയാൻ ആഗ്രഹിക്കുന്നു.'
  )}`;

  return (
    <section id="contact" className="full-width-section py-20 bg-[#23252A] border-t border-white/[0.05]">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto text-center items-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
            <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
              സഹായവും വിവരങ്ങളും
            </span>
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
          </div>

          <h2 className="heading-section text-white">
            കൂടുതൽ വിവരങ്ങൾക്ക് <span className="text-[var(--yellow)]">ബന്ധപ്പെടുക</span>
          </h2>

          <p className="font-body text-base text-[var(--muted)] max-w-xl">
            ക്യാമ്പ് സംബന്ധമായ ഏത് സംശയങ്ങൾക്കും ADSA ഹെൽപ്പ്‌ഡെസ്കുമായി നേരിട്ട് ബന്ധപ്പെടാം.
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8"
          >
            WhatsApp-ൽ ചാറ്റ് ചെയ്യൂ
          </Button>

          <Button
            href={`tel:${CONFIG.WHATSAPP_NUMBER}`}
            variant="secondary"
            className="px-8"
          >
            ഫോൺ വിളിക്കുക
          </Button>
        </div>

        {/* Contact Numbers Strip */}
        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-sm font-sora text-[var(--muted)]">
          <div>
            <span className="text-white/60">Phone: </span>
            <span className="text-white font-medium">{CONFIG.PHONE_DISPLAY}</span>
          </div>
          <div>
            <span className="text-white/60">Email: </span>
            <span className="text-white font-medium">{CONFIG.EMAIL}</span>
          </div>
          <div>
            <span className="text-white/60">Org: </span>
            <span className="text-[var(--yellow)] font-medium">{CONFIG.ORGANIZATION}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import FAQ_ITEMS from '../data/faq.json';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="full-width-section section-pad bg-[var(--bg)]">
      <div className="flex flex-col gap-12 lg:gap-14 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="ds-eyebrow">സംശയങ്ങളും മറുപടികളും</span>

          <h2 className="heading-h2 text-white">
            ക്യാമ്പിനെക്കുറിച്ച് <span className="text-[var(--yellow)]">അറിയേണ്ടവ</span>
          </h2>

          <p className="body-editorial max-w-2xl">
            ക്യാമ്പിൽ പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്ന വിദ്യാർത്ഥികൾ സാധാരണയായി ചോദിക്കുന്ന പ്രധാന സംശയങ്ങൾ.
          </p>
        </div>

        {/* 6 Accordion Items */}
        <div className="flex flex-col gap-4 w-full">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`ds-card !p-0 overflow-hidden transition-colors ${
                  isOpen ? 'border-white/20' : 'hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span
                    className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                      isOpen ? 'text-[var(--yellow)]' : 'text-white'
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-white/10 text-white' : 'bg-white/5 text-[var(--muted)]'
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={1.5} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 font-body text-sm sm:text-base text-[var(--muted)] leading-[1.4] border-t border-white/[0.08]"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import FAQ_ITEMS from '../data/faq.json';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="full-width-section py-24 bg-[var(--bg)]">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
            <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
              സംശയങ്ങളും മറുപടികളും (FAQ)
            </span>
            <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
          </div>

          <h2 className="heading-section text-white">
            ക്യാമ്പിനെക്കുറിച്ച് <span className="text-[var(--yellow)]">അറിയേണ്ടവ</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[var(--muted)]">
            ക്യാമ്പിൽ പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്ന വിദ്യാർത്ഥികൾ സാധാരണയായി ചോദിക്കുന്ന സംശയങ്ങൾ.
          </p>
        </div>

        {/* 6 Accordion Items */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`bg-[var(--card)] rounded-[20px] border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[var(--yellow)]/60 shadow-lg' : 'border-white/[0.06] hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span
                    className={`font-heading font-bold text-lg sm:text-xl transition-colors ${
                      isOpen ? 'text-[var(--yellow)]' : 'text-white'
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[var(--yellow)] text-[var(--bg)] rotate-180' : 'bg-white/5 text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 font-body text-base text-[var(--muted)] leading-relaxed border-t border-white/5 animate-fadeIn"
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

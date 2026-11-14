import React, { useState } from 'react';
import FAQ_ITEMS from '../data/faq.json';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="full-width-section section-pad bg-[#0B0D12] border-y border-white/[0.08] relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14 max-w-4xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">ESSENTIAL INFORMATION</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              الأَسْئِلَةُ الشَّائِعَةُ
            </span>
          </div>

          <h2 className="heading-section text-white">
            Frequently Asked{' '}
            <span className="gold-gradient-text block">
              Camp Inquiries
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] max-w-2xl">
            Everything candidate students and parents need to know regarding admission, boarding, and academic rules.
          </p>
        </div>

        {/* 6 Accordion Items in Poppins */}
        <div className="flex flex-col gap-3.5 w-full">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`rounded-[22px] bg-[#12151D]/80 backdrop-blur-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[var(--gold)]/40 shadow-[0_12px_30px_rgba(0,0,0,0.5)]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span
                    className={`font-sans font-bold text-base sm:text-lg transition-colors ${
                      isOpen ? 'text-[var(--gold)]' : 'text-white'
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30'
                        : 'bg-white/5 text-[var(--muted)] border border-white/5'
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={1.75} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 font-sans text-sm sm:text-base text-[var(--muted)] leading-relaxed border-t border-white/[0.06]"
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

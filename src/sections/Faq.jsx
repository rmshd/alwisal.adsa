import React, { useState } from 'react';
import FAQ_ITEMS from '../data/faq.json';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              Clarifications
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[var(--yellow)] block">
              الأَسْئِلَةُ الشَّائِعَةُ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Admission, Rules & Boarding
            </span>
          </div>
        </div>

        {/* Accordion List: Crisp 0px radius */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`bg-[var(--surface)] border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[var(--orange)]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span
                    className={`text-sm sm:text-base font-bold uppercase tracking-wide transition-colors ${
                      isOpen ? 'text-[var(--orange)]' : 'text-white'
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    strokeWidth={1.75}
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[var(--orange)]' : 'text-[var(--muted)]'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="p-5 sm:p-6 pt-0 border-t border-white/10 space-y-2"
                  >
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed pt-2">
                      {item.answer}
                    </p>
                    {item.malayalam && (
                      <p className="font-['Noto_Sans_Malayalam'] text-xs text-[var(--yellow)]/80 pt-1">
                        {item.malayalam}
                      </p>
                    )}
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

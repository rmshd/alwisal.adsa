import React, { useState } from 'react';
import FAQ_ITEMS from '../data/faq.json';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="full-width-section section-pad bg-[#0E1118] border-y border-white/[0.08] relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14 max-w-4xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="ds-eyebrow">സംശയങ്ങളും മറുപടികളും</span>

          <h2 className="heading-h2 text-white">
            ക്യാമ്പിനെക്കുറിച്ച്{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              അറിയേണ്ടവ
            </span>
          </h2>

          <p className="body-editorial max-w-2xl">
            ക്യാമ്പിൽ പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്ന വിദ്യാർത്ഥികൾ സാധാരണയായി ചോദിക്കുന്ന പ്രധാന സംശയങ്ങൾ.
          </p>
        </div>

        {/* 6 Accordion Items */}
        <div className="flex flex-col gap-3.5 w-full">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`rounded-[20px] bg-[#141722]/80 backdrop-blur-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-amber-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
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
                    className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                      isOpen ? 'text-[var(--yellow)]' : 'text-white'
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-amber-400/15 text-amber-400 border border-amber-400/30'
                        : 'bg-white/5 text-[var(--muted)] border border-white/5'
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={1.75} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 font-body text-sm sm:text-base text-[var(--muted)] leading-relaxed border-t border-white/[0.06]"
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

import React, { useState, useEffect, useCallback } from 'react';
import GALLERY_ITEMS from '../data/gallery.json';

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const selectedItem = activeImageIndex !== null ? GALLERY_ITEMS[activeImageIndex] : null;

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, []);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImageIndex, handleClose, handleNext, handlePrev]);

  return (
    <section id="gallery" className="full-width-section py-24 bg-[#23252A] border-y border-white/[0.05]">
      <div className="flex flex-col gap-12">
        {/* Header with "ഓർമ്മകൾ ക്യാമ്പിന് ശേഷം" State Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
              <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
                ഗാലറിയും ഓർമ്മകളും
              </span>
            </div>

            <h2 className="heading-section text-white">
              ദർസ് ജീവിതാവസ്ഥകളുടെ <span className="text-[var(--yellow)]">നിമിഷങ്ങൾ</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-[var(--muted)]">
              മുൻകാല ക്യാമ്പുകളിലെയും ദർസ് ക്ലാസ്സുകളിലെയും സവിശേഷ അനുഭവങ്ങൾ. ക്യാമ്പിന് ശേഷമുള്ള പുതിയ ചിത്രങ്ങളും
              തത്സമയ അപ്‌ഡേറ്റുകളും ഇവിടെ ലഭ്യമാകും.
            </p>
          </div>

          {/* Styled "ഓർമ്മകൾ ക്യാമ്പിന് ശേഷം" state banner */}
          <div className="sticker-torn-yellow bg-[var(--yellow)] text-[var(--bg)] px-5 py-2.5 font-heading font-extrabold text-sm shadow-xl self-start sm:self-auto transform rotate-1">
            ഓർമ്മകൾ ക്യാമ്പിന് ശേഷം
          </div>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveImageIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImageIndex(idx);
                }
              }}
              className="group relative bg-[var(--card)] rounded-[24px] overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)]"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] bg-[#1E222A] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-sora font-semibold bg-[#1E1F22]/80 backdrop-blur-md text-[var(--yellow)] border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Caption */}
              <div className="p-5 flex flex-col justify-between">
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-[var(--yellow)] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[var(--muted)] mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Keyboard-friendly Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] transition-colors cursor-pointer"
              aria-label="ഗാലറി അടയ്ക്കുക"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] transition-colors cursor-pointer"
              aria-label="മുമ്പത്തെ ചിത്രം"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] transition-colors cursor-pointer"
              aria-label="അടുത്ത ചിത്രം"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="max-w-4xl w-full flex flex-col items-center gap-4">
              <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-[#1A1D23] border border-white/10 p-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
                />
              </div>

              <div className="text-center max-w-xl">
                <span className="text-xs font-sora font-semibold px-3 py-1 rounded-full bg-white/10 text-[var(--yellow)] inline-block mb-2">
                  {selectedItem.category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  {selectedItem.title}
                </h3>
                <p className="font-body text-sm text-[var(--muted)] mt-1">
                  {selectedItem.caption}
                </p>
                <span className="text-xs font-sora text-white/40 block mt-2">
                  {activeImageIndex + 1} / {GALLERY_ITEMS.length} · Keyboard navigation: ← / → / Esc
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

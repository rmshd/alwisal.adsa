import React, { useState, useEffect, useCallback } from 'react';
import GALLERY_ITEMS from '../data/gallery.json';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section id="gallery" className="full-width-section section-pad bg-[#222428] border-y border-white/[0.08]">
      <div className="flex flex-col gap-12 lg:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">ഗാലറി</span>

          <h2 className="heading-h2 text-white">
            ദർസ് ജീവിതത്തിന്റെ <span className="text-[var(--yellow)]">നിമിഷങ്ങൾ</span>
          </h2>

          <p className="body-editorial">
            മുൻകാല ക്യാമ്പുകളിലെയും ദർസ് ക്ലാസ്സുകളിലെയും സവിശേഷ അനുഭവ ചിത്രങ്ങൾ.
          </p>
        </div>

        {/* Masonry / Responsive Grid (16px radius, 1px border, no shadows) */}
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
              className="rounded-[16px] overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-300 bg-[#1E1F22] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] group"
            >
              <div className="w-full aspect-[4/3] bg-[#1A1D23] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-sora font-semibold bg-[#1E1F22]/90 border border-white/10 text-white/90">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between">
                <h3 className="font-heading font-bold text-base text-white">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-[var(--muted)] mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Keyboard-friendly Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] transition-colors cursor-pointer"
              aria-label="അടയ്ക്കുക"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] transition-colors cursor-pointer"
              aria-label="മുമ്പത്തെ ചിത്രം"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] transition-colors cursor-pointer"
              aria-label="അടുത്ത ചിത്രം"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>

            {/* Modal Content */}
            <div className="max-w-4xl w-full flex flex-col items-center gap-4">
              <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-[16px] bg-[#1E1F22] border border-white/10 p-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-[12px]"
                />
              </div>

              <div className="text-center max-w-xl">
                <span className="text-xs font-sora font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 inline-block mb-2">
                  {selectedItem.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-white">
                  {selectedItem.title}
                </h3>
                <p className="font-body text-sm text-[var(--muted)] mt-1">
                  {selectedItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

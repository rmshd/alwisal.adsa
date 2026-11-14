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
    <section id="gallery" className="full-width-section section-pad bg-[#08090C] border-y border-white/[0.08] relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="ds-eyebrow">CAMP ARCHIVES</span>
            <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
              مَعْرِضُ الصُّوَرِ
            </span>
          </div>

          <h2 className="heading-section text-white">
            Chronicles of Classical{' '}
            <span className="gold-gradient-text block">
              Dars Life & Fellowship
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Moments captured from previous camp cohorts, dawn Bukhari recitations, and campus fellowship.
          </p>
        </div>

        {/* Responsive Grid with Glass Depth */}
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
              className="rounded-[24px] overflow-hidden border border-white/[0.08] hover:border-[var(--gold)]/40 bg-[#12151D]/80 backdrop-blur-xl transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="w-full aspect-[4/3] bg-[#0E1118] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-sans font-bold bg-[#08090C]/85 backdrop-blur-md border border-white/10 text-white/90">
                  {item.category}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between">
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-white group-hover:text-[var(--gold)] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[var(--muted)] mt-1.5 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Keyboard-friendly Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={24} strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={24} strokeWidth={1.75} />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center gap-4">
              <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-[20px] bg-[#12151D] border border-white/10 p-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-[14px]"
                />
              </div>

              <div className="text-center max-w-xl">
                <span className="text-xs font-sans font-bold px-3.5 py-1 rounded-full bg-white/10 text-white/90 inline-block mb-2">
                  {selectedItem.category}
                </span>
                <h3 className="font-sans font-extrabold text-xl text-white">
                  {selectedItem.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--muted)] mt-1">
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

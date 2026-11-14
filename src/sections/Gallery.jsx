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
    <section
      id="gallery"
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              Visual Chronicles
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              Camp Archives & Gallery
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[var(--yellow)] block">
              مَعْرِضُ الصُّوَرِ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Moments of Scholarship & Brotherhood
            </span>
          </div>
        </div>

        {/* Mosaic Image Grid: Crisp 0px radius */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              className="bg-[var(--surface)] border border-white/10 overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-[var(--ink)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[var(--ink)]/90 text-[var(--yellow)] border border-white/10">
                  {item.category}
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-1 border-t border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-[var(--yellow)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--muted)] line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Keyboard-friendly Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-[var(--ink)]/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 p-2.5 bg-white/10 text-white hover:bg-[var(--orange)] hover:text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/10 text-white hover:bg-[var(--orange)] hover:text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/10 text-white hover:bg-[var(--orange)] hover:text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center gap-4">
              <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden bg-[var(--surface)] border border-white/15 p-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="text-center max-w-xl space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[var(--surface)] text-[var(--yellow)] border border-white/10 inline-block mb-1">
                  {selectedItem.category}
                </span>
                <h3 className="text-lg font-bold uppercase text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[var(--muted)]">
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

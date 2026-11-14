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
      className="relative w-full bg-[var(--canvas-subtle)] text-[var(--ink)] font-['Poppins'] py-20 sm:py-28 border-t-2 border-[var(--ink)]"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[var(--ink)] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--orange)] block mb-1">
              VISUAL CHRONICLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--ink)]">
              Camp Archives
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Noto_Serif_Arabic'] text-xl sm:text-2xl font-bold text-[var(--ink)] block" dir="rtl">
              مَعْرِضُ الصُّوَرِ
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-bold">
              Moments of Scholarship & Brotherhood
            </span>
          </div>
        </div>

        {/* Mosaic Image Grid: Crisp 0px radius with editorial borders */}
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
              className="bg-white border-2 border-[var(--ink)] shadow-[4px_4px_0px_#0F172A] overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-[var(--canvas)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-[var(--ink)] text-[var(--yellow)] border border-[var(--ink)]">
                  {item.category}
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-1 border-t-2 border-[var(--ink)]">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-[var(--ink)] group-hover:text-[var(--orange)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--muted)] font-medium line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Keyboard-friendly Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-[var(--ink)]/90 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 p-2.5 bg-white text-[var(--ink)] hover:bg-[var(--orange)] hover:text-white transition-colors cursor-pointer border-2 border-[var(--ink)]"
              aria-label="Close dialog"
            >
              <X size={22} strokeWidth={2} />
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white text-[var(--ink)] hover:bg-[var(--orange)] hover:text-white transition-colors cursor-pointer border-2 border-[var(--ink)]"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} strokeWidth={2} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white text-[var(--ink)] hover:bg-[var(--orange)] hover:text-white transition-colors cursor-pointer border-2 border-[var(--ink)]"
              aria-label="Next image"
            >
              <ChevronRight size={22} strokeWidth={2} />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center gap-4">
              <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden bg-white border-2 border-[var(--ink)] p-2 shadow-[8px_8px_0px_#0F172A]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="text-center max-w-xl space-y-1 bg-white border-2 border-[var(--ink)] p-4 shadow-[4px_4px_0px_#0F172A] w-full">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-[var(--yellow)] text-[var(--ink)] inline-block mb-1 border border-[var(--ink)]">
                  {selectedItem.category}
                </span>
                <h3 className="text-base sm:text-lg font-black uppercase text-[var(--ink)]">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[var(--muted)] font-medium">
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

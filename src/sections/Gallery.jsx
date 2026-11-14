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
      className="relative w-full bg-white text-slate-900 font-['Poppins'] py-24 sm:py-32 border-t border-slate-200/80"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700">
              Visual Archives
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Camp Gallery
            </h2>
          </div>
          <div className="text-right">
            <span className="font-['Noto_Serif_Arabic'] text-xl text-amber-800 font-medium block" dir="rtl">
              مَعْرِضُ الصُّوَرِ
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Moments of Scholarship & Fellowship
            </span>
          </div>
        </div>

        {/* Minimal Grid */}
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
              className="rounded-3xl bg-[#FAF9F6] border border-slate-200/80 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold bg-white/90 backdrop-blur-md text-slate-700 shadow-sm border border-white/50">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-1 bg-white">
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 font-normal">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center gap-4">
              <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 p-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              <div className="text-center max-w-xl space-y-1 text-white">
                <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="text-base font-bold text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-white/70">
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

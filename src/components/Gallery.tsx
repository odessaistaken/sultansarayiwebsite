import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface GalleryProps {
  images: string[];
  title: string;
  accentColor: 'amber' | 'rose';
}

export default function Gallery({ images, title, accentColor }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const accentClasses = {
    amber: 'text-amber-400 border-amber-400/30',
    rose: 'text-rose-400 border-rose-400/30',
  };

  const buttonClasses = {
    amber: 'bg-amber-500 active:bg-amber-400',
    rose: 'bg-rose-700 active:bg-rose-600',
  };

  const thumbBorderClasses = {
    amber: 'border-amber-400',
    rose: 'border-rose-400',
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-14 md:py-24 px-5 sm:px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block border-b pb-2 mb-4 ${accentClasses[accentColor]}`}>
              <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
                Galeri
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif mb-3">
              {title}
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light font-sans">
              Profesyonel fotoğraflarımız ve sinematografi örnekleri
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-6 sm:mb-8">
            {/* Main image */}
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] rounded-lg overflow-hidden mb-3 sm:mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt={`Gallery ${activeIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

              {/* Navigation buttons — larger touch targets on mobile */}
              <button
                onClick={goToPrevious}
                aria-label="Önceki"
                className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 ${buttonClasses[accentColor]} text-white p-3 sm:p-3 rounded-full transition-colors duration-200 cursor-pointer border-none z-10 min-w-[44px] min-h-[44px] flex items-center justify-center`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Sonraki"
                className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 ${buttonClasses[accentColor]} text-white p-3 sm:p-3 rounded-full transition-colors duration-200 cursor-pointer border-none z-10 min-w-[44px] min-h-[44px] flex items-center justify-center`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 backdrop-blur px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                <span className="text-white text-xs sm:text-sm font-sans font-semibold">
                  {activeIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Thumbnails — scrollable row, no whileHover scale */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 cursor-pointer ${
                    activeIndex === index
                      ? thumbBorderClasses[accentColor]
                      : 'border-white/20 active:border-white/40'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

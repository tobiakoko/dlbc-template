import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut,
  Download,
  Share2,
  Grid3X3
} from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function GalleryLightbox({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
      setIsLoading(true);
    }
  }, [isOpen, initialIndex]);

  const goToNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'z':
          setIsZoomed((prev) => !prev);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goToNext, goToPrevious]);

  const goToIndex = (index: number) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setIsZoomed(false);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    setTouchStart(null);
  };

  const currentImage = images[currentIndex];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Top Bar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent z-10"
        >
          <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
            {/* Left - Counter */}
            <div className="flex items-center gap-4">
              <span className="text-white/90 font-medium">
                {currentIndex + 1} / {images.length}
              </span>
              {currentImage.category && (
                <span className="px-3 py-1 bg-accent-500/20 text-accent-400 text-sm rounded-full">
                  {currentImage.category}
                </span>
              )}
            </div>

            {/* Right - Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed((prev) => !prev)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title={isZoomed ? 'Zoom out (Z)' : 'Zoom in (Z)'}
              >
                {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>
              <button
                onClick={() => setShowThumbnails((prev) => !prev)}
                className={`p-2 rounded-lg transition-colors ${
                  showThumbnails 
                    ? 'text-accent-400 bg-white/10' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title="Toggle thumbnails"
              >
                <Grid3X3 size={20} />
              </button>
              <button
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Share"
              >
                <Share2 size={20} />
              </button>
              <button
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Download"
              >
                <Download size={20} />
              </button>
              <div className="w-px h-6 bg-white/20 mx-2" />
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Close (Esc)"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Image Container */}
        <div 
          className={`absolute inset-0 flex items-center justify-center ${
            showThumbnails ? 'pb-28' : ''
          } pt-16`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200 group"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`relative max-w-[90vw] max-h-[80vh] ${
                showThumbnails ? 'max-h-[70vh]' : 'max-h-[85vh]'
              } ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed((prev) => !prev)}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <motion.img
                src={currentImage.src}
                alt={currentImage.alt}
                className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onLoad={() => setIsLoading(false)}
                drag={isZoomed}
                dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200 group"
            aria-label="Next image"
          >
            <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <AnimatePresence>
          {showThumbnails && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/90 to-transparent"
            >
              <div className="h-full flex items-center justify-center px-4">
                <div className="flex gap-2 overflow-x-auto max-w-full py-2 px-4 scrollbar-thin">
                  {images.map((image, index) => (
                    <motion.button
                      key={image.id}
                      onClick={() => goToIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                        index === currentIndex
                          ? 'ring-2 ring-accent-500 ring-offset-2 ring-offset-black/50 scale-110'
                          : 'opacity-50 hover:opacity-100'
                      }`}
                      whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      {index === currentIndex && (
                        <motion.div
                          layoutId="thumbnail-indicator"
                          className="absolute inset-0 border-2 border-accent-500 rounded-lg"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Caption */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className={`absolute left-1/2 -translate-x-1/2 text-center ${
            showThumbnails ? 'bottom-32' : 'bottom-8'
          }`}
        >
          <p className="text-white/80 text-sm max-w-md">
            {currentImage.alt}
          </p>
        </motion.div>

        {/* Keyboard Shortcuts Hint */}
        <div className="absolute bottom-4 left-4 hidden md:flex items-center gap-4 text-white/40 text-xs">
          <span>← → Navigate</span>
          <span>Z Zoom</span>
          <span>Esc Close</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

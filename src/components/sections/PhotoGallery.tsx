import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GalleryLightbox from './GalleryLightbox';
import { GALLERY_IMAGES } from '@/utils/data';

// Use first 6 images for the featured gallery section
const FEATURED_GALLERY_IMAGES = GALLERY_IMAGES.slice(0, 6);

export default function PhotoGallery() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (FEATURED_GALLERY_IMAGES.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      (prev - 1 + (FEATURED_GALLERY_IMAGES.length - 1)) % (FEATURED_GALLERY_IMAGES.length - 1)
    );
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const mainImage = FEATURED_GALLERY_IMAGES[currentIndex];
  const secondaryImage = FEATURED_GALLERY_IMAGES[currentIndex + 1] || FEATURED_GALLERY_IMAGES[0];

  return (
    <>
      <section 
        id="photo-gallery" 
        className="py-16 md:py-20 lg:py-24 bg-neutral-50"
        ref={ref}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-soft overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
              {/* Left Side - Text & Secondary Image */}
              <div className="flex flex-col">
                {/* Text Content */}
                <div className="p-8 lg:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-2">
                      Photo
                    </h2>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-4">
                      Gallery
                    </h2>
                    <div className="w-16 h-1 bg-accent-500 rounded-full mb-6" />
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      Capturing moments of worship, fellowship, and community at DCLM Tampa.
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      Browse through our collection of photos from services, events, and special 
                      gatherings. Each image tells a story of faith and togetherness.
                    </p>
                  </motion.div>
                </div>

                {/* Secondary Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex-1 min-h-[200px] lg:min-h-[250px] relative cursor-pointer group"
                  onClick={() => openLightbox(currentIndex + 1)}
                >
                  <img
                    src={secondaryImage.src}
                    alt={secondaryImage.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-800 text-xs font-semibold rounded-full">
                      {secondaryImage.category}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Main Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative min-h-[300px] lg:min-h-full cursor-pointer group"
                onClick={() => openLightbox(currentIndex)}
              >
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-800 text-xs font-semibold rounded-full">
                    {mainImage.category}
                  </span>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="w-12 h-12 border-2 border-accent-500 text-accent-500 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-200 bg-white/10 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="w-12 h-12 border-2 border-accent-500 text-accent-500 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-200 bg-white/10 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>

                {/* View Gallery Link */}
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(0);
                    }}
                    className="px-4 py-2 bg-white/90 backdrop-blur-sm text-primary-800 text-sm font-semibold rounded-lg hover:bg-white transition-colors"
                  >
                    View All Photos →
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        images={FEATURED_GALLERY_IMAGES}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </>
  );
}

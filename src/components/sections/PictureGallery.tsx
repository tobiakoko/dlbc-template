import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ZoomIn } from 'lucide-react';
import GalleryLightbox from './GalleryLightbox';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
    alt: 'Worship concert with raised hands',
    category: 'Worship',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    alt: 'Youth gathering at sunset',
    category: 'Youth',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    alt: 'Guitar player performing',
    category: 'Music',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=800&q=80',
    alt: 'Hands raised in worship',
    category: 'Praise',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
    alt: 'Couple watching sunset',
    category: 'Fellowship',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
    alt: 'Good message on wall',
    category: 'Inspiration',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    alt: 'Road through forest',
    category: 'Retreat',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80',
    alt: 'Church interior with light',
    category: 'Sanctuary',
  },
];

export default function PictureGallery() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section 
        id="picture-gallery" 
        className="py-16 md:py-20 lg:py-24 bg-white"
        ref={ref}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary-800 uppercase">
                Picture Gallery
              </h2>
              <div className="flex-1 h-px bg-primary-800" />
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Gallery Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-10"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Full Gallery
              <ZoomIn size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        images={GALLERY_IMAGES}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </>
  );
}

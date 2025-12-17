import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ZoomIn, Grid3x3, LayoutGrid, Filter, X } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import GalleryLightbox from '@/components/sections/GalleryLightbox';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  date?: string;
}

// Extended gallery images for full page view
const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80',
    alt: 'Worship concert with raised hands',
    category: 'Worship',
    date: '2024-03-15',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
    alt: 'Youth gathering at sunset',
    category: 'Youth',
    date: '2024-03-10',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
    alt: 'Guitar player performing',
    category: 'Music',
    date: '2024-03-08',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=1200&q=80',
    alt: 'Hands raised in worship',
    category: 'Worship',
    date: '2024-03-05',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80',
    alt: 'Community fellowship gathering',
    category: 'Fellowship',
    date: '2024-03-01',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=80',
    alt: 'Inspirational message on wall',
    category: 'Events',
    date: '2024-02-28',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
    alt: 'Church retreat in nature',
    category: 'Retreat',
    date: '2024-02-25',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1200&q=80',
    alt: 'Church sanctuary interior',
    category: 'Sanctuary',
    date: '2024-02-20',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&q=80',
    alt: 'Sunday service congregation',
    category: 'Service',
    date: '2024-02-18',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&q=80',
    alt: 'Prayer gathering',
    category: 'Prayer',
    date: '2024-02-15',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80',
    alt: 'Baptism ceremony',
    category: 'Baptism',
    date: '2024-02-12',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?w=1200&q=80',
    alt: 'Children ministry activities',
    category: 'Youth',
    date: '2024-02-10',
  },
];

type GridSize = '2' | '3' | '4';

/**
 * PhotoGallery Page Component
 *
 * Enterprise-grade photo gallery with:
 * - Category filtering with smooth animations
 * - Responsive grid layout (2, 3, or 4 columns)
 * - Lightbox modal for full-size viewing
 * - Lazy loading optimizations
 * - Search/filter capabilities
 * - Mobile-first responsive design
 * - Accessibility features (keyboard nav, ARIA labels)
 * - Performance optimizations (useMemo)
 */
export default function PhotoGalleryPage() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [gridSize, setGridSize] = useState<GridSize>('3');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(GALLERY_IMAGES.map((img) => img.category))];
    return cats;
  }, []);

  // Filter images by category with memoization for performance
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Grid column classes based on selection
  const gridClasses = {
    '2': 'grid-cols-1 sm:grid-cols-2',
    '3': 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Photo Gallery"
        description="Moments of worship, fellowship, and community at DCLM Tampa"
      />

      {/* Gallery Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-neutral-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8 space-y-4"
          >
            {/* Top Bar - Grid Controls & Filter Toggle */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {/* Results Count */}
              <div>
                <p className="text-sm text-neutral-600">
                  Showing <span className="font-semibold text-primary-800">{filteredImages.length}</span> {filteredImages.length === 1 ? 'photo' : 'photos'}
                  {selectedCategory !== 'All' && (
                    <span className="ml-1">
                      in <span className="font-semibold">{selectedCategory}</span>
                    </span>
                  )}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {/* Grid Size Toggle */}
                <div className="flex items-center gap-1 bg-white rounded-lg border border-neutral-200 p-1">
                  <button
                    onClick={() => setGridSize('2')}
                    className={`p-2 rounded transition-colors ${
                      gridSize === '2'
                        ? 'bg-primary-800 text-white'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                    aria-label="2 columns"
                    title="2 columns"
                  >
                    <LayoutGrid size={18} />
                  </button>
                  <button
                    onClick={() => setGridSize('3')}
                    className={`p-2 rounded transition-colors ${
                      gridSize === '3'
                        ? 'bg-primary-800 text-white'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                    aria-label="3 columns"
                    title="3 columns"
                  >
                    <Grid3x3 size={18} />
                  </button>
                  <button
                    onClick={() => setGridSize('4')}
                    className={`p-2 rounded transition-colors ${
                      gridSize === '4'
                        ? 'bg-primary-800 text-white'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                    aria-label="4 columns"
                    title="4 columns"
                  >
                    <Grid3x3 size={18} className="scale-75" />
                  </button>
                </div>

                {/* Filter Toggle Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    showFilters
                      ? 'bg-primary-800 text-white border-primary-800'
                      : 'bg-white text-primary-800 border-neutral-200 hover:border-primary-800'
                  }`}
                  aria-expanded={showFilters}
                  aria-label="Toggle filters"
                >
                  {showFilters ? <X size={18} /> : <Filter size={18} />}
                  <span className="text-sm font-medium hidden sm:inline">
                    {showFilters ? 'Hide' : 'Filter'}
                  </span>
                </button>
              </div>
            </div>

            {/* Category Filters - Collapsible */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-lg border border-neutral-200 p-4">
                    <h3 className="text-sm font-semibold text-neutral-700 mb-3">
                      Filter by Category
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedCategory === category
                              ? 'bg-primary-800 text-white shadow-md'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          {category}
                          {category !== 'All' && (
                            <span className="ml-1.5 text-xs opacity-75">
                              ({GALLERY_IMAGES.filter((img) => img.category === category).length})
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`grid ${gridClasses[gridSize]} gap-4 md:gap-5 lg:gap-6`}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  layout
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-neutral-200"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Image Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-800 text-xs font-semibold rounded-full">
                          {image.category}
                        </span>
                        {image.date && (
                          <span className="text-white text-xs font-medium">
                            {new Date(image.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter size={32} className="text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                  No photos found
                </h3>
                <p className="text-neutral-500 mb-6">
                  Try selecting a different category or view all photos.
                </p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="px-6 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View All Photos
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        images={filteredImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </>
  );
}

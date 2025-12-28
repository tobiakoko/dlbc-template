import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { PageHero } from '@/components/sections/PageHero';
import { Play, Clock, Calendar, User, Download, Share2 } from 'lucide-react';
import { FEATURED_SERMONS } from '@/utils/data';

export default function LatestSermons() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Sort sermons by date (newest first)
  const sortedSermons = [...FEATURED_SERMONS].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Latest Sermons"
        description="Stay up to date with our most recent messages and teachings"
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <a href="/" className="hover:text-primary-700 transition-colors">Home</a>
            <span>/</span>
            <a href="/sermons" className="hover:text-primary-700 transition-colors">Sermons</a>
            <span>/</span>
            <span className="text-primary-700 font-medium">Latest</span>
          </div>
        </div>
      </section>

      {/* Sermons List */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom max-w-5xl">
          <div className="space-y-6">
            {sortedSermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-[300px,1fr] gap-0">
                    {/* Thumbnail */}
                    <div className="relative h-56 md:h-auto overflow-hidden">
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />

                      {/* Play Button */}
                      <button className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                        </div>
                      </button>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-sm font-medium rounded-lg flex items-center gap-1">
                          <Clock size={14} />
                          {sermon.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 flex flex-col">
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                          {sermon.category}
                        </span>
                        <span className="text-sm text-neutral-500">
                          {getRelativeTime(sermon.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-display font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                        {sermon.title}
                      </h3>

                      {/* Description */}
                      {sermon.description && (
                        <p className="text-neutral-600 mb-4 line-clamp-2">
                          {sermon.description}
                        </p>
                      )}

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-6 mt-auto">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-accent-500" />
                          <span>{sermon.preacher}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-accent-500" />
                          <span>{formatDate(sermon.date)}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`/sermons/${sermon.id}`}
                          className="btn-primary"
                        >
                          Watch Now
                        </a>
                        <button className="btn-outline flex items-center gap-2">
                          <Download size={16} />
                          Download
                        </button>
                        <button className="px-4 py-2 text-neutral-600 hover:text-primary-700 transition-colors">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

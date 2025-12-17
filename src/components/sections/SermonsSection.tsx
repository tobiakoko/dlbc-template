import { motion } from 'framer-motion';
import { useInView } from '../../../src/hooks/useInView';
import { Play, Clock, Calendar, User, ArrowRight } from 'lucide-react';
import { FEATURED_SERMONS } from '@/utils/data';

export default function SermonsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section id="sermons" className="section-padding bg-neutral-50 relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
              Messages
            </span>
            <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
          </div>
          <h2 className="text-primary-800 mb-4">Latest Sermons</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Explore our collection of messages that will inspire, challenge, and strengthen your faith.
          </p>
        </motion.div>

        {/* Featured Sermon (Large) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="card overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                <img
                  src={FEATURED_SERMONS[0].thumbnail}
                  alt={FEATURED_SERMONS[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/20 to-transparent" />
                
                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="text-accent-600 text-sm font-semibold uppercase tracking-wider mb-2">
                  {FEATURED_SERMONS[0].category}
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-primary-800 mb-4 group-hover:text-primary-600 transition-colors">
                  {FEATURED_SERMONS[0].title}
                </h3>
                <p className="text-neutral-600 mb-6 line-clamp-2">
                  {FEATURED_SERMONS[0].description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-accent-500" />
                    <span>{FEATURED_SERMONS[0].preacher}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent-500" />
                    <span>{formatDate(FEATURED_SERMONS[0].date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-accent-500" />
                    <span>{FEATURED_SERMONS[0].duration}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={`/sermons/${FEATURED_SERMONS[0].id}`} className="btn-primary">
                    Watch Now
                  </a>
                  <button className="btn-outline">
                    Download Audio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sermon Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {FEATURED_SERMONS.slice(1).map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <div className="card overflow-hidden group h-full flex flex-col">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
                  
                  {/* Play Button */}
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center shadow-glow">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </button>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded">
                      {sermon.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-accent-600 text-xs font-semibold uppercase tracking-wider mb-2">
                    {sermon.category}
                  </div>
                  <h4 className="font-display font-semibold text-primary-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {sermon.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mt-auto pt-3 border-t border-neutral-100">
                    <div className="flex items-center gap-1">
                      <User size={12} className="text-accent-500" />
                      <span>{sermon.preacher}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-accent-500" />
                      <span>{formatDate(sermon.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <a
            href="/sermons"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-accent-600 transition-colors group"
          >
            View All Sermons
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { PageHero } from '@/components/sections/PageHero';
import { Play, Calendar, User, ChevronRight, Layers } from 'lucide-react';
import { FEATURED_SERMONS, SERMON_SERIES } from '@/utils/data';

// Map sermon series with their actual sermons
const sermonSeries = SERMON_SERIES.map(series => ({
  ...series,
  sermons: FEATURED_SERMONS.filter(s => s.category === series.category),
}));

export default function SermonSeries() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [expandedSeries, setExpandedSeries] = useState<string | null>(null);

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return `${start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;
  };

  const toggleSeries = (seriesId: string) => {
    setExpandedSeries(expandedSeries === seriesId ? null : seriesId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Sermon Series"
        description="Dive deep into God's Word through our curated sermon series"
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <a href="/" className="hover:text-primary-700 transition-colors">Home</a>
            <span>/</span>
            <a href="/sermons" className="hover:text-primary-700 transition-colors">Sermons</a>
            <span>/</span>
            <span className="text-primary-700 font-medium">Series</span>
          </div>
        </div>
      </section>

      {/* Series List */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom max-w-6xl">
          <div className="space-y-8">
            {sermonSeries.map((series, index) => (
              <motion.div
                key={series.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="card overflow-hidden">
                  {/* Series Header */}
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleSeries(series.id)}
                  >
                    <div className="grid md:grid-cols-[280px,1fr] gap-0">
                      {/* Thumbnail */}
                      <div className="relative h-56 md:h-64 overflow-hidden group">
                        <img
                          src={series.thumbnail}
                          alt={series.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/30 to-transparent" />

                        {/* Series Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-sm font-semibold rounded-lg">
                            <Layers size={16} />
                            {series.sermonCount} Messages
                          </div>
                        </div>

                        {/* Play Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 lg:p-8">
                        <h2 className="text-2xl lg:text-3xl font-display font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                          {series.title}
                        </h2>
                        <p className="text-neutral-600 mb-4 line-clamp-2">
                          {series.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-6">
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-accent-500" />
                            <span>{series.speaker}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-accent-500" />
                            <span>{formatDateRange(series.startDate, series.endDate)}</span>
                          </div>
                        </div>

                        {/* Expand Button */}
                        <button className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-accent-600 transition-colors group">
                          {expandedSeries === series.id ? 'Hide' : 'View'} Messages
                          <ChevronRight
                            size={18}
                            className={`transition-transform ${expandedSeries === series.id ? 'rotate-90' : ''}`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Sermons List */}
                  {expandedSeries === series.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-neutral-200 bg-neutral-50"
                    >
                      <div className="p-6 lg:p-8">
                        <h3 className="text-lg font-semibold text-primary-800 mb-4">
                          Messages in this Series
                        </h3>
                        <div className="space-y-3">
                          {series.sermons.map((sermon, sermonIndex) => (
                            <div
                              key={sermon.id}
                              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all group"
                            >
                              {/* Number */}
                              <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                                {sermonIndex + 1}
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-primary-800 group-hover:text-primary-600 transition-colors truncate">
                                  {sermon.title}
                                </h4>
                                <div className="flex items-center gap-3 text-sm text-neutral-500 mt-1">
                                  <span>{new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                  <span>•</span>
                                  <span>{sermon.duration}</span>
                                </div>
                              </div>

                              {/* Play Button */}
                              <a
                                href={`/sermons/${sermon.id}`}
                                className="flex-shrink-0 w-10 h-10 bg-accent-500 hover:bg-accent-600 text-white rounded-full flex items-center justify-center transition-colors"
                              >
                                <Play size={16} fill="currentColor" className="ml-0.5" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { PageHero } from '@/components/sections/PageHero';
import { Play, Calendar, User, Search, Filter } from 'lucide-react';
import { FEATURED_SERMONS } from '@/utils/data';

export default function Sermons() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Sunday Message', 'Wednesday Teaching', 'Special Service'];

  const filteredSermons = FEATURED_SERMONS.filter((sermon) => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (sermon.preacher || sermon.speaker || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || sermon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Sermons"
        description="Explore our collection of messages that will inspire, challenge, and strengthen your faith"
      />

      {/* Quick Links */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/sermons/latest"
              className="px-6 py-3 bg-primary-50 text-primary-700 rounded-lg font-semibold hover:bg-primary-100 transition-colors"
            >
              Latest Sermons
            </a>
            <a
              href="/sermons/series"
              className="px-6 py-3 bg-primary-50 text-primary-700 rounded-lg font-semibold hover:bg-primary-100 transition-colors"
            >
              Sermon Series
            </a>
            <a
              href="/sermons/audio"
              className="px-6 py-3 bg-primary-50 text-primary-700 rounded-lg font-semibold hover:bg-primary-100 transition-colors"
            >
              Audio Messages
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Search sermons by title or speaker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-neutral-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom">
          {filteredSermons.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg">No sermons found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSermons.map((sermon, index) => (
                <motion.div
                  key={sermon.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="card overflow-hidden group h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/20 to-transparent" />

                      {/* Play Button */}
                      <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                        </div>
                      </button>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded">
                          {sermon.duration}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                          {sermon.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-semibold text-primary-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {sermon.title}
                      </h3>

                      {sermon.description && (
                        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 flex-1">
                          {sermon.description}
                        </p>
                      )}

                      <div className="flex flex-col gap-2 text-sm text-neutral-500 pt-4 border-t border-neutral-100 mt-auto">
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-accent-500 flex-shrink-0" />
                          <span className="truncate">{sermon.preacher}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-accent-500 flex-shrink-0" />
                          <span>{formatDate(sermon.date)}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <a
                          href={`/sermons/${sermon.id}`}
                          className="flex-1 btn-primary text-center text-sm py-2"
                        >
                          Watch Now
                        </a>
                        <button className="px-4 py-2 border border-primary-200 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors text-sm font-semibold">
                          Audio
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

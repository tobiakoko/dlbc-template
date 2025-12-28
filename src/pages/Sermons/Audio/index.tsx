import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { PageHero } from '@/components/sections/PageHero';
import { Play, Pause, Download, Clock, Calendar, User, Volume2 } from 'lucide-react';
import { FEATURED_SERMONS } from '@/utils/data';

export default function AudioSermons() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [playingId, setPlayingId] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const togglePlay = (sermonId: string) => {
    setPlayingId(playingId === sermonId ? null : sermonId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Audio Messages"
        description="Listen to powerful teachings and messages on the go"
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <a href="/" className="hover:text-primary-700 transition-colors">Home</a>
            <span>/</span>
            <a href="/sermons" className="hover:text-primary-700 transition-colors">Sermons</a>
            <span>/</span>
            <span className="text-primary-700 font-medium">Audio</span>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-display font-semibold text-primary-800 mb-3">
              Download & Listen Offline
            </h2>
            <p className="text-neutral-600">
              All our audio messages are available for download. Take them with you and listen while commuting, exercising, or anywhere life takes you.
            </p>
          </div>
        </div>
      </section>

      {/* Audio Sermons List */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {FEATURED_SERMONS.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <div className={`card group hover:shadow-lg transition-all duration-300 ${playingId === sermon.id ? 'ring-2 ring-accent-500 shadow-lg' : ''}`}>
                  <div className="flex items-center gap-4 p-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={() => togglePlay(sermon.id)}
                      className="flex-shrink-0 w-14 h-14 bg-accent-500 hover:bg-accent-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-105"
                    >
                      {playingId === sermon.id ? (
                        <Pause size={20} fill="currentColor" />
                      ) : (
                        <Play size={20} fill="currentColor" className="ml-0.5" />
                      )}
                    </button>

                    {/* Sermon Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-primary-800 mb-1 truncate group-hover:text-primary-600 transition-colors">
                        {sermon.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                        <div className="flex items-center gap-1">
                          <User size={14} className="text-accent-500" />
                          <span>{sermon.preacher}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-accent-500" />
                          <span>{formatDate(sermon.date)}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-accent-500" />
                          <span>{sermon.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <button className="flex-shrink-0 p-3 text-neutral-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-all duration-300">
                      <Download size={20} />
                    </button>
                  </div>

                  {/* Progress Bar (shown when playing) */}
                  {playingId === sermon.id && (
                    <div className="px-4 pb-4">
                      <div className="relative h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '45%' }}
                          transition={{ duration: 2, ease: 'linear' }}
                          className="absolute inset-y-0 left-0 bg-accent-500 rounded-full"
                        />
                      </div>
                      <div className="flex justify-between items-center mt-2 text-xs text-neutral-500">
                        <span>2:15</span>
                        <span>{sermon.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="card p-8 bg-gradient-to-br from-primary-50 to-white">
              <h3 className="text-xl font-display font-semibold text-primary-800 mb-3">
                Want all messages at once?
              </h3>
              <p className="text-neutral-600 mb-6">
                Download our entire sermon collection and build your personal library of biblical teachings.
              </p>
              <button className="btn-primary inline-flex items-center gap-2">
                <Download size={18} />
                Download Complete Collection
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useInView } from '../../../src/hooks/useInView';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { UPCOMING_EVENTS } from '@/utils/data';

export default function EventsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear(),
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
    };
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      worship: 'bg-primary-500',
      fellowship: 'bg-green-500',
      outreach: 'bg-purple-500',
      youth: 'bg-blue-500',
      special: 'bg-accent-500',
    };
    return colors[category] || 'bg-neutral-500';
  };

  return (
    <section id="events" className="section-padding bg-white relative" ref={ref}>
      <div className="container-custom">
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
              Upcoming
            </span>
            <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
          </div>
          <h2 className="text-primary-800 mb-4">Church Events</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Join us for these special gatherings and grow together in faith and fellowship.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => {
            const date = formatDate(event.date);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="card overflow-hidden group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-white rounded-xl shadow-md overflow-hidden text-center min-w-[70px]">
                      <div className="bg-accent-500 text-white text-xs font-bold py-1 px-3 uppercase">
                        {date.month}
                      </div>
                      <div className="py-2 px-3">
                        <div className="text-2xl font-display font-bold text-primary-800">
                          {date.day}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    {event.category && (
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 ${getCategoryColor(event.category)} text-white text-xs font-semibold rounded-full capitalize`}>
                          {event.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2 flex-1">
                      {event.description}
                    </p>

                    <div className="space-y-2 text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent-500 flex-shrink-0" />
                        <span>{date.weekday}, {date.month} {date.day}, {date.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-accent-500 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent-500 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <a
                      href={`/events/${event.id}`}
                      className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:text-accent-600 transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="/events" className="btn-primary">
            View All Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}

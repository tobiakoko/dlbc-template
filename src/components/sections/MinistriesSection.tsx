import { motion } from 'framer-motion';
import { useInView } from '../../../src/hooks/useInView';
import { ArrowRight, Users, Calendar } from 'lucide-react';
import { MINISTRIES } from '@/utils/data';

export default function MinistriesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="ministries" className="section-padding bg-neutral-50 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />

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
              Get Involved
            </span>
            <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
          </div>
          <h2 className="text-primary-800 mb-4">Our Ministries</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Find your place to belong and serve. We have ministries for every age and stage of life.
          </p>
        </motion.div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MINISTRIES.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card overflow-hidden group h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ministry.image}
                    alt={ministry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-display font-semibold text-white">
                      {ministry.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-neutral-600 text-sm mb-4 flex-1">
                    {ministry.description}
                  </p>

                  {ministry.leader && (
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                      <Users size={14} className="text-accent-500" />
                      <span>Led by {ministry.leader}</span>
                    </div>
                  )}

                  {ministry.meetingTime && (
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                      <Calendar size={14} className="text-accent-500" />
                      <span>{ministry.meetingTime}</span>
                    </div>
                  )}

                  <a
                    href={`/ministries/${ministry.id}`}
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:text-accent-600 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 mb-4">
            Ready to get connected? We'd love to help you find your place.
          </p>
          <a href="/ministries" className="btn-primary">
            Explore All Ministries
          </a>
        </motion.div>
      </div>
    </section>
  );
}

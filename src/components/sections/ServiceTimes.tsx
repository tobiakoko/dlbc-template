import { motion } from 'framer-motion';
import { useInView } from '../../../src/hooks/useInView';
import { Clock, BookOpen, Music, Book, Heart, MapPin } from 'lucide-react';
import { SERVICE_TIMES, CHURCH_INFO } from '@/utils/data';

const iconMap: Record<string, React.ElementType> = {
  'book-open': BookOpen,
  'music': Music,
  'book': Book,
  'heart': Heart,
};

export default function ServiceTimes() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="services"
      className="section-padding bg-primary-800 text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

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
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">
              Join Us
            </span>
            <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
          </div>
          <h2 className="text-white mb-4">Service Times</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We would love to have you worship with us. All services are open to everyone.
          </p>
        </motion.div>

        {/* Service Times Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICE_TIMES.map((service, index) => {
            const Icon = service.icon ? iconMap[service.icon] || Clock : Clock;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-accent-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent-400 group-hover:text-white transition-colors" />
                </div>

                {/* Day */}
                <div className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-1">
                  {service.day}
                </div>

                {/* Name */}
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {service.name}
                </h3>

                {/* Time */}
                <div className="flex items-center gap-2 text-white/90 mb-3">
                  <Clock size={16} className="text-accent-400" />
                  <span className="font-medium">{service.time}</span>
                </div>

                {/* Description */}
                {service.description && (
                  <p className="text-white/60 text-sm">{service.description}</p>
                )}

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 to-primary-500/0 group-hover:from-accent-500/5 group-hover:to-primary-500/5 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <MapPin className="text-accent-400" size={20} />
            <span className="text-white/90">
              {CHURCH_INFO.address.street}, {CHURCH_INFO.address.city}, {CHURCH_INFO.address.state} {CHURCH_INFO.address.zip}
            </span>
          </div>
          <div className="mt-6">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from '../../../src/hooks/useInView';
import { BookOpen, Heart, Users, Globe } from 'lucide-react';
import { ABOUT_CONTENT, CHURCH_STATS } from '@/utils/data';

export default function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: BookOpen,
      title: 'Biblical Teaching',
      description: 'Sound, uncompromising exposition of God\'s Word',
    },
    {
      icon: Heart,
      title: 'Genuine Worship',
      description: 'Spirit-filled services that honor God',
    },
    {
      icon: Users,
      title: 'Loving Community',
      description: 'Authentic fellowship and support',
    },
    {
      icon: Globe,
      title: 'Global Mission',
      description: 'Committed to world evangelization',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-strong">
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80"
                alt="DCLM Tampa worship service"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-500/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary-200 rounded-2xl -z-10" />

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-xl shadow-medium p-6 z-20"
            >
              <div className="grid grid-cols-2 gap-4">
                {CHURCH_STATS.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-3xl font-display font-bold text-primary-700">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Title */}
            <h2 className="text-primary-800 mb-6">
              {ABOUT_CONTENT.title}
            </h2>

            {/* Description */}
            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>

            <p className="text-neutral-600 mb-8 leading-relaxed">
              {ABOUT_CONTENT.mission}
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-500 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="/about" className="btn-primary">
                Learn More About Us
              </a>
              <a href="/about/beliefs" className="btn-outline">
                Our Beliefs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

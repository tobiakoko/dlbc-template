import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useMinistries } from '@/hooks/useMinistries';
import { ArrowRight, Users, Calendar, MapPin } from 'lucide-react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

/**
 * Ministries Overview Page
 *
 * Displays all ministries with links to individual ministry pages.
 * Enhanced with professional animations and homepage design patterns.
 *
 * Best Practices Applied:
 * - Framer Motion scroll animations
 * - Alternating layout for visual interest
 * - Clear CTAs and ministry information
 * - Responsive design with proper spacing
 * - Trust-building through ministry features
 */
export const Ministries = memo(() => {
  const { ministries, isLoading } = useMinistries();
  const { ref: ministriesRef, isInView: ministriesInView } = useInView({ threshold: 0.05 });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-slate-600 text-lg">Loading ministries...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80)' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/90 via-[var(--color-primary)]/85 to-[var(--color-secondary)]/80" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--color-tertiary)]/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-[var(--color-secondary)] mb-6 rounded-full"
              />

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our Ministries
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-8 font-light max-w-2xl leading-relaxed">
                Discover ways to serve, grow, and connect with our church community. Every believer has been gifted by God for service in His kingdom.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#ministries" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
                  <Users size={20} />
                  Explore Ministries
                </a>
                <Link to="/contact" className="btn-secondary text-base px-8 py-4">
                  Get Involved
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministry Vision Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-tertiary)] to-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6">Serve & Grow Together</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At Deeper Life Bible Church, we believe every member is a minister. Our ministries provide opportunities for you to use your God-given gifts, grow in your faith, and make an eternal impact in the lives of others.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Connect</h3>
                <p className="text-slate-600 text-sm">Build meaningful relationships with others</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Grow</h3>
                <p className="text-slate-600 text-sm">Deepen your faith and biblical knowledge</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Serve</h3>
                <p className="text-slate-600 text-sm">Use your gifts to serve others and glorify God</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section id="ministries" className="section-padding bg-white" ref={ministriesRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ministriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[var(--color-secondary)] rounded-full" />
              <span className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider">
                Find Your Place
              </span>
              <div className="w-12 h-0.5 bg-[var(--color-secondary)] rounded-full" />
            </div>
            <h2 className="mb-4">Ministry Opportunities</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Each ministry is designed to help you grow spiritually and serve others effectively
            </p>
          </motion.div>

          <div className="space-y-24">
            {ministries.map((ministry, index) => {
              const Icon = (ministry as any).icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={ministry.id}
                  id={ministry.slug}
                  initial={{ opacity: 0, y: 50 }}
                  animate={ministriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content Side */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    {/* Icon Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={ministriesInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.4, type: "spring" }}
                      className="inline-block"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        {Icon && <Icon className="text-white" size={32} />}
                      </div>
                    </motion.div>

                    <h2 className="mb-4 text-[var(--color-primary)] text-3xl md:text-4xl font-display">
                      {ministry.name}
                    </h2>

                    <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                      {ministry.description}
                    </p>

                    {/* Features List */}
                    {ministry.features && ministry.features.length > 0 && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={ministriesInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                        className="space-y-3 mb-8"
                      >
                        {ministry.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700">
                            <div className="w-6 h-6 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></div>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}

                    {/* Schedule Badge */}
                    {ministry.schedule && (
                      <div className="flex items-center gap-2 text-slate-600 px-4 py-3 bg-slate-50 rounded-xl mb-6 inline-flex">
                        <Calendar size={18} className="text-[var(--color-secondary)]" />
                        <span className="text-sm font-medium">{ministry.schedule}</span>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={`/ministries/${ministry.slug}`}
                        className="btn-primary inline-flex items-center gap-2 group"
                      >
                        Learn More
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={ministriesInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                    className={`relative h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.15)] group ${
                      isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                    }`}
                  >
                    <img
                      src={ministry.image}
                      alt={ministry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Decorative Corner Element */}
                    <div className="absolute top-6 right-6 w-20 h-20 border-4 border-white/30 rounded-2xl backdrop-blur-sm"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">Ministry Impact</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Together, we're making a difference in our community and around the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '12+', label: 'Active Ministries' },
              { number: '500+', label: 'Volunteers Serving' },
              { number: '1,000+', label: 'Lives Impacted Monthly' },
              { number: '25+', label: 'Weekly Programs' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[var(--color-tertiary)] to-[var(--color-rose)]/50 rounded-3xl p-8 lg:p-12 text-center shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={36} />
              </div>

              <SectionHeader
                eyebrow="Get Involved"
                title="Ready to Get Involved?"
                description="Every member is a minister. Discover your gifts and find your place in God's work at Deeper Life Bible Church."
                align="center"
                className="mb-0"
              />

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">
                  <MapPin size={20} />
                  Contact Us to Learn More
                </Link>
                <a href="#ministries" className="btn-secondary px-8 py-4">
                  Explore Ministries
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Ministries.displayName = 'Ministries';

import { Heart, DollarSign, Globe, Users, Building2, Send, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { IMPACT_AREAS, GIVING_METHODS, SPECIAL_FUNDS, GIVING_FAQS, HERO_BACKGROUNDS } from '@/utils/data';

/**
 * Give page component with giving information, ways to give, and FAQs.
 * Enhanced with professional animations and homepage design patterns.
 *
 * Best Practices Applied:
 * - Framer Motion scroll animations
 * - Clear visual hierarchy
 * - Trust-building elements (security badges, transparency)
 * - Progressive disclosure (FAQ accordion)
 * - Strong CTAs throughout
 */
export const Give = memo(() => {
  const { ref: impactRef, isInView: impactInView } = useInView({ threshold: 0.1 });
  const { ref: waysRef, isInView: waysInView } = useInView({ threshold: 0.1 });
  const { ref: specialRef, isInView: specialInView } = useInView({ threshold: 0.1 });
  const { ref: faqRef, isInView: faqInView } = useInView({ threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Map icon names to actual icon components
  const iconMap: Record<string, any> = {
    'heart': Heart,
    'users': Users,
    'globe': Globe,
    'building': Building2,
    'dollar-sign': DollarSign,
    'send': Send,
    'shield': Shield,
  };

  const impactAreas = IMPACT_AREAS.map(area => ({
    icon: iconMap[area.icon] || Heart,
    title: area.title,
    description: area.description,
    color: area.title.includes('Ministry') ? 'from-rose-500 to-pink-600'
      : area.title.includes('Local') ? 'from-blue-500 to-indigo-600'
      : area.title.includes('Global') ? 'from-green-500 to-emerald-600'
      : 'from-amber-500 to-orange-600'
  }));

  const givingMethods = GIVING_METHODS.map(method => ({
    icon: iconMap[method.icon] || DollarSign,
    title: method.title,
    description: method.description,
    features: method.features,
    cta: method.cta,
    primary: method.primary
  }));

  const specialFunds = SPECIAL_FUNDS;
  const faqs = GIVING_FAQS;

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative h-[65vh] min-h-[550px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BACKGROUNDS.give})` }}
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
                Give Generously
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-8 font-light max-w-2xl leading-relaxed">
                Your generosity enables us to spread the Gospel, serve our community, and support ministries around the world. Every gift makes an eternal impact.
              </p>

              {/* Scripture Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 max-w-2xl"
              >
                <p className="text-white/90 italic text-lg mb-2">
                  "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver."
                </p>
                <p className="text-white/70 text-sm">— 2 Corinthians 9:7</p>
              </motion.div>

              <div className="flex flex-wrap gap-4">
                <a href="#ways-to-give" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
                  <Heart size={20} />
                  Give Now
                </a>
                <a href="#impact" className="btn-secondary text-base px-8 py-4">
                  See Your Impact
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Give Section */}
      <section className="bg-gradient-to-br from-[var(--color-tertiary)] to-white section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-6">Why We Give</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Giving is an act of worship and obedience to God. It reflects our trust in His provision and our commitment to advancing His kingdom work. At Deeper Life Bible Church, we believe that giving is a privilege and an opportunity to partner with God in His work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.08)] border border-slate-100"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Biblical Stewardship</h3>
                <p className="text-slate-600 text-sm">All funds are managed responsibly and used purposefully</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Financial Integrity</h3>
                <p className="text-slate-600 text-sm">Transparent accounting and annual reports for members</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Eternal Impact</h3>
                <p className="text-slate-600 text-sm">Every gift furthers the Gospel and transforms lives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Where Your Gifts Go Section */}
      <section id="impact" className="section-padding bg-white" ref={impactRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[var(--color-secondary)] rounded-full" />
              <span className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider">
                Your Impact
              </span>
              <div className="w-12 h-0.5 bg-[var(--color-secondary)] rounded-full" />
            </div>
            <h2 className="mb-4">Where Your Gifts Go</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Your generous giving supports vital ministry work in our church and beyond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="surface-card bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-4">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section id="ways-to-give" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100/50" ref={waysRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={waysInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[var(--color-secondary)] rounded-full" />
              <span className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider">
                Simple & Secure
              </span>
              <div className="w-12 h-0.5 bg-[var(--color-secondary)] rounded-full" />
            </div>
            <h2 className="mb-4">Ways to Give</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We've made it easy and secure for you to give in the way that works best for you
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {givingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={waysInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`surface-card bg-white p-8 ${method.primary ? 'lg:col-span-2 border-2 border-[var(--color-secondary)]' : ''}`}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <method.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl">{method.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {method.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                          <CheckCircle2 size={16} className="text-[var(--color-secondary)] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={method.primary ? 'btn-primary' : 'btn-secondary'}>
                      {method.cta}
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Giving Opportunities */}
      <section className="section-padding bg-white" ref={specialRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={specialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Special Giving Opportunities</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              In addition to general giving, you may designate your gift to specific ministries or projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialFunds.map((fund, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={specialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="surface-card bg-white p-8"
              >
                <h3 className="mb-4 text-xl">{fund.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {fund.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600 font-medium">{fund.raised}</span>
                    <span className="text-slate-500">of {fund.goal}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={specialInView ? { width: `${fund.percentage}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-right">{fund.percentage}% funded</p>
                </div>

                <button className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] font-semibold text-sm transition-colors inline-flex items-center gap-1 group">
                  Give to this fund
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50" ref={faqRef}>
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">
              Common questions about giving at Deeper Life Bible Church
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="surface-card bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg text-slate-800">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ArrowRight size={20} className="text-slate-400 rotate-90" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-secondary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart className="text-white" size={36} />
            </div>
            <h2 className="mb-6 text-white">Thank You for Your Generosity</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Your faithful giving makes a lasting impact for the kingdom of God. Together, we are advancing
              the Gospel and transforming lives through the power of Jesus Christ.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-[var(--color-primary)] hover:bg-white/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                <Heart size={20} />
                Give Now
              </button>
              <a href="/contact" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Give.displayName = 'Give';

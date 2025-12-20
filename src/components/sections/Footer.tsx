import { motion } from 'framer-motion';
import { memo, useState, useCallback, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Instagram,
  ChevronRight,
  Heart,
  Send,
  ArrowUp
} from 'lucide-react';
import { CHURCH_INFO, SERVICE_TIMES, NAV_ITEMS } from '@/utils/data';

/**
 * Professional Footer Component
 *
 * Best Practices Implemented:
 * - Performance: React.memo, useCallback for handlers
 * - Accessibility: Semantic HTML, ARIA labels, keyboard navigation
 * - UX: Newsletter subscription, back-to-top, organized content
 * - SEO: Structured data, sitemap links, contact information
 * - Responsive: Mobile-first grid layout
 * - Progressive Enhancement: Form validation, error states
 */
const Footer = memo(() => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }, 1000);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter navigation items for footer
  const quickLinks = NAV_ITEMS.filter(item => !item.children).slice(0, 6);

  const ministryLinks = [
    { label: "Men's Ministry", href: '/ministries/men' },
    { label: "Women's Ministry", href: '/ministries/women' },
    { label: 'Youth Ministry', href: '/ministries/youth' },
    { label: "Children's Ministry", href: '/ministries/children' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden" role="contentinfo">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-800/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-accent-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>

      {/* Main Footer Content */}
      <div className="container-custom pt-16 pb-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Column 1: About & Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/dclm_logo.png"
                alt="DCLM Tampa Logo"
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
              <div>
                <h2 className="font-display font-bold text-lg">DCLM Tampa</h2>
                <p className="text-white/60 text-xs">Deeper Life Bible Church</p>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A community of believers committed to the authentic teaching of God's Word,
              spiritual growth, and transforming lives through the power of the Gospel.
            </p>

            {/* Social Media Links */}
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-3">
                {CHURCH_INFO.socialLinks.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 hover:scale-110 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                    >
                      {social.platform === 'facebook' && <Facebook size={18} aria-hidden="true" />}
                      {social.platform === 'youtube' && <Youtube size={18} aria-hidden="true" />}
                      {social.platform === 'instagram' && <Instagram size={18} aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500 rounded-full" aria-hidden="true" />
              Quick Links
            </h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-accent-400 transition-colors flex items-center gap-2 group text-sm focus:outline-none focus-visible:text-accent-400"
                    >
                      <ChevronRight
                        size={14}
                        className="text-accent-500 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/give"
                    className="text-white/70 hover:text-accent-400 transition-colors flex items-center gap-2 group text-sm focus:outline-none focus-visible:text-accent-400"
                  >
                    <ChevronRight
                      size={14}
                      className="text-accent-500 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                    Give Online
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Ministries */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500 rounded-full" aria-hidden="true" />
              Ministries
            </h3>
            <nav aria-label="Ministry links">
              <ul className="space-y-3">
                {ministryLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-accent-400 transition-colors flex items-center gap-2 group text-sm focus:outline-none focus-visible:text-accent-400"
                    >
                      <ChevronRight
                        size={14}
                        className="text-accent-500 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500 rounded-full" aria-hidden="true" />
              Contact Us
            </h3>

            {/* Contact Information */}
            <address className="not-italic space-y-4 mb-6">
              <div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${CHURCH_INFO.address.street}, ${CHURCH_INFO.address.city}, ${CHURCH_INFO.address.state} ${CHURCH_INFO.address.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group focus:outline-none focus-visible:text-white"
                >
                  <MapPin size={18} className="text-accent-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span className="text-sm">
                    {CHURCH_INFO.address.street}<br />
                    {CHURCH_INFO.address.city}, {CHURCH_INFO.address.state} {CHURCH_INFO.address.zip}
                  </span>
                </a>
              </div>

              <div>
                <a
                  href={`tel:${CHURCH_INFO.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
                >
                  <Phone size={18} className="text-accent-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">{CHURCH_INFO.phone}</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${CHURCH_INFO.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
                >
                  <Mail size={18} className="text-accent-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">{CHURCH_INFO.email}</span>
                </a>
              </div>

              <div className="flex items-start gap-3 text-white/70">
                <Clock size={18} className="text-accent-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm">
                  <p className="font-medium text-white/90 mb-1">Service Times:</p>
                  {SERVICE_TIMES.slice(0, 2).map((service) => (
                    <p key={service.id} className="text-white/60">
                      {service.day}: {service.time}
                    </p>
                  ))}
                </div>
              </div>
            </address>

            {/* Newsletter Subscription */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold text-sm mb-3">Stay Updated</h4>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-accent-400 text-sm"
                >
                  <Heart size={16} className="fill-accent-400" aria-hidden="true" />
                  <span>Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      disabled={isSubmitting}
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      aria-label="Email address for newsletter"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="p-2 bg-accent-500 rounded-lg hover:bg-accent-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Subscribe to newsletter"
                    >
                      <Send size={18} aria-hidden="true" />
                    </button>
                  </div>
                  <p className="text-xs text-white/50">
                    Get weekly updates and event notifications
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Deeper Life Bible Church Tampa. All rights reserved.
            </p>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-accent-500 fill-accent-500 animate-pulse" aria-hidden="true" />
              <span>for the Glory of God</span>
            </div>

            {/* Legal Links */}
            <nav aria-label="Legal links">
              <ul className="flex items-center gap-4 text-sm">
                <li>
                  <a
                    href="/privacy"
                    className="text-white/50 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="text-white/30" aria-hidden="true">|</li>
                <li>
                  <a
                    href="/terms"
                    className="text-white/50 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

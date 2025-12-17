import { useState, useEffect, useCallback, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';
import { NAV_ITEMS, CHURCH_INFO } from '@/utils/data';
import type { NavItem } from '@/types';

/**
 * Professional Header Component
 *
 * Best Practices Implemented:
 * - Performance: React.memo, useCallback for handlers, throttled scroll
 * - Accessibility: ARIA labels, keyboard navigation, focus management
 * - UX: Smooth animations, hover states, mobile-first design
 * - SEO: Semantic HTML, proper heading hierarchy
 * - Responsive: Mobile menu with touch-friendly targets
 * - Progressive Enhancement: Works without JS, enhanced with it
 */
const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Throttled scroll handler for performance
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = useCallback((label: string) => {
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      {/* Top Bar - Contact & Social */}
      <div className="bg-primary-900 text-white/90 text-sm hidden md:block">
        <div className="container-custom py-2.5">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${CHURCH_INFO.phone}`}
                className="flex items-center gap-2 hover:text-accent-400 transition-colors duration-200"
                aria-label={`Call us at ${CHURCH_INFO.phone}`}
              >
                <Phone size={14} aria-hidden="true" />
                <span>{CHURCH_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CHURCH_INFO.email}`}
                className="flex items-center gap-2 hover:text-accent-400 transition-colors duration-200"
                aria-label={`Email us at ${CHURCH_INFO.email}`}
              >
                <Mail size={14} aria-hidden="true" />
                <span>{CHURCH_INFO.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-4">
                {CHURCH_INFO.socialLinks.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="hover:text-accent-400 transition-colors duration-200 inline-block"
                    >
                      {social.platform === 'facebook' && <Facebook size={16} aria-hidden="true" />}
                      {social.platform === 'youtube' && <Youtube size={16} aria-hidden="true" />}
                      {social.platform === 'instagram' && <Instagram size={16} aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-800/98 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.15)]'
            : 'bg-primary-800/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
        }`}
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-800 rounded-lg"
              aria-label="DCLM Tampa - Home"
            >
              <img
                src="/dclm_logo.png"
                alt=""
                role="presentation"
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
              <div className="hidden sm:block">
                <div className="font-display font-bold text-white text-lg leading-tight">
                  DCLM Tampa
                </div>
                <p className="text-white/70 text-xs">Deeper Life Bible Church</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" role="navigation">
              {NAV_ITEMS.map((item) => (
                <NavItemDesktop
                  key={item.label}
                  item={item}
                  isActive={activeDropdown === item.label}
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="/contact"
                className="btn-primary text-sm px-6 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-800"
              >
                Plan Your Visit
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-primary-800/98 backdrop-blur-md border-t border-white/10 shadow-2xl"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-custom py-6">
              <nav>
                {NAV_ITEMS.map((item, index) => (
                  <NavItemMobile
                    key={item.label}
                    item={item}
                    index={index}
                    onNavigate={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="/contact"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Plan Your Visit
                </a>
              </div>

              {/* Mobile Social Links */}
              <div className="mt-6 flex items-center justify-center gap-4">
                {CHURCH_INFO.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-accent-500 transition-all duration-300"
                  >
                    {social.platform === 'facebook' && <Facebook size={18} aria-hidden="true" />}
                    {social.platform === 'youtube' && <Youtube size={18} aria-hidden="true" />}
                    {social.platform === 'instagram' && <Instagram size={18} aria-hidden="true" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

/**
 * Desktop Navigation Item Component
 * Handles hover states and dropdown menus
 */
const NavItemDesktop = memo(({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={item.href}
        className={`flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white font-medium text-sm transition-all duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
          isActive ? 'text-white bg-white/10' : ''
        }`}
        aria-expanded={hasChildren ? isActive : undefined}
        aria-haspopup={hasChildren ? 'true' : undefined}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        )}
      </a>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {hasChildren && isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden border border-slate-100"
            role="menu"
          >
            <div className="py-2">
              {item.children?.map((child: NavItem) => (
                <a
                  key={child.label}
                  href={child.href}
                  className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors focus:outline-none focus-visible:bg-primary-50 focus-visible:text-primary-700"
                  role="menuitem"
                >
                  {child.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

NavItemDesktop.displayName = 'NavItemDesktop';

/**
 * Mobile Navigation Item Component
 * Handles accordion-style navigation for mobile
 */
const NavItemMobile = memo(({
  item,
  index,
  onNavigate
}: {
  item: NavItem;
  index: number;
  onNavigate: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="border-b border-white/5 last:border-0"
    >
      <div className="flex items-center justify-between">
        <a
          href={item.href}
          className="flex-1 py-3 text-white/90 hover:text-white font-medium transition-colors focus:outline-none focus-visible:text-white"
          onClick={onNavigate}
        >
          {item.label}
        </a>
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded"
            aria-label={`Toggle ${item.label} submenu`}
            aria-expanded={isOpen}
          >
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4 border-l-2 border-accent-500/50 ml-2 mb-2"
          >
            {item.children?.map((child: NavItem) => (
              <a
                key={child.label}
                href={child.href}
                className="block py-2 text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
                onClick={onNavigate}
              >
                {child.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

NavItemMobile.displayName = 'NavItemMobile';

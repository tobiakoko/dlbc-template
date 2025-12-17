import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

/**
 * 404 Not Found Page
 *
 * Professional error page with:
 * - Clear messaging about the error
 * - Helpful navigation options
 * - Search functionality suggestion
 * - Breadcrumb trail back to home
 * - Consistent branding
 */
export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <h1 className="text-[120px] sm:text-[160px] lg:text-[200px] font-display font-bold text-primary-800 leading-none opacity-10">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="-mt-32 sm:-mt-40 lg:-mt-48 relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Home size={20} />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-800 font-semibold rounded-lg border-2 border-primary-800 hover:bg-primary-50 transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border-t border-neutral-200 pt-8"
          >
            <p className="text-sm text-neutral-500 mb-4 flex items-center justify-center gap-2">
              <Search size={16} />
              Popular pages you might be looking for:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/ministries', label: 'Ministries' },
                { to: '/events', label: 'Events' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
                { to: '/give', label: 'Give' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 text-sm text-primary-700 hover:text-primary-800 hover:bg-primary-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound;

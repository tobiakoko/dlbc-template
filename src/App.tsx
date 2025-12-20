import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SanityStudio from './pages/Studio';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Ministries = lazy(() => import('./pages/Ministries').then(m => ({ default: m.Ministries })));
const MinistryDetail = lazy(() => import('./pages/Ministries/MinistryDetail').then(m => ({ default: m.MinistryDetail })));
const Events = lazy(() => import('./pages/Events').then(m => ({ default: m.Events })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Give = lazy(() => import('./pages/Give').then(m => ({ default: m.Give })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const PhotoGallery = lazy(() => import('./pages/PhotoGallery'));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

/**
 * Loading Component
 * Displayed while pages are being loaded
 */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-pulse text-neutral-600 text-lg">Loading...</div>
    </div>
  </div>
);

/**
 * Root Application Component
 *
 * Manages routing, layout structure, and global components.
 * Uses lazy loading for pages to improve initial load performance.
 *
 * Structure:
 * - Skip link for accessibility
 * - Header navigation
 * - Main content area with routing
 * - Footer
 * - Toast notifications
 */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Sanity Studio Route - Full screen, no layout */}
        <Route path="/studio/*" element={<SanityStudio />} />

        {/* Main site routes with Header/Footer layout */}
        <Route
          path="/*"
          element={
            <>
              {/* Skip to main content link for keyboard users */}
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>

              <div className="min-h-screen flex flex-col bg-white">
                {/* Site Header */}
                <Header />

                {/* Main Content Area */}
                <main
                  id="main-content"
                  tabIndex={-1}
                  className="flex-1 outline-none"
                  role="main"
                >
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/ministries" element={<Ministries />} />
                      <Route path="/ministries/:slug" element={<MinistryDetail />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/gallery" element={<PhotoGallery />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/give" element={<Give />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/terms" element={<Terms />} />
                      {/* 404 Catch-all route - must be last */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </main>

                {/* Site Footer */}
                <Footer />

                {/* Toast Notifications */}
                <Toaster
                  position="bottom-right"
                  richColors
                  closeButton
                  toastOptions={{
                    duration: 4000,
                    className: 'font-body',
                  }}
                />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

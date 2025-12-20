import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to handle scrolling behavior on navigation
 *
 * - Scrolls to hash anchor when hash is present
 * - Scrolls to top when navigating to a new page
 * - Maintains scroll position only when hash changes on same page
 */
export function useScrollToHash() {
  const location = useLocation();
  const lastPathnameRef = useRef<string>('');

  useEffect(() => {
    const hash = location.hash;
    const pathname = location.pathname;
    const pathnameChanged = lastPathnameRef.current !== pathname;

    // Update the last pathname
    lastPathnameRef.current = pathname;

    if (hash) {
      // If there's a hash, scroll to the element
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);

      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    } else if (pathnameChanged) {
      // If pathname changed and no hash, scroll to top
      // Use instant scroll on pathname change for better UX
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.hash, location.pathname]);
}

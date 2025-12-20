import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to handle scrolling to hash anchors
 *
 * Automatically scrolls to the element with the ID matching the hash
 * when the component mounts or when the hash changes.
 */
export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Get the hash from the URL (e.g., "#our-story")
    const hash = location.hash;

    if (hash) {
      // Remove the '#' and get the element
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
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);
}

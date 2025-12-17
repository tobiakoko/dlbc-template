/**
 * Schema Types Index
 *
 * Central export for all Sanity schema types
 */

// Object Types (Reusable components)
import ctaButton from './objects/ctaButton';
import metric from './objects/metric';
import richImage from './objects/richImage';
import portableText from './objects/portableText';

// Singleton Documents (Site-wide settings)
import siteSettings from './singletons/siteSettings';
import homePage from './singletons/homePage';
import pastorWelcome from './singletons/pastorWelcome';

// Document Types (Content)
import ministry from './documents/ministry';
import event from './documents/event';
import sermon from './documents/sermon';
import sermonSeries from './documents/sermonSeries';

/**
 * Schema types array
 * Order determines the display order in Sanity Studio
 */
export const schemaTypes = [
  // Singletons first for easy access
  siteSettings,
  homePage,
  pastorWelcome,

  // Main content types
  ministry,
  event,
  sermon,
  sermonSeries,

  // Object types (hidden from main navigation)
  ctaButton,
  metric,
  richImage,
  portableText,
];

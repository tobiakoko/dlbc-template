/**
 * Sanity CMS Configuration
 *
 * Configuration for connecting to Sanity.io CMS.
 * Environment variables should be set in .env file:
 * - VITE_SANITY_PROJECT_ID: Your Sanity project ID
 * - VITE_SANITY_DATASET: Dataset name (usually 'production' or 'development')
 * - VITE_SANITY_API_VERSION: API version (optional, defaults to current date)
 */

/**
 * Sanity client configuration object
 */
export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined,
  dataset: import.meta.env.VITE_SANITY_DATASET as string | undefined,
  apiVersion: (import.meta.env.VITE_SANITY_API_VERSION as string | undefined) ?? '2024-01-01',
  useCdn: import.meta.env.PROD ? true : false, // Use CDN in production, direct API in development for fresh data
  perspective: 'published' as const, // Only fetch published content
};

/**
 * Check if Sanity credentials are properly configured
 * @returns {boolean} True if both projectId and dataset are defined
 */
export const hasSanityCredentials = Boolean(
  sanityConfig.projectId && sanityConfig.dataset
);

/**
 * Get the Sanity Studio URL for the current project
 * @returns {string} Studio URL or empty string if project ID not configured
 */
export const getSanityStudioUrl = (): string => {
  if (!sanityConfig.projectId) return '';
  return `https://${sanityConfig.projectId}.sanity.studio`;
};

/**
 * Validate Sanity configuration
 * Logs warnings in development if configuration is incomplete
 */
if (import.meta.env.DEV && !hasSanityCredentials) {
  console.warn(
    '⚠️ Sanity credentials not configured. Please set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET in your .env file.'
  );
}

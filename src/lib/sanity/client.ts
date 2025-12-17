import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';
import { sanityConfig, hasSanityCredentials } from './config';

export const sanityClient: SanityClient | null = hasSanityCredentials
  ? createClient({
      ...sanityConfig,
      perspective: 'published',
    })
  : null;

if (!hasSanityCredentials && import.meta.env.DEV) {
  console.warn(
    'Sanity credentials are missing. Add VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET to use live CMS content.',
  );
}

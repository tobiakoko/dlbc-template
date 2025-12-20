/**
 * Sanity Studio Configuration
 *
 * This is the main configuration file for Sanity Studio.
 * It defines the workspace, schemas, plugins, and custom configurations.
 *
 * @see https://www.sanity.io/docs/configuration
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './studio/schemas';
import { structure } from './studio/structure';

// Define the Sanity project configuration
// Use import.meta.env for Vite, fallback to process.env for CLI
const projectId =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_PROJECT_ID) ||
  (typeof process !== 'undefined' && process.env?.SANITY_STUDIO_PROJECT_ID) ||
  '';
const dataset =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_DATASET) ||
  (typeof process !== 'undefined' && process.env?.SANITY_STUDIO_DATASET) ||
  'production';

export default defineConfig({
  name: 'default',
  title: 'DLBC Website',

  // Project credentials
  projectId,
  dataset,

  // Define plugins
  plugins: [
    // Structure tool for custom desk structure
    structureTool({
      structure,
    }),
    // Vision tool for GROQ query testing
    visionTool({
      defaultApiVersion: '2024-01-01',
    }),
  ],

  // Define schema types
  schema: {
    types: schemaTypes,
  },

  // Studio UI configuration
  studio: {
    components: {
      // Custom logo component (optional)
      // logo: CustomLogo,
    },
  },

  // Document actions configuration
  document: {
    // Hide the "Unpublish" action for specific document types
    actions: (prev, { schemaType }) => {
      // For singleton documents, hide publish/unpublish/duplicate
      if (['siteSettings', 'homePage'].includes(schemaType)) {
        return prev.filter(
          ({ action }) => !['unpublish', 'duplicate'].includes(action || '')
        );
      }
      return prev;
    },
  },

  // API versioning
  apiVersion: '2024-01-01',

  // CORS and allowed origins (for embedded studio)
  cors: {
    allowCredentials: true,
  },
});

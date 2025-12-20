import { Studio } from 'sanity';
import config from '../../sanity.config';

/**
 * Embedded Sanity Studio
 *
 * Renders the Sanity Studio interface within the React app
 * Accessible at /studio route
 */
export function SanityStudio() {
  return (
    <Studio
      config={config}
      unstable_globalStyles
    />
  );
}

export default SanityStudio;

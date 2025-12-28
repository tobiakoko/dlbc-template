import { memo } from 'react';
import Hero from '@/components/sections/Hero';
import { PastorWelcome } from '@/components/sections/PastorWelcome';
import AboutSection from '@/components/sections/AboutSection';
import ServiceTimes from '@/components/sections/ServiceTimes';
import EventsSection from '@/components/sections/EventsSection';
import MinistriesSection from '@/components/sections/MinistriesSection';
import SermonsSection from '@/components/sections/SermonsSection';
import PictureGallery from '@/components/sections/PictureGallery';
import { leadership, DEFAULT_PASTOR_MESSAGE, DEFAULT_IMAGES } from '@/utils/data';

/**
 * Home Page Component
 *
 * Main landing page for the church website featuring:
 * - Hero section with call-to-actions
 * - About section with church information
 * - Service times and schedules
 * - Upcoming events
 * - Ministry highlights
 * - Photo and picture galleries
 * - Recent sermons
 *
 * Uses a semantic HTML structure with proper ARIA labels for accessibility.
 * All sections are memoized to optimize performance.
 *
 * @returns {JSX.Element} The home page layout
 */
export const Home = memo(() => {
  // Get the local pastor from leadership data
  const localPastor = leadership.find(leader => leader.role.includes('Local Pastor')) || leadership[leadership.length - 1];

  // Fallback data for Pastor Welcome section using data.ts
  const pastorData = {
    pastorName: localPastor.name,
    pastorTitle: localPastor.role,
    pastorImage: localPastor.image || DEFAULT_IMAGES.pastor,
    welcomeMessage: DEFAULT_PASTOR_MESSAGE.map((text) => ({
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: text
        }
      ]
    })),
    signature: `Blessings in Christ, ${localPastor.name}`,
    callToAction: {
      enabled: true,
      label: "Learn More About Our Church",
      href: "/about"
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main className="flex flex-col">
        <ServiceTimes />
        <PastorWelcome {...pastorData} />
        <AboutSection />
        <EventsSection />
        <MinistriesSection />
        <PictureGallery />
        <SermonsSection />
      </main>
    </div>
  );
});

Home.displayName = 'Home';

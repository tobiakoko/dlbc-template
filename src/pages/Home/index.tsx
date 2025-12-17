import { memo } from 'react';
import Hero from '@/components/sections/Hero';
import { PastorWelcome } from '@/components/sections/PastorWelcome';
import AboutSection from '@/components/sections/AboutSection';
import ServiceTimes from '@/components/sections/ServiceTimes';
import EventsSection from '@/components/sections/EventsSection';
import MinistriesSection from '@/components/sections/MinistriesSection';
import SermonsSection from '@/components/sections/SermonsSection';
import PrayerRequestSection from '@/components/sections/PrayerRequestSection';

/**
 * Home Page Component
 *
 * Main landing page for the church website featuring:
 * - Hero section with call-to-actions
 * - About section with church information
 * - Service times and schedules
 * - Upcoming events
 * - Ministry highlights
 * - Recent sermons
 * - Prayer request section
 *
 * Uses a semantic HTML structure with proper ARIA labels for accessibility.
 * All sections are memoized to optimize performance.
 *
 * @returns {JSX.Element} The home page layout
 */
export const Home = memo(() => {
  // Fallback data for Pastor Welcome section
  const pastorData = {
    pastorName: "Pastor James Thompson",
    pastorTitle: "Regional Pastor",
    pastorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    welcomeMessage: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Welcome to Deeper Life Bible Church Tampa! Whether you\'re visiting for the first time or have been part of our family for years, we\'re grateful you\'re here.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Our church is built on a foundation of biblical truth, authentic worship, and genuine community. We believe that everyone has a place at God\'s table, and we\'re committed to helping you discover and fulfill God\'s unique purpose for your life.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'I invite you to join us this Sunday and experience the transforming power of God\'s Word in a warm, welcoming environment. We can\'t wait to meet you!'
          }
        ]
      }
    ],
    signature: "Blessings in Christ, Pastor James Thompson",
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
        <SermonsSection />
        <PrayerRequestSection />
      </main>
    </div>
  );
});

Home.displayName = 'Home';

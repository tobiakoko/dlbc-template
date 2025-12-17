import { useMemo } from 'react';
import { useSanityQuery } from './useSanityQuery';
import { siteContentQuery } from '@/lib/sanity/queries';
import type { SiteContent } from '@/types/cms';

const fallbackSiteContent: SiteContent = {
  brand: {
    name: 'Deeper Life Bible Church',
    location: 'Tampa, Florida',
    initials: 'DL',
    tagline: 'Believe. Belong. Become.',
  },
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Ministries', path: '/ministries' },
    { label: 'Events', path: '/events' },
    { label: 'Contact', path: '/contact' },
    { label: 'Give', path: '/give' },
  ],
  navCtas: [
    { label: 'Plan a Visit', href: '/plan', variant: 'secondary' },
    { label: 'Give', href: '/give', variant: 'primary' },
  ],
  footer: {
    visitUs: {
      campusName: 'Temple Terrace Ministry Center',
      address: '9720 N 56th St · Tampa, FL 33637',
    },
    serviceTimes: [
      { title: 'Sunday Worship', description: '9:00 AM & 11:00 AM' },
      { title: 'Midweek Bible Study', description: 'Wednesdays · 7:00 PM' },
    ],
    planVisitCopy: 'Let us know you are coming and our welcome team will be ready to receive you.',
    quickLinks: [
      { label: 'About Us', path: '/about' },
      { label: 'Ministries', path: '/ministries' },
      { label: 'Events', path: '/events' },
      { label: 'Contact', path: '/contact' },
      { label: 'Give', path: '/give' },
    ],
    headline: 'Rooted in Scripture. Alive in Worship.',
    description:
      'A Christ-centered community in Tampa devoted to worship, discipleship, and transforming our city with the Gospel.',
    contact: {
      address: '9720 N 56th St, Tampa, FL 33637',
      phone: '(813) 555-0123',
      email: 'info@dlbctampa.org',
    },
    socials: [
      { label: 'YouTube', url: 'https://youtube.com', iconName: 'youtube' },
      { label: 'Facebook', url: 'https://facebook.com', iconName: 'facebook' },
      { label: 'Instagram', url: 'https://instagram.com', iconName: 'instagram' },
    ],
    newsletterCopy: "Stay connected with our weekly newsletter. You'll receive teaching and event updates.",
    ctas: [
      { label: 'Plan a Visit', href: '/plan', variant: 'secondary' },
      { label: 'Give', href: '/give', variant: 'primary' },
    ],
    copyright: `© ${new Date().getFullYear()} Deeper Life Bible Church Tampa`,
  },
};

export function useSiteContent() {
  const { data, isLoading, error } = useSanityQuery<SiteContent>(siteContentQuery);
  const content = useMemo(() => data ?? fallbackSiteContent, [data]);

  return {
    content,
    isLoading,
    error,
    isUsingFallback: !data,
  };
}

import { useMemo } from 'react';
import { useSanityQuery } from './useSanityQuery';
import { homePageQuery } from '@/lib/sanity/queries';
import type { HomePageContent } from '@/types/cms';

const fallbackHomeContent: HomePageContent = {
  hero: {
    title: 'Join our church family & worship Jesus together',
    subtitle:
      'A multi-generational community in Tampa devoted to Scripture, presence-centered worship, and disciple-making.',
    backgroundImage:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1600&q=80',
    buttons: [
      { label: 'Plan Your Visit', href: '/contact', variant: 'primary' },
      { label: 'Watch Online', href: '/events', variant: 'outline' },
    ],
    metrics: [
      { label: 'Years in Tampa', value: '21+' },
      { label: 'Small Groups', value: '18' },
      { label: 'Nations Represented', value: '22' },
    ],
    gathering: {
      eyebrow: 'This Weekend',
      title: 'Sunday Worship · 10:00 AM',
      description: 'Temple Terrace Ministry Center · Tampa, FL',
      details: [
        { label: 'Midweek Bible Study', value: 'Wednesdays · 7:00 PM', iconName: 'calendarDays' },
        { label: 'Prayer & Evangelism', value: 'Fridays · 6:30 PM', iconName: 'clock' },
        { label: 'Campus', value: '9720 N 56th St, Tampa', iconName: 'mapPin' },
      ],
      spotlight: { label: 'Next Baptism', value: 'January 19 · Register online' },
    },
  },
  about: {
    eyebrow: 'About Us',
    title: 'Rooted in Scripture, alive in the Spirit',
    description:
      'Since 2003, Deeper Life Tampa has been a welcoming home for families, college students, and internationals to encounter Jesus.',
    paragraphs: [
      "Deeper Life Bible Church is committed to teaching the whole counsel of God's Word, equipping believers for ministry, and reaching the lost with the Gospel of Jesus Christ.",
      'We believe in the authority of Scripture, the power of prayer, and the importance of living a life transformed by the Holy Spirit.',
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1637962638310-e6787f7eb324?auto=format&fit=crop&w=1080&q=80',
      alt: 'Open Bible',
    },
    button: { label: 'Discover Our Story', href: '/about', variant: 'secondary' },
    cards: [
      {
        label: 'Lead Pastor',
        title: 'Michael Brown',
        description: 'Serving Tampa for 18 years',
      },
      {
        label: 'Latest Series',
        title: 'The Book of Acts',
        description: 'Sundays · 10:00 AM',
      },
      {
        label: 'Historic Orthodoxy',
        title: 'Teaching the whole counsel of God',
        description: 'Conviction, clarity, and practical discipleship.',
      },
      {
        label: 'Presence-Driven Worship',
        title: 'Every generation encounters Jesus',
        description: 'Reverent, joyful, and Spirit-led gatherings.',
      },
      {
        label: 'Mission in Tampa',
        title: 'Serving our city with compassion',
        description: 'Prayer, outreach, and caring partnerships.',
      },
    ],
  },
  serviceIntro: {
    eyebrow: 'Gather With Us',
    title: 'Sundays anchored in the gospel',
    description:
      "From the lobby to the sanctuary, you'll experience gospel-centered worship, teaching, and community designed to help you know Jesus and make Him known.",
  },
  serviceTimes: [
    {
      title: 'Sunday Worship',
      time: '9:00 AM & 11:00 AM',
      description: 'Join us for worship, prayer, and biblical teaching',
      iconName: 'clock',
    },
    {
      title: 'Bible Study',
      time: 'Wednesday 7:00 PM',
      description: 'Deep dive into Scripture and grow in understanding',
      iconName: 'bookOpen',
    },
    {
      title: 'Community Groups',
      time: 'Throughout the Week',
      description: 'Connect in small groups for fellowship and prayer',
      iconName: 'users',
    },
  ],
  events: [
    {
      id: 'event-1',
      title: 'Christmas Candlelight Service',
      date: 'December 24, 2024',
      time: '7:00 PM',
      location: 'Main Sanctuary',
      description:
        'An intimate evening of worship, Scripture, and candlelight as we celebrate the birth of Jesus.',
      href: '/events#candlelight',
      featured: true,
    },
    {
      id: 'event-2',
      title: "New Year's Prayer Service",
      date: 'December 31, 2024',
      time: '10:00 PM – 12:30 AM',
      location: 'Main Sanctuary',
      description:
        'Join the church family for corporate prayer, worship, and testimonies as we enter the new year.',
      href: '/events#watch-night',
    },
    {
      id: 'event-3',
      title: 'Winter Bible Conference',
      date: 'January 12–14, 2025',
      time: 'Various Times',
      location: 'Church Campus',
      description:
        'Three days of teaching intensives, breakout sessions, and devotional worship centered on the book of Acts.',
      href: '/events#winter-conference',
    },
  ],
  sermons: [
    {
      id: 'sermon-1',
      title: 'Walking in Faith',
      date: 'December 8, 2024',
      speaker: 'Pastor Michael Brown',
      series: 'Hebrews',
      thumbnail: 'https://images.unsplash.com/photo-1462219184700-7b35584032f1?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'sermon-2',
      title: 'The Power of Prayer',
      date: 'December 1, 2024',
      speaker: 'Pastor Michael Brown',
      series: 'Foundations',
      thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'sermon-3',
      title: 'Living in Grace',
      date: 'November 24, 2024',
      speaker: 'Pastor Sarah Ogun',
      series: 'Romans',
      thumbnail: 'https://images.unsplash.com/photo-1462219184700-7b35584032f1?auto=format&fit=crop&w=900&q=80',
    },
  ],
  ministries: [
    {
      id: 'ministry-1',
      title: "Children's Ministry",
      description: 'Nurturing young hearts with biblical truth and godly character.',
      image: 'https://images.unsplash.com/photo-1713012633197-1426a345ca99?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ministry-2',
      title: 'Youth Collective',
      description: 'Empowering teens to live boldly for Christ in culture.',
      image: 'https://images.unsplash.com/photo-1763573677112-ab362f9fa2ca?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ministry-3',
      title: 'Community Outreach',
      description: 'Serving Tampa through prayer walks, meals, and caring partnerships.',
      image: 'https://images.unsplash.com/photo-1760992004210-44a502a2872d?auto=format&fit=crop&w=900&q=80',
    },
  ],
  visitInfo: {
    eyebrow: 'Plan A Visit',
    title: 'Arrive confident & cared for',
    description:
      'Tell us when you’re coming and our welcome team will reserve seats, provide kids check-in, and answer any questions.',
    cards: [
      {
        title: 'Parking & Check-in',
        description: 'Dedicated first-time guest parking & kids check-in hosts.',
      },
      {
        title: 'Hospitality Team',
        description: 'Meet you at the door & walk you through every step.',
      },
    ],
    highlightImage: {
      url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      alt: 'Tampa skyline',
    },
    schedule: [
      { label: 'Sunday Worship', value: '9:00 & 11:00 AM' },
      { label: 'Midweek Study', value: 'Wednesdays · 7:00 PM' },
      { label: 'Prayer & Evangelism', value: 'Fridays · 6:30 PM' },
    ],
    ctas: [
      { label: 'Plan Your Visit', href: '/contact', variant: 'primary' },
      { label: 'What to Expect', href: '/about', variant: 'secondary' },
    ],
    location: '9720 N 56th St · Tampa, FL',
    address: 'Temple Terrace Ministry Center',
  },
};

export function useHomeContent() {
  const { data, isLoading, error } = useSanityQuery<HomePageContent>(homePageQuery);
  const content = useMemo(() => data ?? fallbackHomeContent, [data]);

  return {
    content,
    isLoading,
    error,
    isUsingFallback: !data,
  };
}

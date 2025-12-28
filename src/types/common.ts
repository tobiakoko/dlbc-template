/**
 * Common types used across the application
 *
 * These types represent the unified data models used throughout the app.
 * They are designed to work with both static data and CMS content.
 */

import type { ReactNode } from 'react';

// ============================================================================
// Icon & UI Types
// ============================================================================

export type IconName =
  | 'calendar'
  | 'calendarDays'
  | 'clock'
  | 'mapPin'
  | 'bookOpen'
  | 'users'
  | 'youtube'
  | 'facebook'
  | 'instagram'
  | 'book'
  | 'book-open'
  | 'music'
  | 'heart'
  | 'dollar-sign'
  | 'building'
  | 'send'
  | 'shield'
  | 'globe';

export type CTAButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface CTAButton {
  label: string;
  href: string;
  variant?: CTAButtonVariant;
  external?: boolean;
  iconName?: IconName;
  icon?: ReactNode;
}

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform?: string;
  url: string;
  label: string;
  iconName?: IconName;
}

// ============================================================================
// Church Information Types
// ============================================================================

export interface ChurchInfo {
  name: string;
  shortName: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  socialLinks: SocialLink[];
}

// ============================================================================
// Service & Event Types
// ============================================================================

export interface ServiceTime {
  id?: string;
  title?: string;
  day?: string;
  name?: string;
  time: string;
  description: string;
  icon?: string; // Legacy field for backwards compatibility
  iconName?: IconName;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  category?: string;
  featured?: boolean;
  href?: string;
  ctaLabel?: string;
}

// Alias for backwards compatibility
export type ChurchEvent = Event;

// ============================================================================
// Ministry & Leadership Types
// ============================================================================

export interface Ministry {
  id: string;
  name?: string;
  title?: string; // Alias for name - either name or title must be provided
  slug?: string;
  description: string;
  longDescription?: string;
  image: string;
  heroImage?: string;
  leader?: string;
  leaderBio?: string;
  leaderImage?: string;
  meetingTime?: string;
  schedule?: string;
  meetingLocation?: string;
  contactEmail?: string;
  targetAudience?: string;
  features?: string[];
  upcomingEvents?: Array<{
    _key?: string;
    title: string;
    date: string;
    time?: string;
    location?: string;
    description?: string;
  }>;
  joinInfo?: {
    howToJoin?: string;
    requirements?: string[];
    nextSteps?: string[];
  };
}

export interface Leader {
  id: string;
  name: string;
  role?: string;
  title?: string;
  image: string;
  bio: string;
}

// ============================================================================
// Sermon Types
// ============================================================================

export interface Sermon {
  id: string;
  title: string;
  speaker?: string;
  preacher?: string; // Alias for speaker
  date: string;
  duration?: string;
  thumbnail: string;
  series?: string;
  category?: string;
  description?: string;
  scripture?: string;
}

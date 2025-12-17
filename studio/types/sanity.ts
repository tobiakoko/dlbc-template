/**
 * Sanity Studio Type Definitions
 *
 * TypeScript types for Sanity documents and objects
 */

import type { SanityImageAssetDocument } from '@sanity/client';

// ============================================================================
// Base Types
// ============================================================================

export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface SanityReference {
  _type: 'reference';
  _ref: string;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityImage {
  _type: 'image';
  asset: SanityReference | SanityImageAssetDocument;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface RichImage extends SanityImage {
  alt: string;
  caption?: string;
}

// ============================================================================
// Portable Text
// ============================================================================

export interface PortableTextBlock {
  _type: 'block';
  _key: string;
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
  children: PortableTextSpan[];
  markDefs: PortableTextMarkDef[];
  listItem?: 'bullet' | 'number';
  level?: number;
}

export interface PortableTextSpan {
  _type: 'span';
  _key: string;
  text: string;
  marks: string[];
}

export interface PortableTextMarkDef {
  _type: string;
  _key: string;
  [key: string]: any;
}

export type PortableTextContent = Array<PortableTextBlock | SanityImage>;

// ============================================================================
// Object Types
// ============================================================================

export interface CTAButton {
  _key?: string;
  _type: 'ctaButton';
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  external?: boolean;
  iconName?: string;
}

export interface Metric {
  _key?: string;
  _type: 'metric';
  label: string;
  value: string;
  description?: string;
  iconName?: string;
}

// ============================================================================
// Singleton Documents
// ============================================================================

export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings';
  brand: {
    name: string;
    location?: string;
    initials?: string;
    tagline?: string;
    logo?: SanityImage;
    logoLight?: SanityImage;
  };
  navigation: Array<{
    label: string;
    path: string;
  }>;
  navCtas?: CTAButton[];
  footer: {
    visitUs: {
      campusName: string;
      address: string;
    };
    serviceTimes: Array<{
      title: string;
      description?: string;
    }>;
    planVisitCopy?: string;
    quickLinks: Array<{
      label: string;
      path: string;
    }>;
    headline: string;
    description: string;
    contact: {
      address: string;
      phone: string;
      email: string;
    };
    socials: Array<{
      label: string;
      url: string;
      iconName?: string;
    }>;
    newsletterCopy?: string;
    ctas?: CTAButton[];
    copyright?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
    keywords?: string[];
  };
}

export interface HomePage extends SanityDocument {
  _type: 'homePage';
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: SanityImage;
    buttons: CTAButton[];
    metrics?: Metric[];
    gathering?: {
      eyebrow?: string;
      title: string;
      description?: string;
      details?: Metric[];
      spotlight?: {
        label: string;
        value: string;
      };
    };
  };
  about: {
    eyebrow?: string;
    title: string;
    description?: string;
    paragraphs: string[];
    image?: RichImage;
    button?: CTAButton;
    cards: Array<{
      label: string;
      title: string;
      description?: string;
    }>;
  };
  serviceIntro: {
    eyebrow?: string;
    title: string;
    description?: string;
  };
  serviceTimes: Array<{
    title: string;
    time: string;
    description: string;
    iconName?: string;
  }>;
  events: SanityReference[];
  sermons: SanityReference[];
  ministries: SanityReference[];
  visitInfo: {
    eyebrow?: string;
    title: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    highlightImage?: RichImage;
    schedule: Array<{
      label: string;
      value: string;
    }>;
    ctas: CTAButton[];
    location?: string;
    address?: string;
    campusName?: string;
  };
}

export interface PastorWelcome extends SanityDocument {
  _type: 'pastorWelcome';
  title: string;
  subtitle?: string;
  pastorName: string;
  pastorTitle: string;
  pastorImage: SanityImage;
  welcomeMessage: PortableTextContent;
  signature?: string;
  callToAction?: {
    enabled: boolean;
    label: string;
    href: string;
  };
}

// ============================================================================
// Document Types
// ============================================================================

export interface Ministry extends SanityDocument {
  _type: 'ministry';
  name: string;
  slug: SanitySlug;
  order: number;
  description: string;
  longDescription?: PortableTextContent;
  image: SanityImage;
  heroImage?: SanityImage;
  gallery?: Array<SanityImage & { alt?: string; caption?: string }>;
  leader?: string;
  leaderBio?: PortableTextContent;
  leaderImage?: SanityImage;
  targetAudience?: string[];
  schedule?: string;
  meetingLocation?: string;
  contactEmail?: string;
  features?: string[];
  upcomingEvents?: Array<{
    _key: string;
    title: string;
    date: string;
    time?: string;
    location?: string;
    description?: string;
  }>;
  testimonials?: Array<{
    _key: string;
    name: string;
    text: string;
    image?: SanityImage;
  }>;
  resources?: Array<{
    _key: string;
    title: string;
    description?: string;
    type: 'pdf' | 'video' | 'link' | 'download';
    url: string;
  }>;
  joinInfo?: {
    howToJoin?: PortableTextContent;
    requirements?: string[];
    nextSteps?: PortableTextContent;
  };
}

export interface Event extends SanityDocument {
  _type: 'event';
  title: string;
  slug: SanitySlug;
  featured: boolean;
  eventDate: string;
  date?: string; // Legacy field
  time: string;
  location: string;
  description: string;
  longDescription?: PortableTextContent;
  image: SanityImage;
  gallery?: Array<SanityImage & { alt?: string }>;
  eventType?: string;
  organizer?: string;
  contactEmail?: string;
  contactPhone?: string;
  ministry?: SanityReference;
  requiresRegistration: boolean;
  registrationUrl?: string;
  capacity?: number;
  cost?: string;
  href?: string;
  ctaLabel?: string;
}

export interface Sermon extends SanityDocument {
  _type: 'sermon';
  title: string;
  slug: SanitySlug;
  date: string;
  speaker: string;
  series?: string;
  seriesReference?: SanityReference;
  description?: string;
  scripture?: string;
  bibleBooks?: string[];
  keyPoints?: string[];
  notes?: PortableTextContent;
  thumbnail: SanityImage;
  videoUrl?: string;
  audioUrl?: string;
  duration?: string;
  featured: boolean;
  topics?: string[];
  downloadUrl?: string;
}

export interface SermonSeries extends SanityDocument {
  _type: 'sermonSeries';
  title: string;
  slug: SanitySlug;
  description?: string;
  startDate: string;
  endDate?: string;
  artwork?: SanityImage;
  active: boolean;
}

// ============================================================================
// Query Response Types
// ============================================================================

export type MinistryListItem = Pick<
  Ministry,
  '_id' | 'name' | 'description' | 'image'
> & {
  slug: string;
};

export type EventListItem = Pick<
  Event,
  '_id' | 'title' | 'eventDate' | 'time' | 'location' | 'description' | 'featured'
> & {
  href?: string;
  ctaLabel?: string;
};

export type SermonListItem = Pick<
  Sermon,
  '_id' | 'title' | 'date' | 'speaker' | 'series' | 'thumbnail'
>;

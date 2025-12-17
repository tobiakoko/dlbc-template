import type { ReactNode } from 'react';

export type IconName =
  | 'calendar'
  | 'calendarDays'
  | 'clock'
  | 'mapPin'
  | 'bookOpen'
  | 'users'
  | 'youtube'
  | 'facebook'
  | 'instagram';

export type CTAButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface CTAButtonContent {
  label: string;
  href: string;
  variant?: CTAButtonVariant;
  external?: boolean;
  iconName?: IconName;
  icon?: ReactNode;
}

export interface HeroMetric {
  label: string;
  value: string;
  description?: string;
  iconName?: IconName;
}

export interface HeroGathering extends HeroMetric {
  eyebrow?: string;
  details?: HeroMetric[];
  spotlight?: {
    label: string;
    value: string;
  };
  location?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttons: CTAButtonContent[];
  metrics?: HeroMetric[];
  gathering?: {
    eyebrow?: string;
    title: string;
    description?: string;
    details?: HeroMetric[];
    spotlight?: {
      label: string;
      value: string;
    };
  };
}

export interface ValueCardContent {
  title: string;
  description: string;
}

export interface AboutSectionContent {
  eyebrow?: string;
  title: string;
  description?: string;
  paragraphs: string[];
  image?: {
    url: string;
    alt?: string;
  };
  button?: CTAButtonContent;
  cards: Array<{
    label: string;
    title: string;
    description?: string;
  }>;
}

export interface EventContent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
  featured?: boolean;
}

export interface SermonContent {
  id: string;
  title: string;
  date: string;
  speaker: string;
  series: string;
  thumbnail: string;
}

export interface MinistryContent {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface VisitInfoContent {
  eyebrow?: string;
  title: string;
  description: string;
  cards: Array<{
    title: string;
    description: string;
  }>;
  highlightImage?: {
    url: string;
    alt?: string;
  };
  schedule: Array<{
    label: string;
    value: string;
  }>;
  ctas: CTAButtonContent[];
  location?: string;
  address?: string;
  campusName?: string;
}

export interface ServiceTimeContent {
  title: string;
  time: string;
  description: string;
  iconName?: IconName;
}

export interface CopyBlock {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface HomePageContent {
  hero: HeroContent;
  about: AboutSectionContent;
  serviceIntro: CopyBlock;
  serviceTimes: ServiceTimeContent[];
  events: EventContent[];
  sermons: SermonContent[];
  ministries: MinistryContent[];
  visitInfo: VisitInfoContent;
}

export interface NavLinkContent {
  label: string;
  path: string;
}

export interface SocialLink {
  label: string;
  url: string;
  iconName?: IconName;
}

export interface FooterContent {
  visitUs: {
    campusName: string;
    address: string;
  };
  serviceTimes: Array<{
    title: string;
    description?: string;
  }>;
  planVisitCopy: string;
  quickLinks: NavLinkContent[];
  headline: string;
  description: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  socials: SocialLink[];
  newsletterCopy: string;
  ctas: CTAButtonContent[];
  copyright?: string;
}

export interface SiteBranding {
  name: string;
  location?: string;
  initials?: string;
  tagline?: string;
}

export interface SiteContent {
  brand: SiteBranding;
  navigation: NavLinkContent[];
  navCtas: CTAButtonContent[];
  footer: FooterContent;
}

export interface PastorWelcomeContent {
  title: string;
  subtitle?: string;
  pastorName: string;
  pastorTitle: string;
  pastorImage: string;
  welcomeMessage: any[]; // Portable Text content from Sanity
  signature?: string;
  callToAction?: {
    enabled: boolean;
    label: string;
    href: string;
  };
}

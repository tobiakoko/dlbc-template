/**
 * CMS Content Types
 *
 * Types specific to content management system structure.
 * Re-exports common types to maintain compatibility.
 */

import type {
  IconName,
  CTAButton,
  SocialLink,
  ServiceTime,
  Event,
  Sermon,
  Ministry,
} from './common';

// Re-export common types
export type {
  IconName,
  CTAButtonVariant,
  CTAButton,
  SocialLink,
  ServiceTime,
  Event,
  Ministry,
  Sermon,
} from './common';

// Aliases for backwards compatibility
export type { CTAButton as CTAButtonContent } from './common';
export type { Event as EventContent } from './common';
export type { Sermon as SermonContent } from './common';
export type { Ministry as MinistryContent } from './common';
export type { ServiceTime as ServiceTimeContent } from './common';

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
  buttons: CTAButton[];
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
  button?: CTAButton;
  cards: Array<{
    label: string;
    title: string;
    description?: string;
  }>;
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
  ctas: CTAButton[];
  location?: string;
  address?: string;
  campusName?: string;
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
  serviceTimes: ServiceTime[];
  events: Event[];
  sermons: Sermon[];
  ministries: Ministry[];
  visitInfo: VisitInfoContent;
}

export interface NavLinkContent {
  label: string;
  path: string;
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
  ctas: CTAButton[];
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
  navCtas: CTAButton[];
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

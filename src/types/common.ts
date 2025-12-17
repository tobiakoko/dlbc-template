// Common types used across the application

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceTime {
  id: string;
  day: string;
  name: string;
  time: string;
  description?: string;
  icon?: string;
}

export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  thumbnail: string;
  category: string;
  description?: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image: string;
}

export interface Ministry {
  id: string;
  name: string;
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
  title: string;
  image: string;
  bio: string;
}

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
  socialLinks: Array<{
    platform: string;
    url: string;
    label: string;
  }>;
}

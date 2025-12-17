/**
 * Sanity Studio Helper Functions
 *
 * Utility functions for working with Sanity content
 */

/**
 * Format date for display
 */
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Truncate text to a maximum length
 */
export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Generate excerpt from portable text
 */
export const getExcerpt = (blocks: any[], maxLength = 200): string => {
  if (!blocks || !Array.isArray(blocks)) return '';

  const text = blocks
    .filter((block) => block._type === 'block')
    .map((block) => {
      if (!block.children) return '';
      return block.children
        .filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join('');
    })
    .join(' ');

  return truncate(text, maxLength);
};

/**
 * Check if a document is a singleton
 */
export const isSingleton = (schemaType: string): boolean => {
  const singletonTypes = ['siteSettings', 'homePage', 'pastorWelcome'];
  return singletonTypes.includes(schemaType);
};

/**
 * Generate a slug from a title
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

/**
 * Get icon name from schema type
 */
export const getIconForSchemaType = (schemaType: string): string => {
  const iconMap: Record<string, string> = {
    ministry: 'users',
    event: 'calendar',
    sermon: 'play',
    sermonSeries: 'package',
    siteSettings: 'cog',
    homePage: 'home',
    pastorWelcome: 'user',
  };

  return iconMap[schemaType] || 'document';
};

/**
 * Check if an event is in the future
 */
export const isFutureEvent = (eventDate: string): boolean => {
  const date = new Date(eventDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
};

/**
 * Check if an event is past
 */
export const isPastEvent = (eventDate: string): boolean => {
  return !isFutureEvent(eventDate);
};

/**
 * Sort items by date
 */
export const sortByDate = <T extends { date: string }>(
  items: T[],
  order: 'asc' | 'desc' = 'desc'
): T[] => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
};

/**
 * Group items by a key
 */
export const groupBy = <T>(
  items: T[],
  keyFn: (item: T) => string
): Record<string, T[]> => {
  return items.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
};

/**
 * Get image URL with parameters
 */
export const getImageUrl = (
  imageRef: any,
  params: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
  } = {}
): string | null => {
  if (!imageRef?.asset?._ref) return null;

  // This is a simplified version - in production, use @sanity/image-url
  const { width, height, quality = 80, format = 'webp' } = params;
  let url = imageRef.asset.url || '';

  const queryParams: string[] = [];
  if (width) queryParams.push(`w=${width}`);
  if (height) queryParams.push(`h=${height}`);
  queryParams.push(`q=${quality}`);
  queryParams.push(`fm=${format}`);

  if (queryParams.length > 0) {
    url += `?${queryParams.join('&')}`;
  }

  return url;
};

/**
 * Check if a sermon series is active
 */
export const isActiveSeries = (series: {
  startDate: string;
  endDate?: string;
}): boolean => {
  const now = new Date();
  const start = new Date(series.startDate);

  if (series.endDate) {
    const end = new Date(series.endDate);
    return now >= start && now <= end;
  }

  return now >= start;
};

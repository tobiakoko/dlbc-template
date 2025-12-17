import { useMemo } from 'react';
import { useSanityQuery } from './useSanityQuery';
import { ministryBySlugQuery } from '@/lib/sanity/queries/ministry';
import type { Ministry } from '@/types';
import { useMinistries } from './useMinistries';

export function useMinistry(slug: string) {
  const { data, isLoading, error } = useSanityQuery<Ministry>(
    ministryBySlugQuery,
    { slug }
  );

  // Fallback to finding ministry from the list if Sanity data isn't available
  const { ministries: fallbackMinistries } = useMinistries();

  const ministry = useMemo(() => {
    if (data) return data;
    return fallbackMinistries.find(m => m.slug === slug);
  }, [data, slug, fallbackMinistries]);

  return {
    ministry,
    isLoading,
    error,
    isUsingFallback: !data,
  };
}

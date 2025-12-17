import { useEffect, useMemo, useState } from 'react';
import { sanityClient } from '@/lib/sanity/client';

type Params = Record<string, unknown> | undefined;

const queryCache = new Map<string, unknown>();

const buildCacheKey = (query: string, params?: Params) => `${query}|${JSON.stringify(params ?? {})}`;

interface UseSanityQueryOptions {
  refresh?: boolean;
}

export function useSanityQuery<T>(query: string, params?: Params, options?: UseSanityQueryOptions) {
  const cacheKey = useMemo(() => buildCacheKey(query, params), [query, params]);
  const [data, setData] = useState<T | null>(() => (queryCache.get(cacheKey) as T) ?? null);
  const [isLoading, setIsLoading] = useState(!queryCache.has(cacheKey));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (!sanityClient) {
      setIsLoading(false);
      return;
    }
    const client = sanityClient;

    const shouldFetch = options?.refresh || !queryCache.has(cacheKey);

    async function fetchData() {
      try {
        const result = await client.fetch<T>(query, params ?? {});
        if (!isMounted) return;
        queryCache.set(cacheKey, result);
        setData(result);
        setError(null);
      } catch (err) {
        if (!isMounted) return;
        setError(err as Error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    if (shouldFetch) {
      setIsLoading(true);
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [cacheKey, options?.refresh]);

  return { data, isLoading, error };
}

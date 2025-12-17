/**
 * Sanity Queries for Sermons
 */

import groq from 'groq';

/**
 * Get all sermons, ordered by date (newest first)
 */
export const sermonsQuery = groq`
*[_type == "sermon"] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  date,
  speaker,
  series,
  seriesReference->{
    _id,
    title,
    "slug": slug.current
  },
  description,
  scripture,
  "thumbnail": thumbnail.asset->url,
  videoUrl,
  audioUrl,
  duration,
  featured,
  topics
}
`;

/**
 * Get recent sermons (limited)
 */
export const recentSermonsQuery = groq`
*[_type == "sermon"] | order(date desc) [0...$limit] {
  _id,
  title,
  "slug": slug.current,
  date,
  speaker,
  series,
  seriesReference->{
    _id,
    title,
    "slug": slug.current
  },
  description,
  "thumbnail": thumbnail.asset->url,
  videoUrl,
  duration,
  featured
}
`;

/**
 * Get featured sermons
 */
export const featuredSermonsQuery = groq`
*[_type == "sermon" && featured == true] | order(date desc) [0...6] {
  _id,
  title,
  "slug": slug.current,
  date,
  speaker,
  series,
  description,
  "thumbnail": thumbnail.asset->url,
  videoUrl,
  audioUrl,
  duration
}
`;

/**
 * Get sermon by slug
 */
export const sermonBySlugQuery = groq`
*[_type == "sermon" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  date,
  speaker,
  series,
  seriesReference->{
    _id,
    title,
    "slug": slug.current,
    description,
    "artwork": artwork.asset->url
  },
  description,
  scripture,
  bibleBooks,
  keyPoints,
  notes,
  "thumbnail": thumbnail.asset->url,
  videoUrl,
  audioUrl,
  duration,
  featured,
  topics,
  downloadUrl
}
`;

/**
 * Get all sermon slugs (for static generation)
 */
export const sermonSlugsQuery = groq`
*[_type == "sermon"].slug.current
`;

/**
 * Get sermons by series
 */
export const sermonsBySeriesQuery = groq`
*[_type == "sermon" && seriesReference._ref == $seriesId] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  date,
  speaker,
  description,
  scripture,
  "thumbnail": thumbnail.asset->url,
  videoUrl,
  duration
}
`;

/**
 * Get sermons by speaker
 */
export const sermonsBySpeakerQuery = groq`
*[_type == "sermon" && speaker == $speaker] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  date,
  speaker,
  series,
  description,
  "thumbnail": thumbnail.asset->url,
  videoUrl,
  duration
}
`;

/**
 * Get sermons by Bible book
 */
export const sermonsByBibleBookQuery = groq`
*[_type == "sermon" && $book in bibleBooks] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  date,
  speaker,
  scripture,
  "thumbnail": thumbnail.asset->url
}
`;

/**
 * Get all sermon series
 */
export const sermonSeriesQuery = groq`
*[_type == "sermonSeries"] | order(startDate desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  startDate,
  endDate,
  "artwork": artwork.asset->url,
  active,
  "sermonCount": count(*[_type == "sermon" && seriesReference._ref == ^._id])
}
`;

/**
 * Get active sermon series
 */
export const activeSermonSeriesQuery = groq`
*[_type == "sermonSeries" && active == true][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  startDate,
  endDate,
  "artwork": artwork.asset->url,
  "sermons": *[_type == "sermon" && seriesReference._ref == ^._id] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    speaker,
    "thumbnail": thumbnail.asset->url
  }
}
`;

/**
 * Get sermon series by slug
 */
export const sermonSeriesBySlugQuery = groq`
*[_type == "sermonSeries" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  startDate,
  endDate,
  "artwork": artwork.asset->url,
  active,
  "sermons": *[_type == "sermon" && seriesReference._ref == ^._id] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    speaker,
    description,
    scripture,
    "thumbnail": thumbnail.asset->url,
    videoUrl,
    audioUrl,
    duration
  }
}
`;

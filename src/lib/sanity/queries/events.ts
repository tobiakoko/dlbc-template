/**
 * Sanity Queries for Events
 */

import groq from 'groq';

/**
 * Get all events, ordered by date
 */
export const eventsQuery = groq`
*[_type == "event"] | order(eventDate desc) {
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(eventDate, date),
  eventDate,
  time,
  location,
  description,
  "image": image.asset->url,
  featured,
  eventType,
  href,
  ctaLabel,
  requiresRegistration,
  registrationUrl,
  cost
}
`;

/**
 * Get upcoming events only
 */
export const upcomingEventsQuery = groq`
*[_type == "event" && eventDate >= now()] | order(eventDate asc) {
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(eventDate, date),
  eventDate,
  time,
  location,
  description,
  "image": image.asset->url,
  featured,
  eventType,
  href,
  ctaLabel,
  requiresRegistration,
  registrationUrl,
  cost
}
`;

/**
 * Get featured events
 */
export const featuredEventsQuery = groq`
*[_type == "event" && featured == true] | order(eventDate asc) [0...6] {
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(eventDate, date),
  eventDate,
  time,
  location,
  description,
  "image": image.asset->url,
  featured,
  href,
  ctaLabel
}
`;

/**
 * Get event by slug
 */
export const eventBySlugQuery = groq`
*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(eventDate, date),
  eventDate,
  time,
  location,
  description,
  longDescription,
  "image": image.asset->url,
  "gallery": gallery[].asset->url,
  featured,
  eventType,
  organizer,
  contactEmail,
  contactPhone,
  ministry->{
    _id,
    name,
    "slug": slug.current
  },
  requiresRegistration,
  registrationUrl,
  capacity,
  cost,
  href,
  ctaLabel
}
`;

/**
 * Get all event slugs (for static generation)
 */
export const eventSlugsQuery = groq`
*[_type == "event"].slug.current
`;

/**
 * Get events by ministry
 */
export const eventsByMinistryQuery = groq`
*[_type == "event" && ministry._ref == $ministryId] | order(eventDate desc) {
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(eventDate, date),
  eventDate,
  time,
  location,
  description,
  "image": image.asset->url
}
`;

/**
 * Get events by type
 */
export const eventsByTypeQuery = groq`
*[_type == "event" && eventType == $eventType] | order(eventDate desc) {
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(eventDate, date),
  eventDate,
  time,
  location,
  description,
  "image": image.asset->url,
  featured
}
`;

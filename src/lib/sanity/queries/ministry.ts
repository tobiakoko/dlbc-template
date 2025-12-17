/**
 * Sanity Queries for Ministry Content
 */

export const ministriesQuery = `*[_type == "ministry"] | order(order asc) {
  _id,
  "slug": slug.current,
  name,
  description,
  longDescription,
  leader,
  leaderBio,
  "leaderImage": leaderImage.asset->url,
  "image": image.asset->url,
  "heroImage": heroImage.asset->url,
  schedule,
  meetingLocation,
  contactEmail,
  targetAudience,
  features,
  upcomingEvents[] {
    _key,
    title,
    date,
    time,
    location,
    description
  },
  testimonials[] {
    _key,
    name,
    text,
    "image": image.asset->url
  },
  "gallery": gallery[].asset->url,
  resources[] {
    _key,
    title,
    description,
    type,
    url
  },
  joinInfo {
    howToJoin,
    requirements,
    nextSteps
  }
}`;

export const ministryBySlugQuery = `*[_type == "ministry" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  name,
  description,
  longDescription,
  leader,
  leaderBio,
  "leaderImage": leaderImage.asset->url,
  "image": image.asset->url,
  "heroImage": heroImage.asset->url,
  schedule,
  meetingLocation,
  contactEmail,
  targetAudience,
  features,
  upcomingEvents[] {
    _key,
    title,
    date,
    time,
    location,
    description
  },
  testimonials[] {
    _key,
    name,
    text,
    "image": image.asset->url
  },
  "gallery": gallery[].asset->url,
  resources[] {
    _key,
    title,
    description,
    type,
    url
  },
  joinInfo {
    howToJoin,
    requirements,
    nextSteps
  }
}`;

export const ministrySlugQuery = `*[_type == "ministry"].slug.current`;

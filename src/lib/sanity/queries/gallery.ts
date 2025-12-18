/**
 * Sanity Queries for Gallery Content
 */

export const galleryImagesQuery = `*[_type == "galleryImage" && published == true] | order(order asc, eventDate desc) {
  _id,
  title,
  "image": image.asset->url,
  "alt": image.alt,
  caption,
  category,
  tags,
  eventDate,
  photographer,
  featured,
  order
}`;

export const galleryImagesByCategoryQuery = `*[_type == "galleryImage" && published == true && category == $category] | order(order asc, eventDate desc) {
  _id,
  title,
  "image": image.asset->url,
  "alt": image.alt,
  caption,
  category,
  tags,
  eventDate,
  photographer,
  featured,
  order
}`;

export const featuredGalleryImagesQuery = `*[_type == "galleryImage" && published == true && featured == true] | order(order asc, eventDate desc) {
  _id,
  title,
  "image": image.asset->url,
  "alt": image.alt,
  caption,
  category,
  tags,
  eventDate,
  photographer,
  featured,
  order
}`;

export const galleryCategoriesQuery = `*[_type == "galleryImage" && published == true] | order(category asc) {
  category
}.category`;

/**
 * Gallery Image Document Schema
 *
 * Content type for photo gallery images
 */

import { defineType, defineField } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  icon: ImageIcon,
  groups: [
    {
      name: 'basic',
      title: 'Basic Info',
      default: true,
    },
    {
      name: 'details',
      title: 'Details',
    },
    {
      name: 'categorization',
      title: 'Categorization',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
      group: 'basic',
      description: 'Descriptive title for the image',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'basic',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette', 'exif', 'location'],
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the image for accessibility and SEO',
          validation: (Rule) => Rule.required().max(125),
        },
      ],
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      group: 'basic',
      rows: 2,
      description: 'Optional caption or description for the image',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'categorization',
      description: 'Categorize the image for filtering',
      options: {
        list: [
          { title: 'Worship', value: 'Worship' },
          { title: 'Youth', value: 'Youth' },
          { title: 'Music', value: 'Music' },
          { title: 'Fellowship', value: 'Fellowship' },
          { title: 'Events', value: 'Events' },
          { title: 'Retreat', value: 'Retreat' },
          { title: 'Sanctuary', value: 'Sanctuary' },
          { title: 'Service', value: 'Service' },
          { title: 'Prayer', value: 'Prayer' },
          { title: 'Baptism', value: 'Baptism' },
          { title: 'Community', value: 'Community' },
          { title: 'Missions', value: 'Missions' },
          { title: 'Other', value: 'Other' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'categorization',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Add searchable tags for better organization',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      group: 'details',
      description: 'When was this photo taken?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photographer',
      title: 'Photographer',
      type: 'string',
      group: 'details',
      description: 'Name of the photographer (optional)',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Image',
      type: 'boolean',
      group: 'details',
      description: 'Display prominently in the gallery',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'details',
      description: 'Lower numbers appear first (within category)',
      initialValue: 0,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      group: 'details',
      description: 'Show this image in the gallery',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      date: 'eventDate',
      media: 'image',
      featured: 'featured',
      published: 'published',
    },
    prepare({ title, category, date, media, featured, published }) {
      let prefix = '';
      if (featured) prefix += '⭐ ';
      if (!published) prefix += '🔒 ';

      return {
        title: `${prefix}${title}`,
        subtitle: `${category} • ${date}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'eventDate', direction: 'desc' },
      ],
    },
    {
      title: 'Event Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'eventDate', direction: 'desc' }],
    },
    {
      title: 'Event Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'eventDate', direction: 'asc' }],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'eventDate', direction: 'desc' },
      ],
    },
  ],
});

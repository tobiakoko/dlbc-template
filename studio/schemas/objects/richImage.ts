/**
 * Rich Image Object Schema
 *
 * Image with alt text and caption
 */

import { defineType, defineField } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  name: 'richImage',
  title: 'Image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'asset',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for SEO and accessibility',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption to display below the image',
    }),
  ],
  preview: {
    select: {
      media: 'asset',
      title: 'alt',
      subtitle: 'caption',
    },
  },
});

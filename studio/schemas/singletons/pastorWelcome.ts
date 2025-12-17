/**
 * Pastor Welcome Schema
 *
 * Singleton document for pastor's welcome message
 */

import { defineType, defineField } from 'sanity';
import { UserIcon } from '@sanity/icons';

export default defineType({
  name: 'pastorWelcome',
  title: 'Pastor Welcome',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'pastorName',
      title: 'Pastor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pastorTitle',
      title: 'Pastor Title',
      type: 'string',
      placeholder: 'Senior Pastor',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pastorImage',
      title: 'Pastor Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'portableText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'signature',
      title: 'Signature',
      type: 'string',
      description: 'Text signature (e.g., "Pastor John")',
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to Action',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Show CTA',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'label',
          title: 'Button Label',
          type: 'string',
        },
        {
          name: 'href',
          title: 'Button Link',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pastorName',
      subtitle: 'pastorTitle',
      media: 'pastorImage',
    },
  },
});

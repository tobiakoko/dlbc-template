/**
 * CTA Button Object Schema
 *
 * Reusable call-to-action button configuration
 */

import { defineType, defineField } from 'sanity';
import { LinkIcon } from '@sanity/icons';

export default defineType({
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      description: 'Use relative paths (/about) for internal links or full URLs for external',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
          { title: 'Ghost', value: 'ghost' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'external',
      title: 'External Link',
      type: 'boolean',
      description: 'Check if this link goes to an external website',
      initialValue: false,
    }),
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'string',
      description: 'Optional icon to display with the button',
      options: {
        list: [
          { title: 'None', value: '' },
          { title: 'Calendar', value: 'calendar' },
          { title: 'Calendar Days', value: 'calendarDays' },
          { title: 'Clock', value: 'clock' },
          { title: 'Map Pin', value: 'mapPin' },
          { title: 'Book Open', value: 'bookOpen' },
          { title: 'Users', value: 'users' },
          { title: 'Arrow Right', value: 'arrowRight' },
          { title: 'External Link', value: 'externalLink' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
      variant: 'variant',
    },
    prepare({ title, subtitle, variant }) {
      return {
        title,
        subtitle: `${variant} → ${subtitle}`,
      };
    },
  },
});

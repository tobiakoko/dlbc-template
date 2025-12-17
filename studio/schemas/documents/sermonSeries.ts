/**
 * Sermon Series Document Schema
 *
 * Content type for organizing sermons into series
 */

import { defineType, defineField } from 'sanity';
import { PackageIcon } from '@sanity/icons';

export default defineType({
  name: 'sermonSeries',
  title: 'Sermon Series',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Series Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'artwork',
      title: 'Series Artwork',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'active',
      title: 'Active Series',
      type: 'boolean',
      description: 'Is this the current sermon series?',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      startDate: 'startDate',
      media: 'artwork',
      active: 'active',
    },
    prepare({ title, startDate, media, active }) {
      return {
        title: active ? `▶ ${title}` : title,
        subtitle: startDate ? `Started: ${startDate}` : 'No start date',
        media,
      };
    },
  },
});

/**
 * Ministry Document Schema
 *
 * Content type for church ministries and programs
 */

import { defineType, defineField } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export default defineType({
  name: 'ministry',
  title: 'Ministry',
  type: 'document',
  icon: UsersIcon,
  groups: [
    {
      name: 'basic',
      title: 'Basic Info',
      default: true,
    },
    {
      name: 'leadership',
      title: 'Leadership',
    },
    {
      name: 'details',
      title: 'Details',
    },
    {
      name: 'media',
      title: 'Media & Gallery',
    },
    {
      name: 'engagement',
      title: 'Engagement',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Ministry Name',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'basic',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'basic',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'portableText',
      group: 'basic',
    }),
    defineField({
      name: 'image',
      title: 'Card Image',
      type: 'image',
      group: 'media',
      description: 'Image for ministry cards and listings',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'media',
      description: 'Large banner image for ministry detail page',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),

    // Leadership
    defineField({
      name: 'leader',
      title: 'Ministry Leader',
      type: 'string',
      group: 'leadership',
    }),
    defineField({
      name: 'leaderBio',
      title: 'Leader Bio',
      type: 'portableText',
      group: 'leadership',
    }),
    defineField({
      name: 'leaderImage',
      title: 'Leader Photo',
      type: 'image',
      group: 'leadership',
      options: {
        hotspot: true,
      },
    }),

    // Details
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Children (0-12)', value: 'children' },
          { title: 'Youth (13-18)', value: 'youth' },
          { title: 'Young Adults (18-30)', value: 'young-adults' },
          { title: 'Adults (30+)', value: 'adults' },
          { title: 'Seniors (65+)', value: 'seniors' },
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Families', value: 'families' },
          { title: 'Singles', value: 'singles' },
          { title: 'All Ages', value: 'all-ages' },
        ],
      },
    }),
    defineField({
      name: 'schedule',
      title: 'Meeting Schedule',
      type: 'string',
      group: 'details',
      placeholder: 'Every Sunday at 10:00 AM',
    }),
    defineField({
      name: 'meetingLocation',
      title: 'Meeting Location',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'details',
      validation: (Rule) =>
        Rule.regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          'Must be a valid email address'
        ),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
      description: 'Highlight key aspects of this ministry',
    }),

    // Engagement
    defineField({
      name: 'upcomingEvents',
      title: 'Upcoming Events',
      type: 'array',
      group: 'engagement',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'time',
              title: 'Time',
              type: 'string',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'date',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'engagement',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Testimonial',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      group: 'engagement',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Resource Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'PDF Document', value: 'pdf' },
                  { title: 'Video', value: 'video' },
                  { title: 'Link', value: 'link' },
                  { title: 'Download', value: 'download' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'type',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'joinInfo',
      title: 'How to Join',
      type: 'object',
      group: 'engagement',
      fields: [
        {
          name: 'howToJoin',
          title: 'How to Join',
          type: 'portableText',
        },
        {
          name: 'requirements',
          title: 'Requirements',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'nextSteps',
          title: 'Next Steps',
          type: 'portableText',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image',
      order: 'order',
    },
    prepare({ title, subtitle, media, order }) {
      return {
        title,
        subtitle: subtitle || `Order: ${order}`,
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
        { field: 'name', direction: 'asc' },
      ],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
});

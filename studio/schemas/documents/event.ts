/**
 * Event Document Schema
 *
 * Content type for church events and activities
 */

import { defineType, defineField } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    {
      name: 'basic',
      title: 'Basic Info',
      default: true,
    },
    {
      name: 'details',
      title: 'Event Details',
    },
    {
      name: 'registration',
      title: 'Registration',
    },
    {
      name: 'media',
      title: 'Media',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
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
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      group: 'basic',
      description: 'Display prominently on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date (Legacy)',
      type: 'string',
      group: 'basic',
      description: 'For backwards compatibility',
      hidden: true,
    }),
    defineField({
      name: 'time',
      title: 'Event Time',
      type: 'string',
      group: 'basic',
      placeholder: '10:00 AM - 12:00 PM',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'basic',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      title: 'Full Description',
      type: 'portableText',
      group: 'details',
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
          ],
        },
      ],
    }),

    // Event Details
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      group: 'details',
      options: {
        list: [
          { title: 'Worship Service', value: 'worship' },
          { title: 'Bible Study', value: 'bible-study' },
          { title: 'Community Outreach', value: 'outreach' },
          { title: 'Fellowship', value: 'fellowship' },
          { title: 'Youth Event', value: 'youth' },
          { title: 'Childrens Event', value: 'children' },
          { title: 'Conference', value: 'conference' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Special Service', value: 'special' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer',
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
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'ministry',
      title: 'Related Ministry',
      type: 'reference',
      group: 'details',
      to: [{ type: 'ministry' }],
      description: 'Associate this event with a ministry',
    }),

    // Registration
    defineField({
      name: 'requiresRegistration',
      title: 'Requires Registration',
      type: 'boolean',
      group: 'registration',
      initialValue: false,
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      group: 'registration',
      hidden: ({ parent }) => !parent?.requiresRegistration,
    }),
    defineField({
      name: 'capacity',
      title: 'Event Capacity',
      type: 'number',
      group: 'registration',
      description: 'Maximum number of attendees',
    }),
    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'string',
      group: 'registration',
      placeholder: 'Free or $15 per person',
    }),

    // CTA
    defineField({
      name: 'href',
      title: 'Custom Link',
      type: 'string',
      group: 'registration',
      description: 'Optional custom link for event details or registration',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      group: 'registration',
      placeholder: 'Register Now',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'eventDate',
      location: 'location',
      media: 'image',
      featured: 'featured',
    },
    prepare({ title, date, location, media, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: `${date} • ${location}`,
        media,
      };
    },
  },
  orderings: [
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
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});

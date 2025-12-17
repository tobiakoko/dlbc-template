/**
 * Home Page Schema
 *
 * Content for the homepage including hero, sections, and featured content
 */

import { defineType, defineField } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
    },
    {
      name: 'about',
      title: 'About Section',
    },
    {
      name: 'services',
      title: 'Services',
    },
    {
      name: 'content',
      title: 'Content Sections',
    },
    {
      name: 'visit',
      title: 'Visit Info',
    },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required().max(120),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(300),
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'buttons',
          title: 'CTA Buttons',
          type: 'array',
          of: [{ type: 'ctaButton' }],
          validation: (Rule) => Rule.max(3),
        },
        {
          name: 'metrics',
          title: 'Metrics/Stats',
          type: 'array',
          description: 'Key metrics to display in the hero',
          of: [{ type: 'metric' }],
        },
        {
          name: 'gathering',
          title: 'Gathering Information',
          type: 'object',
          fields: [
            {
              name: 'eyebrow',
              title: 'Eyebrow Text',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'details',
              title: 'Details',
              type: 'array',
              of: [{ type: 'metric' }],
            },
            {
              name: 'spotlight',
              title: 'Spotlight Info',
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    }),

    // About Section
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      group: 'about',
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'text', rows: 4 }],
        },
        {
          name: 'image',
          title: 'Image',
          type: 'richImage',
        },
        {
          name: 'button',
          title: 'CTA Button',
          type: 'ctaButton',
        },
        {
          name: 'cards',
          title: 'Value Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
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
                  subtitle: 'label',
                },
              },
            },
          ],
        },
      ],
    }),

    // Service Times
    defineField({
      name: 'serviceIntro',
      title: 'Service Times Introduction',
      type: 'object',
      group: 'services',
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'serviceTimes',
      title: 'Service Times',
      type: 'array',
      group: 'services',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Service Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'time',
              title: 'Time',
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
              name: 'iconName',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Calendar', value: 'calendar' },
                  { title: 'Clock', value: 'clock' },
                  { title: 'Users', value: 'users' },
                  { title: 'Book Open', value: 'bookOpen' },
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'time',
            },
          },
        },
      ],
    }),

    // Featured Content References
    defineField({
      name: 'events',
      title: 'Featured Events',
      type: 'array',
      group: 'content',
      description: 'Select events to feature on the homepage',
      of: [
        {
          type: 'reference',
          to: [{ type: 'event' }],
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'sermons',
      title: 'Featured Sermons',
      type: 'array',
      group: 'content',
      description: 'Select sermons to feature on the homepage',
      of: [
        {
          type: 'reference',
          to: [{ type: 'sermon' }],
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'ministries',
      title: 'Featured Ministries',
      type: 'array',
      group: 'content',
      description: 'Select ministries to feature on the homepage',
      of: [
        {
          type: 'reference',
          to: [{ type: 'ministry' }],
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),

    // Visit Info Section
    defineField({
      name: 'visitInfo',
      title: 'Visit Information',
      type: 'object',
      group: 'visit',
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'cards',
          title: 'Info Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                },
              ],
            },
          ],
        },
        {
          name: 'highlightImage',
          title: 'Highlight Image',
          type: 'richImage',
        },
        {
          name: 'schedule',
          title: 'Schedule',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'ctas',
          title: 'CTAs',
          type: 'array',
          of: [{ type: 'ctaButton' }],
        },
        {
          name: 'location',
          title: 'Location Name',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
        },
        {
          name: 'campusName',
          title: 'Campus Name',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
});

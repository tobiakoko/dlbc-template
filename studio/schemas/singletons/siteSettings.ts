/**
 * Site Settings Schema
 *
 * Global site configuration including branding, navigation, and footer
 */

import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'brand',
      title: 'Brand',
    },
    {
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'brand',
      title: 'Brand Information',
      type: 'object',
      group: 'brand',
      fields: [
        {
          name: 'name',
          title: 'Church Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
          placeholder: 'San Francisco, CA',
        },
        {
          name: 'initials',
          title: 'Initials',
          type: 'string',
          description: 'Abbreviated name for compact displays (e.g., DLBC)',
          validation: (Rule) => Rule.max(10),
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'Short tagline or motto',
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'logoLight',
          title: 'Logo (Light Mode)',
          type: 'image',
          description: 'Alternative logo for light backgrounds',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'navigation',
      title: 'Main Navigation',
      type: 'array',
      group: 'navigation',
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
              name: 'path',
              title: 'Path',
              type: 'string',
              description: 'Page path (e.g., /about, /ministries)',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'path',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'navCtas',
      title: 'Navigation CTAs',
      type: 'array',
      group: 'navigation',
      description: 'Call-to-action buttons in the navigation',
      of: [{ type: 'ctaButton' }],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'footer',
      title: 'Footer Configuration',
      type: 'object',
      group: 'footer',
      fields: [
        {
          name: 'visitUs',
          title: 'Visit Us',
          type: 'object',
          fields: [
            {
              name: 'campusName',
              title: 'Campus Name',
              type: 'string',
            },
            {
              name: 'address',
              title: 'Address',
              type: 'text',
              rows: 3,
            },
          ],
        },
        {
          name: 'serviceTimes',
          title: 'Service Times',
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
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'planVisitCopy',
          title: 'Plan Visit Copy',
          type: 'text',
          rows: 2,
        },
        {
          name: 'quickLinks',
          title: 'Quick Links',
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
                  name: 'path',
                  title: 'Path',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'contact',
          title: 'Contact Information',
          type: 'object',
          fields: [
            {
              name: 'address',
              title: 'Address',
              type: 'text',
              rows: 3,
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
              validation: (Rule) =>
                Rule.regex(
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  'Must be a valid email address'
                ),
            },
          ],
        },
        {
          name: 'socials',
          title: 'Social Media Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Platform',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'YouTube', value: 'youtube' },
                      { title: 'Twitter', value: 'twitter' },
                      { title: 'LinkedIn', value: 'linkedin' },
                    ],
                  },
                },
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'url',
                },
              },
            },
          ],
        },
        {
          name: 'newsletterCopy',
          title: 'Newsletter Copy',
          type: 'text',
          rows: 2,
        },
        {
          name: 'ctas',
          title: 'Footer CTAs',
          type: 'array',
          of: [{ type: 'ctaButton' }],
        },
        {
          name: 'copyright',
          title: 'Copyright Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Defaults',
      type: 'object',
      group: 'seo',
      fields: [
        {
          name: 'metaTitle',
          title: 'Default Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Default Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'ogImage',
          title: 'Default OG Image',
          type: 'image',
          description: 'Default image for social media sharing',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'brand.name',
    },
    prepare({ title }) {
      return {
        title: title || 'Site Settings',
      };
    },
  },
});

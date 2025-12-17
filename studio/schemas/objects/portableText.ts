/**
 * Portable Text Configuration
 *
 * Custom portable text configuration for rich text content
 */

import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'string',
                title: 'URL',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'external',
                type: 'boolean',
                title: 'External Link',
                description: 'Open in new tab',
                initialValue: false,
              },
            ],
          },
          {
            name: 'color',
            type: 'object',
            title: 'Color',
            fields: [
              {
                name: 'hex',
                type: 'string',
                title: 'Hex Color',
                options: {
                  list: [
                    { title: 'Primary', value: '#0066CC' },
                    { title: 'Secondary', value: '#6366F1' },
                    { title: 'Accent', value: '#F59E0B' },
                  ],
                },
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
  ],
});

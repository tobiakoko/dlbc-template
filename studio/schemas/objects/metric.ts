/**
 * Metric Object Schema
 *
 * Reusable metric/stat display
 */

import { defineType, defineField } from 'sanity';
import { ChartUpwardIcon } from '@sanity/icons';

export default defineType({
  name: 'metric',
  title: 'Metric',
  type: 'object',
  icon: ChartUpwardIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'The metric value (e.g., "500+", "25 Years")',
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: '' },
          { title: 'Users', value: 'users' },
          { title: 'Calendar', value: 'calendar' },
          { title: 'Map Pin', value: 'mapPin' },
          { title: 'Book Open', value: 'bookOpen' },
          { title: 'Heart', value: 'heart' },
          { title: 'Star', value: 'star' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value',
    },
  },
});

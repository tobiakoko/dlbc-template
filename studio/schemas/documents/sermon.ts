/**
 * Sermon Document Schema
 *
 * Content type for sermons and messages
 */

import { defineType, defineField } from 'sanity';
import { PlayIcon } from '@sanity/icons';

export default defineType({
  name: 'sermon',
  title: 'Sermon',
  type: 'document',
  icon: PlayIcon,
  groups: [
    {
      name: 'basic',
      title: 'Basic Info',
      default: true,
    },
    {
      name: 'content',
      title: 'Sermon Content',
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'metadata',
      title: 'Metadata',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Sermon Title',
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
      name: 'date',
      title: 'Sermon Date',
      type: 'date',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Sermon Series',
      type: 'string',
      group: 'basic',
      description: 'Name of the sermon series this belongs to',
    }),
    defineField({
      name: 'seriesReference',
      title: 'Series',
      type: 'reference',
      group: 'basic',
      to: [{ type: 'sermonSeries' }],
      description: 'Link to the sermon series',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'basic',
      rows: 4,
      validation: (Rule) => Rule.max(500),
    }),

    // Content
    defineField({
      name: 'scripture',
      title: 'Scripture Reference',
      type: 'string',
      group: 'content',
      placeholder: 'John 3:16-21',
    }),
    defineField({
      name: 'bibleBooks',
      title: 'Bible Books',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
          'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
          '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
          'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs',
          'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah',
          'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel',
          'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk',
          'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
          'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans',
          '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
          'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
          '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews',
          'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
          'Jude', 'Revelation',
        ],
      },
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key Points',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      description: 'Main takeaways from the sermon',
    }),
    defineField({
      name: 'notes',
      title: 'Sermon Notes',
      type: 'portableText',
      group: 'content',
    }),

    // Media
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      group: 'media',
      description: 'YouTube, Vimeo, or other video platform URL',
    }),
    defineField({
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url',
      group: 'media',
      description: 'Direct link to audio file or podcast',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      group: 'media',
      placeholder: '45 minutes',
    }),

    // Metadata
    defineField({
      name: 'featured',
      title: 'Featured Sermon',
      type: 'boolean',
      group: 'metadata',
      description: 'Display prominently on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      group: 'metadata',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'downloadUrl',
      title: 'Download URL',
      type: 'url',
      group: 'metadata',
      description: 'Link to downloadable resources (PDF notes, etc.)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      speaker: 'speaker',
      date: 'date',
      series: 'series',
      media: 'thumbnail',
      featured: 'featured',
    },
    prepare({ title, speaker, date, series, media, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: `${speaker} • ${date}${series ? ` • ${series}` : ''}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});

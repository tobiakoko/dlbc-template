/**
 * Sanity Studio Structure Configuration
 *
 * Customizes the desk layout for better content organization
 */

import type { StructureResolver } from 'sanity/structure';
import {
  CogIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
  CalendarIcon,
  PlayIcon,
  PackageIcon,
} from '@sanity/icons';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton documents
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),

      S.listItem()
        .title('Pastor Welcome')
        .icon(UserIcon)
        .child(
          S.document()
            .schemaType('pastorWelcome')
            .documentId('pastorWelcome')
        ),

      S.divider(),

      // Content sections
      S.listItem()
        .title('Ministries')
        .icon(UsersIcon)
        .child(
          S.documentList()
            .title('Ministries')
            .filter('_type == "ministry"')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),

      S.listItem()
        .title('Events')
        .icon(CalendarIcon)
        .child(
          S.documentList()
            .title('Events')
            .filter('_type == "event"')
            .defaultOrdering([{ field: 'eventDate', direction: 'desc' }])
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('event')
            )
        ),

      S.listItem()
        .title('Sermons')
        .icon(PlayIcon)
        .child(
          S.list()
            .title('Sermons')
            .items([
              S.listItem()
                .title('All Sermons')
                .icon(PlayIcon)
                .child(
                  S.documentList()
                    .title('All Sermons')
                    .filter('_type == "sermon"')
                    .defaultOrdering([{ field: 'date', direction: 'desc' }])
                ),

              S.listItem()
                .title('Featured Sermons')
                .icon(PlayIcon)
                .child(
                  S.documentList()
                    .title('Featured Sermons')
                    .filter('_type == "sermon" && featured == true')
                    .defaultOrdering([{ field: 'date', direction: 'desc' }])
                ),

              S.divider(),

              S.listItem()
                .title('Sermon Series')
                .icon(PackageIcon)
                .child(
                  S.documentList()
                    .title('Sermon Series')
                    .filter('_type == "sermonSeries"')
                    .defaultOrdering([{ field: 'startDate', direction: 'desc' }])
                ),
            ])
        ),

      S.divider(),

      // Remaining document types
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'siteSettings',
            'homePage',
            'pastorWelcome',
            'ministry',
            'event',
            'sermon',
            'sermonSeries',
            // Hide object types from main navigation
            'ctaButton',
            'metric',
            'richImage',
            'portableText',
          ].includes(listItem.getId() || '')
      ),
    ]);

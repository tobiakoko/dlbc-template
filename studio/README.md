# Sanity Studio - DLBC Website

Professional Sanity CMS configuration for the DLBC church website.

## Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Start Sanity Studio
npm run studio
# Studio runs at http://localhost:3333

# Deploy Studio to Sanity hosting
npm run studio:deploy
```

## Project Structure

```
studio/
├── schemas/              # Content type definitions
│   ├── documents/       # Regular content types
│   ├── singletons/      # Single-instance documents
│   ├── objects/         # Reusable components
│   └── index.ts         # Schema exports
├── structure/           # Custom desk layout
├── lib/                 # Utilities and helpers
├── types/              # TypeScript definitions
└── components/         # Custom Studio components
```

## Schema Types

### Documents (Regular Content)
- **Ministry** - Church ministries and programs
- **Event** - Events and activities
- **Sermon** - Sermons and messages
- **Sermon Series** - Sermon series grouping

### Singletons (One per site)
- **Site Settings** - Global configuration
- **Home Page** - Homepage content
- **Pastor Welcome** - Pastor message

### Objects (Reusable)
- **CTA Button** - Call-to-action buttons
- **Metric** - Statistics display
- **Rich Image** - Images with metadata
- **Portable Text** - Rich text configuration

## Custom Features

### Organized Desk Structure
- Singletons pinned at top for easy access
- Grouped sermon management
- Custom orderings and filters
- Icon-based navigation

### Advanced Validation
- Email, URL, phone validation
- Date range validation
- Conditional required fields
- Array min/max validation

### Type Safety
- Complete TypeScript types
- Type-safe queries
- Autocomplete support

### Helper Functions
- Date formatting
- Text truncation
- Slug generation
- Image URL building
- Portable text utilities

## Best Practices

1. **Always add descriptions** to fields
2. **Use validation** for data quality
3. **Configure previews** for better UX
4. **Test queries in Vision** before coding
5. **Document schema changes** in commit messages

## Scripts

```json
{
  "studio": "sanity dev",              // Development server
  "studio:build": "sanity build",      // Build for production
  "studio:deploy": "sanity deploy",    // Deploy to Sanity
  "sanity:manage": "sanity manage"     // Open project management
}
```

## Environment Variables

Required in `.env`:
```env
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

## Documentation

- **[SANITY_SETUP.md](../SANITY_SETUP.md)** - Complete setup guide
- **[SANITY_QUICK_REFERENCE.md](../SANITY_QUICK_REFERENCE.md)** - Quick reference
- **[SANITY_IMPLEMENTATION_SUMMARY.md](../SANITY_IMPLEMENTATION_SUMMARY.md)** - Implementation details

## Support

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Reference](https://www.sanity.io/docs/groq)
- [Community Slack](https://slack.sanity.io/)

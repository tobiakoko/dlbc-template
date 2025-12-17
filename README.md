# Deeper Life Bible Church Website

A modern, responsive website built with React, TypeScript, Vite, and Framer Motion.

## Features

- **Modern Design**: Elegant, warm color scheme with sophisticated typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Multi-Page Navigation**: Home, About, Ministries, Events, Sermons, and Contact pages
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **CSS3** - Styling with custom properties

## Project Structure

```
dlbc-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── About.tsx
│   │   ├── About.css
│   │   ├── Pages.tsx
│   │   └── Pages.css
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd dlbc-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Pages

1. **Home** - Hero section, features, welcome message, upcoming events
2. **About** - Mission, vision, story, core values, beliefs, leadership
3. **Ministries** - Overview of church ministries
4. **Events** - Upcoming church events and activities
5. **Sermons** - Recent sermon archive
6. **Contact** - Contact information and form

## Design Features

- **Color Palette**: Warm, elegant colors (navy, gold, cream)
- **Typography**: Playfair Display for headings, Crimson Pro for body text
- **Animations**: Smooth page transitions and scroll animations
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Optimized images and lazy loading

## Customization

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #1a1a2e;
  --color-secondary: #c9a961;
  --color-accent: #8b6f47;
  /* ... */
}
```

### Content

Update placeholder content in the component files:
- Navigation links: `src/components/Header.tsx`
- Footer content: `src/components/Footer.tsx`
- Page content: `src/pages/*.tsx`

## License

This project is open source and available for church use.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `yarn dev` (uses Next.js with Turbopack)
- **Build production**: `npm run build` or `yarn build`
- **Preview production**: `npm run preview` or `yarn preview`
- **Lint code**: `npm run lint` or `yarn lint`
- **Format code**: `npm run format` or `yarn format` (uses Prettier with Tailwind plugin)
- **Generate sitemap**: Runs automatically after build via `postbuild` script

## Project Architecture

This is a Next.js 15 SaaS/Startup template with the following structure:

### Key Directories
- `/src/app/` - Next.js App Router pages and layouts
- `/src/layouts/` - Reusable layout components (components, partials, helpers, shortcodes)
- `/src/content/` - Markdown content files for pages and blog posts
- `/src/data/` - TypeScript content data and type definitions
- `/src/lib/` - Utility functions for content parsing and data manipulation
- `/src/sections/` - Page section components
- `/src/styles/` - CSS files organized by purpose (base, components, navigation, etc.)
- `/src/config/` - JSON configuration files for site settings, menu, and theme

### Content Management System
The project uses a file-based CMS approach:
- **Markdown content**: Stored in `/src/content/` with frontmatter metadata
- **TypeScript content**: Centralized in `/src/data/content.ts` with proper TypeScript interfaces
- **Content parsing**: Uses `gray-matter` and custom parsers in `/src/lib/contentParser.ts`
- **Dynamic pages**: Generated from markdown files using Next.js dynamic routing

### Styling & UI
- **Tailwind CSS v4**: Custom configuration with theme extensions
- **Custom CSS**: Organized in `/src/styles/` by component type
- **Dark mode**: Implemented via `next-themes`
- **Animations**: Uses AOS (Animate On Scroll) library
- **Icons**: React Icons library with custom SVG icons in `/public/images/icons/`

### Path Aliases (tsconfig.json)
- `@/*` → `./src/*`
- `@/components/*` → `./src/layouts/components/*`
- `@/partials/*` → `./src/layouts/partials/*`
- `@/helpers/*` → `./src/layouts/helpers/*`
- `@/shortcodes/*` → `./src/layouts/shortcodes/*`

### Configuration System
- **Site config**: `/src/config/config.json` - base URL, metadata, features
- **Menu config**: `/src/config/menu.json` - navigation structure
- **Theme config**: `/src/config/theme.json` - fonts and theme settings
- **Next.js config**: Reads from config.json for base path and trailing slash settings

### Content Types & Data Structure
The project separates content into two main approaches:
1. **Markdown files** for blog posts and static pages
2. **TypeScript data objects** for dynamic homepage sections and reusable content

Key TypeScript interfaces defined in `/src/data/content.ts`:
- `HomeBannerData`, `FeatureItem`, `CallToActionData`
- `PricingData`, `TeamData`, `TestimonialContent`
- `ContactHeroData`, `IntegrationData`

### Special Features
- **MDX support**: For rich markdown content with React components
- **Image optimization**: Uses Next.js Image component with fallback handling
- **SEO optimization**: Built-in sitemap generation and meta tag management
- **Google Analytics**: GTM integration via Next.js third-parties
- **Responsive design**: Mobile-first approach with Tailwind breakpoints

### Build Output
- Configured for standalone output suitable for containerization
- Automatic sitemap generation post-build
- Optimized for deployment on Vercel, Netlify, or Docker

## Development Workflow

When working with this codebase:
1. **Content updates**: Modify markdown files in `/src/content/` or TypeScript data in `/src/data/content.ts`
2. **Component changes**: Work within the established layout structure in `/src/layouts/`
3. **Styling**: Use Tailwind classes primarily, custom CSS in `/src/styles/` when needed
4. **New pages**: Add to `/src/app/` following Next.js App Router conventions
5. **Configuration**: Update JSON files in `/src/config/` for site-wide changes

Always run `npm run lint` and `npm run format` before committing changes.
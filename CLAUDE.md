# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript web application for Ansyn.ai, a company focused on AI and software development services. The application is built using Vite as the build tool and uses Tailwind CSS for styling.

## Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint on the codebase
- `npm run typecheck` - Run TypeScript type checking without emitting files

## Architecture

### Tech Stack
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Supabase** client library (configured but not yet implemented)

### Project Structure
```
src/
├── App.tsx           # Main app component with route-like section rendering
├── main.tsx          # Application entry point
├── index.css         # Tailwind CSS imports
├── vite-env.d.ts     # Vite type definitions
└── components/       # All React components (landing page sections)
    ├── Header.tsx    # Navigation header with logo and menu
    ├── Hero.tsx      # Hero section with background image
    ├── About.tsx     # About section
    ├── Services.tsx  # Services overview
    ├── CoreDomains.tsx  # Core domain expertise
    ├── Approach.tsx  # Development approach
    ├── SuccessStories.tsx  # Client success stories
    ├── WhyChoose.tsx # Why choose us section
    ├── Vision.tsx    # Company vision
    ├── GetStarted.tsx  # Call-to-action section
    └── Contact.tsx   # Contact information and form
```

### Application Architecture
- **Single Page Application**: The app renders all sections in a single page layout (App.tsx)
- **Component-based**: Each major section is its own component in the `components/` directory
- **Section Navigation**: The header contains anchor links to different sections on the page
- **Responsive Design**: Uses Tailwind's responsive utilities for mobile-first design
- **Dark Theme**: The application uses a black background with orange accent colors

### Key Design Patterns
- All components are functional components using TypeScript
- Components use Tailwind CSS classes for styling
- Lucide React icons are used throughout the application
- Background images are loaded via external URLs (Unsplash)
- The color scheme is primarily black/gray with orange (#orange-500) accents

## Configuration Files

- `vite.config.ts` - Vite configuration with React plugin and lucide-react optimization
- `tailwind.config.js` - Tailwind CSS configuration scanning all source files
- `eslint.config.js` - ESLint configuration with React, TypeScript, and React Hooks rules
- `tsconfig.json` - TypeScript configuration using project references
- `tsconfig.app.json` - App-specific TypeScript settings
- `tsconfig.node.json` - Node.js-specific TypeScript settings

## Development Notes

- The application currently uses external image URLs from Unsplash for background images
- Supabase is included as a dependency but not yet implemented
- All components are currently static - no dynamic functionality or routing
- The design follows a professional, corporate style suitable for an AI consulting company
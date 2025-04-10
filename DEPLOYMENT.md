# GergensOrtho.com - Deployment Guide

This document provides instructions for deploying the GergensOrtho.com website.

## Project Overview

GergensOrtho.com is a modern, high-tech dental laboratory website for Gergen's Orthodontic Lab with a special focus on sleep apnea solutions and oral appliances. The site is built with Next.js, TypeScript, and Tailwind CSS.

## Features Implemented

- Responsive design for desktop and mobile devices
- Interactive navigation with dropdown menus
- Case submission portal with file upload functionality
- Prescription form system for doctors to select appliances
- Online payment system
- Product catalog with detailed pages
- Blog/resources section
- Custom color scheme and typography based on brand guidelines

## Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher
- Git (optional, for version control)

## Local Development

1. Clone the repository or extract the provided ZIP file:
   ```
   git clone <repository-url>
   ```
   or
   ```
   unzip gergensortho.zip
   ```

2. Navigate to the project directory:
   ```
   cd gergensortho
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to http://localhost:3000

## Building for Production

1. Build the project:
   ```
   npm run build
   ```

2. Start the production server:
   ```
   npm run start
   ```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the platform built by the creators of Next.js and offers the easiest deployment experience.

1. Create an account on [Vercel](https://vercel.com)
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Run the following command from the project directory:
   ```
   vercel
   ```
4. Follow the prompts to deploy your project

### Option 2: Traditional Hosting

1. Build the project:
   ```
   npm run build
   ```
2. The build output will be in the `.next` directory
3. Upload the following to your hosting provider:
   - `.next` directory
   - `public` directory
   - `package.json` and `package-lock.json` files
   - `next.config.js` file
4. Install dependencies on the server:
   ```
   npm install --production
   ```
5. Start the server:
   ```
   npm run start
   ```

## Environment Variables

No environment variables are required for basic functionality. If you need to add API keys or other configuration in the future, create a `.env.local` file in the project root with your variables.

## Customization

### Updating Content

- Page content can be modified in the corresponding files in the `src/app` directory
- Components can be found in the `src/components` directory
- Styles are defined in `src/app/globals.css` and through Tailwind utility classes

### Changing Colors

The color scheme is defined in:
- `tailwind.config.js` - for Tailwind utility classes
- `src/app/globals.css` - for CSS variables

### Adding New Pages

1. Create a new file in the appropriate directory under `src/app`
2. Use the existing pages as templates
3. Update the navigation in `src/components/layout/Header.tsx` if needed

## Known Issues and Future Improvements

1. Some ESLint warnings about unescaped entities and HTML links
2. The 3D product viewer mentioned in the requirements has not been implemented
3. The RSS integration from ASBA.net for the blog section needs to be implemented
4. The virtual lab tour feature needs to be implemented

## Support

For any questions or issues, please contact the development team.

---

© 2025 Gergen's Orthodontic Lab. All rights reserved.

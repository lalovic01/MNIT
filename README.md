# MNIT Portfolio Website

Modern, conversion-focused portfolio website for the MNIT web developer brand.

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion
- React Router

## Features

- Responsive multi-page architecture (Home, About, Services, Portfolio, Contact)
- EN/SR language toggle with persistent local storage state
- Scroll-based animations, text reveal effects, hover interactions, and route transitions
- Parallax-inspired animated backdrop for depth
- Semantic markup and SEO meta management (title, description, Open Graph, canonical)
- Frontend-functional contact form with inline validation and success/error states
- GitHub Pages and Vercel deployment support

## Project Structure

```txt
mnit-app/
  public/
    .nojekyll
    404.html
    og-mnit.svg
    projects/
  src/
    components/
    context/
    data/
    hooks/
    pages/
    App.jsx
    index.css
    main.jsx
  .github/workflows/deploy-pages.yml
  index.html
  package.json
  tailwind.config.js
  postcss.config.js
  vite.config.js
```

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Default dev URL: `http://localhost:5173`

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push repository to GitHub.
2. Import repository in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### GitHub Pages (Automatic via GitHub Actions)

1. Push project to the `main` branch.
2. In GitHub repository settings, open Pages.
3. Set source to `GitHub Actions`.
4. The workflow in `.github/workflows/deploy-pages.yml` will build and deploy automatically.

Notes:

- `VITE_BASE_PATH` is set automatically in CI using repository name.
- `public/404.html` provides SPA refresh support on GitHub Pages.

## Architecture Notes

- `src/data/siteContent.js`: Centralized EN/SR content and SEO data.
- `src/context/LanguageContext.jsx`: Language state and toggle logic.
- `src/hooks/useDocumentMeta.js`: Dynamic metadata management per route.
- `src/components/*`: Reusable UI and motion primitives.
- `src/pages/*`: Page-level content and conversion sections.

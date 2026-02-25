# Travel Wonders

A light‑themed, design‑forward travel website built with React, Tailwind CSS, GSAP, and modern UI tooling. The site highlights Indian destinations with curated state pages, smooth animations, and a clean, premium layout.

## Highlights
- React + Vite single‑page app with client‑side routing
- Tailwind CSS with a custom design system (colors, typography, spacing)
- GSAP animations for hero and scroll‑reveals
- `lucide-react` and `react-icons` for icons
- Data‑driven state pages from `frontend/src/data/states.js`

## Tech Stack
- React
- Vite
- Tailwind CSS
- GSAP
- React Router
- lucide-react, react-icons

## Project Structure
```
Travel/
  frontend/
    public/
      images/
        featured/
        about/
        states/
    src/
      components/
      data/
      pages/
      App.jsx
      main.jsx
      index.css
    package.json
    README.md
    .gitignore
    vercel.json
```

## Getting Started
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Scripts
From `frontend/`:
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview build

## Data & Content
- State data lives in `frontend/src/data/states.js`
- Featured images are in `frontend/public/images/featured/`
- About image is in `frontend/public/images/about/`
- State images are in `frontend/public/images/states/<state>/`

## Animations
GSAP is used for:
- Hero intro motion
- Scroll‑based reveal of cards and sections

## Deployment (Vercel)
This repo includes a `vercel.json` configured to build the React app inside `frontend/` and serve it as a SPA.

## Notes
- This is a single‑page React app; all routing is handled client‑side.
- Tailwind styles and custom design tokens are set in `frontend/src/index.css`.

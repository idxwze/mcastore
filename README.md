# MCA Store

Frontend-only React application built for an MCA-themed e-commerce experience.
student project / not official. 
Design inspired by a Figma mockup; implementation in React + Vite.
## Links

- Live Demo: `https://idxwze.github.io/mcastore/`
- Repository: `https://github.com/idxwze/mcastore.git`

## Course Submission Notes

- This submission is **frontend-only**.
- There is **no backend**, **no authentication**, and no server-side data persistence.
- Product/catalog and cart behavior are handled in the client app.

Design inspired by a Figma mockup; exported images stored in `src/assets`.

## Tech Stack

- React 18
- Vite 6
- React Router
- Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Scripts

- `npm run dev` - start local development server
- `npm run build` - build production files into `dist/`
- `npm run typecheck` - run TypeScript type check

## Deployment (GitHub Pages)

This repository deploys via GitHub Actions workflow:
- Workflow file: `.github/workflows/deploy.yml`
- On push to `main`, Actions runs `npm ci`, builds with `npm run build`, uploads `dist/`, and deploys to Pages.

### Base path + router setup

- Vite reads base path from `VITE_BASE` in `vite.config.ts`.
- The workflow sets `VITE_BASE=/<repo-name>/` automatically for GitHub Pages.
- Routing uses `HashRouter` so refresh/deep links work reliably on Pages.

## Project Structure

```text
src/
  app/
    components/
    context/
    data/
    pages/
    App.tsx
  assets/
  styles/
  main.tsx
```

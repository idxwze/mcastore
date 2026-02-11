
# MCA Store

Portfolio-ready e-commerce frontend for MCA merchandise, generated from Figma and refactored into a cleaner React + Vite codebase.

## Overview

This project includes:
- Product listing and product details
- Shopping cart and checkout flow
- Order confirmation page
- Contact page
- Basic multilingual support (`en`, `fr`, `ar`) with RTL handling

Figma source used for initial generation:
[Home-page design](https://www.figma.com/design/ZiwoEqGUPenRoZd7wbUhiB/Home-page)

## Tech Stack

- React 18
- Vite 6
- React Router 7
- Tailwind CSS 4
- Sonner (toast notifications)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app runs locally at:
`http://localhost:5173`

### Production Build

```bash
npm run build
```

## Scripts

- `npm run dev` starts the local Vite dev server
- `npm run build` creates a production build

## Project Structure

```text
src/
  app/
    components/   # Shared UI sections (Header, Footer, ProductCard, etc.)
    context/      # Global state (cart + language)
    data/         # Static product catalog
    pages/        # Route pages
    App.tsx       # App shell and routes
  assets/         # Images exported from Figma
  styles/         # Global styles + theme tokens
  main.tsx        # React entrypoint
```

## Notes

- Figma-generated imports like `figma:asset/...` are supported through a custom resolver in `vite.config.ts`.
- The repository has been cleaned from unused generated UI scaffolding to keep code easier to maintain and present.

## Roadmap

- Add backend integration for products, stock, and orders
- Add authentication and user account pages
- Add automated tests (unit + integration)
- Add CI checks (build/test/lint) on pull requests

## License

This project is currently for personal/portfolio use.
  

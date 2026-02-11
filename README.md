
# MCA Store (React + Vite)

This repository contains the MCA Store frontend generated from Figma and cleaned for portfolio-ready development.

Original design source:
https://www.figma.com/design/ZiwoEqGUPenRoZd7wbUhiB/Home-page

## Tech Stack

- React 18
- Vite 6
- React Router
- Tailwind CSS 4
- Sonner (toasts)

## Project Structure

- `src/app/pages/`: route-level pages (`Home`, `Shop`, `Product`, `Cart`, etc.)
- `src/app/components/`: reusable UI sections (`Header`, `Footer`, `ProductCard`)
- `src/app/context/`: global app state (`CartContext`, `LanguageContext`)
- `src/app/data/`: static catalog data
- `src/assets/`: project images exported from Figma

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Notes About Figma Assets

Some generated files import assets as `figma:asset/<file>`.
The Vite config contains a resolver that maps those imports to `src/assets/<file>`.
  

import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const rawBase = process.env.VITE_BASE ?? '/'
const baseWithLeadingSlash = rawBase.startsWith('/') ? rawBase : `/${rawBase}`
const base = baseWithLeadingSlash.endsWith('/')
  ? baseWithLeadingSlash
  : `${baseWithLeadingSlash}/`

export default defineConfig({
  base,
  plugins: [
    {
      name: 'figma-asset-resolver',
      resolveId(source) {
        // Figma exports can reference images as figma:asset/<filename>.
        // This maps those imports to files committed in src/assets.
        if (!source.startsWith('figma:asset/')) {
          return null
        }

        const filename = source.replace('figma:asset/', '')
        const resolvedPath = path.resolve(__dirname, 'src/assets', filename)
        return fs.existsSync(resolvedPath) ? resolvedPath : null
      },
    },
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

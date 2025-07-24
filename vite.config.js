import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/portfolio-site/', // Updated to match new repository name
  build: {
    outDir: 'dist',
  },
})
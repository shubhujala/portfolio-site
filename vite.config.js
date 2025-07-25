import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/', // Changed for custom domain - no subdirectory needed
  build: {
    outDir: 'dist',
  },
})
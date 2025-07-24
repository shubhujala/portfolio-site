import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/portfolio/', // Replace 'portfolio' with your actual repository name
  build: {
    outDir: 'dist',
  },
})
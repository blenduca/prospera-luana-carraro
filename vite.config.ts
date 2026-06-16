import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/luana-funil-evento/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})

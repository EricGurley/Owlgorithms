import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Owlgorithms/',
  plugins: [react()],
  server: {
    strictPort: true, 
  },
})
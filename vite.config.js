import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change this to '/' if using a custom domain
const base = process.env.NODE_ENV === 'production' ? '/tyron-portfolio/' : '/'

export default defineConfig({
  plugins: [react],
  base: base,
})

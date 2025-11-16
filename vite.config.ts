// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL for deployment on GitHub Pages (repo is azoumed/ritage-al-oud)
  // This makes absolute paths resolve to https://<user>.github.io/ritage-al-oud/
  base: '/ritage-al-oud/',
  define: {
    // Vite does not expose process.env by default. This makes
    // process.env.API_KEY available in your client-side code,
    // which is needed by the Gemini SDK.
    'process.env.API_KEY': `"${process.env.API_KEY}"`
  }
})

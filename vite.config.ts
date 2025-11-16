// Minimal ambient declaration for `process.env` so this file can be type-checked
declare const process: {
  env: {
    API_KEY?: string
    [key: string]: string | undefined
  }
}

// The editor may not have `vite` types installed locally; silence missing-module errors
// @ts-ignore: package may not be installed in the editor environment
import { defineConfig } from 'vite'
// @ts-ignore: package may not be installed in the editor environment
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

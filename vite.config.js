import { defineConfig } from 'vite'
import { copyFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  plugins: [
    {
      name: 'copy-redirects',
      closeBundle() {
        try {
          copyFileSync(
            join(process.cwd(), 'public', '_redirects'),
            join(process.cwd(), 'dist', '_redirects')
          )
        } catch (err) {
          console.warn('Could not copy _redirects file:', err.message)
        }
      }
    }
  ]
})

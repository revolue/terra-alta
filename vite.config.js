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
          console.log('✓ _redirects copied to dist')
        } catch (err) {
          console.warn('⚠ Could not copy _redirects:', err.message)
        }
      }
    }
  ]
})

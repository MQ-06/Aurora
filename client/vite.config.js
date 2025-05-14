import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src'), // optional: cleaner imports
    },
  },
  server: {
    port: 5173,
    open: true,
    strictPort: true,
  },
  build: {
    sourcemap: true, // helpful for debugging build errors
    target: 'esnext', // modern target
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})

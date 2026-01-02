import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@translations': path.resolve(__dirname, './src/translations'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  preview: {
    // Für Vite Preview: Alle Routen auf index.html umleiten
    port: 4173,
  },
  build: {
    // Stelle sicher, dass alle Assets korrekt gebaut werden
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})

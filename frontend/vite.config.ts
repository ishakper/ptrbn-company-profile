import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// Vendor chunk groups for code splitting
const vendorGroups: Record<string, string[]> = {
  'react-vendor': ['react', 'react-dom'],
  'router-vendor': ['react-router-dom'],
  'query-vendor': ['@tanstack/react-query'],
  'motion-vendor': ['framer-motion'],
  'form-vendor': ['react-hook-form', 'zod', '@hookform/resolvers'],
  'ui-vendor': [
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-navigation-menu',
    '@radix-ui/react-toast',
    'lucide-react',
  ],
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    allowedHosts: true,
    host: true, // Listen on all local IP addresses
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          for (const [chunk, packages] of Object.entries(vendorGroups)) {
            if (packages.some((pkg) => id.includes(`/node_modules/${pkg}/`))) {
              return chunk
            }
          }
          return undefined
        },
      },
    },
  },
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    watch: {
      // Bind-mounted volumes (Docker Desktop on Windows/Mac) don't reliably propagate native
      // filesystem events, so polling is required for hot-reload to work inside the container.
      usePolling: true,
    },
  },
})

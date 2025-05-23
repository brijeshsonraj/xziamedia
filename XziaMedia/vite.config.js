import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: 5173,      // Optional: Specify the port
    allowedHosts: ['xziamedia.com'], // Add your domain here
  },
  optimizeDeps: {
    include: ['react-intersection-observer'],
  },
})
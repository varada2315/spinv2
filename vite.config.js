import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 6041,
    host: '0.0.0.0',
    allowedHosts: ['spinv2.cyberpunk.co.in']
  }
})

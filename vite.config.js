import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 6041,
    host: '0.0.0.0',
    allowedHosts: [
      'spinversion2.cyberpunk.co.in',
      'spinnewserver.cyberpunk.co.in',
      'spinv2.cyberpunk.co.in',
      '.cyberpunk.co.in',
      'localhost',
      '127.0.0.1'
    ]
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  server: {
    host: true,     // This allows binding to your local IP
    port: 5173      // Optional, to be explicit
  },
  plugins: [react()],

})

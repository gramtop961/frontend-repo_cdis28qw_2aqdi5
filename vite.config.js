import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite 5 host protection: explicitly allow sandbox preview domains
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    // Allow all subdomains under modal.host (covers dynamic preview URLs)
    allowedHosts: ['.modal.host'],
  },
  plugins: [react()],
});

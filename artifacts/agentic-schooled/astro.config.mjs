import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agentic-schooled.replit.app',
  trailingSlash: 'never',
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});

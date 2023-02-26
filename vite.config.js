import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import helmet from 'helmet';

export default defineConfig({
  plugins: [
    react({
      // Enable React Refresh
      fastRefresh: true,
    }),
    // Use Helmet middleware to set CSP headers
    {
      ...helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", 'data:', 'blob:'],
          fontSrc: ["'self'"],
        },
      }),
      apply: 'serve',
    },
  ],
});

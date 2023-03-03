import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
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
          scriptSrc: [
            "'self'",
            "'strict-dynamic'",
            'venzo.com',
            'webfair.dk',
            'h-plus.dk',
          ],
          imgSrc: ["'self'", 'data:', 'blob:'],
          fontSrc: ["'self'"],
        },
      }),
      apply: ['serve', 'build'],
    },
    // input https://www.npmjs.com/package/html-minifier-terser options
    ViteMinifyPlugin({}),
  ],
});

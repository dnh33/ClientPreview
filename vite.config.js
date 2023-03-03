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
          styleSrc: ["'self'", 'venzo.com', 'webfair.dk', "'unsafe-inline'"],
          scriptSrc: ["'self'", 'venzo.com', 'webfair.dk', "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:', 'blob:'],
          fontSrc: ["'self'", 'venzo.com', 'webfair.dk'],
          connectSrc: [
            "'self'",
            'webfair.dk',
            'h-plus.dk',
            'tmmj.webfair.dk',
            'aexplore.io',
            'h-plus.dk',
          ],
        },
      }),
      apply: ['serve', 'build'],
    },
    // input https://www.npmjs.com/package/html-minifier-terser options
    ViteMinifyPlugin({}),
  ],
});

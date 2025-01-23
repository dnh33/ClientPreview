import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import react from "@vitejs/plugin-react";
import helmet from "helmet";

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
          defaultSrc: ["'self'", "*"],
          styleSrc: ["'self'", "'unsafe-inline'", "*"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "*"],
          imgSrc: ["'self'", "data:", "blob:", "*"],
          frameSrc: ["*"], // Allow iframes from any source
          connectSrc: ["*"], // Allow connections to any source
          fontSrc: ["'self'", "*"],
        },
      }),
      apply: ["serve", "build"],
    },
    // input https://www.npmjs.com/package/html-minifier-terser options
    ViteMinifyPlugin({}),
  ],
  server: {
    proxy: {
      // ProxySite.com proxy configuration
      "/proxy/us": {
        target: "https://us-ny.proxysite.com",
        changeOrigin: true,
        secure: true,
        headers: {
          Referer: "https://www.proxysite.com/",
          Origin: "https://www.proxysite.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
        rewrite: (path) => path.replace(/^\/proxy\/us/, ""),
      },
      "/proxy/eu": {
        target: "https://eu-lon.proxysite.com",
        changeOrigin: true,
        secure: true,
        headers: {
          Referer: "https://www.proxysite.com/",
          Origin: "https://www.proxysite.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
        rewrite: (path) => path.replace(/^\/proxy\/eu/, ""),
      },
      "/proxy/asia": {
        target: "https://as-tk.proxysite.com",
        changeOrigin: true,
        secure: true,
        headers: {
          Referer: "https://www.proxysite.com/",
          Origin: "https://www.proxysite.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
        rewrite: (path) => path.replace(/^\/proxy\/asia/, ""),
      },
    },
    cors: true,
  },
});

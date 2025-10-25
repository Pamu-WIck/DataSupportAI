import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    // plugin: normalize incoming request URLs to mitigate server.fs bypasses
    {
      name: "normalize-request-target",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          try {
            if (req.url) {
              // replace backslashes with forward slashes (Windows bypass)
              req.url = req.url.replace(/\\\\/g, "/");
              // collapse multiple ? into single ? to avoid weird query-target shenanigans
              req.url = req.url.replace(/\?{2,}/g, "?");
            }
          } catch (e) {
            // noop - normalization should never crash the server
          }
          next();
        });
      },
    },
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  // Harden dev server FS settings
  server: {
    fs: {
      // enforce strict serving only from allowed roots
      strict: true,
      // allow only the client folder and project root (adjust if you need other folders)
      allow: [
        path.resolve(import.meta.dirname, "client"),
        path.resolve(import.meta.dirname),
      ],
    },
  },
});

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // @ts-ignore - nitro is not in the type definition but is passed to TanStack Start's vite plugin
    nitro: {
      preset: "netlify",
    },
  },
  cloudflare: false,
});

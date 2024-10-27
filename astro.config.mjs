// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  vite: {
    define: {
      "process.env": process.env,
    },
  },
  experimental: {
    env: {
      schema: {
        TURSO_DATABASE_URL: envField.string({
          context: "server",
          access: "secret",
        }),
        TURSO_AUTH_TOKEN: envField.string({
          context: "server",
          access: "secret",
        }),
      },
    },
  },
});

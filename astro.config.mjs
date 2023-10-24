import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import prefetch from "@astrojs/prefetch";
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), prefetch(), icon({include: { ph: ['*'], emojione: ['*'] }}),],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
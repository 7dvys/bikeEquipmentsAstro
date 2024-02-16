import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://www.bikeequipments.com',
  base: '/',
  output: "hybrid",
  adapter: netlify()
});
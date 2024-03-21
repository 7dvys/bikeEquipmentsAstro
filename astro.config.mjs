import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
// import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://7dvys.github.io",
  base: "bikeEquipmentsAstro",
  // output: "hybrid",
  // adapter: netlify()
});

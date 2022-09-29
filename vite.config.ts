import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7007,
  },
  plugins: [svgr(), react()],
  css: {
    /* eslint-disable */
    devSourcemap: true,
    preprocessorOptions: {
      postcss: {
        additionalData: `@import "./src/assets/styles/helpers/index.postcss";`,
      },
      /* eslint-enable */
    },
  },
});

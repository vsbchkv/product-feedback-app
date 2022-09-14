import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7007,
  },
  plugins: [react()],
  css: {
    /* eslint-disable */
    devSourcemap: true,
    preprocessorOptions: {
      postcss: {
        additionalData: `@import "./src/assets/styles/helpers/index.postcss";`,
      },
      /* eslint-enable */
    },
  }
});

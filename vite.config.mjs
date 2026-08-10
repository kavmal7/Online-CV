import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Online-CV/',
  plugins: [react()],
  build: {
    outDir: 'build',
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
            {
              name: 'ui-vendor',
              test: /node_modules[\\/](@chakra-ui|@emotion|framer-motion)[\\/]/,
            },
            {
              name: 'carousel-vendor',
              test: /node_modules[\\/](react-slick|slick-carousel|enquire\.js|json2mq)[\\/]/,
            },
          ],
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    css: true,
  },
});

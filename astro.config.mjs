import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import { astroImageTools } from 'astro-imagetools';
import unocss from 'unocss/vite';

export default defineConfig({
  integrations: [solidJs(), astroImageTools],
  vite: {
    plugins: [unocss()],
  },
});

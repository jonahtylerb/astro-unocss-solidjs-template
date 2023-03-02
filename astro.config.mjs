import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import unocss from 'unocss/astro';
import image from '@astrojs/image';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [
    solidJs(),
    unocss(),
    image(),
    compress(),
  ],
});

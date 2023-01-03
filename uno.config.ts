import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  transformers: [
    transformerAttributifyJsx(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTagify()],
});

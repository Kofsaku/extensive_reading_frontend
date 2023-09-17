import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ...他の設定内容...
  integrations: [tailwind()],
});

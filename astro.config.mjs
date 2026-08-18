import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your production domain. Change this one line if the domain changes.
  site: 'https://cidadelabs.org',

  // Galician is the default language, served at the root (/).
  // Spanish and English live under /es/ and /en/.
  // i18n routing is handled manually via the page tree + dictionary
  // (kept simple and transparent so it's easy to learn from and edit).

  build: {
    // Cleaner URLs: /about/ instead of /about.html
    format: 'directory',
  },
});

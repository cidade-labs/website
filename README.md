# Cidade Labs

Static Astro website for https://cidadelabs.org. Galician lives at `/`, Spanish at `/es/`, and English at `/en/`.

## Develop

Use a supported Node.js LTS release with npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Design and behavior

The production design uses Balanced spacing, Graphite colours, and the Folio mark. The grouped index holds seven records. Selecting an entry updates `?p=record-id`; language switching and browser history retain the selection. Arrow keys browse records, Enter focuses the details, and Back to index restores row focus. Keyboard focus remains visible. Without JavaScript, all records remain in the document.

Light and dark mode follow the system until a preference is saved locally. There are no cookies, analytics, external fonts, or client framework runtime.

## Editing

- `src/components/Archive.astro`: index, records and selection behavior.
- `src/components/Controls.astro`: language and theme controls.
- `src/components/Mark.astro` and `public/favicon.svg`: matching Folio geometry.
- `src/styles/appearance.css`: selected palette and spacing.
- `src/styles/register.css`: responsive index and record layout.
- `src/styles/global.css`: reading pages and shared styles.
- `src/styles/figures.css`: article figure encodings and controls.
- `src/i18n/register.js`: translated index copy.
- `src/content/`: translated project records and essays.

Existing article, about, blog and project URLs remain available. Bus Works is described as a simulation; ADRH covers 15 indicators and 186 census sections; school zones cover 346 schools in 11 municipalities.

Design comparison pages and appearance query overrides have been removed from production. The complete accepted study and the previous site are recoverable in the workspace archive outside this repository.

## Deployment

Cloudflare Pages is connected to `cidade-labs/website`, production branch `main`. Build command: `npm run build`. Output directory: `dist`. Production domain: `cidadelabs.org`, configured in `astro.config.mjs`.

Build and verify before pushing. After pushing `main`, check the Cloudflare Pages check on the GitHub commit, then verify the live homepage and favicon. Do not treat a successful Git push as proof of a successful deployment.

To roll back, revert the release commit and push the revert, or select the previous successful deployment in Cloudflare Pages.

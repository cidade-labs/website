# Cidade Labs

Open maps and tools on public data, for Galicia.

The index is one page. Groups hold a register of records, and selecting a
record holds it out on the right. Writing has its own reading pages. Galician
at `/`, Spanish at `/es/` and English at `/en/`.

## Built with

Astro, HTML, CSS and TypeScript. No client framework runtime, no external
fonts, no analytics and no cookies.

## Design

The Graphite palette, Balanced spacing and the Folio mark. Light and dark
follow the system setting, with no control and nothing stored.

## Behavior

Selecting an entry updates `?p=record-id`, and browser history keeps the
selection. Arrow keys browse records, and Back to index clears the selection
and restores row focus. Switching language keeps the selected record. Keyboard
focus stays visible. Without JavaScript every record is still in the document.

## Deployment

Cloudflare Pages builds the site from `main` and publishes `dist/` to
`cidadelabs.org`.

## Sibling site

The codebase is shared with [publicworks.nyc](https://github.com/jaramana/publicworks.nyc).
A change made on either site is meant to be carried across to the other.

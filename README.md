# cidadelabs.org

The built Cidade Labs site, served at [cidadelabs.org](https://cidadelabs.org) from `site/`.

The source lives in `sites/cidadelabs/` of [jaramana/publicworks.nyc](https://github.com/jaramana/publicworks.nyc), which builds publicworks.nyc from the same code. Don't edit `site/` by hand. Change the source there, run `SITE=cidadelabs npm run build`, and replace `site/` with the new `dist-cidadelabs/`. A push to `main` publishes it.

The site's earlier Astro source is in this repository's history, up to `7f7f1d4`.

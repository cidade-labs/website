# Cidade Labs: website

A small Astro site for the Cidade Labs civic-tech lab. Trilingual (Galician
default, Spanish, English). The data tools (bus map, etc.) live in separate
repositories and are linked from the Projects section.

## Run it locally

You need Node.js 18+ installed. Then, in this folder:

```bash
npm install      # once, downloads Astro and dependencies
npm run dev      # starts a live preview at http://localhost:4321
```

The dev server hot-reloads: save a file and the browser updates instantly.

When you're ready to publish:

```bash
npm run build    # produces a static site in ./dist
```

Deployed on Cloudflare Pages: build command `npm run build`, output directory
`dist`. `dist/` is plain HTML/CSS/JS, so any static host works if that ever
changes.

---

## How it's organized

```
src/
  styles/global.css   ← ALL styling. Edit the tokens at the top to rebrand.
  i18n/ui.js          ← ALL interface text, in gl/es/en. Translate here.
  layouts/Base.astro  ← the page shell (loads fonts + css, header, footer)
  components/          ← reusable pieces (Header, Footer, ProjectCard, PostCard)
  content/
    projects/         ← one .md file per project
    blog/             ← one .md file per blog post
  pages/
    index.astro       ← Galician home (root, /)
    projects.astro    ← /projects
    about.astro       ← /about
    blog/             ← /blog and /blog/[post]
    en/               ← English mirror under /en/
    es/               ← Spanish mirror under /es/
```

---

## Common tasks

### Change a brand colour or font
Edit the `:root` block at the top of `src/styles/global.css`. One line changes
it everywhere.

### Add a new project
Create a file like `src/content/projects/my-project.md`:

```markdown
---
title: "My Project"
description: "One clear sentence about what it does."
status: "idea"        # live | soon | idea  (controls the coloured pill)
url: "https://..."    # optional: link to the live tool
source: "INE"         # optional: data source credit
order: 4              # controls position; lower = earlier
lang: "en"
---

Longer description in Markdown (optional).
```

It appears automatically on the Projects page and home.

### Add a new blog post
Create `src/content/blog/my-post.md`:

```markdown
---
title: "My Post Title"
description: "One-sentence summary for the card and SEO."
pubDate: 2026-07-01
author: "Cidade Labs"
lang: "en"
draft: false          # set true to hide it
---

Write the post in Markdown here.
```

### Add a translation for an existing project or post
Add a sibling `.md` file with `lang: "gl"` or `lang: "es"` instead of `"en"`.
Projects: same folder, e.g. `my-project.gl.md` next to `my-project.md`. Blog
posts: a subfolder per language, e.g. `src/content/blog/gl/my-post.md`, so
the translated post keeps the same URL slug as the English original (this is
what lets the header's gl · es · en switch stay on the same article).

All UI strings (nav, buttons, footer) already exist in gl/es/en in
`src/i18n/ui.js`. Add new keys to all three language blocks together.

---

## Notes

- The language switch (gl · es · en) keeps the reader on the same page when
  they swap languages.
- Galician is the default and is served at the site root.
- The site is static HTML/CSS. The only JavaScript is Astro's View
  Transitions router, used for smoother in-page navigation.
- Production domain is set in `astro.config.mjs` (currently cidadelabs.org).

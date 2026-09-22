/* ============================================================
   WHAT THE INDEX HOLDS
   ------------------------------------------------------------
   The only file that knows where records come from and how they
   are grouped. Archive.astro draws whatever this returns, and a
   field left out here simply does not appear in the record.
   ============================================================ */
import { getCollection } from 'astro:content';
import { localizePath, stripLangPrefix } from './i18n/ui.js';

export async function buildIndex(lang, t) {
  const groups = [t.maps, t.writing, t.tools];

  const projects = (await getCollection('projects', p => p.data.lang === lang))
    .sort((a, b) => a.data.order - b.data.order);
  const posts = (await getCollection('blog', p => p.data.lang === lang && !p.data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const maps = projects.map(p => ({
    key: p.data.recordId,
    title: p.data.title,
    summary: p.data.indexSummary ?? p.data.description,
    body: p.data.description + ' ' + p.data.note,
    group: t.maps,
    year: p.data.year,
    kind: String(p.data.year),
    source: p.data.source,
    scope: p.data.scope,
    built: p.data.builtWith,
    languages: t.languageNames,
    repository: p.data.repository,
    // The map reads the reader's language from the query it is opened with.
    href: p.data.url ? p.data.url + (p.data.url.includes('?') ? '&' : '?') + 'lang=' + lang : null,
    action: t.open,
  }));

  const writing = posts.map(p => {
    const slug = stripLangPrefix(p.slug, lang);
    return {
      key: slug === 'gini-new-york-a-coruna' ? 'gini' : slug === 'why-a-civic-lab' ? 'why' : slug,
      title: p.data.title,
      summary: p.data.indexSummary ?? p.data.description,
      body: p.data.description,
      group: t.writing,
      year: p.data.pubDate.getUTCFullYear(),
      kind: String(p.data.pubDate.getUTCFullYear()),
      source: p.data.source,
      scope: p.data.scope,
      languages: t.languageNames,
      repository: p.data.repository,
      href: localizePath('/blog/' + slug, lang),
      action: t.read,
      arrow: '→',
    };
  });

  const tools = [
    {
      key: 'template', title: t.template, summary: t.templateShort, body: t.templateBody,
      group: t.tools, year: 2026, kind: '2026', built: 'HTML, CSS, MapLibre GL',
      languages: t.languageNames, repository: 'https://github.com/cidade-labs/map-template',
      href: 'https://github.com/cidade-labs/map-template', action: t.code,
    },
    {
      key: 'this', title: t.this, summary: t.thisShort, body: t.thisBody,
      group: t.tools, year: 2026, kind: '2026', built: 'Astro, HTML, CSS, TypeScript',
      languages: t.languageNames,
    },
  ];

  return { groups, entries: [...maps, ...writing, ...tools] };
}

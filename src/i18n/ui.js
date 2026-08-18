/* ============================================================
   CIDADE LABS: UI STRINGS (i18n)
   ------------------------------------------------------------
   Every piece of interface text lives here, in three languages.
   All three languages are filled in. Add a new key to all three
   blocks below; no other files need to change.

   Galician (gl) is the DEFAULT language and is served at the
   site root (/). Spanish (es) and English (en) live under
   /es/ and /en/.
   ============================================================ */

export const languages = ['gl', 'es', 'en'];
export const defaultLang = 'gl';

export const ui = {
  gl: {
    'nav.projects': 'Proxectos',
    'nav.blog': 'Diario',
    'nav.about': 'Sobre nós',
    'tagline': 'Datos, mapas e cidade. Ferramentas cívicas para Galicia.',
    'hero.title': 'Ferramentas que fan a cidade lexible.',
    'hero.lede': 'Cidade Labs constrúe mapas e ferramentas abertas a partir de datos públicos, convertendo o traballo cotián da cidade en algo que calquera pode usar.',
    'hero.cta.projects': 'Ver os proxectos',
    'hero.cta.about': 'Sobre o laboratorio',
    'home.projects.label': 'Proxectos',
    'home.projects.title': 'Ferramentas abertas, construídas sobre datos públicos',
    'home.projects.all': 'Todos os proxectos',
    'home.blog.label': 'Diario',
    'home.blog.title': 'Notas sobre a cidade',
    'home.blog.all': 'Todas as entradas',
    'projects.title': 'Proxectos',
    'projects.lede': 'Cada ferramenta é de código aberto e documenta de onde veñen os seus datos.',
    'blog.title': 'Diario',
    'blog.lede': 'Textos sobre urbanismo, mobilidade e datos públicos en Galicia.',
    'about.title': 'Sobre nós',
    'footer.tagline': 'Datos cívicos, mapas e ferramentas para Galicia.',
    'footer.built': 'Código aberto. Construído sobre datos públicos.',
    'readmore': 'Ler',
    'project.status.live': 'En directo',
    'project.status.soon': 'En progreso',
    'project.status.idea': 'Planeada',
  },
  es: {
    'nav.projects': 'Proyectos',
    'nav.blog': 'Diario',
    'nav.about': 'Sobre nosotros',
    'tagline': 'Datos, mapas y ciudad. Herramientas cívicas para Galicia.',
    'hero.title': 'Herramientas que hacen la ciudad legible.',
    'hero.lede': 'Cidade Labs construye mapas y herramientas abiertas a partir de datos públicos, convirtiendo el trabajo cotidiano de la ciudad en algo que cualquiera puede usar.',
    'hero.cta.projects': 'Ver los proyectos',
    'hero.cta.about': 'Sobre el laboratorio',
    'home.projects.label': 'Proyectos',
    'home.projects.title': 'Herramientas abiertas, construidas sobre datos públicos',
    'home.projects.all': 'Todos los proyectos',
    'home.blog.label': 'Diario',
    'home.blog.title': 'Notas sobre la ciudad',
    'home.blog.all': 'Todas las entradas',
    'projects.title': 'Proyectos',
    'projects.lede': 'Cada herramienta es de código abierto y documenta de dónde vienen sus datos.',
    'blog.title': 'Diario',
    'blog.lede': 'Textos sobre urbanismo, movilidad y datos públicos en Galicia.',
    'about.title': 'Sobre nosotros',
    'footer.tagline': 'Datos cívicos, mapas y herramientas para Galicia.',
    'footer.built': 'Código abierto. Construido sobre datos públicos.',
    'readmore': 'Leer',
    'project.status.live': 'En vivo',
    'project.status.soon': 'En progreso',
    'project.status.idea': 'Planeada',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.blog': 'Journal',
    'nav.about': 'About',
    'tagline': 'Civic data, maps, and tools for Galicia.',
    'hero.title': 'Tools that make the city legible.',
    'hero.lede': 'Cidade Labs builds open maps and tools on public data, turning the everyday work of the city into something anyone can use.',
    'hero.cta.projects': 'See the projects',
    'hero.cta.about': 'About the lab',
    'home.projects.label': 'Projects',
    'home.projects.title': 'Open tools, built on public data',
    'home.projects.all': 'All projects',
    'home.blog.label': 'Journal',
    'home.blog.title': 'Notes on the city',
    'home.blog.all': 'All entries',
    'projects.title': 'Projects',
    'projects.lede': 'Each tool is open-source and documents where its data comes from.',
    'blog.title': 'Journal',
    'blog.lede': 'Writing on urbanism, mobility, and public data in Galicia.',
    'about.title': 'About',
    'footer.tagline': 'Civic data, maps, and tools for Galicia.',
    'footer.built': 'Open-source. Built on public data.',
    'readmore': 'Read',
    'project.status.live': 'Live',
    'project.status.soon': 'In progress',
    'project.status.idea': 'Planned',
  },
};

/* Helper: get a translator function for a given language.
   Falls back to English if a string is missing. */
export function useTranslations(lang) {
  return function t(key) {
    return ui[lang]?.[key] ?? ui['en'][key] ?? key;
  };
}

/* Helper: strip a language subfolder prefix (e.g. "gl/") from a
   content collection slug, so translated posts share the same
   bare URL path as the English original. */
export function stripLangPrefix(slug, lang) {
  return slug.replace(new RegExp('^' + lang + '/'), '');
}

/* Helper: build a URL-prefixed path for a language.
   gl (default) → /path   ·   es → /es/path   ·   en → /en/path */
export function localizePath(path, lang) {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (lang === defaultLang) return '/' + (clean ? clean + '/' : '');
  return '/' + lang + '/' + (clean ? clean + '/' : '');
}

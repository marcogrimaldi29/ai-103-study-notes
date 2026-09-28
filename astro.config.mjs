// @ts-check
import { defineConfig } from 'astro/config';

// The site is published to GitHub Pages as a project site and surfaced through
// the personal domain, so it lives under the /ai-103-study-notes/ base path.
// `site` + `base` also feed the canonical URLs and src/pages/sitemap.xml.ts.
export default defineConfig({
  site: 'https://marcogrimaldi29.com',
  base: '/ai-103-study-notes',
  trailingSlash: 'always',
  build: {
    // Emit /page/index.html so every note has a clean, extensionless URL.
    format: 'directory',
  },
  // Astro 7 defaults this to 'jsx', which strips the whitespace between a text
  // node and an inline element on the next source line — the way React does.
  // These pages are hand-written prose full of <strong>, <a> and <code> at line
  // starts, so that silently joined words together ("built around theskills
  // measured…"). 'true' keeps HTML whitespace semantics and still minifies.
  compressHTML: true,
  // No `markdown` config: there are no .md/.mdx pages, and code highlighting
  // comes from the <Code> component in src/components/CodeBlock.astro, which
  // takes its themes directly rather than from the Markdown pipeline.
  vite: {
    optimizeDeps: {
      // Mermaid is reached only through a dynamic import() inside a client
      // script (see src/components/Mermaid.astro), so Vite's startup dependency
      // scan never sees it. It would instead be discovered on first request,
      // triggering a re-optimization that invalidates the ?v= hash the loaded
      // page already holds — the import then fails with "504 Outdated Optimize
      // Dep" and diagrams silently fall back to their source text.
      // Pre-bundling it up front keeps that from happening during dev.
      include: ['mermaid'],
    },
  },
});

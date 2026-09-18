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
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});

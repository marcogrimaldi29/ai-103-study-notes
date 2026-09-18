# AI-103 Study Notes

Exam-focused study notes for **Microsoft Exam AI-103: Developing AI Apps and Agents on Azure**, the exam behind the
*Microsoft Certified: Azure AI Apps and Agents Developer Associate* certification.

**📖 Read them at [marcogrimaldi29.com/ai-103-study-notes](https://marcogrimaldi29.com/ai-103-study-notes/)**

Written against the **skills measured as of April 16, 2026**.

---

## 📚 What's Inside

| Page | Covers | Exam weight |
| --- | --- | --- |
| [Foundry Foundations](https://marcogrimaldi29.com/ai-103-study-notes/foundry-foundations/) | The Foundry resource and project model, Foundry Models, deployment types, Foundry Tools, connections, the Responses API, RBAC — and the full classic-to-new naming translation table | Prerequisite |
| [Skill 1 · Plan and manage](https://marcogrimaldi29.com/ai-103-study-notes/skill-1-plan-manage/) | Choosing models and services, infrastructure design, CI/CD, quotas and rate limits, monitoring and drift, keyless security, responsible AI guardrails | 25–30% |
| [Skill 2 · Generative AI and agents](https://marcogrimaldi29.com/ai-103-study-notes/skill-2-generative-ai-agents/) | RAG, prompt and hosted agents, tool schemas and function calling, toolboxes, multi-agent orchestration, approvals, evaluation, prompt engineering, observability | 30–35% |
| [Skill 3 · Computer vision](https://marcogrimaldi29.com/ai-103-study-notes/skill-3-computer-vision/) | Image and video generation, inpainting and masks, multimodal understanding, accessible alt text, Content Understanding standard and pro mode, visual responsible AI | 10–15% |
| [Skill 4 · Text analysis and speech](https://marcogrimaldi29.com/ai-103-study-notes/skill-4-text-analysis/) | Azure Language vs generative prompting, structured JSON output, sentiment and safety, translation, the speech stack and Voice Live | 10–15% |
| [Skill 5 · Information extraction](https://marcogrimaldi29.com/ai-103-study-notes/skill-5-information-extraction/) | Azure AI Search indexers and skillsets, integrated vectorization, vector/hybrid/semantic search, agentic retrieval, Content Understanding analyzers | 10–15% |
| [SDK deep dive](https://marcogrimaldi29.com/ai-103-study-notes/sdk-deep-dive/) | The Python the exam makes you read: `AIProjectClient`, the Responses API, the function-calling loop, agents, evaluation, tracing, plus a classic-to-new migration map | — |
| [Exam tips & caveats](https://marcogrimaldi29.com/ai-103-study-notes/exam-tips/) | Key numbers, decision trees, rebrand traps, confused service pairs, a scenario-to-answer lookup table and a pre-exam checklist | Final review |

Every page carries Mermaid diagrams, decision tables, Python samples and exam-caveat callouts.

## ✨ Features

- **Light / dark mode** with a switcher drawn as the site's own sunrise brand mark, which opens into a full sun in light mode
- **Two-rail navigation** — a foldable left sidebar for moving between pages (collapsing to an icon rail, then to a
  drawer), and a right-hand **On this page** outline with a marker that slides between sections as you scroll. Below the
  aside breakpoint the outline folds into a collapsible card between the page title and the body
- **Mermaid diagrams** that re-render with the active theme
- **Build-time syntax highlighting** with Shiki — no highlighter ships to the browser
- Floating **Home** and **Back to top** buttons that appear on scroll
- Accessible by design: skip link, visible focus, semantic landmarks, reduced-motion support, print stylesheet
- `sitemap.xml`, canonical URLs, Open Graph tags and JSON-LD structured data
- Cookieless analytics via [Umami](https://umami.is/)

## 🗂️ Project Structure

```
src/
├── components/     Header, Footer, Sidebar, OnThisPage, ThemeToggle, Mermaid, CodeBlock, Callout…
├── data/site.ts    Single source of truth: site identity + page registry
├── layouts/        BaseLayout (head, header, footer) and NoteLayout (sidebar + content)
├── lib/urls.ts     Base-path helpers for links, assets and canonical URLs
├── pages/          One directory per note page, plus sitemap.xml.ts
└── styles/         global.css — the whole design system
public/images/      Brand mark and profile image
```

Navigation, sidebar, footer, pager and sitemap all read from the page registry in
[`src/data/site.ts`](src/data/site.ts).

## 🚀 Deployment

Pushing to `main` triggers [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds the
site and publishes it to GitHub Pages.

The workflow substitutes the `UMAMI_WEBSITE_ID` repository secret for a placeholder in the built output, so the
analytics ID is never committed. Without the secret the placeholder survives, the guard in
[`Analytics.astro`](src/components/Analytics.astro) matches it, and no analytics script loads at all.

**Repository setup:** Settings → Pages → Source → **GitHub Actions**, and add `UMAMI_WEBSITE_ID` under
Settings → Secrets and variables → Actions.

## 🧰 Built With

[Astro](https://astro.build/) · [Mermaid](https://mermaid.js.org/) · [Shiki](https://shiki.style/) ·
[Umami](https://umami.is/) — all open source.

## 🤖 A Note on AI

These notes were researched and written **with the help of AI — [Claude](https://claude.com/claude-code) in this case** —
working from the official Microsoft Learn documentation, the AI-103 study guide and the AI-103T00-A course syllabus.
Every page was reviewed before publication, but AI-assisted writing can still get details wrong, and Microsoft Foundry
changes quickly. Treat these notes as a study companion and verify anything decision-critical against the
[official documentation](https://learn.microsoft.com/en-us/azure/foundry/).

## 🤝 Contributing

Foundry changes fast and Microsoft renames features often, so corrections are genuinely useful. Open an
[issue](https://github.com/marcogrimaldi29/ai-103-study-notes/issues) or a pull request.

## ⚠️ Disclaimer

These notes are an independent study aid for **learning purposes only**. They are not affiliated with or endorsed by
Microsoft. Always verify against the
[official AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103)
and the [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/) before relying on any detail
here.

## 👋 Let's Connect

**Marco Grimaldi** — Cloud Solution Architect

- [![marcogrimaldi29.com](https://img.shields.io/badge/marcogrimaldi29.com-0b1422?style=flat-square&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjUiIHkxPSIxNiIgeDI9IjI3IiB5Mj0iMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2ZiOTUwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzJlYzVjNSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDQ5M2Y4IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM%2BCiAgPGcgc3Ryb2tlPSJ1cmwoI2cpIiBzdHJva2Utd2lkdGg9IjEuOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgIDxsaW5lIHgxPSIxNiIgeTE9IjEwLjUiIHgyPSIxNiIgeTI9IjcuNSIgLz4KICAgIDxsaW5lIHgxPSIxMC4yIiB5MT0iMTIuNiIgeDI9IjguNCIgeTI9IjEwLjgiIC8%2BCiAgICA8bGluZSB4MT0iMjEuOCIgeTE9IjEyLjYiIHgyPSIyMy42IiB5Mj0iMTAuOCIgLz4KICA8L2c%2BCiAgPHBhdGggZD0iTTguNSAyMCBhNy41IDcuNSAwIDAgMSAxNSAwIHoiIGZpbGw9InVybCgjZykiIC8%2BCiAgPGxpbmUgeDE9IjQuNSIgeTE9IjIwIiB4Mj0iMjcuNSIgeTI9IjIwIiBzdHJva2U9IiMyZWM1YzUiIHN0cm9rZS13aWR0aD0iMS45IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8%2BCjwvc3ZnPgo%3D&logoColor=white)](https://marcogrimaldi29.com/) — My central hub for study notes, certification reviews, and other resources
- [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/marcogrimaldi29) — You're already here; feel free to explore, star, or fork anything useful
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marco-grimaldi29/) — Let's connect, collaborate, or just say hello

⭐ If these notes helped, star the repo so other AI-103 candidates can find them.

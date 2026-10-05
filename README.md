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
- Cookieless analytics via [Umami](https://umami.is/)

## 🗂️ Project Structure

```
src/
├── components/     Header, Footer, Sidebar, OnThisPage, ThemeToggle, Mermaid, CodeBlock, Callout…
├── data/site.ts    Single source of truth: site identity + page registry
├── layouts/        BaseLayout (head, header, footer) and NoteLayout (sidebar + content)
├── lib/urls.ts     Base-path helpers for links and assets
├── pages/          One directory per note page
└── styles/         global.css — the whole design system
public/images/      Brand mark and profile image
```

Navigation, sidebar, footer and pager all read from the page registry in [`src/data/site.ts`](src/data/site.ts).

## 🧰 Built With

[Astro](https://astro.build/) · [Mermaid](https://mermaid.js.org/) · [Shiki](https://shiki.style/) ·
[Umami](https://umami.is/) — all open source.

## 🤖 A Note on AI

These notes were researched and written **with the help of AI — [Claude](https://claude.com/claude-code)** in this case — working from the official Microsoft Learn documentation, the AI-103 study guide and the AI-103T00-A course syllabus. Every page was reviewed before publication, but AI-assisted writing can still get details wrong, and Microsoft Foundry changes quickly. Treat these notes as a study companion and verify anything decision-critical against the [official documentation](https://learn.microsoft.com/en-us/azure/foundry/).

## 🐞 Spotted a Mistake?

Foundry changes fast and Microsoft renames features often, so if something here is wrong or out of date, please
[report an issue](https://github.com/marcogrimaldi29/ai-103-study-notes/issues).

## ⚠️ Disclaimer

These notes are an independent study aid for **learning purposes only**. They are not affiliated with or endorsed by
Microsoft. Always verify against the [official AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) and the [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/) before relying on any detail
here.

## 💚 Support

If these notes helped you prepare for AI-103, there are a few ways to show it: ⭐ star this repo on GitHub so other
candidates can find it, 🤝 connect with me on LinkedIn, or ☕ support the work behind them with a coffee.

<p>
  <a href="https://github.com/marcogrimaldi29/ai-103-study-notes"><img src="https://img.shields.io/badge/Star_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Star on GitHub" /></a>
  <a href="https://www.linkedin.com/in/marco-grimaldi29/"><img src="https://img.shields.io/badge/Connect_on_LinkedIn-0A66C2?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2EyLjA2MiAyLjA2MiAwIDAgMS0yLjA2My0yLjA2NSAyLjA2NCAyLjA2NCAwIDEgMSAyLjA2MyAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyNSAweiIvPjwvc3ZnPg%3D%3D" alt="Connect on LinkedIn" /></a>
  <a href="https://buymeacoffee.com/marcogrimaldi29"><img src="https://img.shields.io/badge/Support_with_a_coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Support with a coffee" /></a>
</p>

Maintained by **Marco Grimaldi**, Cloud Solution Architect. Find more study notes and certification reviews at
**[marcogrimaldi29.com](https://marcogrimaldi29.com/)**, or reach out through my
**[contact page](https://marcogrimaldi29.com/contact/)**.

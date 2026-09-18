/**
 * Single source of truth for the site's identity and page registry.
 *
 * Everything that needs to know "which pages exist and in what order" reads
 * from here: the header nav, the foldable sidebar, the footer, the prev/next
 * pager and src/pages/sitemap.xml.ts.
 */

export const SITE = {
  name: 'AI-103 Study Notes',
  shortName: 'Study Notes',
  exam: 'AI-103',
  examTitle: 'Developing AI Apps and Agents on Azure',
  certification: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate',
  /** The skills-measured revision these notes are written against. */
  skillsMeasured: 'April 16, 2026',
  origin: 'https://marcogrimaldi29.com',
  repo: 'https://github.com/marcogrimaldi29/ai-103-study-notes',
  author: {
    name: 'Marco Grimaldi',
    role: 'Cloud Solution Architect',
    site: 'https://marcogrimaldi29.com/',
    github: 'https://github.com/marcogrimaldi29',
    linkedin: 'https://www.linkedin.com/in/marco-grimaldi29/',
  },
} as const;

export type PageGroup = 'start' | 'skills' | 'extras';

export interface NotePage {
  /** URL segment; '' is the home page. */
  slug: string;
  /** Full label used in the sidebar and footer. */
  label: string;
  /** Condensed label for the top navigation bar. */
  navLabel: string;
  /** Compact marker shown in the collapsed sidebar rail. */
  rail: string;
  /** Eyebrow shown on cards and page headers. */
  badge: string;
  /** CSS custom property holding this page's accent colour. */
  accent: string;
  /** Card / meta description. */
  blurb: string;
  group: PageGroup;
  /** Exam weighting, for the skill pages only. */
  weight?: string;
  /** Mid-point of the weighting range, used to size the progress bars. */
  weightPct?: number;
}

export const PAGES: NotePage[] = [
  {
    slug: '',
    label: 'Home',
    navLabel: 'Home',
    rail: '⌂',
    badge: 'Overview',
    accent: 'var(--s0)',
    blurb: 'Exam overview, skills weighting and how to use these notes.',
    group: 'start',
  },
  {
    slug: 'foundry-foundations',
    label: 'Foundry Foundations',
    navLabel: 'Foundations',
    rail: '◆',
    badge: 'Foundations · Prerequisite',
    accent: 'var(--s0)',
    blurb:
      'The mental model everything else hangs off: the Foundry resource and project, Foundry Models, Foundry Tools, connections, the Responses API and the vocabulary shift from Azure AI Foundry.',
    group: 'start',
  },
  {
    slug: 'skill-1-plan-manage',
    label: 'Plan and manage an Azure AI solution',
    navLabel: '1 · Plan & Manage',
    rail: '1',
    badge: 'Skill 1 · 25–30%',
    accent: 'var(--s1)',
    blurb:
      'Choosing models and services, designing the infrastructure, deployment types, quotas and cost, security and keyless auth, monitoring, and responsible AI guardrails.',
    group: 'skills',
    weight: '25–30%',
    weightPct: 27.5,
  },
  {
    slug: 'skill-2-generative-ai-agents',
    label: 'Implement generative AI and agentic solutions',
    navLabel: '2 · GenAI & Agents',
    rail: '2',
    badge: 'Skill 2 · 30–35%',
    accent: 'var(--s2)',
    blurb:
      'The biggest domain: RAG, prompt agents and hosted agents, tools and toolboxes, multi-agent orchestration, approvals, evaluation, prompt engineering and observability.',
    group: 'skills',
    weight: '30–35%',
    weightPct: 32.5,
  },
  {
    slug: 'skill-3-computer-vision',
    label: 'Implement computer vision solutions',
    navLabel: '3 · Vision',
    rail: '3',
    badge: 'Skill 3 · 10–15%',
    accent: 'var(--s3)',
    blurb:
      'Image and video generation, inpainting and mask-based edits, multimodal understanding and captioning, Content Understanding for visuals, and visual responsible AI.',
    group: 'skills',
    weight: '10–15%',
    weightPct: 12.5,
  },
  {
    slug: 'skill-4-text-analysis',
    label: 'Implement text analysis solutions',
    navLabel: '4 · Text & Speech',
    rail: '4',
    badge: 'Skill 4 · 10–15%',
    accent: 'var(--s4)',
    blurb:
      'Entity, sentiment and summary extraction with prompts or Azure Language, structured JSON output, translation, and the full speech stack including Voice Live.',
    group: 'skills',
    weight: '10–15%',
    weightPct: 12.5,
  },
  {
    slug: 'skill-5-information-extraction',
    label: 'Implement information extraction solutions',
    navLabel: '5 · Extraction',
    rail: '5',
    badge: 'Skill 5 · 10–15%',
    accent: 'var(--s5)',
    blurb:
      'Retrieval and grounding pipelines in Azure AI Search, vector/hybrid/semantic ranking, skillsets and integrated vectorization, and document extraction with Content Understanding.',
    group: 'skills',
    weight: '10–15%',
    weightPct: 12.5,
  },
  {
    slug: 'sdk-deep-dive',
    label: 'Foundry SDK deep dive',
    navLabel: 'SDK',
    rail: '⌨',
    badge: 'Deep dive · Python',
    accent: 'var(--s7)',
    blurb:
      'The Python code the exam makes you read: AIProjectClient, the Responses API, conversations, function tools, streaming, evaluation and tracing — with the classic-to-new migration map.',
    group: 'extras',
  },
  {
    slug: 'exam-tips',
    label: 'Exam tips & caveats',
    navLabel: 'Exam Tips',
    rail: '★',
    badge: 'Final review',
    accent: 'var(--s6)',
    blurb:
      'Key numbers, decision trees, the naming traps that cost marks, a scenario-to-answer lookup table and a pre-exam checklist for the night before.',
    group: 'extras',
  },
];

export const GROUP_LABELS: Record<PageGroup, string> = {
  start: 'Start here',
  skills: 'Skills measured',
  extras: 'Final review',
};

/** Pages that carry an exam weighting, in outline order. */
export const SKILL_PAGES = PAGES.filter((p) => p.group === 'skills');

export function pageBySlug(slug: string): NotePage | undefined {
  return PAGES.find((p) => p.slug === slug);
}

/** Previous / next page for the pager, skipping the home page. */
export function neighbours(slug: string) {
  const ordered = PAGES.filter((p) => p.slug !== '');
  const i = ordered.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? ordered[i - 1] : undefined, next: i >= 0 ? ordered[i + 1] : undefined };
}

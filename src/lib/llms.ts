// Builds /llms.txt (https://llmstxt.org): the site's content as Markdown for language models.
// Kept free of Astro imports so it can be tested with `node --test`.
import type { Item } from '../locales/types.ts';

export interface LlmsApp {
  slug: string;
  name: string;
  repo: string;
  needsApiKey: boolean;
  tagline: string;
  summary: string;
  features: Item[];
  privacy: string;
  platforms: string[];
}

export interface LlmsInput {
  /** The site's origin, without a trailing slash. */
  site: string;
  title: string;
  description: string;
  lead: string;
  common: Item[];
  /** The note shown for apps that need an AI provider's API key. */
  requirements: string;
  apps: LlmsApp[];
  /** Every language of the site, with the URL of its home page. */
  languages: { name: string; url: string }[];
}

const items = (list: Item[]) => list.map((i) => `- ${i.title}: ${i.body}`);

function appSection(app: LlmsApp, input: LlmsInput): string[] {
  return [
    `## ${app.name}`,
    '',
    `${app.tagline}. ${app.summary}`,
    '',
    ...(app.features.length ? [...items(app.features), ''] : []),
    `Runs on: ${app.platforms.join(', ')}`,
    '',
    app.privacy,
    '',
    ...(app.needsApiKey ? [input.requirements, ''] : []),
    `- [Page](${input.site}/${app.slug}/)`,
    `- [Download](${app.repo}/releases/latest)`,
    `- [Source code](${app.repo})`,
    '',
  ];
}

export function llmsTxt(input: LlmsInput): string {
  return [
    `# ${input.title}`,
    '',
    `> ${input.description}`,
    '',
    input.lead,
    '',
    ...items(input.common),
    '',
    '## Apps',
    '',
    ...input.apps.map((app) => `- [${app.name}](${input.site}/${app.slug}/): ${app.tagline}`),
    '',
    ...input.apps.flatMap((app) => appSection(app, input)),
    '## Optional',
    '',
    ...input.languages.map((l) => `- [${l.name}](${l.url})`),
    '',
  ].join('\n');
}

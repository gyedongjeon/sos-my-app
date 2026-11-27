// Serves /llms.txt, the site's content for language models, in English. See src/lib/llms.ts.
import type { APIRoute } from 'astro';
import { apps } from '../data/apps';
import { defaultLocale, languageNames, localePath, locales, messages } from '../i18n';
import { llmsTxt } from '../lib/llms';

export const GET: APIRoute = ({ site }) => {
  const origin = site!.origin;
  const { ui, apps: text } = messages[defaultLocale];
  const body = llmsTxt({
    site: origin,
    title: 'SOS My App',
    description: ui.siteDescription,
    lead: ui.heroLead,
    common: ui.common,
    requirements: ui.requirements,
    apps: apps.map((app) => ({ ...app, ...text[app.slug] })),
    languages: locales.map((l) => ({ name: languageNames[l], url: new URL(localePath(l), origin).href })),
  });
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

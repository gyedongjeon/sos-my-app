// Structured data (schema.org JSON-LD) for search engines and language models.
// Kept free of Astro imports so it can be tested with `node --test`.

/** JSON for a `<script type="application/ld+json">`, with `<` escaped so it cannot end the script. */
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

interface Page {
  name: string;
  url: string;
  description: string;
  /** BCP 47 tag of the page's language. */
  inLanguage: string;
}

export function siteJsonLd(page: Page) {
  return { '@context': 'https://schema.org', '@type': 'WebSite', ...page };
}

export interface AppPage extends Page {
  /** A schema.org application category, e.g. `EducationalApplication`. */
  category: string;
  platforms: string[];
  repo: string;
}

export function appJsonLd({ category, platforms, repo, ...page }: AppPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    ...page,
    applicationCategory: category,
    operatingSystem: platforms.join(', '),
    downloadUrl: `${repo}/releases/latest`,
    license: 'https://opensource.org/licenses/MIT',
    isAccessibleForFree: true,
    sameAs: [repo],
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}

// IndexNow (https://www.indexnow.org): tells search engines such as Bing and Yandex which URLs changed.
// Used by scripts/indexnow.ts after each deploy; the key file is served by src/pages/[key].txt.ts.

const entities: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'" };

/** The page URLs in a sitemap, in order. */
export function sitemapUrls(xml: string): string[] {
  return [...xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)].map((m) =>
    m[1].replace(/&(amp|lt|gt|quot|apos);/g, (e) => entities[e]),
  );
}

/** The JSON body of an IndexNow submission for `urls` on `site`. */
export function indexNowBody(site: string, key: string, urls: string[]) {
  const origin = new URL(site);
  return {
    host: origin.host,
    key,
    keyLocation: new URL(`/${key}.txt`, origin).href,
    urlList: urls,
  };
}

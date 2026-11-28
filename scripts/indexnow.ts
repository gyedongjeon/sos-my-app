// Submits every URL in the live sitemap to IndexNow. Run by .github/workflows/deploy.yml after a deploy.
import { indexNowKey } from '../src/data/indexnow.ts';
import { indexNowBody, sitemapUrls } from '../src/lib/indexnow.ts';

const site = 'https://sosmy.app';

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url}: ${res.status}`);
  return res.text();
}

// The key file must be live before IndexNow checks it.
const served = (await fetchText(`${site}/${indexNowKey}.txt`)).trim();
if (served !== indexNowKey) throw new Error('The live IndexNow key file does not match src/data/indexnow.ts');

const sitemaps = sitemapUrls(await fetchText(`${site}/sitemap-index.xml`));
const urls = (await Promise.all(sitemaps.map(async (s) => sitemapUrls(await fetchText(s))))).flat();

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(indexNowBody(site, indexNowKey, urls)),
});
console.log(`IndexNow: submitted ${urls.length} URLs, HTTP ${res.status}`);
// 200 OK and 202 Accepted (key not yet verified) both mean the submission was received.
if (res.status !== 200 && res.status !== 202) {
  throw new Error(`IndexNow rejected the submission: ${res.status} ${await res.text()}`);
}

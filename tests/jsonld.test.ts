import { test } from 'node:test';
import assert from 'node:assert/strict';
import { appJsonLd, jsonLdHtml, siteJsonLd } from '../src/lib/jsonld.ts';

test('escapes < so the JSON cannot close its script tag', () => {
  const html = jsonLdHtml({ name: '</script><b>' });
  assert.ok(!html.includes('<'));
  assert.deepEqual(JSON.parse(html), { name: '</script><b>' });
});

test('describes the site as a WebSite', () => {
  assert.deepEqual(
    siteJsonLd({ name: 'SOS My App', url: 'https://sosmy.app/ko/', description: 'Apps.', inLanguage: 'ko' }),
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'SOS My App',
      url: 'https://sosmy.app/ko/',
      description: 'Apps.',
      inLanguage: 'ko',
    },
  );
});

test('describes an app as a free, MIT-licensed SoftwareApplication', () => {
  const data = appJsonLd({
    name: 'SOS My Feed',
    url: 'https://sosmy.app/feed/',
    description: 'A feed reader.',
    inLanguage: 'en',
    category: 'UtilitiesApplication',
    platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
    repo: 'https://github.com/example/sos-my-feed',
  });
  assert.equal(data['@type'], 'SoftwareApplication');
  assert.equal(data.applicationCategory, 'UtilitiesApplication');
  assert.equal(data.operatingSystem, 'macOS (Apple Silicon), Windows (64-bit)');
  assert.equal(data.downloadUrl, 'https://github.com/example/sos-my-feed/releases/latest');
  assert.equal(data.license, 'https://opensource.org/licenses/MIT');
  assert.deepEqual(data.sameAs, ['https://github.com/example/sos-my-feed']);
  assert.deepEqual(data.offers, { '@type': 'Offer', price: '0', priceCurrency: 'USD' });
});

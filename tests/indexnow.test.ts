import { test } from 'node:test';
import assert from 'node:assert/strict';
import { indexNowBody, sitemapUrls } from '../src/lib/indexnow.ts';

test('sitemapUrls returns every <loc> in a sitemap', () => {
  const xml =
    '<?xml version="1.0"?><urlset><url><loc>https://sosmy.app/</loc></url>' +
    '<url><loc>https://sosmy.app/ko/</loc><xhtml:link rel="alternate" href="https://sosmy.app/"/></url></urlset>';
  assert.deepEqual(sitemapUrls(xml), ['https://sosmy.app/', 'https://sosmy.app/ko/']);
});

test('sitemapUrls decodes XML entities', () => {
  assert.deepEqual(sitemapUrls('<loc>https://sosmy.app/?a=1&amp;b=2</loc>'), ['https://sosmy.app/?a=1&b=2']);
});

test('indexNowBody names the host, key, and key file', () => {
  assert.deepEqual(indexNowBody('https://sosmy.app', 'abc123', ['https://sosmy.app/']), {
    host: 'sosmy.app',
    key: 'abc123',
    keyLocation: 'https://sosmy.app/abc123.txt',
    urlList: ['https://sosmy.app/'],
  });
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { llmsTxt, type LlmsInput } from '../src/lib/llms.ts';

const input: LlmsInput = {
  site: 'https://sosmy.app',
  title: 'SOS My App',
  description: 'Small, free desktop apps.',
  lead: 'One app for each moment.',
  common: [
    { title: 'On your computer', body: 'No sign-up.' },
    { title: 'Free', body: 'MIT license.' },
  ],
  requirements: 'Needs an API key.',
  apps: [
    {
      slug: 'interview',
      name: 'SOS My Interview',
      repo: 'https://github.com/example/sos-my-interview',
      needsApiKey: true,
      tagline: 'Interview practice',
      summary: 'Practise answering out loud.',
      features: [{ title: 'Feedback', body: 'Get AI feedback.' }],
      privacy: 'Recordings stay on your computer.',
      platforms: ['macOS', 'Windows'],
    },
    {
      slug: 'feed',
      name: 'SOS My Feed',
      repo: 'https://github.com/example/sos-my-feed',
      needsApiKey: false,
      tagline: 'A feed reader',
      summary: 'Read RSS feeds.',
      features: [],
      privacy: 'Subscriptions stay on your computer.',
      platforms: ['macOS'],
    },
  ],
  languages: [
    { name: 'English', url: 'https://sosmy.app/' },
    { name: '한국어', url: 'https://sosmy.app/ko/' },
  ],
};

test('starts with the title and the description as a blockquote', () => {
  assert.match(llmsTxt(input), /^# SOS My App\n\n> Small, free desktop apps\.\n\nOne app for each moment\.\n/);
});

test('lists every app page with its tagline', () => {
  const text = llmsTxt(input);
  assert.ok(text.includes('- [SOS My Interview](https://sosmy.app/interview/): Interview practice'));
  assert.ok(text.includes('- [SOS My Feed](https://sosmy.app/feed/): A feed reader'));
});

test('gives each app its features, platforms, privacy, and links', () => {
  const text = llmsTxt(input);
  const interview = text.slice(text.indexOf('## SOS My Interview'), text.indexOf('## SOS My Feed'));
  assert.ok(interview.includes('- Feedback: Get AI feedback.'));
  assert.ok(interview.includes('Runs on: macOS, Windows'));
  assert.ok(interview.includes('Recordings stay on your computer.'));
  assert.ok(interview.includes('[Download](https://github.com/example/sos-my-interview/releases/latest)'));
  assert.ok(interview.includes('[Source code](https://github.com/example/sos-my-interview)'));
});

test('mentions the API key only for apps that need one', () => {
  const text = llmsTxt(input);
  const interview = text.slice(text.indexOf('## SOS My Interview'), text.indexOf('## SOS My Feed'));
  const feed = text.slice(text.indexOf('## SOS My Feed'));
  assert.ok(interview.includes('Needs an API key.'));
  assert.ok(!feed.includes('Needs an API key.'));
});

test('lists the other languages under Optional', () => {
  const text = llmsTxt(input);
  assert.ok(text.includes('## Optional'));
  assert.ok(text.includes('- [한국어](https://sosmy.app/ko/)'));
});

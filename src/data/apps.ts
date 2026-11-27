// The apps of the SOS series. Their text, in every language, is in src/locales/<locale>.ts
// under `apps`, and follows each app's README; when an app's README changes what it does or
// where it runs, update every locale too.
import type { ImageMetadata } from 'astro';
import feedIcon from '../assets/icons/feed.svg';
import interviewIcon from '../assets/icons/interview.svg';
import languageIcon from '../assets/icons/language.svg';
import feedFeed from '../assets/screens/feed-feed.png';
import feedReader from '../assets/screens/feed-reader.png';
import interviewHome from '../assets/screens/interview-home.png';
import languageConversation from '../assets/screens/language-conversation.png';
import languageChoice from '../assets/screens/language-language.png';
import languageHome from '../assets/screens/language-home.png';

export type AppSlug = 'interview' | 'language' | 'feed';

export interface App {
  slug: AppSlug;
  name: string;
  repo: string;
  icon: ImageMetadata;
  /** Whether the app needs an AI provider's API key; the app page then shows the shared `requirements` note. */
  needsApiKey: boolean;
  /** The schema.org application category, for the app page's structured data. */
  category: string;
  /** Screenshots, the first one shown on the home page. May be empty until an app has some. */
  images: ImageMetadata[];
}

export const apps: App[] = [
  {
    slug: 'interview',
    category: 'EducationalApplication',
    name: 'SOS My Interview',
    repo: 'https://github.com/gyedongjeon/sos-my-interview',
    icon: interviewIcon,
    needsApiKey: true,
    images: [interviewHome],
  },
  {
    slug: 'language',
    category: 'EducationalApplication',
    name: 'SOS My Language',
    repo: 'https://github.com/gyedongjeon/sos-my-language',
    icon: languageIcon,
    needsApiKey: true,
    images: [languageConversation, languageChoice, languageHome],
  },
  {
    slug: 'feed',
    category: 'UtilitiesApplication',
    name: 'SOS My Feed',
    repo: 'https://github.com/gyedongjeon/sos-my-feed',
    icon: feedIcon,
    needsApiKey: false,
    images: [feedFeed, feedReader],
  },
];

export function getApp(slug: AppSlug): App {
  const app = apps.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app: ${slug}`);
  return app;
}

export const latestRelease = (app: App) => `${app.repo}/releases/latest`;

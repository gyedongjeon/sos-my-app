// The apps of the SOS series. Their text, in every language, is in src/locales/<locale>.ts
// under `apps`, and follows each app's README; when an app's README changes what it does or
// where it runs, update every locale too.
import type { ImageMetadata } from 'astro';
import interviewIcon from '../assets/icons/interview.svg';
import languageIcon from '../assets/icons/language.svg';
import interviewHome from '../assets/screens/interview-home.png';
import languageConversation from '../assets/screens/language-conversation.png';
import languageChoice from '../assets/screens/language-language.png';
import languageHome from '../assets/screens/language-home.png';

export type AppSlug = 'interview' | 'language';

export interface App {
  slug: AppSlug;
  name: string;
  repo: string;
  icon: ImageMetadata;
  /** Screenshots, the first one shown on the home page. May be empty until an app has some. */
  images: ImageMetadata[];
}

export const apps: App[] = [
  {
    slug: 'interview',
    name: 'SOS My Interview',
    repo: 'https://github.com/gyedongjeon/sos-my-interview',
    icon: interviewIcon,
    images: [interviewHome],
  },
  {
    slug: 'language',
    name: 'SOS My Language',
    repo: 'https://github.com/gyedongjeon/sos-my-language',
    icon: languageIcon,
    images: [languageConversation, languageChoice, languageHome],
  },
];

export function getApp(slug: AppSlug): App {
  const app = apps.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app: ${slug}`);
  return app;
}

export const latestRelease = (app: App) => `${app.repo}/releases/latest`;

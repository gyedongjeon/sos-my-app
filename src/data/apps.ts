// The apps of the SOS series. Their text, in every language, is in src/locales/<locale>.ts
// under `apps`, and follows each app's README; when an app's README changes what it does or
// where it runs, update every locale too.
import type { ImageMetadata } from 'astro';
import interviewIcon from '../assets/icons/interview.svg';
import englishIcon from '../assets/icons/english.svg';
import germanIcon from '../assets/icons/german.svg';
import interviewHome from '../assets/screens/interview-home.png';
import englishPractice from '../assets/screens/english-practice.png';
import englishHome from '../assets/screens/english-home.png';

export type AppSlug = 'interview' | 'english' | 'german';

export interface App {
  slug: AppSlug;
  name: string;
  repo: string;
  icon: ImageMetadata;
  /** Screenshots, the first one shown on the home page. May be empty until the app has some. */
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
    slug: 'english',
    name: 'SOS My English',
    repo: 'https://github.com/gyedongjeon/sos-my-english',
    icon: englishIcon,
    images: [englishPractice, englishHome],
  },
  {
    slug: 'german',
    name: 'SOS My German',
    repo: 'https://github.com/gyedongjeon/sos-my-german',
    icon: germanIcon,
    images: [],
  },
];

export function getApp(slug: AppSlug): App {
  const app = apps.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app: ${slug}`);
  return app;
}

export const latestRelease = (app: App) => `${app.repo}/releases/latest`;

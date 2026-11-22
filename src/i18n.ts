// The site's languages. Korean is served at the root, every other language under /<locale>/.
// Each language's text is in src/locales/<locale>.ts.
import type { Messages } from './locales/types';
import ko from './locales/ko';
import en from './locales/en';

export const messages = { ko, en } satisfies Record<string, Messages>;

export type Locale = keyof typeof messages;
export const locales = Object.keys(messages) as Locale[];
export const defaultLocale: Locale = 'ko';

/** Each language's name in itself, for the language menu. */
export const languageNames: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
};

/** The BCP 47 tag for `<html lang>` and `hreflang`. */
export const langTags: Record<Locale, string> = {
  ko: 'ko',
  en: 'en',
};

/** The Open Graph locale. */
export const ogLocales: Record<Locale, string> = {
  ko: 'ko_KR',
  en: 'en_US',
};

/** The URL of `path` (written as in the Korean site, e.g. `/interview/`) in `locale`. */
export function localePath(locale: Locale, path = '/'): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

/** The locales served under a prefix, for `getStaticPaths`. */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale);

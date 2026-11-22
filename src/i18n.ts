// The site's languages. English is served at the root, every other language under /<locale>/.
// Each language's text is in src/locales/<locale>.ts. The list follows the feedback languages
// of the SOS apps (LANGUAGES in their frontend/src/stores/settings.ts).
import type { Messages } from './locales/types';
import ko from './locales/ko';
import en from './locales/en';
import ja from './locales/ja';
import zhHans from './locales/zh-hans';
import zhHant from './locales/zh-hant';
import es from './locales/es';
import fr from './locales/fr';
import de from './locales/de';
import pt from './locales/pt';
import ru from './locales/ru';
import vi from './locales/vi';
import id from './locales/id';
import hi from './locales/hi';

export const messages = {
  en,
  ko,
  ja,
  'zh-hans': zhHans,
  'zh-hant': zhHant,
  es,
  fr,
  de,
  pt,
  ru,
  vi,
  id,
  hi,
} satisfies Record<string, Messages>;

export type Locale = keyof typeof messages;
export const locales = Object.keys(messages) as Locale[];
export const defaultLocale: Locale = 'en';

/** Each language's name in itself, for the language menu. */
export const languageNames: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  'zh-hans': '简体中文',
  'zh-hant': '繁體中文',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ru: 'Русский',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
  hi: 'हिन्दी',
};

/** The BCP 47 tag for `<html lang>` and `hreflang`. */
export const langTags: Record<Locale, string> = {
  ko: 'ko',
  en: 'en',
  ja: 'ja',
  'zh-hans': 'zh-Hans',
  'zh-hant': 'zh-Hant',
  es: 'es',
  fr: 'fr',
  de: 'de',
  pt: 'pt',
  ru: 'ru',
  vi: 'vi',
  id: 'id',
  hi: 'hi',
};

/** The Open Graph locale. */
export const ogLocales: Record<Locale, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  ja: 'ja_JP',
  'zh-hans': 'zh_CN',
  'zh-hant': 'zh_TW',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  pt: 'pt_BR',
  ru: 'ru_RU',
  vi: 'vi_VN',
  id: 'id_ID',
  hi: 'hi_IN',
};

/** The URL of `path` (written as in the default-language site, e.g. `/interview/`) in `locale`. */
export function localePath(locale: Locale, path = '/'): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

/** The locales served under a prefix, for `getStaticPaths`. */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale);

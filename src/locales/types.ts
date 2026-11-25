// The shape of one language's text. Every file in this folder fills it in full,
// so a missing translation fails `astro check` instead of showing up blank.

export interface Item {
  title: string;
  body: string;
}

/** Text shared by every page. */
export interface UI {
  siteDescription: string;
  heroTitle: string;
  heroAccent: string;
  heroLead: string;
  appsHeading: string;
  /** Label of the language menu, e.g. "Language". */
  language: string;
  download: string;
  viewSource: string;
  features: string;
  screenshots: string;
  platforms: string;
  requirementsHeading: string;
  requirements: string;
  privacyHeading: string;
  readme: string;
  commonTitle: string;
  common: [Item, Item, Item, Item];
  notFoundTitle: string;
  notFoundBody: string;
  backHome: string;
  footer: string;
}

/** One app's text. Follows the app's README; see src/data/apps.ts. */
export interface AppText {
  tagline: string;
  hookTitle: string;
  hookAccent: string;
  summary: string;
  features: Item[];
  /** What stays on the visitor's computer, shown under the shared `privacyHeading`. */
  privacy: string;
  platforms: string[];
  /** Alt text of each screenshot, in the order of the app's `images`. */
  screenshots: string[];
}

export interface Messages {
  ui: UI;
  apps: {
    interview: AppText;
    language: AppText;
  };
}

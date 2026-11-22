// The site's languages. Korean is served at the root, English under /en/.
export const locales = ['ko', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ko';

/** The URL of `path` (written as in the Korean site, e.g. `/interview/`) in `locale`. */
export function localePath(locale: Locale, path = '/'): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

/** Text shared by every page. Keep both languages in step. */
export const ui = {
  ko: {
    langName: '한국어',
    switchTo: 'English',
    siteDescription:
      '영어가 막막할 때 꺼내 쓰는 연습 앱 시리즈. 영어 면접과 영어 말하기를 내 컴퓨터에서 소리 내어 연습하세요.',
    heroTitle: '영어가 막막할 때,',
    heroAccent: '구조 신호를 보내세요.',
    heroLead:
      '면접을 앞두고, 말문이 막혀서. SOS 시리즈는 영어를 소리 내어 연습하는 무료 데스크톱 앱입니다. 내 컴퓨터에서 돌아가고, 내가 고른 AI가 바로 고쳐 줍니다.',
    appsHeading: '앱',
    learnMore: '자세히 보기',
    download: '최신 버전 내려받기',
    viewSource: 'GitHub에서 보기',
    features: '주요 기능',
    screenshots: '화면',
    platforms: '지원 환경',
    requirementsHeading: '시작하기 전에',
    requirements:
      'AI 피드백에는 내가 고른 서비스(Google Gemini, Claude, OpenAI 등)의 API 키가 필요합니다. 처음이라면 무료 사용량이 있는 Google Gemini를 추천합니다.',
    privacyHeading: '내 데이터는 내 컴퓨터에',
    privacy:
      '계정도 서버도 없습니다. 음성 인식과 목소리는 컴퓨터 안에서 처리되고, 기록은 내 컴퓨터에만 저장됩니다.',
    readme: '설치 방법과 전체 기능은 README에서 볼 수 있습니다.',
    commonTitle: '두 앱의 공통점',
    common: [
      { title: '말하고, 듣고', body: '타이핑 대신 소리 내어 답하고, 상대의 말은 귀로 먼저 듣습니다.' },
      { title: '내 컴퓨터에서', body: '계정 가입 없이 설치해서 씁니다. 기록은 내 컴퓨터에만 남습니다.' },
      { title: '한국어 설명', body: '교정과 피드백 설명은 한국어로, 연습은 영어 그대로 합니다.' },
      { title: '무료 오픈소스', body: 'MIT 라이선스로 공개되어 있습니다. AI 사용료만 내가 고른 서비스에 따릅니다.' },
    ],
    notFoundTitle: '길을 잃었나요?',
    notFoundBody: '찾는 페이지가 없습니다.',
    backHome: '처음으로',
    footer: '오픈소스, MIT 라이선스',
  },
  en: {
    langName: 'English',
    switchTo: '한국어',
    siteDescription:
      'A series of practice apps for when your English needs rescuing. Practise English interviews and speaking out loud, on your own computer.',
    heroTitle: 'English letting you down?',
    heroAccent: 'Send a signal.',
    heroLead:
      'An interview coming up, or stuck for words: the SOS series is a set of free desktop apps for practising English out loud. They run on your own computer, and the AI you choose fixes your English as you go.',
    appsHeading: 'Apps',
    learnMore: 'Learn more',
    download: 'Download the latest version',
    viewSource: 'View on GitHub',
    features: 'Features',
    screenshots: 'Screenshots',
    platforms: 'Runs on',
    requirementsHeading: 'Before you start',
    requirements:
      'The AI feedback needs an API key for the provider you choose (Google Gemini, Claude, OpenAI, and more). If you are new to this, Google Gemini has a free tier.',
    privacyHeading: 'Your data stays on your computer',
    privacy:
      'There is no account and no server. Speech recognition and the voice run on your computer, and your history is kept there.',
    readme: 'Installation steps and the full feature list are in the README.',
    commonTitle: 'What the apps share',
    common: [
      { title: 'Speak and listen', body: 'Answer out loud instead of typing, and hear your partner before you read them.' },
      { title: 'On your computer', body: 'Install and use it with no sign-up. Your history stays on your machine.' },
      { title: 'Explained in your language', body: 'Corrections are explained in Korean, Japanese, Spanish, and more; the practice stays in English.' },
      { title: 'Free and open source', body: 'Released under the MIT license. You only pay your AI provider for what you use.' },
    ],
    notFoundTitle: 'Lost at sea?',
    notFoundBody: 'This page does not exist.',
    backHome: 'Back to the start',
    footer: 'Open source, MIT license',
  },
} satisfies Record<Locale, unknown>;

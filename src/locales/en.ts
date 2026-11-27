import type { Messages } from './types';

export default {
  ui: {
    siteDescription: 
      'A series of small, free desktop apps that come to the rescue. They run on your own computer, with no account to sign up for.',
    heroTitle: 'Need rescuing?',
    heroAccent: 'Send a signal.',
    heroLead: 
      'An interview coming up, stuck for words, or too many tabs open: the SOS series is a set of free desktop apps, each one for a moment like that. They run on your own computer, with no account to sign up for.',
    appsHeading: 'Apps',
    language: 'Language',
    download: 'Download the latest version',
    viewSource: 'View on GitHub',
    features: 'Features',
    screenshots: 'Screenshots',
    platforms: 'Runs on',
    requirementsHeading: 'Before you start',
    requirements:
      'The AI feedback needs an API key for the provider you choose (Google Gemini, Claude, OpenAI, and more). If you are new to this, Google Gemini has a free tier.',
    privacyHeading: 'Your data stays on your computer',
    readme: 'Installation steps and the full feature list are in the README.',
    commonTitle: 'What the apps share',
    common: [
      { title: 'On your computer', body: 'Install and use them with no sign-up, on macOS and Windows.' },
      { title: 'Your data stays yours', body: 'What you do in the apps is kept on your machine, not on a server.' },
      {
        title: 'In your language',
        body: 'Screens or explanations come in Korean, Japanese, Spanish, and more, depending on the app.',
      },
      {
        title: 'Free and open source',
        body: 'Released under the MIT license. Apps that use AI cost only what your AI provider charges.',
      },
    ],
    notFoundTitle: 'Lost at sea?',
    notFoundBody: 'This page does not exist.',
    backHome: 'Back to the start',
    footer: 'Open source, MIT license',
    consentText: 'This site would like to use Google Analytics to count visits and see which pages are read. Only if you allow it, cookies are stored and usage data is sent to Google.',
    consentLearnMore: 'How Google uses this data',
    consentAllow: 'Allow',
    consentDecline: 'Decline',
    consentSettings: 'Cookie settings',
  },
  apps: {
    interview: {
      tagline: 'English interview practice',
      hookTitle: 'Interview coming up?',
      hookAccent: 'Help is on the way.',
      summary:
        'A mock interview app for practising job interviews in English, running on your own machine. It asks the questions aloud, records your answer, and scores both your English and what you said.',
      features: [
        { title: 'Listening first', body: 'The interviewer reads each question aloud, and its text stays hidden until you ask for it.' },
        { title: 'Follow-up questions', body: 'Up to two follow-ups dig into what you just said, as a real interviewer would.' },
        {
          title: 'Two separate scores',
          body: 'English (grammar, vocabulary, naturalness, pronunciation, intonation, stress) and content (relevance, structure, specificity), with corrected sentences and a stronger version of your answer.',
        },
        {
          title: 'Questions for the job you want',
          body: 'Add a job posting (link or text) and your résumé to get questions written for that role.',
        },
        {
          title: 'Feedback in your language',
          body: 'Explanations in Korean, Japanese, Chinese, Spanish, and more; questions and model answers stay in English.',
        },
        { title: 'History', body: 'Every answer is kept with its transcript, scores, and recording, so you can see how you improve.' },
      ],
      privacy:
        'There is no account and no server. Speech recognition and the voice run on your computer, and your history is kept there.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: ['The home page of SOS My Interview: adding a job posting and common questions'],
    },
    language: {
      tagline: 'English and German speaking practice',
      hookTitle: 'Stuck for words?',
      hookAccent: 'Help is on the way.',
      summary:
        'An app for practising a language you are learning out loud, running on your own machine. Choose English or German, pick a topic, talk it through with an AI partner that answers by voice, and get what you said fixed as you go.',
      features: [
        {
          title: 'Several languages in one app',
          body: 'Choose English or German on the first start and switch at any time. Each language keeps its own topics, corrections, history, and voices.',
        },
        { title: 'Speaking first', body: 'You answer by voice, not by typing; what you said is transcribed for you.' },
        {
          title: 'Corrections as you go',
          body: 'After each thing you say, the most valuable fix is shown with the better sentence and why, and you can hear the better sentence.',
        },
        { title: 'How clearly you spoke', body: 'Each line shows a clarity score, the words that were hard to recognize, and your pace.' },
        {
          title: '40 topics in 9 categories',
          body: 'Everyday chat, work, school, shopping, food, travel, services, home, and giving your opinion, plus topics of your own.',
        },
        {
          title: 'Sentence patterns by level',
          body: '100 patterns from A1 to C2. You see a sentence in your own language and say it in the language you practise.',
        },
        {
          title: 'Study with YouTube videos',
          body: 'Paste a link and listen one sentence at a time, with repeat, slower speeds, and shadowing.',
        },
        {
          title: 'Practise your corrections',
          body: 'Every fix is collected in one place, where you say the better sentence until it comes out right.',
        },
        {
          title: 'A summary at the end',
          body: 'Wrap up a conversation to see what you did well, what to work on, and expressions to try next time.',
        },
      ],
      privacy:
        'There is no account and no server. Speech recognition and the voice run on your computer, and your history is kept there.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        "A conversation in SOS My Language: what you said, its correction, and your partner's next line",
        'Choosing the language to practise in SOS My Language: English or German',
        'The home page of SOS My Language: conversation topics by category',
      ],
    },
    feed: {
      tagline: 'RSS and Atom feed reader',
      hookTitle: 'Too many tabs?',
      hookAccent: 'Help is on the way.',
      summary:
        'A reader for the RSS and Atom feeds of the news sites and blogs you follow, running on your own machine. Subscribe to a feed, see every new article in one list, and read an article inside the app, page by page.',
      features: [
        { title: 'One list for everything you follow', body: 'The articles of every feed, newest first, or those of one feed.' },
        {
          title: 'Reading like a book',
          body: "An article opens as plain text, without the page's ads, menus, or scripts, in pages you turn with a tap, one or two at a time.",
        },
        { title: 'Paper to your taste', body: 'Six background colors, and the text size, line spacing, and margins you choose.' },
        { title: 'Save as Markdown', body: "Download an article's text as a Markdown file, with its title, address, and date." },
        { title: 'Screens in 19 languages', body: "The app's screens come in 19 languages, with a light and a dark theme." },
        {
          title: 'Keeps itself up to date',
          body: 'The app looks for a new version when it starts and, on macOS, updates in one click.',
        },
      ],
      privacy:
        'There is no account and no server. Your subscriptions, their articles, and your settings are kept in a file on your computer.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        'My feed in SOS My Feed: the articles of three feeds in one list, newest first',
        'An article open in the reader of SOS My Feed: two pages side by side on sepia paper',
      ],
    },
  },
} satisfies Messages;

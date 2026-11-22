import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'A series of practice apps for when your English or German needs rescuing. Practise interviews and speaking out loud, on your own computer.',
    heroTitle: 'Language letting you down?',
    heroAccent: 'Send a signal.',
    heroLead:
      'An interview coming up, or stuck for words: the SOS series is a set of free desktop apps for practising English and German out loud. They run on your own computer, and the AI you choose fixes your mistakes as you go.',
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
    privacy:
      'There is no account and no server. Speech recognition and the voice run on your computer, and your history is kept there.',
    readme: 'Installation steps and the full feature list are in the README.',
    commonTitle: 'What the apps share',
    common: [
      { title: 'Speak and listen', body: 'Answer out loud instead of typing, and hear your partner before you read them.' },
      { title: 'On your computer', body: 'Install and use it with no sign-up. Your history stays on your machine.' },
      {
        title: 'Explained in your language',
        body: 'Corrections are explained in Korean, Japanese, Spanish, and more; the practice stays in the language you are learning.',
      },
      { title: 'Free and open source', body: 'Released under the MIT license. You only pay your AI provider for what you use.' },
    ],
    notFoundTitle: 'Lost at sea?',
    notFoundBody: 'This page does not exist.',
    backHome: 'Back to the start',
    footer: 'Open source, MIT license',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: ['The home page of SOS My Interview: adding a job posting and common questions'],
    },
    english: {
      tagline: 'English speaking practice',
      hookTitle: 'Stuck for words?',
      hookAccent: 'Help is on the way.',
      summary:
        'An app for practising spoken English, running on your own machine. Pick a topic, talk it through out loud with an AI partner that answers by voice, and get your English fixed as you go.',
      features: [
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
          body: '100 patterns from A1 to C2. You see a sentence in your own language and say it in English.',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        "A conversation in SOS My English: what you said, its correction, and your partner's next line",
        'The home page of SOS My English: conversation topics by category',
      ],
    },
    german: {
      tagline: 'German speaking practice',
      hookTitle: 'Stuck for words?',
      hookAccent: 'Help is on the way.',
      summary:
        'An app for practising spoken German, running on your own machine. Pick a topic, talk it through out loud with an AI partner that answers by voice, and get your German fixed as you go.',
      features: [
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
          body: '100 patterns from A1 to C2. You see a sentence in your own language and say it in German.',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [],
    },
  },
} satisfies Messages;

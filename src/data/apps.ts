// The apps of the SOS series. Copy follows each app's README (README.ko.md for Korean);
// when an app's README changes what it does or where it runs, update it here too.
import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n';
import interviewIcon from '../assets/icons/interview.svg';
import englishIcon from '../assets/icons/english.svg';
import interviewHome from '../assets/screens/interview-home.png';
import englishPractice from '../assets/screens/english-practice.png';
import englishHome from '../assets/screens/english-home.png';

export type AppSlug = 'interview' | 'english';

interface Text {
  tagline: string;
  hookTitle: string;
  hookAccent: string;
  summary: string;
  features: { title: string; body: string }[];
  platforms: string[];
  screenshots: { alt: string }[];
}

export interface App {
  slug: AppSlug;
  name: string;
  repo: string;
  icon: ImageMetadata;
  images: ImageMetadata[];
  text: Record<Locale, Text>;
}

export const apps: App[] = [
  {
    slug: 'interview',
    name: 'SOS My Interview',
    repo: 'https://github.com/gyedongjeon/sos-my-interview',
    icon: interviewIcon,
    images: [interviewHome],
    text: {
      ko: {
        tagline: '영어 면접 연습',
        hookTitle: '면접이 코앞인가요?',
        hookAccent: '도움이 가고 있어요.',
        summary:
          '영어 면접을 내 컴퓨터에서 연습하는 모의 면접 앱입니다. 면접관이 질문을 소리 내어 읽어 주고, 답변을 녹화한 뒤, 영어와 답변 내용을 각각 채점해 줍니다.',
        features: [
          { title: '듣기부터 연습', body: '면접관이 질문을 음성으로 읽어 주고, 질문 글자는 버튼을 눌러야 보입니다.' },
          { title: '꼬리 질문', body: '방금 한 답변을 파고드는 질문이 최대 두 번 이어집니다.' },
          {
            title: '두 가지 점수',
            body: '영어(문법, 어휘, 자연스러움, 발음, 억양, 강세)와 내용(관련성, 구조, 구체성)을 따로 채점하고, 고친 문장과 더 나은 답변 예시를 보여 줍니다.',
          },
          {
            title: '지원하는 회사에 맞춘 질문',
            body: '채용 공고(링크 또는 본문)와 이력서를 넣으면 그 직무에 맞는 질문을 만들어 줍니다.',
          },
          { title: '한국어 피드백', body: '설명은 한국어로 받을 수 있습니다. 질문과 모범 답안은 영어 그대로입니다.' },
          { title: '기록', body: '모든 답변이 전사문, 점수, 녹화와 함께 저장되어 실력이 느는 과정을 볼 수 있습니다.' },
        ],
        platforms: ['macOS (Apple Silicon)'],
        screenshots: [{ alt: 'SOS My Interview 홈 화면: 채용 공고 추가와 공통 질문' }],
      },
      en: {
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
        platforms: ['macOS (Apple Silicon)'],
        screenshots: [{ alt: 'The home page of SOS My Interview: adding a job posting and common questions' }],
      },
    },
  },
  {
    slug: 'english',
    name: 'SOS My English',
    repo: 'https://github.com/gyedongjeon/sos-my-english',
    icon: englishIcon,
    images: [englishPractice, englishHome],
    text: {
      ko: {
        tagline: '영어 말하기 연습',
        hookTitle: '말문이 막히나요?',
        hookAccent: '도움이 가고 있어요.',
        summary:
          '영어 말하기를 내 컴퓨터에서 연습하는 앱입니다. 주제를 고르고 AI 대화 상대와 소리 내어 이야기하면, 상대가 음성으로 답하고 내가 한 말을 바로바로 고쳐 줍니다.',
        features: [
          { title: '말하기 중심', body: '타이핑이 아니라 목소리로 답합니다. 내가 한 말은 자동으로 받아 적힙니다.' },
          {
            title: '바로바로 교정',
            body: '말할 때마다 가장 중요한 한 가지를 골라, 더 나은 문장과 이유를 보여 줍니다. 고친 문장은 음성으로 들어 볼 수 있습니다.',
          },
          { title: '얼마나 또렷하게 말했는지', body: '문장마다 명료도 점수, 잘 인식되지 않은 단어, 말하는 속도를 보여 줍니다.' },
          { title: '9개 카테고리, 40개 주제', body: '일상, 회사, 학교, 쇼핑, 음식, 여행, 서비스, 집, 의견 말하기. 필요한 상황은 직접 추가할 수 있습니다.' },
          { title: '문장 패턴 연습', body: 'A1부터 C2까지 레벨별 패턴 100개. 내 언어로 된 문장을 보고 영어로 말해 봅니다.' },
          {
            title: '유튜브 영상으로 공부',
            body: '링크를 붙여 넣으면 영상을 문장 하나씩 들을 수 있습니다. 반복, 느린 속도, 따라 말하기(쉐도잉)를 지원합니다.',
          },
          { title: '교정 복습', body: '받은 교정은 한곳에 모이고, 고친 문장이 맞게 나올 때까지 직접 말해 볼 수 있습니다.' },
          { title: '마무리 요약', body: '대화를 마치면 잘한 점, 다음에 연습할 점, 써 볼 만한 표현을 정리해 줍니다.' },
        ],
        platforms: ['macOS (Apple Silicon)', 'Windows (64비트)'],
        screenshots: [
          { alt: 'SOS My English 대화 화면: 내가 한 말, 교정, 상대의 다음 말' },
          { alt: 'SOS My English 홈 화면: 카테고리별 대화 주제' },
        ],
      },
      en: {
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
          { title: 'Practise your corrections', body: 'Every fix is collected in one place, where you say the better sentence until it comes out right.' },
          { title: 'A summary at the end', body: 'Wrap up a conversation to see what you did well, what to work on, and expressions to try next time.' },
        ],
        platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
        screenshots: [
          { alt: "A conversation in SOS My English: what you said, its correction, and your partner's next line" },
          { alt: 'The home page of SOS My English: conversation topics by category' },
        ],
      },
    },
  },
];

export function getApp(slug: AppSlug): App {
  const app = apps.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app: ${slug}`);
  return app;
}

export const latestRelease = (app: App) => `${app.repo}/releases/latest`;

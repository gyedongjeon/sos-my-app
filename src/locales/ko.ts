import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      '영어가 막막할 때 꺼내 쓰는 연습 앱 시리즈. 영어 면접과 영어 말하기를 내 컴퓨터에서 소리 내어 연습하세요.',
    heroTitle: '영어가 막막할 때,',
    heroAccent: '구조 신호를 보내세요.',
    heroLead:
      '면접을 앞두고, 말문이 막혀서. SOS 시리즈는 영어를 소리 내어 연습하는 무료 데스크톱 앱입니다. 내 컴퓨터에서 돌아가고, 내가 고른 AI가 바로 고쳐 줍니다.',
    appsHeading: '앱',
    language: '언어',
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
  apps: {
    interview: {
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64비트)'],
      screenshots: ['SOS My Interview 홈 화면: 채용 공고 추가와 공통 질문'],
    },
    english: {
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
        {
          title: '9개 카테고리, 40개 주제',
          body: '일상, 회사, 학교, 쇼핑, 음식, 여행, 서비스, 집, 의견 말하기. 필요한 상황은 직접 추가할 수 있습니다.',
        },
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
        'SOS My English 대화 화면: 내가 한 말, 교정, 상대의 다음 말',
        'SOS My English 홈 화면: 카테고리별 대화 주제',
      ],
    },
  },
} satisfies Messages;

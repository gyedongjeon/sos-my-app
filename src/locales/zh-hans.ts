import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      '英语、德语告急时随手可用的练习应用系列。在自己的电脑上，开口练习面试和口语。',
    heroTitle: '外语让你犯难？',
    heroAccent: '发出求救信号吧。',
    heroLead:
      '面试在即，或是一开口就卡壳。SOS 系列是一套免费的桌面应用，帮你开口练英语和德语。它们在你自己的电脑上运行，由你选择的 AI 随时纠正你的错误。',
    appsHeading: '应用',
    language: '语言',
    download: '下载最新版本',
    viewSource: '在 GitHub 上查看',
    features: '主要功能',
    screenshots: '截图',
    platforms: '支持平台',
    requirementsHeading: '开始之前',
    requirements:
      'AI 反馈需要你所选服务（Google Gemini、Claude、OpenAI 等）的 API 密钥。如果你是第一次用，推荐有免费额度的 Google Gemini。',
    privacyHeading: '数据只留在你的电脑上',
    readme: '安装步骤和完整功能列表请见 README。',
    commonTitle: '这些应用的共同点',
    common: [
      { title: '开口说，用耳听', body: '不用打字，直接开口回答；对方的话先用耳朵听。' },
      { title: '在你的电脑上', body: '无需注册，安装即用。练习记录只保存在你的电脑上。' },
      { title: '中文讲解', body: '纠错和反馈用中文讲解，练习仍然用所学的语言。' },
      { title: '免费开源', body: '以 MIT 许可证开源。你只需向所选的 AI 服务支付实际用量的费用。' },
    ],
    notFoundTitle: '迷航了？',
    notFoundBody: '你要找的页面不存在。',
    backHome: '返回首页',
    footer: '开源软件，MIT 许可证',
  },
  apps: {
    interview: {
      tagline: '英语面试练习',
      hookTitle: '面试近在眼前？',
      hookAccent: '救援马上就到。',
      summary:
        '一款在自己电脑上练习英语面试的模拟面试应用。面试官会把问题读出来，录下你的回答，并分别为你的英语和回答内容打分。',
      features: [
        { title: '先练听力', body: '面试官用语音读出每个问题，问题文字要点按钮才会显示。' },
        { title: '追问', body: '像真正的面试官一样，针对你刚才的回答最多追问两次。' },
        {
          title: '两项独立评分',
          body: '英语（语法、词汇、自然度、发音、语调、重音）和内容（相关性、结构、具体性）分开打分，并给出修改后的句子和更好的回答示例。',
        },
        {
          title: '针对目标职位的问题',
          body: '添加招聘信息（链接或正文）和你的简历，即可生成针对该职位的问题。',
        },
        { title: '中文反馈', body: '讲解可以用中文接收；问题和参考答案仍然是英语。' },
        { title: '练习记录', body: '每次回答都会连同文字稿、分数和录像一起保存，进步看得见。' },
      ],
      privacy:
        '没有账号，也没有服务器。语音识别和朗读都在你的电脑上运行，练习记录也只保存在本机。',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 位)'],
      screenshots: ['SOS My Interview 首页：添加招聘信息和常见问题'],
    },
    language: {
      tagline: '英语和德语口语练习',
      hookTitle: '话到嘴边说不出？',
      hookAccent: '救援马上就到。',
      summary:
        '一款在自己电脑上练习外语口语的应用。选择英语或德语，选一个话题，和 AI 对话伙伴开口聊，对方用语音回应，同时随时纠正你说的话。',
      features: [
        {
          title: '一个应用，多种语言',
          body: '首次启动时选择英语或德语，之后可随时切换。每种语言都有各自的话题、纠正、记录和语音。',
        },
        { title: '以说为主', body: '用声音回答，而不是打字；你说的话会自动转成文字。' },
        {
          title: '边说边纠正',
          body: '每说一句，都会挑出最值得改的一处，给出更好的说法和原因，还能听更好的句子的发音。',
        },
        { title: '说得清不清楚', body: '每句话都会显示清晰度得分、难以识别的单词和你的语速。' },
        {
          title: '9 大类 40 个话题',
          body: '日常闲聊、工作、学校、购物、饮食、旅行、服务、居家和发表观点，也可以自己添加话题。',
        },
        { title: '分级句型练习', body: '从 A1 到 C2 共 100 个句型。看中文句子，用你在练习的语言说出来。' },
        {
          title: '用 YouTube 视频学习',
          body: '粘贴链接，一句一句地听，支持重复、慢速播放和跟读。',
        },
        { title: '复习纠错', body: '所有纠错都集中在一处，你可以反复开口练，直到说对为止。' },
        { title: '结束时的总结', body: '结束对话后，总结你做得好的地方、需要加强的地方，以及下次可以试试的表达。' },
      ],
      privacy:
        '没有账号，也没有服务器。语音识别和朗读都在你的电脑上运行，练习记录也只保存在本机。',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 位)'],
      screenshots: [
        'SOS My Language 的对话界面：你说的话、纠正和对方的下一句',
        'SOS My Language 的语言选择界面：英语或德语',
        'SOS My Language 的主页：按类别排列的对话话题',
      ],
    },
  },
} satisfies Messages;

import type { Messages } from './types';

export default {
  ui: {
    siteDescription: '遇到難關時拿出來用的小巧免費桌面 App 系列。不用註冊帳號，在你自己的電腦上執行。',
    heroTitle: '遇到難關了嗎？',
    heroAccent: '發出求救訊號吧。',
    heroLead: '面試在即、話到嘴邊說不出口，或是分頁開得太多。SOS 系列是一組免費的桌面 App，每一款對應一個這樣的時刻。在你自己的電腦上執行，不用註冊帳號。',
    appsHeading: 'App',
    language: '語言',
    download: '下載最新版本',
    viewSource: '在 GitHub 上查看',
    features: '主要功能',
    screenshots: '畫面截圖',
    platforms: '支援平台',
    requirementsHeading: '開始之前',
    requirements:
      'AI 回饋需要你所選服務（Google Gemini、Claude、OpenAI 等）的 API 金鑰。第一次使用的話，推薦有免費額度的 Google Gemini。',
    privacyHeading: '你的資料留在你的電腦裡',
    readme: '安裝步驟和完整功能請看 README。',
    commonTitle: '這些 App 的共同特色',
    common: [
      { title: '在你的電腦上', body: '不用註冊，安裝就能用，支援 macOS 和 Windows。' },
      { title: '資料屬於你', body: '你在 App 裡做的一切都留在自己的電腦，而不是伺服器上。' },
      { title: '中文介面與解說', body: '視 App 而定，畫面或修正解說可以用繁體中文顯示。' },
      { title: '免費開源', body: '以 MIT 授權公開。使用 AI 的 App，只需向你選擇的 AI 服務支付實際用量的費用。' },
    ],
    notFoundTitle: '在海上迷路了？',
    notFoundBody: '找不到這個頁面。',
    backHome: '回到首頁',
    footer: '開源軟體，MIT 授權',
    consentText: '本站希望使用 Google Analytics 統計造訪次數，了解哪些頁面被閱讀。只有在你允許後，才會儲存 Cookie 並將使用資料傳送給 Google。',
    consentLearnMore: 'Google 如何使用這些資料',
    consentAllow: '允許',
    consentDecline: '拒絕',
    consentSettings: 'Cookie 設定',
  },
  apps: {
    interview: {
      tagline: '英文面試練習',
      hookTitle: '面試就快到了？',
      hookAccent: '救援馬上就到。',
      summary:
        '在自己的電腦上練習英文求職面試的模擬面試 App。面試官會唸出問題、錄下你的回答，並分別為你的英文和回答內容評分。',
      features: [
        { title: '先練聽力', body: '面試官會用語音唸出每個問題，問題文字要等你點開才會顯示。' },
        { title: '追問', body: '像真正的面試官一樣，針對你剛才的回答最多再追問兩次。' },
        {
          title: '兩種分數',
          body: '英文（文法、詞彙、自然度、發音、語調、重音）和內容（切題程度、結構、具體程度）分開評分，並提供修正後的句子和更好的回答範例。',
        },
        {
          title: '針對應徵職缺出題',
          body: '加入職缺內容（連結或文字）和你的履歷，就能得到針對該職位的面試問題。',
        },
        { title: '中文回饋', body: '解說可以用繁體中文接收。問題和範例回答維持英文。' },
        { title: '練習紀錄', body: '每次回答都連同逐字稿、分數和錄影一起保存，看得到自己的進步。' },
      ],
      privacy:
        '不需要帳號，也沒有伺服器。語音辨識和語音朗讀都在電腦上處理，紀錄也只存在你的電腦裡。',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 位元)'],
      screenshots: ['SOS My Interview 首頁：新增職缺與常見問題'],
    },
    language: {
      tagline: '英文與德文口說練習',
      hookTitle: '話卡在嘴邊？',
      hookAccent: '救援馬上就到。',
      summary:
        '在自己的電腦上練習外語口說的 App。選擇英文或德文，選一個主題，開口和用語音回應的 AI 對話夥伴聊天，你說的話會隨時被修正。',
      features: [
        {
          title: '一個 App，多種語言',
          body: '第一次啟動時選擇英文或德文，之後可隨時切換。每種語言都有各自的主題、修正、紀錄和語音。',
        },
        { title: '以說為主', body: '用聲音回答，不用打字；你說的話會自動轉成文字。' },
        {
          title: '即時修正',
          body: '每說完一句，就挑出最值得改的一點，附上更好的說法和原因，還能聽更好的句子怎麼唸。',
        },
        { title: '說得清不清楚', body: '每一句都會顯示清晰度分數、不易辨識的單字和你的語速。' },
        {
          title: '9 大類、40 個主題',
          body: '日常閒聊、工作、學校、購物、飲食、旅行、生活服務、居家、發表意見，也能自己新增主題。',
        },
        { title: '分級句型練習', body: '從 A1 到 C2 共 100 個句型。看中文句子，用你正在練習的語言說出來。' },
        {
          title: '用 YouTube 影片學習',
          body: '貼上連結，就能一句一句聽，支援重複播放、放慢速度和跟讀（shadowing）。',
        },
        { title: '複習修正', body: '所有修正都集中在同一個地方，反覆說出正確的句子，直到說對為止。' },
        { title: '對話總結', body: '結束對話後，整理出你做得好的地方、要加強的地方，以及下次可以試試的說法。' },
      ],
      privacy:
        '不需要帳號，也沒有伺服器。語音辨識和語音朗讀都在電腦上處理，紀錄也只存在你的電腦裡。',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 位元)'],
      screenshots: [
        'SOS My Language 的對話畫面：你說的話、修正和對方的下一句',
        'SOS My Language 的語言選擇畫面：英文或德文',
        'SOS My Language 的首頁：依類別排列的對話主題',
      ],
    },
    feed: {
      tagline: 'RSS 與 Atom 訂閱閱讀器',
      hookTitle: '分頁開太多了嗎？',
      hookAccent: '救援就在路上。',
      summary:
        '在你自己的電腦上集中閱讀常看的新聞網站和部落格的 RSS、Atom 訂閱。訂閱之後，新文章會匯集在同一個列表裡，文章則在 App 裡像書一樣一頁頁翻著讀。',
      features: [
        { title: '追蹤的內容匯成一個列表', body: '依時間由新到舊查看所有訂閱的文章，也可以只看其中一個訂閱。' },
        { title: '像讀書一樣閱讀', body: '打開文章後只顯示內文，沒有廣告、選單和指令碼。不用捲動，而是分成一頁頁，一次顯示一頁或兩頁，點一下畫面就能翻頁。' },
        { title: '合你心意的版面', body: '六種背景色，字級、行距和邊界都可以自己選。' },
        { title: '存成 Markdown', body: '把文章內文連同標題、網址和日期下載成 Markdown 檔案。' },
        { title: '19 種語言介面', body: 'App 畫面支援 19 種語言，並提供淺色和深色主題。' },
        { title: '自動保持最新', body: 'App 啟動時會檢查新版本；在 macOS 上點一下就能更新。' },
      ],
      privacy: '不需要帳號，也沒有伺服器。訂閱列表、文章和設定都存在你電腦裡的一個檔案中。',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 位元)'],
      screenshots: [
        'SOS My Feed 的我的訂閱：三個訂閱的文章依時間由新到舊排在一個列表裡',
        '在 SOS My Feed 閱讀器中打開的文章：深褐色背景上並排顯示兩頁',
      ],
    },
  },
} satisfies Messages;

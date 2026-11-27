import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Bộ ứng dụng máy tính nhỏ, miễn phí, đến cứu bạn đúng lúc. Ứng dụng chạy ngay trên máy tính của bạn, không cần đăng ký tài khoản.',
    heroTitle: 'Cần được giải cứu?',
    heroAccent: 'Hãy phát tín hiệu cầu cứu.',
    heroLead:
      'Sắp có buổi phỏng vấn, đang bí từ, hay mở quá nhiều tab: SOS là bộ ứng dụng máy tính miễn phí, mỗi ứng dụng dành cho một lúc như thế. Ứng dụng chạy ngay trên máy tính của bạn, không cần đăng ký tài khoản.',
    appsHeading: 'Ứng dụng',
    language: 'Ngôn ngữ',
    download: 'Tải phiên bản mới nhất',
    viewSource: 'Xem trên GitHub',
    features: 'Tính năng',
    screenshots: 'Ảnh chụp màn hình',
    platforms: 'Hỗ trợ',
    requirementsHeading: 'Trước khi bắt đầu',
    requirements:
      'Phần nhận xét bằng AI cần API key của nhà cung cấp bạn chọn (Google Gemini, Claude, OpenAI và nhiều hơn nữa). Nếu mới bắt đầu, bạn có thể dùng Google Gemini với gói miễn phí.',
    privacyHeading: 'Dữ liệu của bạn nằm trên máy của bạn',
    readme: 'Hướng dẫn cài đặt và danh sách đầy đủ tính năng có trong README.',
    commonTitle: 'Điểm chung của các ứng dụng',
    common: [
      {
        title: 'Ngay trên máy của bạn',
        body: 'Cài đặt là dùng được, không cần đăng ký, trên macOS và Windows.',
      },
      {
        title: 'Dữ liệu là của bạn',
        body: 'Những gì bạn làm trong ứng dụng được lưu trên máy bạn, không phải trên máy chủ.',
      },
      {
        title: 'Bằng tiếng Việt',
        body: 'Tùy ứng dụng, giao diện hoặc phần giải thích có bằng tiếng Việt.',
      },
      {
        title: 'Miễn phí, mã nguồn mở',
        body: 'Phát hành theo giấy phép MIT. Ứng dụng có dùng AI chỉ tốn phí mà nhà cung cấp AI của bạn tính.',
      },
    ],
    notFoundTitle: 'Lạc giữa biển khơi?',
    notFoundBody: 'Trang này không tồn tại.',
    backHome: 'Về trang đầu',
    footer: 'Mã nguồn mở, giấy phép MIT',
    consentText: 'Trang này muốn dùng Google Analytics để đếm lượt truy cập và xem trang nào được đọc. Chỉ khi bạn cho phép, cookie mới được lưu và dữ liệu sử dụng mới được gửi đến Google.',
    consentLearnMore: 'Cách Google sử dụng dữ liệu này',
    consentAllow: 'Cho phép',
    consentDecline: 'Từ chối',
    consentSettings: 'Cài đặt cookie',
  },
  apps: {
    interview: {
      tagline: 'Luyện phỏng vấn tiếng Anh',
      hookTitle: 'Sắp đi phỏng vấn?',
      hookAccent: 'Cứu viện đang tới rồi.',
      summary:
        'Ứng dụng phỏng vấn thử để luyện phỏng vấn xin việc bằng tiếng Anh, chạy ngay trên máy của bạn. Ứng dụng đọc to câu hỏi, ghi lại câu trả lời, rồi chấm điểm riêng tiếng Anh và nội dung bạn nói.',
      features: [
        { title: 'Luyện nghe trước', body: 'Người phỏng vấn đọc to từng câu hỏi; chữ chỉ hiện ra khi bạn muốn xem.' },
        { title: 'Câu hỏi nối tiếp', body: 'Tối đa hai câu hỏi đào sâu vào điều bạn vừa nói, như một người phỏng vấn thật.' },
        {
          title: 'Hai điểm số riêng',
          body: 'Tiếng Anh (ngữ pháp, từ vựng, độ tự nhiên, phát âm, ngữ điệu, trọng âm) và nội dung (đúng trọng tâm, bố cục, độ cụ thể), kèm câu đã sửa và một phiên bản tốt hơn cho câu trả lời của bạn.',
        },
        {
          title: 'Câu hỏi cho đúng vị trí bạn muốn',
          body: 'Thêm tin tuyển dụng (đường link hoặc nội dung) và CV của bạn để nhận câu hỏi dành riêng cho vị trí đó.',
        },
        {
          title: 'Nhận xét bằng tiếng Việt',
          body: 'Phần giải thích có thể nhận bằng tiếng Việt; câu hỏi và câu trả lời mẫu vẫn bằng tiếng Anh.',
        },
        {
          title: 'Lịch sử luyện tập',
          body: 'Mỗi câu trả lời được lưu cùng bản ghi lời nói, điểm số và bản ghi hình, để bạn thấy mình tiến bộ ra sao.',
        },
      ],
      privacy:
        'Không cần tài khoản, không có máy chủ. Nhận dạng giọng nói và giọng đọc đều chạy trên máy tính của bạn, lịch sử cũng được lưu tại đó.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: ['Trang chủ SOS My Interview: thêm tin tuyển dụng và các câu hỏi thường gặp'],
    },
    language: {
      tagline: 'Luyện nói tiếng Anh và tiếng Đức',
      hookTitle: 'Bí từ rồi sao?',
      hookAccent: 'Cứu viện đang tới rồi.',
      summary:
        'Ứng dụng luyện nói ngôn ngữ bạn đang học, chạy ngay trên máy của bạn. Chọn tiếng Anh hoặc tiếng Đức, chọn một chủ đề, nói chuyện thành tiếng với bạn đồng hành AI biết trả lời bằng giọng nói, và được sửa ngay trong lúc nói.',
      features: [
        {
          title: 'Nhiều ngôn ngữ trong một ứng dụng',
          body: 'Chọn tiếng Anh hoặc tiếng Đức khi mở lần đầu và đổi bất cứ lúc nào. Mỗi ngôn ngữ giữ riêng chủ đề, lỗi đã sửa, lịch sử và giọng nói.',
        },
        { title: 'Nói là chính', body: 'Bạn trả lời bằng giọng nói, không cần gõ; những gì bạn nói được tự động chép lại.' },
        {
          title: 'Sửa lỗi ngay khi nói',
          body: 'Sau mỗi lượt nói, ứng dụng chỉ ra lỗi đáng sửa nhất, kèm câu tốt hơn và lý do. Bạn có thể nghe đọc câu tốt hơn đó.',
        },
        { title: 'Bạn nói rõ đến đâu', body: 'Mỗi câu đều có điểm độ rõ, những từ khó nhận dạng và tốc độ nói của bạn.' },
        {
          title: '40 chủ đề, 9 nhóm',
          body: 'Trò chuyện hằng ngày, công việc, trường học, mua sắm, ăn uống, du lịch, dịch vụ, nhà cửa và nêu ý kiến; bạn cũng có thể tự thêm chủ đề.',
        },
        {
          title: 'Mẫu câu theo trình độ',
          body: '100 mẫu câu từ A1 đến C2. Bạn xem một câu bằng tiếng Việt và nói lại bằng ngôn ngữ bạn đang luyện.',
        },
        {
          title: 'Học qua video YouTube',
          body: 'Dán đường link rồi nghe từng câu một, có phát lại, giảm tốc độ và nói nhại theo (shadowing).',
        },
        {
          title: 'Ôn lại phần đã sửa',
          body: 'Mọi lỗi đã sửa được gom về một chỗ, để bạn nói câu đúng cho đến khi nói chuẩn.',
        },
        {
          title: 'Tổng kết cuối buổi',
          body: 'Kết thúc cuộc trò chuyện để xem bạn đã làm tốt điều gì, cần luyện thêm gì và những cách diễn đạt nên thử lần sau.',
        },
      ],
      privacy:
        'Không cần tài khoản, không có máy chủ. Nhận dạng giọng nói và giọng đọc đều chạy trên máy tính của bạn, lịch sử cũng được lưu tại đó.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        'Một cuộc trò chuyện trong SOS My Language: câu bạn nói, phần sửa lỗi và câu tiếp theo của bạn đồng hành',
        'Chọn ngôn ngữ để luyện trong SOS My Language: tiếng Anh hoặc tiếng Đức',
        'Trang chủ của SOS My Language: các chủ đề trò chuyện theo danh mục',
      ],
    },
    feed: {
      tagline: 'Trình đọc RSS và Atom',
      hookTitle: 'Mở quá nhiều tab?',
      hookAccent: 'Trợ giúp đang tới.',
      summary:
        'Trình đọc nguồn tin RSS và Atom của các trang tin tức và blog bạn theo dõi, chạy ngay trên máy của bạn. Đăng ký một nguồn tin, xem mọi bài mới trong một danh sách, và đọc bài ngay trong ứng dụng, từng trang một.',
      features: [
        {
          title: 'Mọi thứ bạn theo dõi trong một danh sách',
          body: 'Bài viết của mọi nguồn tin, mới nhất trước, hoặc chỉ của một nguồn tin.',
        },
        {
          title: 'Đọc như đọc sách',
          body: 'Bài viết mở ra chỉ với phần chữ, không quảng cáo, menu hay script của trang, chia thành trang để lật bằng một chạm, một hoặc hai trang mỗi lần.',
        },
        {
          title: 'Trang giấy theo ý bạn',
          body: 'Sáu màu nền, cùng cỡ chữ, giãn dòng và lề do bạn chọn.',
        },
        {
          title: 'Lưu dưới dạng Markdown',
          body: 'Tải phần chữ của bài viết thành tệp Markdown, kèm tiêu đề, địa chỉ và ngày đăng.',
        },
        {
          title: 'Giao diện 19 ngôn ngữ',
          body: 'Giao diện ứng dụng có 19 ngôn ngữ, với giao diện sáng và tối.',
        },
        {
          title: 'Tự cập nhật',
          body: 'Ứng dụng kiểm tra phiên bản mới khi khởi động và, trên macOS, cập nhật chỉ với một cú nhấp.',
        },
      ],
      privacy:
        'Không cần tài khoản, không có máy chủ. Danh sách đăng ký, bài viết và cài đặt của bạn được lưu trong một tệp trên máy tính của bạn.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        'Nguồn tin của tôi trong SOS My Feed: bài viết của ba nguồn tin trong một danh sách, mới nhất trước',
        'Một bài viết mở trong trình đọc của SOS My Feed: hai trang cạnh nhau trên nền giấy màu nâu nhạt',
      ],
    },
  },
} satisfies Messages;

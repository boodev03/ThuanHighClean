import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Thuan High Clean đang hoạt động ở khu vực nào?",
    answer: "Hiện tại, Thuan High cung cấp dịch vụ tại <strong>TP.HCM và các khu vực lân cận</strong>. Chúng tôi đang mở rộng để phục vụ nhiều tỉnh thành hơn trong thời gian tới."
  },
  {
    question: "Dịch vụ của Thuan High Clean có đảm bảo chất lượng không?",
    answer: "<strong>100% khách hàng</strong> được phục vụ bởi đội ngũ nhân viên <strong>chuyên nghiệp, có kinh nghiệm</strong> và được đào tạo kỹ về quy trình vệ sinh. Thuan High cam kết <strong>làm sạch tận gốc – đúng hẹn – đúng chất lượng</strong>."
  },
  {
    question: "Sau khi đặt lịch, bao lâu nhân viên sẽ đến làm việc?",
    answer: "Thường trong vòng <strong>30–60 phút</strong> sau khi xác nhận, nhân viên sẽ có mặt tại địa chỉ của bạn. Với các lịch hẹn trước, đội ngũ sẽ <strong>đến đúng giờ</strong> theo yêu cầu."
  },
  {
    question: "Thuan High Clean có làm việc vào ngày Lễ, Tết không?",
    answer: "<strong>Có nhé!</strong> Thuan High vẫn nhận lịch vệ sinh vào <strong>ngày Lễ, Tết</strong> để đáp ứng nhu cầu của khách hàng. Tuy nhiên, bạn nên <strong>đặt lịch trước</strong> để được phục vụ tốt nhất."
  },
  {
    question: "Làm thế nào để sử dụng dịch vụ của Thuan High Clean hiệu quả nhất?",
    answer: "Bạn chỉ cần <strong>nhắn tin hoặc gọi trực tiếp</strong> qua Zalo, Messenger hoặc Hotline. Thuan High sẽ <strong>tư vấn, báo giá rõ ràng</strong> và sắp xếp lịch vệ sinh phù hợp nhất cho bạn."
  }
];

export default function HomeFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Giải đáp các thắc mắc phổ biến về dịch vụ
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openItem === index;
              
              return (
                <div
                  key={`faq-${index}`}
                  className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white font-bold text-sm shadow-md">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg pt-1">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown className={`flex-shrink-0 w-6 h-6 text-gray-400 transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`} />
                  </button>

                  <div className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-5 border-t-2 border-gray-50">
                      <div className="pt-5 pl-1">
                        <div 
                          className="text-gray-700 text-sm sm:text-base leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              Không tìm thấy câu trả lời?
            </p>
            <a 
              href="tel:0357111566"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Gọi ngay: 0357 111 566</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


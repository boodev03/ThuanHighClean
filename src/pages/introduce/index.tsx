import SEOConfig from "@/components/SEO";
import Commitment from "./Commitment";
import CoreValue from "./CoreValue";
import FeatureSection from "./FeatureSection";
import JoinUs from "./JoinUs";
import Partner from "./Partner";

export default function IntroducePage() {
  return (
    <>
      <SEOConfig
        title="ThuanHighClean - Dịch Vụ Vệ Sinh Chuyên Nghiệp"
        description="Thuan High Clean cung cấp dịch vụ vệ sinh chuyên nghiệp: giặt thảm văn phòng, giặt nệm, phục hồi nệm, giặt thảm trang trí, giặt ghế văn phòng và nhiều hơn nữa. Đội ngũ chuyên nghiệp, trang thiết bị hiện đại, đảm bảo chất lượng và sự hài lòng của khách hàng."
        keywords="dịch vụ vệ sinh, giặt thảm văn phòng, giặt nệm, phục hồi nệm, giặt thảm trang trí, giặt ghế văn phòng, Thuan High Clean, dịch vụ giặt thảm, vệ sinh văn phòng"
      />
      <div>
        {/* Hero Video Section */}
        <div className="relative w-full md:h-[80vh] lg:h-screen overflow-hidden">
          <video
            autoPlay
            className="w-full h-auto md:w-full md:h-full md:object-cover"
            loop
            muted
            src="https://pub-fbd06936b4484a68ac272728d64a0210.r2.dev/Kh%C3%B4ng%20Gian%20S%E1%BA%A1ch%2C%20T%C3%A2m%20Tr%E1%BA%A1ng%20T%E1%BB%91t!-VEED.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
          
          {/* Scroll Indicator - Hidden on mobile */}
          <div className="hidden md:flex absolute bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 flex-col items-center gap-3 animate-bounce">
            <span className="text-white text-sm font-medium tracking-wider">SCROLL</span>
            <div className="w-6 h-10 border-2 border-white rounded-full p-1">
              <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-scroll"></div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Main About Card */}
            <div className="max-w-6xl mx-auto mb-12 md:mb-20">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-12 lg:p-16 border border-gray-100">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">About Us</span>
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-3">
                      <h2 className="text-base md:text-2xl lg:text-3xl text-gray-800 font-bold mb-2 md:mb-3">
                        Chúng tôi là
                      </h2>
                      <div className="relative inline-block mb-3 md:mb-4">
                        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-primary relative z-10">
                          THUAN HIGH CLEAN
                        </h1>
                        <div className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-primary/20 -skew-y-1"></div>
                      </div>
                      
                      <p className="text-xs md:text-base lg:text-lg text-gray-700 leading-relaxed mb-2 md:mb-3">
                        <span className="text-primary font-semibold">Thuan High Clean</span>{" "}
                        là doanh nghiệp cung cấp các giải pháp Dịch vụ vệ sinh cho gia đình, 
                        chung cư, văn phòng... Chúng tôi cung cấp đa dịch vụ tiện ích như: 
                        dọn dẹp nhà, vệ sinh thảm, vệ sinh sofa, vệ sinh nệm, …
                      </p>
                      
                      <p className="text-xs md:text-base lg:text-lg text-gray-700 leading-relaxed">
                        Các gói dịch vụ vệ sinh mà Thuan High Clean mang lại cam kết có 
                        mức giá tốt nhất thị trường, an toàn cho người sử dụng phù hợp 
                        theo từng nhu cầu khách hàng khác nhau.
                      </p>
                    </div>
                    
                    {/* Stats/Features */}
                    <div className="lg:col-span-2 space-y-3 md:space-y-4">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 md:p-6 border border-primary/20">
                        <div className="flex items-center gap-3 mb-2 md:mb-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xl md:text-3xl font-bold text-primary">100%</p>
                            <p className="text-xs md:text-sm text-gray-600">Đảm bảo chất lượng</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-4 md:p-6 border border-green-200">
                        <div className="flex items-center gap-3 mb-2 md:mb-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xl md:text-3xl font-bold text-green-600">Giá tốt</p>
                            <p className="text-xs md:text-sm text-gray-600">Tiết kiệm chi phí</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-4 md:p-6 border border-blue-200">
                        <div className="flex items-center gap-3 mb-2 md:mb-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xl md:text-3xl font-bold text-blue-600">Nhanh</p>
                            <p className="text-xs md:text-sm text-gray-600">Phục vụ tận nơi</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Style Layout */}
            <div className="max-w-5xl mx-auto space-y-10 md:space-y-16">
              {/* Khu vực hoạt động */}
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-lg"></div>
                <div className="absolute left-2 top-4 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>
                
                <div className="ml-8 md:ml-0 md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-1">
                    <div className="inline-block bg-white rounded-2xl shadow-xl p-5 md:p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl">
                      <div className="flex md:flex-row-reverse items-start gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                            Khu vực hoạt động
                          </h3>
                          <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full md:ml-auto"></div>
                        </div>
                      </div>
                      <p className="text-xs md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3">
                        Hiện tại, Thuan High Clean cung cấp các dịch vụ tiện ích cho nhiều hộ gia đình & Công Ty ở khắp 
                        <span className="font-bold text-primary"> 5 tỉnh thành</span> tại Việt Nam
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4 md:justify-end">
                        {["TP.HCM", "Long An", "Bình Dương", "Đồng Nai", "Bà Rịa Vũng Tàu"].map((city) => (
                          <span key={city} className="px-2 py-1 md:px-3 md:py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-lg border border-primary/20">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="order-2 hidden md:block"></div>
                </div>
              </div>

              {/* Phát triển nhiều hơn nữa */}
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-lg"></div>
                
                <div className="ml-8 md:ml-0 md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block order-1"></div>
                  <div className="order-2">
                    <div className="inline-block bg-white rounded-2xl shadow-xl p-5 md:p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl">
                      <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                            Phát triển bền vững
                          </h3>
                          <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-xs md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                        Với mục tiêu mang đến cho khách hàng những trải nghiệm dịch vụ tốt nhất,
                        <span className="text-primary font-semibold"> Thuan High Clean </span>
                        không ngừng lắng nghe và cải thiện chất lượng dịch vụ.
                      </p>
                      <div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-gray-100">
                        <div className="flex -space-x-2">
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/20 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs font-bold text-primary">👍</span>
                          </div>
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-green-100 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs font-bold text-green-600">🌱</span>
                          </div>
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs font-bold text-blue-600">💎</span>
                          </div>
                        </div>
                        <span className="text-xs md:text-sm text-gray-600 font-medium">Chất lượng · Bền vững · Uy tín</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureSection />
        <CoreValue />
        <Commitment />
        <Partner />
        <JoinUs />
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

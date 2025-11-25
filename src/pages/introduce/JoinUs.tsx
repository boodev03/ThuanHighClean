import { Link } from "react-router-dom";

export default function JoinUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 md:py-20 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="col-span-3 space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white font-semibold text-xs md:text-sm uppercase tracking-wider">
                Trải nghiệm ngay
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Hãy trải nghiệm dịch vụ tiện ích từ{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Thuan High Clean</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-white/30 -skew-y-1"></span>
              </span>
              {" "}ngay hôm nay!
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
              Tham gia cùng Thuan High Clean để tận hưởng sự tiện lợi vượt trội
              trong cuộc sống hàng ngày. Với dịch vụ đặt lịch dễ dàng, nhanh chóng
              và đội ngũ nhân viên chăm chỉ, chúng tôi luôn sẵn sàng hỗ trợ bạn hoàn
              thành mọi công việc một cách hiệu quả nhất!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/" 
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-bold text-base md:text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
              >
                <span>Trải nghiệm dịch vụ ngay</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-bold text-base md:text-lg rounded-xl border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 transform"
              >
                <span>Liên hệ tư vấn</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white">1000+</p>
                  <p className="text-sm text-white/80">Khách hàng</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white">5★</p>
                  <p className="text-sm text-white/80">Đánh giá</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-span-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <img
                src="/assets/images/introduce/become.png"
                alt="Thuan High Clean - Trải nghiệm dịch vụ"
                className="relative w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] transform group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

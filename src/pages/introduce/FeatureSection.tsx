export default function FeatureSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Tầm nhìn */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 md:mb-20 lg:mb-24">
        <div className="flex-1 order-2 lg:order-1">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm md:text-base">VISION</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-800 leading-tight">
            Tầm nhìn
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
            <span className="text-primary font-medium">Thuan High Clean </span>
            định hướng phát triển thành một trung tâm dịch vụ vệ sinh uy tín –
            chất lượng – tận tâm hàng đầu tại Việt Nam. Chúng tôi sẽ luôn không
            ngừng đổi mới, sáng tạo để mang đến cho quý khách hàng các sản phẩm
            dịch vụ làm sạch, góp phần nâng cao chất lượng môi trường sống và
            chung tay bảo vệ trái đất xanh.
          </p>
        </div>
        <div className="order-1 lg:order-2 lg:flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <img
              className="relative w-[180px] md:w-[220px] lg:w-[260px] transform group-hover:scale-105 transition-transform duration-300"
              src="/assets/images/introduce/view.png"
              alt="Thuan High Clean - Tầm nhìn"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative my-12 md:my-16 lg:my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-6 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Sứ mệnh */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <img
              className="relative w-[180px] md:w-[220px] lg:w-[260px] transform group-hover:scale-105 transition-transform duration-300"
              src="/assets/images/introduce/building.png"
              alt="Thuan High Clean - Sứ mệnh"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm md:text-base">MISSION</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-800 leading-tight">
            Sứ mệnh
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
            <span className="text-primary font-semibold">Thuan High Clean</span>{" "}
            ra đời với sứ mệnh đáp ứng nhu cầu giải quyết việc nhà của người dân
            và nâng cao giá trị nghề giúp việc nhà bằng cách xây dựng nguồn nhân
            lực bài bản, chuyên nghiệp và tận tâm. Cuộc sống thảnh thơi khi nhẹ
            đi gánh nặng việc nhà của khách hàng và nguồn thu nhập ổn định của
            người lao động chính là những gì mà chúng tôi luôn hướng đến.
          </p>
        </div>
      </div>
    </section>
  );
}

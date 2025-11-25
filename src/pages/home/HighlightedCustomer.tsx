export default function HighlightedCustomer() {
  return (
    <section className="container mx-auto my-[80px] px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Những thương hiệu đang sử dụng
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Được tin tưởng bởi hơn 15+ thương hiệu lớn tại Việt Nam
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 sm:gap-6">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="group relative aspect-square bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
            }}
          >
            <img
              alt="Thương hiệu sử dụng"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              src={
                index === 8
                  ? `./assets/images/highlighted-customer/brand_${
                      index + 1
                    }.jpeg`
                  : index === 10 || index === 11 || index === 2
                  ? `./assets/images/highlighted-customer/brand_${
                      index + 1
                    }.png`
                  : `./assets/images/highlighted-customer/brand_${
                      index + 1
                    }.jpg`
              }
            />
            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent transition-all duration-300" />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Bạn cũng muốn trải nghiệm dịch vụ chất lượng như họ?
        </p>
        <a 
          href="tel:0357111566"
          className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg"
        >
          <span>Liên hệ ngay</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}

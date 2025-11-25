const data = [
  {
    logo: "/assets/images/introduce/zalo_pay.png",
    title: "ZaloPay",
    description: "Ứng dụng thanh toán di động nhanh trong 2 giây.",
  },
  {
    logo: "/assets/images/introduce/momo.png",
    title: "Momo",
    description: "Siêu ứng dụng thanh toán số 1 Việt Nam.",
  },
  {
    logo: "/assets/images/introduce/hoozing.png",
    title: "Hoozing",
    description: "Ứng dụng mua và thuê nhà.",
  },
];

export default function Partner() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm md:text-base">PARTNERS</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Đối tác của{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Thuan High Clean
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Chúng tôi tự hào hợp tác cùng các đối tác uy tín hàng đầu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {data.map((item, index) => (
            <div 
              key={item.title} 
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Logo container */}
                <div className="w-24 h-24 md:w-28 md:h-28 mb-5 md:mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 transform bg-white p-2">
                  <img
                    className="w-full h-full object-contain"
                    src={item.logo}
                    alt={item.title}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 md:mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 md:mt-5 w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership badge */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-gray-700 font-medium text-sm md:text-base">
              Đối tác tin cậy và uy tín
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

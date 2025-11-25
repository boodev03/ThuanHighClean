const data = [
  {
    icon: "/assets/images/introduce/quality.png",
    title: "Chất lượng",
    description:
      "Đảm bảo chất lượng dịch vụ cho khách hàng. Tất cả các Nhân Viên của chúng tôi đều phải có kinh nghiệm và trải qua chương trình đào tạo, kiểm tra, thử việc nghiêm ngặt.",
  },
  {
    icon: "/assets/images/introduce/favorite.png",
    title: "Tận tâm",
    description:
      "Luôn đặt mình vào vị trí của khách hàng để mang lại hiệu quả công việc tốt nhất. Thuan High Clean sẽ mang lại giá trị mà khách hàng sẽ mong muốn sử dụng lâu dài",
  },
  {
    icon: "/assets/images/introduce/fast.png",
    title: "Tiện lợi",
    description:
      "Đặt lịch nhanh chóng tiện lợi và nhận việc mọi lúc mọi nơi. Quý khách hàng có thể để lại thông tin trên hộp thoại hoặc có thể liên hệ trực tiếp qua zalo, message, số điện thoại",
  },
  {
    icon: "/assets/images/introduce/growth.png",
    title: "Cải tiến",
    description:
      "Chúng tôi luôn lắng nghe để không ngừng cải tiến công nghệ, đổi mới chính sách, vì trải nghiệm trọn vẹn của người dùng là đích đến của chúng tôi",
  },
];

export default function CoreValue() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
          <span className="text-primary font-semibold text-sm md:text-base">CORE VALUES</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-4">
          Giá trị cốt lõi
        </h2>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
          Những giá trị mà chúng tôi cam kết mang lại cho khách hàng
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-2"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon container */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                <img 
                  alt={item.title} 
                  src={item.icon} 
                  className="w-7 h-7 md:w-8 md:h-8 object-contain" 
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl text-gray-800 font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                {item.description}
              </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

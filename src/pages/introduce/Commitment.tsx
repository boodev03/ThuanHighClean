const commits = [
  "Tư vấn tận tình, chi tiết, cặn kẽ và giải đáp mọi thắc mắc khi bạn có nhu cầu sử dụng dịch vụ vệ sinh của Thuan High Clean.",
  "Đảm bảo cung cấp dịch vụ vệ sinh giá rẻ nhất, an toàn nhất giúp bạn tiết kiệm tối đa chi phí vệ sinh.",
  "Sử dụng hóa chất vệ sinh chính hãng, không ảnh hưởng sức khỏe người sử dụng, an toàn cho đồ đạc.",
  "Nhân viên vệ sinh trung thực, tỉ mỉ, được đào tạo bài bản vệ sinh mọi ngóc ngách theo yêu cầu của quý khách hàng.",
  "Máy móc vệ sinh hiện đại, chuyên dụng, hoàn thành công việc vệ sinh nhanh chóng.",
  "Làm việc đúng giờ, bàn giao dự án đúng hạn cho quý khách hàng theo cam kết đề ra.",
  "Cam kết mức giá công khai được niêm yết trên website.",
  "Có chính sách hậu mãi, không chối bỏ trách nhiệm khi có vấn đề phát sinh không mong muốn xảy ra.",
];

const Commitment = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm md:text-base">OUR COMMITMENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-6 md:mb-8">
            Cam kết với khách hàng
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Bằng khát vọng tiên phong cùng ý nguyện phát triển bền vững chung tay
            góp sức bảo vệ trái đất xanh thông qua dịch vụ vệ sinh. Thuan High Clean
            phấn đấu trở thành trung tâm dịch vụ vệ sinh cung cấp các giải pháp làm
            sạch an toàn, giá rẻ cho người sử dụng. Là địa chỉ tin cậy của Quý khách
            hàng. Chúng tôi cam kết:
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-4 md:gap-5">
          {commits.map((commit, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-x-2"
            >
              <div className="flex gap-4 md:gap-5">
                {/* Number badge */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-base md:text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
                    {commit}
                  </p>
                </div>

                {/* Check icon */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-primary/5 rounded-full">
            <p className="text-primary font-semibold text-sm md:text-base">
              Cam kết của chúng tôi là sự hài lòng của bạn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;

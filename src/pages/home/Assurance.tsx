const assuranceData = [
  {
    title: "Đặt lịch nhanh chóng",
    desc: "Chỉ cần để lại tin nhắn, gọi trực tiếp hoặc đặt lịch qua website — Thuan High sẽ phản hồi ngay và đến đúng hẹn.",
    badgePath: "./assets/images/badge-time-clock.png",
  },
  {
    title: "Giá cả minh bạch",
    desc: "Mức giá được niêm yết rõ ràng, không phát sinh chi phí ẩn. Bạn luôn biết trước chính xác số tiền mình chi trả.",
    badgePath: "./assets/images/badge-pay.png",
  },
  {
    title: "Đa dạng dịch vụ",
    desc: "Thuan High cung cấp đầy đủ các dịch vụ vệ sinh từ nhà ở đến văn phòng, đáp ứng mọi nhu cầu làm sạch của bạn.",
    badgePath: "./assets/images/badge-service.png",
  },
  {
    title: "An toàn tuyệt đối",
    desc: "Đội ngũ nhân viên uy tín, có hồ sơ rõ ràng và được giám sát chặt chẽ trong suốt quá trình làm việc — đảm bảo an tâm tuyệt đối cho khách hàng.",
    badgePath: "./assets/images/badge-insurrance.png",
  },
];

export default function Assurance() {
  return (
    <section className="container mx-auto mt-[80px] px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          An tâm với lựa chọn của bạn
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Cam kết chất lượng và sự hài lòng trong từng dịch vụ
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10 sm:mb-14">
        <img
          src="./assets/images/assurance.png"
          className="w-full object-cover"
          alt="Thuan High Clean"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {assuranceData.map((item, index) => (
          <div 
            key={item.title} 
            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="mb-5 inline-block p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <img
                  className="size-12 sm:size-14"
                  src={item.badgePath}
                  alt="Thuan High Clean"
                />
              </div>
              <h3 className="mb-3 font-bold text-lg sm:text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

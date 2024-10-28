const assuranceData = [
  {
    title: "Đặt lịch nhanh chóng",
    desc: "Thao tác 60 giây trên ứng dụng, có ngay người nhận việc sau 60 phút",
    badgePath: "./assets/images/badge-time-clock.png",
  },
  {
    title: "Giá cả rõ ràng",
    desc: "Giá dịch vụ được hiển thị rõ ràng trên ứng dụng. Bạn không phải trả thêm bất kỳ khoản chi phí nào.út",
    badgePath: "./assets/images/badge-pay.png",
  },
  {
    title: "Đa dạng dịch vụ",
    desc: "Với 9 dịch vụ tiện ích, Thuan High Clean sẵn sàng hỗ trợ mọi nhu cầu việc nhà của bạn.",
    badgePath: "./assets/images/badge-service.png",
  },
  {
    title: "An toàn tối đa",
    desc: "Người làm uy tín, luôn có hồ sơ lý lịch rõ ràng và được Công ty giám sát trong suốt quá trình làm việc.",
    badgePath: "./assets/images/badge-insurrance.png",
  },
];

export default function Assurance() {
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px]  max-w-[70%] text-[#333] font-bold mb-10">
        An tâm với lựa chọn của bạn
      </h2>

      <img
        src="./assets/images/assurance.png"
        className="w-full object-cover"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {assuranceData.map((item) => (
          <div key={item.title}>
            <img className="size-[78px]" src={item.badgePath} alt="" />
            <p className="mt-6 my-4 font-bold text-xl">{item.title}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

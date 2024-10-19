export default function FeatureSection() {
  return (
    <section className="container mx-auto pt-[50px]">
      <div className="flex items-center">
        <div className="flex-1">
          <h2 className="mt-2 mb-4 text-[32px] font-bold">Tầm nhìn</h2>
          <p className="max-w-[70%]">
            Không chỉ muốn giúp bạn chăm sóc gia đình từ những dịch vụ{" "}
            <span className="text-primary font-medium">
              dọn dẹp nhà, vệ sinh máy lạnh, nấu ăn gia đình, giặt ủi
            </span>
            ,...{" "}
            <span className="text-primary font-semibold">Thuan High Clean</span>{" "}
            đang nỗ lực trở thành công ty hàng đầu Việt Nam và vươn ra thị
            trường Đông Nam Á, cung cấp nhiều hơn những dịch vụ tiện ích gia
            đình tích hợp trên ứng dụng di động.
          </p>
        </div>
        <img className="w-[230px]" src="/assets/images/introduce/view.png" />
      </div>

      <hr className="my-10" />

      <div className="flex items-center">
        <div className="flex-1">
          <h2 className="mt-2 mb-4 text-[32px] font-bold">Sứ mệnh</h2>
          <p className="max-w-[70%]">
            <span className="text-primary font-semibold">Thuan High Clean</span>{" "}
            ra đời với sứ mệnh đáp ứng nhu cầu giải quyết việc nhà của người dân
            đô thị và nâng cao giá trị nghề giúp việc nhà bằng cách xây dựng
            nguồn nhân lực giúp việc bài bản, chuyên nghiệp và tận tâm. Cuộc
            sống thảnh thơi khi nhẹ đi gánh nặng việc nhà của khách hàng và
            nguồn thu nhập ổn định của người lao động chính là những gì mà chúng
            tôi luôn hướng đến.
          </p>
        </div>
        <img
          className="w-[230px]"
          src="/assets/images/introduce/building.png"
        />
      </div>
    </section>
  );
}

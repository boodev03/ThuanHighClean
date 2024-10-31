export default function FeatureSection() {
  return (
    <section className="container mx-auto pt-[50px]">
      <div className="flex items-center">
        <div className="flex-1">
          <h2 className="mt-2 mb-4 text-[32px]  max-w-[70%] font-bold">
            Tầm nhìn
          </h2>
          <p className="max-w-[70%] text-justify">
            <span className="text-primary font-medium">Thuan High Clean </span>
            định hướng phát triển thành một 
            trung tâm dịch vụ vệ sinh uy tín – chất lượng – tận tâm hàng đầu tại Việt Nam. 
            Chúng tôi sẽ luôn không ngừng đổi mới, sáng tạo để mang đến cho quý khách hàng các s
            ản phẩm dịch vụ làm sạch, góp phần nâng cao chất lượng môi trường sống và chung tay bảo vệ trái đất xanh.
          </p>
        </div>
        <img
          className="w-[230px]"
          src="/assets/images/introduce/view.png"
          alt="Thuan High Clean"
        />
      </div>

      <hr className="my-10" />

      <div className="flex items-center">
        <div className="flex-1">
          <h2 className="mt-2 mb-4 text-[32px]  max-w-[70%] font-bold">
            Sứ mệnh
          </h2>
          <p className="max-w-[70%] text-justify">
            <span className="text-primary font-semibold">Thuan High Clean</span>{" "}
            ra đời với sứ mệnh đáp ứng nhu cầu giải quyết việc nhà của người dân và 
            nâng cao giá trị nghề giúp việc nhà bằng cách xây dựng nguồn nhân lực bài bản, 
            chuyên nghiệp và tận tâm. Cuộc sống thảnh thơi khi nhẹ đi gánh nặng việc nhà 
            của khách hàng và nguồn thu nhập ổn định của người lao động chính là những gì mà chúng tôi luôn hướng đến.
          </p>
        </div>
        <img
          className="w-[230px]"
          src="/assets/images/introduce/building.png"
          alt="Thuan High Clean"
        />
      </div>
    </section>
  );
}

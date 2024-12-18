import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const data = [
  {
    title: "Giặt thảm văn phòng",
    description:
      "Vệ sinh thảm văn phòng thường xuyên, giúp loại bỏ bụi bẩn, vi khuẩn và mùi hôi, mang lại không gian làm việc sạch sẽ, thoải mái.",
    thumb: "/assets/images/giat-tham-van-phong/thumb.jpg",
    slug: "giat-tham-van-phong",
  },
  {
    title: "Giặt ghế văn phòng",
    description:
      "Thuan High cung cấp dịch vụ giặt ghế văn phòng tận nơi, giúp loại bỏ bụi bẩn, vi khuẩn và mùi hôi, mang lại sự thoải mái và sạch sẽ cho môi trường làm việc.",
    thumb: "/assets/images/giat-ghe-van-phong/thumb.jpg",
    slug: "giat-ghe-van-phong",
  },
  {
    title: "Giặt thảm trang trí",
    description:
      "Vệ sinh thảm giúp giữ gìn không gian nhà bạn luôn sạch sẽ và sang trọng, cũng như luôn giữ nét độc đáo riêng.",
    thumb: "/assets/images/giat-tham-trang-tri/thumb.jpg",
    slug: "giat-tham-trang-tri",
  },
  {
    title: "Vệ sinh Sofa",
    description:
      "Làm sạch sofa đòi hỏi kỹ năng và chất làm sạch phù hợp. Nhân viên vệ sinh của chúng tôi được đào tạo về phương pháp làm sạch hiệu quả nhất để mang lại cho bạn sự hài lòng cao nhất.",
    thumb: "/assets/images/ve-sinh-sofa/thumb.jpg",
    slug: "giat-ghe-sofa",
  },
  {
    title: "Vệ sinh nệm",
    description:
      "Nệm là nơi tích tụ nhiều bụi bẩn, vi khuẩn và mùi hôi. Bạn đừng lo dịch vụ vệ sinh nệm của Thuan High sẽ giúp bạn giải quyết vấn đề này một cách hiệu quả.",
    thumb: "/assets/images/ve-sinh-nem/thumb.jpg",
    slug: "giat-nem-tai-nha",
  },
  {
    title: "Vệ sinh rèm cửa",
    description:
      "Vệ sinh rèm là điều bắt buộc tại nhà hoặc văn phòng của bạn. Bụi tích tụ lâu ngày trên rèm cửa nhà bạn có thể dễ dàng gây tổn thương mắt và dị ứng đường hô hấp.",
    thumb: "/assets/images/ve-sinh-rem-cua/thumb.jpg",
    slug: "ve-sinh-rem-cua",
  },
  {
    title: "Vệ sinh sau xây dựng",
    description:
      "Sau quá trình xây dựng, ngôi nhà của bạn cần một bước chăm sóc đặc biệt để trở nên sạch đẹp và an toàn cho cả gia đình. Dịch vụ vệ sinh nhà sau xây dựng của Thuan High sẽ giúp bạn giải quyết vấn đề này một cách nhanh chóng và hiệu quả.",
    thumb: "/assets/images/ve-sinh-sau-xay-dung/thumb.jpg",
    slug: "ve-sinh-sau-xay-dung",
  },
];

export default function ServiceList() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px] lg:max-w-[70%] text-[#333] font-bold mb-10">
        Tất cả những tiện ích gia đình mà bạn cần
      </h2>

      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {data.map((service, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="h-full flex flex-col">
                <Link to={`/service/${service.slug}`}>
                  <img
                    className="block"
                    src={service.thumb}
                    alt="Thuan High Clean"
                  />
                </Link>

                <p className="mt-2 mb-4 text-xl font-bold">{service.title}</p>
                <p
                  className="text-[#383838] mb-4 flex-1 line-clamp-6"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                <Link
                  to={`/service/${service.slug}`}
                  className="text-[#555] w-max hover:text-black transition-all duration-200 border-b border-[#ddd] hover:border-black"
                >
                  Tìm hiểu thêm
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="border-none" />
        <CarouselNext className="border-none" />
      </Carousel>
    </section>
  );
}

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
    title: "Giặt nệm",
    description:
      "Giấc ngủ ngon bắt đầu từ chiếc nệm sạch. Thuan High làm sạch nệm tận gốc, loại bỏ bụi mịn, vi khuẩn và mùi hôi, bảo vệ sức khỏe cho cả gia đình.",
    thumb: "/assets/images/new/giat-nem-tai-nha/category.jpeg",
    slug: "giat-nem-tai-nha",
    isActive: true,
  },
  {
    title: "Giặt Sofa",
    description:
      "Đánh bay mọi vết bẩn và mùi hôi hiệu quả trên Sofa. Dịch vụ vệ sinh sofa Thuan High mang lại vẻ tươi mới và không gian sống dễ chịu cho gia đình bạn.",
    thumb: "/assets/images/new/giat-ghe-sofa/category.jpeg",
    slug: "giat-ghe-sofa",
    isActive: true,
  },
  {
    title: "Giặt Rèm",
    description:
      "Rèm cửa sạch sáng giúp căn phòng thêm tinh tế. Dịch vụ giặt rèm Thuan High loại bỏ bụi, nấm mốc và mang lại không gian trong lành, dễ chịu.",
    thumb: "/assets/images/new/ve-sinh-rem-cua/category.jpeg",
    slug: "ve-sinh-rem-cua",
    isActive: true,
  },
  {
    title: "Giặt Thảm",
    description:
      "Thảm sạch, không khí trong lành – giúp nhân viên làm việc thoải mái hơn. Dịch vụ giặt thảm Thuan High giúp văn phòng luôn và nhà ở sạch sẽ và chuyên nghiệp.",
    thumb: "/assets/images/new/giat-tham-van-phong/category.jpeg",
    slug: "giat-tham-van-phong",
    isActive: true,
  },
  {
    title: "Giặt Thảm Trang Trí",
    description:
      "Giữ gìn nét sang trọng cho không gian sống. Dịch vụ giặt thảm trang trí giúp loại bỏ bụi bẩn, mùi hôi và giữ màu sắc bền đẹp như mới.",
    thumb: "/assets/images/new/giat-tham-trang-tri/category.jpeg",
    slug: "giat-tham-trang-tri",
    isActive: false,
  },
  {
    title: "Giặt Ghế Văn Phòng",
    description:
      "Ghế văn phòng sạch không chỉ đẹp mắt mà còn tốt cho sức khỏe. Thuan High mang đến dịch vụ giặt ghế nhanh, sạch, an toàn và tiện lợi tại chỗ.",
    thumb: "/assets/images/new/giat-ghe-van-phong/category.jpeg",
    slug: "giat-ghe-van-phong",
    isActive: true,
  },
  {
    title: "Vệ Sinh Công Nghiệp",
    description:
      "Ngôi nhà mới cần được chăm chút kỹ lưỡng. Dịch vụ vệ sinh sau xây dựng giúp loại bỏ bụi, sơn, xi… nhanh chóng, trả lại vẻ đẹp sạch sẽ và an toàn cho tổ ấm.",
    thumb: "/assets/images/new/ve-sinh-cong-nghiep/category.jpeg",
    slug: "ve-sinh-cong-nghiep",
    isActive: true,
  },
];

export default function ServiceList() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));
  return (
    <section className="container mx-auto mt-[80px] px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Tất cả những tiện ích gia đình mà bạn cần
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Dịch vụ vệ sinh chuyên nghiệp với đội ngũ tận tâm và công nghệ hiện đại
        </p>
      </div>

      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {data
            .filter((service) => service.isActive)
            .map((service, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="h-full flex flex-col group">
                  <Link to={`/service/${service.slug}`} className="block relative overflow-hidden rounded-xl">
                    <img
                      className="block w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      src={service.thumb}
                      alt="Thuan High Clean"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  <p className="mt-4 mb-2 text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </p>
                  <p
                    className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 flex-1 line-clamp-3 sm:line-clamp-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                  <Link
                    to={`/service/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm sm:text-base w-max hover:gap-3 transition-all duration-200 group/link"
                  >
                    <span>Tìm hiểu thêm</span>
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious className="border-none left-2 sm:left-4 lg:-left-12 !size-10 sm:!size-12 z-10 shadow-xl bg-white text-primary hover:bg-primary hover:text-white focus:bg-white focus:text-primary active:bg-white active:text-primary transition-all duration-300" />
        <CarouselNext className="border-none right-2 sm:right-4 lg:-right-12 !size-10 sm:!size-12 z-10 shadow-xl bg-white text-primary hover:bg-primary hover:text-white focus:bg-white focus:text-primary active:bg-white active:text-primary transition-all duration-300" />
      </Carousel>
    </section>
  );
}

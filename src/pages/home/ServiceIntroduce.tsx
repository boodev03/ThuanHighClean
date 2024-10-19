import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function ServiceIntroduce() {
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px] text-[#333] font-bold mb-10">
        Tất cả những tiện ích gia đình mà bạn cần
      </h2>

      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div>
                <img className="block" src="/assets/images/service_1.jpg" />
                <p className="mt-2 mb-4 text-xl font-bold">
                  Dịch vụ giặt ghế Sofa
                </p>
                <p className="text-[#383838] mb-4">
                  Việc mua sắm thực phẩm và đồ dùng gia đình trở nên tiện lợi
                  hơn bao giờ hết. Giao hàng tận nơi chỉ sau 1h.
                </p>
                <Link
                  to="/"
                  className="text-[#555] hover:text-black transition-all duration-200 border-b border-[#ddd] hover:border-black"
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

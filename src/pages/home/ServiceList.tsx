import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/data/services";
export default function ServiceList() {
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
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="h-full flex flex-col">
                <img className="block" src="/assets/images/service_1.jpg" />
                <p className="mt-2 mb-4 text-xl font-bold">{service.name}</p>
                <p className="text-[#383838] mb-4 flex-1">
                  {service.description}
                </p>
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

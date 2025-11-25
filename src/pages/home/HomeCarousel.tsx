import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function HomeCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <div className="relative overflow-hidden">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative w-full overflow-hidden">
                <img
                  src="./assets/images/thuan400k-01.jpg"
                  alt="Thuan High Clean"
                  className="w-full h-auto animate-[fadeIn_0.6s_ease-in-out]"
                />
                {/* Gradient overlay for better text readability if you add text later */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

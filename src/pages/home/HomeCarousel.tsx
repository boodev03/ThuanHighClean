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
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <img src="./assets/images/banner_1.png" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

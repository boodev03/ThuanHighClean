import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const customerReviewData: CustomerReviewProps[] = [
  {
    name: "Anh Lộc",
    review:
      "Dịch vụ giặt thảm thật tuyệt vời! Thảm nhà tôi bám đầy bụi bẩn sau một thời gian dài sử dụng, nhưng sau khi sử dụng dịch vụ, thảm sạch như mới và có mùi thơm dễ chịu. Nhân viên nhiệt tình, làm việc rất cẩn thận và tỉ mỉ. Tôi rất hài lòng và chắc chắn sẽ tiếp tục sử dụng dịch vụ trong tương lai.",
    rating: 5,
    avatarSrc:
      "https://cdn3d.iconscout.com/3d/premium/thumb/southeast-asian-man-avatar-10971676-8779388.png?f=webp",
  },
  {
    name: "Chị Nga",
    review:
      "Giặt sofa chuyên nghiệp và nhanh chóng! Sofa của tôi bị dính nhiều vết bẩn cứng đầu do trẻ con làm đổ đồ ăn, nước uống. Tôi đã rất lo lắng nhưng dịch vụ đã làm sạch hoàn toàn. Nhân viên đến đúng giờ, máy móc hiện đại và quy trình làm việc rất chuyên nghiệp. Sofa sạch sẽ và khô ráo ngay sau đó.",
    rating: 5,
    avatarSrc:
      "https://cdn3d.iconscout.com/3d/premium/thumb/southeast-asian-man-avatar-10971676-8779388.png?f=webp",
  },
  {
    name: "Chị Khánh",
    review:
      "Dịch vụ giặt thảm tại nhà tiện lợi và hiệu quả. Tôi không phải mất công tháo lắp hay vận chuyển gì cả, chỉ cần đặt lịch là nhân viên đến tận nhà làm sạch. Giá cả hợp lý, chất lượng dịch vụ rất tốt. Rất đáng để thử nếu bạn bận rộn như tôi!",
    rating: 5,
    avatarSrc:
      "https://cdn3d.iconscout.com/3d/premium/thumb/southeast-asian-man-avatar-10971676-8779388.png?f=webp",
  },
  {
    name: "Anh Thắng",
    review:
      "Rất hài lòng với dịch vụ giặt sofa. Tôi đã thử nhiều nơi nhưng đây là dịch vụ làm tôi hài lòng nhất. Nhân viên lịch sự, chu đáo, quy trình làm việc rõ ràng và hiệu quả. Sau khi giặt, sofa nhà tôi trông sáng hơn hẳn, không còn mùi khó chịu nữa. Chắc chắn sẽ giới thiệu cho bạn bè.",
    rating: 5,
    avatarSrc:
      "https://cdn3d.iconscout.com/3d/premium/thumb/southeast-asian-man-avatar-10971676-8779388.png?f=webp",
  },
  {
    name: "Anh Mơ",
    review:
      "Thảm sạch như mới sau khi giặt! Thật sự không ngờ dịch vụ giặt thảm lại có thể mang lại hiệu quả cao như vậy. Nhân viên rất chuyên nghiệp, làm việc kỹ lưỡng, cẩn thận từng chi tiết. Dịch vụ nhanh chóng và giá cả hợp lý. Tôi sẽ sử dụng lại dịch vụ này trong thời gian tới.",
    rating: 5,
    avatarSrc:
      "https://cdn3d.iconscout.com/3d/premium/thumb/southeast-asian-man-avatar-10971676-8779388.png?f=webp",
  },
];

interface CustomerReviewProps {
  name: string;
  avatarSrc: string;
  review: string;
  rating: number;
}

const CustomerReviewCard = ({
  name,
  avatarSrc,
  review,
  rating,
}: CustomerReviewProps) => {
  return (
    <Card className="size-full hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-primary/20 group">
      <CardHeader className="flex flex-row items-center gap-4 pb-3">
        <div className="relative">
          <Avatar className="ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
            <AvatarImage src={avatarSrc} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-0.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900">{name}</h3>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-all duration-300 ${
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <svg className="absolute -top-2 -left-1 w-8 h-8 text-primary/10" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z" />
          </svg>
          <p className="text-[13px] sm:text-base text-gray-700 leading-relaxed relative z-10 pl-6">
            {review}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
export default function CustomerReview() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));
  return (
    <section className="container mx-auto mt-[80px] px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Chia sẻ của khách hàng
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Những trải nghiệm thực tế từ khách hàng đã sử dụng dịch vụ
        </p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full [&>div]:p-1"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {customerReviewData.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <CustomerReviewCard
                avatarSrc={item.avatarSrc}
                name={item.name}
                rating={item.rating}
                review={item.review}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

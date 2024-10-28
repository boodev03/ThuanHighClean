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
    <Card className="size-full">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
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
        <p className="text-gray-600 tracking-[0.5px]">{review}</p>
      </CardContent>
    </Card>
  );
};
export default function CustomerReview() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px]  max-w-[70%] text-[#333] font-bold mb-10">
        Chia sẻ của khách hàng
      </h2>
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

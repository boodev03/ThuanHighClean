import { Service } from "@/types/Service";

export const services: Service[] = [
  {
    name: "Vệ sinh công nghiệp",
    coverImage: "/assets/images/service-detail/clean-sofa.jpg",
    description:
      "Vệ sinh công nghiệp là dịch vụ làm sạch chuyên sâu cho các không gian như văn phòng, nhà xưởng, trung tâm thương mại... giúp loại bỏ bụi bẩn, vi khuẩn, và các vết bẩn cứng đầu, đảm bảo môi trường sạch sẽ, an toàn và nâng cao chất lượng không gian sống và làm việc.",
    usageReasons: [
      "Đặt lịch dễ dàng, nhanh chóng",
      "Sử dụng thiết bị vệ sinh hiện đại, công nghệ tiên tiến",
      "Chất tẩy rửa an toàn, thân thiện với môi trường",
      "Quy trình vệ sinh chuẩn quốc tế, đảm bảo hiệu quả cao",
      "Giá cả minh bạch, rõ ràng, không phát sinh chi phí ẩn",
      "Đội ngũ nhân viên thân thiện, đào tạo bài bản và chuyên nghiệp",
      "Ngoài dịch vụ vệ sinh công nghiệp, còn tích hợp các dịch vụ như dọn dẹp văn phòng định kỳ, giặt thảm, ghế sofa, và nhiều dịch vụ tiện ích khác cho doanh nghiệp.",
    ],
    actualResult: [
      {
        image: "/assets/images/service_1.jpg",
        description: "Hình ảnh Sofa trước và sau khi sử dụng dịch vụ",
      },
      {
        image: "/assets/images/service_2.jpg",
        description: "Hình ảnh Nệm trước và sau khi sử dụng dịch vụ",
      },
    ],
    processStage: [
      {
        title: "Vệ sinh công nghiệp",
        step: [
          "◆ Kiểm tra khu vực cần vệ sinh và xác nhận yêu cầu từ khách hàng.",
          "◆ Phân loại khu vực cần làm sạch và lập kế hoạch vệ sinh.",
          "◆ Sử dụng thiết bị chuyên dụng để làm sạch bụi bẩn, rác thải, và các vật cản.",
          "◆ Dùng chất tẩy rửa phù hợp để vệ sinh các bề mặt, sàn nhà, cửa sổ, và các thiết bị.",
          "◆ Phun khử trùng toàn bộ khu vực để loại bỏ vi khuẩn và mầm bệnh.",
          "◆ Kiểm tra kỹ lưỡng sau khi vệ sinh để đảm bảo không còn bụi bẩn hay vết bẩn.",
          "◆ Bàn giao và nghiệm thu với khách hàng.",
        ],
      },
    ],

    slug: "ve-sinh-cong-nghiep",
  },
  {
    name: "Giặt nệm",
    coverImage: "/assets/images/service-detail/clean-sofa.jpg",
    description:
      "Giặt nệm giúp loại bỏ bụi bẩn, vi khuẩn, và các vết bẩn tích tụ lâu ngày, đảm bảo nệm luôn sạch sẽ, thơm tho, an toàn cho sức khỏe của gia đình bạn.",
    usageReasons: [
      "Đặt lịch giặt nhanh chóng, linh hoạt",
      "Máy móc giặt hiện đại, công nghệ tiên tiến",
      "Sử dụng dung dịch giặt an toàn, không gây kích ứng da",
      "Quy trình giặt đảm bảo khử khuẩn, loại bỏ nấm mốc",
      "Giá cả minh bạch, hợp lý",
      "Nhân viên giặt chuyên nghiệp, tận tâm",
      "Dịch vụ giặt nệm tại nhà, tiện lợi và tiết kiệm thời gian cho khách hàng",
    ],
    actualResult: [
      {
        image: "/assets/images/service_1.jpg",
        description: "Hình ảnh Sofa trước và sau khi sử dụng dịch vụ",
      },
      {
        image: "/assets/images/service_2.jpg",
        description: "Hình ảnh Nệm trước và sau khi sử dụng dịch vụ",
      },
    ],
    processStage: [
      {
        title: "Giặt nệm",
        step: [
          "◆ Kiểm tra tình trạng và ghi nhận yêu cầu từ khách hàng.",
          "◆ Hút bụi và làm sạch bề mặt nệm.",
          "◆ Phun dung dịch giặt chuyên dụng lên bề mặt nệm.",
          "◆ Sử dụng máy chà nhẹ để loại bỏ vết bẩn cứng đầu.",
          "◆ Dùng máy hút chuyên dụng để hút sạch dung dịch và chất bẩn.",
          "◆ Phun xả nước để loại bỏ hoàn toàn dung dịch giặt và hút khô.",
          "◆ Phun dung dịch khử khuẩn để diệt vi khuẩn và nấm mốc.",
          "◆ Đặt lại nệm vào vị trí ban đầu và kiểm tra lần cuối.",
          "◆ Bàn giao và nghiệm thu với khách hàng.",
        ],
      },
    ],

    slug: "giat-nem",
  },
  {
    name: "Giặt rèm cửa",
    coverImage: "/assets/images/service-detail/clean-sofa.jpg",
    description:
      "Giặt rèm cửa giúp loại bỏ bụi bẩn, phấn hoa và các tác nhân gây dị ứng, mang lại không gian sống trong lành và thoáng mát.",
    usageReasons: [
      "Dịch vụ giặt rèm tận nơi, không cần tháo dỡ",
      "Sử dụng dung dịch giặt chuyên dụng, không gây hại cho vải",
      "Máy móc giặt hiện đại, không làm hỏng rèm",
      "Quy trình giặt chuẩn quốc tế, đảm bảo an toàn sức khỏe",
      "Đặt lịch giặt rèm linh hoạt, nhanh chóng",
      "Nhân viên chuyên nghiệp, tận tình",
      "Ngoài giặt rèm, dịch vụ còn bao gồm làm sạch rèm, bảo quản và kéo dài tuổi thọ của rèm",
    ],
    actualResult: [
      {
        image: "/assets/images/service_1.jpg",
        description: "Hình ảnh Sofa trước và sau khi sử dụng dịch vụ",
      },
      {
        image: "/assets/images/service_2.jpg",
        description: "Hình ảnh Nệm trước và sau khi sử dụng dịch vụ",
      },
    ],
    processStage: [
      {
        title: "Giặt rèm cửa",
        step: [
          "◆ Kiểm tra rèm cửa và ghi nhận yêu cầu của khách hàng.",
          "◆ Sử dụng máy hút bụi để làm sạch bụi bám trên rèm.",
          "◆ Phun dung dịch giặt chuyên dụng phù hợp với loại vải rèm.",
          "◆ Sử dụng máy chà hoặc giặt nhẹ để loại bỏ các vết bẩn.",
          "◆ Dùng máy hút để hút sạch dung dịch giặt và bụi bẩn.",
          "◆ Phun xả nước để loại bỏ hoàn toàn hóa chất giặt và hút khô.",
          "◆ Kiểm tra và là ủi nhẹ để đảm bảo rèm sạch và không nhăn.",
          "◆ Đặt lại rèm về vị trí ban đầu.",
          "◆ Bàn giao và nghiệm thu với khách hàng.",
        ],
      },
    ],

    slug: "giat-rem-cua",
  },
  {
    name: "Tạp vụ văn phòng",
    coverImage: "/assets/images/service-detail/clean-sofa.jpg",
    description:
      "Dịch vụ tạp vụ văn phòng giúp đảm bảo không gian làm việc luôn sạch sẽ, ngăn nắp, nâng cao năng suất làm việc và hình ảnh chuyên nghiệp cho doanh nghiệp.",
    usageReasons: [
      "Dịch vụ tạp vụ định kỳ hoặc theo giờ, linh hoạt thời gian",
      "Sử dụng dụng cụ và chất tẩy rửa an toàn, chất lượng",
      "Đội ngũ nhân viên được đào tạo chuyên nghiệp, đáng tin cậy",
      "Quy trình vệ sinh rõ ràng, hiệu quả",
      "Giá cả cạnh tranh, phù hợp với mọi quy mô văn phòng",
      "Cung cấp thêm các dịch vụ như giặt thảm, giặt ghế, lau kính, và nhiều tiện ích khác",
      "Dịch vụ linh hoạt, dễ dàng điều chỉnh theo yêu cầu của khách hàng",
    ],
    actualResult: [
      {
        image: "/assets/images/service_1.jpg",
        description: "Hình ảnh Sofa trước và sau khi sử dụng dịch vụ",
      },
      {
        image: "/assets/images/service_2.jpg",
        description: "Hình ảnh Nệm trước và sau khi sử dụng dịch vụ",
      },
    ],
    processStage: [
      {
        title: "Tạp vụ văn phòng",
        step: [
          "◆ Kiểm tra khu vực cần vệ sinh và ghi nhận yêu cầu từ khách hàng.",
          "◆ Thu gom và xử lý rác thải trong văn phòng.",
          "◆ Làm sạch bàn làm việc, cửa sổ, sàn nhà, và các khu vực chung.",
          "◆ Phun khử trùng các khu vực tiếp xúc thường xuyên như tay nắm cửa, bàn phím.",
          "◆ Làm sạch nhà vệ sinh, bồn rửa tay và bổ sung các vật dụng cần thiết.",
          "◆ Đảm bảo không gian văn phòng gọn gàng và ngăn nắp.",
          "◆ Bàn giao và nghiệm thu với khách hàng.",
        ],
      },
    ],

    slug: "tap-vu-van-phong",
  },
  {
    name: "Giặt thảm văn phòng",
    coverImage: "/assets/images/service-detail/clean-sofa.jpg",
    description:
      "Giặt thảm văn phòng giúp loại bỏ bụi bẩn, vi khuẩn, và các vết bẩn cứng đầu, mang lại không gian làm việc sạch sẽ, chuyên nghiệp.",
    usageReasons: [
      "Sử dụng máy móc giặt thảm chuyên nghiệp, hiện đại",
      "Dung dịch giặt an toàn, không gây hại cho sức khỏe",
      "Quy trình giặt kỹ lưỡng, đảm bảo làm sạch sâu và khử khuẩn",
      "Giá cả hợp lý, minh bạch",
      "Đặt lịch giặt linh hoạt, tiện lợi cho khách hàng",
      "Nhân viên chuyên nghiệp, có kinh nghiệm xử lý các loại thảm khác nhau",
      "Ngoài giặt thảm, còn cung cấp dịch vụ bảo dưỡng và khử mùi thảm",
    ],

    actualResult: [
      {
        image: "/assets/images/service_1.jpg",
        description: "Hình ảnh Sofa trước và sau khi sử dụng dịch vụ",
      },
      {
        image: "/assets/images/service_2.jpg",
        description: "Hình ảnh Nệm trước và sau khi sử dụng dịch vụ",
      },
    ],
    processStage: [
      {
        title: "Giặt thảm văn phòng",
        step: [
          "◆ Kiểm tra thảm và xác nhận tình trạng từ khách hàng.",
          "◆ Sử dụng máy hút bụi để loại bỏ bụi bẩn trên bề mặt thảm.",
          "◆ Phun dung dịch giặt chuyên dụng phù hợp với loại thảm.",
          "◆ Dùng máy chà sàn để làm sạch sâu và loại bỏ các vết bẩn cứng đầu.",
          "◆ Dùng máy hút chuyên dụng để hút sạch dung dịch giặt và chất bẩn.",
          "◆ Phun xả nước để làm sạch hoàn toàn hóa chất giặt và hút khô.",
          "◆ Phun khử khuẩn để đảm bảo thảm không còn vi khuẩn và nấm mốc.",
          "◆ Kiểm tra lại và đảm bảo thảm khô ráo.",
          "◆ Bàn giao và nghiệm thu với khách hàng.",
        ],
      },
    ],

    slug: "giat-tham-van-phong",
  },
  {
    name: "Giặt ghế Sofa",
    coverImage: "/assets/images/service-detail/clean-sofa.jpg",
    description:
      "Giặt ghế sofa giúp loại bỏ bụi bẩn, vi khuẩn, nấm mốc và các vết bẩn cứng đầu, mang lại vẻ đẹp và độ bền cho ghế sofa của bạn.",
    usageReasons: [
      "Đặt lịch giặt dễ dàng, nhanh chóng",
      "Sử dụng công nghệ giặt khô và giặt ướt hiện đại",
      "Dung dịch làm sạch an toàn, không làm phai màu vải",
      "Quy trình giặt đảm bảo không làm hỏng cấu trúc của ghế",
      "Giá cả minh bạch, không phát sinh chi phí",
      "Nhân viên giặt chuyên nghiệp, tận tâm và kỹ lưỡng",
      "Dịch vụ tại nhà, tiện lợi cho khách hàng, tiết kiệm thời gian",
    ],
    actualResult: [
      {
        image: "/assets/images/service_1.jpg",
        description: "Hình ảnh Sofa trước và sau khi sử dụng dịch vụ",
      },
      {
        image: "/assets/images/service_2.jpg",
        description: "Hình ảnh Nệm trước và sau khi sử dụng dịch vụ",
      },
    ],
    processStage: [
      {
        title: "Sofa",
        step: [
          "◆ Kiểm tra tình trạng, số lượng. Xác nhận đơn hàng.",
          "◆ Hút bụi trên mặt ghế, các kẽ ghế bằng máy hút chuyên dụng.",
          "◆ Phun dung dịch làm sạch chuyên dụng lên bề mặt ghế sofa.",
          "◆ Sử dụng máy chà cầm tay chuyên dụng loại bỏ các vết ố bẩn bám trên mặt ghế.",
          "◆ Dùng máy hút chuyên dụng hút sạch chất bẩn và dung dịch hóa chất bám trên bề mặt sau khi được làm sạch.",
          "◆ Phun xả lại 1 lần nước để loại bỏ hoàn toàn dung dịch hóa chất tẩy. Hút khô.",
          "◆ Phun khử khuẩn hơi nước nóng lên sofa với dung dịch Cloramin B.",
          "◆ Phun thêm chất dưỡng ẩm bóng da đối với sản phẩm bằng da.",
          "◆ Vệ sinh, lau khô sàn nhà và sắp xếp lại bàn ghế về vị trí cũ.",
          "◆ Bàn giao và nghiệm thu với khách hàng.",
        ],
      },
    ],
    slug: "giat-ghe-sofa",
  },
];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};

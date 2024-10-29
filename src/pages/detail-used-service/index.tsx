import { getCusomterUsedById } from "@/data/customerUsed";
import { useParams } from "react-router-dom";

const actualResult = [
  {
    image: "/assets/images/service_1.jpg",
    description: "Hình ảnh Sofa trước và sau khi sử dụng dịch vụ",
  },
  {
    image: "/assets/images/service_2.jpg",
    description: "Hình ảnh Nệm trước và sau khi sử dụng dịch vụ",
  },
];

export default function DetailUsedService() {
  const { slug } = useParams();
  const customer = slug ? getCusomterUsedById(+slug as number) : undefined;
  return (
    <section className="container mx-auto my-[60px]">
      <h2 className="text-[32px]  max-w-[70%] font-bold text-[#333]">
        Dịch vụ sử dụng: {customer?.serviceName}
      </h2>
      <div className="max-w-[50%] space-y-3 mt-3 *:font-medium">
        <p>Khách hàng: {customer?.name}</p>
        <p>Địa chỉ: {customer?.address}</p>
        <p>Review: {customer?.review}</p>
      </div>

      <div className="space-y-12 mt-12">
        <h2 className="text-[32px] max-w-[70%] text-[#333] font-bold mb-10">
          Hình ảnh thực tế
        </h2>
        {actualResult.map((item, index) => (
          <div key={index} className="max-w-[50%] mx-auto">
            <img src={item.image} alt={item.image} />
            <span className="block text-center italic mt-2">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

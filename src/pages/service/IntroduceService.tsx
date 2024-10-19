import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";
import { Check } from "lucide-react";
import { useParams } from "react-router-dom";

export default function IntroduceService() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px] text-[#333] font-bold mb-10 lg:max-w-[50%]">
        Tại sao nên chọn dịch vụ {service?.name} của{" "}
        <span className="text-primary font-bold">Thuan High Clean</span>?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
        <div>
          <img src={service?.coverImage} alt="sofa-clean" />
        </div>

        <div>
          <ul className="space-y-3">
            {service &&
              service.usageReasons.map((item, index) => (
                <li key={index} className="flex items-center gap-[6px]">
                  <Check color="#FF8228" strokeWidth={3} className="shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            <li className="!mt-5">
              <Button>Trải nghiệm dịch vụ ngay !</Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

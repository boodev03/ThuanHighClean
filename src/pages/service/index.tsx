import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";
import IntroduceService from "./IntroduceService";
import ProcessStage from "./ProcessStage";
import "./styles.css";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);

  return (
    <div>
      <div className="relative">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${service?.coverImage})`,
          }}
        />
        <div className="absolute top-1/2 max-w-[550px] left-1/4 -translate-x-1/2 -translate-y-1/2">
          <p className="text-shadow text-[#F5F5F5] text-[40px] font-bold">
            {service?.name}
          </p>
          <p className="text-shadow text-white font-bold mb-4">
            {service?.description}
          </p>
          <Button>Trải nghiệm dịch vụ</Button>
        </div>
      </div>
      <div className="container mx-auto">
        <IntroduceService />
      </div>
      <ProcessStage />
    </div>
  );
}

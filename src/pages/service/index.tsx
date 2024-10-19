import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IntroduceService from "./IntroduceService";
import ProcessStage from "./ProcessStage";
import "./styles.css";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);

  useEffect(() => {
    document.title = `Thuan High Clean | ${service?.name}`;
  }, [service]);
  return (
    <div className="mb-[60px]">
      <div className="relative">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${service?.coverImage})`,
          }}
        />
        <div className="px-3 lg:px-0 lg:absolute lg:top-1/2 lg:max-w-[550px] lg:left-1/4 lg:-translate-x-1/4 lg:-translate-y-1/2">
          <p className="lg:text-shadow lg:text-[#F5F5F5] text-[40px] font-bold my-4 lg:my-0">
            {service?.name}
          </p>
          <p className="lg:text-shadow lg:text-white font-semibold lg:font-bold mb-4">
            {service?.description}
          </p>
          <Button className="font-bold shadow-none">
            Trải nghiệm dịch vụ ngay !
          </Button>
        </div>
      </div>
      <div className="container mx-auto">
        <IntroduceService />
      </div>
      <ProcessStage />
    </div>
  );
}

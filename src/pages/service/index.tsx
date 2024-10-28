import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AdditionContent from "./AdditonContent";
import Advantages from "./Advantages";
import BeforePriceContent from "./BeforePriceContent";
import IntroduceService from "./IntroduceService";
import Note from "./Note";
import PriceTable from "./PriceTable";
import Process from "./Process";
import Question from "./Question";
import "./styles.css";
import AdditionService from "./AdditionService";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);

  useEffect(() => {
    document.title = `Thuan High Clean | ${service?.name}`;
  }, [service]);

  if (!service) return;

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
          <p className="lg:[text-shadow:_0_0_10px_rgba(0_0_0_/_0.5)] lg:text-[#F5F5F5] text-[40px] font-bold my-4 lg:my-0">
            {service?.name}
          </p>
          <Button className="font-bold shadow-none mt-8">
            Trải nghiệm dịch vụ ngay !
          </Button>
        </div>
      </div>
      <div className="space-y-10 mt-[60px]">
        <IntroduceService title={service?.title} description={service?.description} />
        <BeforePriceContent />
        <PriceTable priceTable={service.priceTable}/>
        <Note />
        <Process />
        {service.additionContent && <AdditionContent additionContent={service.additionContent} />}
        <Advantages />
        <Question title={service.questions?.title || ''} content={service.questions?.content || ''}/>
        <AdditionService />
        <p className="container mx-auto space-y-2 flex flex-col mt-10 text-secondary">
          <span>
            MỌI CHI TIẾT XIN LIÊN HỆ: <br />
            Địa Chỉ : 46 đường 26, P.Hiệp Bình Chánh, Tp.HCM
          </span>
          <span>
            Website:{" "}
            <Link to="/" className="text-primary">
              https://thuanhighclean.com
            </Link>{" "}
          </span>
          <span>Gmail: thuanhighclean@gmail.com </span>
          <span>Điện thoại: 0357 111 566</span>
        </p>
      </div>
      {/* <ProcessStage /> */}
    </div>
  );
}

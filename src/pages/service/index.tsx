import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import IntroduceService from "./IntroduceService";
import PriceTable from "./PriceTable";
import Note from "./Note";
import Process from "./Process";
import Advantages from "./Advantages";

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
          <Button className="font-bold shadow-none">
            Trải nghiệm dịch vụ ngay !
          </Button>
        </div>
      </div>
      <div>
        <IntroduceService />
        <PriceTable />
        <Note />
        <Process />
        <Advantages />
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

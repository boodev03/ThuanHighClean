import { getServiceBySlug } from "@/data/services";
import { Link, useParams } from "react-router-dom";
import AdditionService from "./AdditionService";
import AdditionContent from "./AdditonContent";
import Advantages from "./Advantages";
import BeforePriceContent from "./BeforePriceContent";
import IntroduceService from "./IntroduceService";
import Note from "./Note";
import PriceTable from "./PriceTable";
import Process from "./Process";
import Question from "./Question";
import "./styles.css";
import SEOConfig from "@/components/SEO";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);

  if (!service) return;

  return (
    <>
      {service.seo && (
        <SEOConfig
          title={service.seo.title}
          description={service.seo.description}
          keywords={service.seo.keywords}
        />
      )}
      <div className="mb-[60px]">
        <div className="space-y-10 mt-[60px]">
          <IntroduceService
            title={service?.title}
            description={service?.description}
            descriptionImage={service.descriptionImage}
            additionImages={service.additionImages}
          />
          <PriceTable priceTable={service.priceTable} />
          <BeforePriceContent />
          <Note />
          <Process process={service.process} />
          {service.additionContent && (
            <AdditionContent additionContent={service.additionContent} />
          )}
          <Advantages />
          <Question
            title={service.questions?.title || ""}
            content={service.questions?.content || ""}
          />
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
    </>
  );
}

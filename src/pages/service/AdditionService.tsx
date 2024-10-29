import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";
import IntroduceService from "./IntroduceService";
import PriceTable from "./PriceTable";
import AdditionContent from "./AdditonContent";
import Question from "./Question";

export default function AdditionService() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);

  if (!service || !service.additionalService) return;

  return (
    <div className="space-y-10 mt-[60px]">
      <IntroduceService
        title={service.additionalService.title || ""}
        description={service.additionalService.description || ""}
      />
      <PriceTable priceTable={service.additionalService.priceTable || []} />
      {service.additionalService.additionContent && <AdditionContent additionContent={service.additionalService.additionContent} />}
      <Question title={service.additionalService.questions?.title || ''} content={service.additionalService.questions?.content || ""} />
    </div>
  );
}

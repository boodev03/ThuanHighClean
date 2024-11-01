import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";

export default function AdditionAfterProcess() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <div
    dangerouslySetInnerHTML={{ __html: service?.process.addition || "" }}
    className="lg:text-shadow lg:text-secondary text-justify mb-4 space-y-5"
  />
  );
}

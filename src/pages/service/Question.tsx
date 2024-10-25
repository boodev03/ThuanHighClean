import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";
import servicesJson from "../../data/services.json";
import { Service } from "@/types/Service";

const services: Service[] = servicesJson.services;
export default function Question() {
  const { slug } = useParams();
  const service = getServiceBySlug(services, slug as string);
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px] text-primary font-bold mb-5">
        {service?.questions?.title}
      </h2>

      <div
        dangerouslySetInnerHTML={{ __html: service?.questions?.content || "" }}
        className="lg:text-shadow lg:text-secondary mb-4 space-y-3"
      />
    </section>
  );
}

import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";
import servicesJson from "../../data/services.json";
import { Service } from "@/types/Service";

const services: Service[] = servicesJson.services;
export default function Note() {
  const { slug } = useParams();
  const service = getServiceBySlug(services, slug as string);
  return (
    <section className="container mx-auto mt-10">
      <p
        dangerouslySetInnerHTML={{ __html: service?.note || "" }}
        className="lg:text-shadow lg:text-secondary mb-4"
      />
    </section>
  );
}

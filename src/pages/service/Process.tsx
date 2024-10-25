import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";
import servicesJson from "../../data/services.json";
import { Service } from "@/types/Service";

const services: Service[] = servicesJson.services;
export default function Process() {
  const { slug } = useParams();
  const service = getServiceBySlug(services, slug as string);
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px] text-primary font-bold mb-5">
        {service?.process.title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: service?.process.description || "" }}
        className="lg:text-shadow lg:text-secondary mb-4"
      />
      <div>
        <ul>
          {service?.process.steps.map((step, index) => (
            <li key={index} className="space-y-">
              <h3 className="text-[24px] font-bold text-black mt-5">
                {step.step}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: step.description || "" }}
                className="lg:text-shadow lg:text-secondary space-y-2"
              />
            </li>
          ))}
        </ul>

        <p
          dangerouslySetInnerHTML={{ __html: service?.process.note || "" }}
          className="lg:text-shadow lg:text-secondary mt-5"
        />
      </div>
    </section>
  );
}

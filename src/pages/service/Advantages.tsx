import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";

export default function Advantages() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <section className="container mx-auto">
      <h2 className="text-[32px] max-w-[100%]  md:max-w-[70%] text-primary font-bold mb-5">
        {service?.advantages.title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: service?.advantages.content || "" }}
        className="lg:text-shadow lg:text-secondary text-justify mb-4 space-y-3"
      />
    </section>
  );
}

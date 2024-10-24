import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";

export default function Advantages() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px] text-primary font-bold mb-10">
        {service?.advantages.title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: service?.advantages.content || "" }}
        className="lg:text-shadow lg:text-secondary mb-4 space-y-3"
      />
    </section>
  );
}
